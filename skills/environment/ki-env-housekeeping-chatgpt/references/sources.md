---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T07:10:00Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Codex housekeeping standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the Codex local-memory standard](standard-codex-memory.md), [the Codex state standard](standard-codex-state.md) and their [rubric](rubric.md). Mode REFRESH reads this file and records what it checked in the [Last review](#4-last-review) block.

[Back to contents](#contents)

## 2. Outside sources

OpenAI's own Codex documentation is the evidence for the stable and experimental interfaces the adapter uses.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Codex CLI command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#cli-codex-delete) | Stable one-session `codex delete` fallback. | 2026-08-18 |
| [Codex app-server reference](https://developers.openai.com/codex/app-server) | Initialization, experimental capability, paginated inventory, exact `cwd`, descendant filtering, and permanent deletion. | 2026-08-18 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

None recorded by id: the rules follow the outside sources above and the shared rules of `ki-env-housekeeping`.

[Back to contents](#contents)

## 4. Last review

On 19 November 2026 MEMORY-ONCE, taken in `ki-env-housekeeping`, cut [the Codex memory standard](standard-codex-memory.md#42-repository-policy)'s restatement of the native-memory policy to this host's delta, pointing at the lead's 4.1; nothing host-specific was lost. No criterion changed and no outside source refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the standards and this file into `ki-authoring`'s formats: `standards-codex-memory.md` and `standards-codex-state.md` were renamed `standard-codex-memory.md` and `standard-codex-state.md` and their rules placed, unchanged, under numbered sections, and this file took the sources format. The rubric's source anchors follow. No rule changed and no outside source was refreshed.

On 6 November 2026, under INBOX-RENAME from `personal.reg.inbox-terra`, at Kris's word ("Do full rename to inbox now and coordinate that"), the assistant repository became the Inbox: `krisb/assistant` is now `krisb/inbox`, its packages `personal.reg.inbox-terra` and `personal.reg.inbox-sol`, and its store `sources-inbox`. Live wording here follows; older lines below keep the names they had.

On 2026-08-18, the CLI documented stable permanent deletion by saved-session ID or name. App-server documented `thread/list`, experimental `ancestorThreadId`, and `thread/delete`, including deletion of spawned descendants. The adapter remains opt-in and version-negotiated because app-server and the descendant filter are experimental.

**Watching:**

- The two OpenAI pages [the Codex local-memory standard](standard-codex-memory.md) cites, on memory and on configuration precedence, are not yet listed above; the next REFRESH reviews them and lists them.
- App-server and its `ancestorThreadId` filter are still experimental.

[Back to contents](#contents)
