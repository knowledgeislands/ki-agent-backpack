import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import type { BackpackReviewContext, BackpackRubricContext } from '../contexts/backpack.ts'

const LONG_1: RubricItem<BackpackReviewContext> = {
  code: 'LONG-1',
  title: 'Refresh path',
  description: 'The ki-repo-backpack skill carries REFRESH and a dated source review record.',
  sources: ['standard-compatible-backpack.md'],
  judgment: {
    scope: 'The ki-repo-backpack REFRESH procedure, source list, cadence, and current compatible-backpack standard.',
    prompt: 'Do the ki-repo-backpack REFRESH procedure and sources.md cadence provide a usable current refresh path?',
    outcomes: ['conforming', 'refresh-path revision', 'source review required'],
    guidance:
      'Update the documented refresh path or complete its source review through the canonical backpack; do not invent a review result without source evidence.'
  }
}

export const LONG: RubricFamily<BackpackRubricContext, BackpackReviewContext> = {
  code: 'LONG',
  title: 'Longevity',
  description: 'Refresh discipline for the compatible-backpack standard.',
  standard: 'standard-compatible-backpack.md',
  selectContext: (context) => context.review,
  items: [LONG_1]
}
