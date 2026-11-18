import type { RubricFamily } from '../../shared/rubric.ts'
import type { DelegationRubricContext } from '../types.ts'

export const RUN: RubricFamily<DelegationRubricContext, DelegationRubricContext['footers']> = {
  code: 'RUN',
  title: 'background runs',
  description: 'Shipped authority footers and the quality of background-run prompts and reports.',
  standard: 'standard-background-runs.md',
  selectContext: (context) => context.footers,
  items: [
    {
      code: 'RUN-1',
      title: 'authority footers grant exactly their tier and grants lift only their own ban',
      description:
        'Each shipped authority footer exists, carries the shared prohibitions, the confidential rule and the external-posting rule among them, with its ban on a brief granting a post and its precedence over the body of the brief, includes every grant of its tier and below, and grants nothing above it; each shipped grant section exists, is approved, lifts exactly its own ban, keeps its limits and carries no tier grant, the machine grant keeping its ban on installing new software and its judgement check before a dotfile edit, which direct approval of the described diff by Kris satisfies.',
      sources: ['standard-background-runs.md'],
      mechanical: {
        level: 'FAIL',
        remediation: {
          class: 'diagnostic',
          guidance:
            'Restore the footer or grant wording in the canonical backpack skill so each tier and each grant permits exactly what the standard lists.'
        },
        audit: { phase: 'INSPECT', run: ({ outcomes }) => outcomes }
      }
    },
    {
      code: 'RUN-2',
      title: 'run prompts are cold-agent ready and authority-bounded',
      description:
        "A background-run prompt cites the owner decision that authorises it in the owner's words and date, has numbered steps, a verification step, a landing step and a report path, forbids background subagents and ending while waiting, and ends with the lowest sufficient authority footer.",
      sources: ['standard-background-runs.md'],
      judgment: {
        scope: 'Background-run prompts, decisions logs and run reports the delegating owner selects for review.',
        prompt:
          'Does each prompt cite a real owner decision by its words and date, name every remote call it relies on, use the lowest sufficient authority tier, and give a detached agent with no hidden context enough to finish, verify and report? Was the complete current concrete brief written and checked for unresolved templates before the agent started?',
        outcomes: ['conforming', 'revise prompt', 'escalate to owner'],
        guidance:
          'Revise a prompt only within the authority its cited decision grants, the push tier resting on the remit Kris gave on the change documents the task cites, for high-confidence or reversible work (WORK-MODES); escalate to the owner when the work needs the prune or release tier, cannot be undone by more work, or needs a decision that does not exist yet.'
      }
    },
    {
      code: 'RUN-3',
      title: 'run records are tracked and consolidated',
      description:
        "A run's brief and agent reports live in its run packet, `$TMPDIR/ki-agents/<run>/`, outside every repository, the brief until its report is received; each owner decision is logged in the change document it belongs to, in the package of the work that launched the run, before the work it authorises launches, and the package is committed at each send; in-force decisions are consolidated into a Decision Record, skill or the package rather than living only in the agent host's runtime or a run packet; the session homes each report's outcomes in the change documents they reach or in a record, and its queries in their change documents' Open sections, before removing the packet by literal path, while Git history holds the rest; and a prompt or record describes a decision by the owner's words and date, never by its number.",
      sources: ['standard-background-runs.md'],
      judgment: {
        scope: 'Work folders, decisions logs and run prompts the owner selects for review.',
        prompt:
          'Is every decision logged in its change document before its work launched, does anything durable exist only in the agent host runtime or a run packet, does the package hold only its closed list after each mark, with the outcomes and queries of each removed packet homed first, and does any prompt or record cite a decision by number alone?',
        outcomes: [
          'conforming',
          'consolidate decisions',
          'log decisions',
          'home outcomes and tidy the package',
          'escalate to owner'
        ],
        guidance:
          "Consolidate in-force decisions into their durable owner, record missing decisions before further launches, and replace a bare decision number with the owner's words and the date, and home each report's outcomes and queries before removing its run packet by literal path, keeping a packet whose outcome has no clear home; escalate when the durable owner is unclear."
      }
    },
    {
      code: 'RUN-4',
      title: 'reports take the owner-report shape',
      description:
        "Every agent report and coordinator Summary is an owner report, omitting routine push state and other sessions' stacked commits and reporting a failed push that prevented publication of the run's own unit with its unit and reason, opening with the `ki-coordination` report heading, one `#` heading of the work's title with its theme and Project linked, a run report adding `› <run name>` and the form `Run report`, then the bold glyph form line and one rule, with the sections `## Done`, `## In Progress` and `## Queries` in that order, each query under a stable Needs tag, never a number, with **Context**, **Query** and **Options**, the options lettered a), b) and so on with no bullet and a) always marked `(recommended, confidence <level> - <reason>)`, closing its queries with the `ki-coordination` reply block, grouped by priority under numbered headings with each line carrying the recommended option's confidence, and the report with the glyph banner of the work's state, and no output style, proxy shaping block or communication level shortens it; a report written before 18 October 2026 keeps its earlier heading, footer frame and reply block.",
      sources: ['../../../work/ki-coordination/references/standard-reporting.md#42-owner-report'],
      judgment: {
        scope: 'Background-agent reports and coordinator Summaries the owner selects for review.',
        prompt:
          "Does each report open with the `ki-coordination` report heading and its glyph form line, carry the three owner-report sections in order with routine open matters kept out of the queries, let the owner answer each query cold by a tag that kept its meaning until resolved from its Context, Query and lettered Options with a) marked recommended with its confidence, close its queries with the reply block grouped by priority with each line's confidence and the report with the glyph banner, or keep its earlier shape if written before 18 October 2026, and was any section, query or banner shortened by a style or level, do owner reports, run reports and banners omit routine push state and other sessions' stacked commits, and does a failed push preventing publication of the run's own unit name that unit and reason, with a hold report keeping nothing about pushes beyond a failure?",
        outcomes: ['conforming', 'reshape the report', 'retag queries', 'escalate to owner'],
        guidance:
          'Restore the report heading and its glyph form line, the three owner-report sections and the glyph banner in full, give the reply block its numbered priority groups and each line its confidence, and give each query a stable mnemonic tag, a Context, a one-sentence Query, lettered Options with a) marked recommended and no bullets, and links.'
      }
    },
    {
      code: 'RUN-5',
      title: "a run's working-area files carry the mark",
      description:
        'Every file a run, coordinating work or an interactive session writes into a `+/` working area carries the working-area mark, `work`, then `run` and `agent` or `session`, then `written_at`, in front matter for Markdown and in a `mark.toml` sidecar at the root of a folder of non-Markdown output, and no mark goes into a committed receipt or report.',
      sources: ['standard-background-runs.md#442-working-area-marks'],
      judgment: {
        scope: "The `+/` working areas a run or session wrote into, selected by the owner or the run's report.",
        prompt:
          'Does each working file or folder a run or session wrote carry a mark naming its work, its run and agent or its session, and when it was written, in the form the standard names, and has a mark leaked into anything committed?',
        outcomes: ['conforming', 'add the mark', 'remove a committed mark', 'escalate to owner'],
        guidance:
          "Add the missing mark from the run's brief or the session that wrote the file, take a mark out of any committed receipt or report, and ask the owner before moving or deleting an unmarked file whose writer is unknown."
      }
    }
  ]
}
