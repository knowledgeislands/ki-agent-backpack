---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T00:54:54Z
ki-refresh: canonical · on-change
---

# Sources — where the D12 standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources and decisions behind [the D12 standard](standard-dodecakrisis.md), [the mailbox standard](standard-mailbox.md), [the learning standard](standard-learning.md) and the generated [rubric](rubric.md). [The migration overlay](migration-dodecakrisis.md) holds what the servers and `ki-muninn` do not yet support.

Review alongside a change to the D12 card, to either mail server's protected-label or filter tools, or to `ki-muninn`'s D12 runner.

[Back to contents](#contents)

## 2. Outside sources

The Knowledge Islands card that owns the concept, and the in-house work and tools the standards graduate from or call.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| The Knowledge Islands D12 card, "D12, the Dodecakrisis", Kris's fundamental tenet of 5 November 2026, staged in Harbour's knowledge graph (krisb/ki-cairn-harbour) under `ki-principal/Pillars/knowledge-tending/` until ki-principal takes it | The concept: the twelve Ds, their names and why | 2026-11-07 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| The Inbox's work package `personal.reg.inbox-terra` | The sorting-engine draft and the Gmail D12 design that the mailbox and learning standards graduate, with Kris's Gmail decisions of 6 November 2026 | 2026-11-07 |
| The harness work package `ki.reg.guilds` | Kris's decisions of 7 November 2026 that shaped the skill | 2026-11-07 |
| `mcp-gsuite` and `mcp-m365` | The mail tools D12 calls and the protected-label enforcement: the protected lists, `mcp-gsuite` `4560520` and `mcp-m365` `b9a3c15`, and `mcp-m365`'s rule, category and change tools, `7ebff50` and `4a839ec`, all of 22 November 2026 | 2026-11-23 |
| Harbour's `ki-muninn` (krisb/ki-cairn-harbour, `packages/ki-muninn/`) | D12's execution and the mail import that reads each Deposit route; `d12 survey`, `sweep` and `learn` as guarded dry runs since Harbour `f0511740` | 2026-11-23 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| D12-LEARNS | D12 "learns from how I reorder things, or I can tell you expressly how certain things need to move, so you can put better rules in place"; Kris, in `personal.reg.inbox-terra`. | 2026-11-06 | [learning 1](standard-learning.md#1-introduction) | In force |
| ARCHIVES a | Nothing is archived inside the mailbox: a deposited message leaves it 30 days after its store has verified the copy, never by a Delete rule; Kris's Gmail decision, in `personal.reg.inbox-terra`. | 2026-11-06 | [mailbox 4.3](standard-mailbox.md#43-sweeps), [4.4](standard-mailbox.md#44-deposit-routes) | In force |
| TAGS a | Context is shown by tags beside the outcomes, never instead of them: a branch per Capital and shared kind tags; Kris's Gmail decision. | 2026-11-06 | [mailbox 4.1](standard-mailbox.md#41-queues-and-tags) | In force |
| GD12-LABEL-ROOT a | Outcome labels are numbered under one root, `D12/03 Determine` and so on; Kris's Gmail decision. | 2026-11-06 | [mailbox 4.1](standard-mailbox.md#41-queues-and-tags) | In force |
| GD12-AUTO a | Filters act alone for proven high-confidence rules; Delete only labels, and the sweep trashes after 7 days; Kris's Gmail decision. | 2026-11-06 | [D12 4.3](standard-dodecakrisis.md#43-the-rules-file), [mailbox 4.3](standard-mailbox.md#43-sweeps) | In force |
| GD12-READLATER a | Digest takes over `_INBOUND/Read Later` and its 14-day age-out, the label renamed `D12/09 Digest`; Kris's Gmail decision. | 2026-11-06 | [mailbox 4.3](standard-mailbox.md#43-sweeps) | In force |
| GD12-LEARN a | A learnt rule is proposed to Kris on three agreeing corrections and goes live only on his answer; Kris's Gmail decision. | 2026-11-06 | [learning 4.3](standard-learning.md#43-drafting-rules) | In force |
| GD12-SWEEP | How the sweeps and the learning sweep are scheduled; the standards hold that each schedule is approved separately each time; Kris's Gmail decisions. | 2026-11-06 | [D12 4.4](standard-dodecakrisis.md#44-writes-and-approvals), [mailbox 4.3](standard-mailbox.md#43-sweeps) | In force |
| Z-ARCHIVE | `Z_ARCHIVE/` is never changed: it lies outside D12's remit, and protected labels should become a capability of the mail servers; Kris, in `personal.reg.inbox-terra`. | 2026-11-06 | [mailbox 4.2](standard-mailbox.md#42-protected-labels) | In force |
| SKILLS-OVER-GRAPH a | D12 is a harness skill in the acquire group; Kris, in `ki.reg.guilds`. | 2026-11-07 | [D12 1](standard-dodecakrisis.md#1-introduction) | In force |
| D12-CANON a | The card keeps the concept and the standard holds the rules; Kris, in `ki.reg.guilds`. | 2026-11-07 | [D12 1](standard-dodecakrisis.md#1-introduction) | In force |
| D12-KIND a | One governance skill with SORT, SWEEP and LEARN; Kris, in `ki.reg.guilds`. | 2026-11-07 | [D12 1](standard-dodecakrisis.md#1-introduction) | In force |
| D12-RUNNER a | Execution is `ki-muninn d12 sweep` and `ki-muninn d12 learn`; Kris, in `ki.reg.guilds`. | 2026-11-07 | [D12 2.2](standard-dodecakrisis.md#22-out-of-scope) | In force |
| PROTECTED-HOME a | The mail server declares and enforces the protected list; Kris, in `ki.reg.guilds`. | 2026-11-07 | [mailbox 4.2](standard-mailbox.md#42-protected-labels) | In force |
| PROTECTED-READ a | The protected list covers read state too; Kris, in `ki.reg.guilds`. | 2026-11-07 | [mailbox 4.2](standard-mailbox.md#42-protected-labels) | In force |
| MIGRATION-OVERLAY | The standards describe only the final state, and temporary adjustments sit in the migration overlay; Kris. | 2026-11-07 | [D12](standard-dodecakrisis.md), [mailbox](standard-mailbox.md), [learning](standard-learning.md) | In force |
| ACQUIRE-FIXES | `ki-acquire-chatgpt`, `ki-acquire-granola` and `ki-dodecakrisis` "are repointed from the Inbox (`krisb/inbox`) to Harbour (`krisb/ki-cairn-harbour`)"; settled by Kitteth within remit, the Acquire guild's sitting in the Cairn summit's change 10. | 2026-11-22 | [D12 2.2](standard-dodecakrisis.md#22-out-of-scope), [learning 2.2](standard-learning.md#22-out-of-scope) | In force |
| D12-NOW b | D12 is taken forward now, not by Kitteth: handed to Wicket (cairn.harbour) on Gmail and the HNR mailbox, with the tool gaps asked of ki.tools and muninn's `d12 sweep` and `d12 learn` built in Harbour; the skill stays in Acquire and the overlay names the work as under way, not held. Kris, the Acquire guild's sitting, card: "No, it needs to be taken forward now, but not by you." | 2026-11-22 | [Migration](migration-dodecakrisis.md) | In force |
| D12-HNR-HOME a | Harbour declares both mailboxes and holds their D12 rules; Kris, sending back Wicket's reply block in cairn.harbour's change 60: "D12-PROTECTED-FIRST a, D12-INTERIM a, D12-HNR-HOME a". | 2026-11-22 | [Migration](migration-dodecakrisis.md) | In force |
| D12-AGE | The rules file gains `age` for a short-lived rule, which the Short-lived sweep needs; Wicket's gap 3 in cairn.harbour's change 60, carried by D12-NOW. | 2026-11-22 | [D12 4.3](standard-dodecakrisis.md#43-the-rules-file), [mailbox 4.3](standard-mailbox.md#43-sweeps) | In force |
| DOCKET-HOME | Where the Docket is bound; until it is answered, rule 8 stays a rule of the concept only. | 2026-11-07 | [D12 4.1](standard-dodecakrisis.md#41-the-ten-rules) | Parked |

[Back to contents](#contents)

## 4. Last review

On 23 November 2026, in the Cairn summit's change 10, step 6.3, under ACQUIRE-FIXES, D12-NOW b and D12-HNR-HOME a, recorded under [Decisions](#3-decisions): live wording naming the Inbox's muninn now names Harbour's (`krisb/ki-cairn-harbour`, `packages/ki-muninn/`); the migration overlay names D12 as under way, led by Wicket, with the protected lists (T1) and `mcp-m365`'s rule tools (T3) landed on 22 November 2026 and live on sol, muninn's D12 commands Harbour's, and its line on hnr-principal declaring the HNR mailbox dropped; and the rules file gains `age` for a short-lived rule (D12-AGE). The servers' and muninn's commits were read; no mailbox was read.

On 18 November 2026 the Acquire guild's review, in the Cairn summit's change 10, brought the skill's files into `ki-authoring`'s formats: the three standards were renamed `standard-dodecakrisis.md`, `standard-mailbox.md` and `standard-learning.md` and given the standard format's sections, their rules moved unchanged under numbered subsections and the D12 standard's Boundary became its Out of scope, and this file took the sources format, its named decisions gathered into [Decisions](#3-decisions), with glosses for the Gmail decisions taken from the Inbox's design of 6 November 2026. No rule changed and no outside source was refreshed.

On 7 November 2026, under SKILLS-OVER-GRAPH a and the D12 decisions above, the skill was written from the guild's design note `d12-kg.design.md`, the D12 card, the sorting-engine draft and the Gmail D12 design. The standards describe the final state; what the servers and `ki-muninn` do not yet support, and the parked Docket, sit in the migration overlay.

**Watching**

- DOCKET-HOME, parked since 7 November 2026.
- Each mail server reporting its protected list enforced, Harbour's `ki-muninn` running `d12 sweep` and `d12 learn` with an approval and taking up `age` and the `eml.txt` form, and `hnr-mcp-m365`'s mailbox-settings scopes, as the migration overlay lists.

[Back to contents](#contents)
