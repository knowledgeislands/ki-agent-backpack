---
id: product.autoclaw
title: AutoClaw (Z.ai)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Z.ai
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

# AutoClaw (Z.ai)

AutoClaw lets people hand everyday office, research, design, coding and legal work to agents on their own computer and direct them from a chat app: "AutoClaw is a general agent developed by Z.ai. It can work across files, browsers, and tools to deliver decision-ready reports, tested software, and ready-to-use designs" ([S1]). Z.ai makes it; the Chinese site's legal owner is Beijing Zhipu Huazhang Technology (北京智谱华章科技股份有限公司), whose Chinese name for it is 澳龙 ([S17], [S16]). It is "Z.ai's desktop AI Agent for work", for macOS (Apple silicon and Intel), Windows 10 and later and Linux (x64 and Arm64), with iOS and Android apps, and its agents are reached from Telegram, WhatsApp, Discord, Slack and Lark ([S2], [S3], [S1], [S12]). It runs on the OpenClaw kernel, upgraded "to version 6.8" in July 2026 ([S15]). No licence is stated on the pages read, only "All rights reserved"; it is sold on credits, with tokens offered to new users and the GLM Coding Plan usable in it ([S1], [S5]). The latest release seen is v2.3.0, of 29 October 2026 ([S14]). It is an [agent harness][industry.agent-harness] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Five built-in platform models, GLM-5.3, GLM-5.3-Flash, GLM-5.3-FlashX-Legal, Auto-Fast and Auto; the Z.ai Coding Plan and "other custom models" by API key; "GLM series · DeepSeek series · model switching" | [S5], [S1] |
| [Session][industry.session] | `yes` | "AutoClaw saves your conversations and running tasks"; a reopened task lets the agent "continue in the original context"; interrupted tasks resume where they stopped from v2.1.0 | [S4], [S14] |
| [Subagent][industry.subagent] | `yes` | "Standard mode is already an agent that can search for information, use tools, and dispatch sub-agents"; Agent cluster mode launches "several roles that work in parallel" | [S8] |
| [Agent team][industry.agent-team] | `unknown` | Agent cluster mode "behaves like a small team", a main agent planning, roles in parallel and a reviewer; no roles messaging each other described | [S8] |
| [Skill][industry.skill] | `partial` | "50+ preset Skills", installed from a library or created "through chat or by adding skill files", called with `/`; the pages read do not say they are `SKILL.md` folders or name the specification | [S6], [S2] |
| [Instruction file][industry.instruction-file] | `unknown` | Not found; each Agent has its own persona and prompt | [S9] |
| [Plugin][industry.plugin] | `unknown` | Not found; connectors are built-in integrations | [S7] |
| [MCP][spec.mcp] | `yes` | "Open Settings → Tools & connections, go to Extension tools (MCP), and click Add tool", with a server address and authentication; connectors beside it | [S7] |
| [Execution environment][industry.environment] | `unknown` | Tasks run on the user's own computer, "The agent runs locally", with approval cards for high-risk operations; no isolation described | [S1], [S12], [S13] |
| [Client][industry.client] | `yes` | Desktop app on macOS, Windows and Linux; iOS and Android apps; chat with an Agent from IM while "Tasks still run on your computer" | [S3], [S1], [S12] |
| [Agent host][industry.agent-host] | `unknown` | Not found | None |
| [Channel][industry.channel] | `yes` | IM bots on Telegram, WhatsApp, Discord, Slack and Lark, and in China Feishu, WeCom, WeChat and DingTalk, each bound to an Agent; "progress and results sync back to the channel you used" | [S12], [S13], [S14] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found | None |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `yes` | Named Agents, "Each Agent has its own persona, model, and working style", answering IM bots; memory that stays "in effect across conversations and restarts", kept per account, not per Agent. Scheduling: scheduled tasks for one-time or recurring work, sending results to a chat or IM channel | [S9], [S10], [S11] |

## State of play

- **2026-10-29:** v2.3.0: DingTalk and WeCom connectors, and a memory switch. ([S14])
- **2026-10-13:** v2.1.0: scheduled tasks "按设定的时间自动执行任务" (run tasks automatically at set times), WeCom and DingTalk access, a second Feishu bot, and interrupted tasks resuming where they stopped. ([S14])
- **2026-07-06:** v1.11.0: "Upgraded the OpenClaw kernel to version 6.8." ([S15])
- **2026-06-03:** v1.5.1: a cloud instance, 云龙虾 ("cloud lobster"), launched, free to create while dormant. ([S14])
- **2026-03-10:** Zhipu launches AutoClaw (澳龙) as a one-click local install of OpenClaw with 50+ preset skills, reported by IT之家 (IT Home). ([S16])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Z.ai, AutoClaw home page (English) | 2026-11-22 |
| [S2] | Z.ai, AutoClaw docs: What is AutoClaw? | 2026-11-22 |
| [S3] | Z.ai, AutoClaw docs: Download and install | 2026-11-22 |
| [S4] | Z.ai, AutoClaw docs: Task management | 2026-11-22 |
| [S5] | Z.ai, AutoClaw docs: Model settings | 2026-11-22 |
| [S6] | Z.ai, AutoClaw docs: Skill | 2026-11-22 |
| [S7] | Z.ai, AutoClaw docs: MCP and connectors | 2026-11-22 |
| [S8] | Z.ai, AutoClaw docs: Agent cluster mode | 2026-11-22 |
| [S9] | Z.ai, AutoClaw docs: Agents | 2026-11-22 |
| [S10] | Z.ai, AutoClaw docs: Memory | 2026-11-22 |
| [S11] | Z.ai, AutoClaw docs: Scheduled tasks | 2026-11-22 |
| [S12] | Z.ai, AutoClaw docs: Remote control | 2026-11-22 |
| [S13] | Z.ai, AutoClaw docs: FAQ | 2026-11-22 |
| [S14] | Z.ai, AutoClaw 更新日志 (changelog, Chinese) | 2026-11-22 |
| [S15] | Z.ai, AutoClaw changelog (English) | 2026-11-22 |
| [S16] | IT之家 (IT Home), 智谱“澳龙”AutoClaw 正式上线, 10 March 2026 | 2026-11-22 |
| [S17] | Z.ai, AutoClaw home page (Chinese) | 2026-11-22 |

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
[S1]: https://autoclaw.z.ai/en/
[S2]: https://autoclaw.z.ai/en/docs/getting-started/what-is-autoclaw/
[S3]: https://autoclaw.z.ai/en/docs/getting-started/install/
[S4]: https://autoclaw.z.ai/en/docs/getting-started/task-management/
[S5]: https://autoclaw.z.ai/en/docs/advanced/models/
[S6]: https://autoclaw.z.ai/en/docs/advanced/skill/
[S7]: https://autoclaw.z.ai/en/docs/advanced/mcp-connectors/
[S8]: https://autoclaw.z.ai/en/docs/advanced/cluster-mode/
[S9]: https://autoclaw.z.ai/en/docs/advanced/agents/
[S10]: https://autoclaw.z.ai/en/docs/advanced/memory/
[S11]: https://autoclaw.z.ai/en/docs/advanced/scheduled-tasks/
[S12]: https://autoclaw.z.ai/en/docs/advanced/remote-control/
[S13]: https://autoclaw.z.ai/en/docs/faq/common-questions/
[S14]: https://autoclaw.z.ai/cn/changelog/
[S15]: https://autoclaw.z.ai/en/changelog/
[S16]: https://www.ithome.com/0/927/423.htm
[S17]: https://autoclaw.z.ai/cn/
