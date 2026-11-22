import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import { outcomesFor, type RoadmapAuditContext, type RoadmapRubricContext } from '../contexts/roadmap.ts'

const SOURCE = 'standard-repository-roadmaps.md'

const SCOPE_1: RubricItem<RoadmapAuditContext> = {
  code: 'SCOPE-1',
  title: 'KB scope',
  description:
    'A KB keeps its roadmap records flat in `Streams/Roadmap/`, checked under ITEM-1, ITEM-2, ROAD-6 and ROAD-7; repository-roadmap artifacts in a KB fail.',
  sources: [SOURCE],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance: 'Remove repository-roadmap artifacts from a KB repository and keep its records in Streams/Roadmap/.'
    },
    audit: { phase: 'INSPECT', run: (context) => outcomesFor(context, 'SCOPE-1', 'The repository is in scope.') }
  }
}

export const SCOPE: RubricFamily<RoadmapRubricContext, RoadmapAuditContext> = {
  code: 'SCOPE',
  title: 'scope',
  description: 'Repository-roadmap applicability.',
  standard: SOURCE,
  selectContext: (context) => context.scope,
  items: [SCOPE_1]
}
