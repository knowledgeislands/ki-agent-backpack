import type { SkillRubricDefinition } from '../../shared/rubric.ts'
import { type AuthoringRubricContext, createAuthoringSession } from '../contexts/authoring.ts'
import { FORMATS } from './formats.ts'
import { MARKDOWN } from './markdown.ts'
import { OWNED } from './owned.ts'
import { RUBRIC } from './publication.ts'
import { SYNCHRONISATION } from './sync.ts'
import { TOML } from './toml.ts'
import { WHITEPAPERS } from './whitepapers.ts'

export default {
  contract: 1,
  name: 'ki-authoring',
  concern: 'Knowledge Islands authoring conventions',
  createSession: createAuthoringSession,
  families: [RUBRIC, FORMATS, MARKDOWN, OWNED, TOML, WHITEPAPERS, SYNCHRONISATION]
} satisfies SkillRubricDefinition<AuthoringRubricContext>
