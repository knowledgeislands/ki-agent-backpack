import type { SkillRubricDefinition } from '../../shared/rubric.ts'
import { createChangeManagementSession } from '../contexts/change-management.ts'
import type { ChangeManagementRubricContext } from '../types.ts'
import { PROJ } from './projects.ts'
import { SELECT } from './selection.ts'

export default {
  contract: 1,
  name: 'ki-work',
  concern: 'change-management adapter selection and Project registry close-out',
  createSession: createChangeManagementSession,
  families: [SELECT, PROJ]
} satisfies SkillRubricDefinition<ChangeManagementRubricContext>
