---
id: product.delta
title: Delta (Zed Industries)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Zed Industries
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
---

# Delta (Zed Industries)

Delta lets a team code with agents together and review what they build, keeping each conversation joined to the code it changed: "a multiplayer environment for coding with agents and reviewing what they build", in which "an agent works in a checkout of your repository, and you review and pull in the results" ([S2], [S5]). Zed Industries makes it, "From the creators of Zed", on DeltaDB, which "replicates the conversation and the worktree together, in real time, for everyone in a thread" ([S1], [S2]). It runs as a desktop app for macOS, Linux and Windows, as Delta Web in a browser, which can be added to a phone's Home Screen, and through the Delta CLI, in beta ([S6], [S16], [S17]). Delta is in public beta; it shares Zed's account and plans, Personal at $0 and Pro at $10 a month, with Cloud Runners free for now ([S3], [S21]). No page read names a licence or calls Delta open source: it is offered under Zed Industries' Delta Product Terms and General Terms, though its Claude Code plugin "is open source" ([S22], [S20]). The latest release seen is 0.28.4, of 20 November 2026 ([S4]). It is an [agent harness][industry.agent-harness], an [agent host][industry.agent-host] for its threads and a [client][industry.client] onto them.

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Zed-hosted models on paid plans; ChatGPT, Copilot and Grok subscriptions; API keys for Anthropic, OpenAI, Google AI Studio, OpenRouter, OpenCode Zen and Go; local models "with LM Studio or Ollama" on desktop | [S12] |
| [Session][industry.session] | `yes` | A thread is "the basic unit of work in Delta"; "Threads persist", keeping "its full history and any Delta worktrees", and archived threads reopen; threads sync across devices since 0.27.0 | [S7], [S4] |
| [Subagent][industry.subagent] | `yes` | "Each subagent works in a separate conversation and reports back to the agent in your original thread", with Worker, Scout and Reviewer profiles and delegation "Only When Asked" by default | [S8], [S10] |
| [Agent team][industry.agent-team] | `unknown` | Several people share one thread and agent; the pages read describe subagents reporting to their parent, not a team of agent sessions with a lead | [S8], [S24] |
| [Skill][industry.skill] | `yes` | "A skill is a folder containing a `SKILL.md`", from `.agents/skills/`, `~/.agents/skills/` and `.delta/skills/`, plus built-in skills; the page does not name the specification | [S9] |
| [Instruction file][industry.instruction-file] | `yes` | Personal `AGENT.md` or `AGENTS.md`; at the root the first of `AGENT.md`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.rules`, `.cursorrules` and others; folder `AGENTS.md` as the agent works there | [S10] |
| [Plugin][industry.plugin] | `unknown` | Nothing read shows Delta installing bundles that extend it; its plugins go the other way, a Claude Code plugin, in beta, that connects Claude Code to Delta | [S18], [S19] |
| [MCP][spec.mcp] | `yes` | Connects to "remote HTTPS MCP servers with OAuth, bearer tokens, custom headers, or no authentication"; "Local MCP servers are not supported" | [S11] |
| [Execution environment][industry.environment] | `yes` | `vendor-sandbox`: a Cloud Runner "is a Linux sandbox" on "Zed-hosted infrastructure"; on the user's own machine `none`: "Delta does not sandbox agents" | [S14], [S15] |
| [Client][industry.client] | `yes` | Desktop app on macOS, Linux and Windows; Delta Web in a browser, on a phone as a Home Screen web app; the Delta CLI, in beta | [S6], [S16], [S17] |
| [Agent host][industry.agent-host] | `partial` | Runs Anthropic's Claude Agent in a thread "in place of Delta's" over ACP, in beta and desktop only, though "Each computer keeps its own Claude session"; Claude Code sessions sync to threads through a plugin; "Pi is in progress" | [S13], [S18], [S20] |
| [Channel][industry.channel] | `unknown` | The pages read document no webhooks, schedules or event triggers into a thread; `delta thread send` carries one thread's agent message to another | [S7], [S14], [S17] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | "Ask the agent to send a message to another thread"; "The receiving agent handles it during its current response or starts a new response if idle" | [S7], [S8], [S17] |
| [ACP][spec.acp] | `partial` | As client: "Delta connects to it through the Agent Client Protocol (ACP)" for Claude Agent, in beta; "Other ACP agents and custom agent commands aren't supported at this time" | [S13] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `unknown` | Not found. Personal and Cloud Runners run a thread's turns while its owner is away, but no named agent with its own memory or schedules is described | [S14], [S23] |

## State of play

- **2026-11-20:** Version 0.28.4, the latest seen; 0.28.0, of 18 November, made soft compaction "the default for new threads" and added search of organisation threads. ([S4])
- **2026-11-17:** Personal Runners: "Most tools call this remote control. We call it Personal Runners", a turn running on one's own machine while it is steered from another desktop or a phone's browser. ([S23])
- **2026-11-16:** Version 0.27.0: "Threads and the sidebar now sync across devices", and several accounts or keys per model provider. ([S4])
- **2026-11-12:** Version 0.26.0: "Threads can now run on Claude Agent", over ACP, and Delta Web can create threads. ([S4], [S13])
- **2026-11-11:** Cloud Runners arrive: "Move a thread to the cloud and the agent keeps working without your computer." ([S25])
- **2026-09-16:** Public beta: "anyone can download Delta for macOS, Linux, or Windows", free during the beta, with paid plans to follow. ([S3])
- **2026-08-12:** Zed Industries introduces Delta and invites "the first users into our private beta". ([S2])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Zed Industries, Delta home | 2026-11-22 |
| [S2] | Zed Industries blog, Introducing Delta | 2026-11-22 |
| [S3] | Zed Industries blog, Replace PRs with Delta – Now in Public Beta | 2026-11-22 |
| [S4] | Zed Industries, Delta docs: What's in the latest | 2026-11-22 |
| [S5] | Zed Industries, Delta docs: Getting started | 2026-11-22 |
| [S6] | Zed Industries, Delta docs: Installation | 2026-11-22 |
| [S7] | Zed Industries, Delta docs: Threads | 2026-11-22 |
| [S8] | Zed Industries, Delta docs: Subagents | 2026-11-22 |
| [S9] | Zed Industries, Delta docs: Skills | 2026-11-22 |
| [S10] | Zed Industries, Delta docs: Settings | 2026-11-22 |
| [S11] | Zed Industries, Delta docs: MCP Servers | 2026-11-22 |
| [S12] | Zed Industries, Delta docs: Models and Providers | 2026-11-22 |
| [S13] | Zed Industries, Delta docs: Claude Agent | 2026-11-22 |
| [S14] | Zed Industries, Delta docs: Cloud Runners | 2026-11-22 |
| [S15] | Zed Industries, Delta docs: Agentic Safety | 2026-11-22 |
| [S16] | Zed Industries, Delta docs: Delta on the Web | 2026-11-22 |
| [S17] | Zed Industries, Delta docs: Get Started with Delta CLI | 2026-11-22 |
| [S18] | Zed Industries, Delta docs: Claude Code Plugin | 2026-11-22 |
| [S19] | Zed Industries, Delta docs: Build a Coding Agent Plugin | 2026-11-22 |
| [S20] | Zed Industries, Delta CLI | 2026-11-22 |
| [S21] | Zed Industries, Delta pricing | 2026-11-22 |
| [S22] | Zed Industries, Delta Product Terms | 2026-11-22 |
| [S23] | Zed Industries, Delta blog: Remote control that actually works | 2026-11-22 |
| [S24] | Zed Industries, Delta docs: Collaborate in a Thread | 2026-11-22 |
| [S25] | Zed Industries, Delta blog index, for Cloud Runners are now in Delta | 2026-11-22 |

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
[S1]: https://delta.dev/
[S2]: https://zed.dev/blog/introducing-delta
[S3]: https://zed.dev/blog/delta-public-beta
[S4]: https://delta.dev/docs/whats-in-the-latest
[S5]: https://delta.dev/docs/getting-started
[S6]: https://delta.dev/docs/installation
[S7]: https://delta.dev/docs/agents/threads
[S8]: https://delta.dev/docs/agents/subagents
[S9]: https://delta.dev/docs/agents/skills
[S10]: https://delta.dev/docs/configuration/settings
[S11]: https://delta.dev/docs/agents/mcp
[S12]: https://delta.dev/docs/agents/models-and-providers
[S13]: https://delta.dev/docs/agents/claude-agent
[S14]: https://delta.dev/docs/agents/cloud-runners
[S15]: https://delta.dev/docs/privacy-and-security/agentic-safety
[S16]: https://delta.dev/docs/collaboration/delta-on-the-web
[S17]: https://delta.dev/docs/cli/get-started
[S18]: https://delta.dev/docs/cli/claude-code
[S19]: https://delta.dev/docs/cli/build-a-plugin
[S20]: https://delta.dev/cli
[S21]: https://delta.dev/pricing
[S22]: https://delta.dev/terms
[S23]: https://delta.dev/blog/remote-control
[S24]: https://delta.dev/docs/collaboration/collaborate-thread
[S25]: https://delta.dev/blog
