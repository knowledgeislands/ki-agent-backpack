import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import type { RadarOutcomeContext, RadarRubricContext } from '../contexts/radar.ts'

const SOURCE = 'standard-radar.md#42-snapshots'

const SCHEMA_1: RubricItem<RadarOutcomeContext> = {
  code: 'SCHEMA-1',
  title: 'each snapshot’s schema, identities and owners are valid',
  description:
    'Each subject kind’s snapshot parses as schema 1 TOML with only its declared maps and fields, stable lower-case hyphenated identities repeated exactly in their records, and the required typed fields without unknown keys; an agentic subject has explicit non-empty owner, uncertainty, and return-trigger values, and any `card` names a card that exists in `ki-agentic-ecosystems`’ `knowledge/` graph when that skill sits beside the radar.',
  sources: [SOURCE, 'standard-agentic-radar.md#42-snapshot-schema', 'standard-model-radar.md#42-snapshot-schema'],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Correct authored structure or identity only after confirming the intended record, owner, uncertainty, and return trigger; do not infer missing facts.'
    },
    audit: { phase: 'INSPECT', run: ({ outcomes }) => outcomes }
  }
}

export const SCHEMA: RubricFamily<RadarRubricContext, RadarOutcomeContext> = {
  code: 'SCHEMA',
  title: 'Snapshot schema',
  description: 'Each TOML snapshot has one stable, attributable, mechanically valid representation.',
  standard: SOURCE,
  selectContext: (context) => context.schema,
  items: [SCHEMA_1]
}
