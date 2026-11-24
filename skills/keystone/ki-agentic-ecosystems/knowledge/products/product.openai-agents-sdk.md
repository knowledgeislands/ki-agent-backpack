---
id: product.openai-agents-sdk
title: OpenAI Agents SDK (OpenAI)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: OpenAI
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  openai.harness:
    predicate: skos:related
---

# OpenAI Agents SDK (OpenAI)

The OpenAI Agents SDK lets a developer "build agentic AI apps in a lightweight, easy-to-use package with very few abstractions" ([S1]). OpenAI makes it, as "a production-ready upgrade of our previous experimentation for agents, Swarm" ([S1]): a Python library, "a lightweight, powerful framework for multi-agent workflows", and a TypeScript one "for multi-agent workflows and voice agents" ([S2], [S15]). It has no surface of its own: "The SDK runs inside your application", whose runner "handles the agent loop and handoffs" ([S17]). Both libraries are MIT open source ([S2], [S15]), on a `0.Y.Z` scheme because the SDK "is still evolving rapidly" ([S20]). The latest Python release seen is v0.25.0, of 17 November 2026, with the pre-release v1.0.0-alpha.1 of 20 November ([S3], [S4], [S5]); the latest TypeScript release is `@openai/agents` 0.22.0, of 12 November ([S16]). It is an [agent harness][industry.agent-harness]. Its maker's own words for it are on the vendor card [Harness (OpenAI)][openai.harness].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | OpenAI models through the Responses API by default, `gpt-5.6-luna` unless set; any OpenAI-compatible endpoint or a custom `ModelProvider`, mixed per agent; Any-LLM and LiteLLM as "best-effort, beta adapter integrations"; local models not mentioned | [S1], [S2], [S6] |
| [Session][industry.session] | `yes` | "Built-in session memory to automatically maintain conversation history across multiple agent runs", in SQLite, Redis, SQLAlchemy, MongoDB, Dapr or OpenAI Conversations; a paused run resumes from "the same session ID and the same underlying storage backend" | [S7] |
| [Subagent][industry.subagent] | `yes` | Agents as tools: "A manager agent keeps control of the conversation and calls specialist agents through `Agent.as_tool()`"; handoffs instead pass the turn to a specialist | [S8] |
| [Agent team][industry.agent-team] | `unknown` | The orchestration page describes handoffs, agents as tools, chaining and parallel runs, no agents messaging each other | [S8] |
| [Skill][industry.skill] | `yes` | Sandbox agents' Skills capability mounts `SKILL.md` folders into "a Codex auto-discovery root", `.agents` by default, eagerly or lazily through `load_skill`; the pages read do not name the specification | [S10], [S12] |
| [Instruction file][industry.instruction-file] | `unknown` | Agents and sandbox agents take `instructions` in code; no instruction file such as `AGENTS.md` is named | [S1], [S10] |
| [Plugin][industry.plugin] | `unknown` | Not found; extensions are optional install extras and third-party adapters | [S1], [S2] |
| [MCP][spec.mcp] | `yes` | Hosted MCP tools through the Responses API, and Streamable HTTP, SSE (deprecated) and stdio servers; "MCP v2 Streamable HTTP supports concurrent requests" from v0.25.0 | [S9], [S4] |
| [Execution environment][industry.environment] | `yes` | Sandbox agents run in "real isolated workspaces": `container` through `DockerSandboxClient`, `vendor-sandbox` through hosted clients for Blaxel, Cloudflare, Databricks, Daytona, E2B, Modal and Vercel; `UnixLocalSandboxClient` "adds no OS-level confinement" on Linux, `none` | [S1], [S10], [S11] |
| [Client][industry.client] | `partial` | A library with no window of its own beyond a demo REPL utility, which "can now approve or reject individual tool calls"; realtime agents connect a browser's microphone over WebRTC in the TypeScript SDK | [S17], [S1], [S4], [S15] |
| [Agent host][industry.agent-host] | `unknown` | Not found for other makers' harnesses; v1.0.0-alpha.1 embeds OpenAI's own Codex Core as an opt-in model provider | [S5] |
| [Channel][industry.channel] | `unknown` | No channel documented; a realtime session is "a live session object" the application feeds with `send_message()` and `send_audio()` while it runs | [S14] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found; coordination is only through handoffs, agents as tools or the application's own code | [S8] |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not in the docs read; an open proposal, issue #5660, asks for "Optional A2A support alongside agents.mcp", with no maintainer reply | [S18] |
| [Bot][system.bot] | `unknown` | Not found. Sandbox agent memory "distills lessons from prior runs into files in the sandbox workspace", `memories/MEMORY.md`; durable long-running runs come from a third party, Temporal's integration, not OpenAI. Scheduling: none documented | [S13], [S19] |

## State of play

- **2026-11-20:** Python v1.0.0-alpha.1, a pre-release, "adds Codex as an opt-in model provider for the Python Agents SDK", embedding "unmodified Codex Core `rust-v0.166.0`"; wheels only through GitHub Releases. The release page gives no year. ([S5])
- **2026-11-17:** Python v0.25.0 "removes the beta Runloop sandbox provider", lets MCP v2 Streamable HTTP run concurrent requests, and moves `OpenAIResponsesCompactionSession` to `gpt-6-luna`. ([S4])
- **2026-11-16:** TypeScript v0.22.0-alpha.3, a pre-release, adds typed decisions and app-supplied model backends and widens realtime and voice support; the release page gives no year. ([S16])
- **2026-11-12:** TypeScript `@openai/agents` 0.22.0, a patch release refreshing dependencies; the release page gives no year. ([S16])
- **2026-11-09:** Google's A2A team opens issue #5660 proposing optional A2A support, offering "to contribute the implementation". ([S18])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | OpenAI, OpenAI Agents SDK (Python docs introduction) | 2026-11-22 |
| [S2] | OpenAI, openai/openai-agents-python repository | 2026-11-22 |
| [S3] | OpenAI, openai-agents-python releases | 2026-11-22 |
| [S4] | OpenAI, openai-agents-python v0.25.0 release | 2026-11-22 |
| [S5] | OpenAI, openai-agents-python v1.0.0-alpha.1 release | 2026-11-22 |
| [S6] | OpenAI, Agents SDK: Models | 2026-11-22 |
| [S7] | OpenAI, Agents SDK: Sessions | 2026-11-22 |
| [S8] | OpenAI, Agents SDK: Agent orchestration | 2026-11-22 |
| [S9] | OpenAI, Agents SDK: Model context protocol (MCP) | 2026-11-22 |
| [S10] | OpenAI, Agents SDK: Sandbox agents | 2026-11-22 |
| [S11] | OpenAI, Agents SDK: Sandbox clients | 2026-11-22 |
| [S12] | OpenAI, Agents SDK API reference: Skills capability | 2026-11-22 |
| [S13] | OpenAI, Agents SDK: Agent memory | 2026-11-22 |
| [S14] | OpenAI, Agents SDK: Realtime agents guide | 2026-11-22 |
| [S15] | OpenAI, openai/openai-agents-js repository | 2026-11-22 |
| [S16] | OpenAI, openai-agents-js releases | 2026-11-22 |
| [S17] | OpenAI, Agents guide (OpenAI developer docs) | 2026-11-22 |
| [S18] | openai-agents-python issue #5660, Optional A2A support alongside agents.mcp | 2026-11-22 |
| [S19] | Temporal, OpenAI Agents SDK integration (Python SDK), a third party's page | 2026-11-22 |
| [S20] | OpenAI, Agents SDK: Release process and changelog | 2026-11-22 |

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
[industry.agent-harness]: ../industry/industry.agent-harness.md
[openai.harness]: ../vendors/openai/openai.harness.md
[S1]: https://openai.github.io/openai-agents-python/
[S2]: https://github.com/openai/openai-agents-python
[S3]: https://github.com/openai/openai-agents-python/releases
[S4]: https://github.com/openai/openai-agents-python/releases/tag/v0.25.0
[S5]: https://github.com/openai/openai-agents-python/releases/tag/v1.0.0-alpha.1
[S6]: https://openai.github.io/openai-agents-python/models/
[S7]: https://openai.github.io/openai-agents-python/sessions/
[S8]: https://openai.github.io/openai-agents-python/multi_agent/
[S9]: https://openai.github.io/openai-agents-python/mcp/
[S10]: https://openai.github.io/openai-agents-python/sandbox_agents/
[S11]: https://openai.github.io/openai-agents-python/sandbox/clients/
[S12]: https://openai.github.io/openai-agents-python/ref/sandbox/capabilities/skills/
[S13]: https://openai.github.io/openai-agents-python/sandbox/memory/
[S14]: https://openai.github.io/openai-agents-python/realtime/guide/
[S15]: https://github.com/openai/openai-agents-js
[S16]: https://github.com/openai/openai-agents-js/releases
[S17]: https://developers.openai.com/api/docs/guides/agents
[S18]: https://github.com/openai/openai-agents-python/issues/5660
[S19]: https://docs.temporal.io/develop/python/integrations/openai-agents
[S20]: https://openai.github.io/openai-agents-python/release/
