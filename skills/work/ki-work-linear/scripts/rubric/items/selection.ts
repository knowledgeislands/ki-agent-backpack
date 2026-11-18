import type { RubricFamily } from '../../shared/rubric.ts'
import type { LinearRubricContext } from '../types.ts'

export const SELECT: RubricFamily<LinearRubricContext, LinearRubricContext['selection']> = {
  code: 'SELECT',
  title: 'Linear configuration',
  description: 'One declared Linear team with matching shared selection.',
  standard: 'standard-linear.md',
  selectContext: (context) => context.selection,
  items: [
    {
      code: 'SELECT-1',
      title: 'explicit Linear adapter',
      description: 'The repository selects and configures one Linear team.',
      sources: ['standard-linear.md#41-configuration-and-local-inspection'],
      mechanical: {
        level: 'FAIL',
        remediation: {
          class: 'diagnostic',
          guidance: 'Select linear and declare one uppercase Linear team key.'
        },
        audit: { phase: 'INSPECT', run: (context) => context.outcomes }
      }
    }
  ]
}
