---
id: product.claude-code
title: Claude Code (Anthropic)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Anthropic
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
  anthropic.claude-code:
    predicate: skos:related
---

# Claude Code (Anthropic)

Claude Code lets a developer hand coding work to Claude: it is "an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools" ([S1]). Anthropic makes it, and its glossary says "Claude Code is the harness; Claude is the model inside it", an [agent harness][industry.agent-harness] ([S2]). It runs as a terminal CLI, in VS Code, Cursor and JetBrains, in the Desktop app's Code tab, on the web and in the iOS and Android apps ([S1]). It is proprietary, used under Anthropic's consumer or commercial terms with a Claude subscription or a Console account ([S1], [S12]). The latest release seen is 2.1.330, of 20 November 2026 ([S3]). It is a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills]. Its maker's own words for it are on the vendor card [Claude Code (Anthropic)][anthropic.claude-code].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Claude models only, through the Anthropic API, Amazon Bedrock, Google Cloud, Microsoft Foundry or Claude Platform on AWS; Anthropic "doesn't support routing Claude Code to non-Claude models through any gateway" | [S1], [S13] |
| [Session][industry.session] | `yes` | Sessions resume (`claude -c`, `/resume`) or fork (`--fork-session`); transcripts kept in `~/.claude/projects/`; cloud sessions keep running when the laptop closes | [S2] |
| [Subagent][industry.subagent] | `yes` | Subagents run in their own context window and return a summary; built-in Explore, Plan and general-purpose, custom ones in `.claude/agents/`; worktree isolation | [S2], [S8] |
| [Agent team][industry.agent-team] | `partial` | Agent teams: a team lead, a shared task list and mailbox messaging between teammates; experimental, off by default | [S6] |
| [Skill][industry.skill] | `yes` | Skills "follow the Agent Skills open standard", with Claude Code's own extras such as `context: fork` | [S9] |
| [Instruction file][industry.instruction-file] | `yes` | `CLAUDE.md` at project, user and managed level; `AGENTS.md` when there is no `CLAUDE.md`, from v2.1.277; `.claude/rules/`; auto memory in `MEMORY.md` | [S2] |
| [Plugin][industry.plugin] | `yes` | Plugins bundle skills, agents, hooks and MCP servers, installed from marketplaces | [S10] |
| [MCP][spec.mcp] | `yes` | MCP client over HTTP, stdio, WebSocket and the deprecated SSE, at local, project and user scope | [S11] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox`: a Bash sandbox, off by default, Seatbelt on macOS and bubblewrap on Linux and WSL2, not native Windows; worktrees and dev containers; cloud sessions on Anthropic-managed or self-hosted infrastructure | [S7], [S2] |
| [Client][industry.client] | `yes` | Terminal, IDE, desktop, web and mobile; Remote Control continues a local session from a phone or browser; agent view (research preview) shows background sessions | [S1], [S14] |
| [Agent host][industry.agent-host] | `unknown` | The docs describe hosting only Claude Code's own sessions, in agent view and its background service | [S14] |
| [Channel][industry.channel] | `partial` | Channels: MCP servers that push events into a running session and can reply, such as Telegram, Discord, iMessage and webhooks; research preview | [S5] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | `ListAgents` and `SendMessage`, over a local socket on one machine and through Remote Control to other machines and cloud sessions; v2.1.224 or later | [S4] |
| [ACP][spec.acp] | `partial` | Only through a separate adapter: Anthropic's docs index has no ACP page, and `agentclientprotocol/claude-agent-acp` drives the Claude Agent SDK "from any ACP client" | [S16], [S15] |
| [AHP][spec.ahp] | `unknown` | Not found in the docs index | [S16] |
| [A2A][spec.a2a] | `unknown` | Not found in the docs index | [S16] |
| [Bot][system.bot] | `unknown` | No such concept in the docs; auto memory is per repository, not a named identity. Scheduling: cloud scheduled tasks, Desktop scheduled tasks and `/loop` | [S2], [S1], [S14] |

## State of play

- **2026-11-20:** Version 2.1.330: recurring scheduled tasks and `/loop` run for up to 30 days, up from 7. ([S3])
- **2026-11-19:** Versions 2.1.328 and 2.1.329: cross-session messaging reports held or dropped messages, and `/tasks` lists scheduled tasks, `/loop` wake-ups and forks. ([S3])
- **2026-11-16:** Version 2.1.326, a security-hardening release for the Bash sandbox, bypass mode and PowerShell. ([S3])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Anthropic, Claude Code overview | 2026-11-22 |
| [S2] | Anthropic, Claude Code glossary | 2026-11-22 |
| [S3] | Anthropic, Claude Code changelog | 2026-11-22 |
| [S4] | Anthropic, Message your other Claude Code sessions | 2026-11-22 |
| [S5] | Anthropic, Push events into a running session with channels | 2026-11-22 |
| [S6] | Anthropic, Orchestrate teams of Claude Code sessions | 2026-11-22 |
| [S7] | Anthropic, Sandboxing | 2026-11-22 |
| [S8] | Anthropic, Create custom subagents | 2026-11-22 |
| [S9] | Anthropic, Extend Claude with skills | 2026-11-22 |
| [S10] | Anthropic, Plugins overview | 2026-11-22 |
| [S11] | Anthropic, Connect Claude Code to tools via MCP | 2026-11-22 |
| [S12] | Anthropic, Legal and compliance | 2026-11-22 |
| [S13] | Anthropic, Run Claude Code through a gateway | 2026-11-22 |
| [S14] | Anthropic, Manage multiple agents with agent view | 2026-11-22 |
| [S15] | agentclientprotocol/claude-agent-acp, GitHub | 2026-11-22 |
| [S16] | Anthropic, Claude Code docs index (llms.txt) | 2026-11-22 |

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
[anthropic.claude-code]: ../vendors/anthropic/anthropic.claude-code.md
[S1]: https://code.claude.com/docs/en/overview
[S2]: https://code.claude.com/docs/en/glossary
[S3]: https://code.claude.com/docs/en/changelog
[S4]: https://code.claude.com/docs/en/cross-session-messaging
[S5]: https://code.claude.com/docs/en/channels
[S6]: https://code.claude.com/docs/en/agent-teams
[S7]: https://code.claude.com/docs/en/sandboxing
[S8]: https://code.claude.com/docs/en/sub-agents
[S9]: https://code.claude.com/docs/en/skills
[S10]: https://code.claude.com/docs/en/plugins/overview
[S11]: https://code.claude.com/docs/en/mcp
[S12]: https://code.claude.com/docs/en/legal-and-compliance
[S13]: https://code.claude.com/docs/en/gateways
[S14]: https://code.claude.com/docs/en/agent-view
[S15]: https://github.com/agentclientprotocol/claude-agent-acp
[S16]: https://code.claude.com/docs/llms.txt
