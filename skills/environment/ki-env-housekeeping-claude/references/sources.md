---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · 180d
---

# Sources — where the Claude housekeeping standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
    - [2.2.1 Headroom](#221-headroom)
    - [2.2.2 In-house tool repositories](#222-in-house-tool-repositories)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the Claude-state standard](standard-claude-state.md), [the auto-memory standard](standard-auto-memory.md) and their [rubric](rubric.md). Recorded sources cover independent evidence surfaces (see [the Claude-state standard](standard-claude-state.md#43-the-skill-and-server-pairing)): native Claude memory selection and loading, Headroom-rendered output and optional database operations, and the `mcp-housekeeping-claude` source payload. A source record never proves a current server registration, access exposure, or executed audit. Update `last reviewed` on every REFRESH, whether or not anything changed.

[Back to contents](#contents)

## 2. Outside sources

Claude Code's own documentation governs native memory selection; Headroom and the paired server inform the rest.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Claude Code memory][claude-memory] | Native auto-memory, its location and loading | 2026-11-23 |
| [Claude Code settings][claude-settings] | `autoMemoryEnabled`, `autoMemoryDirectory` and settings precedence | 2026-11-23 |
| [Claude Code environment variables][claude-env] | The `CLAUDE_CODE_DISABLE_AUTO_MEMORY` override | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

Headroom publishes no versioned schema for its rendered output, and the paired server is a source payload, so both inform rather than govern.

#### 2.2.1 Headroom

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [Headroom failure learning][headroom-learn] | The rendered `headroom:learn` block and its learn sweep | 2026-11-23 |
| Recorded Headroom CLI evidence: tracked 0.31.0; installed 0.45.0 | Database selection and the `memory` and `learn` commands | 2026-11-23 |

[Back to contents](#contents)

#### 2.2.2 In-house tool repositories

| Source | Informs | Last reviewed |
| --- | --- | --- |
| `@knowledgeislands/mcp-housekeeping-claude` source README + tool surface | The server's tools for the areas the skill does not check itself | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-fetched the three Claude Code pages and re-read Headroom and the paired server's README and tool surface. Claude Code still enables auto-memory by default, with `autoMemoryEnabled`, the absolute-or-`~/` `autoMemoryDirectory`, `CLAUDE_CODE_DISABLE_AUTO_MEMORY` and settings precedence as recorded, and `MEMORY.md` now loads up to its first 200 lines or 25KB. Installed Headroom 0.45.0 still writes the recorded markers, heading and dated line into `MEMORY.md`, and its `memory` and `learn` help match [the auto-memory standard](standard-auto-memory.md#44-repairing-a-regenerated-cross-repo-learned-pattern).

**Watching:**

- The recorded Headroom version drift (tracked 0.31.0 versus installed 0.45.0) means the local format and database-operation wording are not a claim about the installed runtime. REFRESH rechecks the exact version and documented command behavior before changing those claims.
- Headroom's failure-learning page shows the learned-patterns block without the dated line that 0.45.0 still writes; the standard follows the installed writer until the two agree.
- The memory directory for a linked worktree: memory is now kept per Git repository and shared by its worktrees, while the checker derives the directory from the path it is given, and `CLAUDE_CODE_PROJECT_DIR_NAME` can name it outright.
- Whether the frontmatter kind is `type`, as the memory page names it, or `metadata.type`, as the checker requires; to check against a file Claude Code writes now.
- The server README and tool surface establish a source payload only. REFRESH must record registration, access exposure, and executed-audit evidence independently if a runtime claim is needed.
- If Headroom ships a documented, versioned schema for `MEMORY.md` / frontmatter, replace its row with that URL and re-derive [the auto-memory standard](standard-auto-memory.md) and the checker from it directly.

[Back to contents](#contents)

[headroom-learn]: https://docs.headroomlabs.ai/docs/failure-learning
[claude-memory]: https://code.claude.com/docs/en/memory
[claude-settings]: https://code.claude.com/docs/en/settings
[claude-env]: https://code.claude.com/docs/en/env-vars
