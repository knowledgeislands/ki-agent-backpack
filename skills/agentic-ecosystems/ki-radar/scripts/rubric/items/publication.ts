import { createRubricPublicationFamily } from '../../shared/rubric.ts'
import type { RadarRubricContext } from '../contexts/radar.ts'

export const RUBRIC = createRubricPublicationFamily<RadarRubricContext>(
  ({ rubric }) => rubric,
  '../../../keystone/ki-skills/references/standard-rubric-authoring.md',
  ['../../../keystone/ki-skills/references/standard-rubric-authoring.md#414-generated-rubric-publication']
)
