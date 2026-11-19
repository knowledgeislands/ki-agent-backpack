---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T05:16:00Z
ki-status: in force
---

# Coordinating-work standard: decisions and change documents

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Decisions and design](#41-decisions-and-design)
    - [4.1.1 Decisions log](#411-decisions-log)
    - [4.1.2 Decision classes](#412-decision-classes)
    - [4.1.3 Decisions life cycle](#413-decisions-life-cycle)
    - [4.1.4 Change documents](#414-change-documents)

## 1. Introduction

This file holds how decisions are logged in change documents, decision classes, their life cycle and change documents. It extends [the core](standard-coordination.md). The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How a coordinator logs the owner's decisions in change documents, classes them, homes them and writes designs as change documents.

### 2.1 In scope

- What a logged owner decision authorises.
- Logging each decision in the turn it arrives, in the change document it belongs to.
- The four decision classes and the record threshold.
- The decisions life cycle at each mark, and who homes each class.
- Designs written as change documents, and where they and their working material go.

[Back to contents](#contents)

### 2.2 Out of scope

- The shape of a package and its change documents: `ki-work-package`'s [work-package standard](../../ki-work-package/references/standard-work-package.md).
- The run side of logging decisions: `ki-delegation`'s [background-run standard](../../../agentic-systems/ki-delegation/references/standard-background-runs.md).
- A change document's own format: `ki-authoring`'s [change format](../../../keystone/ki-authoring/references/standard-formats-change.md).
- Pruning change documents at the mark: [mark, tidy and finishing](standard-mark.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Decision entry** | One timestamped owner decision about the work, in the change document it belongs to and in the owner's own words where possible; it carries no number. **Standard:** this one, [4.1.1](#411-decisions-log) |
| **Decision class** | One of four kinds of entry, operational, rule, standalone or held, each setting the entry's home. **Standard:** this one, [4.1.2](#412-decision-classes) |
| **Record threshold** | The test for opening a record: only a product or standard change that needs the owner's acceptance opens one. **Standard:** this one, [4.1.2](#412-decision-classes) |
| **Homed, pointed, kept** | What the mark finds of an entry: wholly carried by a durable home, still governing live work whose home is elsewhere, or neither, so its change document stays open. **Standard:** this one, [4.1.3](#413-decisions-life-cycle) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Decisions and design

A logged, unrevoked owner decision authorises its stated scope across sessions. Ask again only for a new decision, an explicit later gate or a changed boundary. A relay is not approval, and narrower repository gates still apply.

A grant is not such a decision. A grant the owner gives within a session, such as "you can accept anything with a high confidence", covers only that session's work within its remit and lapses with the session, unless the owner says it stands; and each push that publishes needs the owner's word each time, whatever grant is in force, as the standing rules for Stoa and the live sites already require. Kris set this under ACCEPT-REACH on 19 November 2026: "Sometimes I might say that within a given session of working, it's not a standing statement, I believe. So it should always be caveated within a certain remit." A decision on a stated scope, logged and unrevoked, still stands across sessions; a blanket grant does not.

The coordinator logs every owner decision in the turn it arrives, in the owner's words, in the change document it belongs to, under the [rules below](#411-decisions-log). A record, report or banner describes a decision by its words and date, never by a number.

Sources: DECISION-NO-NUMBER and ACCEPT-REACH in [the decision register](sources.md#3-decisions).

#### 4.1.1 Decisions log

Each owner decision about the work is one timestamped entry in the change document it belongs to, where it belongs in the change, such as its Outline or Steps, in the owner's own words where possible; a point still open, a question, gap or consequence, goes into that change document's Open section instead, under the `ki-work-package` [change documents](../../ki-work-package/references/standard-work-package.md#46-change-documents) rule. Kris set these homes under OLD-SHAPE-HOMES a on 14 November 2026: "The decision log is now the gaps in a given change record… it's the things that are agreed as well as the gaps". A decision whose area has no change document yet opens one. An entry opens with no `focus:` line, since the change document it sits in places it. Entries carry no numbers, and a prompt, brief, record, report, package file or banner describes the decision it acts under in the owner's words and with its date.

The owner's words are whole only on the turn they arrive: a context-compressing proxy, a compaction or a shell read of a transcript can silently rewrite earlier turns. Two rules keep the log faithful on any machine and proxy setting:

- **Log in the turn it arrives:** write the decision in the same turn as the message carrying it, before doing anything else with the message.
- **Verify later quotations from the file:** check any later quotation of the owner's words, in an entry, brief, record or report, against the session transcript file read with the runtime's file-read tool, which the proxy protects. Never quote from recall or from shell output such as `cat` or `grep`, which it does not protect.

Write each entry by hand, and commit and push the change document under [Committing the package](standard-coordination.md#481-committing-the-package).

- A change document's entries are the work's working record until the change closes, not a Decision Record. Each entry is classed under [decision classes](#412-decision-classes) and homed under the [life cycle](#413-decisions-life-cycle), so nothing durable lives only in the package.
- The run side, that the session logs the owner's decisions and no background agent does, is the `ki-delegation` [decisions log](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#47-decisions-log)'s.

Sources: DECISION-NO-NUMBER, LOG-NO-LOSS, OLD-SHAPE-HOMES and FOCUS-ROWS in [the decision register](sources.md#3-decisions).

#### 4.1.2 Decision classes

Every entry is one of four classes, and its class sets its home.

| Class | What it is | Home |
| --- | --- | --- |
| Operational | Approves or steers one piece of work: a push, a tidy, an adoption, a release. Most entries | The record or commit it drove; where there is none, the entry itself until the work finishes |
| Rule | Changes how work is done from now on | The skill standard owning the practice, through a record in the owning repository, or root `AGENTS.md` for a repository-local convention |
| Standalone | Durable rationale or authority a reader needs without the package: a structural or policy choice | A Decision Record, amended in place where one already owns the concern |
| Held | Open, or deferred to a later wave | Its question in the change document's Open section, under its tag, until it resolves into another class |

What is not a decision is not logged: a relay from other work is a receive, an instruction to other work is a send, and an operational event such as a push, a restart or a drain is a move. Those are commits.

**Record threshold.** A record opens only for a product or standard change that needs the owner's acceptance. Operational work runs on its change document's entries, the brief, the report and Git, and opens no record. `ki-work-roadmap`'s graduation test sets a due record's shape; this threshold says whether one is due.

Sources: DECISION-CLASSES and RECORD-THRESHOLD in [the decision register](sources.md#3-decisions).

#### 4.1.3 Decisions life cycle

An entry stays in its change document while the change is open; when the change closes, each entry goes to its durable home and the change document is deleted, under the `ki-work-package` [change documents](../../ki-work-package/references/standard-work-package.md#46-change-documents) rule. At each mark, check each entry of every change document against its durable home, under the Work Process note's Decisions life cycle:

- **homed** when a standard, skill, note, record, Decision Record or commit wholly carries it; it needs nothing more, and goes with its change document;
- **pointed** when it still governs live work whose home is elsewhere: the tag, the owner's date and a link carry it, and when the change closes they move to the home of the live work it governs;
- **kept** otherwise, and its change document stays open. A standing grant not yet revoked, such as an Orca opt-in or a listening request, is kept; a grant scoped to its session is not standing and is not kept once the session ends. A standalone entry with no Decision Record yet is kept, and `_index.md`'s Held carries it as `homeless: <TAG>`, so the Summary shows it, until a Decision Record takes it.

Who homes each class:

- operational: the work it drove, through `ki-work accept` or the commit;
- rule: the delivery that changes the standard;
- standalone: the Decision Record's author;
- held: whoever homes the class it resolves into;
- anything left at [Finishing Project work](standard-mark.md#45-finishing-project-work): the coordinator. A conversational session homes at its recap.

The work's change documents are its one record of decisions for as long as each is open: successive sessions share them, and they stay in the package, not beside the Project note. A design loop's answers to its report's tagged decisions are entries in the change document the loop designs, each logged in the turn it arrived.

#### 4.1.4 Change documents

<a id="design-notes"></a>A design is written as a change document, under the `ki-authoring` [change format](../../../keystone/ki-authoring/references/standard-formats-change.md), and what the change agrees stands in a design document under the [design format](../../../keystone/ki-authoring/references/standard-formats-design.md), which only later change documents change. Change documents and the working material beside them, options papers, mocks, loop reports and their stage decisions, go to the package of the work whose concern they design: change documents at its top, or in the sub-package of the strand they serve, and the working material in the run packet until a change document carries what it settles, under the `ki-work design` standard and the `ki-work-package` [closed list](../../ki-work-package/references/standard-work-package.md#43-the-shape). No `design/` folder sits under `Streams/`, which holds only definitions and records. Design work with no coordinating work of its own takes an ad hoc package.

- The `ki-work design` [artefact home](../../../keystone/ki-work/references/standard-work-design.md#41-artefact-home) owns a change document's life cycle, draft, under review, graduated or deleted, its graduation, and the rule that nothing cites a deleted document.
- The `ki-work-package` [closed list](../../ki-work-package/references/standard-work-package.md#43-the-shape) sets what a package and its sub-packages may hold: `_index.md`, change documents and sub-packages.
- This standard reviews the change documents at each mark, under [Pruning the package](standard-mark.md#43-pruning-the-package), and resolves them before Project work finishes.

Sources: DESIGN-RETENTION, DOC-TYPES and STD-BASE in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)
