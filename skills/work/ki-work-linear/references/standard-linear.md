---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:54:38Z
ki-status: in force
---

# Linear adapter standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Configuration and local inspection](#41-configuration-and-local-inspection)
  - [4.2 Lifecycle, migration, and retention](#42-lifecycle-migration-and-retention)
  - [4.3 Timestamp projection](#43-timestamp-projection)
  - [4.4 Execution boundary](#44-execution-boundary)

## 1. Introduction

The contract of the `linear` adapter: how a repository selects Linear for its forward work, what its Issues carry, and where the adapter stops, its remote execution failing closed. The decisions and outside sources behind it are in the [sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How a repository uses Linear as its forward-work adapter.

### 2.1 In scope

- The adapter's configuration and what the local rubric inspects.
- A Linear Issue as the remote record: its lifecycle, team moves and retention.
- How provider timestamps are projected.
- The execution boundary.

[Back to contents](#contents)

### 2.2 Out of scope

- Choosing an adapter, and the adapter contract every adapter shares: `ki-work`'s [change-management adapter standard](../../../keystone/ki-work/references/standard-change-management-adapters.md).
- The local record lifecycle: `ki-work-roadmap`.
- Remote execution: not implemented; this skill performs no remote reads or writes.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Current locator** | A team-scoped Issue identifier such as `ENG-123`, which a team move changes; not a durable cross-team identity. **Standard:** this one, [4.1](#41-configuration-and-local-inspection) |
| **Team move** | Moving an Issue to another team: an authority-gated migration stop, not a normal lifecycle transition. **Standard:** this one, [4.2](#42-lifecycle-migration-and-retention) |

[Back to contents](#contents)

## 4. Rules

Configuration first, then the remote record's lifecycle, its timestamps and the execution boundary.

### 4.1 Configuration and local inspection

Select the adapter, name one current Linear team locator, and make the repository's lifecycle metadata decision inspectable locally.

```toml
[skills.ki-work]
adapter = "linear"

[skills.ki-work-linear]
team = "ENG"
metadata_owner = "team-workflow-owner"
dependencies = "documented Linear relation mapping"
hierarchy = "documented Linear parent/sub-issue mapping"

[skills.ki-work-linear.lifecycle]
queue = "Backlog"
ready = "Todo"
review = "In Review"
done = "Done"
```

`team` is a configured current locator prefix. `ENG-123` is a current team-scoped locator, not durable cross-team identity: a team move produces a new issue identifier and URL, while old locators remain searchable aliases. Do not claim that a Linear model UUID persists through a move without official proof.

The `lifecycle` table names exact remote workflow values for queue, readiness, review, and done. `metadata_owner` names the authority that resolves mapping conflicts; `dependencies` and `hierarchy` are separate non-empty mappings and must never silently be treated as interchangeable. The local rubric checks only declaration shape; it does not contact Linear or prove the remote workflow matches it.

[Back to contents](#contents)

### 4.2 Lifecycle, migration, and retention

A Linear Issue is the remote record. Its description and comments are the intended locations for plan, delivery, and review evidence. Never infer human acceptance from a workflow state name alone. Completion maps to the declared `done` value.

A team move is an authority-gated migration stop, not a normal lifecycle transition. Before any future authorised operation, a remote executor must re-resolve the current locator, team, workflow mapping, retained aliases, and fields that Linear may remap or clear, then obtain fresh authority for the new write set. This skill performs none of those reads or writes.

Linear archives closed inactive Issues automatically; it has no manual archive action. Deletion is distinct, recoverable only for Linear's documented retention period, and is not a KI prune operation. This adapter defines no archive, delete, or prune action.

[Back to contents](#contents)

### 4.3 Timestamp projection

The adapter projects Linear's provider-native Issue creation and update timestamps as portable `created_at` and `updated_at` values. It does not duplicate them into the Issue description or comments or treat a KI read as a provider update. The executor must return the post-write provider timestamp with its opaque snapshot evidence rather than manufacture a local timestamp.

[Back to contents](#contents)

### 4.4 Execution boundary

Remote discovery, authentication, stale-read checks, conflict handling, and every mutation fail closed. A future executor must re-read each Issue immediately before an approved write and stop on changed workflow metadata, concurrent human updates, missing permissions, uncertain current locator/team, or moved-field uncertainty.

[Back to contents](#contents)
