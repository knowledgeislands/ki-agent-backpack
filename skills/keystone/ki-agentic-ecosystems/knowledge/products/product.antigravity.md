---
id: product.antigravity
title: Antigravity (Google)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Google
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.agent-host:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.agent-skills:
    predicate: dcterms:conformsTo
  spec.acp:
    predicate: dcterms:conformsTo
---

# Antigravity (Google)

Antigravity lets a developer hand coding work to agents, supporting "both synchronous interactive pair-programming and asynchronous background agent workflows", with "native agentic assistance across purpose-built product surfaces" ([S1]). Google makes it, and "every Antigravity surface runs on a shared, highly optimized agent harness co-trained with Gemini models" ([S1]). It runs as the Antigravity App, "a standalone desktop application for launching, orchestrating, and inspecting autonomous agent teams"; the Antigravity CLI, `agy`, "a keyboard-first terminal client"; editor extensions for VS Code, Visual Studio, JetBrains, Zed, Xcode and Eclipse; a Python SDK; and any browser through Remote Control ([S1], [S15]). The pages read state no licence: it starts "at $0/month on the Free plan", with Google AI Plus, Pro and Ultra for higher limits and Enterprise "governed by the Google Cloud Terms of Service" ([S1]). Google announced the CLI as available to everyone on 19 May 2026, and from 18 June 2026 Gemini CLI stopped serving Google AI Pro, Ultra and free users, who move to it ([S18]). The latest App release seen is v2.34.0, of 20 November 2026 ([S2]). It is an [agent harness][industry.agent-harness], an [agent host][industry.agent-host] and a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | "Frontier reasoning models from Google DeepMind and partner providers": Gemini 4 and 3.x, Claude Sonnet and Opus 5.5 and 4.6, GPT-OSS-120b, and an Orchestrator pairing a planner and an executor; own keys and local models not stated for the App or CLI, the SDK listing "Local models" | [S3], [S1] |
| [Session][industry.session] | `yes` | CLI conversations scoped to the working folder, resumed from the Session Picker or `agy -c` / `agy --continue`; `/fork` "clones your entire conversation history" into a new session | [S13] |
| [Subagent][industry.subagent] | `yes` | "The parent agent calls the `invoke_subagent` tool to spawn a new concurrent session"; built-in `research`, `browser` and `self` types, custom Markdown agents, optional isolated Git worktrees, nesting to 10 levels | [S4] |
| [Agent team][industry.agent-team] | `yes` | `/swarm` workers "coordinate on one shared message board with `@mentions`", on all plans; `/teamwork` runs "a collaborative multi-agent team" with Sentinel and Project Orchestrator leads, on paid plans | [S4], [S5] |
| [Skill][industry.skill] | `yes` | `SKILL.md` folders in `.agents/skills`, parent folders and `~/.gemini/config/skills`, by progressive disclosure; "Skills are an open standard", linking agentskills.io, without naming the specification | [S6] |
| [Instruction file][industry.instruction-file] | `yes` | `AGENTS.md` or `GEMINI.md` in the workspace and each parent to the repository root, `.agents/rules/*.md`, and global files under `~/.gemini`; "Antigravity doesn't load rules from subfolders below the workspace folder" | [S7] |
| [Plugin][industry.plugin] | `yes` | A `plugin.json` bundle of "skills, Model Context Protocol (MCP) servers, custom agents and subagents, rules" and hooks, from the Antigravity Marketplace, GitHub or a folder; imports from `~/.gemini/extensions/` or `~/.claude/plugins/` | [S8] |
| [MCP][spec.mcp] | `yes` | Local `stdio` servers and remote servers that "must use the Streamable HTTP transport", with OAuth 2.0 and PKCE handled automatically | [S9] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox`: "OS-level container boundaries" from namespaces, Seatbelt or a Windows AppContainer, on by default in the App's Default preset, off by default in the CLI unless `auto` mode; Remote Agents run in an "isolated, Google-managed remote environment", `vendor-sandbox`, "rolling out gradually" to Pro and Ultra | [S10], [S12] |
| [Client][industry.client] | `yes` | Desktop app, terminal, editor extensions, and any desktop or mobile browser through Remote Control; no native mobile app mentioned | [S1], [S15], [S16] |
| [Agent host][industry.agent-host] | `unknown` | The App and a headless CLI daemon own sessions that browsers drive, but the pages read do not say it runs other makers' harnesses; setups from Claude Code, Codex and Cursor can be imported as a plugin | [S15], [S2] |
| [Channel][industry.channel] | `partial` | No webhooks documented; sidecars, "background processes that run alongside Antigravity" in the App, can send "a message to an existing conversation" | [S14], [S16] |
| [Cross-session messaging][industry.cross-session-messaging] | `partial` | "Agents can communicate with parent agents, subagents, or peer agents whose ID is known", each subagent a concurrent session; messaging between unrelated conversations not described | [S4], [S16] |
| [ACP][spec.acp] | `yes` | As agent: "The `agy acp` command starts an Agent Client Protocol (ACP) server", for Zed, JetBrains IDEs, Android Studio, Xcode and VS Code | [S11] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not mentioned on the maker's pages read; secondary coverage says "Antigravity 2.0 adds native support for Google's Agent-to-Agent (A2A) protocol" | [S19] |
| [Bot][system.bot] | `unknown` | No durable named agent described; sidecars keep a `data/` folder. Scheduling: `schedule` takes cron expressions, and "Automations are scheduled sidecars that start a new agent conversation on each run" | [S14] |

## State of play

- **2026-11-20:** App v2.34.0: "MCP App support and Gemini 4 Neon to eligible paid consumer plans". GPT-OSS-120b and the Claude 4.6 models are marked "Will be removed on November 30, 2026". ([S2], [S3])
- **2026-11-17:** App v2.33.0: "Connect over SSH and GitHub pull request integration". ([S2])
- **2026-11-09:** App v2.31.0: `/swarm`, split-view plugins and browser download approvals. ([S2])
- **2026-06-18:** Gemini CLI and the Gemini Code Assist IDE extensions stopped serving Google AI Pro, Ultra and free individual users, who move to the Antigravity CLI; Standard and Enterprise access is unchanged. ([S18])
- **2026-05-19:** "Starting today, Antigravity CLI is available to everyone", keeping "Agent Skills, Hooks, Subagents, and Extensions (now as Antigravity plugins)", without "1:1 feature parity right out of the gate"; Google's migration guide calls it "Partial parity". ([S18], [S17])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Google, Antigravity docs overview | 2026-11-22 |
| [S2] | Google, Antigravity changelog | 2026-11-22 |
| [S3] | Google, Antigravity models | 2026-11-22 |
| [S4] | Google, Antigravity subagents | 2026-11-22 |
| [S5] | Google, Antigravity `/teamwork` | 2026-11-22 |
| [S6] | Google, Antigravity skills | 2026-11-22 |
| [S7] | Google, Antigravity rules | 2026-11-22 |
| [S8] | Google, Antigravity plugins | 2026-11-22 |
| [S9] | Google, Antigravity MCP | 2026-11-22 |
| [S10] | Google, Antigravity sandbox | 2026-11-22 |
| [S11] | Google, Antigravity CLI: ACP | 2026-11-22 |
| [S12] | Google, Antigravity remote agents | 2026-11-22 |
| [S13] | Google, Antigravity CLI: conversations | 2026-11-22 |
| [S14] | Google, Antigravity sidecars | 2026-11-22 |
| [S15] | Google, Antigravity remote control | 2026-11-22 |
| [S16] | Google, Antigravity features | 2026-11-22 |
| [S17] | Google, Antigravity CLI: migrate from Gemini CLI | 2026-11-22 |
| [S18] | Google Developers Blog, Transitioning Gemini CLI to Antigravity CLI, 19 May 2026 | 2026-11-22 |
| [S19] | ChatForest, Google Antigravity 2.0 review, secondary coverage, 22 May 2026, updated 22 August 2026 | 2026-11-22 |

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
[S1]: https://antigravity.google/docs/overview
[S2]: https://antigravity.google/docs/changelog/
[S3]: https://antigravity.google/docs/models/
[S4]: https://antigravity.google/docs/subagents/
[S5]: https://antigravity.google/docs/teamwork/
[S6]: https://antigravity.google/docs/skills/
[S7]: https://antigravity.google/docs/rules/
[S8]: https://antigravity.google/docs/plugins/
[S9]: https://antigravity.google/docs/mcp/
[S10]: https://antigravity.google/docs/sandbox/
[S11]: https://antigravity.google/docs/cli/acp/
[S12]: https://antigravity.google/docs/remote-agents/
[S13]: https://antigravity.google/docs/cli/conversations/
[S14]: https://antigravity.google/docs/sidecars/
[S15]: https://antigravity.google/docs/remote-control/
[S16]: https://antigravity.google/docs/features/
[S17]: https://antigravity.google/docs/cli/gcli-migration/
[S18]: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
[S19]: https://chatforest.com/reviews/google-antigravity-2-0-agent-platform-review/
