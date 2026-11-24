---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: canonical · quarterly
---

# Coordinating-work sources

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house sources](#211-in-house-sources)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind the coordinating-work standard: [the core](standard-coordination.md) and its purpose files, [reporting](standard-reporting.md), [reply format and banner](standard-report-forms.md), [queries](standard-queries.md), [holds](standard-holds.md), [unattended windows](standard-unattended.md), [listening and host sync](standard-listening.md), [territory work](standard-territory.md), [opening and naming](standard-opening.md), [bootstrap and re-anchoring](standard-bootstrap.md), [messages and surfaces](standard-messages.md), [decisions and change documents](standard-decisions.md), [mark, tidy and finishing](standard-mark.md) and [sync](standard-sync.md), with the [migration file](migration-coordination.md). The standard is owned in house, so its sources are the house's own practice and skills, with one advisory outside source.

[Back to contents](#contents)

## 2. Outside sources

The in-house practice and skills the standard follows, and one advisory protocol.

### 2.1 Authoritative

Every source the standard follows is in-house.

#### 2.1.1 In-house sources

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Knowledge Islands coordinating-thread practice | The responsive coordinator and its three rules, the counted turn budget and self-check, coordinating-thread practices, the closing banner with its one live frame, its REST and BUSY list beneath, the DRAINED frame with its list and the drain resume line, the DONE frame and the resume line, draining a thread and the drain report, the Summary, recap since the mark and full summary, the three thread types, the state-of-play thread and coordination threads with their openers and bootstrap, directions from the state-of-play thread, re-anchoring after compaction, the surfaces rule and red-x recovery, the decision classes, the one list, the design-note home and Project close, parking tangents, linking records, committing the thread folder, keeping primary checkouts current and the refresh rule | 2026-11-23 |
| `ki-delegation` | The background-run contract the thread launches under and the run side of the decisions log; it adopts this standard's owner report and Needs tags by reference | 2026-11-23 |
| `ki-work-package` | The work package a session resumes from and keeps current: its `_index.md`, change documents, naming and lifecycle | 2026-11-23 |
| `ki-env-tokenomics` | The coordination model purpose a coordinating thread runs on | 2026-11-23 |
| `ki-work` | The Project registry the state-of-play thread manages and labels resolve against | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

Supporting evidence, not normative rules: an advisory source informs a rule here and is never adopted by being listed.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [Agent Host Protocol](https://microsoft.github.io/agent-host-protocol/specification/overview.html), Microsoft, v1.1.0 of 12 November 2026 | What may later replace the Agora Beacon's polling for an agent host that supports it; adoption per agent host is tracked in `ki-radar`, formerly `ki-agentic-radar` | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, checked every listed source. The in-house sources still carry what the standards take from them: the Work Process note's links into this skill all resolve, and the `ki-delegation` and `ki-work-package` rows were reworded, since `ki-delegation` now adopts this skill's owner report and Needs tags and a package's checkpoint is its `_index.md`. The Agent Host Protocol had reached v1.1.0, adding experimental windowed, flow-controlled subscriptions and per-chat providers, but its subscribe-and-push channels are unchanged and it still says nothing of replacing polling, so the standards' use of it stands.

**Watching:**

- The provisional glyphs and bracketed state words used in reports since the last refresh, still to be listed and put to the owner at the next full refresh.
- The Agent Host Protocol's experimental windowed subscriptions, and whether any agent host in `ki-radar` ships support that could replace the Cairn Beacon's polling.
- Host moves, which stay open and grant no implementation authority until they are settled with the owner:
  - how queued runs move to the new host: whether the work package carries the briefs themselves or only links to tracked brief files, and how a re-queue avoids a duplicate run if the old queue was not cleared;
  - runs that must stay on one host, such as work against a machine-local resource or a host-bound service: whether they stay queued on the old host, are held in the package with a host constraint, or block the move;
  - which closing form the session left on the old host takes, since `🏁 Finished` closes only finished work while this work continues on the new host: issued only after the handover has pushed, with no resume line, and naming the host that took the work over.

[Back to contents](#contents)
