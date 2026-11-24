import { afterEach, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { type AutostashEvidence, autostashEvidence, autostashOutcomes, gitTrue, parseGitConfig } from './git-config.ts'

const roots: string[] = []
afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

const fixture = () => {
  const root = mkdtempSync(join(tmpdir(), 'ki-git-config-'))
  roots.push(root)
  const home = join(root, 'home')
  const repository = join(root, 'repository')
  mkdirSync(join(repository, '.git'), { recursive: true })
  mkdirSync(home, { recursive: true })
  writeFileSync(join(repository, '.git', 'HEAD'), 'ref: refs/heads/main\n')
  return { root, home, repository }
}

const none = {}

test('Git configuration parses sections, subsections, bare keys and quoted values', () => {
  expect(
    parseGitConfig(
      '# comment\n[Pull]\n\tautoStash = true ; trailing\n[includeIf "gitdir:~/work/"]\n  path = "~/.work # config"\n[rebase]\nautostash\n'
    )
  ).toEqual([
    { section: 'pull', subsection: null, key: 'autostash', value: 'true' },
    { section: 'includeif', subsection: 'gitdir:~/work/', key: 'path', value: '~/.work # config' },
    { section: 'rebase', subsection: null, key: 'autostash', value: null }
  ])
})

test('Git booleans follow Git: a bare key and yes, on, true or a non-zero integer are true', () => {
  for (const value of [null, 'true', 'Yes', 'on', '1', '-2']) expect(gitTrue(value)).toBe(true)
  for (const value of ['false', 'no', 'off', '0', '']) expect(gitTrue(value)).toBe(false)
})

test('a repository and user free of autostash pass', () => {
  const { home, repository } = fixture()
  writeFileSync(join(repository, '.git', 'config'), '[core]\n\tbare = false\n[pull]\n\tautostash = false\n')
  writeFileSync(join(home, '.gitconfig'), '[user]\n\tname = Example\n')
  const evidence = autostashEvidence(repository, home, none)
  expect(evidence.settings).toEqual([])
  expect(evidence.read).toEqual(['~/.gitconfig', '.git/config'])
})

test('a true setting at any level is reported with its origin, even when a later level sets it false', () => {
  const { home, repository } = fixture()
  mkdirSync(join(home, '.config', 'git'), { recursive: true })
  writeFileSync(join(home, '.config', 'git', 'config'), '[rebase]\n\tautoStash = yes\n')
  writeFileSync(join(home, '.gitconfig'), '[pull]\n\tautostash\n')
  writeFileSync(join(repository, '.git', 'config'), '[pull]\n\tautostash = false\n')
  expect(autostashEvidence(repository, home, none).settings).toEqual([
    { key: 'rebase.autoStash', origin: '~/.config/git/config' },
    { key: 'pull.autostash', origin: '~/.gitconfig' }
  ])
})

test('the XDG and global locations follow XDG_CONFIG_HOME and GIT_CONFIG_GLOBAL', () => {
  const { root, home, repository } = fixture()
  mkdirSync(join(root, 'xdg', 'git'), { recursive: true })
  writeFileSync(join(root, 'xdg', 'git', 'config'), '[pull]\n\tautostash = true\n')
  writeFileSync(join(root, 'global'), '[rebase]\n\tautostash = on\n')
  writeFileSync(join(home, '.gitconfig'), '[pull]\n\tautostash = true\n')
  const settings = autostashEvidence(repository, home, {
    XDG_CONFIG_HOME: join(root, 'xdg'),
    GIT_CONFIG_GLOBAL: join(root, 'global')
  }).settings
  expect(settings.map((setting) => setting.origin)).toEqual([join(root, 'xdg', 'git', 'config'), join(root, 'global')])
})

test('includes are followed, and conditional ones only where their gitdir or branch matches', () => {
  const { home, repository } = fixture()
  writeFileSync(join(home, 'shared.inc'), '[pull]\n\tautostash = true\n')
  writeFileSync(join(home, 'match.inc'), '[rebase]\n\tautostash = true\n')
  writeFileSync(join(home, 'other.inc'), '[pull]\n\tautostash = true\n')
  writeFileSync(join(home, 'branch.inc'), '[rebase]\n\tautostash = 1\n')
  writeFileSync(
    join(home, '.gitconfig'),
    [
      '[include]',
      '\tpath = shared.inc',
      '[includeIf "gitdir:repository/"]',
      '\tpath = ~/match.inc',
      '[includeIf "gitdir:/nowhere/"]',
      '\tpath = ~/other.inc',
      '[includeIf "onbranch:main"]',
      '\tpath = ~/branch.inc',
      '[includeIf "hasconfig:remote.*.url:https://example.test/**"]',
      '\tpath = ~/other.inc',
      ''
    ].join('\n')
  )
  const evidence = autostashEvidence(repository, home, none)
  expect(evidence.settings).toEqual([
    { key: 'pull.autostash', origin: '~/shared.inc' },
    { key: 'rebase.autoStash', origin: '~/match.inc' },
    { key: 'rebase.autoStash', origin: '~/branch.inc' }
  ])
  expect(evidence.undecided).toEqual(['~/.gitconfig: includeIf "hasconfig:remote.*.url:https://example.test/**"'])
})

test('a linked worktree reads its common directory configuration', () => {
  const { root, home, repository } = fixture()
  writeFileSync(join(repository, '.git', 'config'), '[pull]\n\tautostash = true\n')
  const gitDir = join(repository, '.git', 'worktrees', 'linked')
  mkdirSync(gitDir, { recursive: true })
  writeFileSync(join(gitDir, 'commondir'), '../..\n')
  writeFileSync(join(gitDir, 'HEAD'), 'ref: refs/heads/topic\n')
  const linked = join(root, 'linked')
  mkdirSync(linked)
  writeFileSync(join(linked, '.git'), `gitdir: ${gitDir}\n`)
  expect(autostashEvidence(linked, home, none).settings).toEqual([{ key: 'pull.autostash', origin: '.git/config' }])
})

test('HYGIENE-3 fails each true setting and passes a clean configuration', () => {
  const context = (settings: { key: string; origin: string }[], undecided: string[] = []) => ({
    autostash: { settings, read: ['~/.gitconfig'], undecided } satisfies AutostashEvidence
  })
  expect(autostashOutcomes(context([{ key: 'pull.autostash', origin: '~/.gitconfig' }]))).toEqual([
    {
      status: 'VIOLATION',
      subject: '~/.gitconfig',
      message: '`pull.autostash` is true in ~/.gitconfig, so a pull or rebase stashes a shared tree'
    }
  ])
  expect(autostashOutcomes(context([], ['~/.gitconfig: includeIf "hasconfig:x"']))).toEqual([
    { status: 'PASS', message: 'no autostash setting is true in ~/.gitconfig' },
    {
      status: 'INFO',
      message: 'a conditional include this check cannot decide was not followed: ~/.gitconfig: includeIf "hasconfig:x"'
    }
  ])
})
