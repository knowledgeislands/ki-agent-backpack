---
id: product.github-copilot-cli
title: GitHub Copilot CLI (GitHub)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: GitHub
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
  microsoft.copilot:
    predicate: skos:related
---

# GitHub Copilot CLI (GitHub)

Copilot CLI lets a developer "use Copilot directly from your terminal", giving "quick access to a powerful AI agent, without having to leave your terminal", interactively or programmatically ([S1]). GitHub makes it, as `github/copilot-cli`, which "brings the power of Copilot coding agent directly to your terminal" ([S2]). It runs on Linux, macOS and Windows, can be followed and steered "from any Copilot client", and works as an agent inside editors over ACP in public preview ([S1], [S8]). It is proprietary, under the "GitHub Copilot CLI License", and needs "an active Copilot subscription" ([S5], [S2]). It became generally available on 25 February 2026 ([S14]). The latest stable release seen is 1.0.114, of 18 November 2026 ([S4]). It is an [agent harness][industry.agent-harness] and a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills]. Its maker's own words for it are on the vendor card [Copilot (Microsoft)][microsoft.copilot].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | OpenAI, Anthropic, Google and Microsoft models through Copilot, by `/model` or `--model`; or "an OpenAI-compatible endpoint, Azure OpenAI, or Anthropic, including locally running models such as Ollama"; Microsoft 365 Copilot models in public preview | [S1], [S12] |
| [Session][industry.session] | `yes` | `--resume` or `/resume` to "select and resume an interactive CLI session", `copilot --continue` for the last one; cloud sessions brought to the local environment | [S6] |
| [Subagent][industry.subagent] | `yes` | Built-in Explore, Task, General purpose, Code review, Research and Rubber duck agents; "Multiple agents can run in parallel"; with `/fleet` the main agent acts "as orchestrator" and "Each subagent has its own context window" | [S6], [S14], [S13] |
| [Agent team][industry.agent-team] | `unknown` | `/fleet` is described as an orchestrator "Reviewing and combining the results"; peer messaging not mentioned | [S13] |
| [Skill][industry.skill] | `yes` | Project skills from `.github/skills`, `.claude/skills`, `.agents/skills`, `~/.copilot/skills` or `~/.agents/skills`; "The Agent Skills specification is an open standard" | [S9] |
| [Instruction file][industry.instruction-file] | `yes` | `.github/copilot-instructions.md`, `.github/instructions/**/*.instructions.md`, `AGENTS.md`, `CLAUDE.md` and `GEMINI.md` from the repository root to the working folder, and user files in `~/.copilot` | [S11] |
| [Plugin][industry.plugin] | `yes` | `plugin.json` bundles of custom agents, skills, hooks, extensions, MCP and LSP configurations; "Browse and install plugins from a registered marketplace", awesome-copilot built in, or `/plugin install owner/repo` | [S10], [S14] |
| [MCP][spec.mcp] | `yes` | "Ships with GitHub's MCP server by default and supports custom MCP servers"; `copilot mcp add --transport http`, config in `~/.copilot/mcp-config.json` | [S2], [S6] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox`: Microsoft eXecution Container, Seatbelt on macOS, bubblewrap on Linux, recent Windows 11, "turned off by default", `/sandbox enable`; `vendor-sandbox`: `--cloud` runs the session in "a fully isolated, ephemeral Linux environment hosted by GitHub" | [S7], [S1] |
| [Client][industry.client] | `yes` | Terminal; "start work in Copilot CLI, steer it from GitHub Mobile while away, then pick it back up in Copilot CLI or another client"; ACP editors in preview | [S1], [S8] |
| [Agent host][industry.agent-host] | `unknown` | The pages read do not say it runs other makers' harnesses | [S1] |
| [Channel][industry.channel] | `unknown` | Not found; steering from other Copilot clients is a client, not an outside event | [S1] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not mentioned | [S6] |
| [ACP][spec.acp] | `partial` | As agent: `copilot --acp` starts "the CLI's ACP server", over stdio or TCP; "ACP support in GitHub Copilot CLI is in public preview and subject to change" | [S8] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not mentioned | [S1] |
| [Bot][system.bot] | `unknown` | Not found; memory "remembers conventions, patterns, and preferences it learns about your codebase across sessions". Scheduling: `/every` "schedules a prompt to run repeatedly" and `/after` once, within a session | [S14], [S6] |

## State of play

- **2026-11-20:** Pre-release 1.0.115-2 adds Gemini 4 Hydrogen, GPT-6.2 Astra and MAI-Code-2-Flash models, sandbox policy options and Browser Use 0.2.1; pre-releases to 1.0.115-6 followed on 21 November; the releases page gives no year. ([S3])
- **2026-11-18:** Version 1.0.114, the latest stable release: "Fixes and changes". ([S4])
- **2026-02-25:** Generally available "for all Copilot subscribers", on Copilot Pro, Pro+, Business and Enterprise, with plugins, skills, built-in agents, memory and `&` delegation to the cloud agent. ([S14])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | GitHub Docs, About GitHub Copilot CLI | 2026-11-22 |
| [S2] | GitHub, github/copilot-cli README | 2026-11-22 |
| [S3] | GitHub, copilot-cli releases | 2026-11-22 |
| [S4] | GitHub, copilot-cli v1.0.114 release | 2026-11-22 |
| [S5] | GitHub, GitHub Copilot CLI License | 2026-11-22 |
| [S6] | GitHub Docs, Using GitHub Copilot CLI | 2026-11-22 |
| [S7] | GitHub Docs, About cloud and local sandboxes | 2026-11-22 |
| [S8] | GitHub Docs, Copilot CLI ACP server | 2026-11-22 |
| [S9] | GitHub Docs, About agent skills | 2026-11-22 |
| [S10] | GitHub Docs, Plugins for GitHub Copilot | 2026-11-22 |
| [S11] | GitHub Docs, Adding custom instructions for GitHub Copilot CLI | 2026-11-22 |
| [S12] | GitHub Docs, Supported AI models | 2026-11-22 |
| [S13] | GitHub Docs, Delegating and parallelizing work with agents | 2026-11-22 |
| [S14] | GitHub changelog, GitHub Copilot CLI is now generally available, 25 February 2026 | 2026-11-22 |

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
[S1]: https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli
[S2]: https://github.com/github/copilot-cli
[S3]: https://github.com/github/copilot-cli/releases
[S4]: https://github.com/github/copilot-cli/releases/tag/v1.0.114
[S5]: https://github.com/github/copilot-cli/blob/main/LICENSE.md
[S6]: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview
[S7]: https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes
[S8]: https://docs.github.com/en/copilot/reference/copilot-cli-reference/acp-server
[S9]: https://docs.github.com/en/copilot/concepts/agents/about-agent-skills
[S10]: https://docs.github.com/en/copilot/concepts/customizations/plugins
[S11]: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
[S12]: https://docs.github.com/en/copilot/reference/ai-models/supported-models
[S13]: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet
[S14]: https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available/
