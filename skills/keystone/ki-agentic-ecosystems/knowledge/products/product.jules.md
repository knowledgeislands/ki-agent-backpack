---
id: product.jules
title: Jules (Google)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Google
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
links:
  industry.agent:
    predicate: skos:broadMatch
---

# Jules (Google)

Jules lets a developer hand off coding work, "an experimental coding agent that helps you fix bugs, add documentation, and build new features", which "integrates with GitHub, understands your codebase, and works autonomously" ([S1]). Google makes it, an [agent][industry.agent] that "runs in a virtual machine where it clones your code, installs dependencies, and modifies files" ([S1]). Its tasks start from the web app, the Jules Tools CLI, the REST API, in alpha, or a GitHub issue labelled "jules" ([S1], [S4], [S7], [S9]). The pages read state no licence: it has a free plan, with Jules in Pro and Jules in Ultra included in the Google AI Pro and Ultra plans ([S6]). It is winding down: read-only after 11 November 2026, and "Jules will wind down on December 31, 2026" ([S2]). Google publishes no version numbers for the agent; the latest changelog entry seen is the turndown notice of 29 October 2026 ([S2]).

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Google's Gemini only: Gemini 3 Flash the base model for all tiers since 30 January 2026, Gemini 3.1 Pro the default for Pro users since 9 March 2026 | [S2], [S6] |
| [Session][industry.session] | `yes` | A session is "a continuous unit of work within a specific context, similar to a chat session"; a paused task "will wait for your next set of instructions" | [S7], [S4] |
| [Subagent][industry.subagent] | `unknown` | Not found | [S4] |
| [Agent team][industry.agent-team] | `unknown` | Not found; the CLI's `--parallel` "Starts multiple parallel sessions to work on the same task", with no messaging between them described | [S9] |
| [Skill][industry.skill] | `unknown` | Not mentioned on the pages read | [S2] |
| [Instruction file][industry.instruction-file] | `yes` | "Jules reads from AGENTS.md if it's in your repo"; it also "will also refer to agents.md or your readme.md file for hints to setup an environment" | [S2], [S3] |
| [Plugin][industry.plugin] | `unknown` | Not found | None |
| [MCP][spec.mcp] | `partial` | "MCP Server support in Jules starting with: Linear, Stitch, Neon, Tinybird, Context7, and Supabase", a hand-picked list | [S2] |
| [Execution environment][industry.environment] | `yes` | `vendor-sandbox`: "a secure, short-lived virtual machine (VM)" running Ubuntu Linux, with setup scripts and environment snapshots | [S3] |
| [Client][industry.client] | `yes` | Web app at jules.google.com; the Jules Tools CLI and its TUI "dashboard view of your sessions"; the REST API | [S1], [S9], [S7] |
| [Agent host][industry.agent-host] | `unknown` | Not found | None |
| [Channel][industry.channel] | `partial` | The alpha REST API's `sessions/SESSION_ID:sendMessage` sends a prompt into a session; integrations let Jules "wake up based on external events (like a failed web hook)" | [S7], [S5] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found | None |
| [ACP][spec.acp] | `unknown` | Not mentioned | [S5] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not mentioned | [S5] |
| [Bot][system.bot] | `unknown` | Not found; the export covers "memories". Scheduling: scheduled tasks recur on a set "Frequency and Cadence (e.g., Daily, Weekly)" | [S2], [S8] |

## State of play

- **2026-11-11:** The last day to finish sessions; after it "we will be turning Jules to read-only until the end of the year". ([S2])
- **2026-10-29:** "Jules Turndown": "Jules will wind down on December 31, 2026", "part of our work to unify our agentic coding efforts", with its lessons shaping "our agent-first platform, Google Antigravity"; an export through Jules Tools and a CLI agent "such as Antigravity CLI" keeps settings, scheduled tasks, memories and every session. ([S2])
- **2026-03-09:** Gemini 3.1 Pro replaced Gemini 3 Pro as the default for Pro users. ([S2])
- **2026-02-02:** MCP server support launched, for a hand-picked list of servers. ([S2])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Google, Jules documentation | 2026-11-22 |
| [S2] | Google, Jules changelog | 2026-11-22 |
| [S3] | Google, Jules environment setup | 2026-11-22 |
| [S4] | Google, Jules running tasks | 2026-11-22 |
| [S5] | Google, Jules integrations | 2026-11-22 |
| [S6] | Google, Jules usage and limits | 2026-11-22 |
| [S7] | Google, Jules REST API reference | 2026-11-22 |
| [S8] | Google, Jules scheduled tasks | 2026-11-22 |
| [S9] | Google, Jules Tools CLI reference | 2026-11-22 |

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
[industry.agent]: ../industry/industry.agent.md
[S1]: https://jules.google/docs/
[S2]: https://jules.google/docs/changelog/
[S3]: https://jules.google/docs/environment/
[S4]: https://jules.google/docs/running-tasks/
[S5]: https://jules.google/docs/integrations/
[S6]: https://jules.google/docs/usage-limits/
[S7]: https://jules.google/docs/api/reference/
[S8]: https://jules.google/docs/scheduled-tasks/
[S9]: https://jules.google/docs/cli/reference
