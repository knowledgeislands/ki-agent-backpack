/**
 * Read-only discovery of a repository's coordinator binding for the thin `ki-coordination` rubric.
 *
 * Boundary: runs only where a repository declares `[skills.ki-coordination]` in its `.ki.toml`, the section this skill
 * contributes, and reads the repository's and the user's Claude Code settings, of which it reads only the output style
 * and the hook commands, and the deployed output style. Reports are no longer read, their checks retired under
 * COORD-REPORT-CHECKS (Kris, 15 November 2026); where territory work sits and the level a work file declares are no
 * longer checked, retired under COORD-RETIRE (Kris, 16 November 2026); and the Project registry, theme and active-work
 * cap checks, which read `+/_WORK/`, are retired for now under COORD-REPOINT (Kris, 16 November 2026), to return in
 * `ki-work-package`'s check as warnings once a project-level package lands in the Cairn store. It never writes, and it
 * never judges a transcript: coordinator behaviour is reviewed by the judgment items from evidence the owner selects.
 */
import { existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import type {
  AuditOutcome,
  RubricContextOptions,
  RubricPublicationContext,
  RubricSession
} from '../../shared/rubric.ts'

const OUTPUT_STYLE = 'ki-coordinator'
const COORDINATOR_HOOK = 'coordinator-reminder.sh'
const HOOK_EVENTS = ['UserPromptSubmit', 'SessionStart'] as const
export type OutcomeContext = { readonly outcomes: readonly AuditOutcome[] }

export type CoordinationRubricContext = {
  readonly rubric: RubricPublicationContext
  readonly binding: OutcomeContext
  readonly judgment: OutcomeContext
}

const table = (value: unknown): Readonly<Record<string, unknown>> | null =>
  value && typeof value === 'object' && !Array.isArray(value) ? (value as Readonly<Record<string, unknown>>) : null

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
  const context: CoordinationRubricContext = {
    rubric: { publication },
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
