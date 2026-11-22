---
id: product.opencode
title: OpenCode (Anomaly)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Anomaly
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEM-HOME b and ECOSYSTEM-SHAPE a (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.acp:
    predicate: dcterms:conformsTo
---

# OpenCode (Anomaly)

OpenCode is "the open source coding agent", offered as "a terminal-based interface, desktop app, or web app" ([S1], [S2]). Anomaly makes it, "built in the open by Anomaly" with over a thousand contributors, in the `anomalyco` GitHub organisation ([S1], [S3]). It runs as a terminal interface and CLI, a desktop app in beta, a web interface from a local server and a new mobile app ([S1], [S2], [S3], [S13]). It is MIT open source, with free models, a $10-a-month OpenCode Go plan and paid inference for teams ([S1], [S2]). The latest release seen is v2.3.2, of 18 November 2026 ([S4]). It is an [agent harness][industry.agent-harness] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Many providers from the models.dev catalogue, "200+ providers, including local models" such as Ollama, LM Studio and vLLM; ChatGPT and GitHub Copilot sign-in | [S1], [S12] |
| [Session][industry.session] | `yes` | `/sessions` returns to an earlier session; the server API lists, forks and archives sessions | [S14], [S15] |
| [Subagent][industry.subagent] | `yes` | The `subagent` tool runs child sessions with fresh context; "Subagents always run in the background" since v2.3.0 | [S5], [S4] |
| [Agent team][industry.agent-team] | `unknown` | The agents page describes only children reporting to their parent | [S5] |
| [Skill][industry.skill] | `yes` | `SKILL.md` folders in `.opencode/skills`, `.claude/skills`, `.agents/skills` and global folders, loaded by the `skill` tool; the pages read do not name the specification | [S6] |
| [Instruction file][industry.instruction-file] | `yes` | `AGENTS.md`, global then up and down the tree, with `CLAUDE.md` as fallback; an `instructions` list of files, globs or URLs | [S7] |
| [Plugin][industry.plugin] | `yes` | Plugins from npm, Git or folders add "tools, hooks, integrations, commands, agents"; no marketplace mentioned | [S9] |
| [MCP][spec.mcp] | `yes` | Local servers over stdio and remote servers over Streamable HTTP, with OAuth | [S8] |
| [Execution environment][industry.environment] | `no` | `none`: "`shell` runs with the host user's filesystem, process, and network authority"; permission rules only | [S11] |
| [Client][industry.client] | `yes` | Terminal, desktop, web and mobile; Zed or another editor through ACP | [S1], [S10], [S13] |
| [Agent host][industry.agent-host] | `unknown` | Console harnesses such as Claude Code and Codex route model calls through its gateway; nothing shows OpenCode running their sessions | [S16] |
| [Channel][industry.channel] | `partial` | No chat or webhook channels; the server API's `POST /synthetic` lets outside input reach a session | [S15] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | The API has no route between sessions, only parent and child links and forks | [S15] |
| [ACP][spec.acp] | `yes` | As agent: `opencode acp` runs as "an Agent Client Protocol agent", with Zed the named client | [S10] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `unknown` | Not found. Scheduling: background subagents and a background service, no scheduler documented | [S4], [S15] |

## State of play

- **2026-11-18:** Versions 2.3.1 and 2.3.2: shell commands that time out keep running in the background, and `CLAUDE.md` is read again as a fallback. ([S4])
- **2026-11-17:** Version 1.19.6 offers 1.x users the upgrade to OpenCode 2. ([S4])
- **2026-11-13:** Version 2.3.0 runs subagents in the background by default. ([S4])
- **2026-09-11:** Version 2.0.0, with breaking changes to plugins, the server API and terminal configuration; the tag page gives no year, which comes from secondary coverage. ([S17])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Anomaly, OpenCode home | 2026-11-22 |
| [S2] | Anomaly, OpenCode docs introduction | 2026-11-22 |
| [S3] | Anomaly, anomalyco/opencode repository | 2026-11-22 |
| [S4] | Anomaly, OpenCode changelog | 2026-11-22 |
| [S5] | Anomaly, Agents | 2026-11-22 |
| [S6] | Anomaly, Skills | 2026-11-22 |
| [S7] | Anomaly, Rules | 2026-11-22 |
| [S8] | Anomaly, MCP servers | 2026-11-22 |
| [S9] | Anomaly, Plugins | 2026-11-22 |
| [S10] | Anomaly, ACP | 2026-11-22 |
| [S11] | Anomaly, Permissions | 2026-11-22 |
| [S12] | Anomaly, Providers | 2026-11-22 |
| [S13] | Anomaly, CLI: web | 2026-11-22 |
| [S14] | Anomaly, CLI: TUI | 2026-11-22 |
| [S15] | Anomaly, API overview | 2026-11-22 |
| [S16] | Anomaly, Console: harnesses | 2026-11-22 |
| [S17] | Anomaly, v2.0.0 release tag, with secondary coverage for its year | 2026-11-22 |

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
[S1]: https://opencode.ai
[S2]: https://opencode.ai/docs
[S3]: https://github.com/anomalyco/opencode
[S4]: https://opencode.ai/changelog
[S5]: https://opencode.ai/docs/agents
[S6]: https://opencode.ai/docs/skills
[S7]: https://opencode.ai/docs/rules
[S8]: https://opencode.ai/docs/mcp-servers
[S9]: https://opencode.ai/docs/plugins
[S10]: https://opencode.ai/docs/acp
[S11]: https://opencode.ai/docs/permissions/
[S12]: https://opencode.ai/docs/providers/
[S13]: https://opencode.ai/docs/cli/web/
[S14]: https://opencode.ai/docs/cli/tui/
[S15]: https://opencode.ai/docs/api/
[S16]: https://opencode.ai/docs/console/harnesses/
[S17]: https://github.com/anomalyco/opencode/releases/tag/v2.0.0
