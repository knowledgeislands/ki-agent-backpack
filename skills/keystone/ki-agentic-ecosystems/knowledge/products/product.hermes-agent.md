---
id: product.hermes-agent
title: Hermes Agent (Nous Research)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Nous Research
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.acp:
    predicate: dcterms:conformsTo
  spec.a2a:
    predicate: dcterms:conformsTo
---

# Hermes Agent (Nous Research)

Hermes Agent lets one person keep a personal agent that remembers them and works unattended, reached from a terminal, a desktop app or a chat app: "the self-improving AI agent", with "a built-in learning loop" that "creates skills from experience" and "searches its own past conversations", that can run "on a $5 VPS, a GPU cluster, or serverless infrastructure" ([S2]). Nous Research makes it, in the `NousResearch` GitHub organisation ([S1], [S2]). It runs as a terminal interface and CLI, a desktop app for macOS, Windows and Linux, a browser Webapp, a messaging gateway onto Telegram, Discord, Slack, WhatsApp, Signal, email and other platforms, and on Android through Termux ([S2], [S4], [S14], [S15]). It "is free and open source under the MIT license", with models and hosted services, such as the Nous Portal subscription, priced separately ([S1], [S2]). The latest release seen is v0.23.3, of 19 November 2026 ([S3]). It is an [agent harness][industry.agent-harness] and a [client][industry.client]; Orca runs it as a bot agent ([S23]).

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | "Use any model you want — Nous Portal, OpenRouter, OpenAI, your own endpoint", self-hosted Ollama, vLLM and LM Studio, and local models through a managed llama.cpp; "Switch with `hermes model`" | [S2], [S20], [S21] |
| [Session][industry.session] | `yes` | "Hermes Agent automatically saves every conversation as a session"; `hermes --continue` and `--resume` by id or title | [S5] |
| [Subagent][industry.subagent] | `yes` | `delegate_task` "spawns child AIAgent instances with isolated context"; "only its final summary enters the parent's context" | [S6] |
| [Agent team][industry.agent-team] | `yes` | Bot Mode: "Bots run routines, share group chats, and message each other", a room's lead bot can pick who answers; Kanban lets "multiple named agents collaborate" through a shared board | [S7], [S4], [S22] |
| [Skill][industry.skill] | `yes` | `SKILL.md` skills in `~/.hermes/skills/` and external folders, with progressive disclosure; the maker names the standard: "compatible with the agentskills.io open standard" | [S8], [S2] |
| [Instruction file][industry.instruction-file] | `yes` | `.hermes.md`, `AGENTS.override.md`, `AGENTS.md`, `CLAUDE.md` and `.cursorrules`, first match wins; `AGENTS.md` merged from the git root down and found progressively in subfolders; a global `SOUL.md` | [S9] |
| [Plugin][industry.plugin] | `yes` | "a plugin system for adding custom tools, hooks, and integrations without modifying core code"; `hermes plugins install` from a catalogue or Git; the catalogue passed 1,050 entries in v0.23.0 | [S10], [S4] |
| [MCP][spec.mcp] | `yes` | "Local stdio servers and remote HTTP MCP servers in the same config", with OAuth | [S11] |
| [Execution environment][industry.environment] | `yes` | `none` by default, the `local` terminal backend; `container` with Docker; `vendor-sandbox` with Modal, Daytona or Vercel Sandbox; SSH to another machine | [S13], [S12] |
| [Client][industry.client] | `yes` | Terminal (CLI and TUI), desktop, web (the Webapp, off by default, and a dashboard), messaging apps, Android through Termux, and editors over ACP | [S2], [S4], [S14], [S15], [S17] |
| [Agent host][industry.agent-host] | `partial` | Opt-in only: OpenAI turns can be handed to the Codex CLI app-server, "Hermes becomes the shell around it (sessions DB, slash commands, gateway, memory and skill review)" | [S19] |
| [Channel][industry.channel] | `yes` | The messaging gateway brings chats from many platforms into its sessions; webhooks "trigger Hermes agent runs", and `mirror_to_session` appends a delivery to a chat's session; inbound A2A tasks are "injected into a live gateway session" | [S15], [S16], [S18] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | "every Bot Chat carries the `message_agent` tool", delivering "into the teammate's canonical Bot Chat"; on a headless install it must be enabled by hand | [S7] |
| [ACP][spec.acp] | `yes` | As agent: "Hermes Agent can run as an ACP server, letting ACP-compatible hosts talk to Hermes over stdio", after installing the ACP extra | [S17] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `yes` | The A2A plugin in the repository "works in both directions": an Agent Card and JSON-RPC server inbound, `a2a_call` and other tools outbound, the toolset off by default | [S18] |
| [Bot][system.bot] | `yes` | Bot Mode, on by default in the desktop app: "Each Bot has its own role, model, memory, skills, and avatar"; routines are cron jobs: "Runs land in the Bot's own chat history" | [S7] |

## State of play

- **2026-11-21:** Orca v1.4.268 lets Orca bots "run on Cursor, GitHub Copilot and Hermes"; the year is from the Orca card's dating of that release. ([S23])
- **2026-11-19:** Version 0.23.3, a patch release rolling up about 370 pull requests since v0.23.2, with "full curated release notes" left for v0.24.0. ([S3])
- **2026-11-05:** Version 0.23.0, "The Hearth Release": the desktop workspace in a browser tab, "one gateway owns every conversation" with every surface attaching as a client, Group Chats that "run themselves", and pluggable delegation. ([S4])
- **2026-10-13:** Version 0.22.0, "The Threshold Release", with a guided first-run setup chat on a free trial model, connectors and one-click local models. ([S24])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Nous Research, Hermes Agent home | 2026-11-22 |
| [S2] | Nous Research, NousResearch/hermes-agent repository README | 2026-11-22 |
| [S3] | Nous Research, release v0.23.3 | 2026-11-22 |
| [S4] | Nous Research, release v0.23.0 | 2026-11-22 |
| [S5] | Nous Research, Hermes Agent docs: Sessions | 2026-11-22 |
| [S6] | Nous Research, Hermes Agent docs: Subagent Delegation | 2026-11-22 |
| [S7] | Nous Research, Hermes Agent docs: Bot Mode | 2026-11-22 |
| [S8] | Nous Research, Hermes Agent docs: Skills System | 2026-11-22 |
| [S9] | Nous Research, Hermes Agent docs: Context Files | 2026-11-22 |
| [S10] | Nous Research, Hermes Agent docs: Plugins | 2026-11-22 |
| [S11] | Nous Research, Hermes Agent docs: MCP | 2026-11-22 |
| [S12] | Nous Research, Hermes Agent docs: Security | 2026-11-22 |
| [S13] | Nous Research, Hermes Agent docs: Tools and Toolsets | 2026-11-22 |
| [S14] | Nous Research, Hermes Agent docs: Desktop | 2026-11-22 |
| [S15] | Nous Research, Hermes Agent docs: Messaging Gateway | 2026-11-22 |
| [S16] | Nous Research, Hermes Agent docs: Webhooks | 2026-11-22 |
| [S17] | Nous Research, Hermes Agent docs: ACP Host Integration | 2026-11-22 |
| [S18] | Nous Research, Hermes Agent docs: A2A (Agent-to-Agent) | 2026-11-22 |
| [S19] | Nous Research, Hermes Agent docs: Codex App-Server Runtime | 2026-11-22 |
| [S20] | Nous Research, Hermes Agent docs: Providers | 2026-11-22 |
| [S21] | Nous Research, Hermes Agent docs: Local Models | 2026-11-22 |
| [S22] | Nous Research, Hermes Agent docs: Kanban | 2026-11-22 |
| [S23] | Stably AI, Orca release v1.4.268 | 2026-11-22 |
| [S24] | Nous Research, release v0.22.0 | 2026-11-22 |

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
[S1]: https://hermes-agent.nousresearch.com/
[S2]: https://github.com/NousResearch/hermes-agent
[S3]: https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.3
[S4]: https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0
[S5]: https://hermes-agent.nousresearch.com/docs/user-guide/sessions
[S6]: https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation
[S7]: https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode
[S8]: https://hermes-agent.nousresearch.com/docs/user-guide/features/skills
[S9]: https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files
[S10]: https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins
[S11]: https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp
[S12]: https://hermes-agent.nousresearch.com/docs/user-guide/security
[S13]: https://hermes-agent.nousresearch.com/docs/user-guide/features/tools
[S14]: https://hermes-agent.nousresearch.com/docs/user-guide/desktop
[S15]: https://hermes-agent.nousresearch.com/docs/user-guide/messaging
[S16]: https://hermes-agent.nousresearch.com/docs/user-guide/messaging/webhooks
[S17]: https://hermes-agent.nousresearch.com/docs/user-guide/features/acp
[S18]: https://hermes-agent.nousresearch.com/docs/user-guide/messaging/a2a
[S19]: https://hermes-agent.nousresearch.com/docs/user-guide/features/codex-app-server-runtime
[S20]: https://hermes-agent.nousresearch.com/docs/integrations/providers
[S21]: https://hermes-agent.nousresearch.com/docs/user-guide/local-models
[S22]: https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban
[S23]: https://github.com/stablyai/orca/releases/tag/v1.4.268
[S24]: https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.0
