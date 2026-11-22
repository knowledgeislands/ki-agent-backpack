---
id: product.minimax-code
title: MiniMax Code (MiniMax)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: MiniMax
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
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

# MiniMax Code (MiniMax)

MiniMax Code lets its users hand coding and everyday office work to an agent: "From coding to office work, MiniMax Code connects to your local files, tools, and browser", in a Coding mode and a Work mode ([S2]). MiniMax presents it as "The all-in-one general agent built for MiniMax models" ([S1]), and its documentation as "a desktop AI Agent app for software development, everyday workflows, automation, and remote collaboration" ([S3]). MiniMax makes it; it is the former MiniMax Agent desktop app, "officially renamed to MiniMax Code" on 29 May 2026, and its web app still lives at agent.minimax.io ([S4], [S2]). It runs as a desktop app for macOS and Windows, a web app, a phone companion for iOS and Android, and a terminal CLI, `mcode`, with editors reaching it over ACP ([S2], [S5], [S9]). The CLI is open source, "An open-source coding agent for your terminal, powered by MiniMax", whose "First-party code defaults to MIT"; the repository "does not include the desktop application's source" ([S5]). It is paid through MiniMax's M Plan, shown as Go $22, Explore $55 and Build $132, with daily free credits ([S2], [S4]). The latest releases seen are desktop v3.1.16, of 16 November 2026, and CLI 0.7.8, of 19 November 2026, by the changelog; the CLI repository's latest GitHub release is v0.7.2, of 31 October 2026 (observed) ([S4], [S5]). MiniMax's home page also presents MiniMax Design, and its web changelog presents MaxClaw and MaxHermes, "A cloud-based AI assistant built on Hermes Agent" ([S1], [S4]). It is an [agent harness][industry.agent-harness] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | MiniMax's own models, the default for new users "MiniMax M3.1 Flash", with MiniMax M3 context sizes; BYOK "custom providers using compatible Anthropic or OpenAI API shapes", and a Google format in the CLI; local models unknown | [S4], [S6], [S19], [S21] |
| [Session][industry.session] | `yes` | CLI: "Sessions support creation, search, resume, fork, rewind, rename, compaction, export, and copy", `mcode --continue`; desktop: local and cloud sessions in one list | [S6], [S7], [S18] |
| [Subagent][industry.subagent] | `yes` | CLI background subagents, built-in Explore subagents, and plugins that "declare subagents for delegated tasks"; desktop: "Multiple sub-agents work in parallel" | [S4] |
| [Agent team][industry.agent-team] | `yes` | Agent Team: "MiniMax Code coordinates decomposition, execution, progress tracking, and final synthesis"; Leader, Worker and Verifier roles, "Agents can directly talk to other running nodes" | [S13], [S20] |
| [Skill][industry.skill] | `yes` | `skills/<skill-name>/SKILL.md` in plugins, a `.agents/skills` folder in the CLI, and auto-import of skills "from Claude Code, Codex, and other AI coding tools"; the pages read do not name the specification | [S11], [S5], [S4] |
| [Instruction file][industry.instruction-file] | `yes` | CLI: "Project rules: `AGENTS.md` in workspace"; `mcode init .` "generates or updates `AGENTS.md`"; the desktop's files not found | [S8], [S7] |
| [Plugin][industry.plugin] | `yes` | A Plugin Marketplace; packages bundle Apps, MCP and Skills; the CLI takes "official, local, or GitHub plugins" | [S11], [S5] |
| [MCP][spec.mcp] | `yes` | Local configuration over `stdio`, `http`, `streamable-http` and `sse`, or MCP packaged in plugins | [S10] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox` in the CLI: "control tool execution with permissions and sandboxing", undocumented in the guides but built on a fork of Anthropic's open-source sandbox-runtime (observed); desktop cloud sessions "Run in cloud", their isolation not stated | [S5], [S23], [S4], [S18] |
| [Client][industry.client] | `yes` | Desktop, web, phone and terminal; Remote Control from a phone; editors and agent hosts through ACP | [S2], [S5], [S9], [S17] |
| [Agent host][industry.agent-host] | `unknown` | The pages read do not say it runs other makers' harnesses; it imports their skills only | [S4] |
| [Channel][industry.channel] | `yes` | Messaging integrations: "After binding a channel, you can send messages to the Agent" through Telegram, WeChat, Lark or Feishu; custom Agents carry "Messaging channel bindings" | [S16], [S14] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Messages travel within Agent Team and MiniMax Bot group chats, and an ACP client can message a delegation member; nothing found for one session messaging another outside them | [S4], [S20] |
| [ACP][spec.acp] | `yes` | As agent: `mcode acp` "runs MiniMax Code as Agent Client Protocol server" for "editors and Agent hosts" | [S9] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `yes` | MiniMax Bot, MiniMax's own Mini App since desktop v3.1.2: "Long-lived Bots", each with "a name, a role, instructions and its own Agent session", "one memory per Bot plus one shared by the team", reached by `@Name` or `message_bot`, and woken by scheduled tasks "only while the Mini App service is running" | [S4], [S22], [S3] |

## State of play

- **2026-11-19:** CLI 0.7.8: ACP "can address, stop, and read individual delegation members", and the agent can no longer modify MCode's own state directories. ([S4])
- **2026-11-16:** Desktop v3.1.15 and v3.1.16: image, video and Office tools installed by default, plugin suggestions in the chat, and Mini App management. ([S4])
- **2026-10-23:** CLI 0.6.13: "The default model for new users is now MiniMax M3.1 Flash". ([S4])
- **2026-10-19:** MiniMax M3.1 Flash announced, "available through the MiniMax API, M Plan, and MiniMax Code"; "Model weights will be released later". ([S21])
- **2026-10-17:** Desktop v3.1.2: Side Chat, MiniMax Bot and Remote Control across devices. ([S4])
- **2026-09-30:** Desktop v3.1.0: refreshed branding, and M Plan, which "builds on Token Plan with unchanged subscription prices". ([S4])
- **2026-09-14:** Desktop v3.0.72: local-to-cloud task handoff and independent Subagent chats. ([S4])
- **2026-08-17:** CLI 0.1.3, the earliest entry in the CLI changelog. ([S4])
- **2026-05-29:** Desktop v3.0.33: "Desktop app officially renamed to MiniMax Code", with skill auto-discovery from other coding tools. ([S4])
- **2026-05-27:** MiniMax announced Agent Team and named the upgraded Agent Mavis, "MiniMax as a Jarvis"; "Our latest MiniMax Agent will be open-sourced soon". ([S20])
- **2026-05-01:** Desktop v3.0.20, a new architecture: three-layer memory, sub-agents in parallel, MCP, Feishu and Telegram, and scheduled tasks. ([S4])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | MiniMax, home page | 2026-11-22 |
| [S2] | MiniMax, MiniMax Code about and download page | 2026-11-22 |
| [S3] | MiniMax, Welcome to MiniMax Code | 2026-11-22 |
| [S4] | MiniMax, MiniMax Code changelog (Desktop, CLI and Web) | 2026-11-22 |
| [S5] | MiniMax, MiniMax-AI/minimax-code repository | 2026-11-22 |
| [S6] | MiniMax, CLI features and configuration | 2026-11-22 |
| [S7] | MiniMax, CLI workflows | 2026-11-22 |
| [S8] | MiniMax, CLI configuration and models | 2026-11-22 |
| [S9] | MiniMax, ACP integration | 2026-11-22 |
| [S10] | MiniMax, MCP Servers | 2026-11-22 |
| [S11] | MiniMax, Plugin Marketplace | 2026-11-22 |
| [S12] | MiniMax, Memory | 2026-11-22 |
| [S13] | MiniMax, Agent Team | 2026-11-22 |
| [S14] | MiniMax, Custom Agents | 2026-11-22 |
| [S15] | MiniMax, Scheduled Tasks | 2026-11-22 |
| [S16] | MiniMax, Messaging Integrations | 2026-11-22 |
| [S17] | MiniMax, Remote Control | 2026-11-22 |
| [S18] | MiniMax, Tasks and History | 2026-11-22 |
| [S19] | MiniMax, Custom Models / BYOK | 2026-11-22 |
| [S20] | MiniMax blog, MiniMax Agent Team: Built for Long-Running Tasks and Continuous Evolution, 27 May 2026 | 2026-11-22 |
| [S21] | MiniMax blog, MiniMax M3.1 Flash, 19 October 2026 | 2026-11-22 |
| [S22] | MiniMax, MiniMax-AI/MiniMax-Code-MiniApps, `plugins/minimax-ai/minimax-bot/README.md` | 2026-11-22 |
| [S23] | MiniMax, MiniMax-AI/minimax-code `third_party/sandbox-runtime` README and `upstream.json`, read through the GitHub API | 2026-11-22 |

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
[S1]: https://www.minimax.io
[S2]: https://code.minimax.io/about
[S3]: https://code.minimax.io/docs/code/welcome
[S4]: https://code.minimax.io/docs/changelog
[S5]: https://github.com/MiniMax-AI/minimax-code
[S6]: https://code.minimax.io/docs/cli/features
[S7]: https://code.minimax.io/docs/cli/workflows
[S8]: https://code.minimax.io/docs/cli/configuration
[S9]: https://code.minimax.io/docs/cli/integrations
[S10]: https://code.minimax.io/docs/code/agents/mcp
[S11]: https://code.minimax.io/docs/code/agents/plugins
[S12]: https://code.minimax.io/docs/code/agents/memory
[S13]: https://code.minimax.io/docs/code/agents/team
[S14]: https://code.minimax.io/docs/code/agents/custom-agents
[S15]: https://code.minimax.io/docs/code/automation/schedules
[S16]: https://code.minimax.io/docs/code/automation/im
[S17]: https://code.minimax.io/docs/code/automation/remote-control
[S18]: https://code.minimax.io/docs/code/workflows/tasks
[S19]: https://code.minimax.io/docs/code/account/byok
[S20]: https://www.minimax.io/blog/minimax-agent-team-long-running-1779893953
[S21]: https://www.minimax.io/blog/minimax-m31f
[S22]: https://github.com/MiniMax-AI/MiniMax-Code-MiniApps/blob/main/plugins/minimax-ai/minimax-bot/README.md
[S23]: https://github.com/MiniMax-AI/minimax-code/tree/main/third_party/sandbox-runtime
