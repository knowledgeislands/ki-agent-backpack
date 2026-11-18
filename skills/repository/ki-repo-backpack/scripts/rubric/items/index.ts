import type { SkillRubricDefinition } from '../../shared/rubric.ts'
import { type BackpackRubricContext, createBackpackSession } from '../contexts/backpack.ts'
import { CAP } from './capabilities.ts'
import { CLAUDE } from './claude.ts'
import { COLL } from './collision.ts'
import { CONFIG } from './config.ts'
import { GATE } from './gate.ts'
import { LAY } from './layout.ts'
import { LONG } from './longevity.ts'
import { PAYLOAD } from './payload.ts'
import { RUBRIC } from './publication.ts'
import { SKILLS } from './skills.ts'

export default {
  contract: 1,
  name: 'ki-repo-backpack',
  concern: 'Knowledge Islands compatible backpacks',
  packageScripts: ['ki:harness:eval'],
  createSession: createBackpackSession,
  families: [CAP, PAYLOAD, LAY, CLAUDE, CONFIG, SKILLS, LONG, COLL, GATE, RUBRIC]
} satisfies SkillRubricDefinition<BackpackRubricContext>
