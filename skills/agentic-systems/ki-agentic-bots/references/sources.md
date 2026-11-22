---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T01:15:00Z
ki-refresh: external-spec · monthly
---

# Sources — where the bot practice standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the bot practice standard](standard-bots.md). Its rules are the owner's decisions of 21 and 22 November 2026, recorded in the Cairn summit's [change 70][c70], and the practice the first store's bootstrap file for its bots put in use from that day; Orca's own documentation and command help govern only [4.11](standard-bots.md#411-on-orca).

[Back to contents](#contents)

## 2. Outside sources

Orca's own references govern what the standard says about Orca; the first store's bootstrap file informed the general practice.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Orca][orca] 1.4.267, its bundled bots and automations references and `orca bot` and `orca orchestration` command help, read on sol | A bot's folder, the files Orca owns, wakes, mail, automations, the quiet ending and items | 2026-11-21 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| The Cairn store's `BOTS.md`, at [`50e99f45`][bots] | The re-anchor, the kinds of wake, the working rules and the Orca section, generalised here; it stays that store's own instance | 2026-11-22 |
| The Cairn summit's [change 70][c70], [4.2](https://github.com/krisb/ki-cairn-store/blob/50e99f45/work/cairn/cairn.summit/70-bots.change.md#42-what-an-orca-bot-is) | What an Orca bot is, each fact marked verified or inferred, read on sol on 21 November 2026 | 2026-11-22 |

[Back to contents](#contents)

## 3. Decisions

The owner's decisions behind the standard, each recorded in the Cairn summit's [change 70][c70], 4.6, at its commit `50e99f45`.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| BOTS-STANDARDS | A bot follows the house standards; the work package, its change documents and the store stay the record, and the bot's own task list and memory are not. | 2026-11-21 | [4.1](standard-bots.md#41-the-hosts-grain), [4.6](standard-bots.md#46-memory-a-working-aid) | In force |
| BOT-CONSTRAINTS a | The lighter set, about 15:07 GMT: the same rules, access and remit as a session, a peer's message never the owner's approval; routine wakes switched on freely, a new kind of automation mentioned to the owner first; no fallback session; the package the record and memory a working aid; no Family or legal bots until the trial goes well. | 2026-11-21 | [4.3](standard-bots.md#43-by-kind-of-wake), [4.5](standard-bots.md#45-mail-between-bots), [4.6](standard-bots.md#46-memory-a-working-aid), [4.9](standard-bots.md#49-wakes-and-automations) | In force |
| BOT-BOOT a | About 16:18 GMT: the bootstrap every bot shares lives in a tracked file at the store's root, read and followed on every wake; each bot's own soul holds its purpose, the pointer, the worker line, its opener and thread line. | 2026-11-21 | [4.2](standard-bots.md#42-the-bootstrap-on-every-wake), [4.10](standard-bots.md#410-a-stores-own-instance) | In force |
| BOT-WORK a | About 16:18 GMT, after a blind review that agreed: a bot does its own work; its background work goes to its own subagents under `ki-delegation`, and to the host's workers only when the owner asks; the host's default is overridden in the bot's own soul file. | 2026-11-21 | [4.4](standard-bots.md#44-background-work), [4.11](standard-bots.md#411-on-orca) | In force |
| BOTS-GRAIN | A steer, about 16:18 GMT: go with the way the host's bots work wherever it does not conflict with the house standards; overriding the host is the exception, named each time. | 2026-11-21 | [4.1](standard-bots.md#41-the-hosts-grain), [4.9](standard-bots.md#49-wakes-and-automations) | In force |
| BOTS-TALK | A steer, about 16:18 GMT: bots talk to each other by the host's mail, by name, the same way the actors did as sessions, with no notion of a session break. | 2026-11-21 | [4.2](standard-bots.md#42-the-bootstrap-on-every-wake), [4.5](standard-bots.md#45-mail-between-bots) | In force |
| BOT-RECORD, ROSTER-SOUL, SOUL-ALL | About 10:28 and 16:27 to 16:29 GMT: each actor's roster folder holds its own `SOUL.md`, who and what it is and how it works; a bot's own files on its host only point there; everything common to bots is in the store-root bootstrap file and nowhere else. | 2026-11-21 | [4.2](standard-bots.md#42-the-bootstrap-on-every-wake), [4.10](standard-bots.md#410-a-stores-own-instance) | In force |
| BOTS-WATCH | A steer, about 16:39 GMT: watch how bots actually work and keep the understanding current from it; go with bots' grain without getting tied to any one ecosystem. | 2026-11-21 | [4.1](standard-bots.md#41-the-hosts-grain) | In force |
| PACKAGE-OUTSTANDING | A standing rule, about 23:55 GMT: every bot counts its work package as outstanding work, its open change documents' unticked steps and open questions, its Now and Held, alongside its host's items, whenever it reports what is outstanding, summarises or closes a turn. | 2026-11-21 | [4.7](standard-bots.md#47-the-work-package-counts-as-outstanding) | In force |
| CARDS-PACED | A steer, 22 November 2026, about 00:32 GMT: "Not all of the questions need to go straight onto cards ... We need to go through them bit by bit with the change records." A card is for a question due soon, blocking work, or in the change being taken now. | 2026-11-22 | [4.8](standard-bots.md#48-questions-carded-when-due) | In force |
| BOTS-GUILD | About 09:40 GMT on 21 November: "we need to put bots as a concept into our agentic systems one"; its scope set by the Cairn summit's guardian on 22 November 2026, about 00:25 GMT, in change 70's step 2, with host practice in `ki-delegation-orca` or a new member skill. A new member skill was chosen, since the practice holds on any host and is not delegation to Orca's workers, which BOT-WORK a sets aside. | 2026-11-22 | [the standard](standard-bots.md) | In force; landed for the owner's review |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 the standard was first written under BOTS-GUILD, generalising the Cairn store's `BOTS.md` at `50e99f45` and the decisions above: the store's paths, packages and setup files were left to that store's instance, and Orca's mechanics kept to [4.11](standard-bots.md#411-on-orca), read from change 70's findings against Orca 1.4.267 on 21 November 2026. Orca's command help was not re-read for this draft.

**Watching:**

- Orca's bots are in beta and changed in four releases over two days; [4.11](standard-bots.md#411-on-orca) is re-read against each release the bots run on.
- How a bot's memory may feed a roster `MEMORY.md` is open in change 70 as its gap 8.

[Back to contents](#contents)

[c70]: https://github.com/krisb/ki-cairn-store/blob/50e99f45/work/cairn/cairn.summit/70-bots.change.md
[bots]: https://github.com/krisb/ki-cairn-store/blob/50e99f45/BOTS.md
[orca]: https://github.com/stablyai/orca
