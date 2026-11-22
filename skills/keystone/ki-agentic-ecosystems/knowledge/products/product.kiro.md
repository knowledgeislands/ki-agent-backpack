---
id: product.kiro
title: Kiro (Amazon Web Services)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Amazon Web Services
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.agent-skills:
    predicate: dcterms:conformsTo
  spec.acp:
    predicate: dcterms:conformsTo
---

# Kiro (Amazon Web Services)

Kiro helps developers build software "from prototype to production" with an agent that plans, implements and opens pull requests, from specs and steering they write once ([S1]). "Kiro is built and operated by a small, opinionated team within AWS" ([S2]). It is "an agentic AI engineering system available via an IDE, CLI, web interface, mobile app, and Kiro Crew", with "one unified agent harness" behind the IDE, the Kiro for VS Code extension, the CLI, the web and mobile ([S30], [S1]); Kiro Crew, a persistent personal agent with its own installer, runs on the Kiro CLI ([S20], [S25]). The IDE and CLI are licensed as "AWS Content" under the AWS Customer Agreement, sold from a free tier to paid plans, while Kiro Crew is open source under Apache 2.0 ([S3], [S4], [S25]). The latest releases seen are IDE 1.5.11 of 20 November 2026, CLI 3.5.0 of 17 November and Crew 0.13.0 of 19 November ([S5], [S26]). It is an [agent harness][industry.agent-harness] and a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Auto, "Kiro's model router"; Anthropic's Claude, OpenAI's GPT-5.6, xAI's Grok, Kimi, MiniMax, GLM, DeepSeek and Qwen; local models unknown | [S6] |
| [Session][industry.session] | `yes` | The CLI "automatically saves all chat sessions on every conversation turn" and resumes them; cloud sessions can be resumed and steered from every surface | [S7], [S8] |
| [Subagent][industry.subagent] | `yes` | "Sub-agents let you hand off focused tasks to agents that run in their own isolated context", automatically or by name, in parallel, on every surface | [S9] |
| [Agent team][industry.agent-team] | `partial` | Workflows give work "to a team of agents with a plan", each step in its own session; Crew's conductor delegates to workers that report back; no peer messaging described | [S10], [S21] |
| [Skill][industry.skill] | `yes` | "Skills are portable instruction packages that follow the open Agent Skills standard", in `.kiro/skills/` and `~/.kiro/skills/` | [S11] |
| [Instruction file][industry.instruction-file] | `yes` | Steering in `.kiro/steering/` and `~/.kiro/steering/`; `AGENTS.md` at the root, in subdirectories and globally; `CLAUDE.md` not mentioned | [S12] |
| [Plugin][industry.plugin] | `yes` | Powers package skills and MCP configuration, "follow the Agent Plugins specification", and install from a marketplace or GitHub | [S13] |
| [MCP][spec.mcp] | `yes` | Local stdio and remote HTTP or SSE servers on every surface, with OAuth sign-in | [S14] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox`: an off-by-default local command sandbox, Seatbelt on macOS and Bubblewrap on Linux; `vendor-sandbox`: cloud sessions in "a managed cloud sandbox" | [S15], [S8], [S27] |
| [Client][industry.client] | `yes` | IDE, VS Code, terminal, web, Android with iOS in early access, and Crew's desktop app, web dashboard and chat apps; JetBrains and Zed over ACP | [S1], [S16], [S18], [S19], [S23] |
| [Agent host][industry.agent-host] | `partial` | Crew runs other harnesses as backends, Claude Code, Codex, OpenCode, goose, Pi and others; "Backends other than Kiro CLI are marked Experimental" | [S22] |
| [Channel][industry.channel] | `unknown` | Crew's inbound webhooks, a feature preview, "trigger Crew agent sessions", starting work rather than reaching a running one | [S24] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found; Crew workers report to the bot's conductor | [S21] |
| [ACP][spec.acp] | `yes` | As agent: `kiro-cli acp`; Kiro's own IDE, CLI, Web and Mobile "use it to reach the same unified agent harness" | [S16], [S17] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `yes` | Crew: "A Kiro bot is a persistent agent that coordinates work toward a goal", with its own thread, memory, workspace, schedules and workers; outside Crew, Memory carries context between sessions and Kiro Web runs scheduled tasks | [S21], [S24], [S28], [S29] |

## State of play

- **2026-11-20:** IDE 1.5.11 connects to Linux machines over SSH, opens Dev Containers and opens cloud sessions in the IDE. ([S5])
- **2026-11-19:** Kiro for VS Code, version 1.5.0, from the Visual Studio Marketplace or Open VSX, included in every plan. ([S5])
- **2026-11-19:** Crew 0.13.0 turns on conductor mode in every standard build, and bots choose their own harness. ([S5], [S26])
- **2026-11-17:** CLI 3.5.0 runs cloud sessions in a customer's VPC; Kiro Mobile reaches Europe (Frankfurt). ([S5])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Kiro, Docs | 2026-11-22 |
| [S2] | Kiro, About | 2026-11-22 |
| [S3] | Kiro, License | 2026-11-22 |
| [S4] | Kiro, Pricing | 2026-11-22 |
| [S5] | Kiro, Changelog | 2026-11-22 |
| [S6] | Kiro, Available models | 2026-11-22 |
| [S7] | Kiro, CLI: Session management | 2026-11-22 |
| [S8] | Kiro, Cloud sessions | 2026-11-22 |
| [S9] | Kiro, Invoking as sub-agents | 2026-11-22 |
| [S10] | Kiro, Workflows | 2026-11-22 |
| [S11] | Kiro, Agent Skills | 2026-11-22 |
| [S12] | Kiro, Steering | 2026-11-22 |
| [S13] | Kiro, Powers | 2026-11-22 |
| [S14] | Kiro, MCP | 2026-11-22 |
| [S15] | Kiro, Local command sandbox | 2026-11-22 |
| [S16] | Kiro, Agent Client Protocol (ACP) | 2026-11-22 |
| [S17] | Kiro, CLI: ACP | 2026-11-22 |
| [S18] | Kiro, Kiro extensions | 2026-11-22 |
| [S19] | Kiro, Mobile | 2026-11-22 |
| [S20] | Kiro, Crew: Quick start | 2026-11-22 |
| [S21] | Kiro, Crew: How bots work | 2026-11-22 |
| [S22] | Kiro, Crew: Agent backends | 2026-11-22 |
| [S23] | Kiro, Crew: Interfaces | 2026-11-22 |
| [S24] | Kiro, Crew: Scheduling | 2026-11-22 |
| [S25] | Kiro, Kiro Crew page and FAQ | 2026-11-22 |
| [S26] | Kiro, kirodotdev/KiroCrew releases | 2026-11-22 |
| [S27] | Kiro, Web: Sandbox | 2026-11-22 |
| [S28] | Kiro, Memory | 2026-11-22 |
| [S29] | Kiro, Web: Schedule | 2026-11-22 |
| [S30] | Kiro, FAQ | 2026-11-22 |

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
[S1]: https://kiro.dev/docs/
[S2]: https://kiro.dev/about/
[S3]: https://kiro.dev/license/
[S4]: https://kiro.dev/pricing/
[S5]: https://kiro.dev/changelog/
[S6]: https://kiro.dev/docs/models/available-models/
[S7]: https://kiro.dev/docs/cli/chat/session-management/
[S8]: https://kiro.dev/docs/cloud-sessions/
[S9]: https://kiro.dev/docs/custom-agents/subagents/
[S10]: https://kiro.dev/docs/workflows/
[S11]: https://kiro.dev/docs/skills/
[S12]: https://kiro.dev/docs/steering/
[S13]: https://kiro.dev/docs/powers/
[S14]: https://kiro.dev/docs/mcp/
[S15]: https://kiro.dev/docs/sandbox/
[S16]: https://kiro.dev/docs/acp/
[S17]: https://kiro.dev/docs/cli/acp/
[S18]: https://kiro.dev/docs/extensions/
[S19]: https://kiro.dev/mobile/
[S20]: https://kiro.dev/docs/crew/
[S21]: https://kiro.dev/docs/crew/bots/how-bots-work/
[S22]: https://kiro.dev/docs/crew/features/agent-backends/
[S23]: https://kiro.dev/docs/crew/interfaces/
[S24]: https://kiro.dev/docs/crew/features/cron/
[S25]: https://kiro.dev/crew/
[S26]: https://github.com/kirodotdev/KiroCrew/releases
[S27]: https://kiro.dev/docs/web/sandbox/
[S28]: https://kiro.dev/docs/memory/
[S29]: https://kiro.dev/docs/web/automations/
[S30]: https://kiro.dev/faq/
