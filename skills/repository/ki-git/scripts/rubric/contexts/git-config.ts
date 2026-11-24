/**
 * Read-only discovery of the autostash settings the never-stash rule forbids.
 *
 * Boundary: reads Git configuration files directly, never running Git: the repository's own `config` (and its
 * `config.worktree`), the user's global file (`$GIT_CONFIG_GLOBAL`, else `~/.gitconfig`) and the XDG file
 * (`$XDG_CONFIG_HOME/git/config`, else `~/.config/git/config`), following `include.path` and the `includeIf`
 * conditions it can decide from the files alone (`gitdir:`, `gitdir/i:` and `onbranch:`). The system file is out of
 * scope. It reports every `pull.autostash` or `rebase.autoStash` set to true with the file that sets it, since the
 * standard treats either setting at any level as a finding, whatever a later level says.
 */
import { existsSync, readFileSync, realpathSync, statSync } from 'node:fs'
import { dirname, isAbsolute, join, resolve } from 'node:path'
import type { AuditOutcome } from '../../shared/rubric.ts'

/** The settings, lower-cased as Git compares them, that let a pull or rebase stash a shared tree. */
export const AUTOSTASH_KEYS = ['pull.autostash', 'rebase.autostash'] as const

export type AutostashSetting = { key: string; origin: string }

export type AutostashEvidence = {
  /** Each true setting with the file that sets it. */
  readonly settings: readonly AutostashSetting[]
  /** The configuration files read, in Git's order. */
  readonly read: readonly string[]
  /** Conditional includes this reader could not decide, so did not follow. */
  readonly undecided: readonly string[]
}

type Location = { gitDir: string; commonDir: string; branch: string | null }
type Entry = { section: string; subsection: string | null; key: string; value: string | null }

const MAX_INCLUDE_DEPTH = 10

const real = (path: string): string => {
  try {
    return realpathSync(path)
  } catch {
    return resolve(path)
  }
}

const readText = (path: string): string | undefined => {
  try {
    return statSync(path).isFile() ? readFileSync(path, 'utf8') : undefined
  } catch {
    return undefined
  }
}

/** The repository's Git directory, its common directory and current branch, read from `.git` without running Git. */
export const gitLocation = (repository: string): Location | undefined => {
  const dotGit = join(repository, '.git')
  if (!existsSync(dotGit)) return undefined
  let gitDir = dotGit
  const pointer = statSync(dotGit).isFile() ? readText(dotGit) : undefined
  if (pointer !== undefined) {
    const match = /^gitdir:\s*(.+?)\s*$/m.exec(pointer)
    if (!match?.[1]) return undefined
    gitDir = resolve(repository, match[1])
  }
  const common = readText(join(gitDir, 'commondir'))?.trim()
  const commonDir = common ? resolve(gitDir, common) : gitDir
  const head = readText(join(gitDir, 'HEAD'))
  const branch = head ? (/^ref:\s*refs\/heads\/(.+?)\s*$/m.exec(head)?.[1] ?? null) : null
  return { gitDir: real(gitDir), commonDir: real(commonDir), branch }
}

const unquote = (raw: string): string => {
  let out = ''
  let quoted = false
  for (let index = 0; index < raw.length; index += 1) {
    const character = raw[index] as string
    if (character === '"') quoted = !quoted
    else if (character === '\\' && index + 1 < raw.length) {
      const next = raw[index + 1] as string
      out += next === 'n' ? '\n' : next === 't' ? '\t' : next
      index += 1
    } else if (!quoted && (character === '#' || character === ';')) break
    else out += character
  }
  return out.trim()
}

/** Parse the entries of one Git configuration file: sections, subsections, keys and raw values. */
export const parseGitConfig = (text: string): Entry[] => {
  const entries: Entry[] = []
  let section = ''
  let subsection: string | null = null
  const lines = text.replace(/\\\r?\n/g, '').split(/\r?\n/)
  for (const line of lines) {
    let rest = line.trim()
    if (rest === '' || rest.startsWith('#') || rest.startsWith(';')) continue
    const header = /^\[\s*([A-Za-z0-9.-]+)(?:\s+"((?:[^"\\]|\\.)*)")?\s*\]/.exec(rest)
    if (header) {
      const name = (header[1] as string).toLowerCase()
      const dot = name.indexOf('.')
      if (header[2] !== undefined) {
        section = name
        subsection = header[2].replace(/\\(.)/g, '$1')
      } else if (dot >= 0) {
        section = name.slice(0, dot)
        subsection = name.slice(dot + 1)
      } else {
        section = name
        subsection = null
      }
      rest = rest.slice(header[0].length).trim()
      if (rest === '' || rest.startsWith('#') || rest.startsWith(';')) continue
    }
    const assignment = /^([A-Za-z][A-Za-z0-9-]*)\s*(?:=(.*))?$/.exec(rest)
    if (!assignment || section === '') continue
    entries.push({
      section,
      subsection,
      key: (assignment[1] as string).toLowerCase(),
      value: assignment[2] === undefined ? null : unquote(assignment[2])
    })
  }
  return entries
}

/** Git's boolean reading: a bare key is true, and `yes`, `on`, `true` and non-zero integers are true. */
export const gitTrue = (value: string | null): boolean => {
  if (value === null) return true
  const normal = value.trim().toLowerCase()
  if (['true', 'yes', 'on'].includes(normal)) return true
  return /^-?\d+$/.test(normal) && Number(normal) !== 0
}

const globToRegExp = (pattern: string, caseless: boolean): RegExp => {
  let source = ''
  for (let index = 0; index < pattern.length; index += 1) {
    const character = pattern[index] as string
    if (character === '*' && pattern[index + 1] === '*') {
      source += '.*'
      index += 1
      if (pattern[index + 1] === '/') index += 1
    } else if (character === '*') source += '[^/]*'
    else if (character === '?') source += '[^/]'
    else source += character.replace(/[.+^${}()|[\]\\]/g, '\\$&')
  }
  return new RegExp(`^${source}$`, caseless ? 'i' : '')
}

const expandHome = (path: string, home: string): string =>
  path === '~' ? home : path.startsWith('~/') ? join(home, path.slice(2)) : path

/** Decide a `gitdir:` pattern the way Git does: `~/` expands, a relative pattern floats, a trailing `/` matches below. */
const matchesGitDir = (raw: string, caseless: boolean, file: string, home: string, location: Location): boolean => {
  let pattern = expandHome(raw, home)
  if (pattern.startsWith('./')) pattern = join(dirname(file), pattern.slice(2))
  else if (!isAbsolute(pattern)) pattern = `**/${pattern}`
  if (pattern.endsWith('/')) pattern += '**'
  const matcher = globToRegExp(pattern, caseless)
  return [location.gitDir, location.commonDir].some((candidate) => matcher.test(candidate))
}

type Condition = 'follow' | 'skip' | 'undecided'

const decide = (condition: string, file: string, home: string, location: Location | undefined): Condition => {
  const gitdir = /^gitdir(\/i)?:(.+)$/.exec(condition)
  if (gitdir) {
    if (!location) return 'skip'
    return matchesGitDir(gitdir[2] as string, gitdir[1] !== undefined, file, home, location) ? 'follow' : 'skip'
  }
  const onbranch = /^onbranch:(.+)$/.exec(condition)
  if (onbranch) {
    if (!location?.branch) return 'skip'
    let pattern = onbranch[1] as string
    if (pattern.endsWith('/')) pattern += '**'
    return globToRegExp(pattern, false).test(location.branch) ? 'follow' : 'skip'
  }
  return 'undecided'
}

type Walk = { settings: AutostashSetting[]; read: string[]; undecided: string[] }

const walk = (
  file: string,
  home: string,
  location: Location | undefined,
  state: Walk,
  depth: number,
  label: (path: string) => string
): void => {
  if (depth > MAX_INCLUDE_DEPTH) return
  const text = readText(file)
  if (text === undefined) return
  state.read.push(label(file))
  for (const entry of parseGitConfig(text)) {
    const name = `${entry.section}.${entry.key}`
    if (entry.subsection === null && (AUTOSTASH_KEYS as readonly string[]).includes(name) && gitTrue(entry.value))
      state.settings.push({ key: name === 'rebase.autostash' ? 'rebase.autoStash' : name, origin: label(file) })
    if (entry.key !== 'path' || entry.value === null || entry.value === '') continue
    const target = (() => {
      const expanded = expandHome(entry.value as string, home)
      return isAbsolute(expanded) ? expanded : resolve(dirname(file), expanded)
    })()
    if (entry.section === 'include' && entry.subsection === null) walk(target, home, location, state, depth + 1, label)
    else if (entry.section === 'includeif' && entry.subsection !== null) {
      const verdict = decide(entry.subsection, file, home, location)
      if (verdict === 'follow') walk(target, home, location, state, depth + 1, label)
      else if (verdict === 'undecided') state.undecided.push(`${label(file)}: includeIf "${entry.subsection}"`)
    }
  }
}

/**
 * Every autostash setting of true in the repository's, the user's global and the XDG configuration, with its origin.
 * `environment` supplies `GIT_CONFIG_GLOBAL` and `XDG_CONFIG_HOME` when set.
 */
export const autostashEvidence = (
  repository: string,
  userHome: string,
  environment: Readonly<Record<string, string | undefined>> = process.env
): AutostashEvidence => {
  const root = resolve(repository)
  const location = gitLocation(root)
  const label = (path: string): string => {
    if (path.startsWith(`${root}/`)) return path.slice(root.length + 1)
    if (location && path.startsWith(`${location.commonDir}/`))
      return `.git/${path.slice(location.commonDir.length + 1)}`
    if (path.startsWith(`${userHome}/`)) return `~/${path.slice(userHome.length + 1)}`
    return path
  }
  const state: Walk = { settings: [], read: [], undecided: [] }
  const xdg = environment.XDG_CONFIG_HOME ? environment.XDG_CONFIG_HOME : join(userHome, '.config')
  const global = environment.GIT_CONFIG_GLOBAL ? environment.GIT_CONFIG_GLOBAL : join(userHome, '.gitconfig')
  // Git's order: system (out of scope), XDG, global, local, worktree.
  walk(join(xdg, 'git', 'config'), userHome, location, state, 0, label)
  walk(global, userHome, location, state, 0, label)
  if (location) {
    walk(join(location.commonDir, 'config'), userHome, location, state, 0, label)
    walk(join(location.gitDir, 'config.worktree'), userHome, location, state, 0, label)
  }
  return { settings: state.settings, read: state.read, undecided: state.undecided }
}

/** One violation per autostash setting of true, naming the file that sets it. */
export const autostashOutcomes = ({
  autostash
}: {
  readonly autostash: AutostashEvidence
}): readonly AuditOutcome[] => {
  const undecided: AuditOutcome[] = autostash.undecided.map((include) => ({
    status: 'INFO',
    message: `a conditional include this check cannot decide was not followed: ${include}`
  }))
  if (autostash.settings.length > 0)
    return [
      ...autostash.settings.map(
        (setting): AuditOutcome => ({
          status: 'VIOLATION',
          subject: setting.origin,
          message: `\`${setting.key}\` is true in ${setting.origin}, so a pull or rebase stashes a shared tree`
        })
      ),
      ...undecided
    ]
  return [
    {
      status: 'PASS',
      message:
        autostash.read.length > 0
          ? `no autostash setting is true in ${autostash.read.join(', ')}`
          : 'no repository, global or XDG Git configuration file sets autostash'
    },
    ...undecided
  ]
}
