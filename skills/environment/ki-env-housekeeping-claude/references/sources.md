---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T07:10:00Z
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
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the Claude-state standard](standard-claude-state.md), [the auto-memory standard](standard-auto-memory.md) and their [rubric](rubric.md). Recorded sources cover independent evidence surfaces (see [the Claude-state standard](standard-claude-state.md#43-the-skill-and-server-pairing)): native Claude memory selection and loading, Headroom-rendered output and optional database operations, and the `mcp-housekeeping-claude` source payload. A source record never proves a current server registration, access exposure, or executed audit. Update `last reviewed` on every REFRESH, whether or not anything changed.

[Back to contents](#contents)

## 2. Outside sources

Claude Code's own documentation governs native memory selection; Headroom and the paired server inform the rest.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Claude Code memory][claude-memory] | Native auto-memory, its location and loading | 2026-09-27 |
| [Claude Code settings][claude-settings] | `autoMemoryEnabled`, `autoMemoryDirectory` and settings precedence | 2026-09-27 |
| [Claude Code environment variables][claude-env] | The `CLAUDE_CODE_DISABLE_AUTO_MEMORY` override | 2026-09-27 |

[Back to contents](#contents)

### 2.2 Advisory

Headroom publishes no versioned schema for its rendered output, and the paired server is a source payload, so both inform rather than govern.

#### 2.2.1 Headroom

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [extraheadroom.com/reduce-claude-code-costs][headroom-tools] | The rendered `headroom:learn` block and its learn sweep | 2026-07-04 |
| Recorded Headroom CLI evidence: tracked 0.31.0; installed 0.34.0 | Database selection and the `memory` and `learn` commands | 2026-08-12 |

[Back to contents](#contents)

#### 2.2.2 In-house tool repositories

| Source | Informs | Last reviewed |
| --- | --- | --- |
| `@knowledgeislands/mcp-housekeeping-claude` source README + tool surface | The server's tools for the areas the skill does not check itself | 2026-07-09 |

[Back to contents](#contents)

## 3. Decisions

None recorded by id: the rules follow the outside sources above and the shared rules of `ki-env-housekeeping`.

[Back to contents](#contents)

## 4. Last review

On 19 November 2026 MEMORY-ONCE, taken in `ki-env-housekeeping`, cut [the auto-memory standard](standard-auto-memory.md#42-repair-boundary)'s restatement of the native-memory policy to this host's delta, pointing at the lead's 4.1; nothing host-specific was lost. No criterion changed and no outside source refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH names the backpack as where to run it. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the standards and this file into `ki-authoring`'s formats: `standards-auto-memory.md` and `standards-claude-state.md` were renamed `standard-auto-memory.md` and `standard-claude-state.md` and their rules placed, unchanged, under numbered sections, and this file took the sources format, its notes becoming this review and its watch list. The rubric's source names follow. No rule changed and no outside source was refreshed.

At the earlier reviews, dated in the tables above: Claude Code enables auto-memory by default. `autoMemoryEnabled: false` disables it; project and project-local settings can override user settings. `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` disables it, while `=0` forces it on. Managed settings and session overrides require separate runtime evidence. Headroom rendered output and native Claude memory are distinct.

**Watching:**

- The recorded Headroom version drift (tracked 0.31.0 versus installed 0.34.0) means the local format and database-operation wording are not a claim about the installed runtime. REFRESH rechecks the exact version and documented command behavior before changing those claims.
- The server README and tool surface establish a source payload only. REFRESH must record registration, access exposure, and executed-audit evidence independently if a runtime claim is needed.
- If Headroom ships a documented, versioned schema for `MEMORY.md` / frontmatter, replace its row with that URL and re-derive [the auto-memory standard](standard-auto-memory.md) and the checker from it directly.

[Back to contents](#contents)

[headroom-tools]: https://extraheadroom.com/reduce-claude-code-costs
[claude-memory]: https://code.claude.com/docs/en/memory
[claude-settings]: https://code.claude.com/docs/en/settings
[claude-env]: https://code.claude.com/docs/en/env-vars
