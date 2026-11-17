import { judgment, type RubricFamily, type RubricItem } from '../../shared/rubric.ts'
import type { DesignContext } from '../contexts/design.ts'

const DESIGN_1: RubricItem<DesignContext> = {
  code: 'DESIGN-1',
  title: 'each design starts from a brief',
  description:
    'A design starts from a written brief that says what it is for, what it must satisfy and what it leaves out, agreed before any option is drawn, with the names already in use read first.',
  sources: ['standard-design.md#42-how-a-design-is-shaped'],
  judgment: judgment('Did each design start from a written, agreed brief that read the names already in use?')
}

const DESIGN_2: RubricItem<DesignContext> = {
  code: 'DESIGN-2',
  title: "options are weighed and the choice is the owner's",
  description:
    'A design offers more than one way to meet its brief, each with what it costs, with the recommended one marked, so the owner makes the choice.',
  sources: ['standard-design.md#42-how-a-design-is-shaped'],
  judgment: judgment("Were real options weighed with their costs, and was the choice the owner's?")
}

const DESIGN_3: RubricItem<DesignContext> = {
  code: 'DESIGN-3',
  title: 'a second reader reviews the design',
  description:
    'A reviewer who did not draw the design checks it against its brief, the governing standards and earlier decisions before it is called final, and says what has not been checked; each finding is anchored to one exact place, says its kind, whether it blocks, what to change and its confidence, and the outcome is recorded through the change document that moves the design.',
  sources: ['standard-design.md#42-how-a-design-is-shaped'],
  judgment: judgment(
    'Was the design reviewed by someone who did not draw it, against its brief, standards and precedent, with each finding anchored and shaped alike, what was not checked said, and the outcome taken through its change document?'
  )
}

const DESIGN_4: RubricItem<DesignContext> = {
  code: 'DESIGN-4',
  title: 'each level is agreed before the finer one',
  description:
    "A design is drawn at its kind's levels, coarsest first, and each level is agreed before the next is drawn: for visual design, information architecture, then wireframes, then mock-ups; for architecture, system context, containers, then components; for a component, black box, white box, then runtime; for an API, resources, operations, then its contract.",
  sources: ['standard-design.md#43-each-kinds-levels'],
  judgment: judgment("Was the design drawn at its kind's levels, each coarser level agreed before the finer one?")
}

const DESIGN_5: RubricItem<DesignContext> = {
  code: 'DESIGN-5',
  title: 'a design is written down as a design document, linking its records',
  description:
    "A design is written down as a design document in `ki-authoring`'s design format, under `docs/design/`, its status moved only through a change document and a living design's builds added only to its Built section; each choice that needs its reason kept is a decision record, a contract a specification and an architecture a diagram, each in its Authoring skill's form and linked from the design rather than restated.",
  sources: ['standard-design.md#44-where-a-design-is-written-down'],
  judgment: judgment(
    "Is each design a design document under `docs/design/`, moved only through change documents, linking its decision records, specifications and diagrams in their Authoring skills' forms?"
  )
}

export const DESIGN: RubricFamily<DesignContext, DesignContext> = {
  code: 'DESIGN',
  title: 'Design shaping',
  description:
    "Each design starts from a brief, weighs options, is reviewed, is drawn at its kind's levels and is written down as a design document linking its records in Authoring's forms.",
  standard: 'standard-design.md',
  selectContext: (context) => context,
  items: [DESIGN_1, DESIGN_2, DESIGN_3, DESIGN_4, DESIGN_5]
}
