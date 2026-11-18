---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:55:17Z
ki-status: in force
---

# Trade-operations procedure

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Preflight](#41-preflight)
  - [4.2 Inspect routes and the Capital policy](#42-inspect-routes-and-the-capital-policy)
  - [4.3 Prepare and observe](#43-prepare-and-observe)
    - [4.3.1 Prepare](#431-prepare)
    - [4.3.2 Observe](#432-observe)
  - [4.4 Submit or abandon](#44-submit-or-abandon)
  - [4.5 Receive](#45-receive)
  - [4.6 List and show](#46-list-and-show)
  - [4.7 Release and prune](#47-release-and-prune)
  - [4.8 Finish](#48-finish)

## 1. Introduction

`ki-trade` applies the record, route, authority, and lifecycle contract owned by `ki-trades`. Every operation is local to the selected physical repository. `ki-trade` keeps no sources file of its own: the decisions and sources behind the contract it applies are in [`ki-trades`' sources file](../../ki-trades/references/sources.md).

[Back to contents](#contents)

## 2. Scope

How one repository operates its own side of a trade.

### 2.1 In scope

- The preflight every operation starts with.
- Inspecting routes and the Capital's policy.
- Preparing, observing, submitting and abandoning a preparation.
- Receiving, listing and showing records.
- Releasing and pruning, and reporting the result.

[Back to contents](#contents)

### 2.2 Out of scope

- The record, route, authority and lifecycle contract: `ki-trades`' [trade standard](../../ki-trades/references/standard-trades.md).
- The receiver's disposition of a received record: `ki-work next`.
- Changing a route or standing grant: a proposal to the Capital, under its own authority.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Operation** | One local `ki trade` action on the selected physical repository, such as `prepare`, `submit` or `receive`. **Standard:** this one, [4.1](#41-preflight) |
| **Observation cursor** | The host-local full commit reference of the last observed version of a preparation, the only thing observation writes. **Standard:** this one, [4.3.2](#432-observe) |
| **Release** | The sender's removal of its own outbound copy once the record's observation policy is satisfied. **Standard:** this one, [4.7](#47-release-and-prune) |
| **Prune** | The receiver's removal of its own inbound copy once the matching sender release is observable. **Standard:** this one, [4.7](#47-release-and-prune) |
| **Granted route** and **active route** | A route the Capital's policy grants, and one whose peer is also registered and participating. **Standard:** `ki-trades`' [trade standard](../../ki-trades/references/standard-trades.md#432-resolution-and-activation) |

[Back to contents](#contents)

## 4. Rules

The procedure, step by step.

### 4.1 Preflight

1. Resolve the selected physical Git root and its declared `ki-repo` identity.
2. Run `ki repo audit --skill ki-trades --repo <root>` and stop on a failure or warning. Re-run it after a mutation. These are operator checks: the current trade host does not establish them as pre/post transaction enforcement. A pending one-sided export route may support preparation but not receipt.
3. Resolve every peer only through the registered repository inventory and canonical repository identity. Filesystem visibility alone grants no route or write authority.
4. Inspect current committed state before any operation that reads a preparation. Uncommitted peer content is not an observable proposal.

Never write outside the selected repository, fetch or push as an implicit transport step, or infer a receiver decision from file presence or silence.

[Back to contents](#contents)

### 4.2 Inspect routes and the Capital policy

Routes, knowledge subtypes, and standing grants come only from the territory trade policy in the Capital's `[skills.ki-trades.territory]`, resolved through the selected repository's declared `ki-repo.capital`. A member's `[skills.ki-trades]` table carries no routes, so there is no local route or standing mutator. A route change is a proposal to the Capital, accepted under its own authority; the Capital preserves every channel or standing grant that a local preparation, submitted outbound, or retained inbound record still depends on.

Use `ki trade routes list` or `check`, and `ki trade standing list`, `check`, or `capture`, against the selected repository. In a Capital, `ki repo trade policy show` presents the policy and `ki repo trade policy check` sweeps every named island through the registry, reporting each as conforming, failing, or unverifiable when it is not checked out.

`list` and `check` distinguish:

- a granted route, which permits sender-local preparation and submission while the receiver awaits registration or participation; and
- an active route, which additionally requires an unambiguous registered peer that declares ki-trades and names the same Capital.

When the Capital is not registered locally, report `territory policy lives in <capital>, not available here` and treat route authority as unverifiable. An ambiguous or malformed policy grants nothing.

[Back to contents](#contents)

### 4.3 Prepare and observe

Preparing a trade, and observing a peer's preparation.

[Back to contents](#contents)

#### 4.3.1 Prepare

`ki trade prepare <receiver> --kind <work|knowledge> --observation <policy>` creates one sender-local mutable preparation with its final trade identity. Require an export route granted by the Capital policy; receiver participation may still be pending.

Choose exactly one observation policy:

- `unattended` — request no response and retain through observable receipt;
- `receipt` — observe only creation of the receiver copy;
- `decision` — observe a terminal receiver decision; or
- `completion` — for adopted work, observe the linked local item becoming done; direct application or retained knowledge satisfies the observation directly, while decline or supersession resolves it without completion.

The preparation remains mutable and may be committed repeatedly. Do not create a receiver copy, acknowledgement, comment thread, or separate revision record.

The kind matrix is explicit: knowledge permits `unattended` or `receipt`; work permits `unattended`, `receipt`, `decision`, or `completion`. `unattended` differs from `receipt` only by saying no response is requested. Both remain itemised policies, require an evidenced receiver-created copy before release, and grant no standing intake, execution, acceptance, or publication authority.

[Back to contents](#contents)

#### 4.3.2 Observe

`ki trade observe <TRD>` is receiver-local and read-only toward the sender. Resolve exactly one registered sender root and compare the current committed preparation with the host-local full commit cursor from the previous observation.

Show the committed diff only when the cursor and current commit share comparable Git history. On first observation, rewritten or shallow history, or any other comparison failure, show the complete current record verbatim and explain why no diff is available. Update only the host-local observation cursor after a successful view; never create repository state or disclose the view to the sender.

[Back to contents](#contents)

### 4.4 Submit or abandon

`ki trade submit <TRD>` must validate one complete preparation and preview its canonical outbound path before changing it. The operation is permitted only when the host demonstrates the transaction boundary it claims; this procedure does not certify atomicity merely because the command exists. Submission changes the same identity to submitted state, freezes its envelope and payload, and consumes the preparation. It does not require an active route and does not create the receiver copy.

`ki trade abandon <TRD>` applies only to one preparation. Present its exact path and require confirmation before deleting it because abandonment removes the current mutable artifact; committed Git history remains recoverable. Refuse after submission and never convert abandonment into sender release.

[Back to contents](#contents)

### 4.5 Receive

`ki trade receive <TRD>` requires one explicit submitted identity and an active route for its kind granted by the Capital policy. Preview the sender source and receiver destination, preserve the immutable sender projection byte-for-byte, add only the receiver-owned fields, and record the committed sender reference when it is available.

`ki trade receive --all` is a convenience operation over independent asynchronous receipts. Its preview lists the identities receivable at that point; with confirmation, the host attempts each listed identity sequentially. A later failure does not retract an earlier receipt, and a preview neither promises that every outbound file was evaluated nor grants receiver authority. Report the actual local results; use one explicit identity when an operator needs a single-record boundary.

Receipt begins at `unconsidered`. It is not acceptance, retention, adoption, priority, or completion. Hand the inbound record to `ki-work next` for receiver disposition.

[Back to contents](#contents)

### 4.6 List and show

`ki trade list` reports preparations, submitted records, received records, observable delivery facts, receiver decisions, observation policy, and current release or prune eligibility without collapsing them into one status.

`ki trade show <TRD>` resolves one identity and labels sender-owned immutable fields separately from receiver-owned local fields. It may show observable peer state but changes neither repository.

[Back to contents](#contents)

### 4.7 Release and prune

`ki trade release <TRD>` removes only the selected sender's outbound copy after the record's observation policy is satisfied. `--eligible` previews the complete eligible local set and requires confirmation before a bulk deletion. An unattended submission is not eligible before receipt.

`ki trade prune <TRD>` removes only the selected receiver's inbound copy after matching sender release is observable. `--eligible` uses the same preview, complete-set validation, and confirmation boundary. Never infer release from a terminal decision alone.

A completion-observation trade retains the linked adopted local work record until sender release is observable. The local trade checker has no selected-adapter, owner-valid completion resolver, so an adopted completion trade is ineligible for release and pruning until that host-owned evidence exists. Report that reference as a pruning guard; do not remove the work record as part of trade cleanup.

[Back to contents](#contents)

### 4.8 Finish

Run the local `ki-trades` audit after every mutation. Report the operation, exact local paths changed or removed, observation policy and next observable condition, pending reciprocity where relevant, and audit result. Do not report atomicity or pre/post-audit enforcement unless the host produced that evidence.

For a received record, name `ki-work next` as the next decision step. For an adopted work item that reached done, name sender release observation before either side prunes the remaining evidence.

[Back to contents](#contents)
