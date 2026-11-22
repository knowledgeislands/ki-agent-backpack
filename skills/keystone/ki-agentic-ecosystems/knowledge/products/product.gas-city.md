---
id: product.gas-city
title: Gas City (Gas City, Inc.)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Gas City, Inc.
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
links:
  industry.agent-host:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.acp:
    predicate: dcterms:conformsTo
---

# Gas City (Gas City, Inc.)

Gas City lets one person hand a body of work to a fleet of coding agents and have it broken into tasks, run in parallel, gated on review and tracked to completion: it "runs teams of coding agents (Claude Code, Codex, Gemini, and others) on your repositories", "the open-source platform for building software factories from teams of coding agents" ([S2]). Gas City, Inc. stewards it, in the `gastownhall` GitHub organisation ([S1], [S2]). It is "the platform Gas Town's machinery was extracted into": Gas Town's roles are now configuration in a pack, "so the same engine runs Gas Town, Ralph, or whatever you configure" ([S4], [S6]). It runs as the `gc` CLI on macOS and Linux, installed from Homebrew, with a supervisor that serves a local web dashboard and a REST API ([S2], [S15], [S11]). It is MIT open source and free, "the only spend is the model usage of the agents you run"; the maker's commercial Beads Team Server is a separate product ([S4], [S1]). The latest release seen is v1.5.1, of 24 October 2026, beside a rolling `edge` pre-release from `main` ([S16], [S2]). It is an [agent host][industry.agent-host] for other makers' harnesses and a [client][industry.client] onto their sessions.

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Whatever harness each agent picks, "Sixteen built-in harnesses, including Claude Code, Codex CLI, Gemini CLI, Cursor Agent, GitHub Copilot, Sourcegraph AMP, OpenCode, Grok, Kimi Code, and Pi"; a per-agent model option and upstreams such as Bedrock, Vertex or an OpenAI-compatible gateway | [S4], [S7], [S8] |
| [Session][industry.session] | `yes` | `wake_mode` "resume" (default) reuses "provider session key for conversation continuity"; after a restart the orchestrator "adopts the live sessions it finds and resumes from the store" | [S12], [S4] |
| [Subagent][industry.subagent] | `unknown` | No agent of its own; its workers are sessions in their own right, and the pages read say nothing of the hosted harnesses' own subagents | [S3], [S10] |
| [Agent team][industry.agent-team] | `yes` | A coordinating agent, such as the Gas Town pack's `mayor`, slings work to other agents, and agents "coordinate through two indirect channels: mail (messages) and slung work" | [S6], [S10] |
| [Skill][industry.skill] | `yes` | Pack- or role-level skill folders, which "Gas City symlinks … into each agent's provider-specific skill sink", `.claude/skills/`, `.agents/skills/`, `.gemini/skills/`, `.opencode/skills/`; the pages read name neither `SKILL.md` nor the specification | [S5] |
| [Instruction file][industry.instruction-file] | `partial` | No loader of its own: each agent's context starts from its role's prompt template; a provider's `instructions_file` names "the filename the provider reads for project instructions", `AGENTS.md` by default | [S5], [S12] |
| [Plugin][industry.plugin] | `yes` | Packs, imported by name and found through a registry, bring "agents, formulas, and orders, along with skills, commands, MCP configuration"; Gas Town's plugins "become orders" | [S13], [S6] |
| [MCP][spec.mcp] | `partial` | The harnesses are the MCP clients; Gas City catalogues packs' MCP configuration, "list-only today (`gc mcp list` shows what's catalogued; you wire the servers yourself)", though v1.0.0 added "Provider-native MCP projection for Claude, Codex, and Gemini" | [S5], [S18] |
| [Execution environment][industry.environment] | `yes` | `container`: the `k8s` runtime runs "every session in a Kubernetes pod", and `exec:<script>` is "how sandbox / micro-VM runtime packs plug in"; locally, tmux is `none`, its commands "a feature, not a sandbox" | [S7], [S14] |
| [Client][industry.client] | `yes` | Terminal (`gc session attach`, `peek`, `logs`), a local web dashboard of "agents and their sessions, beads, mail, formula runs", and outside chat or voice front ends over the API; mobile not mentioned | [S9], [S15], [S11] |
| [Agent host][industry.agent-host] | `yes` | Its core role: it launches other makers' agent CLIs as sessions it can "start, stop, prompt, and observe", over tmux or ACP, and adopts them after a restart | [S3], [S7], [S8] |
| [Channel][industry.channel] | `yes` | External messaging: a client "posts each turn in" and "the agent is notified"; verified webhooks can target a `conversation`; `gc session nudge` types text "straight into a running agent" | [S11], [S12], [S5] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | Mail, "a bead (type `message`)" that "waits in an inbox until read", and nudge, "a direct poke into a live session" | [S5], [S10] |
| [ACP][spec.acp] | `yes` | As client: `session = "acp"` drives a harness "over the Agent Client Protocol (JSON-RPC over stdio)", where its provider declares `supports_acp = true` | [S7], [S12] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `partial` | Not named a bot: an always-on named session (`mode="always"`) has "a stable name … across restarts", a mail inbox, and orders that run formulas on "cooldown, cron, condition, event, or manual" triggers; the pages read give an agent no memory of its own beyond the shared beads | [S9], [S5], [S3] |

## State of play

- **2026-10-24:** Version 1.5.1, the stable release, supersedes 1.5.0 with bug, security and documentation fixes: "text sent to a Claude session can no longer approve its permission prompt", and multi-city deployments sharing a rig store "stop disturbing each other". ([S16])
- **2026-10-05:** Version 1.5.0: "Beads (`bd`), not Gas City, now owns the Dolt process of every new city." ([S17])
- **2026-09-18:** Version 1.4.2, for Beads 1.3.0 compatibility. ([S18])
- **2026-04-21:** Version 1.0.0, the "First stable release", with provider-native MCP projection for Claude, Codex and Gemini. ([S18])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Gas City, Inc., Gas City home | 2026-11-22 |
| [S2] | Gas City, Inc., gastownhall/gascity repository README | 2026-11-22 |
| [S3] | Gas City, Inc., Gas City docs: How Gas City Works | 2026-11-22 |
| [S4] | Gas City, Inc., Gas City docs: FAQ | 2026-11-22 |
| [S5] | Gas City, Inc., Gas City docs: Coming from Coding Agents | 2026-11-22 |
| [S6] | Gas City, Inc., Gas City docs: Coming from Gas Town | 2026-11-22 |
| [S7] | Gas City, Inc., Gas City docs: Configuring an Agent | 2026-11-22 |
| [S8] | Gas City, Inc., Gas City docs: Harness Recipes | 2026-11-22 |
| [S9] | Gas City, Inc., Gas City docs: Tutorial 03, Sessions | 2026-11-22 |
| [S10] | Gas City, Inc., Gas City docs: Tutorial 04, Agent-to-Agent Communication | 2026-11-22 |
| [S11] | Gas City, Inc., Gas City docs: Connect an external client | 2026-11-22 |
| [S12] | Gas City, Inc., Gas City docs: Config Reference | 2026-11-22 |
| [S13] | Gas City, Inc., Gas City docs: Understanding Packs | 2026-11-22 |
| [S14] | Gas City, Inc., Gas City docs: Command Execution Trust Boundaries | 2026-11-22 |
| [S15] | Gas City, Inc., Gas City docs: Dashboard | 2026-11-22 |
| [S16] | Gas City, Inc., release v1.5.1 | 2026-11-22 |
| [S17] | Gas City, Inc., release v1.5.0 | 2026-11-22 |
| [S18] | Gas City, Inc., gastownhall/gascity CHANGELOG | 2026-11-22 |

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
[S1]: https://gascity.com
[S2]: https://github.com/gastownhall/gascity
[S3]: https://docs.gascity.com/getting-started/how-gas-city-works
[S4]: https://docs.gascity.com/getting-started/faq
[S5]: https://docs.gascity.com/guides/capabilities-for-coding-agent-users
[S6]: https://docs.gascity.com/getting-started/coming-from-gastown
[S7]: https://docs.gascity.com/guides/configuring-an-agent
[S8]: https://docs.gascity.com/guides/harness-recipes
[S9]: https://docs.gascity.com/tutorials/03-sessions
[S10]: https://docs.gascity.com/tutorials/04-communication
[S11]: https://docs.gascity.com/guides/connected-clients
[S12]: https://docs.gascity.com/reference/config
[S13]: https://docs.gascity.com/guides/understanding-packs
[S14]: https://docs.gascity.com/reference/trust-boundaries
[S15]: https://docs.gascity.com/getting-started/dashboard
[S16]: https://github.com/gastownhall/gascity/releases/tag/v1.5.1
[S17]: https://github.com/gastownhall/gascity/releases/tag/v1.5.0
[S18]: https://github.com/gastownhall/gascity/blob/main/CHANGELOG.md
