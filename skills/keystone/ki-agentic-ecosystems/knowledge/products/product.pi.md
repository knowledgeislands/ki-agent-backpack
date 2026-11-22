---
id: product.pi
title: Pi (Earendil)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Earendil
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
---

# Pi (Earendil)

Pi lets a developer shape a coding agent to their own way of working: "Pi is a minimal, extensible agent harness that you can make your own", to be customised "with extensions, skills, prompt templates, and themes" and shared as Pi packages ([S2]). Earendil makes it: pi.dev credits "Earendil Inc. & Contributors", earendil.com says "Earendil crafts tools to harness AI with Pi and Lefos", and the repository sits in the `earendil-works` GitHub organisation ([S1], [S3], [S2]). It runs as the `pi` command on macOS, Linux and Windows, interactively in a terminal interface, in print or JSON mode for scripts, over RPC and through a TypeScript SDK ([S2], [S15]). It is MIT open source, the licence held by Mario Zechner; models come from a provider subscription or API key the user connects ([S1], [S21], [S2]). The latest release seen is v1.6.0, of 20 November 2026 ([S4]). It is an [agent harness][industry.agent-harness] and a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Several providers, among them Anthropic, OpenAI, Google Gemini, DeepSeek, Mistral, GitHub Copilot and OpenRouter, by `/login` or API key; local GGUF models through the llama.cpp router | [S10], [S11], [S4] |
| [Session][industry.session] | `yes` | "Pi saves sessions automatically"; `--continue`, `--resume` and `/resume` reopen them, stored as trees in JSONL files with `/tree`, `/fork` and `/clone` | [S9], [S15] |
| [Subagent][industry.subagent] | `partial` | Pi "skips features like sub-agents and plan mode"; its subagent example extension runs each subagent "in a separate `pi` process", or a package adds them | [S2], [S17] |
| [Agent team][industry.agent-team] | `unknown` | pi.dev says "Spawn Pi instances via tmux"; nothing read describes sessions working as a team | [S1] |
| [Skill][industry.skill] | `yes` | `SKILL.md` folders in user and project skills folders and `.agents/skills`, loaded on demand; "Pi implements the Agent Skills specification" | [S6] |
| [Instruction file][industry.instruction-file] | `yes` | `AGENTS.md`, `AGENTS.override.md` or `CLAUDE.md` from the agent folder, the working folder and its parents; `SYSTEM.md` and `APPEND_SYSTEM.md` replace or extend the system prompt | [S7], [S1] |
| [Plugin][industry.plugin] | `yes` | Pi packages "install and distribute extensions, skills, prompt templates, and themes as one unit", from npm, Git or a local path | [S12] |
| [MCP][spec.mcp] | `yes` | "Pi connects to Model Context Protocol servers over stdio or streamable HTTP", with OAuth; "MCP is built in" | [S8], [S1], [S5] |
| [Execution environment][industry.environment] | `partial` | `none` by default: "Pi does not include a built-in permission system"; its docs give Docker, Docker Sandboxes, OpenShell and the Gondolin micro-VM extension for `container` isolation | [S2], [S14] |
| [Client][industry.client] | `yes` | Terminal interface, print and JSON modes, RPC "for IDEs, and custom user interfaces", and the SDK; sessions exported to HTML or shared as a gist; no desktop, web or mobile app found | [S1], [S15], [S16] |
| [Agent host][industry.agent-host] | `unknown` | Not found; Pi is the harness others host, as pi-ahp does | [S19] |
| [Channel][industry.channel] | `partial` | Only through extensions: "External integrations (file watchers, webhooks, CI triggers)" and `pi.sendUserMessage()`; Earendil's separate pi-chat extension "bridges Discord and Telegram channels to a sandboxed pi session" | [S13], [S18] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found | None |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `partial` | Only through pi-ahp, a separate third-party host by Qusic: "an Agent Host Protocol host for the pi coding agent", AHP 1.0.0 and 0.9.0, "under active development" | [S19], [S20] |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `partial` | Only through the separate pi-chat extension: each connected Discord or Telegram channel gets a persistent workspace and "Durable memory"; pi-ahp says "pi has no scheduler or automation-run model" | [S18], [S19] |

## State of play

- **2026-11-20:** Version 1.6.0: GPT-6.2 Astra and GPT-6.2 Sol models, a breaking change to extension components, and fixes to MCP tools dropped on resume. ([S4])
- **2026-11-10:** pi-ahp, the third-party AHP host for Pi, reaches v0.6.3. ([S20])
- **2026-10-01:** Version 1.0.0: the terminal interface runs fullscreen by default, codemode is leaner and MCP OAuth is hardened; pi.dev says "We've shipped Pi 1.0 with Pi Durable". ([S5], [S1])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Earendil, Pi home (pi.dev) | 2026-11-22 |
| [S2] | Earendil, earendil-works/pi repository README | 2026-11-22 |
| [S3] | Earendil, Earendil home | 2026-11-22 |
| [S4] | Earendil, release v1.6.0 | 2026-11-22 |
| [S5] | Earendil, release v1.0.0 | 2026-11-22 |
| [S6] | Earendil, Pi docs: Skills | 2026-11-22 |
| [S7] | Earendil, Pi docs: Configuration | 2026-11-22 |
| [S8] | Earendil, Pi docs: MCP Servers | 2026-11-22 |
| [S9] | Earendil, Pi docs: Sessions and Context | 2026-11-22 |
| [S10] | Earendil, Pi docs: Providers | 2026-11-22 |
| [S11] | Earendil, Pi docs: Local Models with llama.cpp | 2026-11-22 |
| [S12] | Earendil, Pi docs: Pi Packages | 2026-11-22 |
| [S13] | Earendil, Pi docs: Extensions | 2026-11-22 |
| [S14] | Earendil, Pi docs: Run Pi in an isolated environment | 2026-11-22 |
| [S15] | Earendil, Pi docs: How Pi Works | 2026-11-22 |
| [S16] | Earendil, Pi docs: RPC Mode | 2026-11-22 |
| [S17] | Earendil, Pi subagent example extension README | 2026-11-22 |
| [S18] | Earendil, earendil-works/pi-chat README | 2026-11-22 |
| [S19] | Qusic, Qusic/pi-ahp README, third-party | 2026-11-22 |
| [S20] | Qusic, Qusic/pi-ahp releases, third-party | 2026-11-22 |
| [S21] | Earendil, earendil-works/pi LICENSE | 2026-11-22 |

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
[S1]: https://pi.dev
[S2]: https://github.com/earendil-works/pi
[S3]: https://earendil.com/
[S4]: https://github.com/earendil-works/pi/releases/tag/v1.6.0
[S5]: https://github.com/earendil-works/pi/releases/tag/v1.0.0
[S6]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/skills.md
[S7]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/configuration.md
[S8]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md
[S9]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/sessions.md
[S10]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/providers.md
[S11]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/llama-cpp.md
[S12]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/packages.md
[S13]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/extensions.md
[S14]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/containerization.md
[S15]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/how-pi-works.md
[S16]: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/rpc.md
[S17]: https://github.com/earendil-works/pi/tree/main/packages/coding-agent/examples/extensions/subagent
[S18]: https://github.com/earendil-works/pi-chat
[S19]: https://github.com/Qusic/pi-ahp
[S20]: https://github.com/Qusic/pi-ahp/releases
[S21]: https://github.com/earendil-works/pi/blob/main/LICENSE
