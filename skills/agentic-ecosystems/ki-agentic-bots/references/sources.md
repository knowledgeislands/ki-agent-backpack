---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:52:17Z
ki-refresh: external-spec · monthly
---

# Sources — where the bot practice standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the bot practice standard](standard-bots.md). Its rules come from the Cairn summit's [change 70][c70] and the practice the first store's bootstrap file for its bots put in use from 22 November 2026; Orca's own documentation and command help govern only [4.11](standard-bots.md#411-on-orca).

[Back to contents](#contents)

## 2. Outside sources

Orca's own references govern what the standard says about Orca; the first store's bootstrap file informed the general practice.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Orca][orca] 1.4.269, its bundled bot rules and `orca bot`, `orca orchestration` and `orca automations` command help, read on sol, with its release notes to 1.4.271 | A bot's folder, the files Orca owns, wakes, mail, automations, the quiet ending and items | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| The Cairn store's `BOTS.md`, at [`705a92dc`][bots] | The re-anchor, the kinds of wake, the working rules and the Orca section, generalised here from `50e99f45`; it stays that store's own instance | 2026-11-23 |
| The Cairn summit's [change 70][c70], [4.2](https://github.com/krisb/ki-cairn-store/blob/50e99f45/work/cairn/cairn.summit/70-bots.change.md#42-what-an-orca-bot-is) | What an Orca bot is, each fact marked verified or inferred, read on sol on 21 November 2026; unchanged to its close-out at `48d82993` before the change graduated | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-read Orca 1.4.269 on sol, its bot rules and its `orca bot`, `orca orchestration send` and `orca automations create` help, and found every fact in [4.11](standard-bots.md#411-on-orca) still holding. It also found that the Cairn store's `BOTS.md` has moved on since the version the standard generalised, adding worktree, paced-check, drafts-only and card-answering rules.

**Watching:**

- Orca's bots are in beta and changed in four releases over two days; [4.11](standard-bots.md#411-on-orca) is re-read against each release the bots run on. Sol runs 1.4.269; 1.4.271 is out.
- What 1.4.269 added that [4.11](standard-bots.md#411-on-orca) does not yet say: `orca bot new-chat`, run only when the owner asks to start fresh, which reads `SOUL.md` and `MEMORY.md` again; automations that start on Slack, GitHub or Linear events, with `--runs-in` and `--results-to`; and @mention hand-offs in group rooms.
- A proposal to bring [4.11](standard-bots.md#411-on-orca) up to 1.4.269 is open.
- Orca 1.4.271's memory journal of closed items, and its note that work state lives in Items and the journal, beside [4.6](standard-bots.md#46-memory-a-working-aid) and [4.7](standard-bots.md#47-the-work-package-counts-as-outstanding), which keep the package as the record.
- What `BOTS.md` still lists as not known: how long Orca keeps mail between bots, whether automations survive a restart, runs missed while the Mac sleeps, and how a Codex bot reads its files; and how group rooms' @mention hand-offs develop, with no convention adopted.

[Back to contents](#contents)

[c70]: https://github.com/krisb/ki-cairn-store/blob/50e99f45/work/cairn/cairn.summit/70-bots.change.md
[bots]: https://github.com/krisb/ki-cairn-store/blob/705a92dc/BOTS.md
[orca]: https://github.com/stablyai/orca
