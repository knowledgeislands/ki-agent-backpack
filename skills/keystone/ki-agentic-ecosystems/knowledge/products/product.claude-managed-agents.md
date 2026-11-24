---
id: product.claude-managed-agents
title: Claude Managed Agents (Anthropic)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Anthropic
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.agent-host:
    predicate: skos:broadMatch
  anthropic.agentic-harness:
    predicate: skos:related
---

# Claude Managed Agents (Anthropic)

Claude Managed Agents lets a developer run Claude as an autonomous agent for long-running and asynchronous work without building an agent loop, tool execution or runtime of their own: it is a "pre-built, configurable agent harness that runs in managed infrastructure" ([S1]). Anthropic makes it, and sets it beside the Agent SDK as "a hosted agent harness that runs the agent loop, with sessions in an Anthropic-managed cloud sandbox or a self-hosted sandbox on your own infrastructure", used "from the SDK for your language, the `ant` CLI, or the REST API" ([S2]). It runs on the Claude API, Claude Platform on AWS and Claude Models on Google Cloud (Anthropic managed), all in beta behind the `managed-agents-2026-04-01` header ("Managed Agents are in beta on every model", so its rows are `partial`), and as self-hosted Claude Managed Agents on the customer's own infrastructure, by request ([S1], [S13]). It is a paid service, billed on tokens at model rates and on session runtime at $0.08 a session-hour; no licence is stated on the pages read ([S20]). It launched in beta on 8 April 2026, and the latest change seen is the self-hosted service of 12 November 2026; the API carries no product version number ([S4]). It is an [agent harness][industry.agent-harness] and the [agent host][industry.agent-host] of its sessions: "The Managed Agents service keeps the event history" ([S1]). Its maker's own words for it are on the vendor card [Agentic harness (Anthropic)][anthropic.agentic-harness].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `partial` | Beta. Claude only: "Claude 4.5 and later models are supported"; a self-hosted server can send model calls to Amazon Bedrock, Google Cloud, Microsoft Foundry or "a model gateway that you run" | [S5], [S14] |
| [Session][industry.session] | `partial` | Beta. Sessions "resume cleanly after pauses, and store conversation history, sandbox state, and outputs server-side"; a session "maintains conversation history across multiple interactions" and is archived or deleted through the API | [S1], [S6], [S7] |
| [Subagent][industry.subagent] | `partial` | Beta. "With subagents, it delegates tasks itself and reads what each subagent reports", each in its own session thread, one level deep; dynamic workflows run many agents in phases | [S8], [S9] |
| [Agent team][industry.agent-team] | `unknown` | "A lead agent assigns work to specialists" sharing a filesystem; the docs show subagents reporting only to the primary thread, not to each other | [S3], [S9] |
| [Skill][industry.skill] | `partial` | Beta. "A custom skill is a directory containing a `SKILL.md` file", uploaded or found in a mounted repository's `.claude/skills`; the pages read link Anthropic's Agent Skills docs but do not name the specification | [S10] |
| [Instruction file][industry.instruction-file] | `unknown` | Not found; the agent's system prompt is set on its definition | [S5] |
| [Plugin][industry.plugin] | `unknown` | Not found | None |
| [MCP][spec.mcp] | `partial` | Beta. Remote MCP servers declared "by name and URL", authenticated from a vault; private servers through MCP tunnels, a research preview | [S11], [S1] |
| [Execution environment][industry.environment] | `partial` | Beta. `vendor-sandbox`: "Each session gets its own fresh Linux container on Anthropic-managed infrastructure"; or a self-hosted sandbox, "containers, VMs, or other isolated workspaces" the customer runs | [S12], [S13] |
| [Client][industry.client] | `partial` | Beta. The Console's session viewer and inline session runner; `ant beta:sessions connect` attaches a terminal to a session; SDKs and REST API. No desktop or mobile window found | [S18], [S19], [S4] |
| [Agent host][industry.agent-host] | `unknown` | Hosts sessions of Anthropic's own harness only; nothing found on other makers' harnesses | [S1] |
| [Channel][industry.channel] | `unknown` | The client's own events can "guide the agent while it runs"; no outside-event channel documented, and webhooks only notify outward | [S1], [S17] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Messages pass between threads of one session; memory stores are shared across sessions, but no messaging between sessions found | [S9], [S15] |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `partial` | Beta, in part: a named, versioned agent with memory stores that "carry information across sessions", and scheduled deployments that "start sessions autonomously" on a cron; no mail to the agent or event wake documented | [S5], [S15], [S16] |

## State of play

- **2026-11-12:** Self-hosted Claude Managed Agents launched: the whole service, with agents, sessions and session history, on the customer's own infrastructure, by request to the account team. ([S4], [S13])
- **2026-10-09:** Dynamic workflows, in beta: the agent writes a program that "runs many agents in phases". ([S4])
- **2026-09-10:** Permission policies gain `auto`; `ant` CLI 1.32.0 adds `ant beta:sessions connect`, attaching a terminal to a session. ([S4])
- **2026-06-09:** Scheduled deployments run sessions on a cron schedule. ([S4])
- **2026-05-29:** Webhooks, multiagent orchestration and self-hosted sandboxes reach Claude Platform on AWS. ([S4])
- **2026-05-06:** Dreams, which reorganise a memory store from past transcripts, arrive as a research preview. ([S4])
- **2026-04-23:** Memory in beta under the standard header. ([S4])
- **2026-04-08:** Claude Managed Agents launched in beta, "a fully managed agent harness for running Claude as an autonomous agent". ([S4])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Anthropic, Claude Managed Agents overview | 2026-11-22 |
| [S2] | Anthropic, Agent SDK overview (Claude Code docs) | 2026-11-22 |
| [S3] | Anthropic, Claude Managed Agents product page | 2026-11-22 |
| [S4] | Anthropic, Claude Platform release notes | 2026-11-22 |
| [S5] | Anthropic, Define your agent | 2026-11-22 |
| [S6] | Anthropic, Start a session | 2026-11-22 |
| [S7] | Anthropic, Session operations | 2026-11-22 |
| [S8] | Anthropic, Multiagent orchestration | 2026-11-22 |
| [S9] | Anthropic, Session threads | 2026-11-22 |
| [S10] | Anthropic, Skills | 2026-11-22 |
| [S11] | Anthropic, MCP connector | 2026-11-22 |
| [S12] | Anthropic, Choosing an agent environment | 2026-11-22 |
| [S13] | Anthropic, Self-hosted Claude Managed Agents | 2026-11-22 |
| [S14] | Anthropic, Self-hosted: inference provider | 2026-11-22 |
| [S15] | Anthropic, Using agent memory | 2026-11-22 |
| [S16] | Anthropic, Scheduled deployments | 2026-11-22 |
| [S17] | Anthropic, Subscribe to webhooks | 2026-11-22 |
| [S18] | Anthropic, Build in Console | 2026-11-22 |
| [S19] | Anthropic, Inspect sessions and track usage | 2026-11-22 |
| [S20] | Anthropic, Pricing: Claude Managed Agents | 2026-11-22 |

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
[anthropic.agentic-harness]: ../vendors/anthropic/anthropic.agentic-harness.md
[S1]: https://platform.claude.com/docs/en/managed-agents/overview
[S2]: https://code.claude.com/docs/en/agent-sdk/overview
[S3]: https://claude.com/platform/claude-managed-agents
[S4]: https://platform.claude.com/docs/en/release-notes/overview
[S5]: https://platform.claude.com/docs/en/managed-agents/agent-setup
[S6]: https://platform.claude.com/docs/en/managed-agents/sessions
[S7]: https://platform.claude.com/docs/en/managed-agents/session-operations
[S8]: https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration
[S9]: https://platform.claude.com/docs/en/managed-agents/session-threads
[S10]: https://platform.claude.com/docs/en/managed-agents/skills
[S11]: https://platform.claude.com/docs/en/managed-agents/mcp-connector
[S12]: https://platform.claude.com/docs/en/managed-agents/choosing-an-environment
[S13]: https://platform.claude.com/docs/en/managed-agents/self-hosted
[S14]: https://platform.claude.com/docs/en/managed-agents/self-hosted/inference-provider
[S15]: https://platform.claude.com/docs/en/managed-agents/memory
[S16]: https://platform.claude.com/docs/en/managed-agents/scheduled-deployments
[S17]: https://platform.claude.com/docs/en/managed-agents/webhooks
[S18]: https://platform.claude.com/docs/en/managed-agents/onboarding
[S19]: https://platform.claude.com/docs/en/managed-agents/session-observability
[S20]: https://platform.claude.com/docs/en/about-claude/pricing
