---
name: ki-coordination
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: governance
ki-applicability: declaration-only
ki-guild: work
ki-depends-on: [ki-delegation, ki-work-package]
ki-shared-dependencies: [ki-skills:rubric]
ki-contributes: ['.ki.toml']
description: >
  Govern coordinating work under the Knowledge Islands work model: the responsive coordinator and its turn budget, the
  work levels and forms with their ids, openers and bootstrap, the seven states and the receive words, the mark and the one
  Summary with its status table and footer, the reply format, the closing glyph banner and thread line, On hold with its
  Stop, the work package, route receipt along the tree and the inbox watch, re-anchoring after compaction, decision
  classes and their life cycle, change documents, Finished, the working rules, and the three reply forms every session uses. Use while coordinating
  any explicitly opened work package to give a summary or banner or strike the mark, or to decide how any
  session replies; `ki-delegation` owns the background runs the coordinator launches.
argument-hint: 'audit <repo> | conform <repo> | drain | educate <repo> | help | hold | mark [only | status only] [no art] | receive | refresh | resume | send | status [no art] | summary [since <time>] [no art]'
---

# Knowledge Islands coordinating work

`ki-coordination` governs coordinating work, the work a worker holds for its supervisor while runs of its own carry the parts: it owns how a session coordinating a valid package of any level behaves with the owner, reports and keeps itself current, under the work model that [GDR-KI-PRINCIPAL-009](https://github.com/knowledgeislands/ki-principal/blob/main/Admin/Governance/Decisions/GDR-KI-PRINCIPAL-009-the-work-model.md) decides and the [Work Process](https://github.com/knowledgeislands/ki-principal/blob/main/Pillars/Philosophy/Model/Processes/Work%20Process/Work%20Process.md) note describes. Read [the coordinating-work standard](references/standard-coordination.md) before opening, bootstrapping or coordinating work. It opens with the work model, then the responsive coordinator in Kris's words and the three rules that follow from it: the coordinator never does substantive work itself, every unit of work goes to a detached background agent, and an owner message never pre-empts work in flight.

The standard is one core and its purpose files. [The core](references/standard-coordination.md) holds what every coordinating turn needs and lists each purpose file with what it holds: [reporting](references/standard-reporting.md), [reply format and banner](references/standard-report-forms.md), [queries](references/standard-queries.md), [holds](references/standard-holds.md), [unattended windows](references/standard-unattended.md), [listening and host sync](references/standard-listening.md), [territory work](references/standard-territory.md), [opening and naming](references/standard-opening.md), [bootstrap and re-anchoring](references/standard-bootstrap.md), [messages and surfaces](references/standard-messages.md), [decisions and change documents](references/standard-decisions.md), [mark, tidy and finishing](references/standard-mark.md) and [sync](references/standard-sync.md). [The migration file](references/migration-coordination.md) holds temporary adjustments, among them the old-to-new thread mapping and its tolerance window, and is deleted once empty.

The standard holds coordinator responsiveness with the counted turn budget and self-check and the heartbeat that runs only while work lies with a worker and wakes the session only when a run finishes, the inbox watch that listens only when the owner asks the session to, or for a Rig host sync thread by its role, and not while draining or on hold, and wakes only on news, the two session capabilities, listening, which also tends the session's own work package at its wakes, and host sync, a host sync pass repeating until the Mac and GitHub are clean and level, and the keep-awake an unattended window adds; the levels and forms and work naming, with two-part ids that carry no theme, titles that keep it as display text and the work name, the label with the id in brackets, used wherever a session names a piece of work; the states and moves; the coordinator reply format, whose triggers set each reply's structure and its layout, Full, Medium, Short or Minimal, with the heading, body and footer blocks and their coded parts, the rich-text report heading with its form line and the closing glyph banner with its counts and holder list, its meeting line, the closing thread line in every state, which every coordinator renders the same way; re-anchoring after compaction, the surfaces rule and red-x recovery; the one Summary, with its status table and footer; territory work, with its main State of play and any secondary States of play under it, Project work, opening work with its openers, bootstrap, the message queue between work with its important flag, route receipt and the inbox check at each wake; decisions and design with the four decision classes, the decisions life cycle at each mark, change documents in the package and Finishing Project work; and the working rules: the mark, parking tangents, linking records, committing and pruning the package, closing out Orca workers, putting work on hold with its Stop, picking work up from its work package, landing, then review, with the record of each batch, pushing beneath other sessions, keeping primary checkouts current, refreshing this guidance through `ki-method_read` and State of play's stewardship of continual improvement. It is the one source of the three [reply forms](references/standard-reporting.md#41-reply-forms), conversational reply, completed-work report and the coordinator forms, with what counts as a unit of work, and of the [owner report](references/standard-reporting.md#42-owner-report), its spoken [answers](references/standard-reporting.md#421-answers) and its Needs tags, which every completed-work report takes, and of the [generated surfaces](references/standard-coordination.md#47-generated-surfaces) that carry it: the coordinator hook's line, the ki-coordinator output style, the run-prompt Report paragraph, each authority footer's report rule and the review-independence line of the run-prompt skeleton and the `ki-work design` brief template, rendered by `ki dev skill generate ki-coordination`.

[The generated rubric](references/rubric.md) carries the mechanical and judgment criteria, and [the sources](references/sources.md) the decision register, which holds the owner decisions behind each rule, and the refresh review.

A repository that runs coordinating work declares `[skills.ki-coordination]` in `.ki.toml` and, under its dependencies, `ki-delegation` and `ki-work-package`. The declaration enables the backpack's `hooks/coordinator-reminder/coordinator-reminder.sh` conditional pointer, the `hooks/coordinator-footer/coordinator-footer.sh` footer check on every reply of a coordinating session, and the ki-coordinator output-style binding; it proves checkout capability, never session selection or role. Removing it disables those surfaces. Full session-sensitive hook detection remains deferred, and the coordinator performs its own method revision check.

It does not launch, brief, monitor or report for background agents, which `ki-delegation` owns; it does not define the work package or its files, which `ki-work-package` owns; and it does not summarise a single ordinary session, which `ki-work recap` owns and which keeps the ordinary session recap only. Meetings, where named participants gather at one node of the work tree in sittings with messages, check-ins and minutes, are `ki-meeting`'s; a coordinating session that joins one follows that skill there.

The [deferred host-move design notes](references/sources.md#4-last-review) retain unresolved queue, host-bound-run and historical handover questions without granting implementation authority.

The [assigned-package cascade](references/standard-territory.md#412-coordinating-assigned-packages) covers explicit stewardship and handover, one package per turn, one territory Summary with work-qualified queries, per-package marks and the tree beneath each node, read from `ki-parent`, as its register. STEWARD-FIELD remains a placeholder and creates no field. Where a package of the territory has no active session, its State of play [acts for it](references/standard-territory.md#411-territory-work) on its messages alone, receiving, ACKing, routing and answering them without taking its work forward or transferring stewardship. Work moves along the tree under `ki-work-package`'s [CASCADE-DOWN](../ki-work-package/references/standard-work-package.md#cascade-down): delegate down, own it if there is no one below, escalate up.

## Operating modes

Carries the universal **AUDIT · CONFORM · EDUCATE · REFRESH** modes and the operational **DRAIN · HOLD · MARK · RECEIVE · RESUME · SEND · STATUS · SUMMARY** modes a coordinator gives the owner.

Invoked as `help` / `-h` / `?`, it explains this boundary and stops.

### Mode AUDIT

Run `ki repo audit --skill ki-coordination --repo <repo>`.

The native rubric checks that a Capital, and only a Capital, holds its territory work; that each piece of Project work names a Project that resolves in the registry and that any theme resolves; that each work file's level agrees with its id, reading state from `state.md` where the work package has one; that the active Project work is within the cap; that every full record identifier in a report under `+/_WORK/` is a link to an existing file, with a pruned record linked as `<FULL-ID> (pruned)` to the GitHub link to the file at its last revision; that recommended options carry their confidence; that each package holds only its closed list, the five package files among it; and warns on more than eight open queries across a package's change documents, or in `queries.md` for the tolerance window. For the tolerance window it reads `+/_CHECKPOINTS/` and `+/_THREADS/` as before, warning on each. It then reviews coordinator responsiveness, the report forms, the mark and the refresh rule from the transcripts, reports and work files the owner selects.

### Mode CONFORM

Run `ki repo conform --skill ki-coordination --repo <repo> --dry-run` before applying it.

CONFORM republishes the generated rubric only. It never creates, renames or edits a work package, opens or finishes work, strikes the mark or writes a decision.

### Mode EDUCATE

Run `ki repo educate --skill ki-coordination --repo <repo>` to render the concern and rubric. Explain the responsive coordinator, the openers, the bootstrap and the report forms from [the standard](references/standard-coordination.md); do not create a declaration or a work file merely to demonstrate them.

### Mode DRAIN

While coordinating, `/ki-coordination drain` stops new launches while the work stays With worker, receives running work and reports `DRAINED` or `NOT DRAINED` in its Summary, under [Putting work on hold](references/standard-holds.md#41-putting-work-on-hold). It does not put the work on hold.

### Mode HELP

Explain the work levels and forms, the coordinator and its three rules, territory work and Project work with their openers and bootstrap, the seven states and the receive words, the coordinator reply format, the closing glyph banner and its thread line, re-anchoring after compaction, the decision classes and their life cycle and Finishing Project work, and the mark, the ki-coordinator output style and the reminder hook, and the off-ramps: the Work Process note for the model itself, background runs and the run report in `ki-delegation`, the work package in `ki-work-package`, single-session recaps in `ki-work recap`, the coordination model purpose in `ki-env-tokenomics` and the theme and Project registry in `ki-work`.

### Mode HOLD

While coordinating, `/ki-coordination hold` drains and puts the work On hold under [Putting work on hold](references/standard-holds.md#41-putting-work-on-hold), ending with its Stop.

### Mode MARK

While coordinating, `/ki-coordination mark` strikes [the mark](references/standard-mark.md#41-the-mark), which is only a timestamp, the default start of the next Summary: it writes `ki-mark: <UTC timestamp>` into `_index.md`'s state fields, works the decisions life cycle, prunes the package, keeps every open Needs-tagged query, commits the package and then gives, in the same reply, [the Summary](references/standard-report-forms.md#417-the-summary) since the previous mark. `/ki-coordination mark only` strikes it and gives the Position, the banner after a line or two, and `/ki-coordination mark, status only` strikes it and gives the Status, the Summary without its history. Only the owner's instruction, or a hold, moves the mark, and a hold's mark is followed by its Stop instead. `no art` leaves the art out of the Summary's footer.

### Mode RECEIVE

While coordinating, `/ki-coordination receive` records the owner's receive under [States and moves](references/standard-coordination.md#45-states-and-moves), as `with me` does.

### Mode REFRESH

**Precondition:** REFRESH writes only this canonical skill under `ki-agent-backpack`.

When invoked from an installed copy, stop and redirect to the backpack's source checkout.

Read [the sources](references/sources.md), compare coordinating practice against the standard, the Work Process note and the rubric, then update the source review in the same commit as any normative change. A change here also regenerates the hook line in `hooks/coordinator-reminder/coordinator-reminder.sh` and the ki-coordinator output style where the three rules, the owner-report shape or the banner changed; `scripts/banner.test.ts` holds the report heading and the live glyph banners in the standard and the output style byte-identical, and asserts the form line, the banner heading, counts line and holder list, each item's glyph read against the table of glyphs, the closing thread lines, the reply block and the absence of send or resume lines.

List the provisional glyphs and bracketed state words seen in reports since the last refresh, each with where it was used, and propose which to agree into the standard's [table of glyphs](references/standard-coordination.md#46-banner) as a query to the owner, under GLYPH-REVIEW. A glyph joins the table only on the owner's word; until then it stays provisional, shown with its bracketed word.

### Mode RESUME

While coordinating, `/ki-coordination resume` releases held work under [Putting work on hold](references/standard-holds.md#41-putting-work-on-hold).

### Mode SEND

While coordinating, `/ki-coordination send` commits and syncs the work package and gives the Summary for the handoff under [States and moves](references/standard-coordination.md#45-states-and-moves).

### Mode STATUS

While coordinating, `/ki-coordination status` gives the Status: [the Summary](references/standard-report-forms.md#417-the-summary) without `## Summary`, its form line reading `Status at <local time> · last mark <local time>`; `no art` leaves the art out of its footer. It never moves the mark.

### Mode SUMMARY

While coordinating, `/ki-coordination summary` gives [the Summary](references/standard-report-forms.md#417-the-summary) since the last mark, or the session's start where there is none, and `/ki-coordination summary since <time>` gives it from any point the owner names; `no art` leaves the art out of its footer. It is the one summary form, replacing the recap and the full summary: the heading block, its form line reading `Summary at <local time> · last mark <local time>`, then the Answer where there is one, `## Summary` with a bold headline and what changed, `## Status` with the two-column status table, a row per change document or sub-package holding a live item and one catch-all row, its lines opening with their holder's glyph, `## Queries` with the open queries in full, at most three under the [query cap](references/standard-queries.md#42-query-cap), and the reply block, then the footer, the Knowledge Islands art and the glyph banner with its thread line. It never moves the mark. `/ki-coordination goals` takes a [goal-setting pass](references/standard-queries.md#44-goal-setting-pass) over the Goals section of `_index.md`. A coordinator gives it unasked where a trigger sets it: after every `mark`, when the last dispatched run finishes, at every send, and as the gap Summary when the owner's message comes 30 minutes or more after their previous one while queries are with the owner, or after 120 minutes without a Full reply, its Answer first in the body. `recap` and `full summary` are read as `summary` and a summary since the work began for the tolerance window.

## Notes

- The owner report and Needs tags are this skill's, and `ki-delegation` links to them. After editing the owner report, the hook line or the output style source, run `ki dev skill generate ki-coordination --write` and commit the rendered surfaces with the standard; the banner test fails while any surface is stale. No output style, proxy shaping block or communication level shortens a reply's layout, sections, queries or banner.
- Every banner closes with the seat's thread line, `<role glyph> 🔑 <work-id>` for every explicitly coordinating package, including main and secondary State of play, Project, regular and ad hoc work, its glyph from the [role catalogue](../ki-work-package/references/standard-roles.md#43-role-catalogue), or `🧵 <work-id>` for a session with no role yet, while a seat working in a package without its keys closes `<role glyph> <package>@<role>`; where the seat's actor is named in the Cairn store's roster, the name comes first and that form in brackets, as in `Kitteth (🪨 🔑 cairn.summit)` (NAME-FIRST); the session name, the `Rename thread:` line and message-line senders carry the same line, and every opener that starts a session names it and has the session rename itself to it first, and tells it to delegate to its agent host's own subagents, stay responsive and check what they return before posting it (OPENER-DELEGATE); no send or resume prompt is emitted, and the owner gets each session's opener from [Opening work](references/standard-opening.md#43-opening-work). The report heading links only the package's `_index.md` in the Cairn store, by absolute path, with `State of play` plain text (HEADING-FIX). A Bootstrap is a full Medium reply under the same report heading and banner as a Summary, without the art, roadmap and package lines: `## Done` gives the coordinator role and where the work stands, `## In Progress` what is running, and `## Queries` the open queries in full, at most three under the query cap.
- A hold, under [Putting work on hold](references/standard-holds.md#41-putting-work-on-hold), is agreed only from With supervisor with `pause` or `done for now`, or `snooze` for a hold that waits for more to come, and ends with a Stop and nothing else: the heading block with the form line `Stop at <local time> · mark <local time>`, `## Done`, `## In Progress` holding Left over and `## Queries` holding the parked tags one line each, then the On hold or Snoozing banner from the standard's one table of states, its closing thread line; work that cannot drain stays With worker, blocked, with one line on what blocks it.
- Every send, receive, mark and hold rewrites `_index.md`'s state fields, Now and Held, under [Picking work up](references/standard-bootstrap.md#44-picking-work-up), and no work package records a session host seat; inventory-based host requirements follow `ki-work-package`.
- Each session commits its own work by explicit path after every finished change, syncs at least every 15 minutes while work runs, and may push everything stacked on `main`, other sessions' commits included, fast-forward only, never forced or with `--no-verify`, stopping on divergence, under [Pushing beneath other sessions](references/standard-sync.md#42-pushing-beneath-other-sessions).
- Work lands, then is reviewed: within a remit from change documents worked through together, high-confidence or reversible work lands on `main` without waiting for the owner, a pull request only where something major is at stake and destructive work only on the owner's word, and the session that did the work writes its record as it lands, one for each unattended run or batch that lands real work and none for a session spent deciding, under [Landing, then review](references/standard-sync.md#41-landing-then-review).
- The refresh rule compares `git log -1 --format=%h -- skills/work/ki-coordination skills/work/ki-work-package skills/agentic-systems/ki-delegation output-styles/ki-coordinator.md` with `_index.md`'s `ki-method_read`.
- The openers read `Bootstrap as <id> ... under ki-coordination`; the thread-model forms, naming the `state-of-play thread` or the `<project> coordination thread`, and the older `under ki-delegation`, `project thread` and `territory master thread` forms are accepted for the tolerance window and mean the same work.
- The local rubric is the materialised domain contract; generic execution, reporting, transaction safety, and publication remain owned by `ki`.
