---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:17:46Z
ki-status: in force
---

# Claude-state standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 The domain](#41-the-domain)
  - [4.2 The areas](#42-the-areas)
  - [4.3 The skill and server pairing](#43-the-skill-and-server-pairing)

## 1. Introduction

The Claude housekeeping standard, on the hygiene of accumulated Claude state: what this skill governs, why, and how it splits work with the `mcp-housekeeping-claude` MCP server. The line-by-line checkable criteria are in [rubric.md](rubric.md); the memory area's file format is in [the auto-memory standard](standard-auto-memory.md). It is the Claude delta to the rules every agent host shares in `ki-env-housekeeping`. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The state Claude surfaces leave on a machine, outside any repository's tree.

### 2.1 In scope

- Claude Desktop and Cowork sessions, Claude Code, and VSCode chat sessions.
- Their sessions, artifacts and outputs, backups, plugins, project cache, native auto-memory and Headroom output.
- The split between this skill and the `mcp-housekeeping-claude` server.

[Back to contents](#contents)

### 2.2 Out of scope

- **Not** a Knowledge Islands base's own memory cascade — a KB's root `Admin/MEMORY.md` indexing its Pillars is KB content read at session start (`ki-repo-kb`'s MEM-2), not machine state.
- **Not** the token cost of the standing-context surface — that is `ki-env-tokenomics`, which measures what the loaded surface costs per turn rather than the hygiene of what accumulates on disk.
- **Not** the MCP server's own code quality — that is `ki-repo-mcp`, which audits `mcp-housekeeping-claude` as server code.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Accumulated state** | What a Claude surface leaves on the machine and lets build up: sessions, artifacts, backups, plugins, caches and auto-memory. **Standard:** this one, [4.1](#41-the-domain) |
| **Mechanical arm** | What checks an area: the paired server's tools, or the skill's structured rubric. **Standard:** this one, [4.2](#42-the-areas) |
| **Source payload** | The `mcp-housekeeping-claude` source checkout and its declared tools, which prove neither registration, access nor an executed audit. **Standard:** this one, [4.3](#43-the-skill-and-server-pairing) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 The domain

Every Claude surface leaves state on the machine, and it accumulates: sessions pile up, artifacts and uploads are never garbage-collected, backups multiply, plugins and project caches go stale, and per-project auto-memory drifts from the code it describes. None of this is the repo's concern — it lives outside any repo tree — so no repo-structure skill governs it. This skill does: it owns the **standard** for what healthy accumulated state looks like, and the **judgment** to decide when state is obsolete, orphaned, or oversized.

The state spans three surfaces on macOS:

- **Claude Desktop / Cowork sessions** — `~/Library/Application Support/Claude/`, including `local-agent-mode-sessions/<account>/<workspace>/`.
- **Claude Code** — `~/.claude/` (projects, memory, plugins, cache, debug).
- **VSCode chat sessions** — `workspaceStorage/<id>/chatSessions/`.

[Back to contents](#contents)

### 4.2 The areas

| Area                    | Coverage                                                        | Mechanical arm       |
| ----------------------- | --------------------------------------------------------------- | -------------------- |
| **Sessions**            | Stored session transcripts; obsolete or superseded sessions     | Server               |
| **Artifacts / outputs** | Generated artifacts, uploads, and orphaned or oversized outputs | Server               |
| **Backups**             | Automatic backups that multiply without bound                   | Server               |
| **Plugins**             | Installed-plugin inventory and staleness                        | Server               |
| **Project cache**       | Per-project caches and debug info                               | Server               |
| **Native auto-memory**  | Selected local `memory/*.md` and `MEMORY.md` evidence           | Structured KI rubric |
| **Headroom output**     | Rendered `headroom:learn` block, when present                   | Structured KI rubric |

[Back to contents](#contents)

### 4.3 The skill and server pairing

The mechanical arm is split by area, on one principle: **the skill is the standard and the judgment; the server is the tools.**

- **Native memory** — KI defaults agent-local auto-memory off and declares a per-repository transition while existing notes are reconciled. The skill treats effective disabled memory as not applicable for index/file checks but warns while memory files remain; an open transition also warns. Enabled memory requires a project-scoped opt-in or transition and is inspected only in the selected contained directory. Malformed settings and unsupported or out-of-bounds directory evidence fail closed; symlinks and foreign project memory are never followed or enumerated.
- **Headroom output** is a separate rendered-file concern. Its markers and generation date can be checked locally, but they do not establish a Headroom version, installation, database, or executed learn operation.
- For **every other area**, the state lives in macOS application-support paths that may need dedicated, access-gated filesystem tools. The paired **`mcp-housekeeping-claude`** server is a source payload, not a claimed current runtime: source checkout, inventory declaration, client registration, access exposure, and executed audit are separate evidence. The skill reads a separately obtained audit report and applies judgment; it never re-implements the tools.

The server is governed as an MCP server by `ki-repo-mcp`; this skill is its standard-and-judgment counterpart. Neither owns the other: the server ships tools with no opinion on when to use them; the skill holds the opinion and no tools beyond the memory checker.

[Back to contents](#contents)
