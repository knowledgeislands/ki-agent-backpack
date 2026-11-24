---
id: product.grok-build
title: Grok Build (SpaceXSI)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: SpaceXSI
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
---

# Grok Build (SpaceXSI)

Grok Build lets a developer hand coding work to Grok from the terminal. It is "a coding agent for the terminal", used "as an interactive TUI, headlessly in scripts or bots, or through the Agent Client Protocol (ACP) in other apps" ([S1]). SpaceXSI makes it: its pages carry that name, with the footer "© 2026 SpaceX Super Intelligence LLC", and the repository's README calls it "SpaceXAI's terminal-based AI coding agent", under the `xai-org` GitHub organisation ([S2], [S3]). It runs on macOS and Linux, and on Windows through PowerShell, Git Bash or WSL ([S1]). It has been Apache-2.0 open source since 15 July 2026, and a user signs in with "a SpaceXSI account" or uses an API key ([S3], [S4], [S1]). It installs by a shell script or, as an alternative, `npm install -g @xai-official/grok` ([S1], [S16]). The latest stable release seen is 1.0.92, published on 20 November 2026 ([S18]). It is an [agent harness][industry.agent-harness] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Grok models, Grok 4.7 the latest named; "Use any model through `~/.grok/config.toml`", with custom models over OpenAI-compatible or Anthropic Messages APIs; "point it at your own local inference" | [S20], [S1], [S13], [S4] |
| [Session][industry.session] | `yes` | Every conversation is saved under `~/.grok/sessions/`; `/resume`, `grok --resume`, `-c`, `--fork-session`, `/fork` and `/rewind` | [S5] |
| [Subagent][industry.subagent] | `yes` | "Independent child sessions with their own context" that "return a summary to the parent"; built-in `general-purpose`, `explore` and `plan`, on by default, optionally in their own worktrees | [S6], [S23] |
| [Agent team][industry.agent-team] | `unknown` | Workflows "orchestrate a bounded set of subagents", and `/goal` checks work with "a panel of reviewer subagents"; no teammates messaging each other described | [S7] |
| [Skill][industry.skill] | `yes` | Folders with a `SKILL.md` from `.grok/skills/`, `~/.grok/skills/`, `~/.agents/skills/`, plugins and Claude Code's skills; the pages read do not name the specification | [S9] |
| [Instruction file][industry.instruction-file] | `yes` | `AGENTS.md`, `AGENT.md`, `CLAUDE.md` and `CLAUDE.local.md`, from `~/.grok/` and the repo root down, plus `.grok/rules/*.md`, with `.claude/rules/` and `.cursor/rules/` read too | [S8] |
| [Plugin][industry.plugin] | `yes` | Plugins add "skills, agents, hooks, MCP servers, and LSP servers", installed from marketplaces; it "automatically reads Claude Code marketplaces, plugins" | [S9] |
| [MCP][spec.mcp] | `yes` | Local stdio and remote HTTP servers, "OAuth handled automatically", through `grok mcp add` or `config.toml`; also reads `~/.claude.json`, `.cursor/mcp.json` and `.mcp.json` | [S10] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox`: "Landlock on Linux, Seatbelt on macOS", with `workspace`, `devbox`, `read-only` and `strict` profiles; "Off by default" | [S11] |
| [Client][industry.client] | `yes` | Terminal TUI with an Agent Dashboard over every session; editors and other apps through ACP; `/share` shares a session by URL | [S1], [S15], [S7] |
| [Agent host][industry.agent-host] | `unknown` | The dashboard shows Grok Build's own sessions; nothing found on running other makers' harnesses | [S15] |
| [Channel][industry.channel] | `partial` | Only through monitors the agent attaches to a script: "each line the script prints becomes a notification in the conversation"; no chat or webhook channels documented | [S14] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | The dashboard lets the user type to any session, and the repository's `send_subagent_message` tool lets a parent message its subagents (observed in the source); nothing found on sessions messaging each other | [S15], [S3] |
| [ACP][spec.acp] | `yes` | As agent: `grok agent stdio` "runs Grok as an ACP agent over JSON-RPC on stdin/stdout" | [S12], [S22] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `unknown` | Not in Grok Build itself; the overview points to Grok Bot, "AI teammates on a cloud computer", a product of its own. Scheduling: `/loop` prompts on an interval, expiring after 7 days | [S1], [S14] |

## State of play

- **2026-11-20:** Version 1.0.92 is the stable release on npm and the installer's `stable` channel, with 1.0.93 on the `alpha` and `enterprise` channels (observed from the registry and the channel files). ([S18], [S17])
- **2026-09-29:** Latest sync of the public source from the monorepo, "Synced from monorepo". ([S3])
- **2026-09-21:** "Grok 4.7 is available today in Cursor and Grok Build." ([S20])
- **2026-08-12:** Grok 4.6 available in Grok Build, with "2x included usage" for the first week. ([S19])
- **2026-07-15:** "We're open-sourcing Grok Build, SpaceXSI's coding agent and TUI", the source on GitHub. ([S4])
- **2026-06-03:** "Grok Build now available to every SuperGrok user", with plugins, skills and headless support. ([S21])
- **2026-05-25:** Announced in "early beta for all SuperGrok and X Premium Plus subscribers". ([S2])
- **2026-05-14:** In beta for SuperGrok Heavy users, by the Grok release notes. ([S21])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | SpaceXSI, Grok Build overview | 2026-11-22 |
| [S2] | SpaceXSI, Introducing Grok Build | 2026-11-22 |
| [S3] | SpaceXSI, xai-org/grok-build repository | 2026-11-22 |
| [S4] | SpaceXSI, Grok Build is Now Open Source | 2026-11-22 |
| [S5] | SpaceXSI, Sessions | 2026-11-22 |
| [S6] | SpaceXSI, Subagents | 2026-11-22 |
| [S7] | SpaceXSI, Modes and Commands | 2026-11-22 |
| [S8] | SpaceXSI, AGENTS.md (project rules) | 2026-11-22 |
| [S9] | SpaceXSI, Skills, Plugins & Marketplaces | 2026-11-22 |
| [S10] | SpaceXSI, MCP Servers | 2026-11-22 |
| [S11] | SpaceXSI, Sandbox | 2026-11-22 |
| [S12] | SpaceXSI, Headless & Scripting | 2026-11-22 |
| [S13] | SpaceXSI, Settings Reference | 2026-11-22 |
| [S14] | SpaceXSI, Background Tasks | 2026-11-22 |
| [S15] | SpaceXSI, Agent Dashboard | 2026-11-22 |
| [S16] | SpaceXSI, Enterprise Deployments | 2026-11-22 |
| [S17] | SpaceXSI, Grok CLI installer script, with its `stable`, `alpha` and `enterprise` channel files | 2026-11-22 |
| [S18] | npm, `@xai-official/grok` package, the npm install the enterprise page names | 2026-11-22 |
| [S19] | SpaceXSI, Grok 4.6 | 2026-11-22 |
| [S20] | SpaceXSI, Grok 4.7 | 2026-11-22 |
| [S21] | SpaceXSI, Grok release notes | 2026-11-22 |
| [S22] | SpaceXSI, CLI Reference | 2026-11-22 |
| [S23] | SpaceXSI, Worktrees | 2026-11-22 |

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
[S1]: https://docs.x.ai/build/overview
[S2]: https://x.ai/news/grok-build-cli
[S3]: https://github.com/xai-org/grok-build
[S4]: https://x.ai/news/grok-build-open-source
[S5]: https://docs.x.ai/build/features/sessions
[S6]: https://docs.x.ai/build/features/subagents
[S7]: https://docs.x.ai/build/modes-and-commands
[S8]: https://docs.x.ai/build/features/project-rules
[S9]: https://docs.x.ai/build/features/skills-plugins-marketplaces
[S10]: https://docs.x.ai/build/features/mcp-servers
[S11]: https://docs.x.ai/build/features/sandbox
[S12]: https://docs.x.ai/build/cli/headless-scripting
[S13]: https://docs.x.ai/build/settings/reference
[S14]: https://docs.x.ai/build/features/background-tasks
[S15]: https://docs.x.ai/build/features/dashboard
[S16]: https://docs.x.ai/build/enterprise
[S17]: https://x.ai/cli/install.sh
[S18]: https://www.npmjs.com/package/@xai-official/grok
[S19]: https://x.ai/news/grok-4-6
[S20]: https://x.ai/news/grok-4-7
[S21]: https://grok.com/release-notes
[S22]: https://docs.x.ai/build/cli/reference
[S23]: https://docs.x.ai/build/features/worktrees
