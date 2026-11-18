---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:17:46Z
ki-status: in force
---

# Codex state housekeeping standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Repository identity](#41-repository-identity)
  - [4.2 Inventory](#42-inventory)
  - [4.3 Deletion](#43-deletion)
  - [4.4 Interface maturity](#44-interface-maturity)

## 1. Introduction

The Codex delta to the session-source and deletion rules every agent host shares in `ki-env-housekeeping`: exact physical-repository session selection, a content-minimised review artifact and fail-closed permanent deletion. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

This standard governs explicit cleanup of persisted Codex threads for one selected physical repository.

### 2.1 In scope

- Active and archived thread inventory.
- Spawned-descendant impact.
- A review artifact.
- Stale-selection refusal.
- Permanent deletion.

[Back to contents](#contents)

### 2.2 Out of scope

- Automatic retention.
- Transcript inspection.
- Unsupported storage.
- Background terminals.
- Caches.
- Memories: [the Codex local-memory standard](standard-codex-memory.md).
- Recurring repository maintenance.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Physical repository** | The selected repository's Git root at its canonical real path; worktrees are distinct physical repositories. **Standard:** this one, [4.1](#41-repository-identity) |
| **Review artifact** | The schema-v1 inventory the adapter emits for review, holding thread identifiers and metadata but no content. **Standard:** this one, [4.2](#42-inventory) |
| **Descendant** | A thread spawned from a root thread, found through the experimental `ancestorThreadId` filter and deleted with its root. **Standard:** this one, [4.3](#43-deletion) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Repository identity

Resolve the selected repository to its physical Git root and canonical real path before starting app-server. Pass that exact path to separate active and archived `thread/list` queries. A thread matches only when its returned `cwd` equals that exact path byte-for-byte.

Parent, child, missing, null, relative, and symlink-alias working directories do not match. Worktrees remain distinct physical repositories for housekeeping purposes.

[Back to contents](#contents)

### 4.2 Inventory

The adapter initializes app-server with `experimentalApi` because complete impact review uses the experimental `ancestorThreadId` filter. It pages every active and archived result and pages descendants for each candidate.

The review artifact contains only:

- schema and protocol fingerprint;
- installed Codex version and generation time;
- selected physical repository;
- each root thread ID, archive state, creation and update timestamps, runtime status type, and complete descendant IDs.

It excludes preview, name, turns, items, transcript content, messages, commands, tool calls, and credentials. A candidate that appears as another candidate's descendant is not repeated as a root.

[Back to contents](#contents)

### 4.3 Deletion

Deletion is permanent and also removes spawned descendants. CONFORM requires:

1. a parseable schema-v1 review artifact;
2. one or more exact root IDs present in that artifact;
3. the selected physical repository matching the artifact;
4. the installed Codex version and protocol fingerprint matching the artifact;
5. a fresh active-and-archived inventory matching every selected root and its complete descendants; and
6. the exact confirmation phrase `PERMANENTLY_DELETE_SELECTED_CODEX_THREADS`.

Validate the complete selection before the first `thread/delete` request. Reject a missing, extra, duplicate, cross-repository, archived-state-drifted, timestamp-drifted, descendant-drifted, version-drifted, or protocol-drifted selection without deleting anything.

App-server offers no multi-root transaction. Once validation succeeds, delete selected roots sequentially and report every successful root. A transport or server failure after a successful delete is a material partial-execution concern and must be reported; never retry blindly.

[Back to contents](#contents)

### 4.4 Interface maturity

The `codex delete <SESSION>` CLI is the stable manual fallback for one reviewed saved session. It is not used for inventory or forced bulk deletion.

The app-server and descendant filter are experimental. The adapter therefore validates its narrow protocol shapes, records the installed version and a local protocol fingerprint, and fails closed on mismatch. Mandatory estate-wide activation remains outside this skill until separately approved rollout evidence exists.

[Back to contents](#contents)
