# Sources — Claude Code adapter

**Refresh:** external-spec · monthly

**Last reviewed:** 2026-11-15

The parent `ki-subagents` owns portable semantics. This adapter uses current Claude Code documentation only for native Markdown/YAML source claims. Candidate source shape does not establish publication or runtime behavior.

## Normative

| Tag | Source | Governs | Last reviewed |
| --- | --- | --- | --- |
| CC | [Claude Code subagents](https://code.claude.com/docs/en/sub-agents) | Markdown/YAML source shape, required/supported fields, discovery, and runtime-only limits | 2026-11-15 |

## Local boundary

| Tag | Source | Governs | Last reviewed |
| --- | --- | --- | --- |
| HOST | Current repository and KI host capability inspection | No generic subagent publisher consumes the advertised Claude path | 2026-11-15 |

## Last review

On 2026-11-15, the Claude Code subagents page was re-read. It still documents subagents as Markdown files with YAML frontmatter, still requires only `name` and `description`, still makes `name` the identity rather than the filename, and still separates the source definition from what happens at run time. The host inspection also still holds: the KI host advertises a Claude subagent path, but nothing consumes it. Two changes touch the standard and are held for its owner rather than changed here. The page now lists three fields the standard's supported set lacks, `autoCompactWindow`, `omitClaudeMd` and `experimental`, so the adapter would flag them although Claude Code accepts them. And the page now allows a name of up to 256 characters that contains no colon and does not start with a hyphen, giving `reviewer-v2` as an example, so the standard's rule that digits are invalid is stricter than Claude Code. Both are watched until the owner decides; the page also says Claude Code silently ignores fields it does not recognise.

On 2026-09-26, Claude Code still documented Markdown/YAML source definitions with the field set listed in the standard and distinguished source configuration from effective runtime behaviour. The current KI host has descriptor metadata but no generic implementation consuming a subagent path; this adapter therefore continues to report source conformance only and routes publication or activation to future host integration.
