---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T23:56:44Z
ki-refresh: canonical · on-change
---

# Sources — ki-env-binding

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house](#211-in-house)
    - [2.1.2 External specifications](#212-external-specifications)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind the [cross-surface binding standard](standard-cross-surface-binding.md), the [credential access standard](standard-credential-access.md) and the [rubric](rubric.md). Mode REFRESH re-examines each source, confirms the standard still matches, bumps the `last reviewed` dates, and refreshes the Last review block. The commit records what changed.

[Back to contents](#contents)

## 2. Outside sources

The standard follows the canonical source it keeps, the MCP transport vocabulary and mcporter's configuration. Runtime-native config and plugin sources are tracked by their binding adapters.

### 2.1 Authoritative

The house's canonical source, then the outside specifications.

#### 2.1.1 In-house

| Source | Governs | Last reviewed |
| --- | --- | --- |
| SRC — Canonical XDG `mcp-servers.yaml` | House-owned portable location, closed schema, and client targeting | 2026-08-12 |
| CREDS — the chezmoi source's credential helpers, `~/bin/chezmoi/op-cache`, `chezmoi-op` and `~/bin/cf-token` | The readers the credential access standard names, their call forms and cache | 2026-11-22 |

[Back to contents](#contents)

#### 2.1.2 External specifications

| Source | Governs | Last reviewed |
| --- | --- | --- |
| MCP — [MCP transports](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports) | Protocol transport vocabulary | 2026-08-12 |
| MCPORTER — [mcporter configuration](https://github.com/openclaw/mcporter/blob/main/docs/config.md) | Explicit config selection, merged target caveat, and definition representation | 2026-08-12 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| CRED-HOME a | Credential access lives in `ki-env-binding` as a new standard, `standard-credential-access.md`, holding the Cloudflare `~/bin/cf-token` rule (from `ki-repo-website-cloudflare` 4.7, under CF-CREDENTIALS a) and the 1Password `~/bin/chezmoi/op-cache` rule (from `ki-delegation` 4.6.1); the description widens from MCP to tools and access; the old places become one-line pointers, and `ki-delegation` 4.6.4 stays the authority rule. Kris, 22 November 2026, about 21:30 GMT, the Environment guild's sitting, card: "ki-env-binding, both rules"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [Credential access standard](standard-credential-access.md#1-introduction) | In force |
| CF-CREDENTIALS a | `ki-repo-website-cloudflare` 4.7, getting Cloudflare credentials through `~/bin/cf-token` short-lived least-privilege tokens, moves to the Environment guild as an access rule beside `ki-env-binding`, not `ki-delegation`, whose 4.6.4 stays the authority rule on runs that may change them; 4.8's Zero Trust naming stays in the Cloudflare skill. Kris, 22 November 2026, about 20:35 GMT, the Repository guild's sitting, card: "Move to Environment". | 2026-11-22 | [Credential access standard, 4.2](standard-credential-access.md#42-cloudflare-through-cf-token) | In force |
| OP-CACHE | "agents should be using cached_op": an authorised 1Password read goes through the managed cached reader, not repeated `op` calls; first held in `ki-delegation`'s authority tiers. Kris, 30 October 2026. | 2026-10-30 | [Credential access standard, 4.1](standard-credential-access.md#41-1password-through-the-cached-reader) | In force |
| RUN-SECRETS | Kris adopted the Cloudflare half: a run separately authorised to read Cloudflare credentials reads them only through `~/bin/cf-token`, as an access rule, not authority for a credential read or a Cloudflare operation; first held in `ki-repo-website-cloudflare` 4.7. | 2026-10-25 | [Credential access standard, 4.2](standard-credential-access.md#42-cloudflare-through-cf-token) | In force |
| MCP-SURFACES | Where a KI MCP server is turned on belongs to the Environment guild's binding skills, not `ki-repo-mcp`: what `ki-repo-mcp`'s cross-surface enablement standard held beyond `ki-env-binding` and `ki-env-binding-claude` moved into them after a line-by-line check, its claude.ai connector control standard moved whole into `ki-env-binding-claude` with its sources, and `ki-repo-mcp` keeps only what an MCP repository ships, with a pointer. Taken by the Cairn summit's guardian, 19 November 2026, under GUARDIAN-LANDS a, from the summit's change 10. Reversible; Kris can overturn it. | 2026-11-19 | [Edits flow through the source](standard-cross-surface-binding.md#43-edits-flow-through-the-source) | In force |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 the Environment guild's landing, from the Cairn summit's change 10, step 6.3, applied CRED-HOME a and CF-CREDENTIALS a, recorded under [Decisions](#3-decisions): the new [credential access standard](standard-credential-access.md) holds the 1Password cached-reader rule from `ki-delegation` and the Cloudflare `cf-token` rule from `ki-repo-website-cloudflare`, with their rules unchanged, and the description widens from MCP to tools and access. No criterion changed and no outside source refreshed.

On 19 November 2026 MCP-SURFACES, recorded under [Decisions](#3-decisions), brought in from `ki-repo-mcp`'s retired cross-surface enablement standard the two portable rules this one lacked: a surface never becomes a second authored registry, fan-out is a binding concern, and an unportable server is reported, never silently dropped. No outside source refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the files into the formats: [the cross-surface binding standard](standard-cross-surface-binding.md), formerly `standards-cross-surface-binding.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

- 2026-08-12 — The canonical source, MCP transports and mcporter configuration reviewed.

**Watching:** the source schema and mcporter's representation; re-anchor this root when either changes.

[Back to contents](#contents)
