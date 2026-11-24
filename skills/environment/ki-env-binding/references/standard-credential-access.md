---
ki-document-type: standard@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-status: in force
---

# Credential access standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 1Password through the cached reader](#41-1password-through-the-cached-reader)
  - [4.2 Cloudflare through cf-token](#42-cloudflare-through-cf-token)
  - [4.3 Invariants](#43-invariants)

## 1. Introduction

This standard says **how an agent reaches a credential** in Kris's managed environment, once a task has separately authorised it to: 1Password through the managed cached reader and Cloudflare through `~/bin/cf-token`. It is the one home of both rules. The 1Password rule came from `ki-delegation`'s authority tiers and the Cloudflare rule from `ki-repo-website-cloudflare`'s hosting standard; both now point here.

These are access rules, never authority. Whether a run may read a credential or change a provider token at all is `ki-delegation`'s [authority tiers](../../../agentic-ecosystems/ki-delegation/references/standard-background-runs.md#46-authority-tiers), and its [provider tokens](../../../agentic-ecosystems/ki-delegation/references/standard-background-runs.md#464-provider-tokens) rule stays the authority on how a token's permissions may change. The rubric has no credential criterion; the sources are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The way an authorised read reaches a credential.

### 2.1 In scope

- Which reader an authorised 1Password read uses, how it is called and what it costs.
- Which helper an authorised Cloudflare credential read uses, and the short-lived token a run mints from it.
- Keeping credential values and ids out of output, notes and tracked files.

[Back to contents](#contents)

### 2.2 Out of scope

- Whether a run may read a credential, and how a token's permissions may change: `ki-delegation`'s authority tiers and provider tokens.
- The helpers themselves, `op-cache`, `chezmoi-op` and `cf-token`, which the chezmoi source manages.
- Cloudflare hosting, deployment and Zero Trust team naming: `ki-repo-website-cloudflare`.
- Credential references inside the MCP inventory, such as a 1Password-reference header: [the cross-surface binding standard](standard-cross-surface-binding.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Cached reader** | `~/bin/chezmoi/op-cache`, the managed reader that serves each 1Password item from a cache kept for a day. **Standard:** this one, [4.1](#41-1password-through-the-cached-reader) |
| **Minter** | The Cloudflare token, account-owned or user-owned, that `cf-token` gives a run so that it can mint its own short-lived token. **Standard:** this one, [4.2](#42-cloudflare-through-cf-token) |

[Back to contents](#contents)

## 4. Rules

One rule for each provider, then the invariants both keep.

### 4.1 1Password through the cached reader

When a task separately authorises a 1Password read, read only through the cached reader, `~/bin/chezmoi/op-cache "op://<vault>/<item>/<field>"`, with `OP_CACHE_SERVICE_ACCOUNT_ONLY=1`, and use `~/bin/chezmoi/op-cache --tag <tag> [--vault <vault>]` for discovery. Never call `op` directly or repeatedly: the reader caches each item for a day, so a run costs at most one read per item per day. Leave `chezmoi-op`, which manages the cache, to Kris. If the helper cannot read without a desktop prompt, stop and report; do not fall back to interactive access.

[Back to contents](#contents)

### 4.2 Cloudflare through cf-token

When a task separately authorises a Cloudflare credential read, read only through `~/bin/cf-token`. From it the run mints its own short-lived token with the least privilege the work needs, from the account's minter, or from the user-minter for user-level work such as the Workers Builds API, which takes only a user-owned token; it deletes each token after use and confirms that none is left.

[Back to contents](#contents)

### 4.3 Invariants

- **Access is not authority.** Neither rule grants a credential read, a token change or a provider operation; the task and `ki-delegation`'s tiers do.
- **Values stay out.** Credential values never enter output or tracked files, and no territory's notes record credential item or token ids.
- **No interactive fallback.** A helper that cannot serve the read stops the run with a report, never an interactive prompt or a direct `op` call.

[Back to contents](#contents)
