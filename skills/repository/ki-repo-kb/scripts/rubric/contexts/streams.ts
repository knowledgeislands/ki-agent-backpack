/**
 * The Streams folder layout of a Knowledge Base and its one Enactment gate. They came from `ki-repo-kb-streams` when Kris
 * split it on 22 November 2026 (KB-FOLD b): its record checks went to `ki-work-roadmap`, its Project close-out to
 * `ki-work`, and the layout and the gate came here, the gate's family renamed ENACT from GATE.
 */
import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs'
import { basename, join, relative, resolve } from 'node:path'
import type { AuditOutcome, ViolationLevel } from '../../shared/rubric.ts'

// `Initiatives` is the thread-model registry, read with a warning for the work model's tolerance window.
const OPERATIONAL_AREAS = ['Roadmap', 'Trades', 'Projects', 'Themes', 'Initiatives'] as const
const REQUIRED_AREAS = ['Roadmap'] as const
const LEGACY_FOLDERS = [
  'Active',
  'Background',
  'Dormant',
  'Now',
  'Next',
  'Soon',
  'Waiting for',
  'Parked',
  'Future'
] as const
const STREAMS = 'Streams'

export type StreamsEvidence = {
  level: 'FAIL' | 'WARN' | 'INFO' | 'NOT_APPLICABLE' | 'PASS'
  message: string
  subject?: string
}

export type StreamRubricContext = {
  operationalAreas: readonly StreamsEvidence[]
  legacyFolders: readonly StreamsEvidence[]
  registryNotes: readonly StreamsEvidence[]
}

export type EnactmentRubricContext = {
  anchor: readonly StreamsEvidence[]
}

export const auditEvidence = (
  evidence: readonly StreamsEvidence[],
  defaultLevel: ViolationLevel,
  overrideLevels?: readonly ViolationLevel[]
): readonly AuditOutcome[] =>
  evidence.map((finding): AuditOutcome => {
    if (finding.level === 'FAIL' || finding.level === 'WARN') {
      const level = finding.level
      return {
        status: 'VIOLATION',
        message: finding.message,
        ...(finding.subject ? { subject: finding.subject } : {}),
        ...(level !== defaultLevel && overrideLevels?.includes(level) ? { level } : {})
      }
    }
    return {
      status: finding.level,
      message: finding.message,
      ...(finding.subject ? { subject: finding.subject } : {})
    }
  })

const directory = (path: string): boolean => existsSync(path) && lstatSync(path).isDirectory()
const regularFile = (path: string): boolean =>
  existsSync(path) && lstatSync(path).isFile() && !lstatSync(path).isSymbolicLink()

const directories = (path: string): string[] =>
  directory(path)
    ? readdirSync(path, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
    : []

const markdownPaths = (path: string, values: string[] = []): string[] => {
  for (const entry of directory(path) ? readdirSync(path, { withFileTypes: true }) : []) {
    if (entry.name.startsWith('.')) continue
    const child = join(path, entry.name)
    if (entry.isDirectory()) markdownPaths(child, values)
    else if (entry.isFile() && entry.name.endsWith('.md')) values.push(child)
  }
  return values
}

const REGISTRY_AREAS = ['Projects', 'Themes', 'Initiatives'] as const
const WORK_RECORD_REFERENCE = /(?<![\w-])(?!(?:[SPADXOGRK]DR)-)[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*-\d{3}(?!\d)/g
const UPDATE_SECTION = /^##\s+Update\b/m

// A `ki-work design` design folder holds temporary artefacts, not registry notes. Under the work model it lives in the
// work package, so one anywhere under Streams/ fails, and its notes are not also checked as registry notes.
const DESIGN_FOLDER = /(?:^|[\\/])design[\\/]/

const designFolders = (path: string): string[] =>
  directories(path).flatMap((name) =>
    name === 'design' ? [join(path, name)] : name.startsWith('.') ? [] : designFolders(join(path, name))
  )

const registryNoteEvidence = (root: string, streamsPath: string): StreamsEvidence[] => {
  const notes = REGISTRY_AREAS.flatMap((area) =>
    markdownPaths(join(streamsPath, area)).filter(
      (path) => !DESIGN_FOLDER.test(relative(join(streamsPath, area), path))
    )
  ).sort()
  if (notes.length === 0) return [{ level: 'NOT_APPLICABLE', message: 'No Project notes or theme pages are present.' }]
  const findings = notes.flatMap((path): StreamsEvidence[] => {
    const subject = relative(root, path)
    const body = readFileSync(path, 'utf8').replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '')
    const references = [...new Set(body.match(WORK_RECORD_REFERENCE) ?? [])]
    return [
      ...(references.length
        ? [
            {
              level: 'FAIL' as const,
              message: `Registry note lists work records (${sample(references)}); records name their Project or theme instead.`,
              subject
            }
          ]
        : []),
      ...(UPDATE_SECTION.test(body)
        ? [
            {
              level: 'FAIL' as const,
              message: 'Registry note carries a dated ## Update section; status lives in the records and lifecycle.',
              subject
            }
          ]
        : [])
    ]
  })
  return findings.length
    ? findings
    : [
        {
          level: 'PASS',
          message: 'Project notes and theme pages link upwards only.',
          subject: REGISTRY_AREAS.map((area) => relative(root, join(streamsPath, area))).join(', ')
        }
      ]
}

const sample = (values: readonly string[]): string => values.slice(0, 10).join('; ')

const unavailable = (level: 'FAIL' | 'NOT_APPLICABLE', message: string, subject?: string) => {
  const evidence: StreamsEvidence = { level, message, ...(subject ? { subject } : {}) }
  const notApplicable: StreamsEvidence[] = [{ level: 'NOT_APPLICABLE', message: 'Streams evidence is unavailable.' }]
  return {
    stream: { operationalAreas: [evidence], legacyFolders: notApplicable, registryNotes: notApplicable },
    enactment: { anchor: notApplicable }
  }
}

/** The Streams layout and the Enactment gate's anchor for one base. */
export const streamsEvidence = (
  repository: string
): { stream: StreamRubricContext; enactment: EnactmentRubricContext } => {
  const root = resolve(repository)
  if (!directory(root)) return unavailable('FAIL', 'Target is not a directory.', root)
  const streamsPath = join(root, STREAMS)
  if (!directory(streamsPath)) return unavailable('NOT_APPLICABLE', `No ${STREAMS}/ zone; ZONE-1 owns its presence.`)

  const present = directories(streamsPath)
  const missingAreas = REQUIRED_AREAS.filter((area) => !present.includes(area))
  const unexpectedAreas = present.filter(
    (name) => !OPERATIONAL_AREAS.includes(name as (typeof OPERATIONAL_AREAS)[number])
  )
  const hasTriageDirectory = present.includes('Triage')
  const legacy = present.filter((name) => LEGACY_FOLDERS.includes(name as (typeof LEGACY_FOLDERS)[number]))
  const operationalAreas: StreamsEvidence[] = [
    {
      level: hasTriageDirectory ? 'FAIL' : missingAreas.length || unexpectedAreas.length ? 'WARN' : 'PASS',
      message: hasTriageDirectory
        ? 'Triage is roadmap metadata; Streams/Triage/ must not exist.'
        : missingAreas.length || unexpectedAreas.length
          ? `Streams operational areas need review: missing ${missingAreas.join(', ') || 'none'}; unexpected ${unexpectedAreas.join(', ') || 'none'}.`
          : 'Streams contains the configured Roadmap operational area.',
      subject: STREAMS
    }
  ]
  if (present.includes('Housekeeping'))
    operationalAreas.push({
      level: 'WARN',
      message:
        'Recurring obligations belong in the configured Activity collection. Reconcile existing Streams/Housekeeping definitions with owner approval; do not automatically move, delete or duplicate them.',
      subject: join(STREAMS, 'Housekeeping')
    })
  for (const path of designFolders(streamsPath))
    operationalAreas.push({
      level: 'FAIL',
      message:
        'Streams/ holds only definitions and records; move this design folder into a change document in the package of its work, work/<territory>/<id>/.',
      subject: relative(root, path)
    })
  const legacyFolders: StreamsEvidence[] = [
    ...(present.includes('Initiatives')
      ? [
          {
            level: 'WARN' as const,
            message:
              'legacy: Streams/Initiatives/ is the thread-model registry; each Initiative becomes a theme page, Streams/Themes/<theme>.md.',
            subject: join(STREAMS, 'Initiatives')
          }
        ]
      : []),
    ...directories(join(streamsPath, 'Projects'))
      .filter((name) => !name.startsWith('.'))
      .sort()
      .map((name) => ({
        level: 'WARN' as const,
        message: `legacy: a Project folder note; Project notes are flat, Streams/Projects/${name}.md.`,
        subject: join(STREAMS, 'Projects', name)
      })),
    {
      level: legacy.length ? 'WARN' : 'PASS',
      message: legacy.length
        ? `Legacy Streams state or Focus folders: ${sample(legacy)}.`
        : 'No legacy Streams state or Focus folders are present.',
      subject: STREAMS
    }
  ]
  const roadmapPath = join(streamsPath, 'Roadmap')
  const hasRoadmapRecords = markdownPaths(roadmapPath).some(
    (path) => !['_ISSUES.md', '_IDEAS.md'].includes(basename(path))
  )
  const anchorFiles = ['CLAUDE.md', 'AGENTS.md'].filter((name) => regularFile(join(root, name)))
  const anchored = anchorFiles.some((name) => {
    const content = readFileSync(join(root, name), 'utf8')
    return /Enactment Process|Streams\/Roadmap|ki-repo-kb-streams/i.test(content) && /Roadmap|canonical/i.test(content)
  })
  const anchor: StreamsEvidence[] = [
    {
      level: !hasRoadmapRecords ? 'NOT_APPLICABLE' : anchored ? 'PASS' : 'WARN',
      message: !hasRoadmapRecords
        ? 'No roadmap records yet; the gate is not required.'
        : anchored
          ? 'Enactment gate is anchored.'
          : 'Enactment gate is not anchored in root CLAUDE.md or AGENTS.md; anchor it to route canonical changes through ki-work.',
      ...(anchorFiles.length ? { subject: anchorFiles.join(', ') } : {})
    }
  ]

  return {
    stream: { operationalAreas, legacyFolders, registryNotes: registryNoteEvidence(root, streamsPath) },
    enactment: { anchor }
  }
}
