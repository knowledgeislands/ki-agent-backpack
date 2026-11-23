---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T02:45:51Z
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
| [Codex CLI command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#cli-codex-delete) | Stable one-session `codex delete` fallback. | 2026-11-23 |
| [Codex app-server reference](https://learn.chatgpt.com/docs/app-server) | Initialization, experimental capability, paginated inventory, exact `cwd`, descendant filtering, and permanent deletion. | 2026-11-23 |
| [Codex local memory](https://learn.chatgpt.com/docs/customization/memories) | Codex local memory as generated state apart from ChatGPT web memory; its store location and controls. | 2026-11-23 |
| [Codex configuration basics](https://learn.chatgpt.com/docs/config-file/config-basic) | Configuration precedence, trusted-project loading and the `[features] memories` flag. | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

The rules follow the outside sources above and the shared rules of `ki-env-housekeeping`; one decision is recorded by id below.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ENV-FIXES a | All ten Environment skills are kept, with the fixes: `ki-env-housekeeping-chatgpt` repointed from the old Inbox (`krisb/inbox`) to Harbour (`krisb/ki-cairn-harbour`); `ki-env-housekeeping-claude`'s memory text trimmed to the disabled case; `ki-env-binding-chatgpt` refreshed, due since 12 November; `ki-env-binding-chezmoi`'s SKILL.md, which stated its composition three times, trimmed to once; the two tokenomics adapters' sources refreshed with the MODEL-TIERS move; no regrouping by host. Kris, 22 November 2026, about 21:45 GMT, the Environment guild's sitting, card: "Keep all ten, with fixes"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [SKILL.md](../SKILL.md) | In force |

[Back to contents](#contents)

## 4. Last review

On 23 November 2026 the quarterly REFRESH re-fetched the four OpenAI pages. The app-server reference has moved to learn.chatgpt.com, repointed above. It still documents the `experimentalApi` opt-in, exact-match `cwd`, cursor pagination, the experimental `ancestorThreadId` filter and permanent `thread/delete` with spawned descendants, so [the Codex state standard](standard-codex-state.md) holds. `codex delete` stays stable, and `--force` now needs a UUID. The two memory pages the memory standard cites are now listed; they confirm local memory is off by default, project configuration loads only when trusted and outranks profiles. Two changes are proposed, not made: the memory check reads only `memories/`, where a fresh Codex home now writes `memories_v2/`; and the inventory sends no `sourceKinds` or `modelProviders`, so the defaults (`cli` and `vscode` sources, the configured provider) leave out the repository's `exec`, app-server, sub-agent and other-provider threads.

On 22 November 2026 the Environment guild's landing, from the Cairn summit's change 10, step 6.3, applied ENV-FIXES a, recorded under [Decisions](#3-decisions): SKILL.md now names Harbour's `ki-muninn chatgpt` commands, in krisb/ki-cairn-harbour, as the owner of repository staging, where it named the Inbox. No criterion changed and no outside source refreshed.

On 19 November 2026 MEMORY-ONCE, taken in `ki-env-housekeeping`, cut [the Codex memory standard](standard-codex-memory.md#42-repository-policy)'s restatement of the native-memory policy to this host's delta, pointing at the lead's 4.1; nothing host-specific was lost. No criterion changed and no outside source refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the standards and this file into `ki-authoring`'s formats: `standards-codex-memory.md` and `standards-codex-state.md` were renamed `standard-codex-memory.md` and `standard-codex-state.md` and their rules placed, unchanged, under numbered sections, and this file took the sources format. The rubric's source anchors follow. No rule changed and no outside source was refreshed.

On 6 November 2026, under INBOX-RENAME from `personal.reg.inbox-terra`, at Kris's word ("Do full rename to inbox now and coordinate that"), the assistant repository became the Inbox: `krisb/assistant` is now `krisb/inbox`, its packages `personal.reg.inbox-terra` and `personal.reg.inbox-sol`, and its store `sources-inbox`. Live wording here follows; older lines below keep the names they had.

On 2026-08-18, the CLI documented stable permanent deletion by saved-session ID or name. App-server documented `thread/list`, experimental `ancestorThreadId`, and `thread/delete`, including deletion of spawned descendants. The adapter remains opt-in and version-negotiated because app-server and the descendant filter are experimental.

**Watching:**

- App-server and its `ancestorThreadId` filter are still experimental.
- The `memories_v2/` store: the reconciliation check in [the Codex memory standard](standard-codex-memory.md#44-reconciliation) sees only `memories/` until the proposed fix lands.
- `thread/list`'s default `sourceKinds` and `modelProviders` filters, which narrow the inventory unless the adapter widens them; proposed, to be verified against the installed protocol schema.

[Back to contents](#contents)
