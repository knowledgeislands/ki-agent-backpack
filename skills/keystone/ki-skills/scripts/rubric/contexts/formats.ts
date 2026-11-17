import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import type { ParsedFrontmatter } from './frontmatter.ts'

/** The type words of a skill's own files, each with its format standard, `standard-formats-<word>.md`, beside this rubric. */
export const SKILL_FILE_WORDS = ['skill', 'mode', 'exemplars', 'rubric'] as const
export type SkillFileWord = (typeof SKILL_FILE_WORDS)[number]

/** One skill file the skill formats cover, and the `ki-document-type` its front matter writes, if any. */
export type SkillFileFormatEvidence = {
  /** Relative to the skill's directory, as `references/mode-audit.md`. */
  path: string
  word: SkillFileWord
  documentType?: string
}

export type SkillFormatsRubricContext = {
  /** The formats are a convention of the `ki-*` set, as the reference vocabulary is. */
  knowledgeIslandsSkill: boolean
  files: readonly SkillFileFormatEvidence[]
  /** Each skill file format's current version, its standard's `ki-revised`, keyed by type word. */
  standards: ReadonlyMap<string, string>
  /** Whether `ki-document-type` is the field after `name` in `SKILL.md`; absent when it is missing. */
  documentTypeFollowsName?: boolean
  /** `SKILL.md`'s KI fields written without the `ki-` prefix, read under their `ki-` names. */
  unprefixed: readonly string[]
  /** `SKILL.md`'s top-level fields that neither the specification, a runtime nor Knowledge Islands defines. */
  unknown: readonly string[]
}

/** The format standards that sit beside this rubric, in `ki-skills`' own `references/`. */
export const SKILL_FORMAT_STANDARDS_DIRECTORY = resolve(import.meta.dir, '../../../references')

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/
const field = (frontmatter: string, name: string): string | undefined =>
  new RegExp(`^${name}:[ \\t]*(.*?)[ \\t]*$`, 'm').exec(frontmatter)?.[1]?.replace(/^(['"])(.*)\1$/, '$2')

export const inspectSkillFormatStandards = (
  directory: string = SKILL_FORMAT_STANDARDS_DIRECTORY
): ReadonlyMap<string, string> => {
  const standards = new Map<string, string>()
  for (const word of SKILL_FILE_WORDS) {
    const path = join(directory, `standard-formats-${word}.md`)
    if (!existsSync(path)) continue
    const revised = field(FRONTMATTER.exec(readFileSync(path, 'utf8'))?.[1] ?? '', 'ki-revised')
    if (revised) standards.set(word, revised)
  }
  return standards
}

/**
 * The fields the Agent Skills specification defines, and those a runtime adds, which keep their own names (KI-PREFIX a,
 * Kris, 17 November 2026); the list follows the Agent Skills standard's 4.3.5.
 */
export const SPECIFICATION_FIELDS: ReadonlySet<string> = new Set([
  'name',
  'description',
  'license',
  'compatibility',
  'metadata',
  'allowed-tools',
  'disallowed-tools',
  'disable-model-invocation',
  'user-invocable',
  'context',
  'agent',
  'paths',
  'model',
  'effort',
  'when_to_use',
  'argument-hint',
  'arguments',
  'background',
  'hooks',
  'shell'
])

/** KI fields older skills write without the prefix, read under their `ki-` names while the skills are swept. */
export const OLDER_KI_FIELDS: ReadonlySet<string> = new Set(['owns', 'contributes', 'requires'])

/** A KI field read under its `ki-` name, or, while the skills are swept, under its older bare name. */
export const kiSkillField = (frontmatter: ParsedFrontmatter, name: string): string | undefined =>
  frontmatter.keys.get(`ki-${name}`) ?? frontmatter.keys.get(name)

const documentTypeOf = (path: string): string | undefined => {
  const frontmatter = FRONTMATTER.exec(readFileSync(path, 'utf8'))?.[1]
  return frontmatter === undefined ? undefined : field(frontmatter, 'ki-document-type')
}

/** The skill files of one skill, and what each writes in `ki-document-type`. */
export const inspectSkillFormats = (
  directory: string,
  skillContent: string,
  frontmatter: ParsedFrontmatter,
  knowledgeIslandsSkill: boolean,
  standards: ReadonlyMap<string, string> = inspectSkillFormatStandards()
): SkillFormatsRubricContext => {
  const references = join(directory, 'references')
  const referenceFiles = existsSync(references)
    ? readdirSync(references, { withFileTypes: true })
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name)
        .sort()
    : []
  const wordOf = (name: string): SkillFileWord | undefined =>
    /^mode-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(name)
      ? 'mode'
      : name === 'exemplars.md'
        ? 'exemplars'
        : name === 'rubric.md'
          ? 'rubric'
          : undefined
  const skillDocumentType = frontmatter.keys.get('ki-document-type')
  const files: SkillFileFormatEvidence[] = [
    { path: 'SKILL.md', word: 'skill', ...(skillDocumentType ? { documentType: skillDocumentType } : {}) },
    ...referenceFiles.flatMap((name) => {
      const word = wordOf(name)
      if (!word) return []
      const documentType = documentTypeOf(join(references, name))
      return [{ path: `references/${name}`, word, ...(documentType ? { documentType } : {}) }]
    })
  ]
  const keys = [...(FRONTMATTER.exec(skillContent)?.[1] ?? '').matchAll(/^([A-Za-z0-9_-]+):/gm)].map(
    (match) => match[1] ?? ''
  )
  return {
    knowledgeIslandsSkill,
    files,
    standards,
    ...(skillDocumentType ? { documentTypeFollowsName: keys[0] === 'name' && keys[1] === 'ki-document-type' } : {}),
    unprefixed: keys.filter((key) => OLDER_KI_FIELDS.has(key)),
    unknown: keys.filter((key) => !key.startsWith('ki-') && !SPECIFICATION_FIELDS.has(key) && !OLDER_KI_FIELDS.has(key))
  }
}
