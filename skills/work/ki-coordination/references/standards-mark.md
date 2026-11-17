# Coordinating-work standard: mark, tidy and finishing

This file holds the mark, parking tangents, pruning the package, closing out Orca workers and finishing Project work. It extends [the core](standards-coordination.md).

## The mark

The mark is only a timestamp, `ki-mark: <UTC timestamp>` in `_index.md`'s state fields, and the default start of the next [Summary](standards-report-forms.md#the-summary). Each package has one mark; a new mark replaces it, and Git keeps the earlier ones. The mark bounds the logbook, record transitions, background-agent reports and the change documents' entries, which carry their own timestamps.

- **Who moves it:** only the owner, with `mark`, `mark only` or `mark, status only`, and a hold. A Summary or a Status never moves it.
- **What follows it:** `mark` gives the Summary since the previous mark in the same reply, with every open query in full, and so does the mark that closes a query set. `mark only` gives the Position, the banner after a line or two, `mark, status only` gives the [Status](standards-report-forms.md#report-forms), and a hold's mark gives the [Stop](standards-holds.md#putting-work-on-hold).
- **Work at the mark,** in order:
  1. run the [repository level check](standards-sync.md#repository-level-check) before reporting the mark;
  2. work the [decisions life cycle](standards-decisions.md#decisions-life-cycle);
  3. [prune the package](#pruning-the-work-folder) and review its change documents;
  4. [close out Orca workers](#closing-out-orca-workers);
  5. commit the package and confirm in one line.
- **Open items carry forward:** a mark resets only the window of `## Summary`. Open and parked queries in the change documents, open records in the work's scope, running and queued background agents and parked tangents stay on the status table and in `## Queries`; a mark never drops, closes or hides them.
- **History:** comes from Git and run reports, never from the state. `git log -- work/<territory>/<id>/_index.md` in the Cairn store shows what the work is and its moves. The state holds no dated log, commit runs or test counts; it may link one report or commit instead of copying it, and the `ki-work-package` rubric's history check warns otherwise.
- **No mark yet:** the Summary runs from the session's start, or from `_index.md`'s `ki-created_at` where that is unknown, and the first `mark` strikes the first mark.
- **Not a recap:** a Summary covers the package since the mark, and `ki-work recap` covers one session at a lower level; they share no form or procedure.

Sources: SUMMARY-MODEL, DECISION-NO-NUMBER, MARK-THEN-SUMMARY and STATE-HISTORY in [the decision register](sources.md#decision-register).

## Parking tangents

When the owner raises a side topic in passing, record it as one dated line, say it is parked and carry on. Do not explore it unasked.

- **Where:** a parked tangent becomes a new change document for its area, numbered after the others, to come back to, as Kris set under OLD-SHAPE-HOMES a on 14 November 2026: "Parked tangents are effectively you can create a new change .md for that area, and then we can come back to it basically with a higher number". Its Open section holds the dated line. Work waiting on a named decision or event goes to `_index.md`'s `## Held` with its release condition. Deferred deliverable work becomes a triage record in its home repository under `ki-work next`'s [capture rule](../../../keystone/ki-work/references/standards-next-work.md#capture-substantive-prospective-work).
- **Counting:** tangents count as outstanding in the [Summary](standards-report-forms.md#the-summary).
- **Picking up:** on request, such as "what's parked?", list them. When the owner picks one up, its change document is worked like any other, or the tangent gets a home elsewhere, a Project, a record through `ki-work next` or a line in other work's `messages.md`, or is dropped, and its change document goes in the same update.

Sources: HELD-VS-RECORD and OLD-SHAPE-HOMES in [the decision register](sources.md#decision-register).

## Pruning the work folder

At every send and every mark, prune your own package, so `work/<territory>/<id>/` shows only what is still open and Git holds the rest. The `ki-work-package` [Tidying the work folder](../../ki-work-package/references/standard-work-package.md#410-the-tidy) rules, over its [closed list](../../ki-work-package/references/standard-work-package.md#43-the-shape), set what goes, what stays, how and who; `_index.md`, the live change documents and the sub-packages always stay. This standard sets the timing and the judgement.

- **Judgement:** whether a report's outcome, or every point of a feedback package, has a durable home in a record, a change document or a commit. A report and its brief live in the run's packet, `$TMPDIR/ki-agents/<run>/`, never in the package, under the `ki-delegation` [run packet](../../../agentic-systems/ki-delegation/references/standards-background-runs.md#run-packet). A packet is eligible for removal once its report's outcome is homed and every query has been copied in full into the change documents' Open sections; the queries need not be answered yet. Keep a packet whose outcome has no durable home, without homing it in haste. A later [Summary](standards-report-forms.md#the-summary) reads a removed report's outcome where it was homed.
- **Change documents:** at each mark, review the change documents in the package and its sub-packages, a `.design.md` design note among them. Delete each one that has graduated under the `ki-work design` [artefact home](../../../keystone/ki-work/references/standards-work-design.md#artefact-home), or that the package records as superseded; keep drafts, documents under review and any in doubt. The mark prompts a review, never an automatic deletion. Beyond graduation, a change document goes only when every outcome it carried is homed, the owner's words and any grant included, and every link into it has been rewritten first. A diagram's source and its renders go together.
- **Temporary output:** remove, by literal path, each of your own run packets, `$TMPDIR/ki-agents/<run>/`, once its outcomes are homed or its output is superfluous.
- **Record threshold:** deletion is operational work under the [record threshold](standards-decisions.md#decision-classes) and opens no record.
- **Flagging:** the `ki-work-package` rubric's [FOLDER](../../ki-work-package/references/rubric.md) items fail a package holding a file outside the closed list. They fail a package holding a report, a brief or any other file outside the closed list, and name every finished work's package as due for close-out.
  - Whether each candidate's outcome is homed stays the owning coordinator's judgement; the list is never permission to delete.
  - At its own mark, the State of play names each flagged package by a line in that work's `messages.md`, and its coordinator prunes it at its next send. A finished work's package is the exception: the State of play closes it itself under the `ki-work-package` [close-out](../../ki-work-package/references/standard-work-package.md#410-the-tidy).
  - No item counts the open questions across a package's change documents; the coordinator keeps them under the [owner queue](standards-coordination.md#coordinating-practices) cap itself.
  - No item counts the records awaiting acceptance either since COORD-REPOINT (Kris, 16 November 2026); the coordinator keeps them under the same cap, until the check returns in `ki-work-package` as a warning under [Mechanical boundary](standards-coordination.md#mechanical-boundary).

Sources: THREAD-TIDY and THREADS-TRIM in [the decision register](sources.md#decision-register).

## Closing out Orca workers

A coordinator that starts Orca supervised workers, or whose runs start them, closes out each settled worker as part of its close-out. Orca's orchestration guide counts supervised work as done only when "each settled worker was reused, explicitly retained, or released".

- **Receive:** when the report of an Orca worker the coordinator or its runs started is received, and Orca shows the Dispatch settled, succeeded or failed, do exactly one of three things and name which in the receive commit:
  - reuse the same terminal for an immediate follow-up Dispatch;
  - retain it with `orca orchestration worker-retain --dispatch <id> --json`, only at the owner's explicit request;
  - release it with `orca orchestration worker-release --dispatch <id> --json`. This is the default, done in the same wake as the completion message is received and acknowledged, never deferred to the mark, so no finished worker is left for the owner to raise.

  A release that fails or is refused is reported in that wake's timed line and named in the receive commit, and the Dispatch is carried as still owing a decision.
- **Authority:** only an accepted settlement authorises release. Absence, a timeout, an idle terminal, a heartbeat, a status, a question, an escalation, a stale or rejected completion, `unverifiable` liveness or a status-file `DONE` without a settled Dispatch authorises nothing. `terminal close` is never a substitute. Follow the recovery action of a `release_pending` or `release_unknown` receipt exactly and report it.
- **Mark, hold and Finished:** before a mark is struck, before a hold's Stop and before the Finished banner, `orca orchestration worker-list --run <run id> --terminal-state reclaimable --json` returns none for each Orca Run the work created. A settled worker left open, a leftover, is released then under the same authority and reported. A worker still owing a decision is named in the receive or mark commit and in the hold report's `## Left over`.
- **What release does:** cleanup after settlement, not cancellation. It archives the worker's output, so `worker-read` still returns it, then closes only that worker's own coordinator-owned agent terminal, never setup, configured, reused, pre-existing or user-taken-over terminals. Release is terminal accounting, reported apart from Task status, and the worker is then listed as `released`.
- **History is not close-out:** close-out never deletes an Orca AI Vault session. Deleting conversation history is the owner's own choice, and no background agent or coordinator makes it.
- **Chat coordinators:** a coordinator in an Orca chat, not an Orca terminal, may release a worker it started. The proof covers chat coordinators only on the runtime the `ki-delegation-orca` [Runtime binding](../../../agentic-systems/ki-delegation-orca/references/standards-orca-delegation.md#runtime-binding) names as proved. Where a release is refused or its effect is uncertain, name the Dispatch as still owing a decision and close nothing by hand. Release never stands in for stopping an unfinished worker, which stops only under the `ki-delegation-orca` stop rule.

Sources: ORCA-WORKER-CLEANUP, ORCA-CLOSE-OUT, ACCEPT-BY-CRITERIA, WORKER-LEFTOVERS, TRIAL-SHAPE and CLOSEOUT-STRIKE in [the decision register](sources.md#decision-register).

## Finishing Project work

Project work moves to Finished once only, on the owner's `finish`, after the close-out:

1. every logged decision is homed under the [decisions life cycle](standards-decisions.md#decisions-life-cycle), none left homeless or held;
2. its change documents, in the package and its sub-packages, are resolved: every one graduated and deleted;
3. `_index.md`'s state is set to `ki-state: finished`, its durable information routed, and the commit `docs(work): <id> finish` made;
4. the package is deleted at the mark that closes it, under the `ki-work-package` [close-out](../../ki-work-package/references/standard-work-package.md#410-the-tidy), Git keeping it. Where the package outlives the finishing session, the State of play closes it at an owner-authorised mark of its own whose report names the package, rather than by a line in the finished work's `messages.md`, which no coordinator reads.

Before the Finished banner, every Orca worker the work started is settled under [Closing out Orca workers](#closing-out-orca-workers). The last report is the Stop at Finished under [Templates](standards-report-forms.md#templates), closing with the Finished banner. The Project note then points at the outcome. Reopening a Project is a new opener from the State of play, not a send.

Sources: FINISH-CLOSE-OUT, CLOSE-GATE-STRICT and FINISHED-TIDY-KICK in [the decision register](sources.md#decision-register).
