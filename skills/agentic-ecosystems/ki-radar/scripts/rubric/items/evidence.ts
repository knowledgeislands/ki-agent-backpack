import { judgment, type RubricFamily, type RubricItem } from '../../shared/rubric.ts'
import type { RadarOutcomeContext, RadarRubricContext } from '../contexts/radar.ts'

const SOURCE = 'standard-radar.md#43-evidence'

const EVIDENCE_1: RubricItem<RadarOutcomeContext> = {
  code: 'EVIDENCE-1',
  title: 'evidence records and links are valid',
  description:
    'Every evidence record carries the shared core of a current identity, title, HTTP(S) source, review date and notes, plus its subject kind’s classification: an evidence class and source role on the agentic snapshot, an evaluation unit and independence class on the model snapshot. Every evidence and counter-evidence reference resolves without duplication or support/counter overlap; provider claims are not primary, and discovery or counter-evidence records are not used as direct support.',
  sources: [SOURCE, 'standard-agentic-radar.md#43-evidence', 'standard-model-radar.md#425-evidence'],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Review the source claim, intended role and record linkage before correcting authored evidence; do not invent replacements.'
    },
    audit: { phase: 'INSPECT', run: ({ outcomes }) => outcomes }
  }
}

const EVIDENCE_2: RubricItem<RadarOutcomeContext> = {
  code: 'EVIDENCE-2',
  title: 'evidence is applicable and proportionate',
  description:
    'Consequential claims use evidence applicable to the precise subject, unit and claim, keep materially independent corroboration where available and local-fit evidence proportional to any recommendation, retain uncertainty and counter-evidence, and never treat a provider performance claim, package count or vendor assertion as decisive.',
  sources: [
    'standard-radar.md#46-movement-and-adoption',
    'standard-agentic-radar.md#44-evidence-and-movement-review',
    'standard-model-radar.md#44-evidence-and-movement-review'
  ],
  judgment: judgment(
    'Does each consequential classification, recommendation or movement have applicable, sufficiently independent evidence with local fit, uncertainty and counter-evidence preserved?'
  )
}

export const EVIDENCE: RubricFamily<RadarRubricContext, RadarOutcomeContext> = {
  code: 'EVIDENCE',
  title: 'Evidence quality',
  description: 'Evidence is linked, classified, applicable, and proportionate to how it is used.',
  standard: SOURCE,
  selectContext: (context) => context.evidence,
  items: [EVIDENCE_1, EVIDENCE_2]
}
