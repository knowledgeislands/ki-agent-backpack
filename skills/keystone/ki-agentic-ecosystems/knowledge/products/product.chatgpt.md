---
id: product.chatgpt
title: ChatGPT (OpenAI)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: OpenAI
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
  spec.agent-skills:
    predicate: dcterms:conformsTo
  openai.chatgpt:
    predicate: skos:related
---

# ChatGPT (OpenAI)

ChatGPT lets anyone ask, talk through or hand off work in plain language, from a quick answer in Chat to a finished deliverable in Work: "ChatGPT is an AI agent that you communicate with in natural language", and "ChatGPT Work can plan a task, gather context, use tools, and carry the work through to a result you can review" ([S1]). OpenAI makes it. It runs on the web, in a desktop app for macOS and Windows, with Linux "in public preview" since 14 August 2026, in iOS and Android apps, through a Chrome extension, in voice, and as @ChatGPT in Slack ([S2], [S3], [S4], [S20], [S23]). The desktop app also holds Codex, "Choose ChatGPT or Codex" ([S2]), and dots, always-on agents "in the cloud" with "its own computer and browser" ([S7]). It is a hosted service sold on plans, from Free at $0 through Go, Plus and Pro, up to $500 a month, to Business and Enterprise, with Work and Codex sharing "pricing, credits, and usage limits"; the pages read state no licence ([S21]). The latest app release seen is ChatGPT for iOS 1.2026.314, of 18 November 2026 ([S5]), and the latest release note 20 November 2026 ([S4]). Its cloud work "uses the Codex task-execution harness" ([S15]); it is an [agent harness][industry.agent-harness] in that sense, an [agent host][industry.agent-host], since a cloud task "can keep going after you close the desktop app and continue from the web or mobile app" ([S1]), and a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills]. Its maker's own words for it are on the vendor card [ChatGPT (OpenAI)][openai.chatgpt].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | OpenAI's own: GPT-6.2 Astra and Sol, in preview in Work, and GPT-6 Luna, with GPT-Live for voice; local Work in the desktop app can use "OpenAI models available through Amazon Bedrock"; no other makers' models found | [S4], [S6], [S20], [S22] |
| [Session][industry.session] | `yes` | Chats and projects kept under Chats, archived and restored from Settings; a cloud task continues "from the web or mobile app"; "Retained conversation and execution context can help Work resume interrupted tasks" | [S1], [S15], [S17] |
| [Subagent][industry.subagent] | `yes` | "ChatGPT Work and Codex can run subagent workflows by spawning specialized agents in parallel", in ChatGPT's hosted environment, for eligible accounts; delegation on request except at Ultra | [S10] |
| [Agent team][industry.agent-team] | `unknown` | Subagents report "summaries" to the parent; GPT-6 Pro's "Multiple agents that can work on different parts of a task in parallel"; nothing on agents messaging each other | [S10], [S4], [S25] |
| [Skill][industry.skill] | `yes` | "A skill is a directory with a `SKILL.md` file"; "Skills build on the open agent skills standard"; standalone in the desktop app, bundled in plugins on web, desktop and mobile | [S11], [S12] |
| [Instruction file][industry.instruction-file] | `unknown` | Custom instructions and project instructions are settings, not files; `AGENTS.md` is documented for Codex, though the projects page advises "durable project guidance in `AGENTS.md`" | [S18], [S17], [S19] |
| [Plugin][industry.plugin] | `yes` | "An installable bundle that can include skills and Model Context Protocol (MCP) servers"; "ChatGPT and Codex share one universal plugin directory"; custom GPTs are moving to plugins | [S12], [S27] |
| [MCP][spec.mcp] | `yes` | The desktop app adds STDIO or Streamable HTTP servers with OAuth; "ChatGPT web uses remote MCP tools through plugins" | [S13] |
| [Execution environment][industry.environment] | `yes` | `vendor-sandbox`: Work Cloud tasks "run in VM-backed sandboxes" on OpenAI's infrastructure; `harness-sandbox`: local desktop-app commands under `read-only`, `workspace-write` or `danger-full-access` | [S15], [S14] |
| [Client][industry.client] | `yes` | Web, desktop app (macOS, Windows, Linux preview), iPhone, iPad, Android and Apple Vision Pro, Chrome extension, voice in the desktop app, @ChatGPT in Slack, texting a dot by iMessage or RCS in beta | [S2], [S3], [S4], [S24], [S9], [S20], [S23] |
| [Agent host][industry.agent-host] | `unknown` | Hosts OpenAI's own Codex in the desktop app; the desktop app imports setups from Claude Code, Claude Cowork or Cursor but is not shown running them | [S2], [S26] |
| [Channel][industry.channel] | `partial` | Scheduled tasks can run on "a supported Gmail, Slack, or GitHub event", on web and mobile; a dot can be told "a supported event that should trigger work"; Slack follow-ups in a thread continue the task | [S16], [S8], [S23] |
| [Cross-session messaging][industry.cross-session-messaging] | `partial` | Only from a directing session: Voice "can start separate tasks..., check existing tasks, and send follow-up instructions"; a dot can "create separate, visible threads and send follow-up instructions" | [S20], [S8] |
| [ACP][spec.acp] | `unknown` | Not found in the docs or their combined export | [S26] |
| [AHP][spec.ahp] | `unknown` | Not found in the docs or their combined export | [S26] |
| [A2A][spec.a2a] | `unknown` | Not found in the docs or their combined export | [S26] |
| [Bot][system.bot] | `partial` | Dots: "an always-on agent", with a handle such as `@yourname-dot`, "its own saved notes", its own cloud computer, waking itself or on schedules and events, reached in ChatGPT, Slack, texts and calls; "rolling out gradually to eligible Pro and Business Premium accounts", an admin preview on Enterprise | [S7], [S8], [S9] |

## State of play

- **2026-11-20:** ChatGPT Space "is rolling out globally to Plus users", replacing Library. ([S4])
- **2026-11-19:** A new mobile experience gives a dot "its own tab", starting with Pro users where dots are available. ([S4])
- **2026-11-18:** ChatGPT for iOS 1.2026.314 adds a project picker for Cloud or a paired computer, and saves side chats on paired computers. ([S5])
- **2026-11-17:** GPT-6.2 Astra and Sol, "available in preview in Work and Codex desktop". ([S4])
- **2026-11-10:** Advanced and Standard voice to retire from ChatGPT Voice on 11 December 2026. ([S4])
- **2026-10-28:** Texting a dot through iMessage or RCS, in beta for Pro users in the U.S. ([S4], [S9])
- **2026-10-16:** GPT-6 Pro gains multiple agents working on parts of a task in parallel, for eligible Pro users. ([S4])
- **2026-09-29:** Dots launch, "always-on agents in ChatGPT" powered by GPT-6 Astra, for eligible Pro and Business Premium users. ([S4])
- **2026-08-14:** The Linux desktop app in public preview. ([S4])
- **2026-07-09:** ChatGPT Work launches, "an agent for longer, more involved tasks"; the Plugin Directory replaces the App Directory; Atlas to stop working on 9 August 2026. ([S4])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | OpenAI, Use ChatGPT | 2026-11-22 |
| [S2] | OpenAI, ChatGPT desktop app | 2026-11-22 |
| [S3] | OpenAI, Download ChatGPT | 2026-11-22 |
| [S4] | OpenAI, ChatGPT release notes (Help Center) | 2026-11-22 |
| [S5] | OpenAI, ChatGPT and Codex changelog | 2026-11-22 |
| [S6] | OpenAI, Get started with ChatGPT Work | 2026-11-22 |
| [S7] | OpenAI, Meet dots | 2026-11-22 |
| [S8] | OpenAI, Dots: tasks and memory | 2026-11-22 |
| [S9] | OpenAI, Message your dot | 2026-11-22 |
| [S10] | OpenAI, Subagents | 2026-11-22 |
| [S11] | OpenAI, Build skills | 2026-11-22 |
| [S12] | OpenAI, Skills and plugins | 2026-11-22 |
| [S13] | OpenAI, Model Context Protocol | 2026-11-22 |
| [S14] | OpenAI, Sandbox | 2026-11-22 |
| [S15] | OpenAI, ChatGPT Work cloud security | 2026-11-22 |
| [S16] | OpenAI, Scheduled tasks | 2026-11-22 |
| [S17] | OpenAI, Projects and chats | 2026-11-22 |
| [S18] | OpenAI, Personalize ChatGPT | 2026-11-22 |
| [S19] | OpenAI, Custom instructions with AGENTS.md | 2026-11-22 |
| [S20] | OpenAI, ChatGPT Voice | 2026-11-22 |
| [S21] | OpenAI, Pricing | 2026-11-22 |
| [S22] | OpenAI, Use ChatGPT Work and Codex with Amazon Bedrock | 2026-11-22 |
| [S23] | OpenAI, Use ChatGPT in Slack | 2026-11-22 |
| [S24] | OpenAI, ChatGPT iOS and Android app FAQ (Help Center) | 2026-11-22 |
| [S25] | OpenAI, Work with agents in Space | 2026-11-22 |
| [S26] | OpenAI, combined docs export (`llms-full.txt`), searched for ACP, A2A, AHP and other makers' harnesses | 2026-11-22 |
| [S27] | OpenAI, Moving your custom GPT workflows to plugins | 2026-11-22 |

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
[openai.chatgpt]: ../vendors/openai/openai.chatgpt.md
[S1]: https://learn.chatgpt.com/docs/use-chatgpt
[S2]: https://learn.chatgpt.com/docs/app
[S3]: https://chatgpt.com/download
[S4]: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
[S5]: https://learn.chatgpt.com/docs/changelog
[S6]: https://learn.chatgpt.com/docs/get-started-with-work
[S7]: https://learn.chatgpt.com/docs/dots
[S8]: https://learn.chatgpt.com/docs/dots/tasks-and-memory
[S9]: https://learn.chatgpt.com/docs/dots/channels
[S10]: https://learn.chatgpt.com/docs/agent-configuration/subagents
[S11]: https://learn.chatgpt.com/docs/build-skills
[S12]: https://learn.chatgpt.com/docs/skills-and-plugins
[S13]: https://learn.chatgpt.com/docs/extend/mcp
[S14]: https://learn.chatgpt.com/docs/sandboxing
[S15]: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
[S16]: https://learn.chatgpt.com/docs/automations
[S17]: https://learn.chatgpt.com/docs/projects
[S18]: https://learn.chatgpt.com/docs/personalize
[S19]: https://learn.chatgpt.com/docs/agent-configuration/agents-md
[S20]: https://learn.chatgpt.com/docs/features/voice
[S21]: https://learn.chatgpt.com/docs/pricing
[S22]: https://learn.chatgpt.com/docs/amazon-bedrock
[S23]: https://learn.chatgpt.com/docs/third-party/slack
[S24]: https://help.openai.com/en/articles/7885016-chatgpt-ios-app-faq
[S25]: https://learn.chatgpt.com/docs/space/agents
[S26]: https://learn.chatgpt.com/docs/llms-full.txt
[S27]: https://learn.chatgpt.com/docs/migrate-custom-gpts
