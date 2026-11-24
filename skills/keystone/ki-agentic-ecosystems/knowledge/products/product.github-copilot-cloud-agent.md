---
id: product.github-copilot-cloud-agent
title: GitHub Copilot cloud agent (GitHub)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: GitHub
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.agent-skills:
    predicate: dcterms:conformsTo
  microsoft.copilot:
    predicate: skos:related
---

# GitHub Copilot cloud agent (GitHub)

Copilot's cloud agent lets Copilot "answer questions about your repositories, plan and make changes, review pull requests, and automate repository tasks" without the developer's machine, an [agent][industry.agent] in GitHub's cloud ([S1]). GitHub makes it; once called Copilot coding agent, it is now part of "Copilot in the cloud", whose sessions run by default in a "secure cloud sandbox", "one session, every surface" ([S1], [S2]). It runs in GitHub's sandbox, on GitHub Actions or on a custom environment, and tasks start from github.com, GitHub Mobile, Copilot CLI, the Copilot app, VS Code, Slack or Microsoft Teams ([S1], [S2]). It is proprietary, on paid Copilot plans ([S2]). GitHub publishes no version numbers; the new experience became generally available from 28 October 2026 ([S2]). Its skills follow the [Agent Skills specification][spec.agent-skills]. Its maker's own words for it are on the vendor card [Copilot (Microsoft)][microsoft.copilot].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Several makers' models: OpenAI GPT, Anthropic Claude, Google Gemini and Microsoft MAI Code 2, with Auto selection; own keys and local models not mentioned | [S9] |
| [Session][industry.session] | `yes` | A snapshot is saved at shutdown, to resume "from any surface"; sandbox session data kept for the life of the account, Actions-based sessions 28 days | [S1], [S2] |
| [Subagent][industry.subagent] | `partial` | The `agent` tool alias "Allows a different custom agent to be invoked"; no other subagent mechanism documented for the cloud | [S8] |
| [Agent team][industry.agent-team] | `unknown` | No source found | None |
| [Skill][industry.skill] | `yes` | `SKILL.md` folders in `.github/skills`, `.claude/skills` or `.agents/skills`; `gh skill publish` validates against the Agent Skills specification | [S6] |
| [Instruction file][industry.instruction-file] | `yes` | `.github/copilot-instructions.md`, `.github/instructions/**/*.instructions.md`, "AGENTS.md, CLAUDE.md or GEMINI.md", and organisation instructions | [S3] |
| [Plugin][industry.plugin] | `yes` | Plugins configured through repository settings, bundling agents, skills, hooks, MCP and LSP configs | [S5] |
| [MCP][spec.mcp] | `yes` | Repository servers, GitHub-verified connectors and personal servers; GitHub and Playwright servers on by default; tools only | [S7] |
| [Execution environment][industry.environment] | `yes` | `vendor-sandbox` by default, with no one-hour cap; or a GitHub Actions runner, 59 minutes at most, or the user's own machine through `--environment-host` | [S1], [S2] |
| [Client][industry.client] | `yes` | github.com, GitHub Mobile, the Copilot app, VS Code and Copilot CLI | [S1], [S2], [S3] |
| [Agent host][industry.agent-host] | `partial` | Anthropic's Claude and OpenAI's Codex coding agents run alongside Copilot, "currently in public preview" | [S4] |
| [Channel][industry.channel] | `unknown` | `@GitHub` in Slack or Teams, an agent mention in a pull request, or an automation starts a session; pushing events into a running session not found | [S2], [S4], [S10] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | No source found | None |
| [ACP][spec.acp] | `unknown` | No source found for the cloud agent | None |
| [AHP][spec.ahp] | `unknown` | No source found | None |
| [A2A][spec.a2a] | `unknown` | No source found | None |
| [Bot][system.bot] | `unknown` | No source found. Scheduling: automations run hourly, daily or weekly, or on issue and pull-request events, one repository each | [S10] |

## State of play

- **2026-11-16:** Weekly release notes: the Copilot app continues cloud and Codespace sessions on the phone; cloud sessions are not available on GitHub Enterprise Server. ([S11])
- **2026-10-28:** Copilot in the cloud generally available on paid plans, the sandbox the default environment; its use to be billed from 23 November 2026 against a shared Actions entitlement. ([S2])
- **2026-06-02:** Cloud agent automations launched, on a schedule or on repository events. ([S10])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | GitHub Docs, About Copilot cloud agent | 2026-11-22 |
| [S2] | GitHub changelog, Work from anywhere with a new, connected Copilot cloud experience | 2026-11-22 |
| [S3] | GitHub Docs, Support for different types of custom instructions | 2026-11-22 |
| [S4] | GitHub Docs, Third-party coding agents | 2026-11-22 |
| [S5] | GitHub Docs, Plugins for GitHub Copilot | 2026-11-22 |
| [S6] | GitHub Docs, Adding agent skills for GitHub Copilot | 2026-11-22 |
| [S7] | GitHub Docs, MCP and cloud agent | 2026-11-22 |
| [S8] | GitHub Docs, Custom agents configuration | 2026-11-22 |
| [S9] | GitHub Docs, Supported AI models | 2026-11-22 |
| [S10] | GitHub changelog, Schedule and automate tasks with Copilot cloud agent | 2026-11-22 |
| [S11] | GitHub changelog, Copilot weekly releases, November 9 | 2026-11-22 |

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
[microsoft.copilot]: ../vendors/microsoft/microsoft.copilot.md
[S1]: https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent
[S2]: https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/
[S3]: https://docs.github.com/en/copilot/reference/custom-instructions-support
[S4]: https://docs.github.com/en/copilot/concepts/agents/about-third-party-coding-agents
[S5]: https://docs.github.com/en/copilot/concepts/customizations/plugins
[S6]: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills
[S7]: https://docs.github.com/en/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent
[S8]: https://docs.github.com/en/copilot/reference/custom-agents-configuration
[S9]: https://docs.github.com/en/copilot/reference/ai-models/supported-models
[S10]: https://github.blog/changelog/2026-06-02-schedule-and-automate-tasks-with-copilot-cloud-agent/
[S11]: https://github.blog/changelog/2026-11-16-github-copilot-weekly-releases-november-9/
