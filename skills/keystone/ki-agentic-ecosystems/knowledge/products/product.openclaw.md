---
id: product.openclaw
title: OpenClaw (OpenClaw Foundation)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: OpenClaw Foundation
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-host:
    predicate: skos:broadMatch
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.acp:
    predicate: dcterms:conformsTo
---

# OpenClaw (OpenClaw Foundation)

OpenClaw is a personal AI agent its user controls from the chat apps they already use, "the AI that really does things" ([S1]). The OpenClaw Foundation makes it, a US 501(c)(3) that "employs the core team and signs releases"; Peter Steinberger created it, and it was called Clawd and then Moltbot before OpenClaw ([S1], [S2], [S4]). A local Gateway is "the local control plane for sessions, tools, events, and channel connections", with a CLI, a terminal interface, a browser Control UI and apps for desktop and mobile ([S2]). It runs its own agent and other makers' harnesses, so it is an [agent harness][industry.agent-harness] and an [agent host][industry.agent-host] ([S13], [S14]). It is MIT open source: "No subscription. No hosted tier. No token." ([S1]). The latest release seen is 2026.11.6, of 19 November 2026 ([S3]). It is a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Hosted, subscription, gateway or local models; new models arrive through a hosted catalogue | [S1], [S19] |
| [Session][industry.session] | `yes` | A session store per agent; the ACP bridge lists and resumes sessions | [S10], [S14] |
| [Subagent][industry.subagent] | `yes` | `sessions_spawn` starts "an isolated sub-agent session for background work", nesting up to depth 5 | [S11] |
| [Agent team][industry.agent-team] | `yes` | Several isolated agents on one Gateway; `openclaw agents team create` makes a coordinator, researcher, writer and reviewer; agent-to-agent access on by default | [S10] |
| [Skill][industry.skill] | `yes` | `SKILL.md` folders from the workspace, a shared directory and bundled sources, shared through ClawHub; the docs say "portable Agent Skills" without naming the specification's site | [S5], [S18] |
| [Instruction file][industry.instruction-file] | `yes` | Workspace `AGENTS.md`, `SOUL.md`, `USER.md`, `IDENTITY.md`, `MEMORY.md`, `BOOT.md` and `BOOTSTRAP.md`; `CLAUDE.md` not mentioned | [S5], [S6] |
| [Plugin][industry.plugin] | `yes` | Plugins, shared through ClawHub; models, harnesses and channels are plugins | [S2], [S17] |
| [MCP][spec.mcp] | `yes` | Client to servers over stdio, SSE or Streamable HTTP, with OAuth; `openclaw mcp serve` also serves Gateway conversations | [S15] |
| [Execution environment][industry.environment] | `yes` | `container` or remote: sandboxing "off by default", with Docker, Podman, SSH, OpenShell and cloud boxes; the Gateway stays on the machine | [S12] |
| [Client][industry.client] | `yes` | CLI, terminal interface, Control UI, desktop and mobile apps, and 33 chat channels | [S2], [S17] |
| [Agent host][industry.agent-host] | `yes` | Runs Codex through its app server and Claude through `claude-cli`; Claude Code, Gemini CLI, OpenCode and Cursor as ACP harnesses through acpx | [S13], [S14] |
| [Channel][industry.channel] | `yes` | 33 channels, among them WhatsApp, Telegram, Slack, Discord, Signal and iMessage; Gateway HTTP hooks; Gmail through Pub/Sub | [S17], [S9] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | `sessions_send` will "Run another session on the same Gateway and optionally wait" | [S11] |
| [ACP][spec.acp] | `yes` | Both: `openclaw acp` serves ACP, bridging to the Gateway, and OpenClaw drives external harnesses as an ACP client | [S14] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `partial` | A bundled A2A 1.0 channel plugin, server and client, text and JSON only, without streaming, push notifications or cancellation | [S16] |
| [Bot][system.bot] | `yes` | A named persona in `IDENTITY.md` and `SOUL.md`, Markdown memory with nightly consolidation, and scheduled wakes through automations, its built-in scheduler, alias `cron` | [S5], [S7], [S8], [S9] |

## State of play

- **2026-11-19:** Version 2026.11.6; the 2026.11.10-beta.1 pre-release adds agent templates from ClawHub, OpenClaw ID and browser handoff. ([S3])
- **2026-11-18:** 2026.10.33 extended-stable, with MCP-event automations and Claude Code and Codex transcript import. ([S3])
- **2026-11-06:** New models found through a hosted catalogue without an update. ([S19])
- **2026-11-05:** OpenClaw Multiplayer introduced on the blog. ([S19])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | OpenClaw, home | 2026-11-22 |
| [S2] | OpenClaw, repository README | 2026-11-22 |
| [S3] | OpenClaw, releases | 2026-11-22 |
| [S4] | OpenClaw blog, Introducing OpenClaw | 2026-11-22 |
| [S5] | OpenClaw, Agent workspace | 2026-11-22 |
| [S6] | OpenClaw, SOUL.md | 2026-11-22 |
| [S7] | OpenClaw, Memory | 2026-11-22 |
| [S8] | OpenClaw, Heartbeat | 2026-11-22 |
| [S9] | OpenClaw, Automations (cron jobs) | 2026-11-22 |
| [S10] | OpenClaw, Multi-agent routing | 2026-11-22 |
| [S11] | OpenClaw, Session tools | 2026-11-22 |
| [S12] | OpenClaw, Sandboxing | 2026-11-22 |
| [S13] | OpenClaw, Agent runtimes | 2026-11-22 |
| [S14] | OpenClaw, CLI: acp | 2026-11-22 |
| [S15] | OpenClaw, CLI: mcp | 2026-11-22 |
| [S16] | OpenClaw, A2A channel | 2026-11-22 |
| [S17] | OpenClaw, Channels | 2026-11-22 |
| [S18] | OpenClaw, CLI: skills | 2026-11-22 |
| [S19] | OpenClaw, blog index | 2026-11-22 |

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
[S1]: https://openclaw.ai
[S2]: https://github.com/openclaw/openclaw
[S3]: https://github.com/openclaw/openclaw/releases
[S4]: https://openclaw.ai/blog/introducing-openclaw
[S5]: https://docs.openclaw.ai/concepts/agent-workspace
[S6]: https://docs.openclaw.ai/concepts/soul
[S7]: https://docs.openclaw.ai/concepts/memory
[S8]: https://docs.openclaw.ai/gateway/heartbeat
[S9]: https://docs.openclaw.ai/automation/cron-jobs
[S10]: https://docs.openclaw.ai/concepts/multi-agent
[S11]: https://docs.openclaw.ai/concepts/session-tool
[S12]: https://docs.openclaw.ai/gateway/sandboxing
[S13]: https://docs.openclaw.ai/concepts/agent-runtimes
[S14]: https://docs.openclaw.ai/cli/acp
[S15]: https://docs.openclaw.ai/cli/mcp
[S16]: https://docs.openclaw.ai/channels/a2a
[S17]: https://docs.openclaw.ai/channels
[S18]: https://docs.openclaw.ai/cli/skills
[S19]: https://openclaw.ai/blog
