import type { SkillRubricDefinition } from '../../shared/rubric.ts'
import { createRadarSession, type RadarRubricContext } from '../contexts/radar.ts'
import { CLASSIFICATION } from './classification.ts'
import { EVIDENCE } from './evidence.ts'
import { LIFECYCLE } from './lifecycle.ts'
import { RUBRIC } from './publication.ts'
import { SCHEMA } from './schema.ts'

export default {
  contract: 1,
  name: 'ki-radar',
  concern: 'Evidence-backed review of agentic subjects, models and model-agent routes',
  createSession: createRadarSession,
  families: [SCHEMA, EVIDENCE, CLASSIFICATION, LIFECYCLE, RUBRIC]
} satisfies SkillRubricDefinition<RadarRubricContext>
