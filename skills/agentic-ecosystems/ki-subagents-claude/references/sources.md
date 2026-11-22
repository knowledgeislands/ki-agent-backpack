---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:27:44Z
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
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

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
| CC — [Claude Code subagents](https://code.claude.com/docs/en/sub-agents) | Markdown/YAML source shape, required/supported fields, discovery, and runtime-only limits | 2026-11-15 |

[Back to contents](#contents)

#### 2.1.2 Local boundary

| Source | Governs | Last reviewed |
| --- | --- | --- |
| HOST — Current repository and KI host capability inspection | No generic subagent publisher consumes the advertised Claude path | 2026-11-15 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

None recorded by id: the rules follow the sources above and `ki-subagents`'s portable contract.

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Agentic systems guild: the backpack preserves the candidate source files, REFRESH names the backpack, and what the standard called the Harness host is the `ki` host. No criterion changed and no outside source refreshed.

On 18 November 2026 the Agentic systems guild's review, from the Cairn summit's change 10, brought the files into the formats: `standards-subagent-definitions.md` was renamed `standard-subagent-definitions.md` and reshaped, its rules unchanged under numbered sections, and this file took the sources format, its Normative and Local boundary tables as authoritative sub-groups. The rubric's discovery item now cites the section's full anchor. No rule changed and no outside source was refreshed.

On 2026-11-15, the Claude Code subagents page was re-read. It still documents subagents as Markdown files with YAML frontmatter, still requires only `name` and `description`, still makes `name` the identity rather than the filename, and still separates the source definition from what happens at run time. The host inspection also still holds: the KI host advertises a Claude subagent path, but nothing consumes it. Two changes touch the standard and are held for its owner rather than changed here; the page also says Claude Code silently ignores fields it does not recognise.

On 2026-09-26, Claude Code still documented Markdown/YAML source definitions with the field set listed in the standard and distinguished source configuration from effective runtime behaviour. The current KI host has descriptor metadata but no generic implementation consuming a subagent path; this adapter therefore continues to report source conformance only and routes publication or activation to future host integration.

**Watching:**

- The page lists three fields the standard's supported set lacks, `autoCompactWindow`, `omitClaudeMd` and `experimental`, so the adapter would flag them although Claude Code accepts them.
- The page allows a name of up to 256 characters that contains no colon and does not start with a hyphen, giving `reviewer-v2` as an example, so the standard's rule that digits are invalid is stricter than Claude Code.

[Back to contents](#contents)
