import { readFileSync } from 'node:fs'
import type { RubricContextOptions, RubricSession } from '../../shared/rubric.ts'
import {
  AGENTIC_RADAR_PATH,
  AGENTIC_RADAR_SUBJECT,
  CARD_GRAPH_PATH,
  inspectAgenticRadar,
  readCardIds
} from './agentic-radar.ts'
import { inspectModelRadar, MODEL_RADAR_PATH, MODEL_RADAR_SUBJECT } from './model-radar.ts'
import type { RadarRubricContext } from './snapshot.ts'

export type { RadarLifecycleContext, RadarOutcomeContext, RadarRubricContext } from './snapshot.ts'

/** One session over both snapshots: the agentic one carries subject classification, the model one does not. */
export const createRadarSession = ({ publication }: RubricContextOptions): RubricSession<RadarRubricContext> => {
  const agentic: RadarRubricContext = {
    ...inspectAgenticRadar(readFileSync(AGENTIC_RADAR_PATH, 'utf8'), new Date(), readCardIds(CARD_GRAPH_PATH)),
    rubric: { publication }
  }
  const model: RadarRubricContext = {
    ...inspectModelRadar(readFileSync(MODEL_RADAR_PATH, 'utf8')),
    rubric: { publication }
  }
  return {
    subjects: [
      {
        subject: AGENTIC_RADAR_SUBJECT,
        families: ['SCHEMA', 'EVIDENCE', 'CLASSIFICATION', 'LIFECYCLE'],
        context: () => agentic
      },
      { subject: MODEL_RADAR_SUBJECT, families: ['SCHEMA', 'EVIDENCE', 'LIFECYCLE'], context: () => model },
      { subject: 'references/rubric.md', families: ['RUBRIC'], context: () => agentic }
    ],
    proposal: () => ({ writes: [] })
  }
}
