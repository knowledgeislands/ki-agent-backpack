/**
 * Where work packages live and what each holds, read for the `ki-work-package` STRUCTURE and FOLDER families: the
 * packages under `work/<territory>/<work id>/`, each with its sub-packages; each package against its closed list,
 * `_index.md`, `NN-<slug>.change.md` change documents and sub-packages of the same shape; whether its Changes section
 * links every change document and sub-package; change documents due a tidy, by length or a Decided section; finished
 * work still standing; and the earlier copies of packages left in the retired working areas. The listings name
 * candidates; they are never permission to delete.
 */
import { type Dirent, existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import type { AuditOutcome } from '../../shared/rubric.ts'

/** The store's folder of packages, `work/<territory>/<work id>/`. */
export const WORK_DIRECTORY = 'work'
/** The package's entry file, its leading underscore sorting it first. */
export const ENTRY_FILE = '_index.md'
const KEBAB = '[a-z0-9]+(?:-[a-z0-9]+)*'
/** A change document, `NN-<slug>.change.md`, numbered in tens by group. */
export const CHANGE_DOCUMENT = new RegExp(`^\\d{2}-${KEBAB}\\.change\\.md$`)
/** A territory folder's name, and a sub-package folder's slug. */
export const SLUG = new RegExp(`^${KEBAB}$`)
/** The retired working areas, in each of which a package left behind is an earlier copy, listed under the tidy. */
export const EARLIER_AREAS = ['_WORK', '_WORK_REVIEW', '_THREADS', '_CHECKPOINTS'] as const

/** One package or sub-package folder, with the id its place gives it. */
export type PackageFolder = {
  readonly path: string
  readonly subject: string
  readonly name: string
  readonly territory: string
  /** The id the folder's place gives it: its own name at the top, `<parent id>+<slug>` for a sub-package. */
  readonly expectedId: string
  readonly parent?: PackageFolder
}

export type Layout = { readonly packages: readonly PackageFolder[]; readonly violations: readonly AuditOutcome[] }

/**
 * The prose words past which a change document is flagged for a tidy. A change document carries agreed change and its
 * open points, so one this long most likely still holds settled matter that belongs in its outline, its Steps or its
 * output; the figure is a prompt to tidy, not a hard limit.
 */
export const CHANGE_WORD_LIMIT = 1500

export type FolderOutcomes = {
  readonly closed: readonly AuditOutcome[]
  readonly finished: readonly AuditOutcome[]
  readonly changes: readonly AuditOutcome[]
  readonly tidy: readonly AuditOutcome[]
}

const physicalDirectory = (path: string): boolean =>
  existsSync(path) && !lstatSync(path).isSymbolicLink() && lstatSync(path).isDirectory()
export const physicalFile = (path: string): boolean =>
  existsSync(path) && !lstatSync(path).isSymbolicLink() && lstatSync(path).isFile()

const entries = (folder: string): Dirent[] =>
  readdirSync(folder, { withFileTypes: true }).sort((left, right) => left.name.localeCompare(right.name))

const one = (outcomes: readonly AuditOutcome[], pass: string, absent?: string): readonly AuditOutcome[] => {
  if (absent) return [{ status: 'NOT_APPLICABLE', message: absent }]
  return outcomes.length > 0 ? outcomes : [{ status: 'PASS', message: pass }]
}

const plainFile = (entry: Dirent): boolean => entry.isFile() && !entry.isSymbolicLink()

/** A folder inside a package that is a sub-package: a physical directory named by a slug, holding its entry file. */
const isSubPackage = (folder: string, entry: Dirent): boolean =>
  entry.isDirectory() &&
  !entry.isSymbolicLink() &&
  SLUG.test(entry.name) &&
  physicalFile(join(folder, entry.name, ENTRY_FILE))

/** A package folder and every sub-package below it, depth first. */
const withSubPackages = (folder: PackageFolder, root: string): PackageFolder[] => [
  folder,
  ...entries(folder.path)
    .filter((entry) => isSubPackage(folder.path, entry))
    .flatMap((entry) => {
      const path = join(folder.path, entry.name)
      return withSubPackages(
        {
          path,
          subject: relative(root, path),
          name: entry.name,
          territory: folder.territory,
          expectedId: `${folder.expectedId}+${entry.name}`,
          parent: folder
        },
        root
      )
    })
]

/**
 * The packages under `work/`, or undefined when it is absent: `work/` holds only territory folders, each only package
 * folders, each a physical directory holding its entry file, with no empty folder.
 */
export const workLayout = (root: string): Layout | undefined => {
  const directory = join(root, WORK_DIRECTORY)
  if (!existsSync(directory)) return undefined
  const subject = (path: string): string => relative(root, path)
  if (!physicalDirectory(directory))
    return {
      packages: [],
      violations: [{ status: 'VIOLATION', message: '`work/` must be a physical directory', subject: WORK_DIRECTORY }]
    }
  const packages: PackageFolder[] = []
  const violations: AuditOutcome[] = []
  for (const territory of entries(directory)) {
    const area = join(directory, territory.name)
    if (!territory.isDirectory() || territory.isSymbolicLink()) {
      violations.push({
        status: 'VIOLATION',
        message: '`work/` holds only territory folders, each a physical directory',
        subject: subject(area)
      })
      continue
    }
    if (!SLUG.test(territory.name))
      violations.push({
        status: 'VIOLATION',
        message: "a territory folder is named by its territory, the first segment of its packages' ids",
        subject: subject(area)
      })
    const held = entries(area)
    if (held.length === 0)
      violations.push({ status: 'VIOLATION', message: 'no empty folders: remove it', subject: subject(area) })
    for (const entry of held) {
      const path = join(area, entry.name)
      if (!entry.isDirectory() || entry.isSymbolicLink()) {
        violations.push({
          status: 'VIOLATION',
          message: 'a territory folder holds only package folders, each a physical directory',
          subject: subject(path)
        })
        continue
      }
      if (!physicalFile(join(path, ENTRY_FILE))) {
        violations.push({
          status: 'VIOLATION',
          message: `a package folder holds its entry file, \`${ENTRY_FILE}\`, as a regular file`,
          subject: subject(path)
        })
        continue
      }
      packages.push(
        ...withSubPackages(
          { path, subject: subject(path), name: entry.name, territory: territory.name, expectedId: entry.name },
          root
        )
      )
    }
  }
  return { packages, violations }
}

/**
 * Entries of a package folder outside its closed list: anything but `_index.md`, change documents and sub-packages,
 * each named relative to the package.
 */
export const packageStray = (folder: string): readonly string[] =>
  entries(folder).flatMap((entry) => {
    if (plainFile(entry) && (entry.name === ENTRY_FILE || CHANGE_DOCUMENT.test(entry.name))) return []
    if (isSubPackage(folder, entry)) return []
    return [entry.isDirectory() && !entry.isSymbolicLink() ? `${entry.name}/` : entry.name]
  })

/** The change documents directly in a package folder. */
export const changeDocuments = (folder: string): readonly string[] =>
  entries(folder)
    .filter((entry) => plainFile(entry) && CHANGE_DOCUMENT.test(entry.name))
    .map((entry) => entry.name)

/** The sub-package folder names directly in a package folder. */
export const subPackages = (folder: string): readonly string[] =>
  entries(folder)
    .filter((entry) => isSubPackage(folder, entry))
    .map((entry) => entry.name)

/** The text of a body's `## <heading>` section, its deeper headings included, or undefined when it has none. */
export const sectionText = (body: string, heading: string): string | undefined => {
  const match = new RegExp(`^## ${heading}[ \\t]*$([\\s\\S]*?)(?=^# |^## |(?![\\s\\S]))`, 'm').exec(body)
  return match ? (match[1] ?? '') : undefined
}

/** The relative link targets in a text, each without its anchor or a leading `./`. */
const linkTargets = (text: string): ReadonlySet<string> =>
  new Set(
    Array.from(text.matchAll(/\]\(<?([^)\s>]+)>?(?:\s+"[^"]*")?\)/g), (match) =>
      (match[1] ?? '').split('#')[0]?.replace(/^\.\//, '')
    ).filter((target): target is string => Boolean(target))
  )

/** The change documents and sub-packages a package's Changes section does not link. */
export const unlinkedChanges = (folder: string): readonly string[] => {
  const text = sectionText(readFileSync(join(folder, ENTRY_FILE), 'utf8'), 'Changes') ?? ''
  const targets = linkTargets(text)
  return [
    ...changeDocuments(folder).filter((name) => !targets.has(name)),
    ...subPackages(folder)
      .filter((name) => ![name, `${name}/`, `${name}/${ENTRY_FILE}`].some((target) => targets.has(target)))
      .map((name) => `${name}/`)
  ]
}

// A field of the entry file, read under its `ki-` name or, until packages are swept, its older bare name.
const frontField = (path: string, field: string): string | undefined => {
  if (!existsSync(path)) return undefined
  const head = /^---\r?\n([\s\S]*?)\r?\n---/.exec(readFileSync(path, 'utf8'))?.[1] ?? ''
  const read = (name: string) => new RegExp(`^${name}:[ \\t]*['"]?([^'"\\n]*?)['"]?[ \\t]*$`, 'm').exec(head)?.[1]
  const value = read(`ki-${field}`) ?? read(field)
  return value === undefined || value === '' ? undefined : value
}

/**
 * Whether a finished work's package is still standing and so awaits its close-out, whatever its mark: no coordinator
 * reads a Finished work's package, so territory work closes it under the `ki-work-package` close-out.
 */
export const awaitsCloseOut = (folder: string): boolean => frontField(join(folder, ENTRY_FILE), 'state') === 'finished'

/** A fence's opening line: three or more backticks or tildes, then any info string such as a language tag. */
const FENCE_OPEN = /^ {0,3}(`{3,}|~{3,})(.*)$/
/** A fence's closing line: its marker alone, with no info string. */
const FENCE_CLOSE = /^ {0,3}(`{3,}|~{3,})[ \t]*$/
const ATX_HEADING = /^ {0,3}#{1,6}[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/
/** A heading that is or begins with Decided, after any section number and emphasis, followed by no word character. */
const DECIDED = /^decided(?![\p{L}\p{N}_])/iu

/**
 * A document's body lines: front matter is set aside only when the document opens with a `---` line, a later `---` line
 * closes it, and what lies between is a YAML mapping; otherwise every line is body.
 */
const bodyLines = (text: string): string[] => {
  const lines = text.split(/\r?\n/)
  if (lines[0]?.trimEnd() !== '---') return lines
  const closing = lines.findIndex((line, index) => index > 0 && line.trimEnd() === '---')
  if (closing < 0) return lines
  try {
    const parsed: unknown = Bun.YAML.parse(lines.slice(1, closing).join('\n'))
    if (parsed !== null && (typeof parsed !== 'object' || Array.isArray(parsed))) return lines
  } catch {
    return lines
  }
  return lines.slice(closing + 1)
}

/** A line's text outside HTML comments, a `<!--` inside an inline code span opening none. */
const outsideComments = (line: string, state: { comment: boolean }): string => {
  let kept = ''
  let rest = line
  while (rest.length > 0) {
    if (state.comment) {
      const close = rest.indexOf('-->')
      if (close < 0) return kept
      rest = rest.slice(close + 3)
      state.comment = false
      continue
    }
    const span = /(`+)[\s\S]*?\1|<!--/.exec(rest)
    if (!span) return kept + rest
    if (span[0] !== '<!--') {
      kept += rest.slice(0, span.index + span[0].length)
      rest = rest.slice(span.index + span[0].length)
      continue
    }
    kept += rest.slice(0, span.index)
    rest = rest.slice(span.index + 4)
    state.comment = true
  }
  return kept
}

/** A change document's body lines outside front matter, fenced code and HTML comments. */
const proseLines = (text: string): string[] => {
  const lines: string[] = []
  const state = { comment: false }
  let fence: string | undefined
  for (const line of bodyLines(text)) {
    if (fence) {
      const close = FENCE_CLOSE.exec(line)?.[1]
      if (close && close[0] === fence[0] && close.length >= fence.length) fence = undefined
      continue
    }
    if (!state.comment) {
      const open = FENCE_OPEN.exec(line)
      if (open?.[1] && !(open[1][0] === '`' && open[2]?.includes('`'))) {
        fence = open[1]
        continue
      }
    }
    lines.push(outsideComments(line, state))
  }
  return lines
}

/** The prose words in lines: link text counts, link targets and bare punctuation such as table rules do not. */
const proseWords = (lines: readonly string[]): number =>
  lines
    .join('\n')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/<https?:[^>\s]*>/g, '')
    .split(/\s+/)
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length

/** The text of each heading that is or begins with Decided, at any level, its section number and emphasis aside. */
const decidedHeadings = (lines: readonly string[]): string[] =>
  lines.flatMap((line) => {
    const text = ATX_HEADING.exec(line)?.[1]
    if (text === undefined) return []
    const bare = text.replace(/^\d+(?:\.\d+)*\.?[ \t]+/, '').replace(/[*_`]/g, '')
    return DECIDED.test(bare) ? [text] : []
  })

/**
 * What marks a change document for a tidy: over {@link CHANGE_WORD_LIMIT} prose words, or a Decided section. Both mean
 * settled matter still stands in it that belongs in its outline or Steps, or that has landed and can go.
 */
export const changeTidy = (file: string): { readonly words: number; readonly decided: readonly string[] } => {
  const lines = proseLines(readFileSync(file, 'utf8'))
  return { words: proseWords(lines), decided: decidedHeadings(lines) }
}

const TIDY_GUIDANCE =
  'tidy it: apply each decided point to the outline or Steps and remove it, and delete the document once its work has landed'

const changeTidyOutcomes = (folder: PackageFolder): AuditOutcome[] =>
  changeDocuments(folder.path).flatMap((name) => {
    const { words, decided } = changeTidy(join(folder.path, name))
    const found = [
      ...(words > CHANGE_WORD_LIMIT
        ? [`runs to ${words.toLocaleString('en-GB')} words, past about ${CHANGE_WORD_LIMIT.toLocaleString('en-GB')}`]
        : []),
      ...(decided.length > 0 ? [`holds a Decided section (${decided.map((text) => `"${text}"`).join(', ')})`] : [])
    ]
    if (found.length === 0) return []
    return [
      {
        status: 'VIOLATION' as const,
        message: `this change document ${found.join(' and ')}; ${TIDY_GUIDANCE}`,
        subject: join(folder.subject, name)
      }
    ]
  })

export const folderOutcomes = (root: string, layout = workLayout(root)): FolderOutcomes => {
  const absent = layout ? undefined : 'No `work/` folder is present.'
  const closed: AuditOutcome[] = []
  const finished: AuditOutcome[] = []
  const changes: AuditOutcome[] = []
  const tidy: AuditOutcome[] = []
  for (const folder of layout?.packages ?? []) {
    tidy.push(...changeTidyOutcomes(folder))
    const stray = packageStray(folder.path)
    if (stray.length > 0)
      closed.push({
        status: 'VIOLATION',
        message: `a package holds only \`${ENTRY_FILE}\`, its change documents \`NN-<slug>.change.md\` and sub-packages of the same shape; outside the closed list: ${stray.join(', ')}`,
        subject: folder.subject
      })
    if (folder.parent && changeDocuments(folder.path).length === 0)
      closed.push({
        status: 'VIOLATION',
        message: `a sub-package holds its \`${ENTRY_FILE}\` and one or more change documents`,
        subject: folder.subject
      })
    const unlinked = unlinkedChanges(folder.path)
    if (unlinked.length > 0)
      changes.push({
        status: 'VIOLATION',
        message: `\`${ENTRY_FILE}\`'s Changes section links every change document and sub-package; not linked: ${unlinked.join(', ')}`,
        subject: join(folder.subject, ENTRY_FILE)
      })
    if (!folder.parent && awaitsCloseOut(folder.path))
      finished.push({
        status: 'VIOLATION',
        message:
          "finished work's package is still standing; territory work closes it at an owner-authorised mark whose report names it, deleting it in one commit once the close-out checks hold, and otherwise asks the owner",
        subject: folder.subject
      })
  }
  const count = layout?.packages.length ?? 0
  return {
    closed: one(closed, `The ${count} package(s) hold only their closed list.`, absent),
    finished: one(finished, "No finished work's package is left standing.", absent),
    changes: one(changes, 'Every package links each of its change documents and sub-packages.', absent),
    tidy: one(
      tidy,
      `Every change document keeps within about ${CHANGE_WORD_LIMIT.toLocaleString('en-GB')} words and holds no Decided section.`,
      absent
    )
  }
}
