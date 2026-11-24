---
id: product.devin-desktop
title: Devin Desktop (Cognition)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Cognition
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.agent-host:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.acp:
    predicate: dcterms:conformsTo
---

# Devin Desktop (Cognition)

Devin Desktop lets developers write code and manage their agents, local and cloud, in one place: "Manage any agent, locally or in the cloud, from one command center" ([S13]). It is the editor formerly called Windsurf: "Devin Desktop is the new name for Windsurf. It's the same IDE, same editor, and has the same features", renamed on 2 June 2026 ([S1]). Cognition makes it, having "signed a definitive agreement to acquire Windsurf, the agentic IDE" on 14 July 2025 ([S12]); windsurf.com now redirects to devin.ai, observed on 22 November 2026 ([S13]). It runs as a desktop editor for macOS, Windows and Linux, with the Agent Command Center as its primary view and its own Devin Local agent ([S1], [S2], [S5]). It is sold on Free, Pro, Max, Teams and Enterprise plans; no open-source licence was seen ([S9], [S10]). The latest stable release seen is v3.14.30833, of 20 November 2026 ([S3]). It is an [agent harness][industry.agent-harness], an [agent host][industry.agent-host] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | "SWE-2, Claude, and GPT", with Gemini and Fusion pairings of a lead and a sidekick model; GPT usage on a ChatGPT Plus or Pro plan; local models unknown | [S4], [S3] |
| [Session][industry.session] | `yes` | "Local sessions now run in a background process, so you can close or reopen Devin Desktop or the CLI without stopping a session" | [S3], [S8] |
| [Subagent][industry.subagent] | `partial` | Devin Local "can spawn independent subagents", foreground or background, behind the "Subagents (Preview)" toggle | [S5] |
| [Agent team][industry.agent-team] | `unknown` | Not found; Devin Bots start and follow child sessions | [S11] |
| [Skill][industry.skill] | `yes` | `SKILL.md` folders in `.devin/skills/` and `~/.config/devin/skills/`, with `.agents/skills/` also read; the pages read do not name the specification | [S6] |
| [Instruction file][industry.instruction-file] | `yes` | `AGENTS.md`, `AGENTS.local.md` and `AGENT.md` at the root and along the path; `.devin/rules/` with triggers; legacy `.windsurfrules` and `.windsurf/rules/` still read | [S1], [S6] |
| [Plugin][industry.plugin] | `yes` | "Installable bundles of skills, rules, hooks, MCP servers, and subagents", from GitHub, a git URL or a folder | [S6] |
| [MCP][spec.mcp] | `yes` | MCP servers installed per computer or project from the Customize page | [S6] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox`: Devin Local's OS-level sandbox, when enabled, with filesystem isolation and network filtering; `vendor-sandbox`: Devin cloud sessions, each "on its own VM" | [S5], [S7], [S10] |
| [Client][industry.client] | `yes` | Desktop editor and Agent Command Center; a local session opens "in multiple clients at once", Desktop and CLI; Devin cloud sessions stay in sync with the web app | [S3], [S8], [S10] |
| [Agent host][industry.agent-host] | `yes` | Runs "third-party and custom coding agents" over ACP in the Agent Command Center: Codex CLI, Claude Agent, OpenCode, Junie, Gemini CLI; off by default on Enterprise | [S9] |
| [Channel][industry.channel] | `unknown` | Not found | None |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found | None |
| [ACP][spec.acp] | `yes` | As client: "Any agent that implements ACP can be plugged into Devin Desktop"; Devin Local itself is launched as `devin acp` | [S9] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `partial` | Devin Bots, reached from Desktop's sidebar, own an outcome, keep memory, run on schedules or events and start Devin cloud sessions; they are Devin Cloud's, not the local agent's | [S3], [S11] |

## State of play

- **2026-11-20:** Version 3.14.30833, the latest stable release seen. ([S3])
- **2026-11-17:** Version 3.14.30819 makes Devin Bots available; version 3.13.4 runs local sessions in a background process shared with the CLI. ([S3])
- **2026-09-08:** Version 3.9.19: "Cascade has been removed. Devin Local is now the only agent available in Devin Desktop." ([S3])
- **2026-06-02:** "Windsurf is becoming Devin Desktop", delivered as an over-the-air update, with plans and pricing unchanged. ([S1])
- **2025-07-14:** Cognition signs a definitive agreement to acquire Windsurf. ([S12])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Cognition, Devin Desktop FAQ | 2026-11-22 |
| [S2] | Cognition, Welcome to Devin Desktop | 2026-11-22 |
| [S3] | Cognition, Devin Desktop changelog | 2026-11-22 |
| [S4] | Cognition, AI Models | 2026-11-22 |
| [S5] | Cognition, Devin Local | 2026-11-22 |
| [S6] | Cognition, Devin Local customizations | 2026-11-22 |
| [S7] | Cognition, Devin Local permissions | 2026-11-22 |
| [S8] | Cognition, Agent Command Center | 2026-11-22 |
| [S9] | Cognition, Agent Client Protocol | 2026-11-22 |
| [S10] | Cognition, Devin in Devin Desktop | 2026-11-22 |
| [S11] | Cognition, Devin Bots | 2026-11-22 |
| [S12] | Cognition blog, Cognition to acquire Windsurf, 14 July 2025 | 2026-11-22 |
| [S13] | Cognition, Devin Desktop page, reached by the windsurf.com redirect | 2026-11-22 |

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
[S1]: https://docs.devin.ai/desktop/devin-desktop-faq
[S2]: https://docs.devin.ai/desktop/getting-started
[S3]: https://docs.devin.ai/desktop/changelog
[S4]: https://docs.devin.ai/desktop/models
[S5]: https://docs.devin.ai/desktop/devin-local/overview
[S6]: https://docs.devin.ai/desktop/devin-local/customizations
[S7]: https://docs.devin.ai/desktop/devin-local/permissions
[S8]: https://docs.devin.ai/desktop/agent-command-center
[S9]: https://docs.devin.ai/desktop/acp
[S10]: https://docs.devin.ai/desktop/devin
[S11]: https://docs.devin.ai/work-with-devin/bots
[S12]: https://cognition.com/blog/windsurf
[S13]: https://devin.ai/desktop
