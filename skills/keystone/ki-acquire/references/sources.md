---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T05:50:00Z
ki-refresh: canonical · on-change
---

# Sources — where the acquisition standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources and decisions behind [the common acquisition standard](standard-acquisition.md), [the agent-session acquisition standard](standard-agent-session-acquisition.md), [the Pulse standard](standard-pulse.md) and the generated [rubric](rubric.md). The skill is canonical: review it alongside material changes to the common capture contract. Mode REFRESH reads this file, compares the durable acquisition model and actual capture practice with the standards, and records what it checked in [Last review](#4-last-review). The `ki-acquire-chatgpt` and `ki-acquire-granola` standards own provider fidelity, capability limits and separately authorised mutations, and are reviewed with their own skills.

[Back to contents](#contents)

## 2. Outside sources

The Knowledge Islands model and the in-house repositories whose published text the standards follow.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ACQ-PROCESS — [Knowledge Islands Acquisition Process](https://github.com/knowledgeislands/ki-principal/blob/main/Pillars/Philosophy/Model/Processes/Acquisition%20Process/Acquisition%20Process.md) | The durable lifecycle of acquisition and its rationale | Not recorded |
| ACQUIRE — Acquire's README, AGENTS.md and CAPTURE.md, its intake work `personal.reg.assistant-terra`, formerly `personal.reg.acquire-intake`, and that package's design note `design/acquire-structure.md` | Kris's decisions of 30 October to 1 November 2026 on the port and staging model: the `captured/`, `context/` and `curated/<territory>/<island>/` layout, incremental curation, front-matter card origins, cross-territory copies, meetings as sources, lean captures, held historical captures and future ideas. Acquire's own text is the authority for them for now (ACQ020-OWNER), and Acquire intake is the primary source for the acquisition structure (ACQUIRE-STRUCTURE-SOURCE) | 2026-11-01 |
| MUNINN — The Inbox's `ki-muninn` README, in krisb/inbox | Executable Granola and ChatGPT acquisition, outside the backpack | 2026-11-05 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| TOOLS-KI — tools-ki commit `26c754f3`, and its acquisition specification under ACQUIRE-019 | The Granola ledger's removal, and the capture as the only record | Not recorded |
| TOOLS-KI-ACQUIRE — tools-ki commit `4faf9724` | `ki acquire` removed from tools-ki on 5 November 2026, its acquisition moving to `ki-muninn` | 2026-11-05 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ACQUIRE-019 | The capture package is the only record of what was acquired: no ledger, checkpoint, journal or intake receipt, and dispatch is a Git move into each island's `+/_ACQUIRED/` with no dispatch ledger or return route; recorded in tools-ki's acquisition specification. | Not recorded | [4.1](standard-acquisition.md#41-the-capture-package); its dispatch half the Inbox's `docs/guides/operator/dispatch.md`, under CURATION-HOME | In force |
| CAPTURE-LEAN | A short note goes in the capture's README rather than a separate verbatim text file, and committed originals take Git's hashes as their checksum, with no `original.txt` or `SHA256SUMS`; Kris, in Acquire. | 2026-10-31 | [4.4](standard-acquisition.md#44-preservation-and-originals) | In force |
| ACQ020-MODEL | A port is a capture point and may also be a knowledge-capture staging area, where captured meaning is curated into cards before it is reconciled into the owning repositories' graphs, and Acquire is for now a holding area with dispatch on hold; Kris, in Acquire, taken together. | 2026-10-31 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| ACQ020-KNOWLEDGE | A port is a capture point and may also be a knowledge-capture staging area, where captured meaning is curated into cards before it is reconciled into the owning repositories' graphs, and Acquire is for now a holding area with dispatch on hold; Kris, in Acquire, taken together. | 2026-10-31 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| GOAL-HOLDING-AREA | A port is a capture point and may also be a knowledge-capture staging area, where captured meaning is curated into cards before it is reconciled into the owning repositories' graphs, and Acquire is for now a holding area with dispatch on hold; Kris, in Acquire, taken together. | 2026-10-31 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| ACQ020-RETIRE | Curation is incremental: each curated item is deleted from its capture in the commit that curates it, a dropped item in its own commit, and an empty capture is deleted; Kris, in Acquire. | 2026-10-31 | The Inbox's `docs/guides/curation.md`, under CURATION-HOME | In force; homed in the Inbox |
| CARDS-NO-SOURCE-LINKS | A card never links to a capture, because the capture is transient; Kris, in Acquire. | 2026-10-31 | The Inbox's `docs/guides/curation.md`, under CURATION-HOME | In force; homed in the Inbox |
| ACQ020-PROVENANCE | A card has no origin section in its body; where its origin would help a later check, its front matter gives it in one plain `origin:` line, otherwise it has none; Kris, in Acquire, taken together. | 2026-10-31 | The Inbox's `docs/guides/curation.md`, under CURATION-HOME | In force; homed in the Inbox |
| CARDS-ORIGIN | A card has no origin section in its body; where its origin would help a later check, its front matter gives it in one plain `origin:` line, otherwise it has none; Kris, in Acquire, taken together. | 2026-10-31 | The Inbox's `docs/guides/curation.md`, under CURATION-HOME | In force; homed in the Inbox |
| ORIGIN-FRONTMATTER | A card has no origin section in its body; where its origin would help a later check, its front matter gives it in one plain `origin:` line, otherwise it has none; Kris, in Acquire, taken together. | 2026-10-31 | The Inbox's `docs/guides/curation.md`, under CURATION-HOME | In force; homed in the Inbox |
| CROSS-TERRITORY-COPIES | A card defines a concept once within a territory, and the same card may also sit in another territory where it applies; Kris, in Acquire. | 2026-10-31 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| ACQ020-HISTORY | Captures older than 31 October 2026 are held and worked back one day at a time, newest first, without bulk moves; Kris, in Acquire. | 2026-10-31 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| ACQ020-FUTURE | A future idea curated from a capture goes into the graph as a future concept, kept distinct from what is being done now, and not onto a roadmap; only an idea being enacted now becomes work; Kris, in Acquire, taken together. | 2026-10-31 | The Inbox's `docs/guides/curation.md`, under CURATION-HOME | In force; homed in the Inbox |
| IDEAS-IN-GRAPH | A future idea curated from a capture goes into the graph as a future concept, kept distinct from what is being done now, and not onto a roadmap; only an idea being enacted now becomes work; Kris, in Acquire, taken together. | 2026-10-31 | The Inbox's `docs/guides/curation.md`, under CURATION-HOME | In force; homed in the Inbox |
| ACQUIRE-STRUCTURE-ALIGN | Acquire has `captured/`, `context/`, `curated/` and `actions/`; `context/<territory>/` is a routing graph joined by typed links, and nothing under `captured/` links into `context/`; Kris, in Acquire. | 2026-11-01 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| RESTRUCTURE | The staging area is `curated/<territory>/<island>/`, one island being one repository, each following its island's own shape; Kris, in Acquire, with ISLAND-SHAPE-AND-MEETINGS and SCAFFOLD. | 2026-11-01 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| SCAFFOLD | Every territory principal has a scaffolded skeleton of its zones, each with a README saying what lands there; other islands get folders only when needed; Kris, in Acquire, with RESTRUCTURE and ISLAND-SHAPE-AND-MEETINGS. | 2026-11-01 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| ISLAND-SHAPE-AND-MEETINGS | A staged file's path follows its island's zones; a meeting's decisions and concepts are curated into cards, its attendance and actions staged under `Calendar/` and its work under `Streams/`: "if you bring in a meeting and there's some decisions made or some concepts, then there's no reason why they can't be pointers into the durable knowledge. The thing that's changed or stays in calendars is who attended, what the actions were". | 2026-11-01 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| MEETINGS-PROVENANCE | A meeting is a source, not a node in the graph: "in reality meetings are not that useful to keep. They're more things that help with the provenance of certain information, but they're not part of the knowledge graph". | 2026-11-01 | The Inbox's `docs/guides/curation.md`, under CURATION-HOME | In force; homed in the Inbox |
| HOLDING-SCOPE-CARDS | Cards mature in the staging graph with no rush to migrate, moving into the islands once they conform or earlier when a card's home is plainly decided, and the backlog is played in reverse date order: "I've got no wish to rush migrating knowledge out of the repository", and "keeping knowledge in the graph here right now whilst we're trying to play through the backlog ... in reverse chronological order, you can see where things have been superseded much more easily." | 2026-11-01 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| ACQUIRE-HELD-RENAME | Held material awaiting incorporation is in a top-level `_held/`, renamed from `_review` on 1 November and moved out of `captured/` on 2 November, which the port's store mirrors. | 2026-11-02 | [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| STORE-RENAME | The assistant's OneDrive store is renamed from `sources-acquire` to `sources-assistant`. | 2026-11-02 | [4.6](standard-acquisition.md#46-staging-and-curation) | Superseded by INBOX-RENAME |
| ATER-027 | `ki acquire` leaves tools-ki and acquisition moves to the assistant's `ki-muninn`, which reads `[muninn.<source>]` settings; the common method stays here; at Kris's word, from `personal.reg.assistant-terra`. | 2026-11-05 | [4.2](standard-agent-session-acquisition.md#42-source-and-capture) | In force |
| INBOX-RENAME | The assistant repository becomes the Inbox: `krisb/assistant` is now `krisb/inbox`, and its store `sources-inbox`: "Do full rename to inbox now and coordinate that". | 2026-11-06 | [4.2](standard-agent-session-acquisition.md#42-source-and-capture), [4.6](standard-acquisition.md#46-staging-and-curation) | In force |
| PROCESS-SUBCOMMANDS | The `ki-pulse` process skill folds into this skill as its PULSE mode, its standard becoming the Pulse standard unchanged in substance, in the Cairn summit's change 25 (now 14). | 2026-11-14 | [the Pulse standard](standard-pulse.md) | In force |
| CURATION-HOME | Kris, in the Cairn summit's change 20, learnings: acquisition's curation belongs to the Inbox project, personal.inbox, led by Wicket, and `ki-knowledge-graph` keeps only the graph's structure. The Inbox holds capture-to-card curation, its pace, no links into captures and meetings as sources in `docs/guides/curation.md`, and dispatch in `docs/guides/operator/dispatch.md` (krisb/inbox `8f5bcda6`). | 2026-11-19 | [4.6](standard-acquisition.md#46-staging-and-curation), [4.7](standard-acquisition.md#47-authority) | In force |

[Back to contents](#contents)

## 4. Last review

On 19 November 2026, under CURATION-HOME, the curation and dispatch rules left this skill for the Inbox: the common acquisition standard's 4.6 lost its curation, no-links and meetings paragraphs, its 4.7 Dispatch and authority became 4.7 Authority, keeping only capture authority, each with a pointer to the Inbox, and rubric item ACQUIRE-6 was retired, with ACQUIRE-5 no longer judging dispatch. The decisions those paragraphs carried stay in force, homed in the Inbox; card origins and future ideas also stay in `ki-knowledge-graph`'s card rules. No outside source was refreshed.

On 18 November 2026 the Keystone guild's review, in the Cairn summit's change 10, brought the skill's files into `ki-authoring`'s formats: the three plural standards were renamed `standard-acquisition.md`, `standard-agent-session-acquisition.md` and `standard-pulse.md` and given the standard format's sections, their rules moved unchanged under numbered subsections, and this file took the sources format, its decisions gathered from the dated reviews below into [Decisions](#3-decisions). No rule changed; the curation questions held for the Acquire guild's review, CURATION-OWNER and ACQUIRE-SPLIT, were left as they stand. No outside source was refreshed.

On 14 November 2026, under PROCESS-SUBCOMMANDS and RENAME-NOW in the Cairn summit's change 25 (now 14), the `ki-pulse` process skill folded into this skill as the PULSE mode: its body became [the pulse reference](mode-pulse.md) and its standard [the Pulse standard](standard-pulse.md), unchanged in substance, and this skill now leads the Acquire guild. No external source was refreshed.

On 6 November 2026, under INBOX-RENAME from `personal.reg.inbox-terra`, at Kris's word ("Do full rename to inbox now and coordinate that"), the assistant repository became the Inbox: `krisb/assistant` is now `krisb/inbox`, its packages `personal.reg.inbox-terra` and `personal.reg.inbox-sol`, and its store `sources-inbox`. Live wording here follows; older lines below keep the names they had.

On 5 November 2026, under ATER-027 from `personal.reg.assistant-terra`, at Kris's word, `ki acquire` left tools-ki in `4faf9724` and acquisition moved to the assistant's `ki-muninn` (krisb/assistant, `packages/ki-muninn/`), which reads `[muninn.<source>]` settings and refuses settings left in `[skills.ki-acquire-<source>]`. The common method stays here; the provider skills now point their how-to at `ki-muninn`, and no skill was retired or reduced to a pointer. `ki muninn` will run it once tools-ki's extension mechanism, KI-TOOL-KI-CLI-176, lands.

On 2 November 2026, under STORE-RENAME relayed by `personal.reg.assistant-terra`, Kris renamed the assistant's OneDrive store from `sources-acquire` to `sources-assistant`, and the store's name was updated throughout.

On 2 November 2026, under an ACQUIRE-HELD-RENAME update from `personal.reg.assistant-terra`, held material moved from `captured/_held/` to a top-level `_held/`, which the `sources-assistant` store mirrors, and the Granola route for mixed-territory and unmapped meetings moved to `_held/granola/` or `_held/<territory>/granola/`. The tools-ki importer was asked to write there; until it does, the assistant moves its `_review` packages by hand.

On 1 November 2026, under ACQUIRE-STRUCTURE-ALIGN-FINDINGS and ACQUIRE-HELD-RENAME from Acquire intake, now `personal.reg.assistant-terra`, the names were brought to Acquire's final structure: `processed/` became `curated/`, `captures/_review/` became `captured/_held/`, holding material awaiting incorporation, and `context/` was described as the routing graph with its one-way link rule. The Granola standard's mixed-territory and unmapped route moved to `<capture_root>/_held/granola/`; tools-ki still writes `_review` until its importer changes, and Acquire moves any such package by hand meanwhile.

On 1 November 2026, under ACQ-TEXT-RECHECK in Ways of working, the standard was compared with Acquire's published text once Acquire had restructured, and its wording corrected to match, quoting Acquire's decisions: `knowledge/` became `processed/<territory>/<island>/`, mirroring each island's own zones with every principal scaffolded (RESTRUCTURE, ISLAND-SHAPE-AND-MEETINGS, SCAFFOLD); a card's origin is one optional front-matter line, never a body section (ORIGIN-FRONTMATTER); a concept is defined once within a territory, and a card may sit in several (CROSS-TERRITORY-COPIES); a meeting is a source, its concepts curated into cards, its record into Calendar and its work into Streams (MEETINGS-PROVENANCE, ISLAND-SHAPE-AND-MEETINGS); Git's hashes serve as the checksum of committed originals (CAPTURE-LEAN, dated 31 October rather than 30); and delivery is acceptance. The 1 November holding wording (HOLDING-SCOPE-CARDS) and the dispatch hold were kept. The design note's later phases, staged Streams drafts and Calendar records with a receiver-side compare and merge, are not yet decided and are not in the standard.

On 1 November 2026, under HOLDING-SCOPE-CARDS in Ways of working, Kris confirmed: "I've got no wish to rush migrating knowledge out of the repository", and "keeping knowledge in the graph here right now whilst we're trying to play through the backlog ... in reverse chronological order, you can see where things have been superseded much more easily." The holding wording changed from "nothing migrates out" to a maturing graph of knowledge cards that migrate into the islands once they conform to the standards being built, or earlier when a card's home is plainly decided. The dispatch hold on captures was kept.

On 31 October 2026, under CAPTURE-SKILL in Ways of working, the contract was brought into line with Kris's Acquire decisions of 30 and 31 October: a port may also be a knowledge-graph staging area, and Acquire is for now a holding area with dispatch on hold (ACQ020-MODEL, ACQ020-KNOWLEDGE, GOAL-HOLDING-AREA); curation is incremental, deleting each curated or dropped item from its capture and each empty capture (ACQ020-RETIRE); captures are transient and cards carry plain-words origins with no capture links (CARDS-NO-SOURCE-LINKS, ACQ020-PROVENANCE); older captures are worked back one day at a time (ACQ020-HISTORY); captures are lean; and future ideas become future concepts in the graph (ACQ020-FUTURE, IDEAS-IN-GRAPH). Rubric item ACQUIRE-6 was added. The decisions were read as relayed in Ways of working's messages, because Acquire's published text did not yet carry them.

Before that, on 20 October 2026, the contract was cut to the owner's simplified acquisition model: no ledger, checkpoint, journal or intake receipt; the capture package is the only record; dispatch is a Git move into each island's `+/_ACQUIRED/`, with no dispatch ledger or return route. Faithful preservation, honest coverage, exact required originals and separate authority for provider mutation were kept. No external provider capability was refreshed.

[Back to contents](#contents)
