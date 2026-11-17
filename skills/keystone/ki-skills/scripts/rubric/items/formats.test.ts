import { afterEach, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import type { AuditOutcome, RubricItem } from '../../shared/rubric.ts'
import {
  inspectSkillFormatStandards,
  inspectSkillFormats,
  type SkillFormatsRubricContext
} from '../contexts/formats.ts'
import { parseFrontmatter } from '../contexts/frontmatter.ts'
import { SKILL_FORMATS } from './formats.ts'

const T = '2026-11-17T01:00:00Z'
const OLD = '2026-11-01T00:00:00Z'
const standards = new Map([
  ['skill', T],
  ['mode', T],
  ['exemplars', T],
  ['rubric', T]
])
const roots: string[] = []
afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

const item = (code: string) =>
  SKILL_FORMATS.items.find((candidate) => candidate.code === code) as RubricItem<SkillFormatsRubricContext>
const audit = (code: string, context: SkillFormatsRubricContext): readonly AuditOutcome[] => {
  const run = item(code).mechanical?.audit.run
  if (!run) throw new Error(`${code} has no mechanical audit`)
  return run(context) as readonly AuditOutcome[]
}

const skill = (skillMd: string, references: Record<string, string> = {}) => {
  const root = mkdtempSync(join(tmpdir(), 'skill-formats-'))
  roots.push(root)
  writeFileSync(join(root, 'SKILL.md'), skillMd)
  mkdirSync(join(root, 'references'))
  for (const [name, content] of Object.entries(references)) writeFileSync(join(root, 'references', name), content)
  return inspectSkillFormats(root, skillMd, parseFrontmatter(skillMd), true, standards)
}

const typed = `---\nname: ki-example\nki-document-type: skill@${T}\nki-kind: process\ndescription: An example.\nargument-hint: 'help'\n---\n\n# Example\n`

test('the formats standards beside the rubric give each word its current version', () => {
  const found = inspectSkillFormatStandards()
  expect([...found.keys()].sort()).toEqual(['exemplars', 'mode', 'rubric', 'skill'])
})

test('a skill whose files all name their format at the current version passes', () => {
  const context = skill(typed, {
    'mode-audit.md': `---\nki-document-type: mode@${T}\n---\n\n# Mode AUDIT\n`,
    'exemplars.md': `---\nki-document-type: exemplars@${T}\n---\n\n# Exemplars\n`,
    'rubric.md': `---\nki-document-type: rubric@${T}\n---\n\n# Generated rubric\n`,
    'standard-example.md': '# Not a skill file\n'
  })
  expect(context.files.map((file) => file.path)).toEqual([
    'SKILL.md',
    'references/exemplars.md',
    'references/mode-audit.md',
    'references/rubric.md'
  ])
  for (const code of ['SKILL-FMT-1', 'SKILL-FMT-2', 'SKILL-FMT-3'])
    expect(audit(code, context).map((outcome) => outcome.status)).toEqual(['PASS'])
})

test('a missing, misplaced or wrong field warns', () => {
  const context = skill(`---\nname: ki-example\nki-kind: process\nki-document-type: mode@${T}\n---\n`, {
    'mode-audit.md': '# Mode AUDIT\n'
  })
  expect(audit('SKILL-FMT-1', context).map((outcome) => outcome.message)).toEqual([
    `SKILL.md names \`mode@${T}\`; its format is \`skill@<version>\``,
    'references/mode-audit.md has no `ki-document-type`; its format is `mode`',
    'SKILL.md: `ki-document-type` is not the field after `name`'
  ])
  expect(item('SKILL-FMT-1').mechanical?.level).toBe('WARN')
})

test('an older version is out of date', () => {
  const context = skill(typed.replace(T, OLD))
  expect(audit('SKILL-FMT-2', context).map((outcome) => outcome.message)).toEqual([
    `SKILL.md is out of date: follows skill@${OLD}, the format is now at ${T}`
  ])
})

test('the older bare KI fields and unknown fields warn, and the bare names are still read', () => {
  const context = skill(
    typed.replace('ki-kind: process\n', "ki-kind: process\nowns: []\ncontributes: ['.ki.toml']\nfoo: bar\n")
  )
  expect(audit('SKILL-FMT-3', context).map((outcome) => outcome.message)).toEqual([
    'SKILL.md: fields without the `ki-` prefix, read under their `ki-` names: owns, contributes',
    'SKILL.md: fields neither the specification, a runtime nor Knowledge Islands defines: foo'
  ])
})

test('a skill outside the ki-* set is not applicable', () => {
  const root = mkdtempSync(join(tmpdir(), 'skill-formats-'))
  roots.push(root)
  const content = '---\nname: other\n---\n'
  writeFileSync(join(root, 'SKILL.md'), content)
  const context = inspectSkillFormats(root, content, parseFrontmatter(content), false, standards)
  expect(audit('SKILL-FMT-1', context).map((outcome) => outcome.status)).toEqual(['NOT_APPLICABLE'])
})
