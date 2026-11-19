---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T07:00:00Z
ki-status: in force
---

# MCP shared-code standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Managed profile contract](#41-managed-profile-contract)
  - [4.2 Migration sequencing](#42-migration-sequencing)

## 1. Introduction

The contract for the optional managed shared-code profiles a server may declare, and the order they are piloted and migrated in. The inventory of shared utility code it rests on, a dated finding, is the [24 September 2026 inventory report](report-20260924-mcp-shared-code-inventory.md). The sources and decisions behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Shared utility code in repositories that declare both `ki-engineering` and `ki-repo-mcp`.

### 2.1 In scope

- The supported `legacy-v1-core` and `modern-v2-core` profiles, their manifest, and what CONFORM may project.
- The sequence for piloting and migrating profiles.

[Back to contents](#contents)

### 2.2 Out of scope

- The rest of a server's shape: the [Workspace MCP Standard](standard-mcp-servers.md).
- Each repository's own seams, such as `audit-log.ts`, which stay repository-owned.
- The 2026-09-24 inventory of shared utility candidates, its conclusions and matrix: a dated finding, in the [inventory report](report-20260924-mcp-shared-code-inventory.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Shared-code profile** | A supported whole-file projection of shared utilities, `legacy-v1-core` or `modern-v2-core`, declared as `profile` beneath `[skills.ki-repo-mcp]`. **Standard:** this one, [4.1](#41-managed-profile-contract) |
| **Managed file** | A complete regular file a profile projects, with a visible profile and version marker, whose digest the skill-owned manifest records. **Standard:** this one, [4.1](#41-managed-profile-contract) |
| **Repository-owned seam** | A separate file holding repository-specific behaviour, such as redaction, that a profile requires but does not manage. **Standard:** this one, [4.1](#41-managed-profile-contract) |

[Back to contents](#contents)

## 4. Rules

The managed profile contract, then the migration sequence.

### 4.1 Managed profile contract

The supported profiles are `legacy-v1-core` and `modern-v2-core`. Each manages an access gate, a complete annotation-preset vocabulary, and its SDK-compatible result envelopes. The declaration is `profile = "<profile>"` beneath `[skills.ki-repo-mcp]`.

The skill-owned `assets/shared-code/manifest.json` maps every profile source to one contained repository destination and records its SHA-256 digest. Managed files are complete regular files with a visible profile and version marker. Repository-owned seams sit in separate files; local edits inside a managed file are drift, not an extension mechanism.

Profile adoption is optional and explicit. An undeclared repository remains governed by the existing source-shape rubric without vendoring findings. A declared profile makes missing, modified, partial, unsafe, or obsolete managed files visible and reports unmarked utility files as preserved local extensions.

CONFORM may create only missing managed files when all destinations are contained beneath the repository, every parent directory is physical, every required local seam is a regular file, all present managed files match exactly, and no obsolete managed projection remains. It never overwrites modified bytes or removes files. Repeating CONFORM after a successful projection produces no writes.

`audit-log.ts` remains a required repository-owned seam in both profiles. Its rotation and callback shape are reusable, but redaction, server identity, previews, and error extraction are security policy. A later managed audit engine must accept those policies through separate repository-owned files before it can enter either profile.

[Back to contents](#contents)

### 4.2 Migration sequencing

1. Prove the two core profiles against Harness fixtures.
2. Pilot `modern-v2-core` in `mcp-git-audit`, whose utility coverage and relatively narrow result surface provide the safest modern boundary.
3. Extract and test the audit sanitizer seam before managing any `audit-log.ts`.
4. After a pilot proves byte-stable projection and drift detection, capture one bounded receiver item only in repositories that still need migration. Do not create seven speculative roadmap records from the [inventory](report-20260924-mcp-shared-code-inventory.md) alone.

[Back to contents](#contents)
