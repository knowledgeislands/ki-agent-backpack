---
id: product.zcode
title: ZCode (Z.ai)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Z.ai
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
---

# ZCode (Z.ai)

ZCode lets a developer hand long, multi-step coding work to an agent and follow it from the desk, a browser, a phone or a chat app: "an Agentic Development Environment (ADE) built to bring GLM-5.3 into real coding workflows" ([S1]). Z.ai makes it, as "Z.ai's coding agent harness" in the `zai-org/ZCode` repository, under the Apache License 2.0; its Chinese home page calls it "the official GLM-5.3 harness" (translated) and its legal owner is Beijing Zhipu Huazhang Technology ([S2], [S4]). It runs as a desktop app for macOS, Windows and Linux (Linux in beta), and the open-source build adds a terminal TUI and a browser interface; a phone and WeChat or Feishu bots drive desktop sessions remotely ([S2], [S4], [S12], [S13]). The app is free, with GLM models through the GLM Coding Plan, a Z.ai or BigModel account, or an API key ([S5], [S18]). The latest release seen is 3.18.2, of 13 November 2026 by the changelog ([S3], [S20]). It is an [agent harness][industry.agent-harness] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Built-in GLM-5.3 and GLM-5.3-Flash; added providers Anthropic, OpenAI, OpenRouter, Moonshot, MiniMax and Xiaomi MiMo, and any Anthropic- or OpenAI-compatible service, including "self-hosted services on a private network" | [S5], [S19] |
| [Session][industry.session] | `yes` | Tasks kept in the sidebar, archived and forked; the CLI's `--resume` and `--continue` reload a session's history from its SQLite store | [S6], [S3], [S16] |
| [Subagent][industry.subagent] | `yes` | Built-in general-purpose and Explore subagents launched "through the Agent tool"; custom subagents in beta; "a subagent cannot spawn subagents of its own" | [S7] |
| [Agent team][industry.agent-team] | `unknown` | The home page claims "multi-agent collaboration to complete complex goals" (translated); the pages read describe subagents reporting to the main agent, with no peer messaging | [S4], [S7] |
| [Skill][industry.skill] | `yes` | `SKILL.md` folders in `~/.zcode/skills/` and the workspace's `.zcode/skills/`, metadata injected and bodies "loaded on demand"; imports from Claude Code, Codex CLI and others; the pages read do not name the specification | [S8] |
| [Instruction file][industry.instruction-file] | `yes` | `~/.zcode/AGENTS.md` then the workspace's `AGENTS.md`; it "does not merge multiple AGENTS.md files across directory levels"; `CLAUDE.md` only as a one-time migration source | [S6] |
| [Plugin][industry.plugin] | `yes` | Plugins bundle skills, commands, subagents, MCP servers and hooks, from a curated store or added marketplaces; ZCode "preloads the Claude Code marketplace" | [S9] |
| [MCP][spec.mcp] | `yes` | stdio servers, with "SSE and HTTP remote servers are also supported", OAuth for remote services, and import from Claude Code, Codex CLI and OpenCode configuration | [S10] |
| [Execution environment][industry.environment] | `yes` | `container`, opt-in: a workspace in a "Docker local container", or on an SSH host or in WSL, to "isolate dependencies inside a local Docker container"; otherwise on the desktop with permission modes, the CLI's plan mode "not an OS-level read-only sandbox" (translated) | [S11], [S23], [S15], [S17] |
| [Client][industry.client] | `yes` | Desktop; terminal TUI and browser interface from the `zcode` command; phone browser through Remote Control; WeChat and Feishu bots | [S2], [S12], [S13] |
| [Agent host][industry.agent-host] | `unknown` | Z.ai's docs cite "multi‑framework compatibility", but the pages read show ZCode running only its own ZCode Agent | [S18], [S6] |
| [Channel][industry.channel] | `yes` | Bot Channel, a chat bridge: in WeChat or Feishu, "The Bot forwards the request to ZCode Agent and returns task progress", to "keep sending instructions" into "a session that already exists on the desktop"; the home page adds Telegram, and DingTalk, Discord and WeCom are to come | [S13], [S23], [S4] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found; a past conversation can be linked into a task as context with `#` | [S6] |
| [ACP][spec.acp] | `unknown` | Not documented; the repository's services package lists `@agentclientprotocol/sdk` as a dependency (observed), with no feature described | [S22] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `unknown` | No durable named agent of its own found. Scheduling: scheduled tasks and idle-time tasks run ZCode Agent and leave results in a session; project memory is off by default | [S14], [S6] |

## State of play

- **2026-11-13:** Version 3.18.2: worktrees for parallel tasks, voice input, a session management tool, and a fix for "workflow scripts could escape the sandbox"; the GitHub release is dated 16 November. ([S3], [S20])
- **2026-11-03:** Version 3.17.2: an official ZCode Sites plugin, one-click plugin updates, and model options such as Kimi K3.1 Pro and MiniMax M3.1 Flash. ([S3])
- **2026-10-20:** Version 3.16.2: persistent processes for remote sessions, and history sessions archived and managed by project. ([S3])
- **2026-09-20:** The `zai-org/ZCode` repository was created, Apache-2.0, holding the clients, backend and Agent CLI source. ([S2])
- **2026-07-01:** Z.ai launched ZCode as "the official development environment for GLM-5.2"; the date and the quotation come only from secondary coverage. ([S21])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Z.ai, ZCode docs: Welcome | 2026-11-22 |
| [S2] | Z.ai, zai-org/ZCode repository and README | 2026-11-22 |
| [S3] | Z.ai, ZCode changelog | 2026-11-22 |
| [S4] | Z.ai, ZCode home page (Chinese, quoted in translation) | 2026-11-22 |
| [S5] | Z.ai, ZCode docs: Connect Models | 2026-11-22 |
| [S6] | Z.ai, ZCode docs: ZCode Agent | 2026-11-22 |
| [S7] | Z.ai, ZCode docs: Subagents | 2026-11-22 |
| [S8] | Z.ai, ZCode docs: Skill | 2026-11-22 |
| [S9] | Z.ai, ZCode docs: Plugin | 2026-11-22 |
| [S10] | Z.ai, ZCode docs: MCP | 2026-11-22 |
| [S11] | Z.ai, ZCode docs: Remote Development | 2026-11-22 |
| [S12] | Z.ai, ZCode docs: Remote Control | 2026-11-22 |
| [S13] | Z.ai, ZCode docs: Bot Channel | 2026-11-22 |
| [S14] | Z.ai, ZCode docs: Automations | 2026-11-22 |
| [S15] | Z.ai, ZCode docs: Safety Confirmation | 2026-11-22 |
| [S16] | Z.ai, ZCode CLI guide: Sessions (Chinese, quoted in translation) | 2026-11-22 |
| [S17] | Z.ai, ZCode CLI guide: Permissions (Chinese, quoted in translation) | 2026-11-22 |
| [S18] | Z.AI Developer Docs, ZCode (GLM Coding Plan tool guide) | 2026-11-22 |
| [S19] | Z.AI Developer Docs, GLM Coding Plan overview | 2026-11-22 |
| [S20] | Z.ai, zai-org/ZCode releases | 2026-11-22 |
| [S21] | VentureBeat, Z.ai launches ZCode to challenge Cursor, Claude Code and GitHub Copilot in AI coding, 2 July 2026 (secondary) | 2026-11-22 |
| [S22] | Z.ai, zai-org/ZCode `packages/services/package.json` | 2026-11-22 |
| [S23] | Z.ai, ZCode docs: ADE Tools | 2026-11-22 |

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
[S1]: https://zcode.z.ai/en/docs/welcome
[S2]: https://github.com/zai-org/ZCode
[S3]: https://zcode.z.ai/en/changelog
[S4]: https://zcode.z.ai/
[S5]: https://zcode.z.ai/en/docs/configuration
[S6]: https://zcode.z.ai/en/docs/agents
[S7]: https://zcode.z.ai/en/docs/subagents
[S8]: https://zcode.z.ai/en/docs/skill
[S9]: https://zcode.z.ai/en/docs/plugin
[S10]: https://zcode.z.ai/en/docs/mcp-services
[S11]: https://zcode.z.ai/en/docs/remote-development
[S12]: https://zcode.z.ai/en/docs/remote-control
[S13]: https://zcode.z.ai/en/docs/bot-channel
[S14]: https://zcode.z.ai/en/docs/automations
[S15]: https://zcode.z.ai/en/docs/safety-confirm
[S16]: https://github.com/zai-org/ZCode/blob/main/apps/zcode-cli/docs/usage/06-sessions.md
[S17]: https://github.com/zai-org/ZCode/blob/main/apps/zcode-cli/docs/usage/05-permissions.md
[S18]: https://docs.z.ai/devpack/tool/zcode
[S19]: https://docs.z.ai/devpack/overview
[S20]: https://github.com/zai-org/ZCode/releases
[S21]: https://venturebeat.com/technology/z-ai-launches-zcode-to-challenge-cursor-claude-code-and-github-copilot-in-ai-coding
[S22]: https://github.com/zai-org/ZCode/blob/main/packages/services/package.json
[S23]: https://zcode.z.ai/en/docs/ADE-tools
