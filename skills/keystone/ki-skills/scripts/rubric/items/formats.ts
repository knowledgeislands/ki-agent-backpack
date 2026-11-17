import type { AuditOutcome, RubricFamily, RubricItem } from '../../shared/rubric.ts'
import { type KiSkillsRubricContext, selectKiSkillsContext } from '../contexts/contexts.ts'
import type { SkillFormatsRubricContext } from '../contexts/formats.ts'

// A version ref is a UTC time to the second or a Git ref; only a time can be compared with a format's `ki-revised`.
const TIME_REF = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/
const TYPED = /^([a-z][a-z0-9-]*)@(\S+)$/

const notKnowledgeIslands = (context: SkillFormatsRubricContext): readonly AuditOutcome[] | undefined =>
  context.knowledgeIslandsSkill
    ? undefined
    : [{ status: 'NOT_APPLICABLE', message: 'the skill file formats are a convention of the `ki-*` set' }]

const SKILL_FMT_1: RubricItem<SkillFormatsRubricContext> = {
  code: 'SKILL-FMT-1',
  title: 'each skill file names its format in `ki-document-type`',
  description:
    "_Skill files have formats._ `SKILL.md` writes `ki-document-type: skill@<version>` as the field after `name`; each `references/mode-<verb>.md` writes `mode@<version>`, `references/exemplars.md` `exemplars@<version>`, and the generated `references/rubric.md` `rubric@<version>`, the word naming the file's format standard beside this rubric. A file without the field, or naming another word, warns, never fails, while the skills are swept.",
  sources: [
    'standard-formats-skill.md#45-validation',
    'standard-formats-mode.md#44-validation',
    'standard-formats-exemplars.md#44-validation',
    'standard-formats-rubric.md#44-validation'
  ],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Add `ki-document-type: <word>@<the format standard’s ki-revised>` as the file’s front matter, after `name` in `SKILL.md`, in a mechanical commit carrying the `Revised-Unchanged: true` trailer; regenerate a rubric with `ki dev skill rubric <skill> --write` instead of editing it.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) => {
        const skipped = notKnowledgeIslands(context)
        if (skipped) return skipped
        const findings: AuditOutcome[] = context.files.flatMap((file) => {
          if (!file.documentType)
            return [
              {
                status: 'VIOLATION' as const,
                message: `${file.path} has no \`ki-document-type\`; its format is \`${file.word}\``
              }
            ]
          const word = TYPED.exec(file.documentType)?.[1]
          return word === file.word
            ? []
            : [
                {
                  status: 'VIOLATION' as const,
                  message: `${file.path} names \`${file.documentType}\`; its format is \`${file.word}@<version>\``
                }
              ]
        })
        if (context.documentTypeFollowsName === false)
          findings.push({ status: 'VIOLATION', message: 'SKILL.md: `ki-document-type` is not the field after `name`' })
        return findings.length > 0
          ? findings
          : [{ status: 'PASS', message: `${context.files.length} skill files name their format` }]
      }
    }
  }
}

const SKILL_FMT_2: RubricItem<SkillFormatsRubricContext> = {
  code: 'SKILL-FMT-2',
  title: 'each skill file follows its format at its current version',
  description:
    "The version ref in a skill file's `ki-document-type` is its format standard's current version, the standard's `ki-revised`. An older time is reported out of date, to be brought into line when the file is next changed, or for a rubric when it is next regenerated; a later one names no version of the format. A commit ref is left to review.",
  sources: ['standard-formats-skill.md#45-validation', 'standard-formats-rubric.md#44-validation'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'When the file is next changed, bring it into line with the current format and move its `ki-document-type` up to that version; regenerate a rubric.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) => {
        const skipped = notKnowledgeIslands(context)
        if (skipped) return skipped
        const findings = context.files.flatMap((file) => {
          const typed = TYPED.exec(file.documentType ?? '')
          const version = context.standards.get(file.word)
          const ref = typed?.[2]
          if (!typed || typed[1] !== file.word || !version || !ref || !TIME_REF.test(ref) || ref === version) return []
          return [
            {
              status: 'VIOLATION' as const,
              message:
                ref < version
                  ? `${file.path} is out of date: follows ${file.word}@${ref}, the format is now at ${version}`
                  : `${file.path} names ${file.word}@${ref}, later than the format's current version, ${version}`
            }
          ]
        })
        return findings.length > 0
          ? findings
          : [{ status: 'PASS', message: 'every skill file with a time ref follows its format at its current version' }]
      }
    }
  }
}

const SKILL_FMT_3: RubricItem<SkillFormatsRubricContext> = {
  code: 'SKILL-FMT-3',
  title: "`SKILL.md`'s KI fields carry the `ki-` prefix",
  description:
    'Every top-level field of `SKILL.md` is either one the Agent Skills specification or a runtime defines, which keeps its name, as `name`, `description` and `argument-hint`, or one Knowledge Islands defines, written with the `ki-` prefix. While the skills are swept, the older `requires`, `contributes` and `owns` are read under their `ki-` names and warned on, never failed; a field neither defines warns too.',
  sources: ['standard-formats-skill.md#42-fields', 'standard-formats-skill.md#45-validation'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Rename `requires`, `contributes` and `owns` to `ki-requires`, `ki-contributes` and `ki-owns` in a mechanical commit carrying the `Revised-Unchanged: true` trailer; set any other new field in the Knowledge Islands standard first, with the prefix, or remove it.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) => {
        const skipped = notKnowledgeIslands(context)
        if (skipped) return skipped
        const findings: AuditOutcome[] = [
          ...(context.unprefixed.length > 0
            ? [
                {
                  status: 'VIOLATION' as const,
                  message: `SKILL.md: fields without the \`ki-\` prefix, read under their \`ki-\` names: ${context.unprefixed.join(', ')}`
                }
              ]
            : []),
          ...(context.unknown.length > 0
            ? [
                {
                  status: 'VIOLATION' as const,
                  message: `SKILL.md: fields neither the specification, a runtime nor Knowledge Islands defines: ${context.unknown.join(', ')}`
                }
              ]
            : [])
        ]
        return findings.length > 0
          ? findings
          : [{ status: 'PASS', message: "SKILL.md's KI fields carry the `ki-` prefix" }]
      }
    }
  }
}

const SKILL_FMT_4: RubricItem<SkillFormatsRubricContext> = {
  code: 'SKILL-FMT-4',
  title: 'each skill file has its format’s shape',
  description:
    '`SKILL.md` opens its body with an H1 and routes to every reference; a mode file opens with an H1 naming its mode, `Mode <VERB>`, states its preconditions before numbered steps and links the standard it applies rather than restating it; an exemplars file opens with a lead paragraph and holds one exemplar to a heading, each naming the rule it shows.',
  sources: [
    'standard-formats-skill.md#43-shape',
    'standard-formats-mode.md#42-shape',
    'standard-formats-exemplars.md#42-shape'
  ],
  judgment: {
    scope: "The skill's `SKILL.md`, its `references/mode-<verb>.md` files and its `references/exemplars.md`.",
    prompt: "Assess each skill file's shape against its format standard's Shape section.",
    outcomes: ['conforming', 'reshape required'],
    guidance: 'Bring a file to its format when it is next changed.'
  }
}

export const SKILL_FORMATS: RubricFamily<KiSkillsRubricContext, SkillFormatsRubricContext> = {
  code: 'SKILL-FMT',
  title: 'Skill file formats',
  description:
    "A skill's own files, `SKILL.md`, its mode files, `exemplars.md` and the generated `rubric.md`, follow the format their `ki-document-type` names, at its current version.",
  standard: 'standard-formats-skill.md',
  selectContext: (context: KiSkillsRubricContext) => selectKiSkillsContext(context, 'formats'),
  items: [SKILL_FMT_1, SKILL_FMT_2, SKILL_FMT_3, SKILL_FMT_4]
}
