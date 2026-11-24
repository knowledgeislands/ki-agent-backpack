---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — ki-env-binding-chatgpt

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind the [Codex binding standard](standard-codex-binding.md) and [rubric](rubric.md). Mode REFRESH re-examines each source, confirms the standard still matches, bumps the `last reviewed` dates, and refreshes the Last review block. The commit records what changed.

[Back to contents](#contents)

## 2. Outside sources

The standard follows Codex's own MCP documentation and configuration reference.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CLI — [Codex MCP documentation](https://learn.chatgpt.com/docs/extend/mcp?surface=cli) | Native merge writer and MCP state boundaries | 2026-11-22 |
| TOML — [Codex configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference) | TOML location and full non-secret MCP fields | 2026-11-22 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 22 November 2026, rechecked both Codex sources against Codex CLI 0.171.0. `codex mcp add`, `codex mcp get <name> --json` and `codex mcp remove` still exist, and the further `[mcp_servers]` fields the configuration reference now lists, such as `bearer_token_env_var`, header helpers, `auth`, approval modes and `startup_readiness`, are ones [partial-update recovery](standard-codex-binding.md#43-partial-update-recovery) already treats as fields the renderer cannot replay. No rule changed.

**Watching:**

- The native command and TOML shape; refresh when either changes.
- The replayable snapshot subset in [partial-update recovery](standard-codex-binding.md#43-partial-update-recovery): if KI entries come to need `bearer_token_env_var`, headers or OAuth, the renderer's subset has to widen before it can replace them.

[Back to contents](#contents)
