import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, isAbsolute, join, relative, resolve } from 'node:path'
import type { RubricContextOptions, RubricPublicationContext, RubricSession } from '../../shared/rubric.ts'

const GUIDES_DIRECTORY = 'docs/guides'
/** The collection's page, `_index.md` alone (DOCS-LANDING-GITHUB), and the earlier name read until renamed. */
const INDEX_FILE = '_index.md'
const LEGACY_INDEX = 'README.md'
const RETIRED_ROOTS = ['docs/spec', 'docs/developer'] as const
const OPENING_FLOOR = 120

export type GuidesLayoutContext = {
  readonly directoryExists: boolean
  readonly indexExists: boolean
  /** Set where the entry point is still the earlier `README.md`, with no `_index.md`. */
  readonly legacyIndex: boolean
  /** Set where a `README.md` sits beside `_index.md`, which a docs folder leaves out. */
  readonly readmeBeside: boolean
  readonly rootGuides: readonly string[]
  readonly headingIssues: readonly string[]
  readonly openingIssues: readonly GuideOpeningIssue[]
  readonly escapingLinks: readonly string[]
}

export type GuideOpeningIssue = {
  readonly file: string
  readonly length: number
}

export type GuidesBoundaryContext = {
  readonly retiredRoots: readonly string[]
}

export type GuidesJudgmentContext = Record<never, never>

export type GuidesRubricContext = {
  readonly rubric: RubricPublicationContext
  readonly layout: GuidesLayoutContext
  readonly boundary: GuidesBoundaryContext
  readonly judgment: GuidesJudgmentContext
}

const isDirectory = (path: string): boolean =>
  existsSync(path) && !lstatSync(path).isSymbolicLink() && lstatSync(path).isDirectory()

const isFile = (path: string): boolean =>
  existsSync(path) && !lstatSync(path).isSymbolicLink() && lstatSync(path).isFile()

const safeDirectory = (root: string, directory: string): boolean => {
  const output = relative(root, directory)
  if (!output) return isDirectory(root)
  if (isAbsolute(output) || output === '..' || output.startsWith('../')) return false
  let cursor = root
  for (const segment of output.split(/[\\/]/)) {
    cursor = join(cursor, segment)
    if (!isDirectory(cursor)) return false
  }
  return true
}

const guideFiles = (root: string, directory: string): string[] => {
  const files: string[] = []
  const visit = (current: string): void => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const path = join(current, entry.name)
      if (entry.isDirectory() && !entry.isSymbolicLink()) visit(path)
      else if (
        entry.isFile() &&
        entry.name.endsWith('.md') &&
        relative(root, path) !== `${GUIDES_DIRECTORY}/${INDEX_FILE}` &&
        relative(root, path) !== `${GUIDES_DIRECTORY}/${LEGACY_INDEX}`
      )
        files.push(relative(root, path))
    }
  }
  visit(directory)
  return files.sort()
}

/**
 * Relative links from one guide to a Markdown document outside the collection.
 *
 * A guide must read completely without following a link, so the collection can
 * be moved or published as a unit. Code is not a document: a path to a script,
 * a directory, or a configuration file names the subject the guide explains,
 * and only a link whose target is another `.md` prose document breaks the rule.
 * Sibling guides are the exception the collection is navigated by.
 */
const escapingLinks = (root: string, file: string, content: string): string[] => {
  const guidesRoot = join(root, GUIDES_DIRECTORY)
  const from = join(root, file, '..')
  const found: string[] = []
  for (const match of content.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    const target = match[1] as string
    if (/^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(target)) continue
    const path = target.split('#')[0] as string
    if (!path.endsWith('.md')) continue
    const resolved = resolve(from, path)
    const inside = relative(guidesRoot, resolved)
    if (inside && (isAbsolute(inside) || inside === '..' || inside.startsWith('../'))) {
      found.push(`${file} -> ${target}`)
    }
  }
  return found
}

const h1Count = (content: string): number => {
  let fenced = false
  let count = 0
  for (const line of content.split('\n')) {
    if (/^\s*(`{3,}|~{3,})/.test(line)) {
      fenced = !fenced
      continue
    }
    if (!fenced && /^#\s+\S/.test(line)) count += 1
  }
  return count
}

/**
 * The prose a reader meets before the first `##`.
 *
 * Front matter, the H1, blank lines and HTML lines are not prose, so they do
 * not count towards the opening; the lead stops at the first H2 outside a fence.
 */
const openingLead = (content: string): string => {
  const lines = content.split('\n')
  let start = 0
  if (lines[0]?.trim() === '---') {
    const end = lines.findIndex((line, index) => index > 0 && line.trim() === '---')
    if (end > 0) start = end + 1
  }
  const lead: string[] = []
  let fenced = false
  for (const line of lines.slice(start)) {
    if (/^\s*(`{3,}|~{3,})/.test(line)) fenced = !fenced
    else if (!fenced && /^##\s/.test(line)) break
    const trimmed = line.trim()
    if (trimmed === '' || (!fenced && (/^#\s/.test(trimmed) || trimmed.startsWith('<')))) continue
    lead.push(trimmed)
  }
  return lead.join(' ')
}

export const createGuidesSession = ({
  repository,
  publication
}: RubricContextOptions): RubricSession<GuidesRubricContext> => {
  const root = resolve(repository)
  const directory = join(root, GUIDES_DIRECTORY)
  const directoryExists = safeDirectory(root, directory)
  const pageExists = directoryExists && isFile(join(directory, INDEX_FILE))
  const legacyExists = directoryExists && isFile(join(directory, LEGACY_INDEX))
  const indexExists = pageExists || legacyExists
  const legacyIndex = !pageExists && legacyExists
  const readmeBeside = pageExists && legacyExists
  const files = directoryExists ? guideFiles(root, directory) : []
  const rootGuides = files.filter((file) => dirname(file) === GUIDES_DIRECTORY)
  const headingIssues = files.filter((file) => h1Count(readFileSync(join(root, file), 'utf8')) !== 1)
  const openingIssues = files
    .map((file) => ({ file, length: openingLead(readFileSync(join(root, file), 'utf8')).length }))
    .filter((issue) => issue.length < OPENING_FLOOR)
  const escaping = files.flatMap((file) => escapingLinks(root, file, readFileSync(join(root, file), 'utf8')))
  const context: GuidesRubricContext = {
    rubric: { publication },
    layout: {
      directoryExists,
      indexExists,
      legacyIndex,
      readmeBeside,
      rootGuides,
      headingIssues,
      openingIssues,
      escapingLinks: escaping
    },
    boundary: { retiredRoots: RETIRED_ROOTS.filter((path) => existsSync(join(root, path))) },
    judgment: {}
  }

  return {
    subjects: [
      { families: ['RUBRIC'], context: () => context },
      { families: ['GUIDE', 'ROUTE'], context: () => context }
    ],
    proposal: () => ({ writes: [] })
  }
}
