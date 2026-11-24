import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import type { DocumentationRubricContext, RepoRubricContext } from '../contexts/repository.ts'

const DOC_1: RubricItem<DocumentationRubricContext> = {
  code: 'DOC-1',
  title: 'Documentation concern ownership',
  description:
    'In a non-Knowledge-Base repository, durable documentation is routed to Decision Records, Specifications, Guides, or the Roadmap; specialist skills retain the content contract for their concern.',
  sources: ['standard-documentation-topology.md'],
  judgment: {
    scope: 'Repository documentation topology and the durable material routed to each concern.',
    prompt:
      'Does each durable documentation concern have the right owner, with decisions explaining choices, Specifications defining behaviour, Guides helping people operate or contribute, and roadmap records tracking planned change?',
    outcomes: ['conforming', 'gap', 'exclusion'],
    guidance:
      'Route the material to its owning concern, record a named gap where the required contract is absent, or record an explicit repository-level exclusion.'
  }
}

const DOC_2: RubricItem<DocumentationRubricContext> = {
  code: 'DOC-2',
  title: 'docs/ opens on its folder page',
  description:
    '`docs/` opens on `_index.md` like every folder below it; a `README.md` page there is renamed when its keeper next works in the folder.',
  sources: ['standard-repository.md'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance: 'Rename docs/README.md to docs/_index.md when next working in docs/.'
    },
    audit: { phase: 'INSPECT', run: (context) => context.docsPage }
  }
}

export const DOC: RubricFamily<RepoRubricContext, DocumentationRubricContext> = {
  code: 'DOC',
  title: 'Documentation topology',
  description: 'Repository-level ownership of durable documentation concerns.',
  standard: 'standard-documentation-topology.md',
  selectContext: (context) => context.documentation,
  items: [DOC_1, DOC_2]
}
