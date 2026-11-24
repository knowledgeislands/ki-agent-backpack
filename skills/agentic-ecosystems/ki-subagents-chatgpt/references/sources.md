---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — where the Codex adapter standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Codex documentation](#211-codex-documentation)
    - [2.1.2 Local boundary](#212-local-boundary)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the Codex standalone subagent source projections standard](standard-codex-subagents.md) and its [rubric](rubric.md).

[Back to contents](#contents)

## 2. Outside sources

OpenAI's Codex documentation governs the TOML source; the host inspection governs what the KI harness can publish.

### 2.1 Authoritative

The Codex documentation and the local host boundary.

#### 2.1.1 Codex documentation

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CODEX — [OpenAI Codex Subagents documentation](https://learn.chatgpt.com/docs/agent-configuration/subagents) | TOML locations, required fields, supported source keys, and runtime boundaries | 2026-11-23 |

The refreshed official OpenAI documentation confirms source paths, native fields, and default runtime availability. Repository evidence still cannot prove effective installation, activation, or execution.

[Back to contents](#contents)

#### 2.1.2 Local boundary

| Source | Governs | Last reviewed |
| --- | --- | --- |
| HOST — Current repository and KI host capability inspection | KI harness has no Codex subagent publication path or generic subagent publisher | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-read the Codex Subagents page. Custom agents still sit in `.codex/agents/` or `~/.codex/agents/`, still require `name`, `description` and `developer_instructions`, still take `name` over the filename, and subagents are still on by default; the page adds that a custom agent named like a built-in takes precedence over it, and its global `[agents]` table now names `max_concurrent_threads_per_session` and `interrupt_message`, neither a source field. `tools-ki` still gives the Codex agent the skills capability only, and its subagents path serves Claude Code alone, so the host boundary holds.

**Watching:**

- The page now says that `sandbox_mode` and `mcp_servers`, like `approval_policy` and `model_provider`, have no effect in a custom agent file and do not override the parent configuration, although the standard lists both as supported keys.
- The page names keys the standard lacks: `model_reasoning_summary`, `model_verbosity`, the `features` switches, and the `skills.config`, `skills.bundled.enabled` and `skills.include_instructions` settings. The note under the Codex documentation table, that the documentation confirms the native fields, is watched with the key list until the supported keys are settled.

[Back to contents](#contents)
