---
id: product.lm-studio-bionic
title: LM Studio Bionic (Element Labs)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Element Labs
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
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

# LM Studio Bionic (Element Labs)

LM Studio Bionic lets people get coding, research and document work done by an agent running open models, locally or in the cloud: "the AI agent designed for open models", "an excellent agentic harness, especially for coding and working with documents" ([S1]). Element Labs, the maker of LM Studio, makes it, and it "is a new, separate app from LM Studio", which stays for "advanced low-level configuration" ([S1], [S2]). It runs as a desktop app on macOS (Apple silicon), Windows (x64 and Arm64) and Linux (x64 and Arm64, as AppImages) (observed from the download links; no Intel Mac build was served), and its local models are "powered by the LM Studio runtime" ([S2], [S12]). No licence is stated on the pages read; cloud models need an LM Studio account with billing and credits ([S6]). The latest release seen is 1.2.2, of 20 November 2026, served as build 1.2.2-3 ([S7], [S12]). It is an [agent harness][industry.agent-harness] and a desktop [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Open models only on the pages read: "Run locally, connect through LM Link, or use the largest frontier open models through LM Studio Secure Cloud"; 1.2.1 adds "Experimental support for external API models" | [S6], [S8] |
| [Session][industry.session] | `yes` | "A session is a conversation and task thread inside a project", to pin, rename, archive or delete, with forks; "Faster browsing and search for large session histories" in 1.1.9 | [S3], [S7] |
| [Subagent][industry.subagent] | `yes` | In a code project Bionic "can search the repository and use sub-sessions to investigate in parallel when appropriate" | [S4] |
| [Agent team][industry.agent-team] | `unknown` | Not found; parallel sessions are the user's, side by side | [S3] |
| [Skill][industry.skill] | `yes` | Skills "use the standard Agent Skills format: a `SKILL.md` file", the specification named and linked; it also uses skills "you already use in other apps such as Codex and Claude Code" | [S5] |
| [Instruction file][industry.instruction-file] | `yes` | `AGENTS.md`, from the 1.2.1 fix: "Fixed AGENTS.md instructions being lost after conversation compaction"; where it reads them from is not documented | [S8] |
| [Plugin][industry.plugin] | `unknown` | Not found; the "extension packs" in its release notes are inference engines | [S7] |
| [MCP][spec.mcp] | `yes` | MCP servers in the release notes: "on-demand MCP tool discovery" in 1.1.9, images in "MCP tool call results" in 1.2.1, "MCP server sign-in on remote devices" in 1.2.2; no MCP setup page in the docs | [S9], [S8], [S10] |
| [Execution environment][industry.environment] | `partial` | Work projects only: "a managed sandbox for iterating on documents"; "In a Work project, Bionic processes documents in a sandboxed environment"; its kind is not described, and code projects edit and run commands in the chosen folder | [S11], [S2], [S4] |
| [Client][industry.client] | `yes` | Desktop app with side-by-side session panes and an in-app terminal; "LM Link remote chats and projects on other Bionic and llmster devices" | [S3], [S7], [S8] |
| [Agent host][industry.agent-host] | `unknown` | Not found | None |
| [Channel][industry.channel] | `unknown` | Not found | None |
| [Cross-session messaging][industry.cross-session-messaging] | `partial` | In part: "Settings to allow assistants to read or operate other sessions without permission prompts" (1.2.1), and "@ referencing other sessions" (1.1.4); no message passing between sessions described | [S8], [S7] |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `unknown` | Not found. Scheduling: none documented; 1.2.1 adds an "Opt-in beta API for launching assistants headlessly and streaming their progress" | [S8] |

## State of play

- **2026-11-20:** Version 1.2.2, with MCP sign-in, connected apps and skill installation on remote devices; the installers serve build 1.2.2-3 for every platform (observed). ([S7], [S10], [S12])
- **2026-11-16:** Version 1.2.1: LM Link remote chats and projects, experimental external API models, settings for assistants to operate other sessions, and a beta headless API. ([S7], [S8])
- **2026-10-29:** Version 1.1.10: "In-app terminal now available in public Bionic builds." ([S7])
- **2026-10-21:** Version 1.1.9, with on-demand MCP tool discovery. ([S9])
- **2026-07-16:** Element Labs introduces LM Studio Bionic, "a new, separate app from LM Studio". ([S2])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Element Labs, Welcome to LM Studio Bionic | 2026-11-22 |
| [S2] | LM Studio blog, Introducing LM Studio Bionic, 16 July 2026 | 2026-11-22 |
| [S3] | Element Labs, Bionic: projects and sessions | 2026-11-22 |
| [S4] | Element Labs, Bionic: code project | 2026-11-22 |
| [S5] | Element Labs, Bionic: skills | 2026-11-22 |
| [S6] | Element Labs, Bionic: models | 2026-11-22 |
| [S7] | Element Labs, Bionic changelog | 2026-11-22 |
| [S8] | Element Labs, Bionic 1.2.1 release notes | 2026-11-22 |
| [S9] | Element Labs, Bionic 1.1.9 release notes | 2026-11-22 |
| [S10] | Element Labs, Bionic 1.2.2 release notes | 2026-11-22 |
| [S11] | Element Labs, Bionic: work project | 2026-11-22 |
| [S12] | Element Labs, Bionic download links for macOS, Windows and Linux (observed redirects to the 1.2.2-3 installers) | 2026-11-22 |

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
[S1]: https://lmstudio.ai/docs/bionic
[S2]: https://lmstudio.ai/blog/introducing-lm-studio-bionic
[S3]: https://lmstudio.ai/docs/bionic/projects-and-sessions
[S4]: https://lmstudio.ai/docs/bionic/agent/code-project
[S5]: https://lmstudio.ai/docs/bionic/agent/skills
[S6]: https://lmstudio.ai/docs/bionic/models
[S7]: https://lmstudio.ai/changelog
[S8]: https://lmstudio.ai/changelog/bionic-v1.2.1
[S9]: https://lmstudio.ai/changelog/bionic-v1.1.9
[S10]: https://lmstudio.ai/changelog/bionic-v1.2.2
[S11]: https://lmstudio.ai/docs/bionic/agent/work-project
[S12]: https://lmstudio.ai/download/bionic/latest/darwin/arm64
