/**
 * The roadmap record checks for a Knowledge Base, whose records live flat in `Streams/Roadmap/`. They came from
 * `ki-repo-kb-streams` when Kris split it on 22 November 2026 (KB-FOLD b): record identity and frontmatter report
 * under ITEM-1 and ITEM-2, the issue ledger under ROAD-7, and issuing areas under ROAD-6, as they do for a Project.
 */
import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { inspectRoadmapAreas, matchesRoadmapArea } from '../../shared/roadmap-areas.ts'
import { isRepositoryCode, SCOPE_SEGMENT, workIdentifier, workIdentifierSource } from '../../shared/work-identifiers.ts'
import type { Finding } from './roadmap-evidence.ts'

type Evidence = {
  level: 'FAIL' | 'WARN' | 'INFO' | 'NOT_APPLICABLE' | 'PASS'
  message: string
  subject?: string
}

type KbRoadmapConfiguration = {
  malformed: boolean
  roadmap?: Record<string, unknown>
  repoCode?: unknown
}

const directory = (path: string): boolean => existsSync(path) && lstatSync(path).isDirectory()
const regularFile = (path: string): boolean =>
  existsSync(path) && lstatSync(path).isFile() && !lstatSync(path).isSymbolicLink()

// The repository roadmap standard's structural-validity invariant: every direct-child record
// other than the ledger, the ideas list and the KB index note carries parseable frontmatter whose `id` matches
// its filename identifier, and no two records share an `id`. One walk feeds both ITEM-1 and ITEM-2, so
// a record ITEM-1 cannot compare is always reported by ITEM-2.
const ROADMAP_NON_RECORDS = new Set(['_ISSUES.md', '_IDEAS.md', 'Roadmap.md'])
// Mirrors the roadmap adapter's filename identifier grammar without its slug grammar.
const FILENAME_IDENTIFIER = new RegExp(`^(${workIdentifierSource()})-.`)
const WORK_ITEM_IDENTIFIER = workIdentifier()
// Mirrors the roadmap adapter's current work-item fields (`RECORD_FIELDS` in ki-work-roadmap, without the retired
// ones its own checker fails); kb-roadmap.test.ts holds the two lists level. Any other field is unknown here.
export const RECORD_FIELDS: ReadonlySet<string> = new Set([
  'id',
  'area',
  'title',
  'kind',
  'purpose',
  'project',
  'theme',
  'initiative',
  'component',
  'priority',
  'size',
  'assignee',
  'horizon',
  'hold',
  'target',
  'status',
  'resolution',
  'resolution_target',
  'blocks',
  'blocked_by',
  'task_links',
  'baseline_ref',
  'created_at',
  'updated_at',
  'transferred_from',
  'housekeeping_template',
  'scheduled_for'
])

// A KB record is also a KB note, so it may carry ki-repo-kb's universal note fields beside the work-item fields.
const KB_NOTE_FIELDS: ReadonlySet<string> = new Set(['note_type', 'updated', 'reviewed', 'created', 'tags', 'author'])

type RoadmapRecord = {
  path: string
  id?: string
  area?: string
  defect?: string
  unknown?: readonly string[]
  sizeless?: boolean
  unassigned?: boolean
  oversized?: boolean
  adoptedOversized?: boolean
}

// A closed record never needs a retrospective size or assignee.
const CLOSED_STATUSES: ReadonlySet<string> = new Set(['done', 'cancelled'])

const roadmapRecord = (root: string, path: string, name: string): RoadmapRecord => {
  const display = relative(root, path)
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(readFileSync(path, 'utf8'))
  if (!frontmatter) return { path: display, defect: 'does not begin with YAML frontmatter' }
  let values: unknown
  try {
    values = Bun.YAML.parse(frontmatter[1])
  } catch {
    return { path: display, defect: 'has frontmatter that is not parseable YAML' }
  }
  if (!values || typeof values !== 'object' || Array.isArray(values))
    return { path: display, defect: 'has frontmatter that is not a YAML mapping' }
  const raw = (values as Record<string, unknown>).id
  const fields = values as Record<string, unknown>
  const unknownFields = Object.keys(values).filter((key) => !RECORD_FIELDS.has(key) && !KB_NOTE_FIELDS.has(key))
  const unknown = {
    ...(typeof fields.area === 'string' ? { area: fields.area } : {}),
    ...(unknownFields.length ? { unknown: unknownFields } : {}),
    ...('size' in values || CLOSED_STATUSES.has(String(fields.status)) ? {} : { sizeless: true }),
    ...((typeof fields.assignee === 'string' && fields.assignee.trim()) || CLOSED_STATUSES.has(String(fields.status))
      ? {}
      : { unassigned: true }),
    ...(fields.size === 'xl' && fields.status === 'ready' ? { oversized: true } : {}),
    // XL work is split before adoption (GATES-SIZE-XL a, 2026-11-21): an adopted draft warns until it is split.
    ...(fields.size === 'xl' && fields.status === 'draft' ? { adoptedOversized: true } : {})
  }
  const id = typeof raw === 'string' ? raw.trim() : ''
  if (!id) return { path: display, defect: 'has no frontmatter id', ...unknown }
  // A slug may begin with digits, so the identifier grammar alone cannot split every filename;
  // a record conforms when its filename begins with its own well-formed id.
  if (WORK_ITEM_IDENTIFIER.test(id) && name.startsWith(`${id}-`) && name !== `${id}-.md`)
    return { path: display, id, ...unknown }
  const fileId = FILENAME_IDENTIFIER.exec(name)?.[1]
  if (fileId !== id)
    return {
      path: display,
      id,
      ...unknown,
      defect: fileId
        ? `has id ${id}, which does not match its filename identifier ${fileId}`
        : `has id ${id}, but its filename is not of the form ${id}-<slug>.md`
    }
  return { path: display, id, ...unknown }
}

const roadmapRecords = (root: string, roadmapPath: string): RoadmapRecord[] =>
  (directory(roadmapPath) ? readdirSync(roadmapPath, { withFileTypes: true }) : [])
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md') && !ROADMAP_NON_RECORDS.has(entry.name))
    .sort((left, right) => left.name.localeCompare(right.name))
    .map((entry) => roadmapRecord(root, join(roadmapPath, entry.name), entry.name))

const roadmapAreaEvidence = (
  configuration: KbRoadmapConfiguration,
  records: readonly RoadmapRecord[]
): { areaTitles: Evidence[]; areaDeclarations: Evidence[] } => {
  if (configuration.malformed) {
    const unavailable: Evidence[] = [{ level: 'NOT_APPLICABLE', message: 'Roadmap area configuration is unavailable.' }]
    return { areaTitles: unavailable, areaDeclarations: unavailable }
  }
  const { areas, error } = inspectRoadmapAreas(configuration.roadmap?.areas)
  const areaTitles: Evidence[] = [
    error
      ? { level: 'WARN', message: error, subject: '.ki.toml' }
      : { level: 'PASS', message: 'Roadmap area titles follow ROAD-6.', subject: '.ki.toml' }
  ]
  // Do not turn an invalid title into a cascade of record-identity warnings.
  if (error)
    return {
      areaTitles,
      areaDeclarations: [
        {
          level: 'NOT_APPLICABLE',
          message: 'Correct the roadmap area configuration before checking record declarations.'
        }
      ]
    }
  const repoCode = configuration.repoCode
  if (!isRepositoryCode(repoCode))
    return {
      areaTitles,
      areaDeclarations: [
        {
          level: 'WARN',
          message: 'ki-repo repo_code must be a stable uppercase identifier for roadmap area checks.',
          subject: '.ki.toml'
        }
      ]
    }
  const defects = records.filter(
    (record) => record.id && !matchesRoadmapArea(record.id, record.area, { repoCode, areas })
  )
  return {
    areaTitles,
    areaDeclarations: defects.length
      ? defects.map((record) => ({
          level: 'WARN',
          message:
            'item identifier must use configured repository code, optional configured area code, and zero-padded issue number',
          subject: record.path
        }))
      : [{ level: 'PASS', message: 'Roadmap records use only declared issuing areas.' }]
  }
}

const roadmapIdentityEvidence = (root: string, roadmapPath: string, records: readonly RoadmapRecord[]): Evidence[] => {
  const byId = new Map<string, string[]>()
  for (const record of records) if (record.id) byId.set(record.id, [...(byId.get(record.id) ?? []), record.path])
  if (byId.size === 0) return [{ level: 'NOT_APPLICABLE', message: 'No identified roadmap records are present.' }]
  const duplicates = [...byId.entries()].filter(([, paths]) => paths.length > 1)
  if (duplicates.length === 0)
    return [
      { level: 'PASS', message: 'Every roadmap record identifier is unique.', subject: relative(root, roadmapPath) }
    ]
  return duplicates.flatMap(([id, paths]) =>
    paths.sort().map((path) => ({
      level: 'FAIL' as const,
      message: `Roadmap identifier ${id} is shared by ${paths.length} records: ${paths.join('; ')}.`,
      subject: path
    }))
  )
}

const roadmapFrontmatterEvidence = (
  root: string,
  roadmapPath: string,
  records: readonly RoadmapRecord[]
): Evidence[] => {
  if (records.length === 0) return [{ level: 'NOT_APPLICABLE', message: 'No roadmap records are present.' }]
  const defective = records.filter((record) => record.defect)
  const oversized = records.filter((record) => record.oversized)
  if (defective.length === 0 && oversized.length === 0)
    return [
      {
        level: 'PASS',
        message: 'Every roadmap record has frontmatter whose id matches its filename identifier.',
        subject: relative(root, roadmapPath)
      }
    ]
  return [
    ...defective.map((record) => ({
      level: 'FAIL' as const,
      message: `Roadmap record ${record.path} ${record.defect}.`,
      subject: record.path
    })),
    // A size xl record is not one record: it is split before Ready.
    ...oversized.map((record) => ({
      level: 'FAIL' as const,
      message: `Roadmap record ${record.path} is ready at size xl; split it before Ready.`,
      subject: record.path
    }))
  ]
}

// The KB adapter otherwise skips frontmatter it does not read, so an undefined field such as `owner` would pass
// silently; it warns instead. An open record without the required `size` warns during the roadmap standard's field
// migration window.
const roadmapFieldEvidence = (root: string, roadmapPath: string, records: readonly RoadmapRecord[]): Evidence[] => {
  if (records.length === 0) return [{ level: 'NOT_APPLICABLE', message: 'No roadmap records are present.' }]
  const unknown = records.filter((record) => record.unknown?.length)
  const sizeless = records.filter((record) => record.sizeless)
  const unassigned = records.filter((record) => record.unassigned)
  const adoptedOversized = records.filter((record) => record.adoptedOversized)
  if (unknown.length === 0 && sizeless.length === 0 && unassigned.length === 0 && adoptedOversized.length === 0)
    return [
      {
        level: 'PASS',
        message:
          'Every open roadmap record carries a size and an assignee, and only work-item fields the roadmap adapter defines.',
        subject: relative(root, roadmapPath)
      }
    ]
  return [
    ...unknown.map((record) => ({
      level: 'WARN' as const,
      message: `Roadmap record ${record.path} has unknown field(s): ${record.unknown?.join(', ')}.`,
      subject: record.path
    })),
    ...sizeless.map((record) => ({
      level: 'WARN' as const,
      message: `Roadmap record ${record.path} has no size; give it s, m, l or xl.`,
      subject: record.path
    })),
    ...unassigned.map((record) => ({
      level: 'WARN' as const,
      message: `Roadmap record ${record.path} has no assignee; name its holder, such as owner or work/<id>.`,
      subject: record.path
    })),
    ...adoptedOversized.map((record) => ({
      level: 'WARN' as const,
      message: `Roadmap record ${record.path} is adopted at size xl; split it, as XL work is split before adoption.`,
      subject: record.path
    }))
  ]
}

// Mirrors the roadmap adapter's canonical issue ledger (`issueLedger` in ki-work-roadmap). The ledger holds its
// header and counters only, so any other text fails.
const RESERVATION_ORDER = "Reserve a number by committing this ledger's advance on its own before writing the record."

const canonicalLedger = (allocation: number | ReadonlyMap<string, number>): string => {
  if (typeof allocation === 'number')
    return `---\nlast_id: ${allocation}\n---\n\n# Roadmap issue ledger\n\nThis ledger reserves every repository-scoped roadmap issue number through \`${allocation.toString().padStart(3, '0')}\`. Allocate the next work item as one greater than \`last_id\`; never lower this value or reuse an issued number after a record is pruned. ${RESERVATION_ORDER}\n`
  const areas = [...allocation.entries()].sort(([left], [right]) => left.localeCompare(right))
  const values = areas.map(([area, lastId]) => `${area}: ${lastId}`).join(', ')
  const detail = areas
    .map(([area, lastId]) => `- \`${area}\` reserves through \`${lastId.toString().padStart(3, '0')}\`.`)
    .join('\n')
  return `---\nareas: { ${values} }\n---\n\n# Roadmap issue ledger\n\nThis ledger reserves fixed issuing-area namespaces. Allocate the next work item in its area as one greater than that area's high-water mark; never lower a value or reuse an issued number after a record is pruned. ${RESERVATION_ORDER} Areas are not mutable themes or groups.\n\n${detail}\n`
}

const LEDGER_AREA_ENTRY = new RegExp(`^(${SCOPE_SEGMENT}):\\s*(\\d+)$`)

const ledgerAllocation = (text: string): number | ReadonlyMap<string, number> | undefined => {
  const lastId = /^---\r?\nlast_id:\s*(\d+)\s*\r?\n---\r?\n/.exec(text)
  if (lastId) return Number.parseInt(lastId[1], 10)
  const areas = /^---\r?\nareas:\s*\{\s*(.*?)\s*}\s*\r?\n---\r?\n/.exec(text)
  if (!areas) return undefined
  const allocation = new Map<string, number>()
  for (const entry of areas[1].split(',')) {
    const pair = LEDGER_AREA_ENTRY.exec(entry.trim())
    if (!pair || allocation.has(pair[1])) return undefined
    allocation.set(pair[1], Number.parseInt(pair[2], 10))
  }
  return allocation.size ? allocation : undefined
}

const issueLedgerEvidence = (root: string, roadmapPath: string): Evidence[] => {
  const path = join(roadmapPath, '_ISSUES.md')
  const subject = relative(root, path)
  if (!existsSync(path)) return [{ level: 'NOT_APPLICABLE', message: 'No issue ledger is present.', subject }]
  if (!regularFile(path)) return [{ level: 'FAIL', message: 'The issue ledger must be a regular file.', subject }]
  const text = readFileSync(path, 'utf8')
  const allocation = ledgerAllocation(text)
  if (allocation === undefined)
    return [
      {
        level: 'FAIL',
        message: 'The issue ledger must open with last_id or an areas map of high-water marks.',
        subject
      }
    ]
  return text === canonicalLedger(allocation)
    ? [{ level: 'PASS', message: 'The issue ledger holds only its header and counters.', subject }]
    : [{ level: 'FAIL', message: 'The issue ledger holds content beyond its canonical header and counters.', subject }]
}

const parseConfiguration = (root: string): KbRoadmapConfiguration => {
  const path = join(root, '.ki.toml')
  if (!regularFile(path)) return { malformed: false }
  try {
    const skills = (Bun.TOML.parse(readFileSync(path, 'utf8')) as Record<string, unknown>).skills as
      | Record<string, Record<string, unknown>>
      | undefined
    return { malformed: false, roadmap: skills?.['ki-work-roadmap'], repoCode: skills?.['ki-repo']?.repo_code }
  } catch {
    return { malformed: true }
  }
}

const LEVELS: Readonly<Record<Evidence['level'], Finding['level']>> = {
  FAIL: 'FAIL',
  WARN: 'WARN',
  INFO: 'INFO',
  NOT_APPLICABLE: 'NA',
  PASS: 'PASS'
}

const findingsFor = (code: string, ref: string, evidence: readonly Evidence[]): Finding[] =>
  evidence.map((entry) => ({
    level: LEVELS[entry.level],
    area: code,
    msg: entry.message,
    ref,
    ...(entry.subject ? { file: entry.subject } : {})
  }))

/** The Knowledge Base record checks over `Streams/Roadmap/`, reported under the roadmap codes they share. */
export const inspectKbRoadmap = (root: string, standard: string, format: string): Finding[] => {
  const roadmapPath = join(root, 'Streams', 'Roadmap')
  const records = roadmapRecords(root, roadmapPath)
  const { areaTitles, areaDeclarations } = roadmapAreaEvidence(parseConfiguration(root), records)
  return [
    ...findingsFor('ITEM-1', format, roadmapIdentityEvidence(root, roadmapPath, records)),
    ...findingsFor('ITEM-2', format, roadmapFrontmatterEvidence(root, roadmapPath, records)),
    ...findingsFor('ITEM-2', format, roadmapFieldEvidence(root, roadmapPath, records)),
    ...findingsFor('ROAD-6', standard, [...areaTitles, ...areaDeclarations]),
    ...findingsFor('ROAD-7', standard, issueLedgerEvidence(root, roadmapPath))
  ]
}
