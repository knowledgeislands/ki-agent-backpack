---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:29:53Z
ki-refresh: external-spec · monthly
---

# Sources — where the Orca delegation standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the Orca delegation standard](standard-orca-delegation.md) and [its migration file](standards-orca-delegation-migration.md).

[Back to contents](#contents)

## 2. Outside sources

Orca's own command help and bundled skill govern the commands; the trial log governs what is proved, and the launcher proposal informed the draft.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Orca][orca] `orca orchestration` command help, version 1.4.245 | `run-create`, `worker-start`, `worker-list`, `worker-show`, `worker-read`, `send`, `check`, `worker-release`, `worker-stop` and `run-use` | 2026-11-01 |
| Orca's bundled `orchestration` skill and its `recovery-and-cleanup` reference, version 1.4.244 | Worker settlement, retention and release | 2026-10-31 |
| Orca trial log, `ki.prj.orca-evaluation` in Knowledge Islands Principal | Proved behaviour, gotchas and open questions | 2026-11-01 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| Orca launcher proposal, `ki.prj.orca-evaluation` in Knowledge Islands Principal | Proposed rules, settled by Kris in `ki.reg.guilds` on 7 November 2026 | 2026-11-07 |

[Back to contents](#contents)

## 3. Decisions

Kris's decisions behind the adapter as a whole; each rule names its own ground beside it in the standard.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ORCA-SKILL-NOW a) | Write the Orca skills now | 2026-11-01 | [4.1](standard-orca-delegation.md#41-evidence-and-status) | taken |
| ORCH-NAME-DISPATCH a) | Name the adapter `ki-delegation-orca` | 2026-11-01 | [4.1](standard-orca-delegation.md#41-evidence-and-status) | taken |
| MIGRATION-OVERLAY | Interim rules and the next trial's tests live in the migration file, so the standard describes only the final state | 2026-11-07 | [the migration file](standards-orca-delegation-migration.md) | taken |
| ONE-LAUNCHER | Closed with no rule | 2026-11-07 | [4.2](standard-orca-delegation.md#42-when-orca-launches) | closed |
| RUN-HANDOVER b) | Test `run-use` handover in the next trial | 2026-11-07 | [the migration file](standards-orca-delegation-migration.md) | taken |

The other answers of 7 November 2026, each option a), are named beside the rules they back: ORCA-SKILL-KIND, CLOSEOUT-STRIKE, ONE-LAUNCHER-UNIT, OUTLIVE, PROMPT-RENDER, HEARTBEAT-ACK, STOP-VERB, QUEUE-PACE, REPORT-HOME, WORKER-SURVIVAL, DELIVERY-REPLAY, OWNER-ASK, ADAPTER-MERGE, TRIAL-ASK, TRIAL-PRACTICE, RUN-RECOVERY and TRIAL-PUBLISH.

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Agentic systems guild's review, from the Cairn summit's change 10, brought the files into the formats: `standards-orca-delegation.md` was renamed `standard-orca-delegation.md` and reshaped, its rules unchanged under numbered sections, and this file took the sources format, with the launcher proposal as advisory. The migration file keeps its name under OVERLAY-NAME and only its links changed. No rule changed and no outside source was refreshed.

2026-11-10: `ki agent`'s removal in `tools-ki` v0.15.0 applied under `agora.sop.main`: outside Orca a session delegates to its own agent host's subagents; Survival and its interim rule no longer name `ki agent`, so a run that must outlive its coordinator goes to Kris until an agent host is proved; a queued run without a live parent waits for a live session; the report path is the brief's; and the Nesting gotcha goes. No external source refreshed.

2026-11-07: Kris's answers in `ki.reg.guilds` applied by run `orca-land`: ORCA-SKILL-KIND, CLOSEOUT-STRIKE, ONE-LAUNCHER-UNIT, OUTLIVE, PROMPT-RENDER, HEARTBEAT-ACK, STOP-VERB, QUEUE-PACE, REPORT-HOME, WORKER-SURVIVAL, DELIVERY-REPLAY, OWNER-ASK, ADAPTER-MERGE, TRIAL-ASK, TRIAL-PRACTICE, RUN-RECOVERY and TRIAL-PUBLISH each took option a), RUN-HANDOVER took b), and ONE-LAUNCHER closed with no rule. Settled rules moved into the standard; interim rules and the next trial's tests moved into the migration file under MIGRATION-OVERLAY. The Paperclip sibling was dropped, Paperclip having been purged. The Orca command help was not re-read.

2026-11-01: first draft under ORCA-SKILL-NOW a) and ORCH-NAME-DISPATCH a), both decided on 1 November 2026. Every rule was carried from a statement the launcher proposal marked proved, with its trial-log source, or designed elsewhere, with its owner; statements marked proposed became open points. The command help was read by the proposal's author on sol on 1 November 2026 and was not re-read for this draft.

**Watching:**

- The Orca command help, last read 2026-11-01 at version 1.4.245, is past its monthly cadence.

[Back to contents](#contents)

[orca]: https://github.com/stablyai/orca
