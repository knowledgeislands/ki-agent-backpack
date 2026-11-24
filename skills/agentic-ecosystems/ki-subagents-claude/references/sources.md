---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — where the Claude Code adapter standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Claude Code documentation](#211-claude-code-documentation)
    - [2.1.2 Local boundary](#212-local-boundary)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the Claude Code subagent source projections standard](standard-subagent-definitions.md) and its [rubric](rubric.md).

[Back to contents](#contents)

## 2. Outside sources

The parent `ki-subagents` owns portable semantics. This adapter uses current Claude Code documentation only for native Markdown/YAML source claims. Candidate source shape does not establish publication or runtime behavior.

### 2.1 Authoritative

The Claude Code documentation and the local host boundary.

#### 2.1.1 Claude Code documentation

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CC — [Claude Code subagents](https://code.claude.com/docs/en/sub-agents) | Markdown/YAML source shape, required/supported fields, discovery, and runtime-only limits | 2026-11-23 |

[Back to contents](#contents)

#### 2.1.2 Local boundary

| Source | Governs | Last reviewed |
| --- | --- | --- |
| HOST — Current repository and KI host capability inspection | No generic subagent publisher consumes the advertised Claude path | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-read the Claude Code subagents page: it still documents Markdown files with YAML frontmatter, still requires only `name` and `description`, still makes `name` the identity, the filename need not match except for plugin-scoped ids, and still silently ignores unrecognised fields, now traceable through `claude --debug`. The host check also holds: `tools-ki` acquires the `subagents/` payload but nothing publishes it to `.claude/agents`, so placement stays with the install run.

**Watching:**

- The page lists three fields the standard's supported set lacks, `autoCompactWindow`, `omitClaudeMd` and `experimental`, so the adapter would flag them although Claude Code accepts them.
- The page allows a name of up to 256 characters that contains no colon and does not start with a hyphen, giving `reviewer-v2` as an example, so the standard's rule that digits are invalid is stricter than Claude Code.

[Back to contents](#contents)
