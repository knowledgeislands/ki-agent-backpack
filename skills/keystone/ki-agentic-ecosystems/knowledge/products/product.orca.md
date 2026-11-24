---
id: product.orca
title: Orca (Stably AI)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Stably AI
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-host:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  orca.app:
    predicate: skos:related
  orca.runtime:
    predicate: skos:related
---

# Orca (Stably AI)

Orca lets one person run many coding agents side by side, each in its own git worktree: "the agent development environment", "a desktop IDE for running multiple AI coding agents side by side" ([S1], [S2]). Stably AI makes it, backed by Y Combinator, in the `stablyai` GitHub organisation ([S1], [S2]). It is an [agent host][industry.agent-host] for other makers' agent CLIs and a [client][industry.client] onto their sessions: an Electron desktop app for macOS, Windows and Linux, a phone companion, remote Orca servers, SSH machines and cloud VMs, and the `orca` CLI ([S1], [S2], S10). It is MIT open source and free; its agents run on "the Claude Code or Codex you already pay for" ([S1], [S2]). The latest release seen is v1.4.269, of 21 November 2026, the version installed on sol ([S7], S10). Its maker's own words for it are on the vendor cards [Orca app (Orca)][orca.app] and [Orca runtime (Orca)][orca.runtime].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Whatever agent CLI is picked, "Works with any CLI agent", among them Claude Code, Codex, Gemini CLI, Grok, OpenCode and Goose; `agent launch --model` takes a provider's model id | [S1], [S2], S10 |
| [Session][industry.session] | `yes` | "Working chats resume automatically after an Orca restart"; resume from Session History in a new chat or CLI | [S4] |
| [Subagent][industry.subagent] | `partial` | No agent of its own; through Orchestration a coordinator agent "splits the work, starts worker agents in their own workspaces" | [S1], S10 |
| [Agent team][industry.agent-team] | `yes` | Orchestration runs with tasks, decision gates and ask and reply; `orca claude-teams` opens Claude Code agent teams in Orca splits; observed in the CLI help | [S7], S10 |
| [Skill][industry.skill] | `yes` | Ships `SKILL.md` skills, installed into the shared `.agents/skills`; each bot has one agent-neutral skills folder | [S5], [S7] |
| [Instruction file][industry.instruction-file] | `partial` | No loader of its own: `CLAUDE.md` and `AGENTS.md` "are left alone — they belong to the agent"; bots have Soul and Memory editors | [S3], [S6], [S8] |
| [Plugin][industry.plugin] | `yes` | "Themes, editors, languages, and panels from the community, installed in a click"; `orca plugin install` from a catalog, Git repository or folder | [S1], S10 |
| [MCP][spec.mcp] | `partial` | Orca registers servers and "those tools appear inside agent CLIs that support MCP", so the agent is the MCP client; per-bot MCP tools | [S5], [S2] |
| [Execution environment][industry.environment] | `yes` | Worktree isolation; per-workspace environment recipes for a "cloud sandbox, VM, SSH host, or local container" | [S1], S10 |
| [Client][industry.client] | `yes` | Desktop app, phone companion, terminal or chat view per agent, CLI; web unknown | [S2], [S4] |
| [Agent host][industry.agent-host] | `yes` | Its core role: it hosts other makers' agent CLIs, Claude Code, Codex, Cursor CLI and others, in terminals or a structured chat | [S1], [S4] |
| [Channel][industry.channel] | `yes` | Bots take jobs "from Slack, Linear, GitHub, Gmail or a webhook" | [S2], [S3] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | `orca orchestration send` sends an "inter-agent message" to a run, dispatch or bot, with an inbox and replies; observed in the CLI help | S10 |
| [ACP][spec.acp] | `partial` | As client, in the experimental native chat: "Grok as a structured chat over the Agent Client Protocol" | [S9] |
| [AHP][spec.ahp] | `unknown` | No source found | None |
| [A2A][spec.a2a] | `unknown` | No source found | None |
| [Bot][system.bot] | `partial` | Orca Bots, in beta: each bot has "a name, a purpose, a memory and automations", in a folder on one computer, woken by schedules, events, Slack, GitHub and Linear | [S3], [S7] |

## State of play

- **2026-11-21:** Version 1.4.269: bots run on eight more agents, among them Kiro, Kimi Code, Gemini CLI and Goose; the phone app does what the desktop does; one agent-neutral skills folder per bot. ([S7])
- **2026-11-21:** Version 1.4.268: bots run on Cursor, GitHub Copilot and Hermes; "Chats cut by crash or restart can continue". ([S8])
- **2026-10-08:** Version 1.4.223: Grok runs as a structured chat over ACP in the experimental native chat. ([S9])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Stably AI, stablyai/orca README | 2026-11-22 |
| [S2] | Stably AI, Orca, the agent development environment | 2026-11-22 |
| [S3] | Stably AI, Orca docs: Bots | 2026-11-22 |
| [S4] | Stably AI, Orca docs: Chat UI | 2026-11-22 |
| [S5] | Stably AI, Orca docs: skills registry and MCP | 2026-11-22 |
| [S6] | Stably AI, Orca docs: agent hooks and memory | 2026-11-22 |
| [S7] | Stably AI, release v1.4.269 | 2026-11-22 |
| [S8] | Stably AI, release v1.4.268 | 2026-11-22 |
| [S9] | Stably AI, release v1.4.223 | 2026-11-22 |
| S10 | Orca CLI 1.4.269 help, read on sol: `orca --help`, `skills list`, `agent launch --help`, `orchestration send --help`, `claude-teams --help`, no URL | 2026-11-22 |

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
[orca.app]: ../vendors/orca/orca.app.md
[orca.runtime]: ../vendors/orca/orca.runtime.md
[S1]: https://github.com/stablyai/orca
[S2]: https://orca.dev/
[S3]: https://orca.dev/docs/bots
[S4]: https://orca.dev/docs/agents/native-chat
[S5]: https://orca.dev/docs/cli/skills
[S6]: https://orca.dev/docs/agents/hooks-memory
[S7]: https://github.com/stablyai/orca/releases/tag/v1.4.269
[S8]: https://github.com/stablyai/orca/releases/tag/v1.4.268
[S9]: https://github.com/stablyai/orca/releases/tag/v1.4.223
