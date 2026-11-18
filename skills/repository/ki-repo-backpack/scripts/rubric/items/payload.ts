import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import type { BackpackProvenanceContext, BackpackRubricContext } from '../contexts/backpack.ts'

const PAYLOAD_1: RubricItem<BackpackProvenanceContext> = {
  code: 'PAYLOAD-1',
  title: 'Installed and runtime evidence remains separate',
  description:
    'A source-backpack audit records that verified payload, local-development source, activation, capability resolution, and execution need host evidence.',
  sources: ['standard-compatible-backpack.md#41-source-and-installed-boundaries'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Obtain the required provenance or runtime evidence from tools-ki; do not infer it from a source checkout.'
    },
    audit: { phase: 'INSPECT', run: (context) => context.payload }
  }
}

export const PAYLOAD: RubricFamily<BackpackRubricContext, BackpackProvenanceContext> = {
  code: 'PAYLOAD',
  title: 'Payload and runtime evidence boundary',
  description: 'Host-owned provenance and activation evidence not derived from source layout.',
  standard: 'standard-compatible-backpack.md',
  selectContext: (context) => context.provenance,
  items: [PAYLOAD_1]
}
