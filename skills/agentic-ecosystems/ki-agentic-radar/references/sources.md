---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-20T15:30:00Z
ki-refresh: external-spec · weekly
---

# Sources — where the agentic radar standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Identity, specification, and governance](#211-identity-specification-and-governance)
    - [2.1.2 Independent implementation and local evidence](#212-independent-implementation-and-local-evidence)
    - [2.1.3 Agent coordination tooling](#213-agent-coordination-tooling)
    - [2.1.4 Agent-owned browser runtimes](#214-agent-owned-browser-runtimes)
    - [2.1.5 Structural vocabulary evidence](#215-structural-vocabulary-evidence)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the agentic radar standard](standard-agentic-radar.md), the `radar.toml` snapshot and the [rubric](rubric.md). This ledger records the primary and corroborating sources accepted into the agentic radar. Evidence identities and claim-level notes live in `radar.toml`; inclusion here does not by itself establish maturity, implementation, interoperability, or adoption.

[Back to contents](#contents)

## 2. Outside sources

The primary and corroborating sources accepted into the radar, by source group; each row names a subject or structure and the claims its sources support.

### 2.1 Authoritative

Each group was re-fetched in the latest weekly review.

#### 2.1.1 Identity, specification, and governance

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Model Context Protocol (MCP) | the [2026-07-28 specification](https://modelcontextprotocol.io/specification/2026-07-28/basic) is the normative protocol text; the [Agentic AI Foundation transfer announcement](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/) establishes current governance; and the [SDK tier policy](https://modelcontextprotocol.io/community/sdk-tiers) defines scenario-based conformance expectations. | 2026-11-15 |
| Agent Client Protocol (ACP) | the [version 1 protocol overview](https://agentclientprotocol.com/protocol/v1/overview), stable [schema v1.32.0 release](https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/schema-v1.32.0), and [governance page](https://agentclientprotocol.com/community/governance) define the stable wire contract and interim joint stewardship by Zed and JetBrains. The [v1.25.0 release](https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/schema-v1.25.0) (2026-10-09) stabilises session notices and session compaction; of the releases since, only v1.30.0 (2026-11-09) stabilises anything, the client system prompt, and v1.32.0 (2026-11-14) adds only unstable features. The separately published [v2.0.0 alpha 16 schema](https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/schema-v2.0.0-alpha.16) is pre-stable counter-evidence, not a replacement for protocolVersion 1. | 2026-11-15 |
| Agent Host Protocol (AHP) | the [specification overview](https://microsoft.github.io/agent-host-protocol/specification/overview.html), [1.0.0 release](https://github.com/microsoft/agent-host-protocol/releases/tag/spec%2Fv1.0.0), and [versioning policy](https://microsoft.github.io/agent-host-protocol/specification/versioning) establish a 1.0 Microsoft protocol (released 2026-10-02) with SemVer compatibility within a MAJOR for Stable channels. The [1.1.0 release](https://github.com/microsoft/agent-host-protocol/releases/tag/spec%2Fv1.1.0) (2026-11-12) is current and a 1.2.0 draft is published; 1.1.0 promotes no channel and adds an experimental TCP channel. Root, Session, Chat, Terminal, Telemetry, and Resource watch are Stable; Canvas, Annotations, Changeset, MCP, TCP, and both Automation channels remain below Stable. | 2026-11-15 |
| Agent2Agent Protocol (A2A) | the [latest specification](https://a2a-protocol.org/latest/specification/) and [v1.0.1 release](https://github.com/a2aproject/A2A/releases/tag/v1.0.1) establish the current Linux Foundation protocol release. | 2026-11-15 |
| AGENTS.md | the [format site](https://agents.md/) describes the unversioned repository instruction format; the [Linux Foundation Agentic AI Foundation announcement](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) records its transfer to foundation governance. | 2026-11-15 |
| W3C AI Agent Protocol Community Group | the [Community Group page](https://www.w3.org/community/agentprotocol/) identifies the incubating group and its draft report; the [living protocol draft](https://w3c-cg.github.io/ai-agent-protocol/protocol.html) is exploratory Community Group work, not a W3C Recommendation. | 2026-11-15 |

> [!IMPORTANT]
> In this ledger, **ACP** means the Agent Client Protocol stewarded by Zed and JetBrains. It does not mean IBM's Agent Communication Protocol or AGNTCY's Agent Connect Protocol.

[Back to contents](#contents)

#### 2.1.2 Independent implementation and local evidence

| Source | Governs | Last reviewed |
| --- | --- | --- |
| MCP | [OpenAI Agents SDK](https://openai.github.io/openai-agents-js/guides/mcp/) and [Cloudflare Agents](https://developers.cloudflare.com/agents/model-context-protocol/) provide independent implementations. The local [ki-env-binding capability](https://github.com/knowledgeislands/ki-agent-backpack/tree/main/skills/environment/ki-env-binding) supplies bounded Knowledge Islands adoption evidence. | 2026-11-15 |
| ACP | [Gemini CLI's ACP adapter](https://github.com/google-gemini/gemini-cli/blob/main/packages/cli/src/acp/README.md) and [CodeCompanion's ACP client](https://github.com/olimorris/codecompanion.nvim/blob/main/doc/codecompanion.txt) are independent implementations. Their [documented integration result](https://github.com/olimorris/codecompanion.nvim/discussions/2030) is bounded interoperability evidence. The ACP introduction still marks [full remote-agent support as work in progress](https://agentclientprotocol.com/get-started/introduction). | 2026-11-15 |
| AHP | the official [implementation catalogue](https://microsoft.github.io/agent-host-protocol/guide/implementations.html) lists Microsoft-project clients and reference surfaces plus independent clients and hosts, among them [pi-ahp](https://github.com/Qusic/pi-ahp) and [ahpd](https://github.com/softov/ahpd), which both now state AHP 1.0.0 support. Wyrd Company's independent [AHP server](https://github.com/wyrd-company/ahp-server) implements a bounded server surface and publishes compatibility tests against Microsoft's TypeScript client. That establishes multiple independent implementations, not an independently witnessed interoperability result. | 2026-11-15 |
| AHP adoption by agent host | checked on 2026-11-10, and again on 2026-11-15, against [Orca's releases](https://github.com/stablyai/orca/releases), [Claude's release notes](https://support.claude.com/en/articles/12138966-release-notes) and [OpenAI's changelog](https://learn.chatgpt.com/docs/changelog) for ChatGPT Desktop and ChatGPT Mobile. None names AHP support; each absence is dated counter-evidence on the AHP subject, not a finding that support is ruled out. | 2026-11-15 |
| A2A | [Google ADK](https://github.com/google/adk-docs/blob/main/docs/a2a/index.md) and [BeeAI Framework](https://github.com/i-am-bee/beeai-framework) provide independent implementations. The official [A2A technology compatibility kit](https://github.com/a2aproject/a2a-tck) covers the protocol bindings, but no reviewed public pass or certification matrix was found. | 2026-11-15 |
| AGENTS.md | [OpenAI Codex](https://learn.chatgpt.com/docs/agent-configuration/agents-md) and [Visual Studio Code](https://code.visualstudio.com/docs/agent-customization/custom-instructions) implement the format independently. The format site reports broad operational adoption, while VS Code's [custom instructions reference](https://code.visualstudio.com/docs/agents/reference/custom-instructions-reference) describes nested `AGENTS.md` support as experimental. This repository's [AGENTS.md](https://github.com/knowledgeislands/ki-agent-backpack/blob/main/AGENTS.md) is the local adoption evidence. | 2026-11-15 |
| W3C AI Agent Protocol Community Group | no reviewed implementation, conformance result, or interoperability demonstration was found in the group's primary publications. | 2026-11-15 |

[Back to contents](#contents)

#### 2.1.3 Agent coordination tooling

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Orca orchestration | the [first implementation](https://github.com/stablyai/orca/pull/1188), merged on 28 April 2026, supplies reference-implementation evidence; the [orchestration documentation](https://orca.dev/docs/cli/orchestration) describes the experimental coordinator, workers, ask and reply, and gates. It is watched as a way agent hosts coordinate; since ROOMS-CHANNEL and ORCA-FIRST, 20 November 2026, its mail is the channel between Cairn sessions in Orca. | 2026-11-15 |
| Gas City | the [open-source orchestrator](https://github.com/gastownhall/gascity) supplies reference-implementation evidence; the [software-factory guide](https://gascity.com/guide/ai-software-factory/) describes Beads-backed durable work, configured coding workflows, routing, retries, and review gates. | 2026-11-15 |

These sources establish two implemented coordination tools and their primary abstractions. They do not establish comparative fitness, cross-tool interoperability, or a Knowledge Islands adoption decision.

[Back to contents](#contents)

#### 2.1.4 Agent-owned browser runtimes

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Obscura | the [open-source implementation](https://github.com/h4ckf0r0day/obscura) documents a self-hosted Rust browser engine with CDP, Playwright, Puppeteer, rendering, storage, and MCP surfaces. The [product description](https://obscura.sh/#how) emphasises isolated zero-state sessions; that supports isolation while leaving authenticated-profile provisioning and recurring ChatGPT fidelity for local evaluation. | 2026-11-15 |

[Back to contents](#contents)

#### 2.1.5 Structural vocabulary evidence

These sources bound recurring architecture terms without treating them as protocols or comparable standards in the radar snapshot.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Agent loop | the [OpenAI Agents SDK run loop](https://openai.github.io/openai-agents-js/guides/running-agents/) repeatedly invokes a model, interprets a final output, handoff, or tool call, and stops on final output or a bounded turn limit. | 2026-11-15 |
| Supervisor or branching tree | the [OpenAI multi-agent guide](https://openai.github.io/openai-agents-js/guides/multi-agent/) and Anthropic's [multi-agent research system account](https://www.anthropic.com/engineering/multi-agent-research-system) describe a coordinating agent retaining responsibility while delegating bounded work, often in parallel, to specialists. A concrete system can include retries or shared workers and therefore need not be a literal tree. | 2026-11-15 |
| Graph-orchestrated execution | the [LangGraph Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api) models executable shared state with nodes and edges, including cycles, conditional branches, joins, and parallel fan-out. | 2026-11-15 |
| Knowledge graph | [RDF 1.1 Concepts](https://www.w3.org/TR/rdf11-concepts/) supplies a stable graph data model of subject-predicate-object triples. The broader term "knowledge graph" is not necessarily RDF and does not imply an execution engine. | 2026-11-15 |
| Provenance graph | the W3C [PROV data model](https://www.w3.org/TR/prov-dm/) and [PROV-O ontology](https://www.w3.org/TR/prov-o/) model entities, activities, agents, derivation, use, generation, attribution, and responsibility. Provenance records lineage; it is not itself workflow execution or domain knowledge. | 2026-11-15 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| AHP-RADAR | AHP adoption is tracked per agent host, each absence dated counter-evidence on the AHP subject; Orca orchestration is assessed, watched and never adopted as a channel between Agora sessions | 2026-11-10 | `radar.toml`, [4.2.2](standard-agentic-radar.md#422-subjects) | taken |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Agentic systems guild: REFRESH redirects to the backpack, and the card rule and its check speak of the backpack holding `ki-agentic-systems`. No criterion changed and no outside source refreshed.

The review log records outcomes, newest first; source freshness is tracked in each source row so an old log entry does not read as a stale source.

| Review | Outcome | Date |
| --- | --- | --- |
| Change 50 alignment | The Orca orchestration entry, in `radar.toml` and its source row, brought to ROOMS-CHANNEL and ORCA-FIRST, which Kris took on 20 November 2026 in the Cairn summit's change 50: its mail is the channel between Cairn sessions in Orca, and the rest is still watched. Stance and evidence unchanged; no source refreshed. | 2026-11-20 |
| Agentic systems guild review | From the Cairn summit's change 10: `standards-agentic-radar.md` renamed `standard-agentic-radar.md` and reshaped, its rules unchanged under numbered sections; this file took the sources format, each source group's bullets becoming table rows with their reviewed date, the review log newest first, AHP-RADAR as a decision and the open watch items under Watching. No rule changed and no outside source was refreshed. | 2026-11-18 |
| Weekly review | Every source re-read. ACP's latest stable schema is now v1.32.0 (2026-11-14): of the releases since v1.25.0 only v1.30.0 (2026-11-09) stabilises anything, the client system prompt, and v2 has reached alpha 16; the release records are added and the subject's assessment is unchanged. AHP released spec v1.1.0 (2026-11-12), which promotes no channel and adds an experimental TCP channel, with a 1.2.0 draft published; pi-ahp and ahpd now state 1.0.0 support and the implementation catalogue lists more independent clients and hosts, which fires the 1.0 host-adoption return trigger and is held for the owner. Orca, Claude Desktop, ChatGPT Desktop and ChatGPT Mobile still name no AHP support. Orca's documentation moved to orca.dev and its orchestration panel is temporarily unavailable; VS Code's nested `AGENTS.md` caveat moved to its custom instructions reference; Cloudflare's page now documents MCP servers only. RDF 1.2 Concepts is a Candidate Recommendation draft of 2026-11-13, so RDF 1.1 stays the cited Recommendation. MCP, A2A, AGENTS.md, W3C, Gas City, Obscura and the other structural sources unchanged; no stance or movement changed. | 2026-11-15 |
| AHP adoption signal | AHP-RADAR: AHP adoption is tracked per agent host. Orca, Claude Desktop, ChatGPT Desktop and ChatGPT Mobile each show no AHP support, recorded as dated counter-evidence on the AHP subject; Orca orchestration added as a new assessment subject, watched and never adopted as a channel between Agora sessions. Other subjects not refreshed. | 2026-11-10 |
| Weekly review | ACP schema v1.25.0 (2026-10-09) stabilizes session notices and session compaction on wire protocolVersion 1; v2.0.0 alpha 8 also released (pre-stable counter-evidence). MCP, AHP, A2A, AGENTS.md, W3C, Gas City, and Obscura unchanged. | 2026-10-19 |
| Disposition | The 2026-09-26 AHP finding is closed: implementation multiplicity is recorded, interoperability remains unwitnessed, the assess stance is unchanged, and the open cross-implementation watch item carries the follow-up. | 2026-10-06 |
| Weekly review | AHP released spec v1.0.0 (2026-10-02), firing its 1.0 return trigger; specification maturity moves from versioned to stable on normative text plus governance release, while interoperability stays untested, stance stays assess, and a new trigger tracks 1.0 host adoption and the six sub-Stable channels. ACP advanced to schema v1.24.1 and v2 alpha 7 (2026-09-30) with only unstable additions. Repointed the ki-env-binding, Codex AGENTS.md, and AGENTS.md governance sources to reachable primary pages. MCP, A2A, AGENTS.md, W3C, Obscura, and Gas City unchanged. | 2026-10-06 |
| Coordination-tooling signal | Added Gas City as a new assessment subject without adoption inference. | 2026-09-26 |
| Weekly review | ACP advanced to stable schema v1.23.0 and v2 alpha 5; AHP now has multiple independent hosts, while interoperability remains untested; other stances remain unchanged. | 2026-09-26 |
| Browser-runtime signal | Added agent-owned isolated browser runtimes for assessment, with Obscura as reference implementation and a bounded local trial required before adoption. | 2026-09-22 |
| Weekly review | ACP schema releases and AHP release plus independent implementation accepted; other subject stances unchanged. | 2026-09-17 |
| Initial evidence set | Six subjects and structural vocabulary reviewed. | 2026-09-14 |

Return triggers: new protocol release, governance transfer, independent implementation, published conformance result, cross-implementation demonstration, deprecation, or a Knowledge Islands use case requiring reassessment.

Agent Client Protocol is disambiguated from similarly named IBM and AGNTCY protocols; structural vocabulary remains outside the subject registry where the schema would misclassify it.

**Watching:**

- Seek public cross-implementation conformance or interoperability results for AHP, A2A, and AGENTS.md rather than inferring them from package or implementation counts.
- On 2026-11-15 pi-ahp and ahpd state AHP 1.0.0 support, which fires the AHP subject's return trigger for independent hosts adopting 1.0. The subject's uncertainty still says both independent hosts target 0.9.0, and the ACP subject's still names v1.25.0 and v2 alpha 8; both await the owner's reassessment.

[Back to contents](#contents)
