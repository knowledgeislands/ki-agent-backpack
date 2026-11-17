import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import { auditEvidence, type RepoRubricContext, type RuntimesRubricContext } from '../contexts/repository.ts'

const SOURCE = 'standard-repository.md'

const RUNTIMES_1: RubricItem<RuntimesRubricContext> = {
  code: 'RUNTIMES-1',
  title: 'Supported runtime declaration',
  description: 'ki-repo declares a non-empty, duplicate-free list containing only supported runtimes.',
  sources: [SOURCE],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance: 'Declare the supported runtimes as a non-empty duplicate-free supported set, then rerun the audit.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.runtimes1, 'FAIL') }
  }
}

const RUNTIMES_2: RubricItem<RuntimesRubricContext> = {
  code: 'RUNTIMES-2',
  title: 'Runtime environment coverage',
  description:
    'Every repository declares portable tokenomics and the real housekeeping and tokenomics capabilities required by its supported runtimes.',
  sources: [SOURCE],
  mechanical: {
    level: 'FAIL',
    remediation: { class: 'automatic' },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.runtimes2, 'FAIL') },
    conform: { phase: 'PRIMARY', run: ({ requestRuntimeSkills }) => requestRuntimeSkills?.() }
  }
}

const RUNTIMES_3: RubricItem<RuntimesRubricContext> = {
  code: 'RUNTIMES-3',
  title: 'Repository-local ki-self projection',
  description:
    'An optional repository-local ki-self has one canonical .agents source and a relative Claude projection exactly when Claude Code is supported.',
  sources: [SOURCE],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance: 'Restore the canonical ki-self source and applicable runtime projection, then rerun the audit.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.runtimes3, 'FAIL') }
  }
}

const RUNTIMES_4: RubricItem<RuntimesRubricContext> = {
  code: 'RUNTIMES-4',
  title: 'Root runtime orientation',
  description:
    'A multi-runtime repository exposes shared root orientation through a physical AGENTS.md and a thin Claude import.',
  sources: [SOURCE],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Move shared root orientation into AGENTS.md, import it from CLAUDE.md with a bare @AGENTS.md line, and rerun the audit.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.runtimes4, 'WARN') }
  }
}

const RUNTIMES_5: RubricItem<RuntimesRubricContext> = {
  code: 'RUNTIMES-5',
  title: 'Claude orientation location',
  description: 'Repository-local Claude orientation is not stored at .claude/CLAUDE.md at any depth.',
  sources: [SOURCE],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance: 'Move shared guidance into root AGENTS.md and Claude-specific guidance into root CLAUDE.md.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.runtimes5, 'FAIL') }
  }
}

const RUNTIMES_6: RubricItem<RuntimesRubricContext> = {
  code: 'RUNTIMES-6',
  title: 'Vendored skill copies',
  description:
    'A skill declared with mode "vendored" keeps a physical .agents/skills source naming it and, when Claude Code is supported, a relative Claude link to it; mode is "current" or "vendored", and a recorded commit is a full hash.',
  sources: ['standard-configuration.md#434-vendored-skills'],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Restore the committed copy and its Claude link, or correct the declared mode or commit, then rerun the audit.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.runtimes6, 'FAIL') }
  }
}

const RUNTIMES_7: RubricItem<RuntimesRubricContext> = {
  code: 'RUNTIMES-7',
  title: 'Every runtime declared',
  description:
    'The repository declares every recognised runtime, or records a narrower list as the evidenced exception all-runtimes = false.',
  sources: ['standard-configuration.md#431-declaring-harnesses-and-skills'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Add the missing runtimes with their folders, ignores and environment tables, or record the evidenced exception as all-runtimes = false in [skills.ki-repo.checks] with a comment saying why.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.runtimes7, 'WARN') }
  }
}

const RUNTIMES_J1: RubricItem<RuntimesRubricContext> = {
  code: 'RUNTIMES-J1',
  title: 'Runtime orientation split',
  description:
    'Multi-runtime repositories use a shared AGENTS.md orientation with a thin Claude import unless a justified exception applies.',
  sources: [SOURCE],
  judgment: {
    scope: 'The shared AGENTS.md and runtime-specific orientation files for every declared runtime.',
    prompt:
      'Review whether orientation is shared cleanly across the declared runtimes without duplicated or Claude-only instructions.',
    outcomes: ['conforming', 'gap', 'exclusion'],
    guidance: 'Consolidate shared guidance, record a named gap, or record an explicit repository-level exception.'
  }
}

export const RUNTIMES: RubricFamily<RepoRubricContext, RuntimesRubricContext> = {
  code: 'RUNTIMES',
  title: 'Runtime support',
  description: 'Declared agent-runtime support and orientation.',
  standard: SOURCE,
  selectContext: (context) => context.runtimes,
  items: [RUNTIMES_1, RUNTIMES_2, RUNTIMES_3, RUNTIMES_4, RUNTIMES_5, RUNTIMES_6, RUNTIMES_7, RUNTIMES_J1]
}
