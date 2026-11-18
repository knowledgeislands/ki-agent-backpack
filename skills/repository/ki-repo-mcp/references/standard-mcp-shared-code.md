---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:50:00Z
ki-status: in force
---

# MCP shared-code standard and estate matrix

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Inventory scope](#41-inventory-scope)
  - [4.2 Conclusions](#42-conclusions)
  - [4.3 Exact-copy clusters](#43-exact-copy-clusters)
  - [4.4 Repository matrix](#44-repository-matrix)
  - [4.5 Managed profile contract](#45-managed-profile-contract)
  - [4.6 Migration sequencing](#46-migration-sequencing)

## 1. Introduction

The estate matrix of shared utility code across the MCP servers, and the contract for the optional managed shared-code profiles a server may declare. The sources and decisions behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Shared utility code in repositories that declare both `ki-engineering` and `ki-repo-mcp`.

### 2.1 In scope

- The 2026-09-24 inventory of shared utility candidates and its conclusions.
- The supported `legacy-v1-core` and `modern-v2-core` profiles, their manifest, and what CONFORM may project.
- The sequence for piloting and migrating profiles.

[Back to contents](#contents)

### 2.2 Out of scope

- The rest of a server's shape: the [Workspace MCP Standard](standard-mcp-servers.md).
- Each repository's own seams, such as `audit-log.ts`, which stay repository-owned.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Shared-code profile** | A supported whole-file projection of shared utilities, `legacy-v1-core` or `modern-v2-core`, declared as `profile` beneath `[skills.ki-repo-mcp]`. **Standard:** this one, [4.5](#45-managed-profile-contract) |
| **Managed file** | A complete regular file a profile projects, with a visible profile and version marker, whose digest the skill-owned manifest records. **Standard:** this one, [4.5](#45-managed-profile-contract) |
| **Repository-owned seam** | A separate file holding repository-specific behaviour, such as redaction, that a profile requires but does not manage. **Standard:** this one, [4.5](#45-managed-profile-contract) |

[Back to contents](#contents)

## 4. Rules

The inventory and what it found, then the managed profile contract and the migration sequence.

### 4.1 Inventory scope

This matrix records the 2026-09-24 read-only inventory of every repository that declares both `ki-engineering` and `ki-repo-mcp`. It classifies shared utility candidates before any canonical asset or receiver migration is chosen.

The inventory compared physical file digests, exports, SDK package family, colocated utility tests, imports, and behaviour-bearing differences. A matching filename or similar control flow is not evidence that two files have the same ownership or privacy contract.

[Back to contents](#contents)

### 4.2 Conclusions

- `access-level.ts` contains one stable algorithm but two SDK import profiles. Three modern repositories are byte-identical; two legacy housekeeping repositories are byte-identical. The remaining files differ mostly in comments, type aliases, or wrapper shape, except the WhatsApp variant's older SDK boundary.
- Every `annotations.ts` is byte-distinct because each server exposes a different capability set. The stable reusable concept is a complete preset vocabulary, not the current per-repository file bytes.
- Every `audit-log.ts` is byte-distinct. Rotation and callback wrapping are shared, while server identity, argument redaction, maximum preview length, and error extraction carry repository-specific security behaviour. A managed audit engine therefore needs an explicit repository-owned sanitizer seam; copying a majority file would be unsafe.
- Seven repositories have `results.ts`. ChatGPT and Codex housekeeping are byte-identical. Git Audit and Notion Mirror differ only in export order. Other differences are explainable by SDK result profile, text-result support, and domain error-envelope needs.
- `mcp-housekeeping-claude` and `mcp-acquire-whatsapp` currently construct results elsewhere. A profile must not create a new helper until its consumers are deliberately migrated.

[Back to contents](#contents)

### 4.3 Exact-copy clusters

| Surface | Exact current cluster | Classification |
| ------- | --------------------- | -------------- |
| Access gate | `mcp-gsuite`, `mcp-ki-kb-fs`, `mcp-m365` | Modern v2 candidate |
| Access gate | `mcp-housekeeping-chatgpt` | Legacy v1 candidate |
| Results | `mcp-housekeeping-chatgpt` | Legacy result candidate |
| Annotations | None | Capability variants |
| Audit log | None | Shared engine plus local security seam required |

[Back to contents](#contents)

### 4.4 Repository matrix

| Repository | SDK | Utility tests | Current classification | Receiver disposition |
| ---------- | --- | ------------: | ---------------------- | -------------------- |
| `mcp-acquire-whatsapp` | v1 | 3 | Legacy access variant; unique acquisition annotations and privacy redaction; no result helper | Keep repository-specific until legacy profile and sanitizer seam are proven |
| `mcp-git-audit` | v2 | 6 | Modern access near-match; full preset vocabulary; Git URL redaction; modern result helper | Candidate for modern profile pilot after asset fixtures pass |
| `mcp-gsuite` | v2 | 5 | Exact modern access cluster; remote annotations; mail/body redaction; text plus modern results | Candidate after local mail sanitizer seam is explicit |
| `mcp-housekeeping-chatgpt` | v1 | 4 | Exact legacy access and result clusters; read-only annotations; host-specific audit redaction | Existing host-configuration warning remains owned locally; profile migration separate |
| `mcp-housekeeping-claude` | v2 | 4 | Modern access near-match; destructive local annotations; host audit redaction; no result helper | Do not create result helper speculatively |
| `mcp-ki-kb-fs` | v2 | 4 | Exact modern access cluster; local read/write annotations; KB-path redaction; extended results | Candidate after local KB sanitizer and result extensions are explicit |
| `mcp-m365` | v2 | 7 | Exact modern access cluster; broad remote annotations; mail/body redaction; extended results | Candidate after local mail sanitizer and result extensions are explicit |

[Back to contents](#contents)

### 4.5 Managed profile contract

The supported profiles are `legacy-v1-core` and `modern-v2-core`. Each manages an access gate, a complete annotation-preset vocabulary, and its SDK-compatible result envelopes. The declaration is `profile = "<profile>"` beneath `[skills.ki-repo-mcp]`.

The skill-owned `assets/shared-code/manifest.json` maps every profile source to one contained repository destination and records its SHA-256 digest. Managed files are complete regular files with a visible profile and version marker. Repository-owned seams sit in separate files; local edits inside a managed file are drift, not an extension mechanism.

Profile adoption is optional and explicit. An undeclared repository remains governed by the existing source-shape rubric without vendoring findings. A declared profile makes missing, modified, partial, unsafe, or obsolete managed files visible and reports unmarked utility files as preserved local extensions.

CONFORM may create only missing managed files when all destinations are contained beneath the repository, every parent directory is physical, every required local seam is a regular file, all present managed files match exactly, and no obsolete managed projection remains. It never overwrites modified bytes or removes files. Repeating CONFORM after a successful projection produces no writes.

`audit-log.ts` remains a required repository-owned seam in both profiles. Its rotation and callback shape are reusable, but redaction, server identity, previews, and error extraction are security policy. A later managed audit engine must accept those policies through separate repository-owned files before it can enter either profile.

[Back to contents](#contents)

### 4.6 Migration sequencing

1. Prove the two core profiles against Harness fixtures.
2. Pilot `modern-v2-core` in `mcp-git-audit`, whose utility coverage and relatively narrow result surface provide the safest modern boundary.
3. Extract and test the audit sanitizer seam before managing any `audit-log.ts`.
4. After a pilot proves byte-stable projection and drift detection, capture one bounded receiver item only in repositories that still need migration. Do not create seven speculative roadmap records from this inventory alone.

[Back to contents](#contents)
