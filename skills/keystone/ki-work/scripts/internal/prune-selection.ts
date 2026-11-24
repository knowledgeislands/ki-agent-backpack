export type PruneCandidate = {
  path: string
  /** Canonical work-record identifier, listed in the prune commit body. */
  id: string
  regularFile: boolean
  symlink: boolean
  canonical: boolean
  status: 'triage' | 'draft' | 'ready' | 'in-progress' | 'awaiting-review' | 'done' | 'cancelled'
  /** The record has landed in its terminal state, `done` or `cancelled`, in an earlier commit. */
  committedDone: boolean | 'unknown'
}

export type PruneSelectionInput = {
  adapter: 'roadmap' | 'kb-streams'
  root: 'docs/roadmap' | 'Streams/Roadmap'
  selectors: readonly string[]
  completeResolution: boolean
  candidates: readonly PruneCandidate[]
}

/** The standardised prune commit message, matching the one `ki repo roadmap prune` writes by default. */
export type PruneCommitMessage = { subject: string; body: string }

export type PruneSelectionOutcome =
  | {
      kind: 'selected'
      paths: readonly string[]
      commitBoundary: 'prune-only'
      commitMessage: PruneCommitMessage
      writes: false
    }
  | { kind: 'stop'; reason: string; writes: false }

/** Counted subject, singular for one record, and one `- <ID>` body line per record in identifier order. */
export const pruneCommitMessage = (ids: readonly string[]): PruneCommitMessage => ({
  subject: `chore(roadmap): prune ${ids.length} done work record${ids.length === 1 ? '' : 's'}`,
  body: [...ids]
    .sort((left, right) => left.localeCompare(right))
    .map((id) => `- ${id}`)
    .join('\n')
})

const selectorIsSafe = (selector: string): boolean =>
  !!selector && !selector.startsWith('/') && !selector.split('/').includes('..') && !selector.includes('\\')

export const evaluatePruneSelection = ({
  adapter,
  root,
  selectors,
  completeResolution,
  candidates
}: PruneSelectionInput): PruneSelectionOutcome => {
  const expectedRoot = adapter === 'roadmap' ? 'docs/roadmap' : 'Streams/Roadmap'
  if (root !== expectedRoot) return { kind: 'stop', reason: 'selected adapter root is invalid', writes: false }
  if (!selectors.length || selectors.some((selector) => !selectorIsSafe(selector)))
    return { kind: 'stop', reason: 'prune selection contains an unsafe path or glob', writes: false }
  if (!completeResolution || !candidates.length)
    return { kind: 'stop', reason: 'prune selection did not resolve a complete non-empty set', writes: false }
  if (new Set(candidates.map((candidate) => candidate.path)).size !== candidates.length)
    return { kind: 'stop', reason: 'prune selection resolves a duplicate record', writes: false }
  for (const candidate of candidates) {
    if (!candidate.regularFile || candidate.symlink || !candidate.canonical)
      return { kind: 'stop', reason: `${candidate.path} is not a regular canonical work record`, writes: false }
    if (candidate.status !== 'done' && candidate.status !== 'cancelled')
      return { kind: 'stop', reason: `${candidate.path} is not done or cancelled`, writes: false }
    if (candidate.committedDone === false)
      return { kind: 'stop', reason: `${candidate.path} has not landed as done`, writes: false }
    if (candidate.committedDone === 'unknown')
      return { kind: 'stop', reason: `${candidate.path} has uncertain committed done evidence`, writes: false }
  }
  return {
    kind: 'selected',
    paths: candidates.map((candidate) => candidate.path),
    commitBoundary: 'prune-only',
    commitMessage: pruneCommitMessage(candidates.map((candidate) => candidate.id)),
    writes: false
  }
}

/** A terminal record is due for the standing prune this many days after its terminal state landed. */
export const STANDING_PRUNE_DAYS = 7

export type StandingPruneInput = {
  status: PruneCandidate['status']
  /** When the commit that first recorded the terminal state was made, or null where none is found. */
  terminalCommittedAt: Date | null
  /** That commit, and the delivery commits the record names, are on the upstream default branch. */
  landed: boolean | 'unknown'
  now: Date
}

export type StandingPruneOutcome = { due: true } | { due: false; reason: string }

/**
 * Whether a record may be pruned without asking the owner: `done` or `cancelled` for at least seven days, with its
 * commits landed. Being due is the deletion authority for that record alone; the selection, preflight and prune-only
 * commit rules still apply, and closure or cancellation still needs the owner's approval.
 */
export const evaluateStandingPrune = ({
  status,
  terminalCommittedAt,
  landed,
  now
}: StandingPruneInput): StandingPruneOutcome => {
  if (status !== 'done' && status !== 'cancelled') return { due: false, reason: 'not done or cancelled' }
  if (terminalCommittedAt === null) return { due: false, reason: 'its terminal state has not landed in a commit' }
  if (landed !== true) return { due: false, reason: 'its commits are not yet landed upstream' }
  const days = (now.getTime() - terminalCommittedAt.getTime()) / 86_400_000
  if (days < STANDING_PRUNE_DAYS) return { due: false, reason: `terminal for under ${STANDING_PRUNE_DAYS} days` }
  return { due: true }
}
