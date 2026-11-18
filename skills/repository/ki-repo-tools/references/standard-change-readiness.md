---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:51:39Z
ki-status: in force
---

# Tool change readiness

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Contract and documentation](#41-contract-and-documentation)
  - [4.2 Evidence and handoff](#42-evidence-and-handoff)

## 1. Introduction

Use this shared checklist before presenting a change to any `tools-*` CLI for review. The repository's `docs/guides/developer/definition-of-done.md` names this checklist and supplies its own commands, risks, and verification gates. It applies shared policy without copying it. A release also follows the separate release-readiness checklist and the repository's release guide.

The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The shared readiness questions for a change to a `tools-*` command-line tool before it is presented for review.

### 2.1 In scope

- The contract and documentation a change must keep aligned.
- The evidence a change needs and how it is handed off.

[Back to contents](#contents)

### 2.2 Out of scope

- A release: the [release-readiness checklist](standard-release-readiness.md) and the repository's release guide.
- The repository's own commands, risks and gates: its `docs/guides/developer/definition-of-done.md`.
- Staging, committing and publication authority: `ki-git`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Change-readiness checklist** | This shared checklist, applied before a change to any `tools-*` CLI is presented for review. **Standard:** this one, [1](#1-introduction) |
| **Definition of done** | The repository's `docs/guides/developer/definition-of-done.md`, which names this checklist and supplies its own commands, risks and verification gates. **Standard:** [the tool-repository standard](standard-tool-repositories.md#44-developer-delivery-guides) |
| **Public surface** | The executable and command-local help, README command overview, user and developer guides, Bash and Zsh completion output, physical manual and changelog, checked together. **Standard:** this one, [4.1](#41-contract-and-documentation) |

[Back to contents](#contents)

## 4. Rules

The checklist in two parts: the contract and documentation, then the evidence and handoff.

### 4.1 Contract and documentation

- Confirm the change stays within the tool's declared responsibility. Keep personal configuration, credentials, native provider state, and another repository's authority outside the executable and its published output.
- Preserve the tool's domain, command, presentation and external-operation boundaries. Remove retired aliases, unreachable code and obsolete guidance together unless an explicit bounded transition requires them.
- Check the affected public surface together: executable and command-local help, README command overview, user and developer guides, Bash and Zsh completion output, physical manual, and the active changelog baseline or dated entry. Include installer instructions and version output when they changed. A surface may be shorter than another, but none should advertise a retired command or contradict a shipped option, default, or output shape.
- Check the common root `help [command]`, `completion <shell>`, `diag`, and `doctor` routes, their exit status, and the separation between share-safe facts and read-only health evaluation. Check `init`, `bootstrap`, or `repair` only where the tool owns a real operation; recovery must preview before an explicit write. Confirm there is no duplicate wrapper route that obscures the same action.
- Apply the [diagnostic baseline](standard-tool-repositories.md#4111-diagnostic-baseline) to the common context fields, proven or unknown installation provenance, default redaction, doctor scope and health counts. Where commands use tables, verify the [human-readable table contract](standard-tool-repositories.md#4112-human-readable-tables), including narrow-terminal fallback and plain redirected output. Run the repository's isolated regression fixtures for these observable relationships; a static audit does not prove them.
- Put accepted observable behaviour in a Specification, durable rationale in a Decision Record, practical operation in a guide, and genuinely future work in the selected work tracker. Do not create a roadmap item merely to perform routine documentation alignment.
- New user-authored configuration has no schema/version field while it has one current shape. Read only recognised legacy shapes, make repair explicit and previewable, and keep ordinary reads non-mutating. Give each generated output contract its own v1 identity before the first stable release; do not renumber internal persisted-state migration markers without a migration.
- When a guide uses a diagram, keep its source, generated artifact, and explanatory prose together and verify that their relationships still match the implementation. A diagram is conditional on helping a reader understand a real boundary, not a required ornament for every CLI.

[Back to contents](#contents)

### 4.2 Evidence and handoff

- Run `ki repo audit --repo .` and the repository's native lint, build, test, syntax, installer, and packaging gates that apply to the change. Exercise affected commands and failure paths through isolated fixtures. A manual change also needs `mandoc -T lint` and a rendered reading check; a completion change needs emitted Bash and Zsh registration checks.
- Record unavailable required checks and unresolved findings explicitly; do not describe an incompletely checked change as fully verified. Keep verification evidence separate from operational or publication authority.
- Keep a repository-native deterministic test of the command inventory and its help/completion/manual coverage where the grammar can be inspected reliably. Extend that test when a command is added, moved, renamed, or removed; use isolated runtime fixtures for diagnostic redaction and repair preview/write boundaries. Periodically review judgment-only audit and conform criteria for additional trustworthy mechanical checks, recording why any remaining question cannot be decided from stable evidence. Keep semantic quality, reader journey, and cross-system authority as explicit human review rather than claiming a string search proves them.
- Follow `ki-git` for staging, committed-path inspection and publication authority, and the selected work adapter for acceptance and pruning. Record verification and remaining concerns in the repository's review workflow. This checklist grants no personal-machine apply or receiving-repository mutation authority.

[Back to contents](#contents)
