import { afterEach, expect, test } from 'bun:test'
import { spawnSync } from 'node:child_process'
import {
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createAuthoringSession, EDITORCONFIG_DEFAULT, RUMDL_DEFAULT } from '../contexts/authoring.ts'
import * as formatsModule from './formats.ts'
import catalogue, * as indexModule from './index.ts'
import * as markdownModule from './markdown.ts'
import * as ownedModule from './owned.ts'
import * as synchronisationModule from './sync.ts'
import * as tomlModule from './toml.ts'
import * as whitepapersModule from './whitepapers.ts'

const temporaryDirectories: string[] = []

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) rmSync(directory, { recursive: true, force: true })
})

const temporaryRepository = (): string => {
  const repository = mkdtempSync(join(tmpdir(), 'ki-authoring-'))
  temporaryDirectories.push(repository)
  return repository
}

test('the default export is the sole catalogue entrypoint and families are complete modules', () => {
  expect(Object.keys(indexModule)).toEqual(['default'])
  expect(Object.keys(formatsModule)).toEqual(['FORMATS'])
  expect(Object.keys(markdownModule)).toEqual(['MARKDOWN'])
  expect(Object.keys(ownedModule)).toEqual(['OWNED'])
  expect(Object.keys(tomlModule)).toEqual(['TOML'])
  expect(Object.keys(whitepapersModule)).toEqual(['WHITEPAPERS'])
  expect(Object.keys(synchronisationModule)).toEqual(['SYNCHRONISATION'])
  expect(catalogue.families.map((family) => family.code)).toEqual(['RUBRIC', 'FMT', 'MD', 'OWN', 'TOML', 'WP', 'SYNC'])
  expect(
    catalogue.families
      .filter((family) => family.code !== 'RUBRIC')
      .flatMap((family) => family.items.map((item) => item.code))
  ).toEqual([
    'FMT-type',
    'FMT-prefix',
    'FMT-version',
    'FMT-record',
    'FMT-shape',
    'MD-mech',
    'MD-frontmatter',
    'MD-table',
    'MD-footnote',
    'MD-link',
    'MD-cell-prose',
    'MD-callout',
    'MD-hook',
    'OWN-1',
    'OWN-2',
    'TOML-values',
    'TOML-structure',
    'TOML-comments',
    'WP-argument',
    'WP-evidence',
    'WP-review',
    'SYNC-1'
  ])
})

test('the owned rumdl template enables MD005 and MD075 and prevents the standard-flavor MD056 destructive fix', () => {
  expect(RUMDL_DEFAULT).toContain('".git"')
  expect(RUMDL_DEFAULT).not.toMatch(/disable = \[[^\]]*"MD005"/)
  expect(RUMDL_DEFAULT).not.toMatch(/disable = \[[^\]]*"MD075"/)
  expect(RUMDL_DEFAULT).not.toMatch(/disable = \[[^\]]*"MD056"/)
  expect(RUMDL_DEFAULT).toContain('unfixable = ["MD056"]')
})

test('rumdl leaves valid list-nested blockquotes unchanged with the canonical template', () => {
  const repository = temporaryRepository()
  const configuration = join(repository, 'rumdl.toml')
  const markdown = join(repository, 'fixture.md')
  const contents =
    '# Fixture\n\n1. Item\n\n   > Quoted content:\n   >\n   > 1. First nested point\n   > 2. Second nested point\n'
  writeFileSync(configuration, RUMDL_DEFAULT)
  writeFileSync(markdown, contents)

  const result = spawnSync('bunx', ['rumdl', 'check', '--config', configuration, '--fix', markdown], {
    encoding: 'utf8'
  })

  expect(result.status).toBe(0)
  expect(readFileSync(markdown, 'utf8')).toBe(contents)
})

test('rumdl leaves pipe rows after a blockquote unchanged with the canonical template', () => {
  const repository = temporaryRepository()
  const configuration = join(repository, 'rumdl.toml')
  const markdown = join(repository, 'fixture.md')
  const contents =
    '# Fixture\n\n> | Type | Meaning |\n> | --- | --- |\n> | `one` | First value |\n>\n| `two` | Second value |\n'
  writeFileSync(configuration, RUMDL_DEFAULT)
  writeFileSync(markdown, contents)

  const result = spawnSync('bunx', ['rumdl', 'check', '--config', configuration, '--fix', markdown], {
    encoding: 'utf8'
  })

  expect(result.status).toBe(0)
  expect(readFileSync(markdown, 'utf8')).toBe(contents)
})

test('rumdl 0.2.54 reports a standard-flavor wikilink table without truncating it during fix', () => {
  const repository = temporaryRepository()
  const configuration = join(repository, 'rumdl.toml')
  const markdown = join(repository, 'fixture.md')
  const contents = '# Fixture\n\n| Link | Value |\n| --- | --- |\n| [[Target|Label]] | Keep me |\n'
  writeFileSync(configuration, RUMDL_DEFAULT)
  writeFileSync(markdown, contents)

  const result = spawnSync('bunx', ['rumdl', 'check', '--config', configuration, '--fix', markdown], {
    encoding: 'utf8'
  })

  expect(result.status).toBe(1)
  expect(`${result.stdout}${result.stderr}`).toContain('[MD056]')
  expect(readFileSync(markdown, 'utf8')).toBe(contents)
})

test('conform retains drafts, coalesces writes, and leaves publication to the host', () => {
  const repository = temporaryRepository()
  writeFileSync(join(repository, '.prettierrc.json'), '{}\n')
  let inspections = 0
  const session = createAuthoringSession({ mode: 'conform', repository, userHome: tmpdir(), configuration: {} }, () => {
    inspections += 1
    return { clean: false, detail: 'formatter drift' }
  })
  const subject = session.subjects[1]
  const context = subject?.context()
  const markdown = markdownModule.MARKDOWN.items[0]
  const owned = ownedModule.OWNED.items[0]
  const retired = ownedModule.OWNED.items[1]

  expect(inspections).toBe(1)
  expect(subject?.context()).toBe(context)
  expect(markdown?.mechanical?.audit.run(context?.markdown as NonNullable<typeof context>['markdown'])[0]?.status).toBe(
    'VIOLATION'
  )
  expect(
    owned?.mechanical?.audit
      .run(context?.owned as NonNullable<typeof context>['owned'])
      .map((outcome) => outcome.status)
  ).toEqual(['VIOLATION', 'VIOLATION'])
  expect(
    retired?.mechanical?.audit
      .run(context?.owned as NonNullable<typeof context>['owned'])
      .map((outcome) => outcome.status)
  ).toEqual(['VIOLATION', 'PASS', 'PASS'])

  owned?.mechanical?.conform?.run(context?.owned as NonNullable<typeof context>['owned'])
  owned?.mechanical?.conform?.run(context?.owned as NonNullable<typeof context>['owned'])
  retired?.mechanical?.conform?.run(context?.owned as NonNullable<typeof context>['owned'])
  retired?.mechanical?.conform?.run(context?.owned as NonNullable<typeof context>['owned'])
  markdown?.mechanical?.conform?.run(context?.markdown as NonNullable<typeof context>['markdown'])

  expect(session.proposal()).toEqual({
    writes: [
      { path: '.editorconfig', content: EDITORCONFIG_DEFAULT, create: true },
      { path: '.rumdl.toml', content: RUMDL_DEFAULT, create: true }
    ],
    commands: [
      { program: 'rm', arguments: ['-f', '--', '.prettierrc.json'] },
      { program: 'bunx', arguments: ['rumdl', 'check', '--fix', '--preflight', '.'] }
    ]
  })
  expect(readFileSync(join(repository, '.prettierrc.json'), 'utf8')).toBe('{}\n')
  expect(existsSync(join(repository, '.editorconfig'))).toBe(false)
  expect(existsSync(join(repository, '.rumdl.toml'))).toBe(false)
})

test('trade records are normalized like any other authored Markdown', () => {
  const repository = temporaryRepository()
  const inbound = join(repository, '+', '_TRADES', 'peer', 'repo')
  const outbound = join(repository, '-', '_TRADES', 'peer', 'repo')
  mkdirSync(inbound, { recursive: true })
  mkdirSync(outbound, { recursive: true })
  writeFileSync(join(inbound, 'TRD-00000001.md'), '---\nid: "TRD-00000001"\n---\n\n# Submitted\n')
  writeFileSync(join(outbound, 'TRD-00000002.md'), '---\nid: "TRD-00000002"\n---\n\n# Preparation\n')
  writeFileSync(join(repository, '+', '_TRADES', 'README.md'), '---\nid: "trade-readme"\n---\n\n# Trade README\n')

  const session = createAuthoringSession(
    { mode: 'conform', repository, userHome: tmpdir(), configuration: {} },
    () => ({ clean: true })
  )
  const context = session.subjects[1]?.context()

  // ki-trades AUTH-1 compares a record's meaning against the sender's copy, so formatting
  // one is safe and no longer needs an exclusion that never covered Biome anyway.
  expect(context?.markdown.frontmatter.files.map((file) => file.path)).toEqual([
    '+/_TRADES/README.md',
    '+/_TRADES/peer/repo/TRD-00000001.md',
    '-/_TRADES/peer/repo/TRD-00000002.md'
  ])
})

test('frontmatter conform removes only safely unnecessary scalar quotes', () => {
  const repository = temporaryRepository()
  writeFileSync(
    join(repository, 'guide.md'),
    '---\nid: \'PERSONAL-DOTFILES-UE-001\'\nname: "agent"\nenabled: "true"\nrelease: "2026-08-05"\ntitle: "A value: with punctuation"\n---\n\n# Guide\n'
  )
  const session = createAuthoringSession(
    { mode: 'conform', repository, userHome: tmpdir(), configuration: {} },
    () => ({ clean: true })
  )
  const context = session.subjects[1]?.context()
  const frontmatter = markdownModule.MARKDOWN.items.find((item) => item.code === 'MD-frontmatter')

  expect(frontmatter?.mechanical?.audit.run(context?.markdown as NonNullable<typeof context>['markdown'])).toEqual([
    {
      status: 'VIOLATION',
      message: 'frontmatter has 2 unnecessarily quoted bare-safe scalars',
      subject: 'guide.md'
    }
  ])

  frontmatter?.mechanical?.conform?.run(context?.markdown as NonNullable<typeof context>['markdown'])

  expect(session.proposal().writes).toEqual([
    {
      path: 'guide.md',
      content:
        '---\nid: PERSONAL-DOTFILES-UE-001\nname: agent\nenabled: "true"\nrelease: "2026-08-05"\ntitle: "A value: with punctuation"\n---\n\n# Guide\n'
    }
  ])
})

/** Writes `owned_file_exceptions` as `.ki.toml` declares it and returns the parsed skill table. */
const declareExceptions = (repository: string, entries: readonly (readonly [string, string?])[]) => {
  const lines = entries.flatMap(([name, reason]) => [...(reason ? [`  # ${reason}`] : []), `  "${name}",`])
  writeFileSync(
    join(repository, '.ki.toml'),
    `[skills.ki-authoring]\nowned_file_exceptions = [\n${lines.join('\n')}\n]\n`
  )
  return { owned_file_exceptions: entries.map(([name]) => name) }
}

test('a declared owned-file exception reports information and suppresses only its drifted-file write', () => {
  const repository = temporaryRepository()
  writeFileSync(join(repository, '.editorconfig'), EDITORCONFIG_DEFAULT)
  writeFileSync(join(repository, '.rumdl.toml'), '# evidence-preserving variation\n')
  const session = createAuthoringSession(
    {
      mode: 'conform',
      repository,
      userHome: tmpdir(),
      configuration: declareExceptions(repository, [
        ['.rumdl.toml', 'Preserves verbatim correspondence whose list markers are source evidence.']
      ])
    },
    () => ({ clean: true })
  )
  const context = session.subjects[1]?.context()
  const owned = ownedModule.OWNED.items[0]

  expect(owned?.mechanical?.audit.run(context?.owned as NonNullable<typeof context>['owned'])).toContainEqual({
    status: 'INFO',
    message:
      '.rumdl.toml uses a declared owned-file exception: Preserves verbatim correspondence whose list markers are source evidence.',
    subject: '.rumdl.toml'
  })

  owned?.mechanical?.conform?.run(context?.owned as NonNullable<typeof context>['owned'])
  expect(session.proposal().writes).toEqual([])
})

test('unexplained owned-file drift remains a warning and is proposed for repair', () => {
  const repository = temporaryRepository()
  writeFileSync(join(repository, '.editorconfig'), EDITORCONFIG_DEFAULT)
  writeFileSync(join(repository, '.rumdl.toml'), '# unexplained variation\n')
  const session = createAuthoringSession(
    { mode: 'conform', repository, userHome: tmpdir(), configuration: {} },
    () => ({ clean: true })
  )
  const context = session.subjects[1]?.context()
  const owned = ownedModule.OWNED.items[0]

  expect(owned?.mechanical?.audit.run(context?.owned as NonNullable<typeof context>['owned'])).toContainEqual({
    status: 'VIOLATION',
    message:
      '.rumdl.toml has drifted from the house template — run "ki repo conform --skill ki-authoring" to correct it',
    subject: '.rumdl.toml'
  })

  owned?.mechanical?.conform?.run(context?.owned as NonNullable<typeof context>['owned'])
  expect(session.proposal().writes).toEqual([{ path: '.rumdl.toml', content: RUMDL_DEFAULT }])
})

test('owned-file exceptions do not suppress missing or unsafe paths', () => {
  const missingRepository = temporaryRepository()
  writeFileSync(join(missingRepository, '.editorconfig'), EDITORCONFIG_DEFAULT)
  const missing = createAuthoringSession(
    {
      mode: 'conform',
      repository: missingRepository,
      userHome: tmpdir(),
      configuration: declareExceptions(missingRepository, [['.rumdl.toml', 'Evidence preservation.']])
    },
    () => ({ clean: true })
  )
  const missingContext = missing.subjects[1]?.context()
  ownedModule.OWNED.items[0]?.mechanical?.conform?.run(
    missingContext?.owned as NonNullable<typeof missingContext>['owned']
  )
  expect(missing.proposal().writes).toEqual([{ path: '.rumdl.toml', content: RUMDL_DEFAULT, create: true }])

  const unsafeRepository = temporaryRepository()
  const outside = join(temporaryRepository(), 'outside')
  writeFileSync(join(unsafeRepository, '.editorconfig'), EDITORCONFIG_DEFAULT)
  writeFileSync(outside, '# do not replace\n')
  symlinkSync(outside, join(unsafeRepository, '.rumdl.toml'))
  const unsafe = createAuthoringSession(
    {
      mode: 'conform',
      repository: unsafeRepository,
      userHome: tmpdir(),
      configuration: declareExceptions(unsafeRepository, [['.rumdl.toml', 'Evidence preservation.']])
    },
    () => ({ clean: true })
  )
  const unsafeContext = unsafe.subjects[1]?.context()
  ownedModule.OWNED.items[0]?.mechanical?.conform?.run(
    unsafeContext?.owned as NonNullable<typeof unsafeContext>['owned']
  )
  expect(unsafe.proposal().writes).toEqual([])
  expect(readFileSync(outside, 'utf8')).toBe('# do not replace\n')
})

test('owned-file exception declarations reject unknown, unexplained, stale, and table-form entries', () => {
  const repository = temporaryRepository()
  writeFileSync(join(repository, '.editorconfig'), EDITORCONFIG_DEFAULT)
  writeFileSync(join(repository, '.rumdl.toml'), RUMDL_DEFAULT)
  const session = createAuthoringSession(
    {
      mode: 'audit',
      repository,
      userHome: tmpdir(),
      configuration: declareExceptions(repository, [
        ['.rumdl.toml', 'No longer needed.'],
        ['.unknown', 'Not owned.'],
        ['.editorconfig']
      ])
    },
    () => ({ clean: true })
  )
  const context = session.subjects[1]?.context()
  const outcomes = ownedModule.OWNED.items[0]?.mechanical?.audit.run(
    context?.owned as NonNullable<typeof context>['owned']
  )

  expect(outcomes).toContainEqual({
    status: 'VIOLATION',
    message:
      '.rumdl.toml matches the house template but retains a declared exception — remove it because No longer needed.',
    subject: '.rumdl.toml'
  })
  expect(outcomes).toContainEqual({
    status: 'VIOLATION',
    message: 'owned_file_exceptions[".unknown"] is not a currently owned file',
    subject: 'owned_file_exceptions'
  })
  expect(outcomes).toContainEqual({
    status: 'VIOLATION',
    message: 'owned_file_exceptions[".editorconfig"] must have its reason as a comment on the line above',
    subject: 'owned_file_exceptions'
  })

  const table = createAuthoringSession(
    {
      mode: 'audit',
      repository,
      userHome: tmpdir(),
      configuration: { owned_file_exceptions: { '.rumdl.toml': 'Grouped as a table.' } }
    },
    () => ({ clean: true })
  )
  const tableContext = table.subjects[1]?.context()
  expect(
    ownedModule.OWNED.items[0]?.mechanical?.audit.run(tableContext?.owned as NonNullable<typeof tableContext>['owned'])
  ).toContainEqual({
    status: 'VIOLATION',
    message:
      'owned_file_exceptions["owned_file_exceptions"] must be an array of owned filenames under [skills.ki-authoring], each with its reason as a comment on the line above',
    subject: 'owned_file_exceptions'
  })
})

test('owned-file conform refuses to propose a write through a symlink', () => {
  const repository = temporaryRepository()
  const outside = join(temporaryRepository(), 'outside')
  writeFileSync(outside, 'do not replace\n')
  symlinkSync(outside, join(repository, '.editorconfig'))
  const session = createAuthoringSession(
    { mode: 'conform', repository, userHome: tmpdir(), configuration: {} },
    () => ({ clean: true })
  )
  const context = session.subjects[1]?.context()
  const owned = ownedModule.OWNED.items[0]

  expect(context?.owned.files.find((file) => file.name === '.editorconfig')?.state).toBe('unsafe')
  owned?.mechanical?.conform?.run(context?.owned as NonNullable<typeof context>['owned'])

  expect(session.proposal().writes.some((write) => write.path === '.editorconfig')).toBe(false)
  expect(readFileSync(outside, 'utf8')).toBe('do not replace\n')
})

test('the repository Markdown audit inspects the selected checkout but never physical Git metadata', () => {
  const repository = temporaryRepository()
  const malformed = '# Fixture\n\n#Missing heading space\n'
  const git = (cwd: string, ...args: string[]) =>
    spawnSync('git', ['-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', ...args], {
      cwd,
      encoding: 'utf8'
    })
  const markdownAudit = (checkout: string) => {
    const context = createAuthoringSession({
      mode: 'audit',
      repository: checkout,
      userHome: tmpdir(),
      configuration: {}
    }).subjects[1]?.context()
    return markdownModule.MARKDOWN.items[0]?.mechanical?.audit.run(
      context?.markdown as NonNullable<typeof context>['markdown']
    )[0]?.status
  }
  writeFileSync(join(repository, '.rumdl.toml'), RUMDL_DEFAULT)
  writeFileSync(join(repository, 'README.md'), '# Fixture\n')
  expect(git(repository, 'init', '--quiet').status).toBe(0)
  expect(git(repository, 'add', '.').status).toBe(0)
  expect(git(repository, 'commit', '--quiet', '-m', 'fixture').status).toBe(0)

  // A sibling linked worktree stored inside physical Git metadata, as some agent tools retain them.
  const sibling = join(repository, '.git', 'tool-worktrees', 'task-0-fixture')
  expect(git(repository, 'worktree', 'add', '--quiet', '-b', 'fixture', sibling).status).toBe(0)
  writeFileSync(join(sibling, 'sibling.md'), malformed)
  mkdirSync(join(repository, '.git', 'notes-fixture'), { recursive: true })
  writeFileSync(join(repository, '.git', 'notes-fixture', 'metadata.md'), malformed)
  expect(markdownAudit(repository)).toBe('PASS')

  // The selected checkout's own Markdown still fails, including in a linked worktree whose
  // `.git` is a pointer file rather than a directory.
  writeFileSync(join(repository, 'selected.md'), malformed)
  expect(markdownAudit(repository)).toBe('VIOLATION')
  expect(lstatSync(join(sibling, '.git')).isFile()).toBe(true)
  expect(markdownAudit(sibling)).toBe('VIOLATION')
})

test('MD-hook requires a package-less hook to check staged Markdown, check-only', () => {
  const repository = temporaryRepository()
  const outcome = () => {
    const context = createAuthoringSession({
      mode: 'audit',
      repository,
      userHome: tmpdir(),
      configuration: {}
    }).subjects[1]?.context()
    const item = markdownModule.MARKDOWN.items.find((candidate) => candidate.code === 'MD-hook')
    return item?.mechanical?.audit.run(context?.markdown as NonNullable<typeof context>['markdown'])[0]
  }
  expect(outcome()?.status).toBe('NOT_APPLICABLE')

  mkdirSync(join(repository, '.githooks'))
  const hook = join(repository, '.githooks', 'pre-commit')
  const staged =
    "git diff --cached --name-only --diff-filter=ACMR -z -- '*.md' | xargs -0 -r rumdl check --quiet -- || exit 1"
  writeFileSync(hook, `#!/bin/sh\n${staged}\n`)
  expect(outcome()?.status).toBe('PASS')

  writeFileSync(hook, `#!/bin/sh\n# ${staged}\n`)
  expect(outcome()?.status).toBe('VIOLATION')
  writeFileSync(hook, `#!/bin/sh\n${staged.replace('--quiet', '--fix')}\n`)
  expect(outcome()?.status).toBe('VIOLATION')

  writeFileSync(join(repository, 'package.json'), '{}\n')
  expect(outcome()?.message).toContain('SCR-11')
})

test('frontmatter honours repository Markdown exclusions and preserves capture bytes', () => {
  const repository = temporaryRepository()
  writeFileSync(
    join(repository, '.rumdl.toml'),
    '[global]\nexclude = ["captures/**", "**/vendor/**", "archive", "**/saved-*.md"]\n'
  )
  const capture = '---\nid: "capture"\n---\n\n# Verbatim capture\n'
  for (const path of [
    'captures/one/README.md',
    'docs/vendor/note.md',
    'archive/note.md',
    'docs/saved-report.md',
    'docs/new-report.md'
  ]) {
    mkdirSync(join(repository, path, '..'), { recursive: true })
    writeFileSync(join(repository, path), capture)
  }
  const session = createAuthoringSession(
    { mode: 'conform', repository, userHome: tmpdir(), configuration: {} },
    () => ({ clean: true })
  )
  const context = session.subjects[1]?.context()
  expect(context?.markdown.frontmatter.files.map((file) => file.path)).toEqual(['docs/new-report.md'])
  const item = markdownModule.MARKDOWN.items.find((candidate) => candidate.code === 'MD-frontmatter')
  item?.mechanical?.conform?.run(context?.markdown as NonNullable<typeof context>['markdown'])
  expect(session.proposal().writes.filter((write) => write.path.endsWith('.md'))).toEqual([
    { path: 'docs/new-report.md', content: capture.replace('"capture"', 'capture') }
  ])
  expect(readFileSync(join(repository, 'captures/one/README.md'), 'utf8')).toBe(capture)
})

test('FMT checks typed documents against the format standards beside the rubric', () => {
  const repository = temporaryRepository()
  const standards = temporaryRepository()
  writeFileSync(
    join(standards, 'standard-formats-sources.md'),
    '---\nki-document-type: standard@x\nki-revised: 2026-11-16T16:58:00Z\n---\n'
  )
  writeFileSync(
    join(standards, 'standard-formats-change.md'),
    '---\nki-document-type: standard@x\nki-revised: 2026-11-09T21:36:32Z\n---\n'
  )
  mkdirSync(join(repository, 'docs'))
  const documents: Record<string, string> = {
    'docs/current.md': '---\nki-document-type: sources@2026-11-16T16:58:00Z\nki-revised: 2026-11-16T17:00:00Z\n---\n',
    'docs/older.md': '---\nki-document-type: sources@2026-11-15T00:17:25Z\nki-revised: 2026-11-15T00:22:04Z\n---\n',
    'docs/ahead.md': '---\nki-document-type: change@2026-11-14T03:00:00Z\nki-revised: 2026-11-14T03:00:00Z\n---\n',
    'docs/commit.md': '---\nki-document-type: change@61229e2d5\nki-revised: 2026-11-16T10:25:00Z\n---\n',
    'docs/unknown.md': '---\nki-document-type: record@2026-11-16T17:10:00Z\nki-revised: 2026-11-16T17:10:00Z\n---\n',
    'docs/unrevised.md': '---\nki-document-type: change@2026-11-09T21:36:32Z\n---\n',
    'docs/resource.md': '---\nki-id: actor:wayland\nki-document-type: actor\n---\n',
    'docs/card.md': '---\nid: industry.tool\ntype: term\n---\n',
    'docs/SKILL.md':
      '---\nname: ki-example\nki-document-type: skill@2026-11-17T01:00:00Z\ndescription: An example.\n---\n',
    'docs/mode-audit.md': '---\nki-document-type: mode@2026-11-17T01:00:00Z\n---\n'
  }
  for (const [path, content] of Object.entries(documents)) writeFileSync(join(repository, path), content)
  const session = createAuthoringSession(
    { mode: 'audit', repository, userHome: tmpdir(), configuration: {} },
    () => ({ clean: true }),
    standards
  )
  const context = session.subjects[1]?.context()
  const formats = context?.formats as NonNullable<typeof context>['formats']
  // The skill files' formats are `ki-skills`', which its own rubric checks.
  expect(formats.documents.map((document) => document.path)).toEqual([
    'docs/ahead.md',
    'docs/commit.md',
    'docs/current.md',
    'docs/older.md',
    'docs/unknown.md',
    'docs/unrevised.md'
  ])
  const type = formatsModule.FORMATS.items.find((item) => item.code === 'FMT-type')
  const version = formatsModule.FORMATS.items.find((item) => item.code === 'FMT-version')
  expect(
    type?.mechanical?.audit.run(formats).map(({ status, subject, message }) => [status, subject, message])
  ).toEqual([
    ['VIOLATION', 'docs/unknown.md', '`ki-document-type` names "record", which has no format standard'],
    ['VIOLATION', 'docs/unrevised.md', 'typed document has no `ki-revised`']
  ])
  expect(version?.mechanical?.audit.run(formats).map(({ status, subject }) => [status, subject])).toEqual([
    ['VIOLATION', 'docs/ahead.md'],
    ['VIOLATION', 'docs/older.md']
  ])
  expect(
    type?.mechanical?.audit.run({ documents: formats.documents, standards: [] }).map(({ status }) => status)
  ).toEqual(['NOT_APPLICABLE'])
})

test("FMT-type warns when `revised` is behind the file's last commit, and skips a file Git cannot date", () => {
  const repository = temporaryRepository()
  const standards = temporaryRepository()
  writeFileSync(
    join(standards, 'standard-formats-change.md'),
    '---\nki-document-type: standard@x\nki-revised: 2026-11-09T21:36:32Z\n---\n'
  )
  const typed = (revised: string) => `---\nki-document-type: change@2026-11-09T21:36:32Z\n${revised}---\n`
  const documents: Record<string, string> = {
    'behind.md': typed('ki-revised: 2026-11-16T10:00:00Z\n'),
    'tolerated.md': typed('ki-revised: 2026-11-16T11:57:00Z\n'),
    'ahead.md': typed('ki-revised: 2026-11-16T12:30:00Z\n'),
    'quoted.md': typed("ki-revised: '2026-11-16T10:00:00Z'\n"),
    'day.md': typed('ki-revised: 2026-11-16\n'),
    'unrevised.md': typed(''),
    'untracked.md': typed('ki-revised: 2026-11-01T00:00:00Z\n')
  }
  for (const [path, content] of Object.entries(documents)) writeFileSync(join(repository, path), content)
  const git = (...args: string[]) =>
    spawnSync('git', ['-c', 'user.name=T', '-c', 'user.email=t@example.com', '-c', 'commit.gpgsign=false', ...args], {
      cwd: repository,
      encoding: 'utf8',
      env: {
        PATH: process.env.PATH ?? '',
        HOME: tmpdir(),
        GIT_CONFIG_NOSYSTEM: '1',
        GIT_AUTHOR_DATE: '2026-11-16T12:00:00Z',
        GIT_COMMITTER_DATE: '2026-11-16T13:00:00+01:00'
      }
    })
  expect(git('init', '-q').status).toBe(0)
  const audit = () => {
    const session = createAuthoringSession(
      { mode: 'audit', repository, userHome: tmpdir(), configuration: {} },
      () => ({ clean: true }),
      standards
    )
    const formats = session.subjects[1]?.context()?.formats as NonNullable<
      ReturnType<NonNullable<(typeof session.subjects)[1]>['context']>
    >['formats']
    const type = formatsModule.FORMATS.items.find((item) => item.code === 'FMT-type')
    expect(type?.mechanical?.level).toBe('WARN')
    return type?.mechanical?.audit.run(formats).map(({ subject, message }) => [subject, message])
  }
  expect(audit()).toEqual([['unrevised.md', 'typed document has no `ki-revised`']])
  expect(git('add', '--', ...Object.keys(documents).filter((path) => path !== 'untracked.md')).status).toBe(0)
  expect(git('commit', '-q', '-m', 'fixture').status).toBe(0)
  expect(audit()).toEqual([
    [
      'behind.md',
      "`ki-revised` 2026-11-16T10:00:00Z is behind the file's last commit, 2026-11-16T12:00:00Z: move it if that commit changed the substance, or mark a mechanical commit `Revised-Unchanged: true`"
    ],
    [
      'quoted.md',
      "`ki-revised` 2026-11-16T10:00:00Z is behind the file's last commit, 2026-11-16T12:00:00Z: move it if that commit changed the substance, or mark a mechanical commit `Revised-Unchanged: true`"
    ],
    ['unrevised.md', 'typed document has no `ki-revised`']
  ])
})

test('FMT-type passes over a commit carrying the Revised-Unchanged trailer', () => {
  const repository = temporaryRepository()
  const standards = temporaryRepository()
  writeFileSync(
    join(standards, 'standard-formats-change.md'),
    '---\nki-document-type: standard@x\nki-revised: 2026-11-09T21:36:32Z\n---\n'
  )
  const git = (date: string, ...args: string[]) =>
    spawnSync('git', ['-c', 'user.name=T', '-c', 'user.email=t@example.com', '-c', 'commit.gpgsign=false', ...args], {
      cwd: repository,
      encoding: 'utf8',
      env: {
        PATH: process.env.PATH ?? '',
        HOME: tmpdir(),
        GIT_CONFIG_NOSYSTEM: '1',
        GIT_AUTHOR_DATE: date,
        GIT_COMMITTER_DATE: date
      }
    })
  const document = (body: string) =>
    `---\nki-document-type: change@2026-11-09T21:36:32Z\nki-revised: 2026-11-16T12:00:00Z\n---\n\n${body}\n`
  expect(git('2026-11-16T12:00:00Z', 'init', '-q').status).toBe(0)
  for (const path of ['mechanical.md', 'substance.md']) writeFileSync(join(repository, path), document('First.'))
  expect(git('2026-11-16T12:00:00Z', 'add', '--', 'mechanical.md', 'substance.md').status).toBe(0)
  expect(git('2026-11-16T12:00:00Z', 'commit', '-q', '-m', 'first').status).toBe(0)
  writeFileSync(join(repository, 'mechanical.md'), document('Renamed.'))
  expect(git('2026-11-16T14:00:00Z', 'add', '--', 'mechanical.md').status).toBe(0)
  expect(
    git(
      '2026-11-16T14:00:00Z',
      'commit',
      '-q',
      '-m',
      'sweep\n\nRename.\n\nRevised-Unchanged: true\nCo-Authored-By: T <t@example.com>'
    ).status
  ).toBe(0)
  writeFileSync(join(repository, 'substance.md'), document('Changed.'))
  expect(git('2026-11-16T15:00:00Z', 'add', '--', 'substance.md').status).toBe(0)
  expect(git('2026-11-16T15:00:00Z', 'commit', '-q', '-m', 'change\n\nRevised-Unchanged: false').status).toBe(0)
  const session = createAuthoringSession(
    { mode: 'audit', repository, userHome: tmpdir(), configuration: {} },
    () => ({ clean: true }),
    standards
  )
  const formats = session.subjects[1]?.context()?.formats as NonNullable<
    ReturnType<NonNullable<(typeof session.subjects)[1]>['context']>
  >['formats']
  expect(formats.documents.map((entry) => [entry.path, entry.committed])).toEqual([
    ['mechanical.md', '2026-11-16T12:00:00Z'],
    ['substance.md', '2026-11-16T15:00:00Z']
  ])
  const type = formatsModule.FORMATS.items.find((item) => item.code === 'FMT-type')
  expect(type?.mechanical?.audit.run(formats).map(({ subject }) => subject)).toEqual(['substance.md'])
})

test('FMT reads the fields written without the ki- prefix and FMT-prefix warns on them', () => {
  const repository = temporaryRepository()
  const standards = temporaryRepository()
  writeFileSync(
    join(standards, 'standard-formats-change.md'),
    '---\ntype: standard@x\nrevised: 2026-11-09T21:36:32Z\n---\n'
  )
  const documents: Record<string, string> = {
    'older.md': '---\ntype: change@2026-11-09T21:36:32Z\nrevised: 2026-11-10T00:00:00Z\nstatus: draft\ntitle: T\n---\n',
    'mixed.md': '---\nki-document-type: change@2026-11-09T21:36:32Z\nrevised: 2026-11-10T00:00:00Z\n---\n',
    'current.md':
      '---\nki-document-type: change@2026-11-09T21:36:32Z\nki-revised: 2026-11-10T00:00:00Z\nki-status: draft\ntitle: T\nki-inputs:\n  - a/b@c\n---\n',
    'card.md': '---\nid: industry.tool\ntype: term\n---\n'
  }
  for (const [path, content] of Object.entries(documents)) writeFileSync(join(repository, path), content)
  const session = createAuthoringSession(
    { mode: 'audit', repository, userHome: tmpdir(), configuration: {} },
    () => ({ clean: true }),
    standards
  )
  const formats = session.subjects[1]?.context()?.formats as NonNullable<
    ReturnType<NonNullable<(typeof session.subjects)[1]>['context']>
  >['formats']
  expect(formats.standards).toEqual([{ word: 'change', revised: '2026-11-09T21:36:32Z' }])
  expect(formats.documents.map((entry) => [entry.path, entry.word, entry.revisedAt])).toEqual([
    ['current.md', 'change', '2026-11-10T00:00:00Z'],
    ['mixed.md', 'change', '2026-11-10T00:00:00Z'],
    ['older.md', 'change', '2026-11-10T00:00:00Z']
  ])
  const type = formatsModule.FORMATS.items.find((item) => item.code === 'FMT-type')
  expect(type?.mechanical?.audit.run(formats).map(({ status }) => status)).toEqual(['PASS'])
  const prefix = formatsModule.FORMATS.items.find((item) => item.code === 'FMT-prefix')
  expect(prefix?.mechanical?.level).toBe('WARN')
  expect(prefix?.mechanical?.audit.run(formats).map(({ subject, message }) => [subject, message])).toEqual([
    ['mixed.md', 'fields without the `ki-` prefix, read under their `ki-` names: revised'],
    ['older.md', 'fields without the `ki-` prefix, read under their `ki-` names: type, revised, status']
  ])
  expect(
    prefix?.mechanical?.audit
      .run({ documents: formats.documents.filter((entry) => entry.path === 'current.md'), standards: [] })
      .map(({ status }) => status)
  ).toEqual(['PASS'])
})

test('FMT-record fails a record that breaks the record format and reads an older record as written', () => {
  const repository = temporaryRepository()
  mkdirSync(join(repository, 'record'))
  const front = (name: string, extra = '') =>
    `---\nki-id: record:${name}\nki-document-type: record@2026-11-16T23:15:00Z\nki-revised: 2026-11-16T23:15:00Z\nki-at: 2026-11-16T23:15:00Z\ntitle: T\nki-packages:\n  - cairn.summit\nki-review: awaiting\n${extra}---\n\n# T\n\n`
  const pinned = 'https://github.com/krisb/ki-cairn-store/blob/9968877/record/20261114T0339Z-overnight.md'
  const records: Record<string, string> = {
    '20261116T2315Z-a-batch': `${front('20261116T2315Z-a-batch')}Lead.\n\n## Purpose\n\n## Goals\n\n## What changed\n`,
    '20261116T2315Z-a-batch-as-review': `${front('20261116T2315Z-a-batch-as-review')}Lead.\n\n## What stands today\n\n## Left open\n`,
    '20261116T2315Z-review-good': `${front('20261116T2315Z-review-good')}It replaces [one](${pinned}).\n\n## What stands today\n\n## Left open\n`,
    '20261116T2315Z-review-old-parts': `${front('20261116T2315Z-review-old-parts')}It replaces [one](20261114T0339Z-overnight.md).\n\n## What stands today\n\n## Replaced since\n\n## Detail\n\n## Left open\n`,
    '20261116T2315Z-review-no-links': `${front('20261116T2315Z-review-no-links')}It replaces nothing linked.\n\n## What stands today\n\n## Left open\n`,
    '20261116T2315Z-one-two-three-four-five-six': `${front('20261116T2315Z-one-two-three-four-five-six').replace('ki-review: awaiting', 'ki-review: changes wanted')}Lead.\n\n## Purpose\n\n## Goals\n\n## What changed\n`,
    '20261114T0339Z-an-older-record-with-a-long-slug':
      '---\ntype: record\nat: 2026-11-14T03:39:00Z\ntitle: T\npackages:\n  - cairn.summit\nreview: approved\n---\n\n# T\n\nLead.\n\n## What stands today\n\n## Replaced since\n\n## Detail\n\n## Left open\n',
    '20261114T0400Z-older-and-wrong':
      '---\ntype: record\nat: 2026-11-14T05:00:00Z\ntitle: T\npackages: []\nreview: maybe\n---\n\n# T\n'
  }
  for (const [name, content] of Object.entries(records))
    writeFileSync(join(repository, 'record', `${name}.md`), content)
  const session = createAuthoringSession({ mode: 'audit', repository, userHome: tmpdir(), configuration: {} }, () => ({
    clean: true
  }))
  const formats = session.subjects[1]?.context()?.formats as NonNullable<
    ReturnType<NonNullable<(typeof session.subjects)[1]>['context']>
  >['formats']
  const record = formatsModule.FORMATS.items.find((item) => item.code === 'FMT-record')
  expect(record?.mechanical?.level).toBe('FAIL')
  expect(record?.mechanical?.audit.run(formats).map(({ subject, message }) => [subject, message])).toEqual([
    ['record/20261114T0400Z-older-and-wrong.md', "`ki-at` is missing or differs from the file name's time"],
    ['record/20261114T0400Z-older-and-wrong.md', '`ki-review` is not awaiting or approved'],
    ['record/20261116T2315Z-one-two-three-four-five-six.md', '`ki-review` is not awaiting or approved'],
    ['record/20261116T2315Z-review-no-links.md', 'the opening line links no record it replaces'],
    [
      'record/20261116T2315Z-review-old-parts.md',
      'a consolidated review has What stands today and Left open, and no other section'
    ],
    ['record/20261116T2315Z-review-old-parts.md', 'a record the opening line links is not pinned at a commit']
  ])
  expect(
    record?.mechanical?.audit.run({ documents: [], standards: [], records: [] }).map(({ status }) => status)
  ).toEqual(['NOT_APPLICABLE'])
})

test('FMT reads the real format standards beside the rubric', () => {
  const session = createAuthoringSession(
    { mode: 'audit', repository: temporaryRepository(), userHome: tmpdir(), configuration: {} },
    () => ({ clean: true })
  )
  const context = session.subjects[1]?.context()
  expect(context?.formats.standards.map((standard) => standard.word)).toEqual([
    'change',
    'format',
    'record',
    'sources',
    'standard'
  ])
  expect(context?.formats.standards.every((standard) => Boolean(standard.revised))).toBe(true)
})
