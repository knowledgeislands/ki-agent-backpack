import { judgment, type RubricFamily } from '../../shared/rubric.ts'
import type { KnowledgeGraphContext } from '../contexts/knowledge-graph.ts'

export const CURATE = {
  code: 'CURATE',
  title: 'What curated cards keep',
  standard: 'standard-knowledge-graph.md',
  description:
    'What a card curated from a capture keeps is judged on the cards and the captures they came from; curating itself is the Inbox’s, under CURATION-HOME.',
  selectContext: (context) => context,
  items: [
    {
      code: 'CURATE-4',
      title: 'curation keeps what is durable',
      description:
        'Positions, proposals and commitments are kept with the organisation holding each, and the moment’s detail stays in the capture.',
      sources: ['standard-knowledge-graph.md#47-staging-and-tending'],
      judgment: judgment(
        'Did curation keep durable positions and commitments against organisations, and leave ephemeral detail in the capture?'
      )
    }
  ]
} satisfies RubricFamily<KnowledgeGraphContext, KnowledgeGraphContext>
