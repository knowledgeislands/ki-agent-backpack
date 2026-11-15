# Sources — Codex adapter

**Refresh:** external-spec · monthly

**Last reviewed:** 2026-11-15

## Normative

| Tag | Source | Governs | Last reviewed |
| --- | --- | --- | --- |
| CODEX | [OpenAI Codex Subagents documentation](https://learn.chatgpt.com/docs/agent-configuration/subagents) | TOML locations, required fields, supported source keys, and runtime boundaries | 2026-11-15 |

The refreshed official OpenAI documentation confirms source paths, native fields, and default runtime availability. Repository evidence still cannot prove effective installation, activation, or execution.

## Local boundary

| Tag | Source | Governs | Last reviewed |
| --- | --- | --- | --- |
| HOST | Current repository and KI host capability inspection | KI harness has no Codex subagent publication path or generic subagent publisher | 2026-11-15 |

## Last review

On 2026-11-15, the Codex Subagents page was re-read. It still places custom agents in `.codex/agents/` or `~/.codex/agents/`, still requires `name`, `description` and `developer_instructions`, still treats a matching filename as a convention with `name` as the source of truth, and still enables subagents by default. The host inspection also still holds: the KI host's Codex descriptor offers skills only. One change touches the standard and is held for its owner rather than changed here. The page now says that `sandbox_mode` and `mcp_servers`, like `approval_policy` and `model_provider`, have no effect in a custom agent file and do not override the parent configuration, although the standard lists both as supported keys; and it names keys the standard lacks: `model_reasoning_summary`, `model_verbosity`, the `features` switches, and the `skills.config`, `skills.bundled.enabled` and `skills.include_instructions` settings. The note under the Normative table, that the documentation confirms the native fields, is therefore watched with the key list until the owner decides.

On 2026-09-26, current Codex documentation established that subagents are enabled by default and discovered from `.codex/agents/` or `~/.codex/agents/`. A conforming TOML source file still does not prove that the KI harness publishes, installs, or activates it. The current KI host has no Codex subagent publication path or generic subagent publisher, so this adapter continues to report source conformance only. On 2026-10-06 the runtime-versus-host gap was dispositioned: the runtime capability is recorded here, publication remains host-owned and unavailable, and this repository declines a Codex projection through `checks.coverage-subagents-chatgpt = false`.
