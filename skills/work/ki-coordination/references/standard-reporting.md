---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T05:25:00Z
ki-status: in force
---

# Coordinating-work standard: reporting

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Reply forms](#41-reply-forms)
    - [4.1.1 Session kinds](#411-session-kinds)
    - [4.1.2 Units of work](#412-units-of-work)
    - [4.1.3 Conversational bounded work](#413-conversational-bounded-work)
    - [4.1.4 Coordinator-only machinery](#414-coordinator-only-machinery)
    - [4.1.5 Weighing what to do](#415-weighing-what-to-do)
    - [4.1.6 Steer and feedback](#416-steer-and-feedback)
  - [4.2 Owner report](#42-owner-report)
    - [4.2.1 Answers](#421-answers)
    - [4.2.2 Quiet tools](#422-quiet-tools)
    - [4.2.3 Tags](#423-tags)
  - [4.3 Links and wording](#43-links-and-wording)
  - [4.4 Linking records](#44-linking-records)
  - [4.5 Report rule sources](#45-report-rule-sources)

## 1. Introduction

This file holds the reply forms every session uses and the owner report with its queries, answers, tags, quiet tools and links. It extends [the core](standard-coordination.md). The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The reply forms every session uses, and the owner report with its queries, answers, tags, quiet tools and links.

### 2.1 In scope

- The three reply forms, the reply id and the reply block.
- Session kinds, units of work and conversational bounded work.
- Weighing what to do, and steer and feedback along the tree.
- The owner report: its heading, sections, findings, queries and levels.
- Answers, quiet tools and tags.
- Links, wording and linking records.
- The marked sources of the run-report and footer-report rules.

[Back to contents](#contents)

### 2.2 Out of scope

- The coordinator reply format, its triggers, templates and banner detail: [reply format and banner](standard-report-forms.md).
- How queries reach the owner, the query cap and query review: [queries](standard-queries.md).
- The run half of delegation, including authority tiers and the external-posting ban: `ki-delegation`'s [background-run standard](../../../agentic-systems/ki-delegation/references/standard-background-runs.md).
- The banner layout, the table of states and the generated surfaces: [the core](standard-coordination.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Reply form** | One of the three shapes every reply to the owner takes: the conversational reply, the owner report or the coordinator forms. **Standard:** this one, [4.1](#41-reply-forms) |
| **Reply id** | The bold first line of every reply to the owner, `**Reply HH:MM**`, the UTC time read from the clock as the reply is written; a saved report carries none. **Standard:** this one, [4.1](#41-reply-forms) |
| **Unit of work** | Work whose end owes a report: something changed, sent, a run finished, a deliverable produced, or the work stopped for the owner. **Standard:** this one, [4.1.2](#412-units-of-work) |
| **Owner report** | The one shape of every report a unit of work owes: `## Done`, `## In Progress` and `## Queries`, with the optional `## Findings`. **Standard:** this one, [4.2](#42-owner-report) |
| **Reply block** | One fenced `text` block closing every reply that asks the owner to decide anything, its queries grouped by priority, one line per query with its tag, recommended letter and confidence. **Standard:** this one, [4.2](#42-owner-report) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Reply forms

Every reply to the owner takes one of three forms.

| Form | When | Shape |
| --- | --- | --- |
| Conversational reply | The default in every conversational session, for anything that does not end a [unit of work](#412-units-of-work): answers, acknowledgements, clarifying questions, plans proposed for agreement and timed progress updates | Plain prose after its reply id: no heading, section or banner. Where it asks the owner to decide anything, it names each decision by its tag and closes with the reply block |
| Owner report | When a unit of work ends, in any session, and as every background agent's final report | The [owner report](#42-owner-report): `## Done`, `## In Progress` and `## Queries`. In a conversational session, including regular or ad hoc work without a coordinating opener, it has no report heading, form line or banner and opens at `## Done`, after its reply id |
| Coordinator forms | Every reply while explicitly coordinating a valid package, and a run's final report to it | The [coordinator reply format](standard-report-forms.md#41-coordinator-reply-format): each reply's [trigger](standard-report-forms.md#412-triggers) sets its structure, the [Summary](standard-report-forms.md#417-the-summary), Status, Bootstrap, Stop, Position, Update or Answer, and its layout, Full, Medium, Short or Minimal, with the package and mark that go with them; a run writes its run report in Medium |

- While coordinating, the report at the end of a unit is the Summary.
- In a conversational session, a request for a "summary", "full summary", "mark" or "status" gets a conversational reply, and a "recap" gets the ordinary `ki-work recap` session recap in its own form; neither borrows a coordinator form.
- **Suggestions carry a confidence.** In every reply form and every session, a suggestion is a recommendation carrying a confidence, `high`, `medium` or `low`: a query's options under the [owner report](#42-owner-report), a suggestion in a conversational reply, a plan proposed for agreement and a run report alike.
- **Reply id.** Every reply to the owner, in every form, opens with its id as a bold first line, `**Reply HH:MM**`: the UTC time read from the clock as the reply is written, with `date -u +%H:%M`, never guessed or carried over from an earlier reply. The owner refers to a reply by it, often by voice, as in "about reply 13:27". It is a line of its own, not a heading, and counts as none of the reply's prose. A coordinator form puts it before its heading block, or, where it has none, before its Answer or banner, under [Blocks, parts and layouts](standard-report-forms.md#411-blocks-parts-and-layouts). A saved report, such as a run report written into a package, carries none: its `#` heading stays its first line.
- **Reply block.** Every reply that asks the owner to decide anything ends with the reply block, whatever its form, in the shape the owner report's **Reply block** sets: a conversational reply after its prose, an owner report or coordinator form after its queries and before any banner. A reply that asks nothing carries none, and no reply carries a `No reply needed.` line. The Stop hook checks the block's shape in every session, under [Generated surfaces](standard-coordination.md#47-generated-surfaces).

Sources: REPORTING-FORMS, RECOMMEND-CONFIDENCE, REPLY-FORMAT, REPLY-BLOCK, REPLY-ID and REPLY-CHECK in [the decision register](sources.md#3-decisions).

#### 4.1.1 Session kinds

A session with no coordinating opener is conversational. It may do bounded work directly, including regular or ad hoc work, and uses the conversational reply forms. A repository declaring this skill, or injecting its hook, does not make a session a coordinator.

A run is the detached actor a coordinator briefs under `ki-delegation`, not a fourth owner-facing session kind. It delivers its bounded unit and returns the owner report to its reporting package.

Sources: REPORTING-FORMS in [the decision register](sources.md#3-decisions).

#### 4.1.2 Units of work

A unit of work ends, and a report is owed, when at least one of these holds since the last report:

1. **Changed:** a change to a repository, configuration or external system was committed, or deliberately left uncommitted with the reason stated.
2. **Sent:** work passed to other work, a repository, a record or a person, such as a captured record, a trade, steer or feedback, or a handoff.
3. **Run finished:** a run the session launched has finished; for a background agent, its own run is ending.
4. **Deliverable:** a deliverable the owner asked for, such as a document, report, draft or analysis written to a file, has been produced.
5. **Stopped for the owner:** the work stopped before completion with something the owner must decide, supply or do, such as a failure, a block or a decision.

None of these ends a unit, and each gets a conversational reply: answering a question, however many reads it took; acknowledging an instruction or decision; a clarifying question; an interim step or timed update; a single read, lookup or check; a plan proposed for agreement.

- A change the owner asked for, made in the same turn in one file or one commit, with nothing failed, open or left to decide, is confirmed in one plain line naming what changed.
- Work ending with nothing changed and nothing open is told in one plain line; with nothing changed but something open, it meets criterion 5.
- A background agent always reports, because its report is its run's only output.
- One report covers every unit that ended in the same turn.

#### 4.1.3 Conversational bounded work

A conversational session does bounded work directly, without delegating, opening a run or becoming a coordinator. Work is bounded when it serves the matter the owner raised in the session, stays within the authority given there and each repository's own rules, and can finish with the owner in the session.

- The session may delegate when it chooses.
- It becomes a coordinator only when the owner opens or re-bootstraps it with a coordinating [opener](standard-opening.md#43-opening-work), never on its own.
- When the work outgrows the bound, because it needs a Project's decisions, more than one run at once, or would keep the owner waiting across sessions, the session says so in one line and proposes the Project's work, or new Project work through the State of play.

Work that must outlive the session takes an ad hoc package, `work/<territory>/<territory>.<slug>/` in the Cairn store, under the work-package standard. It pauses by putting the work On hold through an update of the state in its `_index.md`, with no Stop or banner. Its agents head their reports `# <work title> › <run name>` with `**Run report at <local time>**` and no banner.

Sources: CONVERSATIONAL-RUN and CONVRUN-NARROW in [the decision register](sources.md#3-decisions).

#### 4.1.4 Coordinator-only machinery

The report heading and form line, the banner and its thread line, the mark, the acting rule for work received along the tree, re-anchoring after compaction, the turn budget and the watcher belong to coordinators only. A conversational session's optional package is a plain record: it notes a pause in `_index.md`'s state fields and how to carry on in its Now, and is finished and pruned when the work ends.

#### 4.1.5 Weighing what to do

Everything a session wants to do carries three weights, and one rule says what it does alone, what it puts to the node above and what it settles first. Kris took them on 11 November 2026 under TREE-WORKING, and narrowed the second rule on 12 November under 04-RULE2 a, in the Cairn summit's [change 04](https://github.com/krisb/ki-cairn-store/blob/8e4746657458d41bc47aeba994cde9412e08a535/work/cairn/cairn.summit/04-weighing-open-points.change.md).

- **Benefit:** how much it helps or opens up: high, medium or low.
- **Cascade:** how far its effects spread and how hard they are to put back: contained, within the session's package and easily put back, or wide, reaching other packages, a standard, shared data, credentials or anything published.
- **Confidence:** how sure we are it is the right direction: high, medium or low, with a one-line reason.
- **Waits on:** anything it waits on; a step waiting on an unsettled one is not put forward. Benefit and waits on between them say what comes first.

The rule:

1. **Within the remit, cascade contained, confidence high:** the session does it, and tells the node above as a notice, in its next record or report.
2. **Confidence high, but outside the remit, destructive or major:** the session puts it to the node above as a query, and the node above applies the same rule. A wide cascade alone does not send it up: inside a remit, high-confidence work that more work can undo lands and is reviewed through the record, under [Landing, then review](standard-sync.md#41-landing-then-review).
3. **Confidence not yet high:** nobody moves on it. The session says what would settle it, gathers that first where it can, through a read-only check or a question down or up the tree, then weighs it again. A step that is easy to put back is itself cheap evidence: trying it can be the check. A recommendation below high never goes to the owner as a choice to take (CONF-HIGH): the session breaks the point into parts, settles the parts it can, and puts each remaining part either at high or as a way to raise it, giving the owner the ways that would, such as a check, a trial, a reading or a narrower question, with what each costs. Confidence is `high`, `medium` or `low`, never a level between them.
4. **Agreed in talk** (TALK-AGREE): when the owner answers in conversation rather than in a reply block, the session lists each point the talk settled, with its tag, a line and its confidence that the owner meant it, marking any it is unsure of; the owner confirms the list whole, as "all agreed", the list sent back, or the list with points struck or changed, and only then is a point recorded as decided.

The reply block stays as [Owner report](#42-owner-report) sets it, grouped by priority with each line's confidence (04-REPLY a).

Sources: TREE-WORKING, 04-RULE2 and 04-REPLY in [the decision register](sources.md#3-decisions).

#### 4.1.6 Steer and feedback

Work packages form one tree, and coordination between them runs along it, as Kris took on 11 November 2026 in the Cairn summit's [change 00](https://github.com/krisb/ki-cairn-store/blob/fa651a2c309ff338acf15b533d84820809fd5c7e/work/cairn/cairn.summit/00-authority-tree.change.md).

- **Work cascades down and stays down** under `ki-work-package`'s [CASCADE-DOWN](../../ki-work-package/references/standard-work-package.md#cascade-down), the tree's governing principle: delegate down, own it if there is no one below, escalate up. Feedback is never a way to hand work back: only a decision beyond a node's remit goes up, node by node along the path the work came down.
- **Steer goes down,** carrying direction and remit. A node gives remit down from its own, never wider.
- **Feedback comes up.** It reflects only the view from the node and its immediate parent: it informs the decision above and never overrides it.
- **Messaging between packages is this cycle,** and nothing else: no sideways traffic. A decision above comes down as fresh steer, so the node below goes on without asking again.
- **Conversation is not traffic.** Sessions may still talk across the tree, in a meeting or through their agent host's own messaging on one host, under `ki-meeting`'s [routes](../../ki-meeting/references/standard-meeting.md#46-routes); that conversation carries no authority, and an outcome reaches a package only through the session that holds it.
- **A decision is made at the lowest node whose remit covers everything it reaches,** its children included (DECISION-HEIGHT). A finding in one branch that reaches another goes up to the nearest node above both, which steers back down. That node weighs it under [Weighing what to do](#415-weighing-what-to-do).
- **The owner acts wherever a decision is needed** (HUMAN-ANYWHERE): a question whose reach stays inside one part of the tree is put to the owner at that node, and goes up only if it reaches wider or is getting nowhere there.

Sources: CASCADE-DOWN, STEER-FEEDBACK, DECISION-HEIGHT and HUMAN-ANYWHERE in [the decision register](sources.md#3-decisions); MEET-ROUTES and MEET-CHAIR in `ki-meeting`'s [sources](../../ki-meeting/references/sources.md#3-decisions).

[Back to contents](#contents)

### 4.2 Owner report

Every report a unit of work owes under [Reply forms](#41-reply-forms) takes one shape, the **owner report**: a background agent's final `<name>.report.md`, which the owner reads directly; a coordinator's Bootstrap and Stop; and a conversational session's report when a unit ends. A coordinator's [Summary](standard-report-forms.md#417-the-summary), including the one it sends with, builds its own sections from the same parts: its queries, links, plain English and levels are the owner report's. This standard is the one source; `ki-delegation` links here, and the runtime surfaces are rendered from [Generated surfaces](standard-coordination.md#47-generated-surfaces).

The label is written `Outstanding - no action requested now` and the query heading `<tag> - <title>`, each with a spaced hyphen.

- **Heading:**
  - a coordinator's report opens with the heading block, its [report heading](standard-report-forms.md#42-banner-detail) and form line;
  - a background agent's run report uses the heading of the work it reports to with `› <run name>` added, and the form line `**Run report at <local time> · last mark <local time>**`;
  - a conversational session's report has no report heading, form line or banner and opens at `## Done`, after its [reply id](#41-reply-forms);
  - a background agent reporting to a conversational session or to ad hoc work heads its saved file `# <work title> › <run name>`, with the form line `**Run report at <local time>**`, and no banner.
- **Sections:** `## Done`, `## In Progress` and `## Queries`, in that order, every time, with the optional `## Findings` between `## In Progress` and `## Queries`. An empty section still appears and says so in one line, `Nothing is running` or `No outstanding queries`. One exception: a [Summary](standard-report-forms.md#417-the-summary) or Status keeps its own sections. A [Stop](standard-holds.md#41-putting-work-on-hold) for a hold keeps the three, with Left over in `## In Progress` and the parked queries in `## Queries`, one line each, with no Context, Query or Options, because the queries live in the package.
- **Done:** completed outcomes, one line each, with material failures, corrections and limitations beside them, not behind them. A background agent puts its commit identifiers and check results here, because the owner reads the report, not the log.
- **In Progress:** what is running and what is waiting, each with its owner or dependency. Then, under `Outstanding - no action requested now`, the matters that need nothing from the owner, grouped as agent work, receiver-owned work, verification limitations and retained material, apart from the decisions the owner must make.
  - A [Summary](standard-report-forms.md#417-the-summary) is windowed on its start: a handoff to other work is reported once, under `## Summary`, and not carried after; an item a record holds is left to the roadmap; and its status table holds only this work's own holdings. A Summary since an earlier time gives the longer view.
- **Findings:** optional, and only on the owner's request: anything the owner asks to have looked into or checked, such as whether a field still makes sense, is a finding with its own tag, and its finding is the output of that look, such as a survey, table, comparison, assessment or short answer, informing a judgement the owner has still to make. A run's own observations and check results stay in Done or become queries.
  - **Placement:** while at least one is open, every Full and Medium reply carries `## Findings`, between `## In Progress` and `## Queries` in a run report, Bootstrap or other Medium reply, and between `## Status` and `## Queries` in a [Summary](standard-report-forms.md#417-the-summary) or Status. A Minimal reply, an Update or Answer, carries instead one line at the end of its Answer counting the findings still open and naming their tags, as `Findings open: 1, THEME-FIELD.` With none open, both are left out.
  - **Shape:** given in full, each finding is a `### <TAG> - <plain-language title>` heading, its tag in the [tag](#needs-tags) vocabulary. Before any table it opens with three lines: **Goal**, the question asked, in the owner's words where they exist, who asked and when; **Scope**, what was and was not looked at; **As of**, when the facts were last checked. The table or short list follows, then one line naming the queries it raised.
  - **Queries:** a finding raises queries rather than replacing them. Each decision it calls for is a query in `## Queries`, whose Context may name the finding by its tag.
  - **Carrying:** a finding stays in every Full and Medium reply's `## Findings` until the owner acknowledges it; a mark, a Summary or the passing of time does not settle it. The first reply to give it gives it in full, table and all. Every later reply gives it in one line: its tag, its answer in brief and the reply that first gave it, as `THEME-FIELD · obsolete in packages, kept on records · first given in Reply 05:30`. A prompt drafted for the owner to hand on is carried the same way under `## Findings`: its goal line says who it is for and what it asks, and the first reply gives the prompt in full in one fenced block.
  - **Settling:** once the owner acknowledges it, give each finding or prompt one disposition in the change document it reaches: homed in a record or in a change document, or dropped.
  - **File:** between reports, a finding lives in the run packet of the run that made it, as `$TMPDIR/ki-agents/<run>/findings/<tag>.md`, holding exactly the text the report carries, goal first, never in the package, under `ki-work-package`'s [closed list](../../ki-work-package/references/standard-work-package.md#43-the-shape). A finding still open when its packet would go is carried into the change document it bears on. The read of the package counts an open finding with it.
- **Queries:** one `###` heading per actionable query, `<tag> - <plain-language title>`, linked to its record where one exists, the tag from the [tag](#needs-tags) vocabulary. A routine open matter is not a query; it belongs in In Progress. Nor is a push of stacked commits: routine push state is left out of the report and banner. A query's body is three bold labels and nothing else:

  ```markdown
  ### <TAG> - <plain-language title>

  **Context:** <enough for the owner to decide without reading anything else>

  **Query:** <the question, in one sentence>

  **Options:**

  a) (recommended, confidence <high, medium or low> - <one-line reason>) <the recommended course>

  b) <an alternative>
  ```

  - **Parts:** **Context** gives enough to decide without reading anything else, including the matter's significance and current state; where the matter has several parts, it may take the bold lead-ins of the interactive pass's [Where things stand](standard-queries.md#where-things-stand), such as why it comes to the owner and what an answer unblocks. **Query** is the question in one sentence. **Options** is the lettered list, `a)`, `b)` and so on, with no bullet before a letter.
  - **Paragraphs:** the three parts are separate paragraphs with a blank line between them, and each option is its own paragraph with a blank line between options, so the query passes `rumdl check` under the house `.rumdl.toml`, whose MD013 reflow would otherwise join lazily continued lines.
  - **Recommendation:** option a) is always the recommendation and carries `(recommended, confidence <level> - <reason>)` before its text, the level `high`, `medium` or `low` and the reason one line, as in `a) (recommended, confidence high - the patch is already on main) push it`. Only option a) carries a confidence.
  - **Confidence:** reflects how reversible the course is and how much of what it rests on the session verified directly, rather than took from another agent's report. A course that destroys, deletes or publishes and rests on claims not verified directly is never `high`. Consistency with an earlier decision is not a reason and earns no level: an option a) whose only reason is an earlier decision is capped at `medium`.
  - **One recommendation:** a `###` query marks only one option recommended; a query that would recommend more than one is split into separately tagged queries. No file check reads reports for this or for the confidence form; COORD-6 reviews both as judgement, under COORD-REPORT-CHECKS.
  - **Review:** before reaching the owner, a query passes the [query review](standard-queries.md#45-query-review) where its confidence or course calls for one.
  - **Alternatives:** further options appear only when they are real alternatives. A query needing only confirmation still gives a), plus b) for the obvious alternative, such as "leave it as it is".
  - **Cap:** a reply or report puts at most three queries to the owner, the most critical first, then one line saying how many more are open and where they are held, as in `A further 7 are held in the package's change documents.`, under the [query cap](standard-queries.md#42-query-cap). The reply block carries the same three and no others.
  - **Reply block:** every reply or report that asks the owner to decide anything closes with the reply block, ready for the owner to copy, change and send, whatever its form: a coordinator's reply, a run report and a conversational session's report after their queries, and a conversational reply after its prose. It is one fenced `text` block holding exactly the text to send back, with nothing to strip out. A reply that asks nothing carries none.
    - **Groups:** the queries are grouped by priority under numbered headings, the most pressing first, each heading `<n> · <what the group is>`, adding `, can run while you're away` where the group's work can go ahead while the owner is away, with a blank line between groups. The block opens with its `1 ·` heading, even where there is one group.
    - **Lines:** under its heading, one line per query, its tag, the recommended option's letter and that option's confidence in brackets, as `<TAG> a (high)`, `(medium)` or `(low)`, then a short gloss after a colon, as `<TAG> a (high): what it does`. Each tag appears once, carrying only the recommended option: the block never offers alternatives, which stay in the query's **Options**. The Stop hook holds back a line without its confidence or gloss and a tag given twice (HOOK-ENFORCE).

  A reply block:

  ```text
  1 · Baseline build, can run while you're away
  WINDOW-BUILD a (high): build the window baseline
  ROADMAP-ATL003 a (high): close the record

  2 · Window design
  CON-PROFILE a (medium): one profile per rig

  3 · Outside Cairn
  HANDOFF-OBS a (high): hand the finding to Obsidian's owner
  ```

  A query and its options:

  ```markdown
  ### LINK-GUARD - where the link guard should live

  **Context:** The hook line already names the linking rule, and KI-HARNESS-GOV-188 carries the harness half; the link printer is a `ki` change, so each half has a different home.

  **Query:** Should the link guard be split across its homes, or held in the harness until the printer lands?

  **Options:**

  a) (recommended, confidence high - each half's home is already settled) split it: hook line and KI-HARNESS-GOV-188 in the harness, the printer in KI-TOOL-KI-CLI-127

  b) hold the whole guard in the harness until the printer lands
  ```

- **Posting outside:** a recommendation to post anything in the owner's name outside the owner's own repositories and services, an issue, comment, reaction, pull request, discussion, review or message on another owner's repository or service such as an upstream issue tracker, is a query, never an action. Its **Context** or option carries the exact text proposed and where it would go, and nothing is posted until the owner answers that query; a broader grant, an earlier answer or a recommended option never stands in for it. `ki-delegation` owns the ban under its [external-posting rule](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#46-authority-tiers).
- **Plain English:** a query's Context, Query and options, and the report's other explanations, are in plain English. A technical term appears only where needed and is explained in plain words the first time. Links to records are kept under **Links**.
- **Headings:** the sections are `##` headings and each query a `###` heading, so a report nests the same way wherever it appears, under the one `#` report heading. Sub-headings in `Done`, where a long report groups outcomes by topic, and the banner heading are `###` too.
- **Links:** every record, package file, Project, theme, decision, receipt and evidence artefact is linked under [Linking records](#44-linking-records), a pruned record as `[<FULL-ID> (pruned)](https://github.com/<owner>/<repo>/blob/<last revision>/<path>)`.
- **Levels:** the owner's personal instructions set a communication level, `quiet`, `standard` or `detailed`, which this standard does not restate. The shape is the same at every level; the level sets only depth.
  - `quiet`: the status-line cadence during work is unchanged, this report replaces the end-of-unit report, done items are one line each, in-progress items name only the work and what it waits on, and a query carries just enough context to be answered cold.
  - `standard`: adds material context and exceptions to each section.
  - `detailed`: adds the plan, validation evidence and rationale.
  - No level hides a failure, a required decision or a material risk.
  - In a coordinator session the level never changes the layout and governs only the wording inside B1, the Answer, under the [coordinator reply format](standard-report-forms.md#41-coordinator-reply-format).

Sources: REPORT-SOURCE, OWNER-REPORT-FORMAT, REPORT-HEADINGS, REPLY-BLOCK, REPLY-ID, HOLD-QUERIES, SUMMARY-WINDOW, FINDINGS-SECTION, FINDINGS-KEEP, QUERY-SHAPE, QUERY-LEAD-INS, FORM-VS-RUMDL, CONFIDENCE-STANDARD, REVIEW-LIFT, ACCEPT-BY-CRITERIA, CONFIDENCE-CHECK, REVIEW-CHECK, NO-EXTERNAL-POSTING, PLAIN-ENGLISH, REPLY-FORMAT, REPLY-GROUPS, QUERY-CAP, QUERY-CAP-3, COORD-REPORT-CHECKS and HOOK-ENFORCE in [the decision register](sources.md#3-decisions).

#### 4.2.1 Answers

Every reply asking the owner to decide anything, in any form, ends with the reply block under the owner report's **Reply block**; no reply carries a `No reply needed.` line. The owner answers by sending the block as it stands or changed, or in speech, naming a query by its tag or answering in order, and may answer with an option's bare letter. In a block sent back, the worker reads each `<TAG> <letter>` line as that query's answer: the numbered group headings are ignored, and so is a bracketed confidence after the letter, which may be kept, changed or left out, and so is a gloss after a colon, so a block sent back as it stands is an answer taking every recommendation. The worker reads each answer back as taken in its change document, in the turn it arrives, `Taken as: <the instruction it will act on>`, and asks one line where an answer is unclear, never acting on a guess. A suggested course is not approval: nothing is acted on until the owner answers.

Sources: REPLY-BLOCK, REPLY-FORMAT and REPLY-GROUPS in [the decision register](sources.md#3-decisions).

#### 4.2.2 Quiet tools

Every session and every background agent runs its tools quietly and reports what they found, never what they printed.

- **Git:** run Git with `-q` wherever the command takes it, such as `git commit -q`, `git fetch -q`, `git pull -q` and `git push -q`.
- **No pasted output:** never paste gate, audit, test or Git output into a reply, update or report, in full or in part; it stays in the session log.
- **One line per outcome:** report each outcome in one plain line, such as "tests pass", "the ki-coordination audit has no new findings" or "the unit failed its push", naming a failure and what it means in the same line. Detail and evidence follow only when the owner asks.

Sources: QUIET-TOOLS and RESTART-AGREE in [the decision register](sources.md#3-decisions).

<a id="needs-tags"></a>

#### 4.2.3 Tags

Each outstanding query carries a short mnemonic tag, such as `BOT-1`, `CSWAP` or `PUSH`, never a bare number, so the owner can answer "BOT-1 do it". The tag heads the query in a report and labels the same item in the change documents' parked tags, the banner and a Summary's status table: it is the one vocabulary for open items. A tag is stable: it keeps its meaning across reports until the item is resolved and is never reused. Queries are never numbered.

[Back to contents](#contents)

### 4.3 Links and wording

- **Links:** every record a report names is linked by its full identifier to its local file under [Linking records](#44-linking-records).
- **Wording:** plain language; "background agents" for the worker processes and "runs" for their groups, never "helpers". When the owner must paste a message into another session, give it in a code block ready to copy.

[Back to contents](#contents)

### 4.4 Linking records

Whenever a session or report mentions a roadmap or work record, a package file, a theme, a Project, a decision, a receipt or an evidence artefact, it cites the full identifier, such as `KI-HARNESS-GOV-144` rather than `GOV-144`, because area codes repeat across repositories, and uses it as the link text.

- **Target:** link each to its local file by absolute path, so it opens in the owner's editor, resolving the repository through the KI registry (`ki registry`) where available. Use the verified canonical remote URL only when there is no local copy. A query heading links to its record where one exists.
- **Never invented:** when a target cannot be resolved, the text says so.
- **Pruned records:** a pruned record has no local file, so it is linked as `[<FULL-ID> (pruned)](https://github.com/<owner>/<repo>/blob/<last revision>/<path>)`. The link text is always the full identifier followed by `(pruned)`, and the last revision is the last commit in which the file existed, usually the parent of the prune commit. A live record keeps its local-file link; a pruned record is never pointed at the Project note that carries it, nor left as a bare identifier.
- **Scope:** status lines, reports, recaps and package files alike, a background agent's report included.
- **No file check:** no rubric item reads reports for links any more, under COORD-REPORT-CHECKS; COORD-5 reviews linking as judgement. That every record identifier in a record is a link is the record's owner's rule: the Cairn store's contract and its [change 20](https://github.com/krisb/ki-cairn-store/blob/7fb6be3/work/cairn/cairn.summit/20-learnings.change.md#42-the-record).

Sources: LINK-FORM and COORD-REPORT-CHECKS in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.5 Report rule sources

<!-- ki-coordination:source run-report -->

```markdown
**Report** to `<report path>` in your run packet, outside every repository, or as your final message where the brief names no path, as an owner report: the ki-coordination report heading of the work you report to with `› <run name>` added, `# <Theme> › [<Project>](<package _index.md>) › <run name>` for Project work, or `# [<title>](<package _index.md>) › <run name>` for regular/ad hoc coordination, the work's own name its one link, to its package's `_index.md` in the Cairn store by absolute path, never a repository, README or theme page, the bold `**Run report at <local time> · last mark <local time>**` line and one `---`, then `## Done`, `## In Progress` and `## Queries`, each query carrying **Context**, **Query** and lettered **Options** as separate paragraphs with a blank line between them, each option its own paragraph, `a) (recommended, confidence <level> - <reason>)` first and no bullets, closing the queries with a reply block, one fenced `text` block holding only the text to send back, the queries grouped under numbered headings in priority order, `<n> · <what the group is>`, adding `, can run while you're away` where the group can, a blank line between groups, and one line per query, its tag, the recommended letter and its confidence in brackets, as `<TAG> a (high)`, in plain English with a technical term only where needed and explained once, keeping links to work items and records; where the brief asks for findings, add `## Findings` between `## In Progress` and `## Queries`, each finding a `### <TAG> - <title>` heading opening with its **Goal**, **Scope** and **As of** lines before any table, and write it also to the finding file the brief names; then, for coordinating work, the glyph banner the ki-coordination [Banner](../../../work/ki-coordination/references/standard-coordination.md#46-banner) section prints, its `###` state heading, `### 🤖 → 👤 Handoff to supervisor · at <local time>`, or `· blocked · at <local time>` where you send back with a blocking query, its counts line of five views with zeros, `🤖 <n> running · ⏳ <n> queued · 👤 <n> with you · ⛔ <n> blocked · 🅿️ <n> parked`, and `- <glyph> what · holder · at <time>` list, closing with one thread line, `🧵 <work-id>` for every explicitly coordinating package, including main and secondary State of play, Project, regular and ad hoc work, using the work you report to, and no send or resume line; a run report to a conversational session, including regular or ad hoc work without coordination, has no mark in its form line and no banner. The report's first non-blank line is its `#` heading, after front matter if the report has any. Run tools quietly under the ki-coordination [quiet-tools rule](../../../work/ki-coordination/references/standard-coordination.md#quiet-tools): run Git with `-q`, never paste gate, audit or Git output, and report each outcome in one line. Owner reports, run reports and banners omit routine push state and other sessions' stacked commits; if your own unit could not be published because its push failed, Done names the affected unit and reason. A Stop keeps nothing about pushes beyond a failure.
```

<!-- ki-coordination:source footer-report -->

```markdown
- Write the report as the owner report the ki-coordination [owner-report standard](../../../work/ki-coordination/references/standard-coordination.md#owner-report) sets: the ki-coordination report heading of the work you report to with `› <run name>` added, `# <Theme> › [<Project>](<package _index.md>) › <run name>` for Project work, or `# [<title>](<package _index.md>) › <run name>` for regular/ad hoc coordination, the work's own name its one link, to its package's `_index.md` in the Cairn store by absolute path, never a repository, README or theme page, then the bold `**Run report at <local time> · last mark <local time>**` line and one `---`; `## Done`, with commit identifiers and each check's outcome in one line; `## In Progress`; where the brief asks for findings, `## Findings`, each finding a `### <TAG> - <title>` heading opening with its **Goal**, **Scope** and **As of** lines before any table, also written to the finding file the brief names; `## Queries`, each query carrying **Context**, **Query** and **Options** as separate paragraphs with a blank line between them, each lettered option its own paragraph with a blank line between options, `a) (recommended, confidence <level> - <reason>)` first and no bullets, in plain English with a technical term only where needed and explained once, keeping links to work items and records, closing the queries with a reply block, one fenced `text` block holding only the text to send back, the queries grouped under numbered headings in priority order, `<n> · <what the group is>`, adding `, can run while you're away` where the group can, a blank line between groups, and one line per query, its tag, the recommended letter and its confidence in brackets, as `<TAG> a (high)`; then, for coordinating work, the glyph banner, its `###` state heading, `### 🤖 → 👤 Handoff to supervisor · at <local time>`, or `· blocked · at <local time>` where you send back with a blocking query, its counts line of five views with zeros, `🤖 <n> running · ⏳ <n> queued · 👤 <n> with you · ⛔ <n> blocked · 🅿️ <n> parked`, and `- <glyph> what · holder · at <time>` list, closing with one thread line, `🧵 <work-id>` for every explicitly coordinating package, including main and secondary State of play, Project, regular and ad hoc work, using the work you report to, and no send or resume line; a run report to a conversational session, including regular or ad hoc work without coordination, has no mark in its form line and no banner. Run tools quietly under the ki-coordination [quiet-tools rule](../../../work/ki-coordination/references/standard-coordination.md#quiet-tools): run Git with `-q`, never paste gate, audit or Git output, and report each outcome in one line. Owner reports, run reports and banners omit routine push state and other sessions' stacked commits; if your own unit could not be published because its push failed, Done names the affected unit and reason. A Stop keeps nothing about pushes beyond a failure.
```

[Back to contents](#contents)
