---
id: product.codex
title: Codex (OpenAI)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: OpenAI
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEM-HOME b and ECOSYSTEM-SHAPE a (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.agent-skills:
    predicate: dcterms:conformsTo
  openai.codex:
    predicate: skos:related
---

# Codex (OpenAI)

Codex lets a developer give coding work to an OpenAI agent, locally or in the cloud. OpenAI makes it: the CLI is "a coding agent from OpenAI that runs locally on your computer", with a desktop app, an IDE extension for VS Code, Cursor and Windsurf, and Codex Web, the "cloud-based agent" ([S8]); the ChatGPT mobile app can drive a paired desktop ([S7]). The CLI is Apache-2.0 open source, used through a ChatGPT plan or an API key ([S8]). The latest stable CLI seen is 0.171.0, of 20 November 2026 ([S9]), and the latest desktop app 26.1111, of 12 November 2026 ([S6]). It is an [agent harness][industry.agent-harness] and a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills]. Its maker's own words for it are on the vendor card [Codex (OpenAI)][openai.codex].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | OpenAI models by default, GPT-6.2 Sol from CLI 0.171.0; custom providers, local models through `ollama` and `lmstudio` (`--oss`), Amazon Bedrock and Google Vertex | [S6], [S10] |
| [Session][industry.session] | `yes` | Threads saved to disk as JSONL; `thread/resume` by id, `thread/fork` and archive | [S1] |
| [Subagent][industry.subagent] | `yes` | "Current Codex releases enable subagent workflows by default"; built-in `default`, `worker` and `explorer`, custom agents as TOML | [S2] |
| [Agent team][industry.agent-team] | `partial` | Subagents return summaries to the parent; CLI 0.168.0 added an agent message board and agent mailboxes, maturity not stated | [S2], [S6] |
| [Skill][industry.skill] | `yes` | Skills "build on the open agent skills standard": folders with a `SKILL.md` in `.agents/skills` and elsewhere | [S4] |
| [Instruction file][industry.instruction-file] | `yes` | `AGENTS.override.md`, then `AGENTS.md`, from `~/.codex` and the repository root down; other names only if listed in `project_doc_fallback_filenames` | [S3] |
| [Plugin][industry.plugin] | `yes` | An "installable bundle that can include skills and Model Context Protocol (MCP) servers", plus hooks, in one directory shared with ChatGPT | [S5] |
| [MCP][spec.mcp] | `yes` | STDIO and Streamable HTTP servers in `config.toml`, shared by the app, CLI and IDE extension | [S11] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox` with "platform-native enforcement", Seatbelt, bubblewrap and the Windows sandbox, in `read-only`, `workspace-write` or `danger-full-access`; cloud work in "a managed, isolated environment", `vendor-sandbox` | [S12] |
| [Client][industry.client] | `yes` | Terminal TUI, with remote attach; VS Code extension; desktop app; web; the ChatGPT mobile app through a paired desktop | [S1], [S7], [S8] |
| [Agent host][industry.agent-host] | `unknown` | No source found | None |
| [Channel][industry.channel] | `partial` | Scheduled tasks can fire on Gmail, Slack and GitHub events, on web and mobile; in Slack, follow-ups in a thread continue a Codex Cloud task | [S13], [S14] |
| [Cross-session messaging][industry.cross-session-messaging] | `partial` | Agent messaging between threads in the changelog: message-board notifications through agent mailboxes, and 0.171.0's acknowledgements "waking idle recipients" | [S6] |
| [ACP][spec.acp] | `partial` | Only through a separate adapter: `agentclientprotocol/codex-acp` "starts the Codex App Server, translates ACP requests" | [S16] |
| [AHP][spec.ahp] | `unknown` | No source found | None |
| [A2A][spec.a2a] | `unknown` | No source found | None |
| [Bot][system.bot] | `unknown` | Not in Codex itself; ChatGPT's dots, named assistants with notes, schedules and triggers, "create or continue local Codex tasks". Scheduling: scheduled tasks on an RRULE cadence | [S15], [S13] |

## State of play

- **2026-11-20:** CLI 0.171.0: GPT-6.2 Sol becomes the default model, and `codex exec --remote`, `/rc` and `/remote` arrive for remote control and pairing. ([S6], [S9])
- **2026-11-18:** ChatGPT for iOS 1.2026.314 picks a project in the cloud or on a paired computer. ([S6])
- **2026-11-17:** GPT-6.2 Astra and Sol released for ChatGPT Work and Codex. ([S6])
- **2026-11-13:** CLI 0.168.0 builds out the agent message board, replacing `features.multi_agent` with `agents.enabled`. ([S6])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | OpenAI, App Server | 2026-11-22 |
| [S2] | OpenAI, Subagents | 2026-11-22 |
| [S3] | OpenAI, AGENTS.md | 2026-11-22 |
| [S4] | OpenAI, Build skills | 2026-11-22 |
| [S5] | OpenAI, Skills and plugins | 2026-11-22 |
| [S6] | OpenAI, ChatGPT and Codex changelog | 2026-11-22 |
| [S7] | OpenAI, Remote connections | 2026-11-22 |
| [S8] | OpenAI, openai/codex repository README | 2026-11-22 |
| [S9] | OpenAI, openai/codex releases | 2026-11-22 |
| [S10] | OpenAI, Advanced configuration | 2026-11-22 |
| [S11] | OpenAI, MCP | 2026-11-22 |
| [S12] | OpenAI, Sandboxing | 2026-11-22 |
| [S13] | OpenAI, Scheduled tasks | 2026-11-22 |
| [S14] | OpenAI, Slack | 2026-11-22 |
| [S15] | OpenAI, Dots: tasks and memory | 2026-11-22 |
| [S16] | agentclientprotocol/codex-acp, GitHub | 2026-11-22 |

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
[openai.codex]: ../vendors/openai/openai.codex.md
[S1]: https://learn.chatgpt.com/docs/app-server
[S2]: https://learn.chatgpt.com/docs/agent-configuration/subagents
[S3]: https://learn.chatgpt.com/docs/agent-configuration/agents-md
[S4]: https://learn.chatgpt.com/docs/build-skills
[S5]: https://learn.chatgpt.com/docs/skills-and-plugins
[S6]: https://learn.chatgpt.com/docs/changelog
[S7]: https://learn.chatgpt.com/docs/remote-connections
[S8]: https://github.com/openai/codex
[S9]: https://github.com/openai/codex/releases
[S10]: https://learn.chatgpt.com/docs/config-file/config-advanced.md
[S11]: https://learn.chatgpt.com/docs/extend/mcp.md
[S12]: https://learn.chatgpt.com/docs/sandboxing.md
[S13]: https://learn.chatgpt.com/docs/automations.md
[S14]: https://learn.chatgpt.com/docs/third-party/slack.md
[S15]: https://learn.chatgpt.com/docs/dots/tasks-and-memory.md
[S16]: https://github.com/agentclientprotocol/codex-acp
