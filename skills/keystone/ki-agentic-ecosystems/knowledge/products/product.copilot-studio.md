---
id: product.copilot-studio
title: Copilot Studio (Microsoft)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Microsoft
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.agent-skills:
    predicate: dcterms:conformsTo
  spec.a2a:
    predicate: dcterms:conformsTo
  microsoft.copilot:
    predicate: skos:related
---

# Copilot Studio (Microsoft)

Copilot Studio lets an organisation build agents and workflows, "connect them to your organization's data and systems, and publish them to the channels where your users already work": "a graphical, low-code studio for building and managing AI-powered agents and workflows" ([S1]). Microsoft makes it. What is built runs on one of its harnesses, "the engine that carries out the work behind the scenes": the Microsoft Copilot harness, the Customer Conversation harness, in preview, and the standard harness ([S1], [S2], [S5]). It is a web app at `copilotstudio.microsoft.com`, with a Visual Studio Code extension, and its agents work "across Microsoft Teams, Microsoft Copilot, websites, mobile apps, and other channels" ([S1], [S5]). It is billed in Copilot Credits by usage for the Microsoft Copilot and Customer Conversation harnesses, and by licence for the standard harness ([S2]). Microsoft publishes no version numbers; the latest monthly entry in its what's-new page is October 2026 ([S5]). It is an [agent harness][industry.agent-harness], in the maker's own word. Its skills follow the [Agent Skills specification][spec.agent-skills]. Its maker's own words for it are on the vendor card [Copilot (Microsoft)][microsoft.copilot].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Several makers' models: GPT-5.5 Chat the standard harness's default, Claude Opus 4.8 and Claude Sonnet 5 generally available, and Mistral Medium 3.5 experimental "alongside Anthropic, xAI, and other supported providers" | [S5] |
| [Session][industry.session] | `unknown` | Memory gives "persistent context across interactions" and session transcripts are kept for analytics; resuming a session not described | [S5] |
| [Subagent][industry.subagent] | `partial` | The Customer Conversation harness, in preview, has "a primary agent" working "with specialized sub-agents"; connected agents, Copilot Studio, Foundry or A2A agents, are agents in their own right | [S1], [S2], [S5] |
| [Agent team][industry.agent-team] | `unknown` | Not found | None |
| [Skill][industry.skill] | `yes` | "Agent skills", linking agentskills.io, "follow an open specification and implement a progressive disclosure pattern": a name, description and Markdown instructions, uploaded as a file or package; on the Microsoft Copilot and Customer Conversation harnesses | [S6], [S2] |
| [Instruction file][industry.instruction-file] | `unknown` | No instruction file found; an agent's instructions are part of its "Identity configuration" | [S6] |
| [Plugin][industry.plugin] | `unknown` | No installable bundle found; skills export as Markdown files or packages, and marketplace-shared skills are in preview | [S6], [S5] |
| [MCP][spec.mcp] | `yes` | "Copilot Studio currently supports MCP tools and resources" on the standard harness; MCP servers as tools on the Microsoft Copilot harness in preview; an MCP channel exposes an agent "as a remote MCP server", in preview | [S3], [S5] |
| [Execution environment][industry.environment] | `yes` | `vendor-sandbox`: the Microsoft Copilot harness "runs each task in a secure sandbox governed by Copilot Studio"; computer use, generally available, controls browsers and desktop apps, with Cloud PC pooling | [S2], [S5] |
| [Client][industry.client] | `yes` | Agents reach users in Teams, Microsoft Copilot, websites, mobile apps and by phone; makers work in the web app or the VS Code extension | [S1], [S2], [S5] |
| [Agent host][industry.agent-host] | `unknown` | Not found; agents in Microsoft Foundry or reached over A2A are connected as agents, not run by it | [S5] |
| [Channel][industry.channel] | `unknown` | Triggers, in preview, "run your agent autonomously when an event happens in a connected service"; pushing events into a running session not found | [S5] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found | None |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `yes` | As client: "Connect agents to other agents using the agent-to-agent (A2A) protocol", generally available in April 2026; as remote agent, the A2A channel is in preview | [S4], [S5] |
| [Bot][system.bot] | `partial` | In Frontier preview, an agent's account gives it "its own Microsoft Entra ID, mailbox, and presence across Microsoft 365", one shared memory, and recurrence triggers | [S7] |

## State of play

- **2026-11-17:** Microsoft 365 Copilot release notes: in Copilot Studio, "Invoke agents as workflow steps with the agent node". ([S8])
- **2026-10-23:** New agents can no longer be connected to WhatsApp through the Azure Communication Services-based channel. ([S5])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Microsoft Learn, Overview: Microsoft Copilot Studio | 2026-11-22 |
| [S2] | Microsoft Learn, Harnesses in Copilot Studio | 2026-11-22 |
| [S3] | Microsoft Learn, Extend your agent with Model Context Protocol | 2026-11-22 |
| [S4] | Microsoft Learn, Connect to an agent over the Agent2Agent (A2A) protocol | 2026-11-22 |
| [S5] | Microsoft Learn, What's new in Copilot Studio | 2026-11-22 |
| [S6] | Microsoft Learn, Skills overview for agents (Microsoft Copilot) | 2026-11-22 |
| [S7] | Microsoft Learn, Give your agent an account (Frontier) | 2026-11-22 |
| [S8] | Microsoft Learn, Microsoft 365 Copilot release notes | 2026-11-22 |

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
[microsoft.copilot]: ../vendors/microsoft/microsoft.copilot.md
[S1]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio
[S2]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview
[S3]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp
[S4]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent
[S5]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new
[S6]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview
[S7]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-agent-account
[S8]: https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes
