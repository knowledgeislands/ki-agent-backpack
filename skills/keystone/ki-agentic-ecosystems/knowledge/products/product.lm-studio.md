---
id: product.lm-studio
title: LM Studio (Element Labs)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Element Labs
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEMS-SITE (22 November 2026)
links:
  industry.client:
    predicate: skos:broadMatch
  industry.model:
    predicate: skos:related
  spec.mcp:
    predicate: dcterms:conformsTo
---

# LM Studio (Element Labs)

LM Studio lets people download and run open models on their own computer, chat with them, and serve them to other tools: "Download and run local LLMs like gpt-oss or Llama, Qwen", with a "simple and flexible chat interface", MCP servers, and use as "a seamless, drop-in local backend for your favorite tools" ([S1], [S11]). Element Labs, Inc. makes it ([S5]). It runs as a desktop app on macOS, Windows and Linux, as `llmster`, a headless daemon for servers, and through the `lms` CLI ([S1], [S2], [S3]). The app is proprietary: Element Labs grants a licence "solely for personal and / or internal business purposes" ([S5]); the `lms` CLI is "MIT Licensed" ([S6]). The latest release seen is 0.4.28, Build 2, of 31 October 2026 ([S4]). It is a model runtime, the neighbour of [model][industry.model], with a chat [client][industry.client] of its own that uses MCP tools. LM Studio Bionic, its maker's agent app, is "a new, separate app from LM Studio" and is not rated here ([S16], [S17]).

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | "Run llama.cpp (GGUF) or MLX models", downloaded from Hugging Face; remote models on another device through LM Link | [S1], [S13] |
| [Session][industry.session] | `yes` | Chat threads in folders, "stored in JSON format"; the REST chat endpoint keeps conversations, "stateful by default" | [S7], [S15] |
| [Subagent][industry.subagent] | `unknown` | Not found | None |
| [Agent team][industry.agent-team] | `unknown` | Not found | None |
| [Skill][industry.skill] | `unknown` | Not found for LM Studio; skills are a Bionic feature | [S16] |
| [Instruction file][industry.instruction-file] | `unknown` | Not found | None |
| [Plugin][industry.plugin] | `yes` | "Plugins extend LM Studio's functionality by providing 'hook functions'": tools providers, prompt preprocessors and generators, in JavaScript or TypeScript; publishing to the Hub is in beta | [S10] |
| [MCP][spec.mcp] | `yes` | "Starting LM Studio 0.3.17, LM Studio acts as an Model Context Protocol (MCP) Host", with local and remote servers; also through the API from 0.4.0 | [S8], [S9] |
| [Execution environment][industry.environment] | `unknown` | Not found | None |
| [Client][industry.client] | `yes` | "A ChatGPT-like interface for chatting with local LLMs" in the app; `lms chat` in the terminal; Locally on iPhone and iPad through LM Link | [S7], [S14], [S13] |
| [Agent host][industry.agent-host] | `unknown` | Not found; its integrations point Claude Code, Codex and OpenClaw at its server rather than running them | [S1], [S11], [S12] |
| [Channel][industry.channel] | `unknown` | Not found | None |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Not found | None |
| [ACP][spec.acp] | `unknown` | Not found | None |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found | None |
| [Bot][system.bot] | `unknown` | Not found | None |

## State of play

- **2026-10-31:** Version 0.4.28, Build 2, the latest release seen. ([S4])
- **2026-07-16:** Element Labs introduces LM Studio Bionic, an agent app for open models, separate from LM Studio: "For advanced low-level configuration, you can continue to use LM Studio alongside Bionic". ([S17], [S16])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Element Labs, LM Studio docs | 2026-11-22 |
| [S2] | Element Labs, LM Studio, llmster and lms | 2026-11-22 |
| [S3] | Element Labs, Download LM Studio | 2026-11-22 |
| [S4] | Element Labs, LM Studio 0.4.28 changelog | 2026-11-22 |
| [S5] | Element Labs, LM Studio app terms | 2026-11-22 |
| [S6] | Element Labs, lmstudio-ai/lms repository | 2026-11-22 |
| [S7] | Element Labs, Manage chats | 2026-11-22 |
| [S8] | Element Labs, Use MCP servers | 2026-11-22 |
| [S9] | Element Labs, Developer: using MCP via the API | 2026-11-22 |
| [S10] | Element Labs, TypeScript SDK: plugins | 2026-11-22 |
| [S11] | Element Labs, Integrations | 2026-11-22 |
| [S12] | Element Labs, Claude Code integration | 2026-11-22 |
| [S13] | Element Labs, LM Link | 2026-11-22 |
| [S14] | Element Labs, `lms chat` | 2026-11-22 |
| [S15] | Element Labs, REST API: stateful chats | 2026-11-22 |
| [S16] | Element Labs, Welcome to LM Studio Bionic | 2026-11-22 |
| [S17] | LM Studio blog, Introducing LM Studio Bionic, 16 July 2026 | 2026-11-22 |

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
[S1]: https://lmstudio.ai/docs/app
[S2]: https://lmstudio.ai/docs/app/basics/lmstudio-vs-llmster-vs-lms
[S3]: https://lmstudio.ai/download
[S4]: https://lmstudio.ai/changelog/lmstudio-v0.4.28
[S5]: https://lmstudio.ai/app-terms
[S6]: https://github.com/lmstudio-ai/lms
[S7]: https://lmstudio.ai/docs/app/basics/chat
[S8]: https://lmstudio.ai/docs/app/mcp
[S9]: https://lmstudio.ai/docs/developer/core/mcp
[S10]: https://lmstudio.ai/docs/typescript/plugins
[S11]: https://lmstudio.ai/docs/integrations
[S12]: https://lmstudio.ai/docs/integrations/claude-code
[S13]: https://lmstudio.ai/docs/lmlink
[S14]: https://lmstudio.ai/docs/cli/local-models/chat
[S15]: https://lmstudio.ai/docs/developer/rest/stateful-chats
[S16]: https://lmstudio.ai/docs/bionic
[S17]: https://lmstudio.ai/blog/introducing-lm-studio-bionic
