import type { AuditOutcome, RubricFamily, RubricItem } from '../../shared/rubric.ts'
import type { BackpackLayoutContext, BackpackRubricContext } from '../contexts/backpack.ts'

const STANDARD = ['standard-compatible-backpack.md'] as const

const rootUnavailable = (context: BackpackLayoutContext): readonly AuditOutcome[] | null => {
  if (context.repositoryState === 'absent')
    return [{ status: 'VIOLATION', message: 'The backpack root does not exist.', subject: context.repository }]
  if (context.repositoryState === 'unsafe')
    return [
      { status: 'VIOLATION', message: 'The backpack root is not a physical directory.', subject: context.repository }
    ]
  return null
}

const LAY_1: RubricItem<BackpackLayoutContext> = {
  code: 'LAY-1',
  title: 'Four-part directory layout',
  description: 'skills/, subagents/, evals/, and hooks/ all exist as physical directories at the source-backpack root.',
  sources: ['standard-compatible-backpack.md#43-source-backpack-layout'],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance: 'Create or repair the missing physical source-backpack shelf, then rerun the audit.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) =>
        rootUnavailable(context) ??
        context.parts.map(({ name, state }) => ({
          status: state === 'directory' ? ('PASS' as const) : ('VIOLATION' as const),
          message:
            state === 'directory'
              ? 'Required source-backpack directory is present.'
              : 'Required source-backpack path is absent or not a physical directory.',
          subject: `${name}/`
        }))
    }
  }
}

const LAY_2: RubricItem<BackpackLayoutContext> = {
  code: 'LAY-2',
  title: 'Shelf descriptions',
  description: 'Each four-part source directory contains a physical README.md declaring its purpose and status.',
  sources: ['standard-compatible-backpack.md#43-source-backpack-layout'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance: 'Add the missing physical shelf README with its purpose and status, then rerun the audit.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) =>
        rootUnavailable(context) ??
        context.parts.map(({ name, state, readmeState }) => ({
          status:
            state !== 'directory'
              ? ('NOT_APPLICABLE' as const)
              : readmeState === 'file'
                ? ('PASS' as const)
                : ('VIOLATION' as const),
          message:
            state !== 'directory'
              ? 'The source-backpack shelf is absent or unsafe.'
              : readmeState === 'file'
                ? 'Required shelf description is present.'
                : 'The shelf README is absent or not a physical regular file.',
          subject: `${name}/README.md`
        }))
    }
  }
}

const rootFileItem = (
  code: string,
  title: string,
  description: string,
  path: keyof BackpackLayoutContext['rootFiles'],
  level: 'FAIL' | 'WARN',
  source: string
): RubricItem<BackpackLayoutContext> => ({
  code,
  title,
  description,
  sources: [source],
  mechanical: {
    level,
    remediation: {
      class: 'diagnostic',
      guidance: 'Create or repair the required physical root file with owner-approved content, then rerun the audit.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) => {
        const unavailable = rootUnavailable(context)
        if (unavailable) return unavailable
        return [
          context.rootFiles[path] === 'file'
            ? { status: 'PASS', message: 'Required physical root file is present.', subject: path }
            : { status: 'VIOLATION', message: 'Required root file is absent or unsafe.', subject: path }
        ]
      }
    }
  }
})

const LAY_3 = rootFileItem(
  'LAY-3',
  'Root Claude orientation',
  'CLAUDE.md exists as a physical file at the source-backpack root.',
  'CLAUDE.md',
  'FAIL',
  'standard-compatible-backpack.md#45-root-orientation'
)

const LAY_4 = rootFileItem(
  'LAY-4',
  'Root roadmap',
  'ROADMAP.md exists as a physical file at the source-backpack root.',
  'ROADMAP.md',
  'WARN',
  'standard-compatible-backpack.md#46-root-roadmap'
)

const LAY_5 = rootFileItem(
  'LAY-5',
  'Root Knowledge Islands configuration',
  '.ki.toml exists as a physical file at the source-backpack root.',
  '.ki.toml',
  'FAIL',
  'standard-compatible-backpack.md#47-backpack-declaration'
)

export const LAY: RubricFamily<BackpackRubricContext, BackpackLayoutContext> = {
  code: 'LAY',
  title: 'Source-backpack layout and files',
  description: 'The four-part source container and its required physical root files.',
  standard: STANDARD[0],
  selectContext: (context) => context.layout,
  items: [LAY_1, LAY_2, LAY_3, LAY_4, LAY_5]
}
