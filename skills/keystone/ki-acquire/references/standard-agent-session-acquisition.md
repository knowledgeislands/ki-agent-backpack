---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:39:59Z
ki-status: in force
---

# Agent-session acquisition standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Selection](#41-selection)
  - [4.2 Source and capture](#42-source-and-capture)
  - [4.3 Runtime binding: Claude session reads](#43-runtime-binding-claude-session-reads)
  - [4.4 Verification and disposition](#44-verification-and-disposition)

## 1. Introduction

How a Claude or Codex agent session is acquired whole, as an owner-selected exception, under [the common acquisition standard](standard-acquisition.md). The decisions behind these rules are in [the sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

Full-session capture of agent sessions.

### 2.1 In scope

- Selecting a session for full-session import, as an exception.
- Reading a selected session through the read-only session-source adapters, and preserving it faithfully.
- Verifying the capture and recording its disposition.

[Back to contents](#contents)

### 2.2 Out of scope

- Scope, fidelity, verification, dispatch and receiver-local triage in general: [the common acquisition standard](standard-acquisition.md).
- Local memory and storage hygiene, content-minimised inventory and cleanup: `ki-env-housekeeping-claude` and `ki-env-housekeeping-chatgpt`.
- Readable chat conversations, as against agent sessions: `ki-acquire-chatgpt`.
- Executable importers and the adapters' own code: their owning repositories.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Full-session import** | Capturing a complete agent session for a named need for source evidence, explicitly selected by the owner or an authorised receiving work; an exception, never routine. **Standard:** this one, [4.1](#41-selection) |
| **Session-source adapter** | A shared read-only surface, `mcp-housekeeping-claude` or `mcp-housekeeping-chatgpt`, that establishes session identity and provenance and reads a selected payload; it writes no capture. **Standard:** this one, [4.2](#42-source-and-capture) |
| **Checkpoint** | Source-change evidence from an adapter, never a capture, harvest or retirement receipt. **Standard:** this one, [4.2](#42-source-and-capture) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Selection

This acquisition guidance covers Claude and Codex agent sessions. The common acquisition standard governs scope, fidelity, verification, dispatch and receiver-local triage. Housekeeping skills govern local memory and storage hygiene, content-minimised inventory and separately authorised cleanup; they do not own readable session acquisition or receiver routing. Readable ChatGPT conversations remain `ki-acquire-chatgpt`'s provider route.

Use durable repository guidance and reviewed knowledge to carry ordinary learning forward. Full-session import is an exception for a named need for source evidence, explicitly selected by the owner or an authorised receiving work. Do not routinely bulk-import agent history, infer capture authority from an inventory, or mine unselected sessions for possible work. Select one physical repository and the exact sessions or bounded source scope, then establish the receiver, the required coverage and any missing descendants or attachments before capture.

[Back to contents](#contents)

### 4.2 Source and capture

Use the existing `mcp-housekeeping-claude` and `mcp-housekeeping-chatgpt` session-source surfaces as shared read-only adapters. Discovery and lists establish identity and provenance; they are not faithful transcript exports. A checkpoint is source-change evidence, never a capture, harvest or retirement receipt. Keep opaque ChatGPT store evidence separate from readable Codex or Claude content.

For an authorised full-session exception, read the selected complete payload through a proven provider route. Preserve the selected scope faithfully under the common acquisition contract; do not silently substitute a preview, a digest, another provider or an unrelated repository. Include required descendants and material assets where the selected provider contract requires them, or retain an explicit incomplete obligation. Unavailable or unreadable source stays unavailable; it is not an empty successful capture.

The read-only adapter does not write capture packages or KI checkpoints. Executable importers live in their owning repository, such as the Inbox's `ki-muninn` for the `ki-acquire-granola` and `ki-acquire-chatgpt` routes, none of them in the backpack: establish the current supported adapter and coverage before advertising or invoking it. Where no complete route is proven, report the limitation rather than inventing an importer or weakening the promised scope.

[Back to contents](#contents)

### 4.3 Runtime binding: Claude session reads

For Claude, `claude_code_session_read` has two forms: the repository/session form provides the faithful full-session source payload; the legacy project/session form provides only a bounded preview. Select the repository/session form and establish its current schema and completeness from the available read-only adapter before capture; do not treat a successful preview as a complete session.

[Back to contents](#contents)

### 4.4 Verification and disposition

Verify the receiving capture against the selected source and its required originals before claiming completion. The receiving repository records its triage disposition in the capture package under the common receiver-local rule. Source retention, successful acquisition and harvesting are distinct facts. Acquisition, a source checkpoint or a no-residual-knowledge disposition never grants archive, deletion or cleanup authority; any such operation must pass its own separately authorised housekeeping or retirement procedure.

The adapter repositories keep their existing names and session-source surfaces. No acquisition-specific rename, duplicate adapter or projection is required for this guidance; a future executable change belongs to its owning repository and must be proven there before a skill claims it.

[Back to contents](#contents)
