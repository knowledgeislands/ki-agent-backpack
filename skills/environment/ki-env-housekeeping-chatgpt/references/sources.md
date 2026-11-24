---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Codex housekeeping standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the Codex local-memory standard](standard-codex-memory.md), [the Codex state standard](standard-codex-state.md) and their [rubric](rubric.md). Mode REFRESH reads this file and records what it checked in the [Last review](#3-last-review) block.

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

## 3. Last review

The latest review, on 23 November 2026, re-fetched the four OpenAI pages. The app-server reference still documents the `experimentalApi` opt-in, exact-match `cwd`, cursor pagination, the experimental `ancestorThreadId` filter and permanent `thread/delete` with spawned descendants, so [the Codex state standard](standard-codex-state.md) holds, and `codex delete` stays stable, its `--force` now needing a UUID. The memory pages confirm that local memory is off by default and that project configuration loads only when trusted and outranks profiles.

**Watching:**

- App-server and its `ancestorThreadId` filter are still experimental.
- The `memories_v2/` store: the reconciliation check in [the Codex memory standard](standard-codex-memory.md#44-reconciliation) sees only `memories/`, where a fresh Codex home now writes `memories_v2/`.
- `thread/list`'s default `sourceKinds` and `modelProviders` filters, the `cli` and `vscode` sources and the configured provider, which leave out the repository's `exec`, app-server, sub-agent and other-provider threads unless the adapter widens them; to verify against the installed protocol schema.

[Back to contents](#contents)
