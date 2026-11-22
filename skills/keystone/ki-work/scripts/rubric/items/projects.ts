import type { RubricFamily } from '../../shared/rubric.ts'
import type { ChangeManagementRubricContext } from '../types.ts'

const SOURCE = 'standard-project-registry.md'

// PROJ-1 and PROJ-2 were ki-repo-kb-streams' STREAM-10 and STREAM-11 until KB-FOLD b (22 November 2026).
export const PROJ: RubricFamily<ChangeManagementRubricContext, ChangeManagementRubricContext['projects']> = {
  code: 'PROJ',
  title: 'Project registry',
  description:
    "A Capital's Projects are assessed before they close, and its idea-stage Projects stay within their caps.",
  standard: SOURCE,
  selectContext: (context) => context.projects,
  items: [
    {
      code: 'PROJ-1',
      title: 'Project close-out assessment',
      description:
        "A Capital's active or paused Project with no open record in any locally registered checkout, or a completed or cancelled Project, carries a ### Close-out assessment in its ## Notes before its lead closes it.",
      sources: [`${SOURCE}#45-close-out-assessment`],
      mechanical: {
        level: 'WARN',
        remediation: {
          class: 'diagnostic',
          guidance:
            "Assess what was delivered against the Project's Outcome and whether follow-up or remedial work is needed, capture that work as triage records in the owning repositories, and write the assessment in ## Notes; the lead then decides whether to close the Project."
        },
        audit: { phase: 'INSPECT', run: (context) => context.closeOut }
      }
    },
    {
      code: 'PROJ-2',
      title: 'idea-stage Projects',
      description:
        "A Capital's idea-stage Project, planned with a decision as its outcome, is named by no open record, and there is at most one per theme and three across the territory.",
      sources: [`${SOURCE}#43-idea-stage-project`],
      mechanical: {
        level: 'WARN',
        remediation: {
          class: 'diagnostic',
          guidance:
            'Graduate an idea-stage Project to active with a delivery Outcome before records name it; over a cap, graduate or fold an idea-stage Project, or have its lead lift the cap.'
        },
        audit: { phase: 'INSPECT', run: (context) => context.ideaStage }
      }
    }
  ]
}
