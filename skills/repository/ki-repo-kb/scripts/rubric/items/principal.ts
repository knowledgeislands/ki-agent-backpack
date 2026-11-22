import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import type { KbRubricContext } from '../contexts/kb.ts'
import type { PrincipalContext } from '../contexts/principal.ts'

const SOURCE = 'standard-principal.md'
// The principal standard applies when the base is its territory's Capital (KB-FOLD b, 22 November 2026).
const NOT_CAPITAL = "The base is not its territory's Capital; the principal standard does not apply."

const PRINCIPAL_1: RubricItem<PrincipalContext> = {
  code: 'PRINCIPAL-1',
  title: 'principal governance surface exists',
  description: 'A principal base carries the required governance, memory, and Enactment Process entry points.',
  sources: [SOURCE],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance: 'Create or restore the missing principal governance entry point through the principal owner.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) =>
        !context.capital
          ? [{ status: 'NOT_APPLICABLE', message: NOT_CAPITAL }]
          : context.missing.length || context.empty.length
            ? context.missing
                .map((subject) => ({
                  status: 'VIOLATION' as const,
                  message: 'Missing or unsafe principal entry point.',
                  subject
                }))
                .concat(
                  context.empty.map((subject) => ({
                    status: 'VIOLATION' as const,
                    message: 'Principal entry point is empty and cannot provide structural orientation.',
                    subject
                  }))
                )
            : [{ status: 'PASS', message: 'The principal governance surface is present.' }]
    }
  }
}
const PRINCIPAL_3: RubricItem<PrincipalContext> = {
  code: 'PRINCIPAL-3',
  title: 'territorial declarations agree',
  description:
    'Charter and Known Lands agree on the territory, its one Capital, canonical repository identities, and governed membership; registry location, repository selection, company binding, or a passing audit does not appoint a principal or grant exchange rights.',
  sources: [`${SOURCE}#43-territorial-declaration`],
  judgment: {
    scope: 'The Charter, internal Known Lands inventory, and their cited authority declarations.',
    prompt:
      'Do the declarations identify one Capital and agree on jurisdiction and membership, with discrepancies retained for the territorial owner rather than resolved from runtime or working-set evidence?',
    outcomes: ['conforming', 'declaration reconciliation required', 'owner decision required'],
    guidance:
      'Reconcile the authored declarations through the territorial owner; record unresolved differences without inferring authority from registry, repository selection, or company state.'
  }
}
const PRINCIPAL_4: RubricItem<PrincipalContext> = {
  code: 'PRINCIPAL-4',
  title: 'internal inventory and external signposting are distinct',
  description:
    'Known Lands separates governed internal membership from external signposting, uses canonical repository identities and authority references, and leaves local locations in the registry; receiver-owned public adoption needs no reciprocal public consumer list.',
  sources: [`${SOURCE}#44-known-lands-relationships`],
  judgment: {
    scope: 'Known Lands entries and any declarations of external knowledge consumption or adoption.',
    prompt:
      'Are internal members and external destinations distinguishable, with external authority respected, local unavailability separate from membership, and adoption controlled by the receiver without publishing private consumer identities?',
    outcomes: ['conforming', 'relationship clarification required', 'owner decision required'],
    guidance:
      'Clarify relationship sections or labels and authority references; keep local locations in the registry and adoption decisions with the receiver.'
  }
}
const PRINCIPAL_5: RubricItem<PrincipalContext> = {
  code: 'PRINCIPAL-5',
  title: 'acquired-packet scaffold is exact',
  description:
    "While the base is its territory's Capital, +/_ACQUIRED/README.md matches its owned template byte for byte. Missing or drifted regular scaffolds are restored without touching packets; unsafe ancestors or leaves fail without a write proposal.",
  sources: [`${SOURCE}#42-acquired-packet-scaffold`],
  mechanical: {
    level: 'FAIL',
    remediation: { class: 'automatic' },
    audit: {
      phase: 'INSPECT',
      run: ({ capital, acquired }) => [
        !capital
          ? { status: 'NOT_APPLICABLE', message: NOT_CAPITAL }
          : {
              status: acquired.state === 'canonical' ? 'PASS' : 'VIOLATION',
              message:
                acquired.state === 'canonical'
                  ? 'The acquired-packet scaffold matches its owned template.'
                  : acquired.state === 'unsafe'
                    ? 'The acquired scaffold has an unsafe path; resolve it through the principal owner before conforming.'
                    : 'Create or restore the acquired-packet scaffold from its owned template.',
              subject: '+/_ACQUIRED/README.md'
            }
      ]
    },
    conform: {
      phase: 'PRIMARY',
      run: ({ acquired }) => {
        acquired.synchronise?.()
      }
    }
  }
}
// PRINCIPAL-2, the duplicate Enactment anchor, retired for ENACT-1 under KB-FOLD b.
export const PRINCIPAL: RubricFamily<KbRubricContext, PrincipalContext> = {
  code: 'PRINCIPAL',
  title: 'principal governance',
  description: "A Capital's governance surfaces, acquired-packet scaffold, and authored territorial relationships.",
  standard: SOURCE,
  selectContext: (context) => context.principal,
  items: [PRINCIPAL_1, PRINCIPAL_3, PRINCIPAL_4, PRINCIPAL_5]
}
