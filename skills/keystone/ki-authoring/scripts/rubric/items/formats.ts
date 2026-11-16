import { basename } from 'node:path'
import { DIAGNOSTIC_REMEDIATION, type RubricFamily, type RubricItem } from '../../shared/rubric.ts'
import type { AuthoringRubricContext, FormatsRubricContext, RecordEvidence } from '../contexts/authoring.ts'

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

const REVIEW_VALUES = new Set(['awaiting', 'changes wanted', 'approved'])
const RECORD_NAME = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})Z-([a-z0-9]+(?:-[a-z0-9]+)*)$/
const BATCH_SECTIONS = ['Purpose', 'Goals', 'What changed']
const REVIEW_SECTIONS = ['What stands today', 'Left open']
const RECORD_FILE = /(?:^|\/)\d{8}T\d{4}Z-[^/#]+\.md(?:#.*)?$/
const PINNED = /^https:\/\/github\.com\/[^/]+\/[^/]+\/blob\/[0-9a-f]{7,40}\//

const inOrder = (headings: readonly string[], sections: readonly string[]) =>
  headings.length === sections.length && headings.every((heading, index) => heading === sections[index])

// What one record breaks of the record format's 4.7; a record with no version is an older record, read as written,
// with only its `at`, `review` and any `id` checked.
const recordProblems = (record: RecordEvidence): readonly string[] => {
  const name = basename(record.path, '.md')
  const named = RECORD_NAME.exec(name)
  const time = named ? `${named[1]}-${named[2]}-${named[3]}T${named[4]}:${named[5]}` : undefined
  const problems = [
    ...(!record.at || (time && !record.at.startsWith(time))
      ? ["`at` is missing or differs from the file name's time"]
      : []),
    ...(record.review && REVIEW_VALUES.has(record.review)
      ? []
      : ['`review` is not awaiting, changes wanted or approved']),
    ...(record.id && record.id !== `record:${name}` ? [`\`id\` is not record:${name}`] : [])
  ]
  if (!record.versioned) return problems
  const slug = named?.[6] ?? ''
  const consolidated = slug.startsWith('review-')
  const recordLinks = record.openingLinks.filter((link) => RECORD_FILE.test(link))
  return [
    ...problems,
    ...(named ? [] : ['the file name is not <YYYYMMDD>T<HHMM>Z-<slug>']),
    ...(record.id ? [] : ['no `id`']),
    ...(record.revised ? [] : ['no `revised`']),
    ...(record.packagesList ? [] : ['`packages` is not a list']),
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
    "A record, a document whose `type` is `record@<version>`, passes the record format's Validation: `id` is `record:` and its file name, `at` matches the name's time, `revised` is present, `packages` is a list and `review` one of its three values; a batch record has Purpose, Goals and What changed, or a review's sections; a consolidated review, named `review-…`, has What stands today and Left open, and its opening line links the records it replaces, each pinned at a commit; and the name is a time and a slug, whose length in words is left to review, since a hyphen may join one word or separate two. An older record, `type: record` with no version, is read as written: only its `at`, `review` and any `id` are checked.",
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
  description: 'Typed documents follow the format standard their `type` names, at its current version.',
  standard: 'standard-formats-format.md#47-validation',
  selectContext: (context: AuthoringRubricContext) => context.formats,
  items: [FMT_TYPE, FMT_VERSION, FMT_RECORD, FMT_SHAPE]
}
