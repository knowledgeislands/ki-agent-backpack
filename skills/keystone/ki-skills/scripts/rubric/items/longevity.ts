import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import { judgment } from '../../shared/rubric.ts'
import { type KiSkillsRubricContext, type LongevityRubricContext, selectKiSkillsContext } from '../contexts/contexts.ts'

const REFRESH_GRACE_DAYS = 14
/** LONG-3 warns for the first two months a source list is overdue and fails after (LONG3-LEVEL). */
const OVERDUE_WARN_DAYS = 60

const LONG_1: RubricItem<unknown> = {
  code: 'LONG-1',
  title: 'volatile facts have a refresh path',
  description:
    '_Volatile facts & a refresh path._ A skill hard-coding facts that drift (model IDs, versions, tool names, dated spec numbers, URLs) must either resolve them at runtime **or** carry a tracked source list with `last reviewed` dates **and** a REFRESH mode that re-anchors them and names what to re-fetch.',
  sources: ['BP', 'COMMUNITY'],
  judgment: judgment('Do volatile facts resolve at runtime or have a tracked source list and refresh path?')
}

const LONG_2: RubricItem<unknown> = {
  code: 'LONG-2',
  title: 'the refresh path has a cadence',
  description:
    "_A cadence, not just a capability._ A skill that ships a refresh path also **declares a cadence** in its `sources.md` `ki-refresh` marker (`<class> · <cadence>`); a refresh capability with no declared cadence is a half-measure. REFRESH runs on demand, or wherever the host chooses to schedule it; no scheduled job is assumed. The cadence has runtime teeth in both directions: overdue → LONG-3 WARN, then FAIL; too-soon → the REFRESH mode's confirm-before-force gate (enforcement framework §5).",
  sources: ['COMMUNITY'],
  judgment: judgment('Does the refresh path have an appropriate declared cadence?')
}

const LONG_3: RubricItem<LongevityRubricContext> = {
  code: 'LONG-3',
  title: 'the declared refresh cadence is being met',
  description:
    "_The cadence is actually being met._ Where a skill carries `references/sources.md`, its stalest `Last reviewed` date (the oldest row in that table column, so a fresh row cannot mask a stale one and dates quoted in prose don't count) is within the skill's **declared per-skill cadence** plus 14 days' grace, when the source list falls due. An overdue source list WARNs for its first two months overdue, so AUDIT surfaces it, and FAILs once it is more than two months overdue. A `canonical · on-change` skill carries no clock and is exempt — it refreshes when the model changes, not on a calendar.",
  sources: ['COMMUNITY'],
  mechanical: {
    level: 'WARN',
    overrideLevels: ['FAIL'],
    remediation: {
      class: 'diagnostic',
      guidance:
        'Run the skill’s authored REFRESH procedure against its declared sources, reconcile any changes, and record the actual review date.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) => {
        if (!context.sourcesPresent || context.cadence === null || context.windowDays === null)
          return [{ status: 'NOT_APPLICABLE', message: 'no declared refresh cadence to assess' }]
        if (context.ageDays === null)
          return [
            {
              status: 'VIOLATION',
              message: `references/sources.md declares a ${context.cadence} cadence but has no \`Last reviewed\` date — run Mode REFRESH`
            }
          ]
        const overdueDays = context.ageDays - (context.windowDays + REFRESH_GRACE_DAYS)
        if (overdueDays <= 0) return [{ status: 'PASS', message: 'the declared refresh cadence is being met' }]
        const failing = overdueDays > OVERDUE_WARN_DAYS
        return [
          {
            status: 'VIOLATION',
            ...(failing ? { level: 'FAIL' as const } : {}),
            message: `references/sources.md has a source last reviewed ${context.lastReviewed} (${context.ageDays} days ago), ${overdueDays} days past its ${context.cadence} REFRESH cadence + ${REFRESH_GRACE_DAYS}d grace${failing ? `, more than ${OVERDUE_WARN_DAYS} days overdue` : ''} — run Mode REFRESH`
          }
        ]
      }
    }
  }
}

const LONG_4: RubricItem<LongevityRubricContext> = {
  code: 'LONG-4',
  title: 'the refresh marker is present and coherent',
  description:
    '_The refresh marker is present and coherent._ Each `sources.md` carries a parseable `ki-refresh: <class> · <cadence>` in its front matter, under the `ki-authoring` sources format, read as `refresh` while files are swept, or the older `**Refresh:** <class> · <cadence>` line (§4 of the enforcement framework) — a missing or malformed marker WARNs (**4a**). An `external-spec` skill must declare a clock cadence, not `on-change` (**4b**, soft WARN). Class is **not** mechanically tied to `## Last review`-block presence — a `canonical` skill may keep a block as a hand-curated practice note (`ki-repo-kb-streams` does), so block-presence stays a `[J]` read, not a checker rule.',
  sources: ['COMMUNITY'],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Choose the source class and cadence that match the skill’s volatility, then author a parseable **Refresh:** marker; external specifications require a clock cadence.'
    },
    audit: {
      phase: 'INSPECT',
      run: (context) => {
        if (!context.sourcesPresent) return [{ status: 'NOT_APPLICABLE', message: 'no sources.md' }]
        if (context.refreshClass === null || context.cadence === null)
          return [
            {
              status: 'VIOLATION',
              message:
                'references/sources.md has no parseable `ki-refresh: <class> · <cadence>` front matter or `**Refresh:**` marker (LONG-4a)'
            }
          ]
        return [
          context.refreshClass === 'external-spec' && context.cadence === 'on-change'
            ? {
                status: 'VIOLATION',
                message:
                  '`**Refresh:**` marks this external-spec but cadence is `on-change` — an external-spec tracker needs a clock cadence (LONG-4b)'
              }
            : { status: 'PASS', message: 'the refresh marker is present and coherent' }
        ]
      }
    }
  }
}

export const LONGEVITY: RubricFamily<KiSkillsRubricContext, LongevityRubricContext> = {
  code: 'LONG',
  title: 'Longevity',
  description: 'Refresh paths and cadence for knowledge that changes over time.',
  standard: 'standard-agent-skills.md#446-longevity',
  selectContext: (context: KiSkillsRubricContext) => selectKiSkillsContext(context, 'longevity'),
  items: [LONG_1, LONG_2, LONG_3, LONG_4]
}
