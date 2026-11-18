import { createRubricPublicationFamily } from '../../shared/rubric.ts'
import type { BackpackRubricContext } from '../contexts/backpack.ts'

export const RUBRIC = createRubricPublicationFamily<BackpackRubricContext>(
  ({ rubric }) => rubric,
  '../../../keystone/ki-skills/references/standard-rubric-authoring.md',
  ['../../../keystone/ki-skills/references/standard-rubric-authoring.md#414-generated-rubric-publication']
)
