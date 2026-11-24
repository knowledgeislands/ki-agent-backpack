---
id: product.cursor
title: Cursor (Anysphere)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Anysphere
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

# Cursor (Anysphere)

Cursor lets developers build software with agents: "Cursor is a coding agent for building ambitious software", "the AI editor and coding agent" ([S1]). Anysphere, Inc. makes it, and on 14 August 2026 "Cursor has officially been acquired by SpaceX" ([S15], [S17]). It runs as a desktop editor with an Agents Window, a terminal CLI, on the web, on iOS, in Slack, Linear and GitHub, and through an API ([S7], [S9], [S15]). It is sold by subscription, from a free tier to Enterprise; no open-source licence was seen ([S16]). The latest desktop release seen is 3.31, undated ([S15]), and the latest CLI v2026.11.17 ([S14]). It is an [agent harness][industry.agent-harness] and a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Over 60 models from Anthropic, Cursor's own Composer, DeepSeek, Google, Z.ai, OpenAI, Moonshot, Meta and xAI's Grok; local models unknown | [S1], [S16] |
| [Session][industry.session] | `yes` | Agents hand off between cloud and local; a subagent run returns an agent id "to resume it later" | [S3], [S9] |
| [Subagent][industry.subagent] | `yes` | The agent "can launch a subagent automatically"; definitions in `.cursor/agents/`, `.claude/agents/` or `.codex/agents/`; worktree or cloud-VM isolation | [S3] |
| [Agent team][industry.agent-team] | `partial` | No peer messaging in the editor; the Agent SDK's peer connection lets one agent ask another | [S3], [S10] |
| [Skill][industry.skill] | `yes` | "Agent Skills is an open standard": `SKILL.md` from `.agents/skills/`, `.cursor/skills/`, and `.claude/skills/` and `.codex/skills/` for compatibility | [S4] |
| [Instruction file][industry.instruction-file] | `yes` | `.cursor/rules/*.mdc`, `AGENTS.md` at the root and nested, user and team rules; `CLAUDE.md` not mentioned | [S5] |
| [Plugin][industry.plugin] | `yes` | Plugins "package rules, skills, agents, commands, MCP servers, and hooks", in a reviewed marketplace | [S13] |
| [MCP][spec.mcp] | `yes` | MCP servers in settings and plugins | [S1], [S6], [S13] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox`: Seatbelt on macOS, Landlock and seccomp on Linux, network blocked by default; cloud agents in "isolated VMs", `vendor-sandbox`; self-hosted machines | [S7], [S12] |
| [Client][industry.client] | `yes` | Desktop, terminal, web, iOS, Slack, Linear and GitHub; JetBrains and Neovim through ACP | [S6], [S7], [S9] |
| [Agent host][industry.agent-host] | `unknown` | The Agents Window page does not mention other makers' agents | [S9] |
| [Channel][industry.channel] | `yes` | Agent SDK channels route Slack, Teams, GitHub, GitLab, Bitbucket, PagerDuty and webhooks into agent sessions | [S11] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | The Agent SDK's peer `ask` returns a session id that can be passed back "to continue the specialist's earlier work" | [S10] |
| [ACP][spec.acp] | `yes` | As agent: "run `agent acp` and connect a custom client over stdio using JSON-RPC" | [S6] |
| [AHP][spec.ahp] | `unknown` | Not mentioned | [S1] |
| [A2A][spec.a2a] | `unknown` | The agent-to-agent guide uses MCP and does not mention A2A | [S10] |
| [Bot][system.bot] | `partial` | Automations keep memories across runs in `MEMORIES.md` and wake on a schedule or on events; no named identity confirmed | [S8] |

## State of play

- **2026-11-17:** CLI v2026.11.17, its date read from its version: a private `/tmp` for sandboxed Linux commands, local MCP servers on self-hosted workers. ([S14])
- **2026-11-06:** Voice chat with agents in the editor, the Agents Window, the web and iOS. ([S2])
- **2026-10-20:** The Agent SDK: agents as code folders with instructions, skills, MCP connections and channels, deployed with `agent-sdk deploy`. ([S2], [S11])
- **2026-08-14:** "Cursor is now a part of SpaceX". ([S17])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Cursor, Docs | 2026-11-22 |
| [S2] | Cursor, Changelog | 2026-11-22 |
| [S3] | Cursor, Subagents | 2026-11-22 |
| [S4] | Cursor, Agent Skills | 2026-11-22 |
| [S5] | Cursor, Rules | 2026-11-22 |
| [S6] | Cursor, CLI: ACP | 2026-11-22 |
| [S7] | Cursor, Cloud Agents | 2026-11-22 |
| [S8] | Cursor, Automations | 2026-11-22 |
| [S9] | Cursor, Agents Window | 2026-11-22 |
| [S10] | Cursor, Agent SDK: agent-to-agent | 2026-11-22 |
| [S11] | Cursor, Agent SDK: channels | 2026-11-22 |
| [S12] | Cursor, Run modes | 2026-11-22 |
| [S13] | Cursor, Plugins | 2026-11-22 |
| [S14] | Cursor, CLI changelog | 2026-11-22 |
| [S15] | Cursor, Downloads | 2026-11-22 |
| [S16] | Cursor, Pricing | 2026-11-22 |
| [S17] | Cursor blog, Cursor is now a part of SpaceX, 14 August 2026 | 2026-11-22 |

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
[S1]: https://cursor.com/docs
[S2]: https://cursor.com/changelog
[S3]: https://cursor.com/docs/subagents
[S4]: https://cursor.com/docs/skills
[S5]: https://cursor.com/docs/rules
[S6]: https://cursor.com/docs/cli/acp
[S7]: https://cursor.com/docs/cloud-agent
[S8]: https://cursor.com/docs/cloud-agent/automations
[S9]: https://cursor.com/docs/agent/agents-window
[S10]: https://cursor.com/docs/agent-sdk/guides/agent-to-agent
[S11]: https://cursor.com/docs/agent-sdk/reference/channels
[S12]: https://cursor.com/docs/agent/security/run-modes
[S13]: https://cursor.com/docs/plugins
[S14]: https://cursor.com/docs/cli/changelog
[S15]: https://cursor.com/downloads
[S16]: https://cursor.com/pricing
[S17]: https://cursor.com/blog/joining-spacex
