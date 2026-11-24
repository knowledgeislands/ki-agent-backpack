---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T11:24:46Z
ki-refresh: external-spec · monthly
---

# Sources — where the radar standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative, agentic subjects](#21-authoritative-agentic-subjects)
    - [2.1.1 Identity, specification, and governance](#211-identity-specification-and-governance)
    - [2.1.2 Independent implementation and local evidence](#212-independent-implementation-and-local-evidence)
    - [2.1.3 Agent coordination tooling](#213-agent-coordination-tooling)
    - [2.1.4 Agent-owned browser runtimes](#214-agent-owned-browser-runtimes)
    - [2.1.5 Structural vocabulary evidence](#215-structural-vocabulary-evidence)
  - [2.2 Authoritative, model subjects](#22-authoritative-model-subjects)
    - [2.2.1 Local owner sources](#221-local-owner-sources)
    - [2.2.2 Standards](#222-standards)
    - [2.2.3 Providers](#223-providers)
  - [2.3 Advisory, agentic subjects](#23-advisory-agentic-subjects)
  - [2.4 Advisory, model subjects](#24-advisory-model-subjects)
- [3. Last review](#3-last-review)
  - [3.1 Agentic subjects](#31-agentic-subjects)
  - [3.2 Model subjects](#32-model-subjects)

## 1. Introduction

The sources behind [the radar standard](standard-radar.md), [the agentic-radar standard](standard-agentic-radar.md), [the model-radar standard](standard-model-radar.md), [the model-tier standard](standard-model-tiers.md), the `agentic-radar.toml` and `model-radar.toml` snapshots and the [rubric](rubric.md). This is the one refresh ledger for both subject kinds, merged from the two radars' ledgers. Evidence identities and claim-level notes live in the snapshots; inclusion here does not by itself establish maturity, implementation, interoperability, recommendation or adoption.

[Back to contents](#contents)

## 2. Outside sources

The primary and corroborating sources accepted into the radar, by subject kind and source group. Each row names a subject, structure or source and the claims its sources support; local owner sources, published standards and providers govern the claims they back, while independent benchmark owners inform movement but none is universally authoritative.

### 2.1 Authoritative, agentic subjects

Each row's date is when its sources were last re-fetched; the weekly reviews of 22 and 23 November 2026 re-fetched every row dated on those days.

#### 2.1.1 Identity, specification, and governance

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Model Context Protocol (MCP) | the [2026-07-28 specification](https://modelcontextprotocol.io/specification/2026-07-28/basic) is the normative protocol text; the [Agentic AI Foundation transfer announcement](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/) establishes current governance; and the [SDK tier policy](https://modelcontextprotocol.io/community/sdk-tiers) defines scenario-based conformance expectations. The [release-cycle post](https://blog.modelcontextprotocol.io/posts/mcp-release-cycle/) of 2026-11-11 moves specification releases to a six-month schedule and targets 2027-03-30 for the next. | 2026-11-22 |
| Agent Client Protocol (ACP) | the [version 1 protocol overview](https://agentclientprotocol.com/protocol/v1/overview), stable [schema v1.34.0 release](https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/schema-v1.34.0), and [governance page](https://agentclientprotocol.com/community/governance) define the stable wire contract and interim joint stewardship by Zed and JetBrains. The [v1.25.0 release](https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/schema-v1.25.0) (2026-10-09) stabilises session notices and session compaction, v1.30.0 (2026-11-09) the client system prompt, and v1.34.0 (2026-11-20) subagent sessions and plan operations; v1.34.1 (2026-11-21) is still the latest stable release on 2026-11-23. The separately published [v2.0.0 beta 1 schema](https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/schema-v2.0.0-beta.1) marks ACP v2's move to Preview, which carries no stability contract, and beta 3 (2026-11-21) only adds documentation-level changes: pre-stable counter-evidence, not a replacement for protocolVersion 1. | 2026-11-23 |
| Agent Host Protocol (AHP) | the [specification overview](https://microsoft.github.io/agent-host-protocol/specification/overview.html), [1.0.0 release](https://github.com/microsoft/agent-host-protocol/releases/tag/spec%2Fv1.0.0), and [versioning policy](https://microsoft.github.io/agent-host-protocol/specification/versioning) establish a 1.0 Microsoft protocol (released 2026-10-02) with SemVer compatibility within a MAJOR for Stable channels. The [1.1.0 release](https://github.com/microsoft/agent-host-protocol/releases/tag/spec%2Fv1.1.0) (2026-11-12) is current and a 1.2.0 draft is published; 1.1.0 promotes no channel and adds an experimental TCP channel. Root, Session, Chat, Terminal, Telemetry, and Resource watch are Stable; Canvas, Annotations, Changeset, MCP, TCP, and both Automation channels remain below Stable; unchanged on 2026-11-22. | 2026-11-22 |
| Agent2Agent Protocol (A2A) | the [latest specification](https://a2a-protocol.org/latest/specification/) and [v1.0.1 release](https://github.com/a2aproject/A2A/releases/tag/v1.0.1) establish the current Linux Foundation protocol release, still the latest on 2026-11-23; the project's [Agentic AI Foundation post](https://a2a-protocol.org/latest/blog/2026/08/27/a-new-chapter-for-a2a-joining-the-agentic-ai-foundation/) of 2026-08-27 records its move into the foundation as a Growth Stage project. | 2026-11-23 |
| AGENTS.md | the [format site](https://agents.md/) describes the unversioned repository instruction format; the [Linux Foundation Agentic AI Foundation announcement](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) records its transfer to foundation governance, which the format site states on 2026-11-23, still with no version or formal specification. | 2026-11-23 |
| W3C AI Agent Protocol Community Group | the [Community Group page](https://www.w3.org/community/agentprotocol/) identifies the incubating group and its draft report; the [living protocol draft](https://w3c-cg.github.io/ai-agent-protocol/protocol.html) is exploratory Community Group work, not a W3C Recommendation; on 2026-11-22 the newest drafts are still those of 2025-08-19. | 2026-11-22 |

> [!IMPORTANT]
> In this ledger, **ACP** means the Agent Client Protocol stewarded by Zed and JetBrains. It does not mean IBM's Agent Communication Protocol or AGNTCY's Agent Connect Protocol.

[Back to contents](#contents)

#### 2.1.2 Independent implementation and local evidence

| Source | Governs | Last reviewed |
| --- | --- | --- |
| MCP | [OpenAI Agents SDK](https://openai.github.io/openai-agents-js/guides/mcp/) and [Cloudflare Agents](https://developers.cloudflare.com/agents/model-context-protocol/) provide independent implementations. The local [ki-env-binding capability](https://github.com/knowledgeislands/ki-agent-backpack/tree/main/skills/environment/ki-env-binding) supplies bounded Knowledge Islands adoption evidence. On 2026-11-23 the OpenAI guide covers stdio, SSE, Streamable HTTP and hosted MCP tools, and Cloudflare's page still documents remote MCP servers, naming clients only in terminology. | 2026-11-23 |
| ACP | [Gemini CLI's ACP adapter](https://github.com/google-gemini/gemini-cli/blob/main/packages/cli/src/acp/README.md) and [CodeCompanion's ACP client](https://github.com/olimorris/codecompanion.nvim/blob/main/doc/codecompanion.txt) are independent implementations. Their [documented integration result](https://github.com/olimorris/codecompanion.nvim/discussions/2030) is bounded interoperability evidence. The ACP introduction still marks [full remote-agent support as work in progress](https://agentclientprotocol.com/get-started/introduction), unchanged on 2026-11-23. | 2026-11-23 |
| AHP | the official [implementation catalogue](https://microsoft.github.io/agent-host-protocol/guide/implementations.html) lists Microsoft-project clients and reference surfaces plus independent clients and hosts, among them [pi-ahp](https://github.com/Qusic/pi-ahp), which states AHP 1.0.0 and 0.9.0 support, and [ahpd](https://github.com/softov/ahpd), which states AHP 1.1.0 on 2026-11-23; AgentConnect is the only catalogue entry that names a version, as an AHP 1.0 host. Wyrd Company's independent [AHP server](https://github.com/wyrd-company/ahp-server) implements a bounded server surface and publishes compatibility tests against Microsoft's TypeScript client. That establishes multiple independent implementations, not an independently witnessed interoperability result. | 2026-11-23 |
| AHP adoption by agent host | checked on 2026-11-10, 2026-11-15 and 2026-11-22 against [Orca's releases](https://github.com/stablyai/orca/releases), [Claude's release notes](https://support.claude.com/en/articles/12138966-release-notes) and [OpenAI's changelog](https://learn.chatgpt.com/docs/changelog) for ChatGPT Desktop and ChatGPT Mobile. None names AHP support; each absence is dated counter-evidence on the AHP subject, not a finding that support is ruled out. | 2026-11-22 |
| A2A | [Google ADK](https://github.com/google/adk-docs/blob/main/docs/a2a/index.md) and [BeeAI Framework](https://github.com/i-am-bee/beeai-framework) provide independent implementations. The official [A2A technology compatibility kit](https://github.com/a2aproject/a2a-tck) covers the protocol bindings, but no reviewed public pass or certification matrix was found, still so on 2026-11-23. ADK's A2A guide covers Python, Go and Java, with Go and Java marked experimental. | 2026-11-23 |
| AGENTS.md | [OpenAI Codex](https://learn.chatgpt.com/docs/agent-configuration/agents-md) and [Visual Studio Code](https://code.visualstudio.com/docs/agent-customization/custom-instructions) implement the format independently. The format site reports broad operational adoption, while VS Code's [custom instructions reference](https://code.visualstudio.com/docs/agents/reference/custom-instructions-reference) makes discovery differ by harness: nested `AGENTS.md` discovery is experimental and off by default only in the Local harness, which is deprecated and due for removal in February 2027. This repository's [AGENTS.md](https://github.com/knowledgeislands/ki-agent-backpack/blob/main/AGENTS.md) is the local adoption evidence. | 2026-11-23 |
| W3C AI Agent Protocol Community Group | no reviewed implementation, conformance result, or interoperability demonstration was found in the group's primary publications. | 2026-11-22 |

[Back to contents](#contents)

#### 2.1.3 Agent coordination tooling

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Orca orchestration | the [first implementation](https://github.com/stablyai/orca/pull/1188), merged on 28 April 2026, supplies reference-implementation evidence; the [orchestration documentation](https://orca.dev/docs/cli/orchestration) describes the experimental coordinator, workers, ask and reply, and gates. It is watched as a way agent hosts coordinate; since 20 November 2026, its mail is the channel between Cairn sessions in Orca. On 2026-11-22 it is still experimental and its panel still temporarily unavailable. | 2026-11-22 |
| Gas City | the [open-source orchestrator](https://github.com/gastownhall/gascity) supplies reference-implementation evidence; the [software-factory guide](https://gascity.com/guide/ai-software-factory/) describes Beads-backed durable work, configured coding workflows, routing, retries, and review gates; v1.5.1 (2026-10-24) is still the latest stable release on 2026-11-22. | 2026-11-22 |

These sources establish two implemented coordination tools and their primary abstractions. They do not establish comparative fitness, cross-tool interoperability, or a Knowledge Islands adoption decision.

[Back to contents](#contents)

#### 2.1.4 Agent-owned browser runtimes

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Obscura | the [open-source implementation](https://github.com/h4ckf0r0day/obscura) documents a self-hosted Rust browser engine with CDP, Playwright, Puppeteer, rendering, storage, and MCP surfaces. The [product description](https://obscura.sh/#how) emphasises isolated zero-state sessions; that supports isolation. The project's [persistent cookies and storage guide](https://github.com/h4ckf0r0day/obscura/blob/main/docs/Persist-cookies-and-storage.md) documents opt-in persistent profiles through `--storage-dir`, hardened in v0.2.7 (2026-11-13), which leaves authenticated-profile provisioning and recurring ChatGPT fidelity for local evaluation. | 2026-11-22 |

[Back to contents](#contents)

#### 2.1.5 Structural vocabulary evidence

These sources bound recurring architecture terms without treating them as protocols or comparable standards in the radar snapshot.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Agent loop | the [OpenAI Agents SDK run loop](https://openai.github.io/openai-agents-js/guides/running-agents/) repeatedly invokes a model, interprets a final output, handoff, or tool call, and stops on final output or a bounded turn limit, ten turns by default on 2026-11-23. | 2026-11-23 |
| Supervisor or branching tree | the [OpenAI multi-agent guide](https://openai.github.io/openai-agents-js/guides/multi-agent/) and Anthropic's [multi-agent research system account](https://www.anthropic.com/engineering/multi-agent-research-system) describe a coordinating agent retaining responsibility while delegating bounded work, often in parallel, to specialists. A concrete system can include retries or shared workers and therefore need not be a literal tree. | 2026-11-23 |
| Graph-orchestrated execution | the [LangGraph Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api) models executable shared state with nodes and edges, including cycles, conditional branches, joins, and parallel fan-out. | 2026-11-23 |
| Knowledge graph | [RDF 1.1 Concepts](https://www.w3.org/TR/rdf11-concepts/) supplies a stable graph data model of subject-predicate-object triples. The broader term "knowledge graph" is not necessarily RDF and does not imply an execution engine. [RDF 1.2 Concepts](https://www.w3.org/TR/rdf12-concepts/) is a Candidate Recommendation Draft of 2026-11-16, so RDF 1.1 stays the cited Recommendation. | 2026-11-23 |
| Provenance graph | the W3C [PROV data model](https://www.w3.org/TR/prov-dm/) and [PROV-O ontology](https://www.w3.org/TR/prov-o/) model entities, activities, agents, derivation, use, generation, attribution, and responsibility. Provenance records lineage; it is not itself workflow execution or domain knowledge. | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Authoritative, model subjects

By class, as the standard's evidence independence reads them.

#### 2.2.1 Local owner sources

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Local model-radar roadmap][local-roadmap] | Initial route ownership and recommendation (pinned commit) | 2026-11-23 |
| [Owner default-route decision][local-defaults] | 2026-10-06 default decision (pinned commit); owner-attested day-to-day use | 2026-11-23 |

[Back to contents](#contents)

#### 2.2.2 Standards

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Thoughtworks Technology Radar FAQ][thoughtworks-radar] | Source ring semantics | 2026-11-23 |
| [Open Source AI Definition 1.0][osi-osaid] | Open Source AI classification | 2026-11-23 |

[Back to contents](#contents)

#### 2.2.3 Providers

Provider evidence may establish identity, access, licence, pricing and lifecycle, not performance.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Claude Opus 5 launch][claude-opus] | Identity, access, release | 2026-11-23 |
| [Claude Fable 5.1 model overview][claude-fable] | Identity, access, lifecycle | 2026-11-23 |
| [Claude model deprecations][claude-lifecycle] | Opus and Fable lifecycle | 2026-11-23 |
| [Current Claude models][claude-current] | Fable, Opus, Sonnet, and Haiku identities and effort | 2026-11-23 |
| [OpenAI model catalogue][openai-models] | Current flagship identities and access | 2026-11-23 |
| [OpenAI GPT-6 guide][openai-gpt-6] | Current GPT-6.2 Astra and Sol positioning | 2026-11-23 |
| [GPT-5.6 Sol model page][openai-sol] | Previous-family Sol identity, alias, and access | 2026-11-23 |
| [GPT-5.6 Terra model page][openai-terra] | Previous-family Terra identity and access | 2026-11-23 |
| [GPT-6 Astra model page][openai-gpt-6-astra] | Astra identity and access | 2026-11-23 |
| [GPT-6 Astra launch post][openai-astra] | Where Astra is offered, Azure and Amazon Bedrock, not its release date | 2026-11-24 |
| [GPT-6.1 Sol model page][openai-gpt-6-1-sol] | Default-route Sol identity and access | 2026-11-23 |
| [GPT-6 Sol model page][openai-gpt-6-sol] | Earlier Sol identity and access | 2026-11-23 |
| [Codex models][codex-models] | Models selectable in Codex | 2026-11-23 |
| [Claude model IDs and versions][claude-model-ids] | Fixed model identities against aliases, for the model-tier standard | 2026-11-23 |
| [Claude Code model configuration][claude-code-models] | Claude Code aliases and selectable models | 2026-11-23 |
| [Gemini CLI ACP mode][gemini-cli-acp] | Gemini CLI ACP support and access | 2026-11-23 |
| [OpenCode ACP support][opencode-acp] | OpenCode ACP support | 2026-11-23 |
| [Zed external agents][zed-agents] | ACP client integration of the routed agents | 2026-11-23 |
| [Gemini 3.8 Flash model page][gemini-flash] | Identity, capability, stable access | 2026-11-23 |
| [Gemini model deprecations][gemini-lifecycle] | Release and shutdown status | 2026-11-23 |
| [GLM-5.3 checkpoint][glm-53] | Identity, weights, deployment | 2026-11-23 |
| [GLM-5.3 licence][glm-53-license] | Exact weights licence | 2026-11-23 |
| [GLM-5.3-Flash release][glm-53-flash] | Identity, scale, deployment | 2026-11-23 |
| [GLM-5.3-Flash licence][glm-53-flash-license] | Exact weights licence | 2026-11-23 |
| [Kimi K3 repository][kimi-k3] | Identity, weights, access | 2026-11-23 |
| [Kimi K3 licence][kimi-k3-license] | Exact weights licence | 2026-11-23 |
| [Qwen3.8 Max model page][qwen-max] | Exact hosted Max identity | 2026-11-23 |
| [Qwen3.8 repository][qwen-family] | Open-model family boundary | 2026-11-23 |
| [Qwen3.8-27B checkpoint][qwen-27b] | Workstation-lane weights and licence | 2026-11-23 |
| [Grok 4.6 launch][grok-launch] | Identity, release, hosted routes | 2026-11-23 |
| [Grok 4.6 model page][grok-model] | API identity and current access | 2026-11-23 |
| [Grok 4.7 launch][grok-47-launch] | Identity, release, hosted routes | 2026-11-23 |
| [Grok 4.7 model page][grok-47-model] | API identity and current access | 2026-11-23 |
| [SpaceXAI models and pricing index][xai-models] | Current recommended model and listed alternatives | 2026-11-23 |

[Back to contents](#contents)

### 2.3 Advisory, agentic subjects

None.

[Back to contents](#contents)

### 2.4 Advisory, model subjects

Independent benchmark and methodology owners.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [BenchLM methodology][benchlm] | BenchAlign aggregation and uncertainty | 2026-11-23 |
| [AA Intelligence methodology][aa-intelligence] | Intelligence Index v5.0.1 | 2026-11-23 |
| [AA Coding Agent methodology][aa-coding] | Coding Agent Index v2.1 | 2026-11-23 |
| [Arena-Rank methodology][arena-rank] | Bradley–Terry ranking and uncertainty | 2026-11-23 |
| [Arena leaderboard policy][arena-policy] | Public model and data policy | 2026-11-23 |
| [Arena leaderboard changelog][arena-changelog] | Leaderboard method and data changes | 2026-11-23 |
| [SWE-bench leaderboards][swe-bench] | Current benchmark-family shape | 2026-11-23 |
| [Terminal-Bench 4.1][terminal-bench] | Current terminal benchmark | 2026-11-23 |
| [Harbor core concepts][harbor] | Task-environment evaluation unit | 2026-11-23 |
| [HELM repository][helm] | Framework and leaderboard scope | 2026-11-23 |
| [HELM maintenance policy][helm-maintenance] | Maintenance lifecycle | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review of each subject kind, and what it is watching.

### 3.1 Agentic subjects

The latest review, on 23 November 2026, re-fetched the sources the 22 November review had left at their 15 November dates, the structural vocabulary and the independent-implementation pages for MCP, ACP, A2A and AGENTS.md, and rechecked the fast-moving releases; the 22 November review had re-fetched every other row. ACP's latest stable schema is still v1.34.1, A2A still v1.0.1 and AHP still spec v1.1.0, no agent host names AHP support, and no stance or movement needs to change.

**Watching:**

- Seek public cross-implementation conformance or interoperability results for AHP, A2A, and AGENTS.md rather than inferring them from package or implementation counts.
- Obscura documents persistent profiles; moving the browser runtime inward still needs a bounded local ChatGPT acquisition trial, which is `ki-work next`'s to capture.
- ACP v2 is in Preview with beta schemas; watch for its stabilisation, which is the ACP subject's return trigger.
- `agentic-radar.toml`'s evidence dates have not been brought up to the sources re-fetched on 23 November 2026.

[Back to contents](#contents)

### 3.2 Model subjects

The latest review, on 23 November 2026, rechecked every tracked source, including the standards, licences and local owner sources, and found no ring, support level, applicability or default that needs to change; the data updates it found are held as proposals under Watching. Provider identities, lifecycles and licences are otherwise unchanged since 22 November, the model-tier tables still match the Claude models overview and the GPT-6 guide, and the Thoughtworks FAQ still names the fourth ring Caution, as the radar's local adaptation of its four rings reads.

**Watching:**

- reassess provider availability, retirement notices, pricing, route support, benchmark versions, and data dates during every monthly refresh.
- do not promote an open-weight model to Open Source AI Definition conformance without evidence for the definition's data-information, code, and parameter requirements.
- keep hosted `qwen3.8-max` separate from Apache-2.0 Qwen3.8 open-weight checkpoints.
- HELM has been in maintenance mode since 2026-06-01 and stays watch-level corroborating evidence, not a frontier-primary source.
- decide whether GPT-6.1 Terra, Qwen4 Max and the Gemini 4 models join the radar as model identities; none has a route. Gemini 4 Argon, released on 2026-10-13 with no shutdown date and a stable model page, appears to have reached general availability, and Carbon, Hydrogen and, from 2026-11-18, Neon followed. Claude Mythos 5.2 is limited to verified organisations.
- watch for a formal Claude Haiku 4.5 deprecation notice. On 2026-11-23 it is still active on the deprecations page with no notice, its not-sooner-than date of 2026-10-15 has passed, and the models overview lists it among older models; Anthropic gives at least 60 days' notice before retiring a publicly released model, so it cannot retire before mid-January 2027. It has no route today.
- GPT-6.1 Sol, a default route's model, and GPT-6 Astra have left OpenAI's catalogue and GPT-6 guide in favour of GPT-6.2 Sol and Astra, with no deprecation notice; watch for one, and for Codex dropping either model. On 2026-11-23 both model pages show no notice and Codex still lists both.
- recheck the GPT-5.6 Sol route after its promotional pricing ends on 2026-11-30: on 2026-11-22 Codex's models page no longer mentions it, and its own model page shows it available.
- decide whether Kimi K3.1 Pro, an open-weight successor to Kimi K3 released on 2026-10-23 with weights from early November, joins the radar; its own repository and licence need fetching first, and Kimi K3 has no successor recorded.
- BenchLM's record still reads method v5.8 and data of 2026-11-13, the Arena record data of 2026-11-12 and Terminal-Bench data of 2026-11-14; on 2026-11-23 they read BenchAlign v6.0 with data of 2026-11-21, 2026-11-20 and 2026-11-18, held as proposals.

[Back to contents](#contents)

[aa-coding]: https://artificialanalysis.ai/methodology/coding-agents-benchmarking/
[aa-intelligence]: https://artificialanalysis.ai/methodology/intelligence-benchmarking
[arena-changelog]: https://arena.ai/company/leaderboard-changelog
[arena-policy]: https://arena.ai/blog/policy
[arena-rank]: https://arena.ai/blog/arena-rank
[benchlm]: https://benchlm.ai/methodology
[claude-fable]: https://platform.claude.com/docs/en/models/fable-5-1/overview
[claude-code-models]: https://code.claude.com/docs/en/model-config
[claude-current]: https://platform.claude.com/docs/en/models/overview
[claude-lifecycle]: https://platform.claude.com/docs/en/about-claude/model-deprecations
[claude-opus]: https://www.anthropic.com/news/claude-opus-5
[codex-models]: https://learn.chatgpt.com/docs/models
[gemini-cli-acp]: https://geminicli.com/docs/cli/acp-mode
[gemini-flash]: https://aistudio.google.com/docs/models/gemini-3.8-flash
[gemini-lifecycle]: https://aistudio.google.com/docs/deprecations
[glm-53-flash-license]: https://huggingface.co/zai-org/GLM-5.3-Flash/blob/main/LICENSE
[glm-53-flash]: https://autoclaw.z.ai/blog/model/glm-5.3-flash/
[glm-53-license]: https://huggingface.co/zai-org/GLM-5.3/blob/main/LICENSE
[glm-53]: https://huggingface.co/zai-org/GLM-5.3
[grok-launch]: https://x.ai/news/grok-4-6
[grok-model]: https://docs.x.ai/developers/models/grok-4.6
[grok-47-launch]: https://x.ai/news/grok-4-7
[grok-47-model]: https://docs.x.ai/developers/models/grok-4.7
[harbor]: https://docs.harborframework.com/core-concepts/index
[helm-maintenance]: https://github.com/stanford-crfm/helm/blob/main/docs/maintenance_mode.md
[helm]: https://github.com/stanford-crfm/helm
[kimi-k3]: https://github.com/MoonshotAI/Kimi-K3
[kimi-k3-license]: https://github.com/MoonshotAI/Kimi-K3/blob/main/LICENSE
[local-defaults]: https://github.com/knowledgeislands/ki-agent-backpack/commit/709f49fec523f596d1b388391bff6aed39ac5198
[local-roadmap]: https://github.com/knowledgeislands/ki-agent-backpack/blob/dd45807722a06cf3e54686f4eaa38c1149836e3a/docs/roadmap/KI-HARNESS-REV-003-establish-model-radar.md
[openai-astra]: https://openai.com/index/gpt-6-astra/
[openai-gpt-6]: https://developers.openai.com/api/docs/guides/latest-model
[claude-model-ids]: https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions
[openai-gpt-6-1-sol]: https://developers.openai.com/api/docs/models/gpt-6.1-sol
[openai-gpt-6-astra]: https://developers.openai.com/api/docs/models/gpt-6-astra
[openai-gpt-6-sol]: https://developers.openai.com/api/docs/models/gpt-6-sol
[openai-models]: https://developers.openai.com/api/docs/models
[opencode-acp]: https://opencode.ai/docs/acp/
[openai-sol]: https://developers.openai.com/api/docs/models/gpt-5.6-sol
[openai-terra]: https://developers.openai.com/api/docs/models/gpt-5.6-terra
[osi-osaid]: https://opensource.org/ai/open-source-ai-definition
[qwen-27b]: https://huggingface.co/Qwen/Qwen3.8-27B
[qwen-family]: https://github.com/QwenLM/Qwen3.8
[qwen-max]: https://docs.modelstudio.console.alibabacloud.com/en/model-studio/qwen3-8-max
[swe-bench]: https://www.swebench.com/
[terminal-bench]: https://www.tbench.ai/
[thoughtworks-radar]: https://www.thoughtworks.com/radar/faq
[xai-models]: https://docs.x.ai/developers/models
[zed-agents]: https://zed.dev/docs/ai/external-agents
