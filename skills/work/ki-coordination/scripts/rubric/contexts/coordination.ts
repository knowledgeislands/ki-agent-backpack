/**
 * Read-only discovery of a repository's coordinating work for the thin `ki-coordination` rubric.
 *
 * Boundary: reads the repository's `.ki.toml` identity, its work files `+/_WORK/<id>/_index.md`, and for the tolerance
 * window its `+/_CHECKPOINTS/` records, each old shape passing with a warning; reports are no longer read, their checks
 * retired under COORD-REPORT-CHECKS (Kris, 15 November 2026), and where territory work sits and the level a work file
 * declares are no longer checked, those checks retired under COORD-RETIRE (Kris, 16 November 2026); on a Capital the `Streams/Projects/`, `Streams/Themes/` and legacy `Streams/Initiatives/` registry; and the
 * coordinator binding: the repository's and the user's Claude Code settings, of which it reads only the output style and the hook
 * commands, and the deployed output style; and for the owner-queue cap the front matter of the roadmap records in the
 * checkout and in each checkout beside it that names the same Capital. It never
 * writes, and it never judges a transcript: coordinator behaviour is reviewed by the judgment items from evidence the
 * owner selects.
 */
import { type Dirent, existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs'
import { basename, dirname, extname, join, relative, resolve } from 'node:path'
import type {
  AuditOutcome,
  RubricContextOptions,
  RubricPublicationContext,
  RubricSession
} from '../../shared/rubric.ts'

/** Territory work's cap on simultaneously active Project work. */
export const ACTIVE_THREAD_CAP = 4
const CHECKPOINT_DIRECTORY = join('+', '_CHECKPOINTS')
const WORK_DIRECTORY = join('+', '_WORK')
const PROJECTS_DIRECTORY = join('Streams', 'Projects')
const THEMES_DIRECTORY = join('Streams', 'Themes')
const INITIATIVES_DIRECTORY = join('Streams', 'Initiatives')
/** A work's entry file under INDEX-ENTRY (Kris, 8 November 2026), then `work.md`, still read during its rollout. */
const ENTRY_FILES = ['_index.md', 'work.md'] as const
/** The entry file a folder holds, `_index.md` first, or the `_index.md` it lacks. */
const entryPath = (folder: string): string =>
  ENTRY_FILES.map((name) => join(folder, name)).find((path) => existsSync(path)) ?? join(folder, ENTRY_FILES[0])
/** The work package's state file; a folder holding one is in the five-file package shape. */
const STATE_FILE = 'state.md'
/** More roadmap records than this awaiting acceptance for one Project is over the owner-queue cap, warned on rather than failed. */
export const AWAITING_ACCEPTANCE_LIMIT = 8
/** The roadmap folders of a Knowledge Base and of a code repository. */
const ROADMAP_DIRECTORIES = [join('Streams', 'Roadmap'), join('docs', 'roadmap')] as const
/** The roadmap status of a record whose delivery waits on the owner's acceptance. */
const AWAITING_ACCEPTANCE = 'awaiting-review'
const WORK_SEGMENT = '[a-z0-9]+(?:-[a-z0-9]+)*'
/** A sub-package's id, `<parent id>.<slug>` under a typed regular or Project package. */
const SUB_PACKAGE_ID = new RegExp(`^${WORK_SEGMENT}\\.(?:reg|prj)(?:\\.${WORK_SEGMENT}){2}$`)
/** The work states a work file's `state` takes, as the Work Process note's observatory fields name them. */
const SETTLED_STATES: ReadonlySet<string> = new Set(['on-hold', 'finished'])
const OUTPUT_STYLE = 'ki-coordinator'
const COORDINATOR_HOOK = 'coordinator-reminder.sh'
const HOOK_EVENTS = ['UserPromptSubmit', 'SessionStart'] as const
const PROJECT_THREAD = /^(?<initiative>[a-z0-9]+(?:-[a-z0-9]+)*)\.(?<project>[a-z0-9]+(?:-[a-z0-9]+)*)$/
export type OutcomeContext = { readonly outcomes: readonly AuditOutcome[] }

export type CoordinationRubricContext = {
  readonly rubric: RubricPublicationContext
  readonly labels: OutcomeContext
  readonly cap: OutcomeContext
  readonly binding: OutcomeContext
  readonly judgment: OutcomeContext
}

type Checkpoint = {
  readonly path: string
  readonly thread: string
  readonly fields: Readonly<Record<string, unknown>> | null
}

/** One work file: its id from its folder name, its folder and its front matter. */
export type Work = {
  readonly path: string
  readonly id: string
  readonly folder: string
  readonly fields: Readonly<Record<string, unknown>> | null
}

export type WorkLevel = 'territory' | 'regular' | 'project'

type Identity = { readonly repository?: string; readonly capital?: string }

const table = (value: unknown): Readonly<Record<string, unknown>> | null =>
  value && typeof value === 'object' && !Array.isArray(value) ? (value as Readonly<Record<string, unknown>>) : null

const physicalDirectory = (path: string): boolean =>
  existsSync(path) && !lstatSync(path).isSymbolicLink() && lstatSync(path).isDirectory()

const one = (outcomes: readonly AuditOutcome[], pass: string, absent?: string): readonly AuditOutcome[] => {
  if (absent) return [{ status: 'NOT_APPLICABLE', message: absent }]
  return outcomes.length > 0 ? outcomes : [{ status: 'PASS', message: pass }]
}

/** The `[skills.ki-repo]` identity of a checkout, or an empty identity when it cannot be read. */
export const repositoryIdentity = (root: string): Identity => {
  const config = join(root, '.ki.toml')
  if (!existsSync(config)) return {}
  try {
    const repo = table(table(table(Bun.TOML.parse(readFileSync(config, 'utf8')))?.skills)?.['ki-repo'])
    const repository = typeof repo?.repository === 'string' ? repo.repository : undefined
    const capital = typeof repo?.capital === 'string' ? repo.capital : undefined
    return { repository, capital }
  } catch {
    return {}
  }
}

/** A Capital is a repository whose declared `capital` is itself. */
export const isCapital = (identity: Identity): boolean =>
  Boolean(identity.repository) && identity.repository === identity.capital

/**
 * The level a work id implies: one segment is territory work, the main State of play; a second segment `sop` is a
 * secondary State of play, territory work too; a second segment `regular` regular work; any other Project work.
 */
export const workLevel = (id: string): WorkLevel => {
  const segments = id.split('.')
  if (segments.length === 1 || segments[1] === 'sop') return 'territory'
  return segments[1] === 'reg' || segments[1] === 'regular' ? 'regular' : 'project'
}

const frontMatter = (path: string): Readonly<Record<string, unknown>> | null => {
  const lines = readFileSync(path, 'utf8').split(/\r?\n/)
  let fields: Readonly<Record<string, unknown>> | null = null
  if (lines[0]?.trim() === '---') {
    const closing = lines.findIndex((line, index) => index > 0 && line.trim() === '---')
    if (closing > 0) {
      try {
        fields = table(Bun.YAML.parse(lines.slice(1, closing).join('\n')))
      } catch {
        fields = null
      }
    }
  }
  return fields
}

const parseCheckpoint = (path: string, root: string): Checkpoint => ({
  path: relative(root, path),
  thread: basename(path, '.md'),
  fields: frontMatter(path)
})

/** The folders directly under a directory, sorted, or undefined when the directory is absent. */
const folders = (directory: string): readonly string[] | undefined => {
  if (!physicalDirectory(directory)) return undefined
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.isSymbolicLink())
    .map((entry) => join(directory, entry.name))
    .sort((left, right) => left.localeCompare(right))
}

/**
 * The front matter of a work: its work file's, with the state file's over it where the folder is in the package shape,
 * so the state fields are read from `state.md` and the definition fields from `_index.md`.
 */
const workFields = (folder: string): Readonly<Record<string, unknown>> | null => {
  const definition = frontMatter(entryPath(folder))
  if (!existsSync(join(folder, STATE_FILE))) return definition
  const state = frontMatter(join(folder, STATE_FILE))
  return definition && state ? { ...definition, ...state, id: definition.id ?? state.id } : definition
}

/** The work files `+/_WORK/<id>/_index.md`, or `work.md` during the rollout, or undefined when no `+/_WORK/` subarea exists. */
const workFiles = (root: string): readonly Work[] | undefined => {
  const found = folders(join(root, WORK_DIRECTORY))
  if (!found) return undefined
  return found
    .filter((folder) => existsSync(entryPath(folder)))
    .map((folder) => ({
      path: relative(root, entryPath(folder)),
      id: basename(folder),
      folder,
      fields: workFields(folder)
    }))
}

const checkpoints = (root: string): readonly Checkpoint[] | undefined => {
  const directory = join(root, CHECKPOINT_DIRECTORY)
  if (!physicalDirectory(directory)) return undefined
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && !entry.isSymbolicLink() && extname(entry.name) === '.md')
    .filter((entry) => entry.name !== 'README.md')
    .sort((left, right) => left.name.localeCompare(right.name))
    .map((entry) => parseCheckpoint(join(directory, entry.name), root))
}

/** Registry slugs: `<slug>.md` or the folder note `<slug>/<slug>.md`. */
const registrySlugs = (directory: string): ReadonlySet<string> | undefined => {
  if (!physicalDirectory(directory)) return undefined
  const slugs = new Set<string>()
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isFile() && extname(entry.name) === '.md') {
      const slug = basename(entry.name, '.md')
      if (slug !== 'Projects' && slug !== 'Initiatives' && slug !== 'Themes' && slug !== 'README') slugs.add(slug)
    } else if (entry.isDirectory() && existsSync(join(directory, entry.name, `${entry.name}.md`))) {
      slugs.add(entry.name)
    }
  }
  return slugs
}

const projectLabel = (label: string, project: string, title = project.replaceAll('-', ' ')): boolean =>
  label.endsWith(`: ${project}`) || label.toLowerCase().endsWith(` > ${title.toLowerCase()}`)

/** A tolerance-window warning: the old shape passes, naming its new home. */
const legacy = (message: string, subject: string): AuditOutcome => ({
  status: 'VIOLATION',
  level: 'WARN',
  message,
  subject
})

/** The first UTC day on which a theme resolving only in `Streams/Initiatives/` fails rather than warns, set under THEME-CLOSE. */
export const THEMES_CLOSE = '2026-11-07'

/** The current UTC day, `YYYY-MM-DD`. */
const utcDay = (): string => new Date().toISOString().slice(0, 10)

/** The theme a work file names, resolved in `Streams/Themes/`, or in the legacy `Streams/Initiatives/` with a warning until {@link THEMES_CLOSE} and a violation from it. */
export const themeOutcomes = (
  work: Work,
  themes: ReadonlySet<string> | undefined,
  initiatives: ReadonlySet<string> | undefined,
  today = utcDay()
): AuditOutcome[] => {
  const theme = work.fields?.theme
  if (theme === undefined || theme === null) return []
  if (typeof theme !== 'string')
    return [{ status: 'VIOLATION', message: "a work file's `theme` is a theme slug", subject: work.path }]
  if (themes?.has(theme)) return []
  if (initiatives?.has(theme)) {
    const message = `the theme \`${theme}\` resolves only in the legacy \`Streams/Initiatives/\` registry; its page moves to \`Streams/Themes/${theme}.md\``
    return [
      today < THEMES_CLOSE
        ? legacy(`${message}, which fails from ${THEMES_CLOSE}`, work.path)
        : { status: 'VIOLATION', level: 'FAIL', message, subject: work.path }
    ]
  }
  if (!themes && !initiatives) return []
  return [
    {
      status: 'VIOLATION',
      message: `the theme \`${theme}\` is not in the Capital's \`Streams/Themes/\` registry`,
      subject: work.path
    }
  ]
}

/** A registered Project's title from its note, flat or folder, falling back to the slug in words. */
const registeredProjectTitle = (root: string, projects: ReadonlySet<string> | undefined, slug: string): string => {
  const flatNote = join(root, PROJECTS_DIRECTORY, `${slug}.md`)
  const projectNote = existsSync(flatNote) ? flatNote : join(root, PROJECTS_DIRECTORY, slug, `${slug}.md`)
  const registeredTitle = projects?.has(slug) ? frontMatter(projectNote)?.title : undefined
  return typeof registeredTitle === 'string' && registeredTitle.trim() ? registeredTitle : slug.replaceAll('-', ' ')
}

const labelOutcomes = (
  root: string,
  records: readonly Checkpoint[],
  works: readonly Work[],
  capital: boolean,
  today = utcDay()
): AuditOutcome[] => {
  const outcomes: AuditOutcome[] = []
  const projects = capital ? registrySlugs(join(root, PROJECTS_DIRECTORY)) : undefined
  const themes = capital ? registrySlugs(join(root, THEMES_DIRECTORY)) : undefined
  const initiatives = capital ? registrySlugs(join(root, INITIATIVES_DIRECTORY)) : undefined
  for (const work of works) {
    if (workLevel(work.id) !== 'project' || SUB_PACKAGE_ID.test(work.id)) continue
    const slug = work.id.split('.')[work.id.split('.')[1] === 'prj' ? 2 : 1] ?? ''
    const project = work.fields?.project
    if (project !== slug)
      outcomes.push({
        status: 'VIOLATION',
        message: `Project work names its Project in \`project: ${slug}\`, the second segment of its id`,
        subject: work.path
      })
    if (projects && !projects.has(slug))
      outcomes.push({
        status: 'VIOLATION',
        message: `the Project \`${slug}\` is not in the Capital's \`Streams/Projects/\` registry`,
        subject: work.path
      })
    if (capital) outcomes.push(...themeOutcomes(work, themes, initiatives, today))
  }
  for (const record of records) {
    const match = PROJECT_THREAD.exec(record.thread)
    if (!match?.groups) continue
    const { initiative, project } = match.groups as { initiative: string; project: string }
    const label = record.fields?.label
    const projectTitle = registeredProjectTitle(root, projects, project)
    if (typeof label === 'string' && !projectLabel(label, project, projectTitle))
      outcomes.push({
        status: 'VIOLATION',
        message: `the label of a coordination thread checkpoint ends in its Project name, \` > ${projectTitle}\` or \`: ${project}\``,
        subject: record.path
      })
    if (projects && !projects.has(project))
      outcomes.push({
        status: 'VIOLATION',
        message: `the Project \`${project}\` is not in the Capital's \`Streams/Projects/\` registry`,
        subject: record.path
      })
    if (initiatives && !initiatives.has(initiative))
      outcomes.push({
        status: 'VIOLATION',
        message: `the Initiative \`${initiative}\` is not in the Capital's \`Streams/Initiatives/\` registry`,
        subject: record.path
      })
    outcomes.push(
      legacy(
        `the coordination thread checkpoint is the thread-model shape; its work moves to \`+/_WORK/<territory>.${project}/_index.md\` at the territory's migration`,
        record.path
      )
    )
  }
  return outcomes
}

const capOutcomes = (records: readonly Checkpoint[], works: readonly Work[]): AuditOutcome[] => {
  const activeWork = works.filter(
    (work) =>
      workLevel(work.id) === 'project' &&
      !SUB_PACKAGE_ID.test(work.id) &&
      !SETTLED_STATES.has(String(work.fields?.state ?? ''))
  )
  const activeThreads = records.filter(
    (record) => PROJECT_THREAD.test(record.thread) && (record.fields?.state ?? 'active') === 'active'
  )
  const active = activeWork.length + activeThreads.length
  if (active <= ACTIVE_THREAD_CAP) return []
  return [
    {
      status: 'VIOLATION',
      message: `${active} pieces of Project work are active; territory work keeps at most ${ACTIVE_THREAD_CAP} active at once`,
      subject: activeWork.length > 0 ? WORK_DIRECTORY : CHECKPOINT_DIRECTORY
    }
  ]
}

/**
 * The checkouts whose roadmaps count towards the owner queue: the audited root, and each checkout beside it whose
 * `.ki.toml` names the same Capital, so a Capital counts the records its siblings hold for its Projects.
 */
const territoryCheckouts = (root: string): readonly string[] => {
  const capital = repositoryIdentity(root).capital
  if (!capital) return [root]
  const parent = dirname(resolve(root))
  let entries: Dirent[]
  try {
    entries = readdirSync(parent, { withFileTypes: true })
  } catch {
    return [resolve(root)]
  }
  const siblings = entries
    .filter((entry) => entry.isDirectory() && !entry.isSymbolicLink())
    .map((entry) => join(parent, entry.name))
    .filter((checkout) => checkout !== resolve(root) && repositoryIdentity(checkout).capital === capital)
  return [resolve(root), ...siblings]
}

/** The roadmap records awaiting the owner's acceptance in each checkout, counted by the Project their `project` field names. */
export const awaitingAcceptanceCounts = (checkouts: readonly string[]): ReadonlyMap<string, number> => {
  const counts = new Map<string, number>()
  for (const checkout of checkouts)
    for (const roadmap of ROADMAP_DIRECTORIES) {
      const directory = join(checkout, roadmap)
      if (!physicalDirectory(directory)) continue
      for (const entry of readdirSync(directory, { withFileTypes: true })) {
        if (!entry.isFile() || extname(entry.name) !== '.md') continue
        const fields = frontMatter(join(directory, entry.name))
        if (fields?.status !== AWAITING_ACCEPTANCE || typeof fields.project !== 'string') continue
        counts.set(fields.project, (counts.get(fields.project) ?? 0) + 1)
      }
    }
  return counts
}

/**
 * The owner-queue cap: more than eight roadmap records awaiting acceptance for a piece of Project work's Project warn.
 * The work folder's closed list and tidy are the `ki-work-package` FOLDER items.
 */
const queueOutcomes = (root: string, work: readonly string[]): AuditOutcome[] => {
  const projects = work.filter(
    (folder) => workLevel(basename(folder)) === 'project' && !SUB_PACKAGE_ID.test(basename(folder))
  )
  if (projects.length === 0) return []
  const awaiting = awaitingAcceptanceCounts(territoryCheckouts(root))
  return projects.flatMap((folder): AuditOutcome[] => {
    const parts = basename(folder).split('.')
    const project = parts[parts[1] === 'prj' ? 2 : 1] ?? ''
    const count = awaiting.get(project) ?? 0
    return count > AWAITING_ACCEPTANCE_LIMIT
      ? [
          {
            status: 'VIOLATION',
            message: `${count} roadmap records await acceptance for Project \`${project}\`, more than ${AWAITING_ACCEPTANCE_LIMIT}: over the owner-queue cap; launch no new build or planning run until acceptance catches up, while acceptance fixes and backlog-clearing work stay allowed`,
            subject: relative(root, folder)
          }
        ]
      : []
  })
}

const settings = (path: string): Readonly<Record<string, unknown>> | null | undefined => {
  if (!existsSync(path)) return undefined
  try {
    return table(JSON.parse(readFileSync(path, 'utf8')))
  } catch {
    return null
  }
}

/** Whether a Claude Code settings `hooks` table runs the coordinator hook at an event. */
const runsHook = (hooks: Readonly<Record<string, unknown>> | null, event: string): boolean => {
  const groups = hooks?.[event]
  if (!Array.isArray(groups)) return false
  return groups.some((group) => {
    const handlers = table(group)?.hooks
    return (
      Array.isArray(handlers) &&
      handlers.some((handler) => {
        const command = table(handler)?.command
        return typeof command === 'string' && command.includes(COORDINATOR_HOOK)
      })
    )
  })
}

/**
 * The coordinator binding where `ki-coordination` is declared: the repository's tracked settings select the output style, and
 * the user's Claude Code settings register the hook with the style deployed beside them. The user half is reported as
 * not checked when the user settings are absent, as on a machine with no Claude Code.
 */
export const bindingOutcomes = (root: string, userHome: string): AuditOutcome[] => {
  const outcomes: AuditOutcome[] = []
  const repositorySettings = join('.claude', 'settings.json')
  const tracked = settings(join(root, repositorySettings))
  outcomes.push(
    tracked?.outputStyle === OUTPUT_STYLE
      ? { status: 'PASS', message: `The repository selects the \`${OUTPUT_STYLE}\` output style.` }
      : {
          status: 'VIOLATION',
          message: `a repository that declares \`ki-coordination\` selects \`"outputStyle": "${OUTPUT_STYLE}"\` in its tracked \`.claude/settings.json\``,
          subject: repositorySettings
        }
  )
  const user = settings(join(userHome, '.claude', 'settings.json'))
  if (user === undefined) {
    outcomes.push({
      status: 'INFO',
      message: 'No user Claude Code settings are present; the coordinator hook binding is not checked.'
    })
    return outcomes
  }
  const missing = HOOK_EVENTS.filter((event) => !runsHook(table(user?.hooks), event))
  if (missing.length > 0)
    outcomes.push({
      status: 'VIOLATION',
      message: `the user's Claude Code settings run \`hooks/coordinator-reminder/${COORDINATOR_HOOK}\` at ${missing.map((event) => `\`${event}\``).join(' and ')}; the user-environment manager binds it`,
      subject: join('~', '.claude', 'settings.json')
    })
  const deployed = join('.claude', 'output-styles', `${OUTPUT_STYLE}.md`)
  if (!existsSync(join(userHome, deployed)))
    outcomes.push({
      status: 'VIOLATION',
      message: `the \`${OUTPUT_STYLE}\` output style is deployed for the user; the user-environment manager binds it`,
      subject: join('~', deployed)
    })
  if (missing.length === 0 && existsSync(join(userHome, deployed)))
    outcomes.push({
      status: 'PASS',
      message: 'The user binds the coordinator hook and deploys the output style.'
    })
  return outcomes
}

export const createCoordinationSession = ({
  repository,
  userHome,
  publication
}: RubricContextOptions): RubricSession<CoordinationRubricContext> => {
  const root = resolve(repository)
  const today = utcDay()
  const identity = repositoryIdentity(root)
  const capital = isCapital(identity)
  const records = checkpoints(root)
  const works = workFiles(root)
  const workFolders = folders(join(root, WORK_DIRECTORY))
  const absent =
    records || works
      ? undefined
      : 'No `+/_WORK/` or `+/_CHECKPOINTS/` subarea is present; no coordinating work has opened here.'
  const context: CoordinationRubricContext = {
    rubric: { publication },
    labels: {
      outcomes: one(
        labelOutcomes(root, records ?? [], works ?? [], capital, today),
        'Every piece of Project work names its Project and it resolves in the registry.',
        absent
      )
    },
    cap: {
      outcomes: one(
        [...capOutcomes(records ?? [], works ?? []), ...queueOutcomes(root, workFolders ?? [])],
        'The active Project work and its records awaiting acceptance are within the cap.',
        absent
      )
    },
    binding: { outcomes: bindingOutcomes(root, userHome) },
    judgment: {
      outcomes: [
        {
          status: 'INFO',
          message:
            'Coordinator responsiveness, the report forms, the mark and the refresh rule are reviewed from the transcripts, reports and work files the owner selects.'
        }
      ]
    }
  }
  return {
    subjects: [{ families: ['RUBRIC', 'COORD'], context: () => context }],
    proposal: () => ({ writes: [] })
  }
}
