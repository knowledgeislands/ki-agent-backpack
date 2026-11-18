---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:27:04Z
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
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

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
| CODEX — [OpenAI Codex Subagents documentation](https://learn.chatgpt.com/docs/agent-configuration/subagents) | TOML locations, required fields, supported source keys, and runtime boundaries | 2026-11-15 |

The refreshed official OpenAI documentation confirms source paths, native fields, and default runtime availability. Repository evidence still cannot prove effective installation, activation, or execution.

[Back to contents](#contents)

#### 2.1.2 Local boundary

| Source | Governs | Last reviewed |
| --- | --- | --- |
| HOST — Current repository and KI host capability inspection | KI harness has no Codex subagent publication path or generic subagent publisher | 2026-11-15 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

None recorded by id: the rules follow the sources above and `ki-subagents`'s portable contract.

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Agentic systems guild: REFRESH routes to the backpack, and what the skill called the Harness host is the `ki` host. No criterion changed and no outside source refreshed.

On 18 November 2026 the Agentic systems guild's review, from the Cairn summit's change 10, brought the files into the formats: `standards-codex-subagents.md` was renamed `standard-codex-subagents.md` and reshaped, its rules unchanged under numbered sections, and this file took the sources format, its Normative and Local boundary tables as authoritative sub-groups. No rule changed and no outside source was refreshed.

On 2026-11-15, the Codex Subagents page was re-read. It still places custom agents in `.codex/agents/` or `~/.codex/agents/`, still requires `name`, `description` and `developer_instructions`, still treats a matching filename as a convention with `name` as the source of truth, and still enables subagents by default. The host inspection also still holds: the KI host's Codex descriptor offers skills only. One change touches the standard and is held for its owner rather than changed here.

On 2026-09-26, current Codex documentation established that subagents are enabled by default and discovered from `.codex/agents/` or `~/.codex/agents/`. A conforming TOML source file still does not prove that the KI harness publishes, installs, or activates it. The current KI host has no Codex subagent publication path or generic subagent publisher, so this adapter continues to report source conformance only. On 2026-10-06 the runtime-versus-host gap was dispositioned: the runtime capability is recorded here, publication remains host-owned and unavailable, and this repository declines a Codex projection through `checks.coverage-subagents-chatgpt = false`.

**Watching:**

- The page now says that `sandbox_mode` and `mcp_servers`, like `approval_policy` and `model_provider`, have no effect in a custom agent file and do not override the parent configuration, although the standard lists both as supported keys.
- The page names keys the standard lacks: `model_reasoning_summary`, `model_verbosity`, the `features` switches, and the `skills.config`, `skills.bundled.enabled` and `skills.include_instructions` settings. The note under the Codex documentation table, that the documentation confirms the native fields, is therefore watched with the key list until the owner decides.

[Back to contents](#contents)
