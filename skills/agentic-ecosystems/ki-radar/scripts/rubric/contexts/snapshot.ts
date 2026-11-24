import type { AuditOutcome, RubricPublicationContext } from '../../shared/rubric.ts'

/**
 * Reviews older than this warn: the radar's monthly cadence, a month of 31 days plus four days of
 * operational grace, without invalidating historical evidence.
 */
export const FRESHNESS_DAYS = 35

export type RadarOutcomeContext = {
  readonly outcomes: readonly AuditOutcome[]
}

export type RadarLifecycleContext = {
  readonly vocabularyAndDates: readonly AuditOutcome[]
  readonly consistency: readonly AuditOutcome[]
}

/** One context shape for both snapshots; each subject kind's session selects only the families it carries. */
export type RadarRubricContext = {
  readonly rubric: RubricPublicationContext
  readonly schema: RadarOutcomeContext
  readonly evidence: RadarOutcomeContext
  readonly classification: RadarOutcomeContext
  readonly lifecycle: RadarLifecycleContext
}
