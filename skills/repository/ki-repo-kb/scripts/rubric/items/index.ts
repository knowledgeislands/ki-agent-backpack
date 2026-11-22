import type { SkillRubricDefinition } from '../../shared/rubric.ts'
import { createKbSession, type KbRubricContext } from '../contexts/kb.ts'
import { ACT } from './activities.ts'
import { ADMIN } from './admin.ts'
import { CONFIG } from './config.ts'
import { ENACT } from './enactment.ts'
import { GATE } from './gate.ts'
import { LINK } from './links.ts'
import { LA_FRONTMATTER } from './live-artifacts-frontmatter.ts'
import { LA_STRUCTURE } from './live-artifacts-structure.ts'
import { MEM } from './memory.ts'
import { NOTE } from './notes.ts'
import { PRINCIPAL } from './principal.ts'
import { RUBRIC } from './publication.ts'
import { ROUTE } from './routing.ts'
import { STREAM } from './streams.ts'
import { ZONE } from './zones.ts'

export default {
  contract: 1,
  name: 'ki-repo-kb',
  concern: 'Knowledge Islands knowledge bases',
  createSession: createKbSession,
  // STREAM, ENACT, ACT, LA, LA-F and PRINCIPAL are the folded standards' families (KB-FOLD b, 22 November 2026).
  families: [
    RUBRIC,
    ZONE,
    CONFIG,
    ADMIN,
    ROUTE,
    NOTE,
    MEM,
    LINK,
    GATE,
    STREAM,
    ENACT,
    ACT,
    LA_STRUCTURE,
    LA_FRONTMATTER,
    PRINCIPAL
  ]
} satisfies SkillRubricDefinition<KbRubricContext>
