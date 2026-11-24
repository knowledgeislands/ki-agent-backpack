---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T05:31:51Z
ki-refresh: canonical · on-change
---

# Sources — where the D12 standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the D12 standard](standard-dodecakrisis.md), [the mailbox standard](standard-mailbox.md), [the learning standard](standard-learning.md) and the generated [rubric](rubric.md). [The migration overlay](migration-dodecakrisis.md) holds what the servers and `ki-muninn` do not yet support.

Review alongside a change to the D12 card, to either mail server's protected-label or filter tools, or to `ki-muninn`'s D12 runner.

[Back to contents](#contents)

## 2. Outside sources

The Knowledge Islands card that owns the concept, and the in-house work and tools the standards graduate from or call.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| The Knowledge Islands D12 card, "D12, the Dodecakrisis", Kris's fundamental tenet of 5 November 2026, staged in Harbour's knowledge graph (krisb/ki-cairn-harbour) under `knowledge/maturation/curated/knowledge-islands/ki-principal/Pillars/knowledge-tending/` until ki-principal takes it | The concept: the twelve Ds, their names and why | 2026-11-23 |
| The D12 diagram, drawn in Kris's email-triage session of 5 November 2026 and kept beside the D12 card in Harbour (krisb/ki-cairn-harbour) as `knowledge/maturation/curated/knowledge-islands/ki-principal/Pillars/knowledge-tending/d12-dodecakrisis.svg`, now in ki-principal at `Pillars/Philosophy/Model/Processes/D12 Dodecakrisis/` | The copy in [`assets/d12-dodecakrisis.svg`](../assets/d12-dodecakrisis.svg) that the D12 standard shows | 2026-11-24 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| The Inbox's work package `personal.reg.inbox-terra`, merged into `personal.reg.inbox` on 8 November 2026 and kept in the Cairn store's `work-legacy/batch-01-initial/personal/personal.reg.inbox/` | The sorting-engine draft and the Gmail D12 design that the mailbox and learning standards graduate, with Kris's Gmail decisions of 6 November 2026 | 2026-11-23 |
| The harness work package `ki.reg.guilds`, now the Cairn store's `work-legacy/batch-01-initial/ki/ki.reg.guilds/`, its live points taken up by `ki.guilds` | The guild work that shaped the skill | 2026-11-23 |
| `mcp-gsuite` and `mcp-m365` | The mail tools D12 calls and the protected-label enforcement: the protected lists, `mcp-gsuite` `4560520` and `mcp-m365` `b9a3c15`, and `mcp-m365`'s rule, category and change tools, `7ebff50` and `4a839ec`, and `mcp-gsuite`'s metadata-only message search, `84edac8`, all of 22 November 2026 | 2026-11-23 |
| Harbour's `ki-muninn` (krisb/ki-cairn-harbour, `packages/ki-muninn/`) | D12's execution and the mail import that reads each Deposit route; `d12 survey`, `sweep` and `learn` as guarded dry runs since Harbour `f0511740` | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, confirmed the D12 card unchanged since the skill was written, only moved under Harbour's `knowledge/maturation/curated/`, and still agreeing with the ten rules and outcomes. It repointed the two legacy work packages to the Cairn store's `work-legacy/`, where the Gmail and guild work was re-read, and noted `mcp-gsuite`'s metadata-only message search, which muninn's header-only reads suit.

**Watching**

- Where the Docket lives, parked since 7 November 2026.
- The D12 standard's example Deposit route still names `knowledge/captured`, while Harbour's mail capture root is now `knowledge/intake/captured`.
- Each mail server reporting its protected list enforced, Harbour's `ki-muninn` running `d12 sweep` and `d12 learn` with an approval and taking up `age` and the `eml.txt` form, and `hnr-mcp-m365`'s mailbox-settings scopes, as the migration overlay lists.

[Back to contents](#contents)
