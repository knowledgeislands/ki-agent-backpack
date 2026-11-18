---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:50:00Z
ki-status: in force
---

# MCP source-distribution standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Purpose](#41-purpose)
  - [4.2 Release identity](#42-release-identity)
  - [4.3 Repository evidence](#43-repository-evidence)
  - [4.4 Resolution](#44-resolution)
  - [4.5 Build and activation hand-off](#45-build-and-activation-hand-off)
  - [4.6 Provenance receipt](#46-provenance-receipt)
  - [4.7 Audit and conformance](#47-audit-and-conformance)

## 1. Introduction

How a Knowledge Islands MCP server is distributed as governed, versioned Git source: the release evidence its repository supplies and the hand-off to the installer. The sources and decisions behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The source-release contract between an MCP server repository and the installer.

### 2.1 In scope

- Release identity, repository evidence and version resolution.
- The build and activation hand-off and the provenance receipt.
- What audit reports and what CONFORM may repair.

[Back to contents](#contents)

### 2.2 Out of scope

- Installation paths, command syntax, staging, activation, rollback, update, uninstall and receipt storage: `tools-ki`.
- Client configuration: `ki-env-binding`.
- When to release: the `ki-repo-tools` release-on-demand policy.
- Registry, npm, MCPB and compiled-executable publication, which stay optional.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Install identity** | The lowercased GitHub `owner/repository` derived from the repository's `origin`. **Standard:** this one, [4.2](#42-release-identity) |
| **Release identity** | An annotated `v<SemVer>` tag, the full commit it resolves to, the same SemVer in `package.json`, and the declared MCP entry point. **Standard:** this one, [4.2](#42-release-identity) |
| **Provenance receipt** | The machine-readable record the installer retains for every completed installation. **Standard:** this one, [4.6](#46-provenance-receipt) |

[Back to contents](#contents)

## 4. Rules

The purpose, then the release evidence, how a version is resolved, built and recorded, and what audit and CONFORM do.

### 4.1 Purpose

Knowledge Islands MCP servers are distributed as governed, versioned Git source. A server does not need to publish its package to npm, the official MCP Registry, Homebrew, or another package registry to be installable.

This standard defines the evidence a server repository supplies to an installer. `tools-ki` owns installation paths, command syntax, staging, activation, rollback, update, uninstall, and receipt storage. `ki-env-binding` owns client configuration, and website discovery may advertise a command only after the installer exists.

[Back to contents](#contents)

### 4.2 Release identity

The install identity is the lowercased GitHub `owner/repository` derived from the repository's `origin`. The release identity is all of:

- an annotated tag named `v<SemVer>`;
- the full commit object ID resolved from that tag;
- the same SemVer value in `package.json`;
- the declared MCP entry point `dist/mcp-server/index.js`.

The commit object ID is the immutable build input. A branch head, including the default branch, is development input and must never be represented as a released version. A tag alone is insufficient provenance because repository owners can ordinarily move or delete tags.

[Back to contents](#contents)

### 4.3 Repository evidence

An installable release supplies these facts without another descriptor:

| Fact | Canonical evidence |
| ---- | ------------------ |
| MCP applicability | keyless `[skills.ki-repo-mcp]` in `.ki.toml` |
| Owner and repository | Git `origin` |
| Version | `package.json` and matching `v<SemVer>` tag |
| Immutable revision | full commit object ID resolved from the tag |
| Build | `scripts.build` in `package.json` |
| Dependencies | committed `bun.lock` or retained legacy `bun.lockb` |
| Entry point | `main`, `bin`, and exports governed by `ki-repo-mcp` |

A separate release descriptor would duplicate these values and create a drift surface, so this contract defines none. If a future installer needs a fact that these sources cannot provide, the Harness must first amend this standard and prove why the new field is not duplicative.

[Back to contents](#contents)

### 4.4 Resolution

An explicit version selects exactly `v<SemVer>`. Omitting the version may select only the repository owner's latest stable GitHub Release marker; it must not select a default branch, the newest Git tag by lexical order, or a prerelease. The installer then freezes the selected tag and full commit before building.

Public and private repositories use the same contract. A private source is eligible when the operator's existing Git credentials can read the selected tag and commit. The installer must not change repository visibility or establish credentials.

[Back to contents](#contents)

### 4.5 Build and activation hand-off

The installer checks out or downloads the selected commit into a staging location outside a working checkout, verifies the repository identity and tag-to-commit resolution, installs with the committed lockfile in frozen mode, runs the governed build, and verifies the declared MCP entry point. It may activate the staged version only after every step succeeds.

The repository contract does not prescribe the final XDG location or active-version link. Those are product behaviours owned by `tools-ki`.

[Back to contents](#contents)

### 4.6 Provenance receipt

For every completed installation, the installer retains a machine-readable receipt containing at least:

- repository identity;
- selected tag;
- full commit object ID;
- `package.json` version;
- MCP entry point;
- installation time;
- installer schema version and active-version state.

Before activation, the installer compares the receipt fields with the staged source evidence. A mismatch stops activation. Update and rollback create or select complete versioned installations; they do not mutate an active directory in place.

[Back to contents](#contents)

### 4.7 Audit and conformance

`ki-repo-mcp` keeps invalid package versions, missing build scripts, unsafe or untracked lockfiles, invalid GitHub repository identity, invalid HEAD commits, and malformed release markers at WARN. An otherwise valid development HEAD with no matching `v<SemVer>` tag is neutral INFO: it is valid development source but not installable release evidence. A matching lightweight tag remains WARN because it appears to mark a release without satisfying the annotated-tag contract. PASS release evidence still requires the matching annotated tag at HEAD.

CONFORM may apply existing deterministic package entry-point repairs. It must not choose or change a version, create or move a tag, publish or designate a release, change an origin or visibility, authenticate to GitHub, generate a duplicative descriptor, or rewrite a release workflow. Those actions require repository-owner judgment. When to release follows the `ki-repo-tools` release-on-demand policy, which applies to MCP servers as to command-line tools.

Official MCP Registry metadata, `server.json`, release assets, npm publication, MCPB bundles, and compiled executables remain optional discovery or optimisation surfaces. None is a prerequisite for source installation.

[Back to contents](#contents)
