---
ki-document-type: rubric@2026-11-17T00:55:00Z
---

<!-- GENERATED FILE: produced by `ki dev skill rubric`. Do not hand-edit; edit scripts/rubric/items/, then rerun `ki dev skill rubric <skill> --write`. -->

# Generated rubric — delegation packets and background runs

> **Generated publication.** The TypeScript rubric items under `scripts/rubric/items/` are canonical. Edit those definitions, then rerun `ki dev skill rubric ki-delegation --write`.

Line-by-line criteria for auditing ki-delegation. Classifications are derived from item aspects: **[M]** mechanical, **[J]** judgment, **[M + J]** hybrid, and **[M-heuristic + J]** hybrid with heuristic mechanical evidence. Sources are cited as declared by each canonical item.

## Contents

- [PACKET — delegation packets](#packet--delegation-packets)
- [RUN — background runs](#run--background-runs)

## PACKET — delegation packets

→ [standard](standard-delegation-packets.md)

Opted-in durable delegation-packet structure and governance quality.

- **PACKET-1 [M + J] — durable packet structure and governance quality** — An opted-in durable delegation packet in either roadmap adapter has the exact brief structure; its worker scope, authority, isolation, escalation, return contract, and verification gates are fit for the high-risk handoff. (standard-delegation-packets.md)
  - _Remediation:_ guarded — Supply the missing packet evidence or revise the worker brief only through the planner with the relevant delegation authority.
  - _Evidence scope:_ Every opted-in durable delegation packet, its activation rationale, worker briefs, and referenced approved governing work record.
  - _Review prompt:_ Does the work need a durable packet rather than ordinary runtime delegation, and are the worker inputs, scope, authority, isolation, locked decisions, escalation boundaries, return contract, and verification gates appropriate for that high-risk handoff?
  - _Outcomes:_ conforming; revise packet; escalate to planner
  - _Conforming guidance:_ Use a packet only when its durable authority and audit evidence add value beyond the runtime brief. Record a packet revision only after the responsible authority chooses the worker scope, isolation, locked decisions, escalation boundary, return evidence, and verification gate; leave worker selection, model choice, scheduling, and integration to the active process and runtime.

## RUN — background runs

→ [standard](standard-background-runs.md)

Shipped authority footers and the quality of background-run prompts and reports.

- **RUN-1 [M] — authority footers grant exactly their tier and grants lift only their own ban** — Each shipped authority footer exists, carries the shared prohibitions, the confidential rule and the external-posting rule among them, with its ban on a brief granting a post and its precedence over the body of the brief, includes every grant of its tier and below, and grants nothing above it; each shipped grant section exists, is approved, lifts exactly its own ban, keeps its limits and carries no tier grant, the machine grant keeping its ban on installing new software and its judgement check before a dotfile edit, which direct approval of the described diff by Kris satisfies. (standard-background-runs.md)
  - _Remediation:_ diagnostic — Restore the footer or grant wording in the canonical harness skill so each tier and each grant permits exactly what the standard lists.
- **RUN-2 [J] — run prompts are cold-agent ready and authority-bounded** — A background-run prompt cites the owner decision that authorises it in the owner's words and date, has numbered steps, a verification step, a landing step and a report path, forbids background subagents and ending while waiting, and ends with the lowest sufficient authority footer. (standard-background-runs.md)
  - _Evidence scope:_ Background-run prompts, decisions logs and run reports the delegating owner selects for review.
  - _Review prompt:_ Does each prompt cite a real owner decision by its words and date, name every remote call it relies on, use the lowest sufficient authority tier, and give a detached agent with no hidden context enough to finish, verify and report? Was the complete current concrete brief written and checked for unresolved templates before the agent started?
  - _Outcomes:_ conforming; revise prompt; escalate to owner
  - _Conforming guidance:_ Revise a prompt only within the authority its cited decision grants, the push tier resting on the remit Kris gave on the change documents the task cites, for high-confidence or reversible work (WORK-MODES); escalate to the owner when the work needs the prune or release tier, cannot be undone by more work, or needs a decision that does not exist yet.
- **RUN-3 [J] — run records are tracked and consolidated** — A run's brief and agent reports live in its run packet, `$TMPDIR/ki-agents/<run>/`, outside every repository, the brief until its report is received; each owner decision is logged in the change document it belongs to, in the package of the work that launched the run, before the work it authorises launches, and the package is committed at each send; in-force decisions are consolidated into a Decision Record, skill or the package rather than living only in the agent host's runtime or a run packet; the session homes each report's outcomes in the change documents they reach or in a record, and its queries in their change documents' Open sections, before removing the packet by literal path, while Git history holds the rest; and a prompt or record describes a decision by the owner's words and date, never by its number. (standard-background-runs.md)
  - _Evidence scope:_ Work folders, decisions logs and run prompts the owner selects for review.
  - _Review prompt:_ Is every decision logged in its change document before its work launched, does anything durable exist only in the agent host runtime or a run packet, does the package hold only its closed list after each mark, with the outcomes and queries of each removed packet homed first, and does any prompt or record cite a decision by number alone?
  - _Outcomes:_ conforming; consolidate decisions; log decisions; home outcomes and tidy the package; escalate to owner
  - _Conforming guidance:_ Consolidate in-force decisions into their durable owner, record missing decisions before further launches, and replace a bare decision number with the owner's words and the date, and home each report's outcomes and queries before removing its run packet by literal path, keeping a packet whose outcome has no clear home; escalate when the durable owner is unclear.
- **RUN-4 [J] — reports take the owner-report shape** — Every agent report and coordinator Summary is an owner report, omitting routine push state and other sessions' stacked commits and reporting a failed push that prevented publication of the run's own unit with its unit and reason, opening with the `ki-coordination` report heading, one `#` heading of the work's title with its theme and Project linked, a run report adding `› <run name>` and the form `Run report`, then the bold glyph form line and one rule, with the sections `## Done`, `## In Progress` and `## Queries` in that order, each query under a stable Needs tag, never a number, with **Context**, **Query** and **Options**, the options lettered a), b) and so on with no bullet and a) always marked `(recommended, confidence <level> - <reason>)`, closing its queries with the `ki-coordination` reply block, grouped by priority under numbered headings with each line carrying the recommended option's confidence, and the report with the glyph banner of the work's state, and no output style, proxy shaping block or communication level shortens it; a report written before 18 October 2026 keeps its earlier heading, footer frame and reply block. (../../../work/ki-coordination/references/standard-reporting.md#42-owner-report)
  - _Evidence scope:_ Background-agent reports and coordinator Summaries the owner selects for review.
  - _Review prompt:_ Does each report open with the `ki-coordination` report heading and its glyph form line, carry the three owner-report sections in order with routine open matters kept out of the queries, let the owner answer each query cold by a tag that kept its meaning until resolved from its Context, Query and lettered Options with a) marked recommended with its confidence, close its queries with the reply block grouped by priority with each line's confidence and the report with the glyph banner, or keep its earlier shape if written before 18 October 2026, and was any section, query or banner shortened by a style or level, do owner reports, run reports and banners omit routine push state and other sessions' stacked commits, and does a failed push preventing publication of the run's own unit name that unit and reason, with a hold report keeping nothing about pushes beyond a failure?
  - _Outcomes:_ conforming; reshape the report; retag queries; escalate to owner
  - _Conforming guidance:_ Restore the report heading and its glyph form line, the three owner-report sections and the glyph banner in full, give the reply block its numbered priority groups and each line its confidence, and give each query a stable mnemonic tag, a Context, a one-sentence Query, lettered Options with a) marked recommended and no bullets, and links.
- **RUN-5 [J] — a run's working-area files carry the mark** — Every file a run, coordinating work or an interactive session writes into a `+/` working area carries the working-area mark, `work`, then `run` and `agent` or `session`, then `written_at`, in front matter for Markdown and in a `mark.toml` sidecar at the root of a folder of non-Markdown output, and no mark goes into a committed receipt or report. (standard-background-runs.md#442-working-area-marks)
  - _Evidence scope:_ The `+/` working areas a run or session wrote into, selected by the owner or the run's report.
  - _Review prompt:_ Does each working file or folder a run or session wrote carry a mark naming its work, its run and agent or its session, and when it was written, in the form the standard names, and has a mark leaked into anything committed?
  - _Outcomes:_ conforming; add the mark; remove a committed mark; escalate to owner
  - _Conforming guidance:_ Add the missing mark from the run's brief or the session that wrote the file, take a mark out of any committed receipt or report, and ask the owner before moving or deleting an unmarked file whose writer is unknown.
