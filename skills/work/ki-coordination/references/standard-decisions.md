---
ki-document-type: standard@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
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
    - [4.1.1 Applying decisions](#411-applying-decisions)
    - [4.1.2 Decision classes](#412-decision-classes)
    - [4.1.3 Decisions life cycle](#413-decisions-life-cycle)
    - [4.1.4 Change documents](#414-change-documents)

## 1. Introduction

This file holds how decisions are applied to change documents, decision classes, their life cycle and change documents. It extends [the core](standard-coordination.md). The sources behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How a coordinator applies the owner's decisions to change documents, classes them, sees their results land and writes designs as change documents.

### 2.1 In scope

- What an applied owner decision authorises.
- Applying each decision in the turn it arrives to the change document it belongs to.
- The four decision classes and the record threshold.
- The decisions life cycle at each mark, and who lands each class's result.
- Designs written as change documents, and where they and their working material go.

[Back to contents](#contents)

### 2.2 Out of scope

- The shape of a package and its change documents: `ki-work-package`'s [work-package standard](../../ki-work-package/references/standard-work-package.md).
- The run side of applying decisions: `ki-delegation`'s [background-run standard](../../../agentic-ecosystems/ki-delegation/references/standard-background-runs.md).
- A change document's own format: `ki-authoring`'s [change format](../../../keystone/ki-authoring/references/standard-formats-change.md).
- Pruning change documents at the mark: [mark, tidy and finishing](standard-mark.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Applied decision** | An owner decision about the work, carried as its result in the outline or Steps of the change document it belongs to, never as a log entry, a quotation or a number. **Standard:** this one, [4.1.1](#411-applying-decisions) |
| **Decision class** | One of four kinds of decision, operational, rule, standalone or held, each setting the output that carries its result. **Standard:** this one, [4.1.2](#412-decision-classes) |
| **Record threshold** | The test for opening a record: only a product or standard change that needs the owner's acceptance opens one. **Standard:** this one, [4.1.2](#412-decision-classes) |
| **Landed, live** | What the mark finds of a change document: its work has landed and its outputs carry every result it holds, so it is deleted, or not, so it stays open. **Standard:** this one, [4.1.3](#413-decisions-life-cycle) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Decisions and design

An applied, unrevoked owner decision authorises its stated scope across sessions. Ask again only for a new decision, an explicit later gate or a changed boundary. A relay is not approval, and narrower repository gates still apply.

A grant is not such a decision. A grant the owner gives within a session, such as "you can accept anything with a high confidence", covers only that session's work within its remit and lapses with the session, unless the owner says it stands; and each push that publishes needs the owner's word each time, whatever grant is in force, as the standing rules for Stoa and the live sites already require. A grant given within a session is always read within that session's remit. A decision on a stated scope, applied and unrevoked, still stands across sessions; a blanket grant does not.

The coordinator applies each owner decision that meets the threshold below to the change document it belongs to in the turn it arrives, under the [rules below](#411-applying-decisions). A record, report or banner describes a decision by what it decided and its date, never by a number.

#### 4.1.1 Applying decisions

<a id="411-decisions-log"></a>Record the result, not the discussion. When the owner decides, the coordinator applies the decision to the change document it belongs to: it changes the document's outline or Steps to carry the result, removes the question from its Open section, and then acts. The output the work produces, a skill, `AGENTS.md`, a note or the site, carries the result, and the change document is deleted once its work has landed. Git history is the only trace of the discussion: no change document, `_index.md` or skill keeps a decision log, a `Decided` section or the owner's words. A point still open, a question, gap or consequence, goes into that change document's Open section, under the `ki-work-package` [change documents](../../ki-work-package/references/standard-work-package.md#46-change-documents) rule. A decision whose area has no change document yet opens one. Decisions carry no numbers, and a prompt, brief, record, report, package file or banner describes the decision it acts under by what it decided and its date.

**The threshold:** apply the significant decisions and outcomes, those needed to pick up the work, not every minor decision or discussion point.

**In the turn it arrives:** apply the decision in the same turn as the message carrying it, before doing anything else with the message, since a context-compressing proxy or a compaction can later rewrite what the owner said.

Edit each change document by hand, and commit and push it under [Committing the package](standard-coordination.md#481-committing-the-package).

- A change document carries the work's agreed shape until its work lands; it is not a Decision Record. Each decision is classed under [decision classes](#412-decision-classes), whose class names the output that carries its result under the [life cycle](#413-decisions-life-cycle), so nothing durable lives only in the package.
- The run side, that a run applies the owner's decisions it is given and keeps no log entries, is the `ki-delegation` [applying decisions](../../../agentic-ecosystems/ki-delegation/references/standard-background-runs.md#47-applying-decisions) rule's.

#### 4.1.2 Decision classes

Every decision is one of four classes, and its class sets the output that carries its result.

| Class | What it is | Where its result lands |
| --- | --- | --- |
| Operational | Approves or steers one piece of work: a push, a tidy, an adoption, a release. Most decisions | The record or commit it drove; where there is none, the change document's Steps until the work finishes |
| Rule | Changes how work is done from now on | The skill standard owning the practice, through a record in the owning repository, or root `AGENTS.md` for a repository-local convention |
| Standalone | Durable rationale or authority a reader needs without the package: a structural or policy choice | A Decision Record, amended in place where one already owns the concern |
| Held | Open, or deferred to a later wave | Its question in the change document's Open section, under its tag, until it resolves into another class |

What is not a decision is not applied to a change document: a relay from other work is a receive, an instruction to other work is a send, and an operational event such as a push, a restart or a drain is a move. Those are commits.

**Record threshold.** A record opens only for a product or standard change that needs the owner's acceptance. Operational work runs on its change document's Steps, the brief, the report and Git, and opens no record. `ki-work-roadmap`'s graduation test sets a due record's shape; this threshold says whether one is due.

#### 4.1.3 Decisions life cycle

A decision's result stays in its change document's outline or Steps while the change is open; once its work has landed, the output carries the result and the change document is deleted, under the `ki-work-package` [change documents](../../ki-work-package/references/standard-work-package.md#46-change-documents) rule. At each mark, check every change document against the outputs its work produces:

- **landed** when those outputs, a standard, skill, note, record, Decision Record, `AGENTS.md`, the site or a commit, carry every result it holds; it needs nothing more, and is deleted;
- **live** otherwise, and it stays open. A standing grant not yet revoked, such as an Orca opt-in or a listening request, stays in the change document of the work it governs, and moves with that work when the change closes; a grant scoped to its session lapses with the session. A standalone decision with no Decision Record yet keeps its change document open, and `_index.md`'s Held carries it as `homeless: <TAG>`, so the Summary shows it, until a Decision Record takes it.

Who lands each class's result:

- operational: the work it drove, through `ki-work accept` or the commit;
- rule: the delivery that changes the standard;
- standalone: the Decision Record's author;
- held: whoever lands the class it resolves into;
- anything left at [Finishing Project work](standard-mark.md#45-finishing-project-work): the coordinator. A conversational session lands it at its recap.

The work's change documents carry its agreed shape for as long as each is open: successive sessions share them, and they stay in the package, not beside the Project note. A design loop's answers to its report's tagged decisions are applied to the change document the loop designs, each in the turn it arrived.

#### 4.1.4 Change documents

<a id="design-notes"></a>A design is written as a change document, under the `ki-authoring` [change format](../../../keystone/ki-authoring/references/standard-formats-change.md), and what the change agrees stands in a design document under the [design format](../../../keystone/ki-authoring/references/standard-formats-design.md), which only later change documents change. Change documents and the working material beside them, options papers, mocks, loop reports and their stage decisions, go to the package of the work whose concern they design: change documents at its top, or in the sub-package of the strand they serve, and the working material in the run packet until a change document carries what it settles, under the `ki-work design` standard and the `ki-work-package` [closed list](../../ki-work-package/references/standard-work-package.md#43-the-shape). No `design/` folder sits under `Streams/`, which holds only definitions and records. Design work with no coordinating work of its own takes an ad hoc package.

- The `ki-work design` [artefact home](../../../keystone/ki-work/references/standard-work-design.md#41-artefact-home) owns a change document's life cycle, draft, under review, graduated or deleted, its graduation, and the rule that nothing cites a deleted document.
- The `ki-work-package` [closed list](../../ki-work-package/references/standard-work-package.md#43-the-shape) sets what a package and its sub-packages may hold: `_index.md`, change documents and sub-packages.
- This standard reviews the change documents at each mark, under [Pruning the package](standard-mark.md#43-pruning-the-package), and resolves them before Project work finishes.

[Back to contents](#contents)
