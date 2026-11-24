import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import { auditEvidence, type ChecksRubricContext, type RepoRubricContext } from '../contexts/repository.ts'

const CHECKS_1: RubricItem<ChecksRubricContext> = {
  code: 'CHECKS-1',
  title: 'Override keys',
  description: 'Every ki-repo checks override names a supported overridable concern.',
  sources: ['standard-configuration.md'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance: 'Remove the unsupported override or select a supported concern, then rerun the audit.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.evidence, 'WARN') }
  }
}

const CHECKS_2: RubricItem<ChecksRubricContext> = {
  code: 'CHECKS-2',
  title: 'Own table keys',
  description:
    'Every key in the `[skills.ki-repo]` table is one the configuration standard documents; an unknown key, a typo or a stale option, warns rather than reading as absent or being ignored.',
  sources: [
    'standard-configuration.md#45-validate-your-own-table',
    'standard-configuration.md#47-overridable-vs-fixed'
  ],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Correct the misspelt key or remove the undocumented one; a need no documented key meets goes to the standard as a REFRESH candidate. Then rerun the audit.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.keys, 'WARN') }
  }
}

export const CHECKS: RubricFamily<RepoRubricContext, ChecksRubricContext> = {
  code: 'CHECKS',
  title: 'Check overrides and own table keys',
  description: 'Per-repository override schema and the closed key set of the owned table.',
  standard: 'standard-configuration.md',
  selectContext: (context) => context.checks,
  items: [CHECKS_1, CHECKS_2]
}
