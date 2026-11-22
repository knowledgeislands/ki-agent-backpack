---
id: product.openai-agents-api
title: OpenAI Agents API (OpenAI)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: OpenAI
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.agent-host:
    predicate: skos:broadMatch
  openai.harness:
    predicate: skos:related
---

# OpenAI Agents API (OpenAI)

The OpenAI Agents API lets a developer run long-running agents without building or hosting the agent loop: it "gives your application access to the Codex harness through an OpenAI-managed API", and "OpenAI manages sessions, orchestration, context compaction, and recovery while your application provides tools and chooses its execution environment" ([S1]). OpenAI makes it, and "The Agents API is powered by the open-source Codex harness" ([S2]). It is used through the OpenAI API and its SDKs, `client.beta.agents.sessions`, behind the `OpenAI-Beta: agents=v1` header, and is in public beta, so its rows are `partial` ([S1], [S3], [S12]); Amazon Bedrock Managed Agents, "powered by OpenAI", adapts it for AWS as a separate service ([S11]). It is a paid service with "no additional fees": model usage at API rates, tools at their rates and hosted sandboxes at container rates; no licence is stated on the pages read ([S1], [S2]). It launched in public beta on 10 September 2026, and the latest change seen is of 30 October 2026; the API carries no product version number ([S12]). It is an [agent harness][industry.agent-harness] and the [agent host][industry.agent-host] of its sessions, the harness being "The OpenAI-hosted Codex instance that runs the model and tool loop and maintains the agent’s session" ([S4]). Its maker's own words for it are on the vendor card [Harness (OpenAI)][openai.harness]. It is separate from the OpenAI Agents SDK, whose loop runs inside the developer's application ([S1]).

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `partial` | Beta. OpenAI models through the OpenAI API, `gpt-6-astra` in the examples, set per session; no list of supported models found | [S1], [S5] |
| [Session][industry.session] | `partial` | Beta. A session is "A durable instance of an agent that works on tasks and responds to input"; the harness supports "Resuming a session where it left off", and an idle session takes a new turn "with the existing conversation" | [S1], [S3] |
| [Subagent][industry.subagent] | `partial` | Beta. With `multi_agent` on, "The harness supplies tools to create, message, wait for, and interrupt subagents"; "Each subagent has its own context" | [S6] |
| [Agent team][industry.agent-team] | `unknown` | The main agent "coordinates their work and combines their results"; no subagents messaging each other described | [S6] |
| [Skill][industry.skill] | `partial` | Beta. `SKILL.md` skills from capability directories and plugins; hosted sandboxes ship skills for spreadsheets, presentations and Word documents; the pages read do not name the specification | [S8], [S7], [S12] |
| [Instruction file][industry.instruction-file] | `unknown` | Not found; instructions are set on the agent in the request | [S5] |
| [Plugin][industry.plugin] | `partial` | Beta. "A plugin packages skills, MCP configuration, or both", in Codex's `.codex-plugin/plugin.json` format, loaded into a self-hosted environment or uploaded as a ZIP to a hosted one | [S8] |
| [MCP][spec.mcp] | `partial` | Beta. "The harness can call remote MCP tools directly"; executor MCP servers run inside the session's environment, for private networks or installed software | [S4], [S9] |
| [Execution environment][industry.environment] | `partial` | Beta. `vendor-sandbox`: "OpenAI creates and manages a sandbox for the session", or a sandbox partner's; self-hosted, "a remote sandbox, your laptop, a Docker container, or an AWS Lambda function", `container`; or none | [S4], [S2] |
| [Client][industry.client] | `unknown` | An API and SDKs; no window onto sessions found | [S1] |
| [Agent host][industry.agent-host] | `unknown` | Hosts sessions of OpenAI's own Codex harness only; nothing found on other makers' harnesses | [S4] |
| [Channel][industry.channel] | `unknown` | The application's own input "steers the active turn"; webhooks only notify outward; no outside-event channel documented | [S3], [S10] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found; messaging is between an agent and its subagents within one session | [S6] |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `partial` | Beta, in part: saved agents and durable sessions, and automations that "start new sessions or continue an existing session" on a cron, which agents can also set "in the course of their work"; no memory across sessions documented | [S13], [S5] |

## State of play

- **2026-10-30:** Automatic review, a model approving or denying supported tool and permission requests; tools can be updated in an existing session. ([S12])
- **2026-10-23:** "Added scheduled automations to the Agents API public beta." ([S12])
- **2026-10-16:** Hosted sandboxes gain the Artifact SDK and skills for spreadsheets, presentations and Word documents. ([S12])
- **2026-09-29:** "Added computer use to the Agents API", in an OpenAI-hosted browser. ([S12])
- **2026-09-10:** "Released the Agents API in public beta", on "a managed Codex harness". ([S12], [S2])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | OpenAI, Agents API overview | 2026-11-22 |
| [S2] | OpenAI, Introducing the Agents API, 10 September 2026 | 2026-11-22 |
| [S3] | OpenAI, Agents API: sessions | 2026-11-22 |
| [S4] | OpenAI, Agents API: architecture | 2026-11-22 |
| [S5] | OpenAI, Agents API: configuration | 2026-11-22 |
| [S6] | OpenAI, Agents API: multi-agent | 2026-11-22 |
| [S7] | OpenAI, Agents API: OpenAI-hosted sandboxes | 2026-11-22 |
| [S8] | OpenAI, Agents API: plugins | 2026-11-22 |
| [S9] | OpenAI, Agents API: MCP | 2026-11-22 |
| [S10] | OpenAI, Agents API: webhooks | 2026-11-22 |
| [S11] | OpenAI, Bedrock Managed Agents | 2026-11-22 |
| [S12] | OpenAI, API changelog | 2026-11-22 |
| [S13] | OpenAI, Agents API: automations | 2026-11-22 |

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
[openai.harness]: ../vendors/openai/openai.harness.md
[S1]: https://developers.openai.com/api/docs/guides/agents-api/overview
[S2]: https://openai.com/index/introducing-the-agents-api/
[S3]: https://developers.openai.com/api/docs/guides/agents-api/sessions
[S4]: https://developers.openai.com/api/docs/guides/agents-api/architecture
[S5]: https://developers.openai.com/api/docs/guides/agents-api/configuration
[S6]: https://developers.openai.com/api/docs/guides/agents-api/multi-agent
[S7]: https://developers.openai.com/api/docs/guides/agents-api/environments/openai-hosted
[S8]: https://developers.openai.com/api/docs/guides/agents-api/tools/plugins
[S9]: https://developers.openai.com/api/docs/guides/agents-api/tools/mcp
[S10]: https://developers.openai.com/api/docs/guides/agents-api/sessions/webhooks
[S11]: https://developers.openai.com/api/docs/guides/agents-api/bedrock-managed-agents
[S12]: https://developers.openai.com/api/docs/changelog
[S13]: https://developers.openai.com/api/docs/guides/agents-api/sessions/automations
