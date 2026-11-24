---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T11:34:09Z
ki-refresh: external-spec · monthly
---

# Sources — where the standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Official MCP specification](#211-official-mcp-specification)
    - [2.1.2 Source distribution](#212-source-distribution)
    - [2.1.3 In-house (the workspace convention)](#213-in-house-the-workspace-convention)
  - [2.2 Advisory](#22-advisory)
    - [2.2.1 Community](#221-community)
- [3. Last review](#3-last-review)

## 1. Introduction

The authoritative and community sources behind the [Workspace MCP Standard](standard-mcp-servers.md), the [MCP shared-code standard](standard-mcp-shared-code.md), the [MCP source-distribution standard](standard-mcp-distribution.md) and the [Audit Rubric](rubric.md). Mode REFRESH reads this file, re-fetches each source, diffs it against the standards, rubric, and [`scripts/rubric/items/index.ts`](../scripts/rubric/items/index.ts), then **bumps the `last reviewed` dates** and refreshes the [Last review](#3-last-review) block below (what changed is recorded in the commit, not a changelog). This is the skill's memory of where the standard comes from—keep it current.

Two layers feed the standard: the **official MCP specification** (what every conformant server must do) and the **in-house workspace convention** (the opinionated shape the seven sibling repos share on top of the spec). A finding is only "spec-driven" if it traces to the Authoritative table; everything else is house style and should be labelled as such so it is not mistaken for a protocol requirement.

[Back to contents](#contents)

## 2. Outside sources

The official MCP specification and the source-distribution references govern, with the in-house workspace convention for house style; the community sources inform judgement.

### 2.1 Authoritative

The specification, the source-distribution references, then the in-house convention.

#### 2.1.1 Official MCP specification

The spec is versioned by date. Track the **latest released** version and note the current one here.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| SPEC — [MCP spec — versioning / latest][spec] | Which dated revision is current and whether a released SDK supports it | 2026-11-23 |
| CHANGELOG — [2026-07-28 changelog][changelog] | What changed since 2025-11-25 (stateless core, `server/discover`, required `resultType`, Multi Round-Trip Requests, tasks moved to an extension, transport-session and SSE-resumability removals) | 2026-11-23 |
| SDK — [TypeScript SDK releases][sdk] | Which dated revision is current and whether a released SDK supports it | 2026-11-23 |
| TOOLS — [Server → Tools, 2025-11-25][tools] | Legacy profile: tool shape, `inputSchema`/`outputSchema`, `structuredContent`, annotations, `isError` vs protocol errors, tool-name charset/length, `icons`, `execution.taskSupport` | 2026-11-23 |
| TOOLS — [Server → Tools, 2026-07-28][tools-2026] | Modern profile: the same, with `structuredContent` any JSON value conforming to `outputSchema`, deterministic `tools/list` ordering, and `resultType` on every result | 2026-11-24 |
| SEC — [Security Best Practices, 2025-11-25][sec] | Confused deputy, token passthrough, SSRF, session hijacking, scope minimization, local-server compromise | 2026-11-23 |
| SEC — [Security Best Practices, 2026-07-28][sec-2026] | The same, with state-handle hijacking in place of session hijacking, and mix-up and localhost-redirect attacks | 2026-11-24 |
| AUTH — [Authorization, 2025-11-25][auth] | OAuth 2.1 framework, token audience, PKCE, dynamic client registration — relevant to the gmail / m365 auth-servers | 2026-11-23 |
| AUTH — [Authorization, 2026-07-28][auth-2026] | The same, with Client ID Metadata Documents asked of authorization servers and clients, Dynamic Client Registration deprecated, and issuer validation of authorization responses | 2026-11-24 |

All six original sibling repositories now declare the v2 server package (2.4.0) and so select the 2026-07-28 profile; two newer repositories (`mcp-acquire-whatsapp`, `mcp-housekeeping-chatgpt`) declare the v1 SDK (`^1.32.2`) and the 2025-11-25 profile.

[Back to contents](#contents)

#### 2.1.2 Source distribution

These primary sources ground the separate source-install contract. They do not make package or registry publication mandatory.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| SEMVER — [Semantic Versioning 2.0.0][semver] | Version grammar and precedence | 2026-11-23 |
| GIT-TAG — [Git tag documentation][git-tag] | Annotated release tags and object identity | 2026-11-23 |
| GITHUB-RELEASE — [GitHub release management][github-release] | Owner-designated stable release marker | 2026-11-23 |
| BUN-INSTALL — [Bun install documentation][bun-install] | Frozen lockfile installation | 2026-11-23 |
| BUN-LOCK — [Bun lockfile documentation][bun-lock] | Committed dependency evidence | 2026-11-23 |

[Back to contents](#contents)

#### 2.1.3 In-house (the workspace convention)

The standard is defined as the **majority shape** across the seven sibling repos under `knowledgeislands/`. These are the living source of truth for house style; when they diverge from each other, the majority wins and the outlier is a finding unless documented.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| REPOS — The seven sibling repos † | Layout, config injection, tool naming, the shared `utils/` helpers, the package/tsconfig/vitest/biome toolchain | 2026-11-23 |
| CLAUDE — Each repo's own `AGENTS.md` | Per-repo invariants: the per-repo statement of its own invariants — the standard tracks these and flags drift | 2026-11-23 |

† Every server that declares `[skills.ki-repo-mcp]`: `mcp-git-audit`, `mcp-ki-kb-fs`, `mcp-gsuite`, `mcp-m365`, `mcp-housekeeping-claude`, `mcp-housekeeping-chatgpt` and `mcp-acquire-whatsapp`. The sixth original, `mcp-ki-kb-notion-mirror`, was deleted on 26 October 2026.

[Back to contents](#contents)

### 2.2 Advisory

The community sources.

#### 2.2.1 Community

| Source | Informs | Last reviewed |
| --- | --- | --- |
| COMMUNITY — [Tool Annotations as Risk Vocabulary (MCP blog)][annotations] | What the `*Hint` annotations can and can't do — anchors the annotation-driven gate | 2026-11-23 |
| REGISTRY — [GitHub MCP Registry][github-mcp] | MCP server discovery and integration examples; catalogue entries are discovery evidence, not protocol requirements | 2026-11-23 |
| LOCAL-SEC — [Local Server Security (MCP docs, 2026-07-28)][local-sec] | Local stdio threat model: the client and a stdio server share one trust domain, so provenance, version pinning, per-server credentials, narrow filesystem roots and egress control are operator controls; informs the security invariants, not a protocol requirement | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-fetched or re-read every listed source and found the standards, rubric and item modules still follow them. 2026-07-28 is still the latest released MCP revision, the TypeScript SDK is at 2.4.0 and the v1 SDK at 1.32.2, the 2025-11-25 TOOLS, SEC and AUTH pages and the source-distribution references are unchanged in substance, and LOCAL-SEC joined the advisory sources. On 24 November 2026 the 2026-07-28 TOOLS, SEC and AUTH pages were read and cited beside 2025-11-25's, and the structured-output rule now follows the server's protocol profile. The six v2 sibling repositories declare the current SDK and the 2026-07-28 profile; `mcp-acquire-whatsapp` and `mcp-housekeeping-chatgpt` stay on the v1 SDK.

**Watching:**

- Assess the 2026-07-28 error-code range and cacheable-result fields for the modern profile; deterministic ordering is already codified.
- Migration of the two v1 repositories, and `mcp-cairn`'s SDK pin and profile when a checkout is available.
- The majority basis counts seven declaring servers and has not been recounted since `mcp-cairn` joined the server lists.
- Skills over MCP (SEP-2640): an extension the SDK now ships; watch whether it touches server shape.
- Rate limiting for any future remote server, and the open annotation vocabulary proposals.

[Back to contents](#contents)

[spec]: https://modelcontextprotocol.io/specification
[changelog]: https://modelcontextprotocol.io/specification/2026-07-28/changelog
[sdk]: https://github.com/modelcontextprotocol/typescript-sdk/releases
[tools]: https://modelcontextprotocol.io/specification/2025-11-25/server/tools
[sec]: https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices
[auth]: https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
[tools-2026]: https://modelcontextprotocol.io/specification/2026-07-28/server/tools
[sec-2026]: https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices
[auth-2026]: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization
[annotations]: https://blog.modelcontextprotocol.io/posts/2026-03-16-tool-annotations/
[github-mcp]: https://github.com/mcp
[local-sec]: https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/local-server-security
[semver]: https://semver.org/
[git-tag]: https://git-scm.com/docs/git-tag
[github-release]: https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository
[bun-install]: https://bun.sh/docs/pm/cli/install
[bun-lock]: https://bun.sh/docs/pm/lockfile
