---
id: product.microsoft-365-copilot
title: Microsoft 365 Copilot (Microsoft)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Microsoft
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.agent-skills:
    predicate: dcterms:conformsTo
---

# Microsoft 365 Copilot (Microsoft)

Microsoft 365 Copilot lets people at work draft, analyse and get work done across Microsoft 365 with AI grounded "in web and/or organizational data", and through Cowork it "carries out tasks across your Microsoft 365 environment" on their behalf ([S1], [S2]). Microsoft makes it; its app "is now called Microsoft Copilot", while the licences keep the Microsoft 365 Copilot name ([S1]). It runs at `copilot.cloud.microsoft`, in the Microsoft Copilot app for web, desktop and mobile, and inside Word, Excel, PowerPoint, OneNote, Outlook and Teams ([S1]). It is sold as per-user licences, Copilot Chat (Basic), Microsoft 365 Copilot (Basic) and the Microsoft 365 Copilot (Premium) add-on, with Cowork, Copilot Code and Autopilot billed by usage ([S1]). Microsoft publishes no version numbers; the latest release notes seen are of 17 November 2026 ([S8]). It is an [agent][industry.agent] and a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | "By default, Copilot uses a real-time router", with a model selector; Cowork offers "GPT 5.6 and GPT 6 variants, Claude Opus, Claude Sonnet, Claude Fable, and Grok 4.7", Anthropic as a subprocessor; own keys and local models not mentioned | [S1], [S4] |
| [Session][industry.session] | `yes` | Cowork lists recent tasks "so you can resume a previous session", and previous chats and tasks can be referenced as context; Autopilot's workspace "can retain working context between sessions" | [S3], [S5] |
| [Subagent][industry.subagent] | `unknown` | Not described; declarative agent manifest 1.8 adds a "worker agent object", not explained on the pages read | [S6] |
| [Agent team][industry.agent-team] | `unknown` | Not found | None |
| [Skill][industry.skill] | `yes` | Cowork custom skills are `SKILL.md` folders in OneDrive `/Documents/Cowork/skills/`; manifest 1.9's `agent_skills` "references skill directories that follow the Agent Skills standard"; skills in Copilot Chat generally available | [S3], [S6] |
| [Instruction file][industry.instruction-file] | `unknown` | No instruction file found; Cowork's custom instructions are entered on its Preferences tab, "up to 20 KB" | [S4] |
| [Plugin][industry.plugin] | `yes` | "Cowork supports plugins from the Microsoft 365 App Store that add new skills and connectors"; admins can deploy them for everyone | [S2], [S4] |
| [MCP][spec.mcp] | `yes` | A declarative agent's MCP plugin "connects the agent to a remote MCP server", with OAuth or Entra SSO; admins can create custom MCP connectors | [S7], [S8] |
| [Execution environment][industry.environment] | `yes` | `vendor-sandbox`: "Cowork runs in a secure, isolated environment"; it can also work in the user's local Edge browser; Autopilot has its own cloud "computer, and workspace", in preview | [S4], [S5] |
| [Client][industry.client] | `yes` | Web at `copilot.cloud.microsoft`, the Microsoft Copilot desktop app for Windows and macOS, the mobile app for iOS and Android, and Microsoft 365 apps; Autopilot also uses a one-on-one Teams chat | [S1], [S4], [S5] |
| [Agent host][industry.agent-host] | `unknown` | Not found | None |
| [Channel][industry.channel] | `yes` | Cowork event-driven tasks run "when you receive a matching email, or when a Teams message arrives", each run starting a new conversation or continuing the current one | [S3] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found | None |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not named; the Agent Registration API, in preview, registers agents "with associated metadata and agent cards" | [S6] |
| [Bot][system.bot] | `partial` | Autopilot, in Frontier preview: "a constant, cloud-based agent" with "its own workplace identity, memory, computer, and workspace", a name, mailbox and calendar; "Routines can run on a schedule or when an event occurs" | [S5] |

## State of play

- **2026-11-17:** Release notes: custom engine agents available inside Outlook, and a Tableau connector. ([S8])
- **2026-11-04:** Release notes: Copilot Cowork can use the user's local Edge browser. ([S8])
- **2026-10-27:** Release notes: admins can create custom MCP connectors and deploy them across Microsoft 365. ([S8])
- **2026-09-23:** Release notes record the launch of Copilot Cowork. ([S8])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Microsoft Learn, What is Microsoft Copilot? | 2026-11-22 |
| [S2] | Microsoft Learn, Copilot Cowork overview | 2026-11-22 |
| [S3] | Microsoft Learn, Use Copilot Cowork | 2026-11-22 |
| [S4] | Microsoft Learn, Copilot Cowork common questions | 2026-11-22 |
| [S5] | Microsoft Learn, Autopilot (Frontier) overview | 2026-11-22 |
| [S6] | Microsoft Learn, What's new for Microsoft 365 Copilot developers | 2026-11-22 |
| [S7] | Microsoft Learn, Build a plugin for a declarative agent from an MCP server | 2026-11-22 |
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
[industry.agent]: ../industry/industry.agent.md
[spec.agent-skills]: ../specs/agent-skills/spec.agent-skills.md
[S1]: https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-overview
[S2]: https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/
[S3]: https://learn.microsoft.com/en-us/copilot/cowork/use-cowork
[S4]: https://learn.microsoft.com/en-us/copilot/cowork/cowork-faq
[S5]: https://learn.microsoft.com/en-us/copilot/autopilot/overview
[S6]: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/whats-new
[S7]: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/build-mcp-plugins
[S8]: https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes
