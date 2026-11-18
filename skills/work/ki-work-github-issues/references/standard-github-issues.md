---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:54:38Z
ki-status: in force
---

# GitHub Issues adapter standard

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

The contract of the `github-issues` adapter: how a repository selects GitHub Issues for its forward work, what its Issues carry, and where the adapter stops, its remote execution failing closed. The decisions and outside sources behind it are in the [sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How a repository uses GitHub Issues as its forward-work adapter.

### 2.1 In scope

- The adapter's configuration, what the local rubric inspects, and the declaration `ki-repo` consumes.
- An Issue as the remote record: its lifecycle, transfers and retention.
- How provider timestamps are projected.
- The execution boundary.

[Back to contents](#contents)

### 2.2 Out of scope

- Choosing an adapter, and the adapter contract every adapter shares: `ki-work`'s [change-management adapter standard](../../../keystone/ki-work/references/standard-change-management-adapters.md).
- Live repository settings and package metadata enforcement: `ki-repo`.
- The local record lifecycle: `ki-work-roadmap`.
- Remote execution: not implemented; this skill performs no remote reads or writes.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Current locator** | An Issue reference `<owner>/<repository>#<number>`, which a transfer may change; not a durable identity. **Standard:** this one, [4.1](#41-configuration-and-local-inspection) |
| **Transfer** | Moving an open Issue to another repository: an authority-gated migration stop, not a normal lifecycle transition. **Standard:** this one, [4.2](#42-lifecycle-migration-and-retention) |

[Back to contents](#contents)

## 4. Rules

Configuration first, then the remote record's lifecycle, its timestamps and the execution boundary.

### 4.1 Configuration and local inspection

Select the adapter, name one current GitHub repository namespace, and make the repository's lifecycle metadata decision inspectable locally.

```toml
[skills.ki-work]
adapter = "github-issues"

[skills.ki-work-github-issues]
repository = "owner/repository"
metadata_owner = "repository-maintainers"
dependencies = "native Issue blocked-by/blocking relations"
hierarchy = "native sub-issues only; not a blocker relation"

[skills.ki-work-github-issues.lifecycle]
queue = "label: queued"
ready = "label: ready"
review = "label: awaiting-review"
done = "closed"
```

`repository` is the configured Issue namespace. `<owner>/<repository>#<number>` is a current mutable locator, not a durable identity: an open Issue transfer changes its namespace and may change its number. The old URL redirects, but retain the old locator only as historical alias evidence. Do not infer a canonical cross-transfer identifier, including an API ID, without a separately evidenced identity decision.

The `lifecycle` table names exact remote values for queue, readiness, review, and done. `metadata_owner` names the authority that resolves a label, Issue-field, or Project-field conflict; `dependencies` and `hierarchy` are separate non-empty mappings and must never silently be treated as interchangeable. The local rubric checks that this declaration is complete, but it does not contact GitHub or prove that the remote configuration matches it.

The root `[skills.ki-work-github-issues]` declaration is also the repository-local authority consumed by `ki-repo`: it requires the GitHub Issues feature to be enabled and `package.json` `bugs` to carry the canonical `https://github.com/<owner>/<repository>/issues` URL. Without that root declaration, `ki-repo` requires Issues disabled and the `bugs` field absent. This adapter owns the selection meaning; `ki-repo` owns live repository settings and package metadata enforcement.

[Back to contents](#contents)

### 4.2 Lifecycle, migration, and retention

An Issue is the remote record. Its body and comments are the intended locations for plan, delivery, and review evidence. Never infer readiness from `open` or acceptance from a merged pull request. `done` maps to the declared closed value; closed Issues are retained evidence. This adapter defines no archive or delete/prune operation.

A transfer is an authority-gated migration stop, not a normal lifecycle transition. Before any future authorised operation, a remote executor must re-resolve the current repository and locator, verify the Issue is not a pull request, inspect the current lifecycle fields and retained aliases, identify transferred labels/milestones that did not survive, and obtain fresh authority for the new write set. This skill performs none of those reads or writes.

[Back to contents](#contents)

### 4.3 Timestamp projection

The adapter projects GitHub's provider-native Issue creation and update timestamps as portable `created_at` and `updated_at` values. It does not duplicate them into the Issue body or treat a KI read as a provider update. The executor must return the post-write provider timestamp with its opaque snapshot evidence rather than manufacture a local timestamp.

[Back to contents](#contents)

### 4.4 Execution boundary

Remote discovery, authentication, filtering, stale-read checks, conflict handling, and every mutation fail closed. A future executor must re-read each Issue immediately before an approved write and stop on changed lifecycle metadata, conflicting human updates, missing permissions, an uncertain current locator, or an Issue response that represents a pull request.

[Back to contents](#contents)
