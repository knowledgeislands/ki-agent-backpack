---
id: product.grok
title: Grok (SpaceXSI)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: SpaceXSI
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
---

# Grok (SpaceXSI)

Grok lets anyone chat with a Grok model to ask, write, create images and video, talk by voice, work on uploaded files and reach their own email, files and calendar through connectors ([S1]). It is "SpaceXSI's assistant, available on the web at grok.com and in the iOS and Android apps", and the docs set it apart from Grok Build and Grok Bot, which have pages of their own ([S1], [S2]). The App Store lists X Corp. as its seller, under "© xAI Inc." ([S9]). No licence is stated on the pages read; "Grok is free to start", with paid SuperGrok plans, and newer plans under The X Subscription, sharing one weekly usage pool ([S1], [S2], [S10]). The latest release seen is the iOS app 1.4.65, of 12 November ([S9]), and the newest release-notes entry is of 3 October 2026 ([S5]). It is an [agent harness][industry.agent-harness], Grok's own chat loop, and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Grok models only on the pages read: Grok 4.7 "now powers Expert mode on grok.com, and Fast mode for paid subscribers" | [S5], [S8] |
| [Session][industry.session] | `yes` | "Your conversations, settings, and subscription stay in sync across every platform"; Projects hold conversations, files and instructions to return to | [S1], [S5] |
| [Subagent][industry.subagent] | `unknown` | Release notes name an "Agent library — browse and select specialized agents" and SuperGrok Heavy's "other agents", without saying how they work | [S5] |
| [Agent team][industry.agent-team] | `unknown` | Only a fix for "SuperGrok Heavy responses losing the lead answer when other agents chimed in" | [S5] |
| [Skill][industry.skill] | `partial` | Skills are "persistent expertise", built-in ones for Word documents, presentations, spreadsheets and PDFs plus a Skill Creator, made in conversation, uploaded or written; the pages read do not say they are `SKILL.md` folders or name the specification | [S6], [S5] |
| [Instruction file][industry.instruction-file] | `unknown` | Custom instructions in settings and project instructions; no instruction file found | [S5] |
| [Plugin][industry.plugin] | `unknown` | A Plugins area, with a Bots tab, is named in the release notes and not described | [S5] |
| [MCP][spec.mcp] | `yes` | "Bring Your Own MCP": a custom connector by server URL, which "must be reachable over the public internet"; localhost URLs are rejected | [S7], [S3], [S4] |
| [Execution environment][industry.environment] | `partial` | "Grok now has access to a computer where it can write code, run it, install what it needs, and produce real files"; its location and isolation are not described | [S5] |
| [Client][industry.client] | `yes` | Web at grok.com, the iOS and Android apps, and Grok in X; one release note mentions "Grok Desktop", for which no download page was found | [S1], [S2], [S5] |
| [Agent host][industry.agent-host] | `unknown` | Not found | None |
| [Channel][industry.channel] | `unknown` | Automations run "on a schedule you set or when matching emails arrive", starting new runs; nothing found that pushes events into a running conversation | [S5] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found | None |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `partial` | Only through Grok Bot, "durable AI teammates on a persistent cloud computer", which "is not the same as Grok on grok.com" but opens in grok.com's Bots sidebar for SuperGrok Plus and Heavy. Scheduling: Automations on schedules and email triggers | [S2], [S5] |

## State of play

- **2026-11-12:** iOS app 1.4.65, "Improvements to Chat, Voice and Imagine"; the listing gives the day without a year, taken as 2026 since it is the current version. ([S9])
- **2026-10-03:** Grok 4.7 powers Expert mode, and Fast mode for paid subscribers; Grok Bot opens on grok.com for SuperGrok Plus as well as Heavy. ([S5])
- **2026-09-19:** "SuperGrok Heavy subscribers can now use Grok Bot right on grok.com." ([S5])
- **2026-07-16:** Automations: instructions run on a schedule or when matching Gmail or Outlook email arrives, using connectors and skills. ([S5])
- **2026-05-18:** Skills launched on Grok 4.3 "across grok.com, iOS, and Android". ([S6])
- **2026-05-06:** Connectors launched, including "Bring Your Own MCP". ([S7])
- **2026-04-17:** Grok 4.3 beta, and with it "access to a computer where it can write code, run it". ([S5])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | SpaceXSI, Welcome to Grok | 2026-11-22 |
| [S2] | SpaceXSI, FAQ: Grok website and apps | 2026-11-22 |
| [S3] | SpaceXSI, Connectors | 2026-11-22 |
| [S4] | SpaceXSI, Custom MCP Server Tunneling | 2026-11-22 |
| [S5] | SpaceXSI, Grok release notes | 2026-11-22 |
| [S6] | SpaceXSI, Grok Skills announcement | 2026-11-22 |
| [S7] | SpaceXSI, Grok Connectors announcement | 2026-11-22 |
| [S8] | SpaceXSI, Grok 4.7 | 2026-11-22 |
| [S9] | Apple App Store, Grok listing (seller X Corp.) | 2026-11-22 |
| [S10] | SpaceXSI, The X Subscription: Pricing | 2026-11-22 |

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
[S1]: https://docs.x.ai/grok/overview
[S2]: https://docs.x.ai/grok/faq
[S3]: https://docs.x.ai/grok/connectors
[S4]: https://docs.x.ai/grok/connectors/custom-mcp-tunneling
[S5]: https://grok.com/release-notes
[S6]: https://x.ai/news/grok-skills
[S7]: https://x.ai/news/grok-connectors
[S8]: https://x.ai/news/grok-4-7
[S9]: https://apps.apple.com/us/app/grok/id6670324846
[S10]: https://docs.x.ai/x-subscription/pricing
