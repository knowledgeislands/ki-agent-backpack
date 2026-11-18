import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import type { BackpackConfigContext, BackpackRubricContext } from '../contexts/backpack.ts'

const STANDARD = ['standard-compatible-backpack.md#47-backpack-declaration'] as const

const CONFIG_1: RubricItem<BackpackConfigContext> = {
  code: 'CONFIG-1',
  title: 'Backpack declaration',
  description: 'A physical .ki.toml contains the keyless ki-repo-backpack root table.',
  sources: STANDARD,
  mechanical: {
    level: 'FAIL',
    remediation: { class: 'automatic' },
    audit: {
      phase: 'INSPECT',
      run: ({ state, hasBackpackTable }) => {
        if (state === 'missing')
          return [
            {
              status: 'NOT_APPLICABLE',
              message: 'KI configuration is absent; LAY-5 owns its presence.',
              subject: '.ki.toml'
            }
          ]
        if (state === 'unsafe')
          return [
            {
              status: 'VIOLATION',
              message: 'KI configuration is not a safely readable physical regular file.',
              subject: '.ki.toml'
            }
          ]
        return [
          hasBackpackTable
            ? {
                status: 'PASS',
                message: 'The [skills.ki-repo-backpack] declaration is present.',
                subject: '.ki.toml'
              }
            : {
                status: 'VIOLATION',
                message: 'The [skills.ki-repo-backpack] declaration is missing.',
                subject: '.ki.toml'
              }
        ]
      }
    },
    conform: {
      phase: 'PRIMARY',
      run: ({ requestBackpackMarker }) => {
        requestBackpackMarker?.()
      }
    }
  }
}

const CONFIG_2: RubricItem<BackpackConfigContext> = {
  code: 'CONFIG-2',
  title: 'Repository governance declaration',
  description: 'A physical .ki.toml contains the ki-repo root table.',
  sources: STANDARD,
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance: 'Declare the ki-repo governance root in the physical configuration, then rerun the audit.'
    },
    audit: {
      phase: 'INSPECT',
      run: ({ state, hasRepositoryTable }) => {
        if (state !== 'physical')
          return [{ status: 'NOT_APPLICABLE', message: 'KI configuration is absent or unsafe.', subject: '.ki.toml' }]
        return [
          hasRepositoryTable
            ? {
                status: 'PASS',
                message: 'The [skills.ki-repo] declaration is present.',
                subject: '.ki.toml'
              }
            : {
                status: 'VIOLATION',
                message: 'The [skills.ki-repo] declaration is missing.',
                subject: '.ki.toml'
              }
        ]
      }
    }
  }
}

const CONFIG_3: RubricItem<BackpackConfigContext> = {
  code: 'CONFIG-3',
  title: 'Skill governance declaration',
  description: 'A source backpack with populated skills declares ki-skills.',
  sources: STANDARD,
  judgment: {
    scope: 'The physical .ki.toml and the source backpack skills shelf.',
    prompt: 'When skills/ is populated, does .ki.toml declare the ki-skills governance root?',
    outcomes: ['conforming', 'configuration revision', 'not applicable'],
    guidance:
      'Add or correct the declaration only through the repository owner’s configuration decision; do not infer activation scope from shelf contents alone.'
  }
}

const CONFIG_4: RubricItem<BackpackConfigContext> = {
  code: 'CONFIG-4',
  title: 'Capability prefix declaration',
  description: 'The ki-repo-backpack table declares one valid capability prefix.',
  sources: STANDARD,
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance: 'Declare the owner-approved prefix in [skills.ki-repo-backpack], then rerun the audit.'
    },
    audit: {
      phase: 'INSPECT',
      run: ({ state, hasBackpackTable, prefix }) => {
        if (state !== 'physical' || !hasBackpackTable)
          return [
            {
              status: 'NOT_APPLICABLE',
              message: 'The backpack declaration is absent or unsafe.',
              subject: '.ki.toml'
            }
          ]
        return [
          prefix !== null && /^[a-z][a-z0-9]*$/.test(prefix)
            ? {
                status: 'PASS',
                message: `The backpack declares capability prefix '${prefix}'.`,
                subject: '.ki.toml'
              }
            : {
                status: 'VIOLATION',
                message: 'The [skills.ki-repo-backpack] prefix must be a lowercase alphanumeric name.',
                subject: '.ki.toml'
              }
        ]
      }
    }
  }
}

export const CONFIG: RubricFamily<BackpackRubricContext, BackpackConfigContext> = {
  code: 'CONFIG',
  title: 'Backpack declaration',
  description: 'Knowledge Islands source-backpack governance declarations.',
  standard: 'standard-compatible-backpack.md',
  selectContext: (context) => context.config,
  items: [CONFIG_1, CONFIG_2, CONFIG_3, CONFIG_4]
}
