import { afterEach, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import type { RubricContextOptions } from '../../shared/rubric.ts'
import { CONFIG } from '../items/config.ts'
import { TAP } from '../items/tap.ts'
import { createToolsSession } from './tools.ts'

const temporaryDirectories: string[] = []

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) rmSync(directory, { recursive: true, force: true })
})

const temporaryDirectory = (prefix: string): string => {
  const directory = mkdtempSync(join(tmpdir(), prefix))
  temporaryDirectories.push(directory)
  return directory
}

const options = (repository: string, mode: 'audit' | 'conform'): RubricContextOptions => ({
  mode,
  repository,
  userHome: tmpdir(),
  configuration: {}
})

const TAP_CONFIG =
  '[skills.ki-repo]\nrepo_type = "project"\nprimary_shape = "ki-repo-homebrew-tap"\n\n[skills.ki-repo-tools]\n'

const fixture = (
  config = TAP_CONFIG
): { readonly repository: string; readonly config: string; readonly original: string } => {
  const repository = temporaryDirectory('ki-repo-tools-tap-')
  mkdirSync(join(repository, 'Formula'))
  writeFileSync(
    join(repository, 'Formula', 'mgit.rb'),
    [
      'class Mgit < Formula',
      '  desc "Run commands across many repositories"',
      '  homepage "https://example.com/tools-mgit"',
      '  url "https://example.com/archive/refs/tags/v1.0.0.tar.gz"',
      '  sha256 "abc"',
      '  license "MIT"',
      '  def install',
      '    bin.install "bin/mgit"',
      '  end',
      '  test do',
      '    system "#{bin}/mgit", "--version"',
      '  end',
      'end',
      ''
    ].join('\n')
  )
  writeFileSync(join(repository, 'README.md'), '# Tap\n\n## Formulae\n\n| Formula |\n| --- |\n| `mgit` |\n')
  const path = join(repository, '.ki.toml')
  writeFileSync(path, config)
  return { repository, config: path, original: config }
}

const session = (repository: string, mode: 'audit' | 'conform' = 'audit') => {
  const created = createToolsSession(options(repository, mode))
  const subject = created.subjects[1]
  if (!subject) throw new Error('ki-repo-tools session did not expose its repository subject')
  return { created, subject, context: subject.context() }
}

const tapItem = (code: string) => {
  const item = TAP.items.find((candidate) => candidate.code === code)
  if (!item?.mechanical) throw new Error(`${code} mechanical item is missing`)
  return item.mechanical
}

const configItem = () => {
  const item = CONFIG.items.find((candidate) => candidate.code === 'CONFIG-1')
  if (!item?.mechanical) throw new Error('CONFIG-1 mechanical item is missing')
  return item.mechanical
}

test('a tap routes to TAP and CONFIG only, and its audit is read-only and never launches Homebrew', () => {
  const { repository, config, original } = fixture()
  const { created, subject, context } = session(repository)

  expect(subject.families).toEqual(['TAP', 'CONFIG'])
  expect(subject.context()).toBe(subject.context())
  expect(tapItem('TAP-1').audit.run(TAP.selectContext(context))[0]?.status).toBe('PASS')
  expect(configItem().audit.run(CONFIG.selectContext(context))[0]?.status).toBe('PASS')
  expect(tapItem('TAP-7').audit.run(TAP.selectContext(context))).toEqual([
    {
      status: 'INFO',
      message: 'Static audit does not execute Homebrew; obtain isolated opt-in brew style/audit evidence separately.',
      subject: 'Formula/'
    }
  ])
  expect(created.proposal()).toEqual({ writes: [] })
  expect(readFileSync(config, 'utf8')).toBe(original)
})

test('Formula/ with no bin/ is a tap even before its primary shape is declared', () => {
  const { repository } = fixture('[skills.ki-repo]\n[skills.ki-repo-tools]\n')
  const { subject, context } = session(repository)

  expect(subject.families).toEqual(['TAP', 'CONFIG'])
  expect(tapItem('TAP-1').audit.run(TAP.selectContext(context))[0]?.status).toBe('PASS')
})

test('a command-line tool repository is not a tap', () => {
  const repository = temporaryDirectory('ki-repo-tools-tool-')
  mkdirSync(join(repository, 'bin'))
  writeFileSync(join(repository, 'bin', 'demo'), '#!/bin/sh\n')
  writeFileSync(join(repository, '.ki.toml'), '[skills.ki-repo]\n[skills.ki-repo-tools]\n')
  const { subject, context } = session(repository)

  expect(subject.families).toContain('TOOL')
  expect(subject.families).not.toContain('TAP')
  expect(tapItem('TAP-1').audit.run(TAP.selectContext(context))[0]?.status).toBe('NOT_APPLICABLE')
  expect(tapItem('TAP-7').audit.run(TAP.selectContext(context))[0]?.status).toBe('NOT_APPLICABLE')
  expect(tapItem('TAP-HOOK').audit.run(TAP.selectContext(context))[0]?.status).toBe('NOT_APPLICABLE')
})

test('a symlinked config is reported but never proposed for replacement', () => {
  const repository = temporaryDirectory('ki-repo-tools-tap-root-')
  const outside = join(temporaryDirectory('ki-repo-tools-tap-outside-'), 'config.toml')
  mkdirSync(join(repository, 'Formula'))
  writeFileSync(join(repository, 'Formula', 'mgit.rb'), 'class Mgit < Formula\n')
  writeFileSync(outside, '[skills.ki-repo]\n')
  symlinkSync(outside, join(repository, '.ki.toml'))
  const { created, context } = session(repository, 'conform')

  expect(tapItem('TAP-1').audit.run(TAP.selectContext(context))[0]?.status).toBe('NOT_APPLICABLE')
  expect(configItem().audit.run(CONFIG.selectContext(context))[0]?.status).toBe('NOT_APPLICABLE')
  expect(created.proposal()).toEqual({ writes: [] })
  expect(readFileSync(outside, 'utf8')).toBe('[skills.ki-repo]\n')
})

test('TAP-HOOK requires the committed gate to check staged Ruby and otherwise stay check-only', () => {
  const { repository } = fixture()
  const hookOutcome = () => tapItem('TAP-HOOK').audit.run(TAP.selectContext(session(repository).context))[0]
  expect(hookOutcome()?.status).toBe('NOT_APPLICABLE')

  mkdirSync(join(repository, '.githooks'))
  const hook = join(repository, '.githooks', 'pre-commit')
  writeFileSync(hook, '#!/bin/sh\nrumdl check --quiet || exit 1\n')
  expect(hookOutcome()?.message).toContain('`ruby -wc` over the staged Ruby')
  writeFileSync(
    hook,
    "#!/bin/sh\ngit diff --cached --name-only -z -- '*.rb' | xargs -0 -r -n 1 ruby -wc\nki repo audit --skill ki-repo-tools --staged || exit 1\n"
  )
  expect(hookOutcome()?.message).toContain('check-only')
  writeFileSync(
    hook,
    readFileSync(join(import.meta.dir, '../../../assets/githooks/ki-repo-homebrew-tap/no-package/pre-commit'), 'utf8')
  )
  expect(hookOutcome()?.status).toBe('PASS')
})
