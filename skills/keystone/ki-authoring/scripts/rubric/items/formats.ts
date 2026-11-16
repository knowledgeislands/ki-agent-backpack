import { DIAGNOSTIC_REMEDIATION, type RubricFamily, type RubricItem } from '../../shared/rubric.ts'
import type { AuthoringRubricContext, FormatsRubricContext } from '../contexts/authoring.ts'

// A version ref is a UTC time to the second or a Git ref; only a time can be compared without the repository's history.
const TIME_REF = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/

const noStandards = (context: FormatsRubricContext) =>
  context.standards.length === 0
    ? [{ status: 'NOT_APPLICABLE' as const, message: 'no format standards beside this rubric to check against' }]
    : undefined

const FMT_TYPE: RubricItem<FormatsRubricContext> = {
  code: 'FMT-type',
  title: 'a typed document names a format standard that exists',
  description:
    'A Markdown document whose front matter `type` is `<type>@<version ref>` names a format standard, `standard-formats-<type>.md`, that exists in `ki-authoring`, and carries `revised`. A `type` with no `@` names a resource or a card type, not a format, and is not checked here.',
  sources: ['standard-formats-format.md#42-front-matter', 'standard-formats-format.md#47-validation'],
  mechanical: {
    level: 'WARN',
    remediation: DIAGNOSTIC_REMEDIATION,
    audit: {
      phase: 'INSPECT',
      run: (context) => {
        const skipped = noStandards(context)
        if (skipped) return skipped
        const words = new Set(context.standards.map((standard) => standard.word))
        const findings = context.documents.flatMap((document) => [
          ...(words.has(document.word)
            ? []
            : [
                {
                  status: 'VIOLATION' as const,
                  message: `type names "${document.word}", which has no format standard`,
                  subject: document.path
                }
              ]),
          ...(document.revised
            ? []
            : [{ status: 'VIOLATION' as const, message: 'typed document has no `revised`', subject: document.path }])
        ])
        return findings.length > 0
          ? findings
          : [{ status: 'PASS', message: `${context.documents.length} typed documents name a format standard` }]
      }
    }
  }
}

const FMT_VERSION: RubricItem<FormatsRubricContext> = {
  code: 'FMT-version',
  title: 'a typed document follows its format at its current version',
  description:
    "The version ref in a typed document's `type` is its format standard's current version, the standard's `revised`. An older time is reported out of date, to be brought into line when the document is next changed; a later one names no version of the format. A commit ref is left to review.",
  sources: ['standard-formats-format.md#43-version-refs', 'standard-formats-format.md#47-validation'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'When the document is next changed, bring it into line with the current format and move its `type` up to that version.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) => {
        const skipped = noStandards(context)
        if (skipped) return skipped
        const current = new Map(context.standards.map((standard) => [standard.word, standard.revised]))
        const findings = context.documents.flatMap((document) => {
          const version = current.get(document.word)
          if (!version || !TIME_REF.test(document.ref) || document.ref === version) return []
          return [
            {
              status: 'VIOLATION' as const,
              message:
                document.ref < version
                  ? `out of date: follows ${document.word}@${document.ref}, the format is now at ${version}`
                  : `names ${document.word}@${document.ref}, later than the format's current version, ${version}`,
              subject: document.path
            }
          ]
        })
        return findings.length > 0
          ? findings
          : [
              {
                status: 'PASS',
                message: 'every typed document with a time ref follows its format at its current version'
              }
            ]
      }
    }
  }
}

const FMT_SHAPE: RubricItem<FormatsRubricContext> = {
  code: 'FMT-shape',
  title: "a typed document has its format's name and shape",
  description:
    "A typed document's file name follows its format's pattern, or the place says why it differs; it has the shape every format shares, Contents, numbered sections and Back to contents links, unless its format replaces it; and it passes its own format standard's Validation section.",
  sources: [
    'standard-formats-format.md#47-validation',
    'standard-formats-standard.md#45-validation',
    'standard-formats-change.md#46-validation',
    'standard-formats-sources.md#45-validation',
    'standard-formats-record.md#47-validation'
  ],
  judgment: {
    scope: 'Every Markdown document whose `type` names a format, as listed by FMT-type.',
    prompt: "Assess each typed document's name, shared shape and its own format standard's Validation checks.",
    outcomes: ['conforming', 'reshape required', 'difference justified'],
    guidance:
      'Bring the document to its format when it is next changed, or record where the place says why its name or shape differs.'
  }
}

export const FORMATS: RubricFamily<AuthoringRubricContext, FormatsRubricContext> = {
  code: 'FMT',
  title: 'Document formats',
  description: 'Typed documents follow the format standard their `type` names, at its current version.',
  standard: 'standard-formats-format.md#47-validation',
  selectContext: (context: AuthoringRubricContext) => context.formats,
  items: [FMT_TYPE, FMT_VERSION, FMT_SHAPE]
}
