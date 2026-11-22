---
id: product.ollama
title: Ollama (Ollama)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Ollama
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
links:
  industry.model:
    predicate: skos:related
---

# Ollama (Ollama)

Ollama lets people run open models on their own computer or in Ollama's cloud, and point desktop apps, coding agents and their own applications at them: "Use open models in your desktop apps and coding agents, or build them into your application" ([S1]). The repository describes it as "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models" ([S9]). It runs on macOS, Windows and Linux as an app, a CLI and a local API, with compatible OpenAI and Anthropic APIs ([S2], [S12], [S1]). The software is open source under the MIT licence ([S9]); cloud models are sold on Free, Pro ($20 a month), Max ($100 a month) and an early-access Team plan from $500 a month ([S11]). The latest release seen is v0.40.17, of 10 November 2026 ([S10]). It is a model runtime, the neighbour of [model][industry.model] rather than an agent harness: the pages read describe serving models and launching other agents, not running an agent loop of its own.

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Runs models locally or "in Ollama's cloud"; "Ollama supports tool calling (also known as function calling)" in its API; MLX by default on Apple silicon | [S2], [S6], [S7], [S10] |
| [Session][industry.session] | `unknown` | Not found; `ollama run` chats with a model, with no saved agent sessions described | [S5] |
| [Subagent][industry.subagent] | `unknown` | Not found | None |
| [Agent team][industry.agent-team] | `unknown` | Not found | None |
| [Skill][industry.skill] | `unknown` | Not found | None |
| [Instruction file][industry.instruction-file] | `unknown` | Not found | None |
| [Plugin][industry.plugin] | `unknown` | Not found | None |
| [MCP][spec.mcp] | `unknown` | Not found as a client; it offers a web-search MCP server "in any MCP client through the Python MCP server" | [S8] |
| [Execution environment][industry.environment] | `unknown` | Not found | None |
| [Client][industry.client] | `unknown` | The app and `ollama run` chat with a model; no agent sessions described | [S2], [S5] |
| [Agent host][industry.agent-host] | `partial` | `ollama launch` "Configure[s] and launch[es] external applications to use Ollama models": Claude Code, Codex, OpenCode, Droid, Kimi Code CLI, OpenClaw, Hermes Agent and others, offering to install some; nothing shows it owning their sessions | [S2], [S3], [S5], [S10] |
| [Channel][industry.channel] | `unknown` | Not found; its Claude Code page passes Claude Code's own `--channels` flag through `ollama launch` | [S4] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found | None |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `unknown` | Not found; OpenClaw and Hermes Agent, launched through it, are other makers' assistants | [S3] |

## State of play

- **2026-11-10:** Version 0.40.17, the latest release seen: "`ollama launch claude` supports Claude Code's deferred tool loading". ([S10])
- **2026-11-09:** Version 0.40.16: "`ollama launch claude` always routes Claude Code to the selected model". ([S10])
- **2026-11-03:** Version 0.40.15: "ollama launch now supports Kimi Code CLI", and running `ollama` with no arguments opens the welcome launcher. ([S10])
- **2026-09-25:** Version 0.40.0: "Models run on MLX on Apple Silicon by default". ([S10])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Ollama, Ollama documentation | 2026-11-22 |
| [S2] | Ollama, Quickstart | 2026-11-22 |
| [S3] | Ollama, Integrations overview | 2026-11-22 |
| [S4] | Ollama, Claude Code integration | 2026-11-22 |
| [S5] | Ollama, CLI reference | 2026-11-22 |
| [S6] | Ollama, Cloud | 2026-11-22 |
| [S7] | Ollama, Tool calling | 2026-11-22 |
| [S8] | Ollama, Web search | 2026-11-22 |
| [S9] | Ollama, ollama/ollama repository | 2026-11-22 |
| [S10] | Ollama, ollama/ollama releases | 2026-11-22 |
| [S11] | Ollama, Pricing | 2026-11-22 |
| [S12] | Ollama, Download | 2026-11-22 |

[industry.model]: ../industry/industry.model.md
[industry.session]: ../industry/industry.session.md
[industry.subagent]: ../industry/industry.subagent.md
[industry.agent-team]: ../industry/industry.agent-team.md
[industry.skill]: ../industry/industry.skill.md
[industry.instruction-file]: ../industry/industry.instruction-file.md
[industry.plugin]: ../industry/industry.plugin.md
[spec.mcp]: ../specs/mcp/spec.mcp.md
[industry.environment]: ../industry/industry.environment.md
[industry.client]: ../industry/industry.client.md
[industry.agent-host]: ../industry/industry.agent-host.md
[industry.channel]: ../industry/industry.channel.md
[industry.cross-session-messaging]: ../industry/industry.cross-session-messaging.md
[spec.acp]: ../specs/acp/spec.acp.md
[spec.ahp]: ../specs/ahp/spec.ahp.md
[spec.a2a]: ../specs/a2a/spec.a2a.md
[system.bot]: ../system/system.bot.md
[S1]: https://docs.ollama.com/
[S2]: https://docs.ollama.com/quickstart
[S3]: https://docs.ollama.com/integrations
[S4]: https://docs.ollama.com/integrations/claude-code
[S5]: https://docs.ollama.com/cli
[S6]: https://docs.ollama.com/cloud
[S7]: https://docs.ollama.com/capabilities/tool-calling
[S8]: https://docs.ollama.com/capabilities/web-search
[S9]: https://github.com/ollama/ollama
[S10]: https://github.com/ollama/ollama/releases
[S11]: https://ollama.com/pricing
[S12]: https://ollama.com/download
