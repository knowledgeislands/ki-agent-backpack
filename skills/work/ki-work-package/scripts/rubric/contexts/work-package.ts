/**
 * The `ki-work-package` audit context: every package under `work/<territory>/<work id>/`, sub-packages included, read
 * against the standard's entry file, state, closed list and boundary, and the earlier copies of packages left in the
 * retired working areas. The audit reads; it never authors, moves or deletes a package.
 */
import { existsSync, readFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type {
  AuditOutcome,
  RubricContextOptions,
  RubricPublicationContext,
  RubricSession
} from '../../shared/rubric.ts'
import { workIdentifier } from '../../shared/work-identifiers.ts'
import {
  EARLIER_AREAS,
  ENTRY_FILE,
  type FolderOutcomes,
  folderOutcomes,
  type PackageFolder,
  WORK_DIRECTORY,
  workLayout
} from './work-folder.ts'

const WORK_LEVELS: readonly unknown[] = ['root', 'territory', 'regular', 'project']
const WORK_STATES: readonly unknown[] = [
  'with-worker',
  'handoff-to-supervisor',
  'with-supervisor',
  'handoff-to-worker',
  'handoff',
  'on-hold',
  'finished'
]
const HOLD_REASONS: readonly unknown[] = ['paused', 'more-expected']
/** Who set a hold, under HOLD-SELF (Kris, 7 November 2026): the owner, or the worker itself for the idle hold. */
const HOLD_SETTERS: readonly unknown[] = ['owner', 'worker']
const KEBAB = '[a-z0-9]+(?:-[a-z0-9]+)*'
/** The reserved second id segment of a territory's top, its summit, `<territory>.summit` (KIND-DROP, MASSIF). */
const SUMMIT_SEGMENT = 'summit'
/** The root of the one work tree, the only package with no parent (AGORA-ABOVE, ROOT-LEVEL). */
const ROOT_ID = 'cairn.summit'
/**
 * The kind words an id's second segment carried before ids dropped their kind (KIND-DROP), read under the role
 * migration file and warned on: a node is `<territory>.<slug>`, its kind its `level` (NODE-ID a, 16 November 2026).
 */
const KIND_SEGMENTS: ReadonlySet<string> = new Set(['sop', 'prj', 'reg', 'regular'])
const WORK_ID = new RegExp(`^${KEBAB}(?:\\.${KEBAB})*$`)
/** A package's id: a dotted work id, and `+<slug>` for each strand a sub-package adds (SUMMIT-SUB-PACKAGES b). */
const PACKAGE_ID = new RegExp(`^${KEBAB}(?:\\.${KEBAB})*(?:\\+${KEBAB})*$`)
/** The levels whose sub-packages take `level: regular`, the one exception to a parent's level (SUMMIT-SUB-PACKAGES b). */
const SUMMIT_LEVELS: readonly unknown[] = ['root', 'territory']
const SLUG = new RegExp(`^${KEBAB}$`)
const HOLDER = new RegExp(
  `^(?:owner|agent|(?:run|person|repo)/[A-Za-z0-9_.-]+|work/${KEBAB}(?:\\.${KEBAB})*(?:\\+${KEBAB})*)$`
)
/** The definition fields of `_index.md`, each required one listed first. */
const DEFINITION_REQUIRED = ['id', 'level', 'description', 'worker', 'supervisor', 'repositories'] as const
const DEFINITION_FIELDS: readonly string[] = [
  ...DEFINITION_REQUIRED,
  'label',
  'project',
  'parent',
  'role',
  'created_at',
  'records'
]
/** The thread capability fields Kris set under FOOTER-CAPABILITY-STATUS-2 on 1 November 2026. */
const CAPABILITIES = ['listening', 'syncing'] as const
const CAPABILITY_FIELDS = CAPABILITIES.flatMap((capability) => [`${capability}_enabled`, `${capability}_status`])
const CAPABILITY_STATUSES: readonly unknown[] = ['on', 'off']
/** The state fields that stand beside the definition in `_index.md`, under PACKAGE-STATE (9 November 2026). */
const STATE_REQUIRED = ['state', 'since'] as const
const STATE_FIELDS: readonly string[] = [
  ...STATE_REQUIRED,
  'target',
  'hold',
  'blocking',
  'received',
  'beat',
  'mark',
  'method_read',
  'workers',
  ...CAPABILITY_FIELDS
]
const ENTRY_FIELDS: ReadonlySet<string> = new Set([...DEFINITION_FIELDS, ...STATE_FIELDS])
/**
 * Entry fields the work package standard has dropped, tolerated and warned on under the role migration file: `covers`,
 * whose register is now the tree beneath each node, read from `parent` (COVERS-REGISTER, Kris, 16 November 2026), and
 * `theme`, which stays on records while a Project's theme comes from its Project note (THEME-DROP, Kris, 19 November
 * 2026).
 */
const ENTRY_RETIRED_FIELDS: ReadonlySet<string> = new Set(['covers', 'theme'])
const ENTRY_REQUIRED: readonly string[] = [...DEFINITION_REQUIRED, ...STATE_REQUIRED]
/** The body of `_index.md`: the id H1, then these sections, with an optional `## Values` after Scope. */
const BODY_BEFORE_VALUES = ['Goals', 'Scope'] as const
const VALUES_HEADING = 'Values'
const BODY_AFTER_VALUES = ['Now', 'Held', 'Changes'] as const
/** Scope's Signposts line (SIGNPOSTS, Kris, 19 November 2026), plain or bold; its absence warns. */
const SIGNPOSTS_LINE = /^\s*(?:\*\*)?Signposts:?(?:\*\*)?:?\s/m
/**
 * The role standard, whose Role catalogue table is the one home of each role's tier and glyph (STAGE-C-ROLES, Kris, 7
 * November 2026). The checker reads it at audit time and holds no copy.
 */
const ROLE_STANDARD = fileURLToPath(new URL('../../../references/standard-roles.md', import.meta.url))
const ROLE_MIGRATION = 'migration-roles.md'
const TIERS: readonly string[] = ['leaders', 'managers', 'makers']
/**
 * The closed keys of a `workers` entry, its binding under the role standard (ROSTER-SPLIT a, 14 November 2026), and
 * the keys the role migration file tolerates; presence, host, rig and last seen, is the roster's, and listening is read
 * from meetings alone (LISTEN-HOME a, 16 November 2026). The entry points at its actor by typed id, never a copy of its
 * name (ACTOR-KEY a, 16 November 2026), so a leftover `name` or `actor` warns.
 */
const WORKER_FIELDS: ReadonlySet<string> = new Set(['id', 'role', 'tier', 'since', 'status'])
const WORKER_RETIRED_FIELDS: ReadonlySet<string> = new Set([
  'uri',
  'designation',
  'focus',
  'listening',
  'name',
  'actor'
])
/**
 * An actor's typed id, `actor:<id>`: a name such as `wayland`, or for an actor with no name its seat's id,
 * `<package>@<role>` or `<package>+<slug>@<role>` in a sub-package, such as `ki.cairn@information-architect` (SEAT-AT a, 16
 * November 2026).
 */
const ACTOR_ID = new RegExp(`^actor:(?:${KEBAB}(?:\\.${KEBAB})*(?:\\+${KEBAB})*@${KEBAB}|[a-z0-9][a-z0-9.-]*)$`)
/** A seat's id in the form SEAT-AT replaces, `<work id>+<role>`, read as `<work id>@<role>` and warned on. */
const LEGACY_SEAT_ID = new RegExp(`^actor:${KEBAB}(?:\\.${KEBAB})*\\+${KEBAB}$`)
/** A seat's status; a vacant seat is set up but not yet allocated (SEATS-VACANT a, Kris, 20 November 2026). */
const WORKER_STATUSES: readonly unknown[] = ['active', 'idle', 'vacant']
/**
 * Old role and tier words read under the role migration file, each warned on; `architect`, split into two makers under
 * ARCHITECT-SPLIT a (16 November 2026), is read as the information architect it was defined as, and `illustrator`,
 * renamed under ILLUSTRATOR-RENAME (21 November 2026), as the graphic designer.
 */
const ROLE_ALIASES: Readonly<Record<string, string>> = {
  assistant: 'gatekeeper',
  keeper: 'warden',
  steward: 'warden',
  architect: 'information-architect',
  illustrator: 'graphic-designer'
}
const TIER_ALIASES: Readonly<Record<string, string>> = { enablers: 'managers', doers: 'makers' }
const REVISION = /^[0-9a-f]{7,40}$/
/** The two limits the standard keeps, warned and never failed. */
const LIMITS = { description: 500, nowLines: 5 } as const
const DATED_LINE = /^\s*(?:[-*]|\d+\.)?\s*(?:\*\*)?\d{4}-\d{2}-\d{2}/gm
const COMMIT_ID = /\b(?=[0-9a-f]*\d)(?=[0-9a-f]*[a-f])[0-9a-f]{7,40}\b/g
const TEST_COUNT = /\b\d+\s+(?:tests?|pass(?:ed|es)?|fail(?:ed|s|ures?)?)\b/gi
const UTC_TIMESTAMP = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const OPAQUE_SESSION_NAME = /^(?:sess(?:ion)?|conversation)[_-][a-z0-9]{12,}$/i
const FORBIDDEN_KEY = /^(?:claude_|codex_)?(?:session|conversation|transcript)(?:_id|_url|_ref)?$/i
const TRANSCRIPT_LINE = /^(?:user|assistant|human|agent):\s+\S/im
const SESSION_CONTINUITY =
  /\b(?:resume|reopen|reattach|reconnect|authenticate|connect)\b[^\n.]{0,60}\b(?:conversation|session)\b/i
const SESSION_LOCATOR =
  /\b(?:https?:\/\/\S*(?:conversation|session)\S*|(?:claude|codex)[_-]?(?:session|conversation)[_-]?[a-z0-9-]{8,})\b/i

type ParsedRecord = {
  readonly path: string
  /** The front matter, each `ki-` field under its name without the prefix, so the checks below read one name. */
  readonly fields: Readonly<Record<string, unknown>> | null
  /** The fields written without the `ki-` prefix, read as their `ki-` names and warned on (KI-PREFIX a). */
  readonly unprefixed: readonly string[]
  readonly body: string
}

/** A package read for the audit: its folder and its parsed entry file. */
type Package = { readonly folder: PackageFolder; readonly entry: ParsedRecord }

export type OutcomeContext = { readonly outcomes: readonly AuditOutcome[] }
export type StructureContext = OutcomeContext & { readonly earlier: readonly AuditOutcome[] }
export type RecordContext = { readonly identity: readonly AuditOutcome[]; readonly schema: readonly AuditOutcome[] }
export type LifecycleContext = { readonly mechanical: readonly AuditOutcome[]; readonly size: readonly AuditOutcome[] }

export type WorkPackageRubricContext = {
  readonly rubric: RubricPublicationContext
  readonly configuration: OutcomeContext
  readonly structure: StructureContext
  readonly records: RecordContext
  readonly lifecycle: LifecycleContext
  readonly boundary: OutcomeContext
  readonly folder: FolderOutcomes
}

type Evidence = {
  identity: AuditOutcome[]
  schema: AuditOutcome[]
  lifecycle: AuditOutcome[]
  size: AuditOutcome[]
  boundary: AuditOutcome[]
}

const table = (value: unknown): Readonly<Record<string, unknown>> | null =>
  value && typeof value === 'object' && !Array.isArray(value) ? (value as Readonly<Record<string, unknown>>) : null

const one = (outcomes: readonly AuditOutcome[], pass: string, absent?: string): readonly AuditOutcome[] => {
  if (absent) return [{ status: 'NOT_APPLICABLE', message: absent }]
  return outcomes.length > 0 ? outcomes : [{ status: 'PASS', message: pass }]
}

/** The prefix every field of the entry file takes, as KI defines them all (KI-PREFIX a, Kris, 17 November 2026). */
const KI_PREFIX = 'ki-'

/**
 * The entry file's fields under their names without the `ki-` prefix, and those written without it, which are read the
 * same while packages are swept; where a field is written both ways, the `ki-` one stands.
 */
const unprefix = (
  raw: Readonly<Record<string, unknown>> | null
): { fields: Readonly<Record<string, unknown>> | null; unprefixed: readonly string[] } => {
  if (!raw) return { fields: raw, unprefixed: [] }
  const fields: Record<string, unknown> = {}
  const unprefixed: string[] = []
  for (const [key, value] of Object.entries(raw)) {
    if (key.startsWith(KI_PREFIX)) fields[key.slice(KI_PREFIX.length)] = value
    else if (!(`${KI_PREFIX}${key}` in raw)) {
      fields[key] = value
      unprefixed.push(key)
    }
  }
  return { fields, unprefixed }
}

const parseRecord = (path: string, root: string): ParsedRecord => {
  const text = readFileSync(path, 'utf8')
  const lines = text.split(/\r?\n/)
  let fields: Readonly<Record<string, unknown>> | null = null
  let unprefixed: readonly string[] = []
  let body = text
  if (lines[0]?.trim() === '---') {
    const closing = lines.findIndex((line, index) => index > 0 && line.trim() === '---')
    if (closing > 0) {
      try {
        ;({ fields, unprefixed } = unprefix(table(Bun.YAML.parse(lines.slice(1, closing).join('\n')))))
      } catch {
        fields = null
      }
      body = lines.slice(closing + 1).join('\n')
    }
  }
  return { path: relative(root, path), fields, unprefixed, body }
}

const validTimestamp = (value: unknown): value is string =>
  typeof value === 'string' && UTC_TIMESTAMP.test(value) && !Number.isNaN(Date.parse(value))

const singleLine = (value: unknown): boolean =>
  typeof value === 'string' && value.trim().length > 0 && !/[\r\n]/.test(value)

/** The H1 and H2 headings of a body, in order. */
const outline = (body: string): { level: number; title: string }[] =>
  [...body.matchAll(/^(#{1,2})\s+(.+?)\s*$/gm)].map((match) => ({
    level: match[1]?.length ?? 0,
    title: match[2] ?? ''
  }))

const sameOutline = (body: string, h1: string, h2: readonly string[]): boolean =>
  JSON.stringify(outline(body)) ===
  JSON.stringify([{ level: 1, title: h1 }, ...h2.map((title) => ({ level: 2, title }))])

/** The content under each H2 heading, keyed by its title. */
const h2Sections = (body: string): Map<string, string> => {
  const sections = new Map<string, string>()
  const matches = [...body.matchAll(/^## (.+?)\s*$/gm)]
  for (const [index, match] of matches.entries()) {
    const start = (match.index ?? 0) + match[0].length
    const end = matches[index + 1]?.index ?? body.length
    sections.set(match[1] ?? '', body.slice(start, end))
  }
  return sections
}

const nonEmptyLines = (text: string): number => text.split(/\r?\n/).filter((line) => line.trim().length > 0).length

/** Session-continuity material an entry file must not carry. */
const boundaryOutcomes = (record: ParsedRecord, fields: Readonly<Record<string, unknown>>): AuditOutcome[] => {
  const outcomes: AuditOutcome[] = []
  const forbiddenFields = Object.keys(fields).filter((key) => FORBIDDEN_KEY.test(key))
  if (forbiddenFields.length > 0)
    outcomes.push({
      status: 'VIOLATION',
      message: `record carries forbidden session or transcript field(s): ${forbiddenFields.join(', ')}`,
      subject: record.path
    })
  if (TRANSCRIPT_LINE.test(record.body))
    outcomes.push({
      status: 'VIOLATION',
      message: 'record body appears to contain role-by-role transcript content',
      subject: record.path
    })
  if (SESSION_CONTINUITY.test(record.body))
    outcomes.push({
      status: 'VIOLATION',
      message: 'record body appears to claim continuity with the originating session',
      subject: record.path
    })
  if (SESSION_LOCATOR.test(record.body))
    outcomes.push({
      status: 'VIOLATION',
      message: 'record body appears to carry a session or conversation locator',
      subject: record.path
    })
  return outcomes
}

/**
 * A top-level package's place in the one tree: the root alone carries no parent, each territory's summit names the
 * root, and other work names a node of its own territory; the tree beneath a node is its register (COVERS-REGISTER).
 */
const placementFailures = (id: string, fields: Readonly<Record<string, unknown>>): readonly string[] => {
  const segments = id.split('.')
  const territory = segments[0] ?? ''
  const root = id === ROOT_ID
  const summit = !root && segments.length === 2 && segments[1] === SUMMIT_SEGMENT
  const failures: string[] = []
  if (root ? fields.level !== 'root' : fields.level === 'root')
    failures.push(`level root belongs to the root, ${ROOT_ID}, and only to it`)
  if (fields.level === 'territory' && !summit)
    failures.push(`territory work id must be its summit, <territory>.${SUMMIT_SEGMENT}`)
  if (summit && fields.level !== 'territory')
    failures.push(`a <territory>.${SUMMIT_SEGMENT} id is its territory's top, level territory`)
  const parent = fields.parent
  if (root) {
    if ('parent' in fields) failures.push(`the root, ${ROOT_ID}, carries no parent`)
  } else if (summit) {
    if (parent !== ROOT_ID) failures.push(`a territory's summit names the root, ${ROOT_ID}, as parent`)
  } else if (typeof parent !== 'string' || !WORK_ID.test(parent) || parent.split('.')[0] !== territory || parent === id)
    failures.push('parent must name a different node of the same territory')
  return failures
}

/**
 * The id a sub-package carried before SUMMIT-SUB-PACKAGES b, `<parent id>.<slug>`, read as `<parent id>+<slug>` and
 * warned on under the role migration file; undefined at the top.
 */
const legacySubPackageId = (folder: PackageFolder): string | undefined =>
  folder.parent ? `${folder.parent.expectedId}.${folder.name}` : undefined

/**
 * A sub-package's placement: its parent package named as `parent`, and its parent's level, except under the root or a
 * summit, where a sub-package takes `level: regular` (SUMMIT-SUB-PACKAGES b, 16 November 2026).
 */
const subPackageFailures = (
  folder: PackageFolder,
  fields: Readonly<Record<string, unknown>>,
  parentFields: Readonly<Record<string, unknown>> | null | undefined
): readonly string[] => {
  const failures: string[] = []
  const parentId = folder.parent?.expectedId
  if (fields.parent !== parentId && (typeof parentFields?.id !== 'string' || fields.parent !== parentFields.id))
    failures.push(`parent must name the sub-package's parent package, ${parentId}`)
  if (parentFields && SUMMIT_LEVELS.includes(parentFields.level)) {
    if (fields.level !== 'regular')
      failures.push(`a sub-package of the root or a summit takes level regular, not its parent's`)
  } else if (parentFields && fields.level !== parentFields.level)
    failures.push(`a sub-package's level is its parent's, ${String(parentFields.level)}`)
  return failures
}

/** A full record id, as `KI-HARNESS-GOV-152`, found by its prefix through the ki registry (RECORD-LINKS a). */
const RECORD_ID = workIdentifier()

/** The definition fields: level, label, project, placement, holders, created_at, repositories and records. */
const definitionChecks = (
  item: Package,
  fields: Readonly<Record<string, unknown>>,
  parentFields: Readonly<Record<string, unknown>> | null | undefined,
  evidence: Evidence
): void => {
  const { folder, entry } = item
  const fail = (list: AuditOutcome[], message: string): void => {
    list.push({ status: 'VIOLATION', message, subject: entry.path })
  }
  if (
    !(folder.parent ? PACKAGE_ID : WORK_ID).test(folder.expectedId) ||
    UUID.test(folder.name) ||
    OPAQUE_SESSION_NAME.test(folder.name)
  )
    fail(evidence.identity, 'a package folder is named by a dotted id of lower-case kebab segments')
  if (fields.id !== folder.expectedId) {
    if (folder.parent && fields.id === legacySubPackageId(folder))
      evidence.identity.push(
        warning(entry, `sub-package id ${String(fields.id)} is read as ${folder.expectedId}, <parent id>+<slug>`)
      )
    else
      fail(
        evidence.identity,
        folder.parent
          ? `id must be ${folder.expectedId}, the parent's id, + and the sub-package's folder name`
          : 'id must exactly match the package folder name'
      )
  }
  const kind = folder.expectedId.split('.')[1]
  if (!folder.parent && kind !== undefined && KIND_SEGMENTS.has(kind))
    evidence.identity.push(
      warning(
        entry,
        `id ${folder.expectedId} carries the kind ${kind}, which ids no longer name: a node is <territory>.<slug>, its kind its level`
      )
    )
  if (!folder.parent && folder.expectedId.split('.')[0] !== folder.territory)
    fail(
      evidence.identity,
      `a package stands in the territory folder of its id's first segment, not ${folder.territory}`
    )
  if (!WORK_LEVELS.includes(fields.level)) fail(evidence.schema, 'level must be root, territory, regular or project')
  if ('label' in fields && !singleLine(fields.label))
    fail(evidence.schema, 'label must be a non-empty single-line string')
  if (fields.level === 'project' ? !SLUG.test(String(fields.project ?? '')) : 'project' in fields)
    fail(evidence.schema, 'project names the Project slug at project level and is absent otherwise')
  const placement = folder.parent
    ? subPackageFailures(folder, fields, parentFields)
    : placementFailures(String(fields.id ?? ''), fields)
  for (const message of placement) fail(evidence.schema, message)
  for (const field of ['worker', 'supervisor'] as const)
    if (!HOLDER.test(String(fields[field] ?? '')))
      fail(evidence.schema, `${field} must be a holder: owner, agent, run/, work/, person/ or repo/`)
  if ('created_at' in fields && fields.created_at !== null && !validTimestamp(fields.created_at))
    fail(evidence.schema, 'created_at must be a UTC RFC 3339 timestamp or null')
  if (
    'repositories' in fields &&
    (!Array.isArray(fields.repositories) || fields.repositories.some((name) => !singleLine(name)))
  )
    fail(evidence.schema, 'repositories must be a list of repository names, empty where the package works in none')
  if (
    'records' in fields &&
    (!Array.isArray(fields.records) || fields.records.some((id) => typeof id !== 'string' || !RECORD_ID.test(id)))
  )
    fail(evidence.schema, 'records must be a list of full record ids, as KI-HARNESS-GOV-152')
}

/** The state fields: state, target, hold, blocking, the move times and method_read. */
const stateChecks = (record: ParsedRecord, fields: Readonly<Record<string, unknown>>, evidence: Evidence): void => {
  const fail = (message: string): void => {
    evidence.schema.push({ status: 'VIOLATION', message, subject: record.path })
  }
  if (!WORK_STATES.includes(fields.state)) fail(`state must be one of ${WORK_STATES.join(', ')}`)
  if (fields.state === 'handoff' ? !HOLDER.test(String(fields.target ?? '')) : 'target' in fields)
    fail('target names a holder in handoff and is absent otherwise')
  const hold = table(fields.hold)
  if (
    fields.state === 'on-hold'
      ? !hold ||
        Object.keys(hold).some((key) => key !== 'reason' && key !== 'release' && key !== 'set_by') ||
        !HOLD_REASONS.includes(hold.reason) ||
        !singleLine(hold.release) ||
        ('set_by' in hold && !HOLD_SETTERS.includes(hold.set_by)) ||
        (hold.set_by === 'worker' && hold.reason !== 'more-expected')
      : 'hold' in fields
  )
    fail(
      'hold carries reason, paused or more-expected, release and an optional set_by, owner or worker, the worker setting only more-expected, when on hold, else absent'
    )
  if (
    'blocking' in fields &&
    (typeof fields.blocking !== 'boolean' || (fields.blocking && fields.state !== 'handoff-to-supervisor'))
  )
    fail('blocking is a boolean, true only in handoff-to-supervisor')
  if (!validTimestamp(fields.since)) fail('since must be a UTC RFC 3339 timestamp')
  for (const field of ['received', 'beat', 'mark'] as const)
    if (field in fields && fields[field] !== null && !validTimestamp(fields[field]))
      fail(`${field} must be a UTC RFC 3339 timestamp or null`)
  if (
    'method_read' in fields &&
    fields.method_read !== null &&
    (typeof fields.method_read !== 'string' || !REVISION.test(fields.method_read))
  )
    fail('method_read must be a short backpack revision or null')
}

/**
 * The thread capability fields, whose meaning `ki-coordination` owns: each `_enabled` a boolean, absent reading false;
 * each `_status` `on` or `off`, required while its capability is enabled, optional otherwise and `on` only while it is
 * enabled; and a syncing thread is always a listening thread.
 */
const capabilityChecks = (
  record: ParsedRecord,
  fields: Readonly<Record<string, unknown>>,
  evidence: Evidence
): void => {
  const fail = (message: string): void => {
    evidence.schema.push({ status: 'VIOLATION', message, subject: record.path })
  }
  for (const capability of CAPABILITIES) {
    const enabled = fields[`${capability}_enabled`]
    const status = `${capability}_status`
    if (`${capability}_enabled` in fields && typeof enabled !== 'boolean')
      fail(`${capability}_enabled must be true or false`)
    if (status in fields ? !CAPABILITY_STATUSES.includes(fields[status]) : enabled === true)
      fail(`${status} is on or off, and required while ${capability}_enabled is true`)
    else if (fields[status] === 'on' && enabled !== true)
      fail(`${status} is on only while ${capability}_enabled is true`)
  }
  if (fields.syncing_enabled === true && fields.listening_enabled !== true)
    fail('syncing_enabled true requires listening_enabled true: a syncing thread is always a listening thread')
}

export type CatalogueRole = { readonly tier: string; readonly rank: number; readonly glyph: string }

/**
 * The Role catalogue table of the role standard: each role's tier, rank and glyph, by role name, in the table's order,
 * tier by tier and by rank within each tier, highest first, the tier's default role lowest (ROLE-RANK, Kris, 17
 * November 2026). Columns are found by their header, so the table may gain columns without moving these.
 */
export const roleCatalogue = (standard = readFileSync(ROLE_STANDARD, 'utf8')): ReadonlyMap<string, CatalogueRole> => {
  const section = standard.split(/^#{2,3} (?:[\d.]+ )?Role catalogue$/m)[1]?.split(/^#{2,3} /m)[0] ?? ''
  const roles = new Map<string, CatalogueRole>()
  let columns: readonly string[] = []
  for (const line of section.split(/\r?\n/)) {
    const cells = line
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim())
    if (cells[0] === 'Role') {
      columns = cells.map((cell) => cell.toLowerCase())
      continue
    }
    const cell = (name: string): string => cells[columns.indexOf(name)] ?? ''
    const [role, tier, glyph, rank] = [cell('role'), cell('tier'), cell('glyph'), Number(cell('rank'))]
    if (
      /^[a-z]+(?:-[a-z]+)*$/.test(role) &&
      TIERS.includes(tier) &&
      glyph.length > 0 &&
      Number.isInteger(rank) &&
      rank > 0
    )
      roles.set(role, { tier, rank, glyph })
  }
  return roles
}

const warning = (record: ParsedRecord, message: string): AuditOutcome => ({
  status: 'VIOLATION',
  level: 'WARN',
  message: `tolerance: ${message}, under ${ROLE_MIGRATION}`,
  subject: record.path
})

/** A `role` value against the catalogue: a catalogue role passes, an old word warns, anything else fails. */
const roleOutcome = (
  record: ParsedRecord,
  value: unknown,
  where: string,
  catalogue: ReadonlyMap<string, CatalogueRole>
): AuditOutcome | undefined => {
  if (typeof value === 'string' && catalogue.has(value)) return undefined
  if (typeof value === 'string' && ROLE_ALIASES[value])
    return warning(record, `${where} role ${value} is read as ${ROLE_ALIASES[value]}`)
  return {
    status: 'VIOLATION',
    message: `${where} role must be one catalogue role: ${[...catalogue.keys()].join(', ')}`,
    subject: record.path
  }
}

/**
 * `workers` under the role standard: a list of live seats, each one catalogue role with its catalogue tier and at most
 * the actor's id, since and status. The retired entry keys, focus, listening and name among them, warn.
 */
const workersChecks = (
  record: ParsedRecord,
  fields: Readonly<Record<string, unknown>>,
  evidence: Evidence,
  catalogue: ReadonlyMap<string, CatalogueRole>
): void => {
  const fail = (message: string): void => {
    evidence.schema.push({ status: 'VIOLATION', message, subject: record.path })
  }
  const warn = (message: string): void => {
    evidence.schema.push(warning(record, message))
  }
  if (!('workers' in fields) || fields.workers === null) return
  if (!Array.isArray(fields.workers)) {
    fail('workers must be a list of seats, each a mapping with role and tier')
    return
  }
  fields.workers.forEach((value, index) => {
    const entry = table(value)
    const at = `workers[${index}]`
    if (!entry) {
      fail(`${at} must be a mapping with role and tier`)
      return
    }
    const unknown = Object.keys(entry).filter((key) => !WORKER_FIELDS.has(key) && !WORKER_RETIRED_FIELDS.has(key))
    if (unknown.length > 0)
      fail(`${at} carries field(s) outside id, role, tier, since and status: ${unknown.join(', ')}`)
    const retired = Object.keys(entry).filter((key) => WORKER_RETIRED_FIELDS.has(key))
    if (retired.length > 0) warn(`${at} carries ${retired.join(', ')}, which the role standard drops`)
    const roleResult = roleOutcome(record, entry.role, at, catalogue)
    if (roleResult) evidence.schema.push(roleResult)
    const role = typeof entry.role === 'string' ? (ROLE_ALIASES[entry.role] ?? entry.role) : undefined
    const expected = role ? catalogue.get(role)?.tier : undefined
    const tier = typeof entry.tier === 'string' ? entry.tier : undefined
    if (tier && TIER_ALIASES[tier]) warn(`${at} tier ${tier} is read as ${TIER_ALIASES[tier]}`)
    const resolved = tier ? (TIER_ALIASES[tier] ?? tier) : undefined
    if (!resolved || !TIERS.includes(resolved)) fail(`${at} tier must be one of ${TIERS.join(', ')}`)
    else if (expected && resolved !== expected) fail(`${at} tier must be ${expected}, the catalogue tier of ${role}`)
    if ('since' in entry && !validTimestamp(entry.since)) fail(`${at} since must be a UTC RFC 3339 timestamp`)
    if ('status' in entry && !WORKER_STATUSES.includes(entry.status))
      fail(`${at} status must be active, idle or vacant`)
    if (entry.status === 'vacant' && ('id' in entry || 'since' in entry))
      fail(`${at} is a vacant seat and carries no id or since (SEATS-VACANT a)`)
    if ('id' in entry && typeof entry.id === 'string' && LEGACY_SEAT_ID.test(entry.id))
      warn(`${at} id ${entry.id} is a seat's id in the earlier <work id>+<role> form, read as <package>@<role>`)
    else if ('id' in entry && (typeof entry.id !== 'string' || !ACTOR_ID.test(entry.id)))
      fail(`${at} id must be the actor's typed id, actor:<id>`)
  })
}

/** Bulk history in the state's Now and Held: dated log lines, runs of commit identifiers or test counts. */
const historyOutcome = (record: ParsedRecord, state: string): AuditOutcome | undefined => {
  const dated = state.match(DATED_LINE)?.length ?? 0
  const commits = state.match(COMMIT_ID)?.length ?? 0
  const counts = state.match(TEST_COUNT)?.length ?? 0
  if (dated < 3 && commits < 3 && counts < 2) return undefined
  return {
    status: 'VIOLATION',
    message:
      'Now and Held appear to carry history (dated log lines, commit identifiers or test counts); the Git log and the commit hold it, so link one rather than copy it',
    subject: record.path
  }
}

/** One package's entry file: its closed fields, the definition and the state, its body and its boundary. */
const packageEvidence = (
  item: Package,
  parentFields: Readonly<Record<string, unknown>> | null | undefined,
  catalogue: ReadonlyMap<string, CatalogueRole>,
  evidence: Evidence
): void => {
  const { folder, entry } = item
  const fields = entry.fields
  const fail = (message: string): void => {
    evidence.schema.push({ status: 'VIOLATION', message, subject: entry.path })
  }
  const warn = (message: string): void => {
    evidence.size.push({ status: 'VIOLATION', message, subject: entry.path })
  }
  if (!fields) {
    fail(`${ENTRY_FILE} front matter must be a valid YAML mapping`)
    return
  }
  const keys = Object.keys(fields)
  const written = (field: string) => (entry.unprefixed.includes(field) ? field : `${KI_PREFIX}${field}`)
  const missing = ENTRY_REQUIRED.filter((field) => !keys.includes(field))
  const unknown = keys.filter((field) => !ENTRY_FIELDS.has(field) && !ENTRY_RETIRED_FIELDS.has(field))
  if (missing.length > 0 || unknown.length > 0)
    fail(
      `${ENTRY_FILE} front matter must use only its closed field set${missing.length > 0 ? `; missing: ${missing.map((field) => `${KI_PREFIX}${field}`).join(', ')}` : ''}${unknown.length > 0 ? `; outside it: ${unknown.map(written).join(', ')}` : ''}`
    )
  const bare = entry.unprefixed.filter((field) => ENTRY_FIELDS.has(field) || ENTRY_RETIRED_FIELDS.has(field))
  if (bare.length > 0)
    evidence.schema.push({
      status: 'VIOLATION',
      level: 'WARN',
      message: `tolerance: ${ENTRY_FILE} writes ${bare.join(', ')} without the \`${KI_PREFIX}\` prefix, read as ${bare.map((field) => `${KI_PREFIX}${field}`).join(', ')} until packages are swept`,
      subject: entry.path
    })
  const retired = keys.filter((field) => ENTRY_RETIRED_FIELDS.has(field))
  if (retired.length > 0)
    evidence.schema.push(
      warning(entry, `${ENTRY_FILE} carries ${retired.join(', ')}, which the work package standard drops`)
    )
  const legacy = legacySubPackageId(folder)
  const h1 = legacy !== undefined && fields.id === legacy ? legacy : folder.expectedId
  const middle = [[], [VALUES_HEADING]].find((optional) =>
    sameOutline(entry.body, h1, [...BODY_BEFORE_VALUES, ...optional, ...BODY_AFTER_VALUES])
  )
  if (!middle)
    fail(
      `${ENTRY_FILE} headings must be the id H1 "# ${h1}", then Goals, Scope, an optional Values, Now, Held and Changes`
    )
  const sections = h2Sections(entry.body)
  for (const heading of [...BODY_BEFORE_VALUES, ...BODY_AFTER_VALUES])
    if (sections.has(heading) && (sections.get(heading)?.trim().length ?? 0) === 0)
      fail(`${heading} must say something, if only None`)
  const scope = sections.get('Scope')
  if (scope !== undefined && scope.trim().length > 0 && !SIGNPOSTS_LINE.test(scope))
    evidence.schema.push({
      status: 'VIOLATION',
      level: 'WARN',
      message: `tolerance: ${ENTRY_FILE}'s Scope names no Signposts; write "Signposts: the standard's defaults." where the package adds none`,
      subject: entry.path
    })
  const values = sections.get(VALUES_HEADING)
  if (values !== undefined && nonEmptyLines(values) !== 1)
    fail('Values is one line, linking the shared values and adding any of the work its own')
  if (typeof fields.description !== 'string' || fields.description.trim().length === 0)
    fail('description must be a non-empty routing description')
  else if (fields.description.trim().length > LIMITS.description)
    warn(`description runs past ${LIMITS.description} characters`)
  if (nonEmptyLines(sections.get('Now') ?? '') > LIMITS.nowLines) warn(`Now runs past ${LIMITS.nowLines} lines`)
  const history = historyOutcome(entry, `${sections.get('Now') ?? ''}\n${sections.get('Held') ?? ''}`)
  if (history) evidence.size.push(history)

  definitionChecks(item, fields, parentFields, evidence)
  if (!('role' in fields)) evidence.schema.push(warning(entry, `${ENTRY_FILE} names no role from the role catalogue`))
  else {
    const outcome = roleOutcome(entry, fields.role, ENTRY_FILE, catalogue)
    if (outcome) evidence.schema.push(outcome)
  }
  stateChecks(entry, fields, evidence)
  capabilityChecks(entry, fields, evidence)
  workersChecks(entry, fields, evidence, catalogue)
  if (
    validTimestamp(fields.created_at) &&
    validTimestamp(fields.since) &&
    Date.parse(fields.created_at) > Date.parse(fields.since)
  )
    evidence.lifecycle.push({
      status: 'VIOLATION',
      message: 'created_at must not be later than since',
      subject: entry.path
    })
  evidence.boundary.push(...boundaryOutcomes(entry, fields))
}

/** The top-level packages' tree: each parent resolves and no parent chain loops; the tree is the register. */
const relationshipEvidence = (packages: readonly Package[], evidence: Evidence): void => {
  const top = packages.filter((item) => !item.folder.parent && item.entry.fields)
  const id = (item: Package): string => item.folder.expectedId
  const byId = new Map<string, Package>()
  const fail = (item: Package, message: string): void => {
    evidence.schema.push({ status: 'VIOLATION', message, subject: item.entry.path })
  }
  for (const item of top) {
    const existing = byId.get(id(item))
    if (existing) fail(item, `ambiguous work home ${id(item)}: ${id(existing)} and ${id(item)}`)
    else byId.set(id(item), item)
  }
  const parentOf = (item: Package): Package | undefined => {
    const parent = item.entry.fields?.parent
    return typeof parent === 'string' ? byId.get(parent) : undefined
  }
  for (const item of top) {
    const fields = item.entry.fields
    if (!fields) continue
    const territory = id(item).split('.')[0] ?? ''
    const summit = byId.get(`${territory}.${SUMMIT_SEGMENT}`)
    const parent = parentOf(item)
    const anchor = fields.level === 'territory' ? byId.get(ROOT_ID) : summit
    if (anchor && typeof fields.parent === 'string' && !parent)
      fail(item, 'parent does not resolve to a package in the store')
    const seen = new Set<Package>([item])
    for (let next = parent; next; next = parentOf(next)) {
      if (next === item) {
        fail(item, 'the parent chain loops back to this package')
        break
      }
      if (seen.has(next)) break
      seen.add(next)
    }
  }
}

/** Each earlier copy of packages left in a retired working area, listed for its owner and never deleted by the audit. */
const earlierCopies = (root: string): AuditOutcome[] =>
  EARLIER_AREAS.filter((area) => existsSync(join(root, '+', area))).map((area) => ({
    status: 'VIOLATION',
    message: `+/${area}/ is a retired working area: each live package in it moves to work/<territory>/<id>/ in the Cairn store, and the earlier copy is removed only on its owner's word`,
    subject: `+/${area}`
  }))

export const createWorkPackageSession = ({
  repository,
  configuration,
  publication
}: RubricContextOptions): RubricSession<WorkPackageRubricContext> => {
  const root = resolve(repository)
  // The host resolves declaration presence before passing this selected capability table.
  const declared = Boolean(configuration)
  const layout = declared ? workLayout(root) : undefined
  const absent = !declared
    ? 'ki-work-package is not declared, so `work/` is not read.'
    : layout
      ? undefined
      : 'No `work/` folder is present.'
  const packages: Package[] = (layout?.packages ?? []).map((folder) => ({
    folder,
    entry: parseRecord(join(folder.path, ENTRY_FILE), root)
  }))
  const byFolder = new Map(packages.map((item) => [item.folder, item]))
  const catalogue = roleCatalogue()
  const evidence: Evidence = { identity: [], schema: [], lifecycle: [], size: [], boundary: [] }
  for (const item of packages) {
    const parent = item.folder.parent ? byFolder.get(item.folder.parent) : undefined
    packageEvidence(item, parent?.entry.fields, catalogue, evidence)
  }
  relationshipEvidence(packages, evidence)

  const configOutcomes: AuditOutcome[] = Object.keys(configuration ?? {}).map((key) => ({
    status: 'VIOLATION' as const,
    level: 'WARN' as const,
    message: `unrecognised ki-work-package configuration key ${key}`,
    subject: '.ki.toml'
  }))
  const notRead = absent ? { status: 'NOT_APPLICABLE' as const, message: absent } : undefined
  const context: WorkPackageRubricContext = {
    rubric: { publication },
    configuration: {
      outcomes: one(
        configOutcomes,
        declared
          ? 'The ki-work-package declaration is an empty capability marker.'
          : 'No ki-work-package declaration is active.'
      )
    },
    structure: {
      outcomes: one(
        layout?.violations ?? [],
        '`work/` holds only territory folders, each holding only packages with their entry file.',
        absent
      ),
      earlier: one(
        declared ? earlierCopies(root) : [],
        'No earlier copy of a package is left in a retired working area.',
        declared ? undefined : absent
      )
    },
    records: {
      identity: one(evidence.identity, 'Every package and sub-package has one consistent identity.', absent),
      schema: one(evidence.schema, "Every package's entry file uses its closed schema.", absent)
    },
    lifecycle: {
      mechanical: one(evidence.lifecycle, 'Every package keeps its timestamps in order.', absent),
      size: one(evidence.size, 'Every package keeps within its limits and carries no history.', absent)
    },
    folder: notRead ? { closed: [notRead], finished: [notRead], changes: [notRead] } : folderOutcomes(root, layout),
    boundary: {
      outcomes: one(
        evidence.boundary,
        'No mechanically recognisable transcript or session-continuity dependency is present.',
        absent
      )
    }
  }

  return {
    subjects: [
      {
        subject: WORK_DIRECTORY,
        families: ['RUBRIC', 'CONFIG', 'STRUCTURE', 'RECORD', 'LIFECYCLE', 'FOLDER', 'BOUNDARY'],
        context: () => context
      }
    ],
    proposal: () => ({ writes: [] })
  }
}
