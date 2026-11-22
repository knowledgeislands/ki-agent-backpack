import { existsSync, lstatSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import type {
  ConformWrite,
  RubricContextOptions,
  RubricPublicationContext,
  RubricSession
} from '../../shared/rubric.ts'

const ACQUIRED_PATH = '+/_ACQUIRED/README.md'
const ACQUIRED_TEMPLATE = readFileSync(new URL('../../../assets/templates/acquired/README.md', import.meta.url), 'utf8')
type ScaffoldState = 'missing' | 'canonical' | 'drifted' | 'unsafe'

const scaffoldState = (root: string): ScaffoldState => {
  const parts = ['+', '_ACQUIRED', 'README.md']
  for (let index = 0; index < parts.length; index++) {
    const path = join(root, ...parts.slice(0, index + 1))
    let metadata: ReturnType<typeof lstatSync>
    try {
      metadata = lstatSync(path)
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') return 'missing'
      throw error
    }
    const leaf = index === parts.length - 1
    if (metadata.isSymbolicLink() || (leaf ? !metadata.isFile() : !metadata.isDirectory())) return 'unsafe'
    if (leaf) return readFileSync(path).equals(Buffer.from(ACQUIRED_TEMPLATE)) ? 'canonical' : 'drifted'
  }
  return 'missing'
}

const REQUIRED = [
  'Admin/MEMORY.md',
  'Admin/Governance/Charter.md',
  'Admin/Governance/Known Lands.md',
  'Admin/Governance/Conventions/Conventions.md',
  'Admin/Operations/Processes/Enactment Process.md'
] as const

export type PrincipalContext = {
  readonly rubric: RubricPublicationContext
  /** The base is its territory's Capital: `[skills.ki-repo]` names itself as `capital` (KB-FOLD b). */
  readonly capital: boolean
  readonly missing: readonly string[]
  readonly empty: readonly string[]
  readonly acquired: {
    readonly state: ScaffoldState
    readonly synchronise?: () => void
  }
}

const regular = (path: string): boolean =>
  existsSync(path) && !lstatSync(path).isSymbolicLink() && lstatSync(path).isFile()

const isCapital = (root: string): boolean => {
  const path = join(root, '.ki.toml')
  if (!regular(path)) return false
  try {
    const skills = (Bun.TOML.parse(readFileSync(path, 'utf8')) as { skills?: Record<string, Record<string, unknown>> })
      .skills
    const table = skills?.['ki-repo']
    return typeof table?.capital === 'string' && table.capital === table.repository
  } catch {
    return false
  }
}

export const createPrincipalSession = ({
  mode,
  repository,
  publication
}: RubricContextOptions): RubricSession<PrincipalContext> => {
  const root = resolve(repository)
  const state = scaffoldState(root)
  let requested = false
  const capital = isCapital(root)
  const context: PrincipalContext = {
    rubric: { publication },
    capital,
    missing: REQUIRED.filter((path) => !regular(join(root, path))),
    empty: REQUIRED.filter((path) => regular(join(root, path)) && !readFileSync(join(root, path), 'utf8').trim()),
    acquired: {
      state,
      ...(mode === 'conform' && capital && state !== 'unsafe'
        ? {
            synchronise: () => {
              requested = true
            }
          }
        : {})
    }
  }
  return {
    subjects: [
      { families: ['RUBRIC'], context: () => context },
      { families: ['PRINCIPAL'], context: () => context }
    ],
    proposal: () => {
      const writes: ConformWrite[] =
        requested && state !== 'canonical'
          ? [{ path: ACQUIRED_PATH, content: ACQUIRED_TEMPLATE, ...(state === 'missing' ? { create: true } : {}) }]
          : []
      return { writes }
    }
  }
}
