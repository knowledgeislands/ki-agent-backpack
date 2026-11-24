---
id: product.claude-desktop
title: Claude Desktop (Anthropic)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Anthropic
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-host:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
---

# Claude Desktop (Anthropic)

Claude Desktop brings "Claude's capabilities directly to your computer" ([S1]). Anthropic makes it: a desktop app with Chat, Cowork, which "brings Claude Code's agentic capabilities to knowledge work beyond coding" ([S3]), and a Code tab running Claude Code inside the app, so it is the [agent host][industry.agent-host] and [client][industry.client] of those sessions ([S2]). It runs on macOS 13 or later, Windows 10 or later and, in beta, Linux ([S1]). It is proprietary: Chat works on every plan, Claude Code and Cowork need a paid one ([S1]). The latest release seen is v6.28899.6, of 20 November 2026, bundling Claude Code 2.1.330 ([S7]).

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Claude models in the picker; a "third-party provider" means Claude through Bedrock, Google Cloud, Foundry or a gateway | [S2] |
| [Session][industry.session] | `yes` | Code sessions stay in the sidebar, archived and restored; cloud sessions "continue even if you close the app"; Cowork sessions are saved to the account | [S2], [S3] |
| [Subagent][industry.subagent] | `yes` | The Code tab runs the same engine as Claude Code; Cowork plugins can bundle sub-agents | [S9], [S3] |
| [Agent team][industry.agent-team] | `unknown` | Not described for Desktop | [S2] |
| [Skill][industry.skill] | `yes` | The Code tab loads `~/.claude/skills/`, and skills enabled on claude.ai sync to local and cloud sessions; the pages read do not name the specification | [S2] |
| [Instruction file][industry.instruction-file] | `yes` | Code tab: the same engine, "so your repo's CLAUDE.md files, settings, and MCP servers work"; Cowork projects carry their own instructions | [S9], [S3] |
| [Plugin][industry.plugin] | `yes` | Code-tab plugins bundle skills, agents, hooks, MCP and LSP, not in cloud or WSL sessions; Cowork plugins; desktop extensions as `.mcpb` packages | [S2], [S3], [S6] |
| [MCP][spec.mcp] | `yes` | Desktop extensions install local MCP servers in one click; connectors are "MCP servers with a graphical setup flow" | [S6], [S2] |
| [Execution environment][industry.environment] | `yes` | Cowork "runs tasks in a sandboxed virtual machine"; Code-tab sessions run local, in Anthropic's cloud, over SSH or in WSL, with worktrees and the Bash sandbox | [S1], [S3], [S2] |
| [Client][industry.client] | `yes` | A desktop window onto local, cloud, SSH and WSL sessions, with split view; Remote Control shows local sessions on claude.ai/code and mobile | [S2] |
| [Agent host][industry.agent-host] | `unknown` | Hosts Anthropic's own Claude Code, bundled and installed on SSH machines; nothing found on other makers' harnesses | [S2], [S7] |
| [Channel][industry.channel] | `unknown` | Dispatch routes phone messages to new Code sessions, closed to new users; no channel into a running session documented | [S2] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | Claude can "list, read, message, rename or archive" the user's other local, SSH and WSL sessions, not cloud or CLI sessions | [S2] |
| [ACP][spec.acp] | `unknown` | Not found | [S2] |
| [AHP][spec.ahp] | `unknown` | Not found | [S2] |
| [A2A][spec.a2a] | `unknown` | Not found | [S2] |
| [Bot][system.bot] | `unknown` | Dispatch is "a persistent conversation with Claude that lives in Cowork", not documented as a named bot with wakes. Scheduling: Cowork and Code-tab scheduled tasks, local or cloud | [S2], [S4], [S5] |

## State of play

- **2026-11-20:** Version 6.28899.6 bundles Claude Code 2.1.330; `/loop` tasks run for up to 30 days. ([S7])
- **2026-11-20:** Computer use, in beta, rolling out to Team and Enterprise plans. ([S8])
- **2026-11-19:** Version 6.28899.2: a breaking change to SSH plugin settings, and scheduled Cowork tasks raised to 10,000 turns. ([S7])
- **2026-11-17:** Release channels: Stable, the default, and Latest, updated "about once a day". ([S8], [S1])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Anthropic, Install Claude Desktop | 2026-11-22 |
| [S2] | Anthropic, Desktop application (Claude Code docs) | 2026-11-22 |
| [S3] | Anthropic, Get started with Claude Cowork | 2026-11-22 |
| [S4] | Anthropic, Schedule recurring tasks in Claude Cowork | 2026-11-22 |
| [S5] | Anthropic, Schedule recurring tasks in Claude Code Desktop | 2026-11-22 |
| [S6] | Anthropic, Getting started with local MCP servers on Claude Desktop | 2026-11-22 |
| [S7] | Anthropic, Claude Desktop changelog | 2026-11-22 |
| [S8] | Anthropic, Release notes | 2026-11-22 |
| [S9] | Anthropic, Claude Code overview | 2026-11-22 |

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
[S1]: https://support.claude.com/en/articles/10065433-install-claude-desktop
[S2]: https://code.claude.com/docs/en/desktop
[S3]: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
[S4]: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
[S5]: https://code.claude.com/docs/en/desktop-scheduled-tasks
[S6]: https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop
[S7]: https://claude.com/docs/cowork/claude-desktop-changelog
[S8]: https://support.claude.com/en/articles/12138966-release-notes
[S9]: https://code.claude.com/docs/en/overview
