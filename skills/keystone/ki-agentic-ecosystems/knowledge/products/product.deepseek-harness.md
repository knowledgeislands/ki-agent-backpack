---
id: product.deepseek-harness
title: DeepSeek Harness (DeepSeek)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: DeepSeek
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
---

# DeepSeek Harness (DeepSeek)

DeepSeek Harness lets developers run an agent that can "read and edit workspace files, run commands, delegate work, and maintain a plan", on a harness where "every part of the product is a plugin, including the model adapter, the tool registry, the session log" ([S8], [S7]). DeepSeek makes it: "DeepSeek Harness (`dsh`) is an open-source agent harness developed by DeepSeek AI", "built on an everything-is-a-plugin architecture and powered by Cordis", in the `deepseek-ai` GitHub organisation ([S1]). It runs as a web UI started by `npx @deepseek-ai/dsh web`, a desktop app, and headless, SDK, ACP and terminal profiles of the `dsh` command ([S1], [S6], [S7]). It is MIT licensed ([S1]). It is "in developer preview and iterating rapidly. THERE WILL BE COMPATIBILITY-BREAKING CHANGES", and DeepSeek's API documentation says it "is now in developer preview for agent harness developers worldwide" ([S1], [S3]); every capability below is therefore `partial` at most. The newest release seen is the prerelease 0.2.3-alpha.1, of 22 November 2026, under npm's `alpha` tag; 0.2.2-rc.5, of 18 November 2026, remains npm's `latest` ([S2], [S24]). It is an [agent harness][industry.agent-harness] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `partial` | Developer preview. DeepSeek built in, its list from the DeepSeek API; bundled providers "such as `anthropic`, `openai`, `moonshotai` for Kimi, or `zai` for GLM"; a custom model API "for a relay, a company gateway, a self-hosted server"; local runners such as Ollama not named | [S5], [S3] |
| [Session][industry.session] | `partial` | Developer preview. The session log is an "append-only `SessionEvent` log"; `dsh --profile tui --resume <id>`; headless runs "one fresh persisted session"; ACP lists, resumes and closes sessions across restarts | [S7], [S6], [S20] |
| [Subagent][industry.subagent] | `partial` | Developer preview. The `subagent` tool delegates to named providers; "Local spawn and fork children retain durable sessions" | [S9] |
| [Agent team][industry.agent-team] | `partial` | Developer preview, off by default: **Use Agent Teams** adds "durable shared task board"; "Members use standard subagent tools" to "discover and contact one another" and "share one checkout" | [S13], [S14] |
| [Skill][industry.skill] | `partial` | Developer preview. Skills as `<name>/SKILL.md` or flat `<name>.md` with `name` and `description` front matter, from project, custom and user roots, loaded on demand; the pages read do not name the specification | [S15] |
| [Instruction file][industry.instruction-file] | `partial` | Developer preview. `AGENTS.md` and `CLAUDE.md` from `$DSH_HOME/AGENTS.md`, `~/.agents/AGENTS.md` and the project root down to the working directory, with `AGENTS.local.md` and `CLAUDE.local.md` overlays | [S16] |
| [Plugin][industry.plugin] | `partial` | Developer preview. "There is no privileged core to patch"; bundles installed from npm or Git on the Plugins page; custom plugin indexes are experimental and "DSH ships no index source" | [S7], [S21] |
| [MCP][spec.mcp] | `partial` | Developer preview. `dsh-mcp-client` uses "tools and resources from external Model Context Protocol (MCP) servers"; "No server is enabled by default"; servers managed in Settings or by plugins; "MCP prompt templates are unsupported" | [S17], [S18] |
| [Execution environment][industry.environment] | `partial` | Developer preview. `harness-sandbox`: `read-only`, `workspace-write` or `danger-full-access` per call on Linux, macOS and Windows, "same-world confinement"; "use a container, microVM, or remote executor when the whole environment must be isolated", through a `ctx.sandbox` backend | [S19], [S7] |
| [Client][industry.client] | `partial` | Developer preview. Web UI, phone and tablet layouts since 0.2.2-rc.1, desktop app, a terminal profile, headless runs and a Python SDK | [S1], [S2], [S6], [S8] |
| [Agent host][industry.agent-host] | `partial` | Developer preview. Runs Claude Code and Codex as one-shot subagents, a "fresh, unattended Claude Code session" or "fresh isolated Codex thread", and any ACP agent in a subprocess; "ACP, DSH SDK, Codex, and Claude Code execute once" | [S9], [S10], [S11], [S12] |
| [Channel][industry.channel] | `unknown` | No channel found. Experimental webhook rules create "an ordinary root Session", an integration, not a channel; scheduled reminders can be delivered to an existing conversation | [S23], [S22] |
| [Cross-session messaging][industry.cross-session-messaging] | `partial` | Developer preview. Agents "discover and message subagent tree" members by name and wait on an inbox; within one subagent tree only, nothing found between unrelated sessions | [S14] |
| [ACP][spec.acp] | `partial` | Developer preview. As agent: `dsh --profile acp`, "Automation-only ACP (Agent Client Protocol) server", omitting "interactive UI features"; as client: `dsh-subagent-acp` | [S20], [S6], [S12] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found in the pages read or the repository's file list (observed) | [S1] |
| [Bot][system.bot] | `unknown` | No durable named agent found. Scheduling: the Host Schedule service sends instructions "at a chosen time or on a repeating schedule"; memory MCP servers are an opt-in example overlay | [S22], [S6] |

## State of play

- **2026-11-22:** Version 0.2.3-alpha.1, a prerelease under npm's `alpha` tag: Git repositories as plugin sources, an experimental timeline plugin, a code-review page, and optional connector plugins such as Linear, Notion, Feishu, WeCom and DingTalk (translated from Chinese). ([S2], [S24])
- **2026-11-18:** Version 0.2.2-rc.5, a prerelease and the npm `latest` tag: DeepSeek models use DeepSeek's server-side search with "no per-search charge". ([S2], [S24])
- **2026-11-13:** Version 0.2.2-rc.3 adds an experimental plugin that imports past conversations from the DeepSeek App or its web version. ([S2])
- **2026-11-04:** Version 0.2.2-rc.1: phone and tablet support, an experimental `subagent_oar` tool delegating to local Codex or Claude CLIs, and experimental Git worktrees per session. ([S2])
- **2026-10-17:** DeepSeek released DeepSeek-V4.1-Flash-1017, "Optimized for DeepSeek Harness", advising "Upgrade to DeepSeek Harness v0.2.1-rc.1 or later"; version 0.2.1-rc.2 added support for it. ([S4], [S2])
- **2026-08-17:** The oldest release listed, dsh-v0.1.0-rc.7; GitHub's record dates the repository's creation to 13 August 2026 (observed). ([S2], [S1])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | DeepSeek, deepseek-ai/deepseek-harness repository and README, with its metadata and file list read through the GitHub API | 2026-11-22 |
| [S2] | DeepSeek, deepseek-harness releases | 2026-11-22 |
| [S3] | DeepSeek, DeepSeek API Docs: Your First API Call | 2026-11-22 |
| [S4] | DeepSeek, DeepSeek-V4.1-Flash-1017: Wish-Driven Programming Made Real, 17 October 2026 | 2026-11-22 |
| [S5] | DeepSeek, Configure models | 2026-11-22 |
| [S6] | DeepSeek, dsh CLI README | 2026-11-22 |
| [S7] | DeepSeek, Architecture | 2026-11-22 |
| [S8] | DeepSeek, Web UI guide | 2026-11-22 |
| [S9] | DeepSeek, dsh-subagent README | 2026-11-22 |
| [S10] | DeepSeek, dsh-subagent-claude-code README | 2026-11-22 |
| [S11] | DeepSeek, dsh-subagent-codex README | 2026-11-22 |
| [S12] | DeepSeek, dsh-subagent-acp README | 2026-11-22 |
| [S13] | DeepSeek, dsh-agent-team README | 2026-11-22 |
| [S14] | DeepSeek, dsh-tool-subagent-control README | 2026-11-22 |
| [S15] | DeepSeek, dsh-skill-filesystem README | 2026-11-22 |
| [S16] | DeepSeek, dsh-agent-instructions README | 2026-11-22 |
| [S17] | DeepSeek, dsh-mcp-client README | 2026-11-22 |
| [S18] | DeepSeek, dsh-mcp-manager README | 2026-11-22 |
| [S19] | DeepSeek, dsh-sandbox README | 2026-11-22 |
| [S20] | DeepSeek, dsh-acp README | 2026-11-22 |
| [S21] | DeepSeek, Plugin indexes | 2026-11-22 |
| [S22] | DeepSeek, Schedule reminders, with the dsh-schedule README | 2026-11-22 |
| [S23] | DeepSeek, dsh-webhook README | 2026-11-22 |
| [S24] | npm, @deepseek-ai/dsh registry entry | 2026-11-22 |

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
[S1]: https://github.com/deepseek-ai/deepseek-harness
[S2]: https://github.com/deepseek-ai/deepseek-harness/releases
[S3]: https://api-docs.deepseek.com/
[S4]: https://api-docs.deepseek.com/news/news261017/
[S5]: https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md
[S6]: https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/cli/README.md
[S7]: https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md
[S8]: https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md
[S9]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/subagent/subagent/README.md
[S10]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/subagent/subagent-claude-code/README.md
[S11]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/subagent/subagent-codex/README.md
[S12]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/subagent/subagent-acp/README.md
[S13]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/team/agent-team/README.md
[S14]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/subagent/tool-subagent-control/README.md
[S15]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/skill-filesystem/README.md
[S16]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/context/agent-instructions/README.md
[S17]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/mcp/mcp-client/README.md
[S18]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/mcp/mcp-manager/README.md
[S19]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/sandbox/sandbox/README.md
[S20]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/acp/acp/README.md
[S21]: https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/plugin-market.md
[S22]: https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/schedule.md
[S23]: https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/experimental/webhook/README.md
[S24]: https://registry.npmjs.org/@deepseek-ai/dsh
