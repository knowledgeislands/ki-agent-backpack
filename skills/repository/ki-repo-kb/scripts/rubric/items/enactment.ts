import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import type { KbRubricContext } from '../contexts/kb.ts'
import { auditEvidence, type EnactmentRubricContext } from '../contexts/streams.ts'

const SOURCE = 'standard-enactment-process.md'

const ENACT_1: RubricItem<EnactmentRubricContext> = {
  code: 'ENACT-1',
  title: 'always-loaded change-management gate',
  description: 'A base with governed work anchors its canonical-change routing in root CLAUDE.md or AGENTS.md.',
  sources: [SOURCE],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Add the appropriate canonical change-management anchor only after confirming the base carries governed work and the always-loaded instruction surface.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.anchor, 'WARN') }
  }
}

const ENACT_2: RubricItem<EnactmentRubricContext> = {
  code: 'ENACT-2',
  title: 'imperative gate directive',
  description: 'The anchor is imperative and routes canonical changes through the selected ki-work adapter.',
  sources: [SOURCE],
  judgment: {
    scope: 'The always-loaded gate anchor and its stated exceptions.',
    prompt: 'Is the anchor a genuine imperative directive with the appropriate exemptions?',
    outcomes: ['conforming', 'directive revision required', 'exception decision required'],
    guidance: 'Rewrite the anchor as a clear imperative directive and document only the process-approved exemptions.'
  }
}

// The one Enactment gate: ki-repo-kb-streams' GATE family, renamed so it does not clash with the commit
// gate, and ki-repo-kb-principal's duplicate anchor check retired. ki-work owns the lifecycle it routes changes into.
export const ENACT: RubricFamily<KbRubricContext, EnactmentRubricContext> = {
  code: 'ENACT',
  title: 'Enactment gate',
  description: 'The always-loaded canonical-change gate anchor, routing changes through ki-work.',
  standard: SOURCE,
  selectContext: (context) => context.enactment,
  items: [ENACT_1, ENACT_2]
}
