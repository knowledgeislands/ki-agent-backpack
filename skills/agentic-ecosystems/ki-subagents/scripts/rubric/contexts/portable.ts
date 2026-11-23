import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs'
import { join, posix } from 'node:path'
import type { RubricContextOptions, RubricPublicationContext, RubricSession } from '../../shared/rubric.ts'

/** The register of a backpack's roles: `subagents/README.md`, linking each role source (SUBAGENT-PUBLISHER a). */
export const REGISTER_PATH = 'subagents/README.md'

/** One role source under `subagents/`, with the `name` its frontmatter declares. */
export type RoleSource = { readonly path: string; readonly name: string | null }

/** What the register and the role sources hold, read from the repository. */
export type RegisterEvidence = {
  /** False when the repository has no `subagents/` directory. */
  readonly present: boolean
  readonly registerExists: boolean
  readonly sources: readonly RoleSource[]
  /** Repository-relative paths of the Markdown files the register links to under `subagents/`. */
  readonly registered: readonly string[]
}

export type PortableContext = { rubric: RubricPublicationContext; register: () => RegisterEvidence }

const frontmatterName = (text: string): string | null => {
  const block = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)?.[1]
  const name = block ? /^name:\s*['"]?([^'"\s]+)['"]?\s*$/m.exec(block)?.[1] : undefined
  return name ?? null
}

const roleSources = (repository: string, directory: string): RoleSource[] => {
  const sources: RoleSource[] = []
  for (const entry of readdirSync(join(repository, directory), { withFileTypes: true })) {
    const path = posix.join(directory, entry.name)
    if (entry.isDirectory()) sources.push(...roleSources(repository, path))
    else if (entry.isFile() && entry.name.endsWith('.md') && path !== REGISTER_PATH)
      sources.push({ path, name: frontmatterName(readFileSync(join(repository, path), 'utf8')) })
  }
  return sources
}

const registeredPaths = (text: string): string[] => {
  const paths = new Set<string>()
  for (const match of text.matchAll(/\]\(([^)\s#]+\.md)(?:#[^)]*)?\)/g)) {
    const target = match[1] as string
    if (/^[a-z]+:/i.test(target) || target.startsWith('/')) continue
    const path = posix.normalize(posix.join('subagents', target))
    if (path.startsWith('subagents/')) paths.add(path)
  }
  return [...paths].sort()
}

/** Reads the register and the role sources once per session. */
export const inspectRegister = (repository: string): RegisterEvidence => {
  const directory = join(repository, 'subagents')
  if (!existsSync(directory) || !lstatSync(directory).isDirectory())
    return { present: false, registerExists: false, sources: [], registered: [] }
  const registerFile = join(repository, REGISTER_PATH)
  const registerExists = existsSync(registerFile) && lstatSync(registerFile).isFile()
  return {
    present: true,
    registerExists,
    sources: roleSources(repository, 'subagents').sort((a, b) => a.path.localeCompare(b.path)),
    registered: registerExists ? registeredPaths(readFileSync(registerFile, 'utf8')) : []
  }
}

export const createPortableSession = ({
  publication,
  repository
}: RubricContextOptions): RubricSession<PortableContext> => {
  let evidence: RegisterEvidence | undefined
  const context: PortableContext = {
    rubric: { publication },
    register: () => {
      evidence ??= inspectRegister(repository)
      return evidence
    }
  }
  return {
    subjects: [
      { families: ['PORTABLE', 'HOST'], context: () => context, subject: 'portable role contract' },
      { families: ['REGISTER'], context: () => context, subject: REGISTER_PATH },
      { families: ['RUBRIC'], context: () => context, subject: 'ki-subagents' }
    ],
    proposal: () => ({ writes: [] })
  }
}
