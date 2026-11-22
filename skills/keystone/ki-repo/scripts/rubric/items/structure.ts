import type { RubricFamily, RubricItem, ViolationLevel } from '../../shared/rubric.ts'
import { auditEvidence, type RepoRubricContext, type StructureRubricContext } from '../contexts/repository.ts'

const SOURCE = 'standard-repository.md'

const item = (
  code: string,
  title: string,
  description: string,
  level: ViolationLevel,
  evidence: (context: StructureRubricContext) => StructureRubricContext['structure1']
): RubricItem<StructureRubricContext> => ({
  code,
  title,
  description,
  sources: [SOURCE],
  mechanical: {
    level,
    remediation: {
      class: 'diagnostic',
      guidance:
        'Align the repository structure declaration with the applicable standard or record an explicit exemption, then rerun the audit.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(evidence(context), level) }
  }
})

export const STRUCT: RubricFamily<RepoRubricContext, StructureRubricContext> = {
  code: 'STRUCT',
  title: 'Repository structure',
  description: 'Primary repository structure, with composable specialisations.',
  standard: SOURCE,
  selectContext: (context) => context.structure,
  items: [
    item(
      'STRUCT-1',
      'Single primary repository structure',
      'A Project declares no Knowledge Base structure: Project and Knowledge Base are mutually exclusive primaries.',
      'FAIL',
      (context) => context.structure1
    ),
    item(
      'STRUCT-2',
      'No retired shape table',
      '`primary_shape` alone selects the structure: no retired `[skills.ki-repo-project]`, `[skills.ki-repo-homebrew-tap]` or `[skills.ki-repo-specifications]` table remains, nor a `[skills.ki-repo-kb-activities]`, `-live-artifacts`, `-principal` or `-streams` table folded into `[skills.ki-repo-kb]`.',
      'WARN',
      (context) => context.structure2
    ),
    item(
      'STRUCT-3',
      'Single website implementation',
      'A website declares at most one mutually exclusive content or app implementation.',
      'FAIL',
      (context) => context.structure3
    ),
    item(
      'STRUCT-4',
      'Website implementation presence',
      'A declared website core selects a content or app implementation.',
      'WARN',
      (context) => context.structure4
    )
  ]
}
