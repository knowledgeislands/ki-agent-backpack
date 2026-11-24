---
id: product.grok-bot
title: Grok Bot (SpaceXSI)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: SpaceXSI
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
---

# Grok Bot (SpaceXSI)

Grok Bot lets a person or a team hand ongoing work to named AI teammates that keep going while they are away: "Grok Bot is your proactive AI teammate", giving "Bots that do work for you on a cloud computer they share" ([S1], [S2]). SpaceXSI makes it: its docs carry "© 2026 SpaceX Super Intelligence LLC", and they set it apart from the Grok chat app, "Grok (the chat app from SpaceXSI) and Grok Bot are two different apps"; it "signs in with your Cursor account" ([S4], [S10]). It runs as a desktop app on macOS (Apple silicon and Intel), Windows (x64 and Arm64) and Linux (x64 and Arm64), with companion apps for iOS and Android, in X Chat and on X, and as Team Bots in Slack and Microsoft Teams ([S2], [S9], [S4], [S11]). No licence is stated on the pages read; it comes with Premium, Super and Ultra on The X Subscription, paid legacy Cursor plans, or a linked SuperGrok or X Premium+ subscription ([S2]). It launched in beta on 11 August 2026 and reached 1.0 on 11 November; the latest release seen is the iOS app 1.27.0, of 19 November 2026 ([S10], [S11], [S12]). It is an [agent harness][industry.agent-harness] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | "Grok Bot picks the model for each task, and there is no model picker": "a first-party SpaceXSI model or a third-party model from a provider on the sub-processor list" | [S4] |
| [Session][industry.session] | `yes` | "The same Bots and conversations sync across your signed-in devices"; work runs in the cloud, and closing the app, laptop or phone "does not stop a background turn or routine" | [S4] |
| [Subagent][industry.subagent] | `partial` | Only by handing work out: Bots "can also hand coding work to Cursor Cloud Agents and attach the results to their reply" | [S3] |
| [Agent team][industry.agent-team] | `yes` | Several Bots in a group chat, a primary Bot coordinating the others; a Bot can "message another Bot to hand off work"; Team Bots are shared by everyone on a team | [S7], [S3], [S11] |
| [Skill][industry.skill] | `partial` | "A skill is a reusable set of instructions for how to do a task", saved from a finished task or a recording, shared across a user's Bots and publishable to a team; the pages read do not say they are `SKILL.md` folders or name the specification | [S6] |
| [Instruction file][industry.instruction-file] | `unknown` | Not found; rules live in each Bot's memory and in approval rules | [S3] |
| [Plugin][industry.plugin] | `yes` | "Bots can use other services through plugins and custom MCP servers"; apps install from a catalogue, and the marketplace Bot tinkabot "Wraps an API in a plugin made of an MCP server and skills" | [S3], [S5] |
| [MCP][spec.mcp] | `yes` | A custom connector by Remote HTTPS URL, with headers and OAuth, or by a command run on the cloud computer; a Bot can add a server itself | [S5] |
| [Execution environment][industry.environment] | `yes` | `vendor-sandbox`: one persistent cloud computer per user, "dedicated and hardware-isolated", shared by all that user's Bots, whose screens "are separate work surfaces, not separate security boundaries"; commands on the user's own desktop only if allowed | [S5], [S4] |
| [Client][industry.client] | `yes` | Desktop app on macOS, Windows and Linux, iOS and Android apps, X Chat and `@bot` on X, Slack and Microsoft Teams, and video calls through their chat | [S2], [S9], [S4], [S11] |
| [Agent host][industry.agent-host] | `unknown` | Not found; coding work goes to Cursor Cloud Agents as a separate service | [S3] |
| [Channel][industry.channel] | `yes` | Messages reach a Bot from Slack, X Chat and an X tag, and routines start on "a Slack message, a GitHub, Linear, Sentry, or PagerDuty event, an email to your Bot's own address, or a webhook call" | [S7], [S4], [S6] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | "A Bot can also message you in its own chat, or message another Bot to hand off work; those messages show up in the Bots' own chats" | [S7] |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `yes` | Named Bots, each with "its own memory", keeping preferences, rules and "a dated log of its work", on a persistent computer. Scheduling: routines on a schedule, at least five minutes apart, or on events | [S3], [S6], [S8] |

## State of play

- **2026-11-19:** iOS app 1.27.0, the latest release seen on the App Store, sold by X Corp. ([S12])
- **2026-11-11:** "Today we're launching Grok Bot 1.0": Team Bots, Bots in Slack, Microsoft Teams and video calls, and proactive work. ([S11])
- **2026-08-11:** "Grok Bot is in beta and available today", for SuperGrok and Cursor subscribers on desktop and iOS. ([S10])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | SpaceXSI, Grok Bot overview | 2026-11-22 |
| [S2] | SpaceXSI, Grok Bot: Get started | 2026-11-22 |
| [S3] | SpaceXSI, How Grok Bot works | 2026-11-22 |
| [S4] | SpaceXSI, Grok Bot FAQ | 2026-11-22 |
| [S5] | SpaceXSI, Grok Bot: Use the computer and apps | 2026-11-22 |
| [S6] | SpaceXSI, Grok Bot: Skills and routines | 2026-11-22 |
| [S7] | SpaceXSI, Grok Bot: Chat and collaboration | 2026-11-22 |
| [S8] | SpaceXSI, Grok Bot: Bots | 2026-11-22 |
| [S9] | SpaceXSI, Grok Bot for Mobile | 2026-11-22 |
| [S10] | SpaceXSI, Introducing Grok Bot, 11 August 2026 | 2026-11-22 |
| [S11] | SpaceXSI, Introducing Grok Bot 1.0, 11 November 2026 | 2026-11-22 |
| [S12] | Apple App Store, Grok Bot listing (seller X Corp.) | 2026-11-22 |

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
[S1]: https://docs.x.ai/grok-bot/overview
[S2]: https://docs.x.ai/grok-bot/get-started
[S3]: https://docs.x.ai/grok-bot/how-grok-bot-works
[S4]: https://docs.x.ai/grok-bot/faq
[S5]: https://docs.x.ai/grok-bot/computer-and-apps
[S6]: https://docs.x.ai/grok-bot/skills-routines-and-automations
[S7]: https://docs.x.ai/grok-bot/chat-and-collaboration
[S8]: https://docs.x.ai/grok-bot/bots
[S9]: https://docs.x.ai/grok-bot/mobile
[S10]: https://x.ai/news/introducing-grok-bot
[S11]: https://x.ai/news/grok-bot-1-0
[S12]: https://apps.apple.com/us/app/grok-bot/id6794501026
