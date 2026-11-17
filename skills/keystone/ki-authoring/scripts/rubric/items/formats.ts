import { basename } from 'node:path'
import { DIAGNOSTIC_REMEDIATION, type RubricFamily, type RubricItem } from '../../shared/rubric.ts'
import type {
  AuthoringRubricContext,
  FormatsRubricContext,
  RecordEvidence,
  TypedDocumentEvidence
} from '../contexts/authoring.ts'

// A version ref is a UTC time to the second or a Git ref; only a time can be compared without the repository's history.
const TIME_REF = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/

// `ki-revised` is often set just before committing, so a commit this soon after it is not behind.
const REVISED_TOLERANCE_MS = 5 * 60 * 1000
const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/
const DAY_MS = 24 * 60 * 60 * 1000

// Whether a document's `ki-revised` is earlier than its last commit of substance by more than the tolerance; a date with
// no time is read as the end of that day, and a `ki-revised` that is not a time, or a file with no commit, is not compared.
const revisedBehind = (document: TypedDocumentEvidence): boolean => {
  if (!document.revisedAt || !document.committed) return false
  const revised = Date.parse(document.revisedAt) + (DATE_ONLY.test(document.revisedAt) ? DAY_MS : 0)
  const committed = Date.parse(document.committed)
  return !Number.isNaN(revised) && !Number.isNaN(committed) && committed - revised > REVISED_TOLERANCE_MS
}

const noStandards = (context: FormatsRubricContext) =>
  context.standards.length === 0
    ? [{ status: 'NOT_APPLICABLE' as const, message: 'no format standards beside this rubric to check against' }]
    : undefined

const FMT_TYPE: RubricItem<FormatsRubricContext> = {
  code: 'FMT-type',
  title: 'a typed document names a format standard that exists and keeps `ki-revised` up with its commits',
  description:
    "A Markdown document whose front matter `ki-document-type`, or the older `type`, is `<type>@<version ref>` names a format standard, `standard-formats-<type>.md`, that exists in `ki-authoring`, and carries `ki-revised`, which is no earlier than the file's last Git commit by more than five minutes, a commit carrying the `Revised-Unchanged: true` trailer being passed over; a `ki-revised` behind its commit warns, since a mechanical edit leaves it where it is, and a file not in Git or with no commits is not compared. A kind with no `@` has no format standard, a knowledge graph card's own `type` names its card type, and a skill's own files, `skill`, `mode`, `exemplars` and `rubric`, follow `ki-skills`' formats, which its SKILL-FMT items check; none is checked here.",
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
                  message: `\`ki-document-type\` names "${document.word}", which has no format standard`,
                  subject: document.path
                }
              ]),
          ...(document.revised
            ? []
            : [
                { status: 'VIOLATION' as const, message: 'typed document has no `ki-revised`', subject: document.path }
              ]),
          ...(revisedBehind(document)
            ? [
                {
                  status: 'VIOLATION' as const,
                  message: `\`ki-revised\` ${document.revisedAt} is behind the file's last commit, ${document.committed}: move it if that commit changed the substance, or mark a mechanical commit \`Revised-Unchanged: true\``,
                  subject: document.path
                }
              ]
            : [])
        ])
        return findings.length > 0
          ? findings
          : [{ status: 'PASS', message: `${context.documents.length} typed documents name a format standard` }]
      }
    }
  }
}

const FMT_PREFIX: RubricItem<FormatsRubricContext> = {
  code: 'FMT-prefix',
  title: 'a typed document writes the fields KI defines with the `ki-` prefix',
  description:
    'Every top-level front matter field of a typed document or a record but `title` is one KI defines, and carries the `ki-` prefix, as `ki-document-type`, `ki-revised` and `ki-status`, so that no other tool reads or misreads it. While files are swept, a field written without the prefix, such as the older `type` or `revised`, is read under its `ki-` name and warned on, never failed.',
  sources: ['standard-formats-format.md#42-front-matter', 'standard-formats-format.md#47-validation'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Rename each field to its `ki-` name, `type` becoming `ki-document-type`, in a mechanical commit carrying the `Revised-Unchanged: true` trailer, leaving `ki-revised` where it is.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) => {
        const subjects = [...context.documents, ...(context.records ?? [])]
        const seen = new Set<string>()
        const findings = subjects.flatMap((subject) => {
          if (seen.has(subject.path) || !subject.unprefixed?.length) return []
          seen.add(subject.path)
          return [
            {
              status: 'VIOLATION' as const,
              message: `fields without the \`ki-\` prefix, read under their \`ki-\` names: ${subject.unprefixed.join(', ')}`,
              subject: subject.path
            }
          ]
        })
        if (findings.length > 0) return findings
        return subjects.length > 0
          ? [{ status: 'PASS', message: 'every typed document writes its KI fields with the `ki-` prefix' }]
          : [{ status: 'NOT_APPLICABLE', message: 'no typed documents' }]
      }
    }
  }
}

const FMT_VERSION: RubricItem<FormatsRubricContext> = {
  code: 'FMT-version',
  title: 'a typed document follows its format at its current version',
  description:
    "The version ref in a typed document's `ki-document-type` is its format standard's current version, the standard's `ki-revised`. An older time is reported out of date, to be brought into line when the document is next changed; a later one names no version of the format. A commit ref is left to review.",
  sources: ['standard-formats-format.md#43-version-refs', 'standard-formats-format.md#47-validation'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'When the document is next changed, bring it into line with the current format and move its `ki-document-type` up to that version.'
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
    'standard-formats-record.md#47-validation',
    'standard-formats-design.md#47-validation'
  ],
  judgment: {
    scope: 'Every Markdown document whose `ki-document-type` names a format, as listed by FMT-type.',
    prompt: "Assess each typed document's name, shared shape and its own format standard's Validation checks.",
    outcomes: ['conforming', 'reshape required', 'difference justified'],
    guidance:
      'Bring the document to its format when it is next changed, or record where the place says why its name or shape differs.'
  }
}

const REVIEW_VALUES = new Set(['awaiting', 'approved'])
const RECORD_NAME = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})Z-([a-z0-9]+(?:-[a-z0-9]+)*)$/
const BATCH_SECTIONS = ['Purpose', 'Goals', 'What changed']
const REVIEW_SECTIONS = ['What stands today', 'Left open']
const RECORD_FILE = /(?:^|\/)\d{8}T\d{4}Z-[^/#]+\.md(?:#.*)?$/
const PINNED = /^https:\/\/github\.com\/[^/]+\/[^/]+\/blob\/[0-9a-f]{7,40}\//

const inOrder = (headings: readonly string[], sections: readonly string[]) =>
  headings.length === sections.length && headings.every((heading, index) => heading === sections[index])

// What one record breaks of the record format's 4.7; a record with no version is an older record, read as written,
// with only its `ki-at`, `ki-review` and any `ki-id` checked. Each is read under its older bare name too.
const recordProblems = (record: RecordEvidence): readonly string[] => {
  const name = basename(record.path, '.md')
  const named = RECORD_NAME.exec(name)
  const time = named ? `${named[1]}-${named[2]}-${named[3]}T${named[4]}:${named[5]}` : undefined
  const problems = [
    ...(!record.at || (time && !record.at.startsWith(time))
      ? ["`ki-at` is missing or differs from the file name's time"]
      : []),
    ...(record.review && REVIEW_VALUES.has(record.review) ? [] : ['`ki-review` is not awaiting or approved']),
    ...(record.id && record.id !== `record:${name}` ? [`\`ki-id\` is not record:${name}`] : [])
  ]
  if (!record.versioned) return problems
  const slug = named?.[6] ?? ''
  const consolidated = slug.startsWith('review-')
  const recordLinks = record.openingLinks.filter((link) => RECORD_FILE.test(link))
  return [
    ...problems,
    ...(named ? [] : ['the file name is not <YYYYMMDD>T<HHMM>Z-<slug>']),
    ...(record.id ? [] : ['no `ki-id`']),
    ...(record.revised ? [] : ['no `ki-revised`']),
    ...(record.packagesList ? [] : ['`ki-packages` is not a list']),
    ...(consolidated
      ? [
          ...(inOrder(record.headings, REVIEW_SECTIONS)
            ? []
            : ['a consolidated review has What stands today and Left open, and no other section']),
          ...(recordLinks.length === 0 ? ['the opening line links no record it replaces'] : []),
          ...(recordLinks.every((link) => PINNED.test(link))
            ? []
            : ['a record the opening line links is not pinned at a commit'])
        ]
      : inOrder(record.headings, BATCH_SECTIONS) || inOrder(record.headings, REVIEW_SECTIONS)
        ? []
        : [
            "a batch record has Purpose, Goals and What changed, or the review's What stands today and Left open, and no other section"
          ])
  ]
}

const FMT_RECORD: RubricItem<FormatsRubricContext> = {
  code: 'FMT-record',
  title: 'a record follows the record format',
  description:
    "A record, a document whose `ki-document-type` is `record@<version>`, passes the record format's Validation: `ki-id` is `record:` and its file name, `ki-at` matches the name's time, `ki-revised` is present, `ki-packages` is a list and `ki-review` `awaiting` or `approved`; a batch record has Purpose, Goals and What changed, or a review's sections; a consolidated review, named `review-…`, has What stands today and Left open, and its opening line links the records it replaces, each pinned at a commit; and the name is a time and a slug, whose length in words is left to review, since a hyphen may join one word or separate two. An older record, `record` with no version, is read as written: only its `ki-at`, `ki-review` and any `ki-id` are checked. Each field is read under its older bare name too, as FMT-prefix warns.",
  sources: ['standard-formats-record.md#47-validation'],
  mechanical: {
    level: 'FAIL',
    remediation: DIAGNOSTIC_REMEDIATION,
    audit: {
      phase: 'INSPECT',
      run: (context) => {
        const records = context.records ?? []
        if (records.length === 0) return [{ status: 'NOT_APPLICABLE', message: 'no records' }]
        const findings = records.flatMap((record) =>
          recordProblems(record).map((message) => ({ status: 'VIOLATION' as const, message, subject: record.path }))
        )
        if (findings.length > 0) return findings
        const older = records.filter((record) => !record.versioned).length
        return [
          {
            status: 'PASS',
            message: `${records.length - older} records follow the record format; ${older} older records read as written`
          }
        ]
      }
    }
  }
}

export const FORMATS: RubricFamily<AuthoringRubricContext, FormatsRubricContext> = {
  code: 'FMT',
  title: 'Document formats',
  description: 'Typed documents follow the format standard their `ki-document-type` names, at its current version.',
  standard: 'standard-formats-format.md#47-validation',
  selectContext: (context: AuthoringRubricContext) => context.formats,
  items: [FMT_TYPE, FMT_PREFIX, FMT_VERSION, FMT_RECORD, FMT_SHAPE]
}
