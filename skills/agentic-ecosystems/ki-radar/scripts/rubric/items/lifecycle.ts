import { judgment, type RubricFamily, type RubricItem } from '../../shared/rubric.ts'
import type { RadarLifecycleContext, RadarRubricContext } from '../contexts/radar.ts'

const SOURCE = 'standard-radar.md#44-dates-and-cadence'

const LIFECYCLE_1: RubricItem<RadarLifecycleContext> = {
  code: 'LIFECYCLE-1',
  title: 'vocabulary and review dates are valid',
  description:
    'Each snapshot’s classifications, stances and movements use their closed vocabularies; dates are real, non-future ISO calendar dates; a review older than 35 days, the monthly cadence plus four days of grace, warns without invalidating historical evidence.',
  sources: [SOURCE, 'standard-agentic-radar.md#422-subjects', 'standard-model-radar.md#43-dates-and-freshness'],
  mechanical: {
    level: 'FAIL',
    overrideLevels: ['WARN'],
    remediation: {
      class: 'diagnostic',
      guidance:
        'Refresh stale evidence or correct malformed vocabulary and dates only after checking the authored source and intended classification.'
    },
    audit: { phase: 'INSPECT', run: ({ vocabularyAndDates }) => vocabularyAndDates }
  }
}

const LIFECYCLE_2: RubricItem<RadarLifecycleContext> = {
  code: 'LIFECYCLE-2',
  title: 'stance, support and lifecycle combinations are coherent',
  description:
    'On the agentic snapshot, inward movement cannot accompany Hold, outward movement cannot accompany Adopt, and Trial or Adopt requires local-evaluation evidence. On the model snapshot, default routes are adopted and use active models, retired models have only hold and not-integrated routes, benchmark retirement and applicability agree, and successors resolve. Mechanical contradictions are reported, but their repair needs an explicit stance, recommendation or lifecycle decision.',
  sources: [
    'standard-radar.md#46-movement-and-adoption',
    'standard-agentic-radar.md#422-subjects',
    'standard-model-radar.md#423-executable-routes',
    'standard-model-radar.md#424-benchmarks'
  ],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'guarded',
      guidance:
        'Review the supporting evidence and decide which stance, recommendation, support, retirement or benchmark state is authoritative before editing.'
    },
    audit: { phase: 'INSPECT', run: ({ consistency }) => consistency }
  },
  judgment: judgment(
    'Does each stance, recommendation, support level, retirement and movement express a defensible reviewed Knowledge Islands decision, with a concrete use case, explicit uncertainty, owner and actionable return trigger, rather than merely a mechanically consistent tuple?'
  )
}

export const LIFECYCLE: RubricFamily<RadarRubricContext, RadarLifecycleContext> = {
  code: 'LIFECYCLE',
  title: 'Review lifecycle',
  description: 'Dates, classifications, stances, ownership and return triggers remain current and coherent.',
  standard: SOURCE,
  selectContext: (context) => context.lifecycle,
  items: [LIFECYCLE_1, LIFECYCLE_2]
}
