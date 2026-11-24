---
id: product.kimi-code
title: Kimi Code (Moonshot AI)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Moonshot AI
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

# Kimi Code (Moonshot AI)

Kimi Code lets a developer hand coding work to an agent that can "read and edit code, run shell commands, search files, fetch web pages" and choose its next step from the feedback: "an AI coding agent that runs in your terminal" ([S1]). Moonshot AI makes it, as `MoonshotAI/kimi-code`, under the MIT License; it presents it as "the intelligent coding service for developers among Kimi membership benefits, based on Kimi's latest flagship model" (translated from Chinese) ([S1], [S2]). It runs as Kimi Code CLI in the terminal, a browser interface started by `kimi web`, Kimi Code Desktop on macOS, Windows and Linux, a VS Code extension, and in Zed and JetBrains through ACP ([S1], [S2], [S14], [S15]). It replaces the Python Kimi CLI, Apache-2.0 and archived on 23 September 2026 ([S19]). The latest releases seen are Kimi Code CLI 2.7.2 and Kimi Code Desktop 1.4.2, both of 20 November 2026 ([S3]). It is an [agent harness][industry.agent-harness] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Moonshot's own: `k3.1-pro`, `k3`, `kimi-for-coding` and others by membership tier; "Kimi K3 works best with Kimi Code CLI as its agent framework". Other providers: `kimi`, `anthropic`, `openai` ("OpenAI and compatible services, DeepSeek, Qwen, etc."), `openai_responses`, `bedrock`, `google-genai`, `vertexai`, and the models.dev catalogue; local models not named | [S2], [S18], [S12] |
| [Session][industry.session] | `yes` | "persists every conversation as a "session""; `kimi --continue`, `kimi --session <id>`, `/sessions` (alias `/resume`) and forks | [S5] |
| [Subagent][industry.subagent] | `yes` | "Dispatch built-in `coder`, `explore`, and `plan` subagents in isolated contexts"; custom Markdown agents; "Sub-agents support running in the background" | [S1], [S6] |
| [Agent team][industry.agent-team] | `partial` | Tower, "an experimental multi-agent collaboration mode", off by default: the main agent "becomes the tower and coordinates these workers", each in its own worktree; "The tower routes messages", with no direct worker-to-worker messaging described | [S7] |
| [Skill][industry.skill] | `yes` | "`SKILL.md` consists of two parts: YAML frontmatter and a Markdown body", from `.kimi-code/skills/`, `.agents/skills/` and user folders; the page is titled "Agent Skills" but does not name the specification | [S8] |
| [Instruction file][industry.instruction-file] | `yes` | `AGENTS.md` or `.kimi-code/AGENTS.md` in the project, `$KIMI_CODE_HOME/AGENTS.md` and `~/.agents/AGENTS.md` globally, "injected into the prompt as reference data" | [S6] |
| [Plugin][industry.plugin] | `yes` | Plugins "can add Agent Skills, custom agents", hooks, commands and MCP servers; installed from "a local directory, zip URL, or GitHub repository URL" or the official marketplace | [S9] |
| [MCP][spec.mcp] | `yes` | stdio, HTTP and legacy HTTP+SSE servers, OAuth by `/mcp-config login`, user and project `mcp.json` | [S10] |
| [Execution environment][industry.environment] | `yes` | `container`: remote environments run tools on an SSH host or "in a Docker-compatible container", with "no silent fallback to your machine"; no local sandbox documented, permission modes `manual`, `yolo` and `auto` | [S13], [S11] |
| [Client][industry.client] | `yes` | Terminal; web, on phones over LAN or Remote Control (`kimi rc`); Desktop; VS Code; Zed, JetBrains and Paseo through ACP | [S2], [S14], [S15] |
| [Agent host][industry.agent-host] | `unknown` | Desktop 1.4.0 lets "external agents such as Claude Code, Codex, and Cursor" connect to hand off sessions; nothing shows it running their sessions | [S3], [S16] |
| [Channel][industry.channel] | `unknown` | No tool for outside events documented; scheduled tasks "re-inject a prompt into the current session" from within | [S17] |
| [Cross-session messaging][industry.cross-session-messaging] | `partial` | Its built-in "Kimi Agent Protocol (KAP)" local server lets other agents "interact directly with your local Kimi Code", for session hand-offs and "multi-round plan discussions", through the `use-kimi-code` skill; no built-in tool sends between its own sessions | [S16], [S17] |
| [ACP][spec.acp] | `yes` | As agent: "Kimi Code CLI speaks the Agent Client Protocol"; editors launch `kimi acp` "as a child process" | [S1], [S15] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | The "Agent to Agent" page names only KAP, not Agent2Agent | [S16] |
| [Bot][system.bot] | `unknown` | Not found. Scheduling: `CronCreate` schedules a prompt, but schedules "are bound to the session" and "not carried into a brand-new session" | [S17] |

## State of play

- **2026-11-21:** Orca's version 1.4.269 lets Orca bots run on Kimi Code; this is Orca's claim, not Moonshot AI's. ([S20])
- **2026-11-20:** Kimi Code CLI 2.7.1 and 2.7.2 and Kimi Code Desktop 1.4.1 and 1.4.2: web and Desktop fixes. ([S3], [S4])
- **2026-11-19:** Kimi Code CLI 2.7.0 adds Amazon Bedrock and resuming sessions open in another client; Desktop 1.4.0 connects external agents such as Claude Code, Codex and Cursor, adds SSH hosts and the Qwen Coding Plan provider. ([S3], [S4])
- **2026-11-12:** Kimi Code CLI 2.6.0 persists permission rules and adds artifact missions to Tower. ([S4])
- **2026-09-23:** The Python Kimi CLI repository was archived; users move to Kimi Code CLI. ([S19])
- **2026-09-17:** Kimi Code CLI 2.0.0 adds the `/desktop` command to install the desktop app. ([S4])
- **2026-08-27:** Version 0.39.0 adds experimental Tower mode for multi-agent orchestration. ([S4])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Moonshot AI, MoonshotAI/kimi-code repository | 2026-11-22 |
| [S2] | Moonshot AI, Kimi Code documentation overview, in Chinese, quoted in translation | 2026-11-22 |
| [S3] | Moonshot AI, kimi-code releases | 2026-11-22 |
| [S4] | Moonshot AI, Kimi Code CLI changelog | 2026-11-22 |
| [S5] | Moonshot AI, Sessions and Context | 2026-11-22 |
| [S6] | Moonshot AI, Agents and Subagents | 2026-11-22 |
| [S7] | Moonshot AI, Tower multi-agent collaboration | 2026-11-22 |
| [S8] | Moonshot AI, Agent Skills | 2026-11-22 |
| [S9] | Moonshot AI, Plugins | 2026-11-22 |
| [S10] | Moonshot AI, Model Context Protocol | 2026-11-22 |
| [S11] | Moonshot AI, Config files | 2026-11-22 |
| [S12] | Moonshot AI, Providers and Models | 2026-11-22 |
| [S13] | Moonshot AI, Remote environments | 2026-11-22 |
| [S14] | Moonshot AI, Using in the Browser | 2026-11-22 |
| [S15] | Moonshot AI, Using in IDEs | 2026-11-22 |
| [S16] | Moonshot AI, Using in Other Agents (Agent to Agent) | 2026-11-22 |
| [S17] | Moonshot AI, Built-in tools | 2026-11-22 |
| [S18] | Moonshot AI, MoonshotAI/Kimi-K3 repository | 2026-11-22 |
| [S19] | Moonshot AI, MoonshotAI/kimi-cli repository, archived | 2026-11-22 |
| [S20] | Stably AI, Orca release v1.4.269 | 2026-11-22 |

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
[S1]: https://github.com/MoonshotAI/kimi-code
[S2]: https://www.kimi.com/code/docs/
[S3]: https://github.com/MoonshotAI/kimi-code/releases
[S4]: https://moonshotai.github.io/kimi-code/en/release-notes/changelog.html
[S5]: https://moonshotai.github.io/kimi-code/en/guides/sessions.html
[S6]: https://moonshotai.github.io/kimi-code/en/customization/agents.html
[S7]: https://moonshotai.github.io/kimi-code/en/guides/tower.html
[S8]: https://moonshotai.github.io/kimi-code/en/customization/skills.html
[S9]: https://moonshotai.github.io/kimi-code/en/customization/plugins.html
[S10]: https://moonshotai.github.io/kimi-code/en/customization/mcp.html
[S11]: https://moonshotai.github.io/kimi-code/en/configuration/config-files.html
[S12]: https://moonshotai.github.io/kimi-code/en/configuration/providers.html
[S13]: https://moonshotai.github.io/kimi-code/en/guides/remote-environment.html
[S14]: https://moonshotai.github.io/kimi-code/en/guides/web.html
[S15]: https://moonshotai.github.io/kimi-code/en/guides/ides.html
[S16]: https://moonshotai.github.io/kimi-code/en/guides/other-agents.html
[S17]: https://moonshotai.github.io/kimi-code/en/reference/tools.html
[S18]: https://github.com/MoonshotAI/Kimi-K3
[S19]: https://github.com/MoonshotAI/kimi-cli
[S20]: https://github.com/stablyai/orca/releases/tag/v1.4.269
