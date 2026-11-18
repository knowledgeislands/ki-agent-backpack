---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:43:37Z
ki-status: in force
---

# Work design standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Artefact home](#41-artefact-home)
  - [4.2 Stage contracts](#42-stage-contracts)
  - [4.3 Rollout hand-off](#43-rollout-hand-off)
  - [4.4 Stops](#44-stops)

## 1. Introduction

This standard was published under the skill name `ki-design-loop` until 14 October 2026, when the skill became `ki-work design` under Kris's naming decision for the change-management design ("LOOP-NAME - `ki-work design`"); the method is still called a design loop.

The loop shapes one subject - a Project, a theme, or a cross-cutting model that precedes its Project - from the owner's proposal to approved decisions and a rollout of ordinary work records. It begins before any record exists and ends when the rollout records are captured and the pilot is selected. The records then follow `ki-work plan`, `ki-work implement` and `ki-work accept` as usual, delivered in frozen waves only inside an unattended window under `ki-coordination`.

The loop fixes independence and diversity, not a roster: no stage requires a particular model, vendor or runtime.

The decisions behind these rules are in the [sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

The design loop, from the owner's proposal to a rollout of work records.

### 2.1 In scope

- Where a design and its working material live, and when they go.
- The contract of each stage: brief, reviews, merged report, decisions and rollout.
- The hand-off of the rollout to the other subcommands.
- When the loop stops.

[Back to contents](#contents)

### 2.2 Out of scope

- Delivering the rollout records: `ki-work plan`, `ki-work implement` and `ki-work accept`.
- The change and design formats: `ki-authoring`.
- Decision Records: `ki-decision-records`.
- Frozen waves and unattended windows: `ki-coordination`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Design loop** | The method that shapes one subject, a Project, a theme or a cross-cutting model, from the owner's proposal to approved decisions and a rollout of work records. **Standard:** this one, [1](#1-introduction) |
| **Merged report** | The orchestrator's settlement of the reviews on cited evidence, with the decisions put to the owner. **Standard:** this one, [4.2](#42-stage-contracts) |
| **Graduation** | A change document leaving once every decision it carried has a durable home, deleted in the same change. **Standard:** this one, [4.1](#41-artefact-home) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Artefact home

A design is working material of the work whose concern it shapes, under the [Work Process](https://github.com/knowledgeislands/ki-principal/blob/main/Pillars/Philosophy/Model/Processes/Work%20Process/Work%20Process.md). Name that work, by its id, in the brief before any other work: the Project work `<territory>.<project>` for a Project's design, or the territory work `<territory>` for a new Project, a theme or a cross-cutting model that no Project holds yet.

- **Design home.** The design is a change document in that work's package, `work/<territory>/<id>/NN-<slug>.change.md` in the Cairn store, as Kris set under OLD-SHAPE-HOMES a on 14 November 2026: "briefs and reports go into wherever they need to go into". The merged report is written into it, and the owner's answers are recorded in it, each where it belongs, keyed by the report's decision tags. The brief and each review are a run's brief and reports: they live in the run packet, `$TMPDIR/ki-agents/<run>/`, under the `ki-delegation` [run packet](../../../agentic-systems/ki-delegation/references/standards-background-runs.md#run-packet), sharing one descriptive slug prefix such as `roadmap-model-brief.md` and `roadmap-model-review-fable.md`, until the merged report has homed them. Options papers, mocks and diagram sources wait there too until the change document carries what they settle; the `ki-work-package` [closed list](../../../work/ki-work-package/references/standard-work-package.md#43-the-shape) lets a package hold only its `_index.md`, change documents and sub-packages, so no `design/` folder sits in a package and scratch scripts and screenshots stay in temporary output. The package's `_index.md` Now names the design while it is open.
- **Report diagrams.** A design report carries each diagram as an inline text diagram or as a static SVG exported under `ki-diagrams` in its `ki` or `light` form, never the dual-theme form, so that it renders legibly in any previewer. The SVG is committed beside the subject's Project note, in the folder of the note it supports as `ki-repo-kb` sets, and the report links to it there, so it outlives the report. Until the subject has a Project note, the report carries its diagrams as inline text diagrams.
- **Nothing under `Streams/`.** No `design/` folder sits anywhere under `Streams/`, and no Project or theme note points into a package, under the [Project registry standard](../../../keystone/ki-work/references/standard-project-registry.md). The Streams checker fails a `design/` folder there, and its papers move into a change document in the work's package at the territory's migration.
- **Change document, then design document.** Design work is written as a change document, under the `ki-authoring` [change format](../../../keystone/ki-authoring/references/standard-formats-change.md). What the change agrees stands in a design document, `<slug>.design.md`, under the [design format](../../../keystone/ki-authoring/references/standard-formats-design.md), in the place `ki-design` sets, and only later change documents change it. An older `.design.md` written as a design note is brought to the design format by its owner, as the Cairn summit's change 16 sorts Cairn's.
- **Temporary.** A change document is a draft, under review, graduated or deleted. It graduates when every decision it carried has a durable home - a Decision Record where a decision changed, the Project note, and the standards and records the rollout touches - and is deleted in the same change, so that nothing cites a deleted document: a work record cites a change document only while it exists, and by `ready` the record's `Context` quotes what it needs in words; a Decision Record never cites a change document. This standard owns graduation; `ki-coordination` reviews the package's change documents at each mark and resolves them before Project work finishes. Once every change document has graduated and been deleted, Git history holds the rest.
- **Decision Record only on change.** The loop produces a Decision Record under `ki-decision-records` only when it changes a decision. Where an existing record owns the concern, refine that record in place; otherwise write one new record. The record states the consolidated current decision and quotes any authority grant; it never links or cites the design artefacts, which are deleted.
- **Commit as produced.** From the merged report onward, write and commit what each stage settles in the change document when it is produced, never gathered later; the brief and reviews stay in the run packet until the report homes them. A run's state folder keeps only runtime material: agent prompts, pid, status and report files.
- **Registry link.** Once a Decision Record carries the outcome, the Project or theme note links that record, under the [Project registry standard](../../../keystone/ki-work/references/standard-project-registry.md).

`resume <id>` reads the design's change document, and the run packet while one is open; it never relies on a packet for anything the change document should carry.

[Back to contents](#contents)

### 4.2 Stage contracts

Start each artefact from its template in `assets/`.

- **Brief.** The orchestrator writes the problem, the owner's proposal verbatim, the facts already established with their sources, and its own numbered reflection. Each numbered point is one claim a reviewer can agree with, differ from or extend. The brief states each earlier decision as a dated fact, what was decided, by whom and when, never as a premise, and keeps the template's **Independence** line, which `ki-coordination` generates from its [review-independence source](../../../work/ki-coordination/references/standards-coordination.md#generated-surfaces) so that it cannot be left out.
- **Reviews.** At least two independent reviews, on different models or runtimes, each read-only. A review started in a new agent session, rather than as a background run, is briefed with the thread line its session takes and told to rename itself to it as its first act, under `ki-coordination`'s [Opening work](../../../work/ki-coordination/references/standards-opening.md#opening-work), as Kris took OPENER-NAME a on 14 November 2026. The same brief tells it to delegate its reading to its agent host's own subagents, stay responsive while they run, and check what they return before posting its review, as Kris took OPENER-DELEGATE a that day. A reviewer forms its own view before it reads any other review, fact-checks the brief against the sources and marks Agree, Differ or Add against every numbered point, with evidence for each Differ. It is free to challenge any earlier decision the brief names, listing each under **Challenges** with the decision's words and date and its reason, or `None`. Kris asked on 30 October 2026, under REVIEW-INDEPENDENCE, that blind reviews "must be able to challenge" earlier decisions, and took REVIEW-CHALLENGE a) under ACCEPT-BY-CRITERIA on 31 October 2026.
- **Merged report.** The orchestrator settles disputes on cited evidence and the governing standards, never by counting votes. The report gives a summary, corrections to the brief, the proposed model, an agree-and-differ table, a rollout plan, at most about eight decisions each with options and a recommendation, and a changes-after-review log. Anything the evidence cannot settle goes to the owner as a decision. The report lists every review's challenges under **Challenges**, each put to the owner as a decision with an option to revisit the earlier one; the orchestrator never settles a challenge itself.
- **Decisions.** The owner's own words, keyed by the report's decision tags, kept verbatim in the change document, each where it belongs. It records any authority grant with its completion target, and the push and prune scope. Where the owner's words differ from the report, the decisions win.
- **Rollout.** Records are captured through `ki-work next` from the decisions. One pilot is delivered before any parallel wave. The pilot's lessons are written into each wave's brief before it starts, and authority is exercised through a frozen wave under `ki-coordination` or through `ki-work accept`, quoting the grant.

Decision tags follow Kris's 14 October 2026 rule, carried by the [coordination decisions life cycle](../../../work/ki-coordination/references/standards-decisions.md#decisions-life-cycle): entries carry no running numbers. The brief's reflection points and the reviews' references to them remain numbered claims.

[Back to contents](#contents)

### 4.3 Rollout hand-off

- `ki-work next` captures each record the decisions call for, stating the relevant decisions in its Context and naming the Decision Record where one exists, and selects the pilot.
- `ki-work plan` readies each record against the decisions; a record that needs a choice the decisions did not make stops and returns it to the owner.
- `ki-coordination` delivers each frozen wave of independent Ready records under the grant in its change document; `ki-work accept` closes records under the same grant where it names closure.
- Delegation to background agents follows the delegation contract in force; a high-risk handoff uses `ki-delegation`'s packet when that skill is selected.

[Back to contents](#contents)

### 4.4 Stops

Stop and report when the subject has no owning work or no package to hold its design, the owner's proposal is missing, fewer than two independent reviews exist, or a decision would be made on the owner's behalf. The loop never pushes, prunes, releases or accepts on its own authority.

[Back to contents](#contents)
