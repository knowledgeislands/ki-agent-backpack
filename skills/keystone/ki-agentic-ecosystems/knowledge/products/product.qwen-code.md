---
id: product.qwen-code
title: Qwen Code (Qwen)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Qwen
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

# Qwen Code (Qwen)

Qwen Code helps a developer "turn ideas into code faster than ever before": "Qwen's agentic coding tool", "the open-source AI coding agent for your terminal, editor, desktop, browser, and chat" ([S1], [S2]). It is "maintained by the Qwen Code team" in the `QwenLM` GitHub organisation, and was "originally based on Google Gemini CLI v0.8.2" ([S1], [S22]); its own pages do not name Alibaba, which secondary coverage gives as the maker ([S25]), and Alibaba Cloud's Model Studio documents it for its models ([S23]). It runs as a terminal CLI, headless, a desktop app for macOS, Windows and Linux, a browser Web Shell from `qwen serve`, in VS Code, Zed and JetBrains, through chat channels, and through TypeScript, Python and Java SDKs ([S1], [S20]). It is Apache-2.0 open source, with copyright lines for Google LLC and Qwen ([S5]). The latest stable release seen is v0.28.3, of 21 November 2026; a Qwen Code 1.0 Preview pre-release "brings together the agent capabilities of Qoder and Qwen Code" ([S3], [S4]). Qoder, "an agentic coding platform" with desktop, mobile, IDE, JetBrains and CLI products, is the other agentic coding product in that line; its page does not name its maker, and secondary coverage calls it "Alibaba's agent-assisted development tool" ([S24], [S25]). It is an [agent harness][industry.agent-harness] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | "Supports OpenAI, Anthropic, Gemini, and Qwen APIs. Any third-party provider or local model (Ollama / vLLM)"; Qwen account sign-in, default `qwen3.5-plus`; Alibaba's Coding Plan adds Qwen, GLM, Kimi and MiniMax models; Qwen4-Max integrated | [S1], [S18], [S21] |
| [Session][industry.session] | `yes` | "Resume past conversations with `/resume`, and browse, rename, or archive sessions"; `/branch` forks a conversation into a new session; `qwen sessions list` | [S1], [S16] |
| [Subagent][industry.subagent] | `yes` | Markdown agents in `.qwen/agents/` and `~/.qwen/agents/`; "Top-level regular subagents run in the background by default"; "Fork children cannot spawn any further sub-agent" | [S6] |
| [Agent team][industry.agent-team] | `partial` | "The experimental Agent Team runtime": teammates "share a task list, exchange messages"; a leader assigns up to three workstreams; teammates are in-process, not separate sessions | [S15] |
| [Skill][industry.skill] | `yes` | `SKILL.md` folders from `.qwen/skills/`, `.agents/skills/`, global folders, extensions and bundled skills; the page does not name the specification | [S7] |
| [Instruction file][industry.instruction-file] | `yes` | `QWEN.md` in `~/.qwen/` and the project root, `.qwen/QWEN.local.md`; "If your repository already has an `AGENTS.md` file for other AI tools, Qwen reads that too" | [S8] |
| [Plugin][industry.plugin] | `yes` | Extensions "package prompts, MCP servers, subagents, skills and custom commands", from Git, npm, archives or a marketplace; "Claude plugins are automatically converted" | [S9] |
| [MCP][spec.mcp] | `yes` | Servers over stdio, Streamable HTTP and legacy SSE; "supports OAuth 2.0 authentication for MCP servers" | [S10] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox` or `container`, opt-in: macOS Seatbelt, Linux bwrap or Landlock for tools, Docker or Podman; "Sandboxing reduces but doesn't eliminate all risks" | [S11] |
| [Client][industry.client] | `yes` | Terminal, desktop app, browser Web Shell, VS Code, Zed and JetBrains, chat channels; phones through the Web Shell over TLS | [S1], [S19], [S20] |
| [Agent host][industry.agent-host] | `partial` | Built-in `claude-code` and `codex` agents "delegate to separately installed native tools", Claude Code through its `claude-agent-acp` adapter; "Native sessions cannot be restored after restarting Qwen Code" | [S6] |
| [Channel][industry.channel] | `yes` | Telegram, WeChat, QQ, DingTalk, WeCom, Feishu, Email, GitHub, GitLab and webhooks into a kept session, by default "One session per user"; a message while the agent works "cancels the current request and starts working on your new message"; GitHub events reach the "PR-bound session"; the daemon-managed mode is experimental | [S13], [S19], [S3] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | Running sessions are "addressable from `send_message`" over one UNIX socket each, by name or ref; an ACP-driven session refuses | [S14] |
| [ACP][spec.acp] | `yes` | As agent: `qwen --acp` in Zed, installed "from ACP Registry"; as client: it runs Claude Code through "the ACP executor" | [S12], [S6] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found; the docs list no A2A page, and cross-workspace delegation is not named A2A | [S2], [S21] |
| [Bot][system.bot] | `unknown` | Not found. Auto-memory in `~/.qwen/projects/<project>/memory/`; durable scheduled tasks under channels and the daemon; the experimental Managed Agent deployment runs sessions by API call | [S8], [S17], [S26] |

## State of play

- **2026-11-21:** Version 0.28.3, the latest release: GitHub becomes a managed channel adapter beside a generic webhook channel, and ACP sessions run on the shared agent loop by default. ([S3])
- **2026-11-19:** The weekly update covers v0.27.3 to v0.28.0: Qwen4-Max is integrated and new Web Shell sessions get their own worktree by default. ([S21])
- **2026-11-17:** Version 0.28.0 and Qwen Code Desktop v0.28.0. ([S3])
- **2026-11-11:** Qwen Code 1.0 Preview, a pre-release that "brings together the agent capabilities of Qoder and Qwen Code" and "supports Qwen and Qoder accounts"; the tag page gives no year, and the year and its being "a separate branch" come from secondary coverage. ([S4], [S25])
- **2026-11-02:** The desktop app and Web Shell blog post: "Both do the same work and look the same." ([S20])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Qwen, QwenLM/qwen-code repository README | 2026-11-22 |
| [S2] | Qwen, Qwen Code docs overview | 2026-11-22 |
| [S3] | Qwen, qwen-code releases | 2026-11-22 |
| [S4] | Qwen, v1.0.0-preview release tag | 2026-11-22 |
| [S5] | Qwen, qwen-code LICENSE | 2026-11-22 |
| [S6] | Qwen, SubAgents | 2026-11-22 |
| [S7] | Qwen, Agent Skills | 2026-11-22 |
| [S8] | Qwen, Memory | 2026-11-22 |
| [S9] | Qwen, Extension introduction | 2026-11-22 |
| [S10] | Qwen, MCP | 2026-11-22 |
| [S11] | Qwen, Sandboxing | 2026-11-22 |
| [S12] | Qwen, Zed IDE | 2026-11-22 |
| [S13] | Qwen, Channels overview | 2026-11-22 |
| [S14] | Qwen, Cross-Session Protocol | 2026-11-22 |
| [S15] | Qwen, Multi-Agent Coordination | 2026-11-22 |
| [S16] | Qwen, Commands | 2026-11-22 |
| [S17] | Qwen, Scheduled Tasks | 2026-11-22 |
| [S18] | Qwen, Model Providers | 2026-11-22 |
| [S19] | Qwen, Daemon Mode | 2026-11-22 |
| [S20] | Qwen, Desktop App and Web Shell, 2 November 2026 | 2026-11-22 |
| [S21] | Qwen, Weekly update, 19 November 2026 | 2026-11-22 |
| [S22] | Qwen, Terms of Service | 2026-11-22 |
| [S23] | Alibaba Cloud, Model Studio: Qwen Code, updated 16 November 2026 | 2026-11-22 |
| [S24] | Qoder, home page | 2026-11-22 |
| [S25] | DEV Community, Qwen Code 1.0 Is Here, 11 November 2026, secondary coverage | 2026-11-22 |
| [S26] | Qwen, Managed Agent Reference Deployment | 2026-11-22 |

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
[S1]: https://github.com/QwenLM/qwen-code
[S2]: https://qwenlm.github.io/qwen-code-docs/en/users/overview
[S3]: https://github.com/QwenLM/qwen-code/releases
[S4]: https://github.com/QwenLM/qwen-code/releases/tag/v1.0.0-preview
[S5]: https://github.com/QwenLM/qwen-code/blob/main/LICENSE
[S6]: https://qwenlm.github.io/qwen-code-docs/en/users/features/sub-agents/
[S7]: https://qwenlm.github.io/qwen-code-docs/en/users/features/skills/
[S8]: https://qwenlm.github.io/qwen-code-docs/en/users/features/memory/
[S9]: https://qwenlm.github.io/qwen-code-docs/en/users/extension/introduction/
[S10]: https://qwenlm.github.io/qwen-code-docs/en/users/features/mcp/
[S11]: https://qwenlm.github.io/qwen-code-docs/en/users/features/sandbox/
[S12]: https://qwenlm.github.io/qwen-code-docs/en/users/integration-zed/
[S13]: https://qwenlm.github.io/qwen-code-docs/en/users/features/channels/overview/
[S14]: https://qwenlm.github.io/qwen-code-docs/en/users/features/cross-session-protocol/
[S15]: https://qwenlm.github.io/qwen-code-docs/en/users/features/multi-agent-coordination/
[S16]: https://qwenlm.github.io/qwen-code-docs/en/users/features/commands/
[S17]: https://qwenlm.github.io/qwen-code-docs/en/users/features/scheduled-tasks/
[S18]: https://qwenlm.github.io/qwen-code-docs/en/users/configuration/model-providers/
[S19]: https://qwenlm.github.io/qwen-code-docs/en/users/qwen-serve/
[S20]: https://qwenlm.github.io/qwen-code-docs/en/blog/quickstart/web-shell-and-desktop/
[S21]: https://qwenlm.github.io/qwen-code-docs/en/blog/updates/weekly-update-2026-11-19/
[S22]: https://qwenlm.github.io/qwen-code-docs/en/users/support/tos-privacy/
[S23]: https://www.alibabacloud.com/help/en/model-studio/qwen-code
[S24]: https://qoder.com/
[S25]: https://dev.to/paullovelace/qwen-code-10-is-here-and-its-not-just-a-cli-anymore-4g06
[S26]: https://qwenlm.github.io/qwen-code-docs/en/users/managed-agent-reference-deployment/
