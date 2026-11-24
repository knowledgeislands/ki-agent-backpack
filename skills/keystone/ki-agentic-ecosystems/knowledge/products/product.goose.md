---
id: product.goose
title: goose (Agentic AI Foundation)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Agentic AI Foundation
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.agent-skills:
    predicate: dcterms:conformsTo
  spec.acp:
    predicate: dcterms:conformsTo
---

# goose (Agentic AI Foundation)

goose lets its users hand research, writing, automation, data analysis and coding to an agent on their own machine: "goose is a general-purpose AI agent that runs on your machine" ([S1]). The maker writes its name in lower case. Block donated it to the Agentic AI Foundation (AAIF) at the Linux Foundation, and on 7 April 2026 its repository moved from `block/goose` to the `aaif-goose` organisation ([S4], [S2]). It runs as "a native desktop app for macOS, Linux, and Windows" and "a full CLI", as an ACP server for editors, and in an experimental VS Code extension ([S1], [S14], [S15]). It is open source under Apache 2.0 ([S1], [S2]). The latest release seen is v1.60.2, of 20 November 2026 ([S3]). It is an [agent harness][industry.agent-harness] and a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | "over 85 providers", Anthropic, OpenAI, Gemini, OpenRouter and Bedrock among them; local models through Ollama, LM Studio and others, or "directly inside goose"; Claude Code, Codex and Amp as ACP providers | [S1], [S5], [S6] |
| [Session][industry.session] | `yes` | Sessions are stored "in goose's local SQLite database"; "resume any session from your history" | [S7] |
| [Subagent][industry.subagent] | `yes` | "Spawn independent subagents to handle tasks in parallel", sequential or parallel; disabled in manual and smart approval modes | [S1], [S8] |
| [Agent team][industry.agent-team] | `unknown` | The subagents page describes only subagents working for the main session | [S8] |
| [Skill][industry.skill] | `yes` | `SKILL.md` folders in `~/.agents/skills/`, `.agents/skills/` and plugins, with `.goose/skills/` and `.claude/skills/` for compatibility; "compatible with Claude Desktop and other agents that support Agent Skills" | [S9] |
| [Instruction file][industry.instruction-file] | `yes` | "goose looks for AGENTS.md then .goosehints files by default", global and nested; `CONTEXT_FILE_NAMES` adds others such as `CLAUDE.md` | [S10] |
| [Plugin][industry.plugin] | `yes` | "Plugins are packages that extend goose with reusable components", skills and hooks, installed with `goose plugin install`; no marketplace mentioned | [S11] |
| [MCP][spec.mcp] | `yes` | "goose was one of the earliest adopters", with 70+ documented extensions and MCP Apps in the desktop app | [S1] |
| [Execution environment][industry.environment] | `partial` | `none` by default: the macOS seatbelt sandbox "was experimental and has been removed", and the server process "runs with the same permissions as your user account"; `container` only through the Container Use MCP extension | [S12], [S13] |
| [Client][industry.client] | `yes` | Desktop and CLI; Zed, JetBrains and VS Code over ACP; experimental VS Code extension and Telegram gateway; Desktop can attach to a remote `goose serve` | [S1], [S15], [S16], [S20] |
| [Agent host][industry.agent-host] | `partial` | Runs Claude Code, Codex and Amp through ACP adapters as "providers"; "ACP session ID differs from goose session ID" | [S6] |
| [Channel][industry.channel] | `unknown` | Not found; the Telegram gateway is a way to drive goose remotely, a client | [S16] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found; experimental roaming, in source builds only, lets a person delegate a task to a remote goose's session | [S19] |
| [ACP][spec.acp] | `yes` | As agent: "goose works as an ACP server"; as client: it uses ACP agents as providers | [S1], [S6], [S14] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | [S1] |
| [Bot][system.bot] | `partial` | `goose schedule` runs recipes on a cron schedule; custom agents are named roles but "Not directly" schedulable; no durable identity or memory of its own described | [S17], [S18] |

## State of play

- **2026-11-20:** Version 1.60.2, the latest release seen. ([S3])
- **2026-11-17:** Version 1.60.0 adds a skill operation and drops the Skills extension, which the skills page still describes as enabled by default. ([S3], [S9])
- **2026-11-10:** Version 1.59.0 lets completed subagent delegates be resumed for follow-up and filters ACP session lists by client tags. ([S3])
- **2026-04-07:** "Block has donated goose to the Agentic AI Foundation (AAIF)"; the repository moves to `aaif-goose/goose` and the docs to goose-docs.ai. ([S4])
- **2026-02-23:** Version 1.25.0 brings an optional macOS seatbelt sandbox, since marked experimental and removed. ([S12])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | AAIF, goose home | 2026-11-22 |
| [S2] | AAIF, aaif-goose/goose repository | 2026-11-22 |
| [S3] | AAIF, goose releases | 2026-11-22 |
| [S4] | goose blog, goose has a new home: the Agentic AI Foundation (AAIF), 7 April 2026 | 2026-11-22 |
| [S5] | AAIF, Supported LLM providers | 2026-11-22 |
| [S6] | AAIF, ACP providers | 2026-11-22 |
| [S7] | AAIF, Session management | 2026-11-22 |
| [S8] | AAIF, Subagents | 2026-11-22 |
| [S9] | AAIF, Agent Skills | 2026-11-22 |
| [S10] | AAIF, Providing hints to goose | 2026-11-22 |
| [S11] | AAIF, Plugins | 2026-11-22 |
| [S12] | goose blog, goose v1.25.0: Sandboxed, Streamlined, and More Secure, 23 February 2026, with its later notice | 2026-11-22 |
| [S13] | AAIF, Isolated development environments | 2026-11-22 |
| [S14] | AAIF, Build an app over ACP | 2026-11-22 |
| [S15] | AAIF, goose for VS Code extension | 2026-11-22 |
| [S16] | AAIF, Telegram gateway | 2026-11-22 |
| [S17] | AAIF, CLI commands | 2026-11-22 |
| [S18] | AAIF, Custom agents | 2026-11-22 |
| [S19] | AAIF, Roaming agents | 2026-11-22 |
| [S20] | AAIF, Running a remote goose server | 2026-11-22 |

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
[spec.agent-skills]: ../specs/agent-skills/spec.agent-skills.md
[S1]: https://goose-docs.ai/
[S2]: https://github.com/aaif-goose/goose
[S3]: https://github.com/aaif-goose/goose/releases
[S4]: https://goose-docs.ai/blog/2026/04/07/goose-moves-to-aaif/
[S5]: https://goose-docs.ai/docs/getting-started/providers
[S6]: https://goose-docs.ai/docs/guides/acp-providers
[S7]: https://goose-docs.ai/docs/guides/sessions/session-management
[S8]: https://goose-docs.ai/docs/guides/context-engineering/subagents
[S9]: https://goose-docs.ai/docs/guides/context-engineering/using-skills
[S10]: https://goose-docs.ai/docs/guides/context-engineering/using-goosehints
[S11]: https://goose-docs.ai/docs/guides/context-engineering/plugins
[S12]: https://goose-docs.ai/blog/2026/02/23/goose-v1-25-0/
[S13]: https://goose-docs.ai/docs/tutorials/isolated-development-environments
[S14]: https://goose-docs.ai/docs/oi-kit/acp/
[S15]: https://goose-docs.ai/docs/experimental/vs-code-extension
[S16]: https://goose-docs.ai/docs/experimental/remote-access/telegram-gateway
[S17]: https://goose-docs.ai/docs/guides/goose-cli-commands
[S18]: https://goose-docs.ai/docs/guides/context-engineering/custom-agents
[S19]: https://goose-docs.ai/docs/guides/roaming-agents
[S20]: https://goose-docs.ai/docs/guides/remote-goose-server
