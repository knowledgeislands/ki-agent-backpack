import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import type { AuditOutcome } from '../../shared/rubric.ts'
import {
  CHANGE_WORD_LIMIT,
  changeTidy,
  folderOutcomes,
  packageStray,
  sectionText,
  unlinkedChanges,
  workLayout
} from './work-package-layout.ts'

const roots: string[] = []

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

const fixture = (): string => {
  const root = mkdtempSync(join(tmpdir(), 'ki-work-package-'))
  roots.push(root)
  return root
}

const write = (root: string, path: string, text: string): string => {
  const file = join(root, path)
  mkdirSync(join(file, '..'), { recursive: true })
  writeFileSync(file, text)
  return file
}

const PACKAGE = join('work', 'ki', 'ki.pilot')

const statuses = (outcomes: readonly AuditOutcome[]): string[] =>
  outcomes.map((outcome) => (outcome.status === 'VIOLATION' ? (outcome.level ?? 'VIOLATION') : outcome.status))

const index = (changes: readonly string[], state = 'with-worker'): string =>
  `---\nki-id: ki.pilot\nki-state: ${state}\n---\n# ki.pilot\n\n## Now\n\nNone\n\n## Changes\n\n${
    changes.length > 0 ? changes.map((target) => `- [${target}](${target}) - in hand.`).join('\n') : 'None'
  }\n`

/** A package with one change document and the given links. */
const pkg = (root: string, changes: readonly string[] = ['10-pilot.change.md'], state?: string): string => {
  write(root, join(PACKAGE, '_index.md'), index(changes, state))
  write(root, join(PACKAGE, '10-pilot.change.md'), '# Pilot\n')
  return join(root, PACKAGE)
}

describe('the layout under work/', () => {
  test('is absent without `work/`', () => {
    expect(workLayout(fixture())).toBeUndefined()
  })

  test('finds packages and their sub-packages, each with the id its place gives it', () => {
    const root = fixture()
    pkg(root, ['10-pilot.change.md', 'viewer/'])
    write(root, join(PACKAGE, 'viewer', '_index.md'), '# ki.pilot+viewer\n')
    write(root, join(PACKAGE, 'viewer', 'deep', '_index.md'), '# ki.pilot+viewer+deep\n')
    const layout = workLayout(root)
    expect(layout?.violations).toEqual([])
    expect(layout?.packages.map((folder) => [folder.subject, folder.expectedId, folder.territory])).toEqual([
      ['work/ki/ki.pilot', 'ki.pilot', 'ki'],
      ['work/ki/ki.pilot/viewer', 'ki.pilot+viewer', 'ki'],
      ['work/ki/ki.pilot/viewer/deep', 'ki.pilot+viewer+deep', 'ki']
    ])
  })

  test('a territory folder not named by a kebab slug fails', () => {
    const root = fixture()
    write(root, join('work', 'KI_Main', 'ki.pilot', '_index.md'), '# ki.pilot\n')
    expect(workLayout(root)?.violations.map((outcome) => outcome.subject)).toEqual(['work/KI_Main'])
  })
})

describe('FOLDER-1 closed list', () => {
  test('a package holding only its closed list passes', () => {
    const root = fixture()
    pkg(root)
    expect(statuses(folderOutcomes(root).closed)).toEqual(['PASS'])
  })

  test('the retired package files and folders fail', () => {
    const root = fixture()
    const folder = pkg(root)
    for (const name of ['state.md', 'decisions.md', 'discussions.md', 'messages.md', 'notes.md', '1-bad.change.md'])
      write(root, join(PACKAGE, name), '# x\n')
    for (const name of ['reports/run.report.md', 'pilot/run.brief.md', 'findings/TAG.md', 'scratch/x.txt'])
      write(root, join(PACKAGE, name), '# x\n')
    expect(packageStray(folder)).toEqual([
      '1-bad.change.md',
      'decisions.md',
      'discussions.md',
      'findings/',
      'messages.md',
      'notes.md',
      'pilot/',
      'reports/',
      'scratch/',
      'state.md'
    ])
    expect(statuses(folderOutcomes(root).closed)).toEqual(['VIOLATION'])
  })

  test('a sub-package without a change document fails', () => {
    const root = fixture()
    pkg(root, ['10-pilot.change.md', 'viewer/'])
    write(root, join(PACKAGE, 'viewer', '_index.md'), '# ki.pilot.viewer\n\n## Changes\n\nNone\n')
    const outcomes = folderOutcomes(root).closed
    expect(outcomes.map((outcome) => outcome.subject)).toEqual(['work/ki/ki.pilot/viewer'])
    expect(outcomes[0]?.message).toContain('one or more change documents')
  })
})

describe('FOLDER-8 Changes links', () => {
  test('every change document and sub-package linked passes', () => {
    const root = fixture()
    pkg(root, ['10-pilot.change.md', './viewer/_index.md#goals'])
    write(root, join(PACKAGE, 'viewer', '_index.md'), '# v\n\n## Changes\n\n- [10](10-viewer.change.md)\n')
    write(root, join(PACKAGE, 'viewer', '10-viewer.change.md'), '# Viewer\n')
    expect(statuses(folderOutcomes(root).changes)).toEqual(['PASS'])
  })

  test('an unlinked change document or sub-package fails', () => {
    const root = fixture()
    const folder = pkg(root, [])
    write(root, join(PACKAGE, '20-more.change.md'), '# More\n')
    write(root, join(PACKAGE, 'viewer', '_index.md'), '# v\n\n## Changes\n\n- [10](10-viewer.change.md)\n')
    write(root, join(PACKAGE, 'viewer', '10-viewer.change.md'), '# Viewer\n')
    expect(unlinkedChanges(folder)).toEqual(['10-pilot.change.md', '20-more.change.md', 'viewer/'])
    expect(statuses(folderOutcomes(root).changes)).toEqual(['VIOLATION'])
  })

  test('a link outside the Changes section does not count', () => {
    const root = fixture()
    const folder = pkg(root, [])
    write(
      root,
      join(PACKAGE, '_index.md'),
      '# ki.pilot\n\n## Now\n\n- [10](10-pilot.change.md)\n\n## Changes\n\nNone\n'
    )
    expect(unlinkedChanges(folder)).toEqual(['10-pilot.change.md'])
  })

  test('sectionText reads a section up to the next H2', () => {
    expect(sectionText('# a\n\n## Now\n\nx\n\n### Deep\n\ny\n\n## Held\n\nz\n', 'Now')).toBe(
      '\n\nx\n\n### Deep\n\ny\n\n'
    )
    expect(sectionText('# a\n', 'Now')).toBeUndefined()
  })
})

describe('FOLDER-4 finished packages', () => {
  test("a finished work's package is due for close-out", () => {
    const root = fixture()
    pkg(root, undefined, 'finished')
    expect(folderOutcomes(root).finished.map((outcome) => outcome.subject)).toEqual(['work/ki/ki.pilot'])
  })

  test('live work passes', () => {
    const root = fixture()
    pkg(root)
    expect(statuses(folderOutcomes(root).finished)).toEqual(['PASS'])
  })
})

describe('FOLDER-9 change documents due a tidy', () => {
  const words = (count: number): string => Array.from({ length: count }, (_, index) => `word${index}`).join(' ')
  const change = (root: string, text: string): string => write(root, join(PACKAGE, '10-pilot.change.md'), text)

  test('a change document at the limit passes', () => {
    const root = fixture()
    pkg(root)
    const file = change(root, `# Pilot\n\n${words(CHANGE_WORD_LIMIT - 1)}\n`)
    expect(changeTidy(file).words).toBe(CHANGE_WORD_LIMIT)
    expect(statuses(folderOutcomes(root).tidy)).toEqual(['PASS'])
  })

  test('a change document over the limit is warned for a tidy', () => {
    const root = fixture()
    pkg(root)
    change(root, `# Pilot\n\n${words(CHANGE_WORD_LIMIT)}\n`)
    const outcomes = folderOutcomes(root).tidy
    expect(statuses(outcomes)).toEqual(['VIOLATION'])
    expect(outcomes[0]?.subject).toBe('work/ki/ki.pilot/10-pilot.change.md')
    expect(outcomes[0]?.message).toContain('runs to 1,501 words, past about 1,500')
    expect(outcomes[0]?.message).toContain('apply each decided point to the outline or Steps and remove it')
    expect(outcomes[0]?.message).toContain('delete the document once its work has landed')
  })

  test('front matter, fenced code, comments, link targets and table rules are not counted', () => {
    const root = fixture()
    pkg(root)
    const file = change(
      root,
      `---\nki-title: ${words(2000)}\n---\n# Pilot\n\n\`\`\`text\n${words(2000)}\n\`\`\`\n\n<!-- ${words(2000)} -->\n\n| A | B |\n| --- | --- |\n| one | [two](https://example.com/a/b) |\n`
    )
    expect(changeTidy(file).words).toBe(5)
    expect(statuses(folderOutcomes(root).tidy)).toEqual(['PASS'])
  })

  test('a Decided heading at level 2 or 3 is warned, whatever its number or what follows it', () => {
    const root = fixture()
    pkg(root)
    const file = change(
      root,
      '# Pilot\n\n## Decided\n\nx\n\n## 7. Open\n\n### 7.4 Decided on 24 November\n\ny\n\n### **Decided** points\n'
    )
    expect(changeTidy(file).decided).toEqual(['Decided', '7.4 Decided on 24 November', '**Decided** points'])
    const outcomes = folderOutcomes(root).tidy
    expect(statuses(outcomes)).toEqual(['VIOLATION'])
    expect(outcomes[0]?.message).toContain('holds a Decided section ("Decided", ')
  })

  test('a Decisions heading, Decided in running text or a heading in a code block is not warned', () => {
    const root = fixture()
    pkg(root)
    const file = change(
      root,
      '# Pilot\n\n## Decisions\n\nDecided points go to Steps.\n\n### Decidedly open\n\n```md\n## Decided\n```\n'
    )
    expect(changeTidy(file).decided).toEqual([])
    expect(statuses(folderOutcomes(root).tidy)).toEqual(['PASS'])
  })

  test("a sub-package's change documents are read too", () => {
    const root = fixture()
    pkg(root, ['10-pilot.change.md', 'viewer/'])
    write(root, join(PACKAGE, 'viewer', '_index.md'), '# v\n\n## Changes\n\n- [10](10-viewer.change.md)\n')
    write(root, join(PACKAGE, 'viewer', '10-viewer.change.md'), '# Viewer\n\n## Decided\n')
    expect(folderOutcomes(root).tidy.map((outcome) => outcome.subject)).toEqual([
      'work/ki/ki.pilot/viewer/10-viewer.change.md'
    ])
  })
})
