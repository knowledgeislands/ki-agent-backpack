---
name: ki-env-housekeeping-claude
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: governance
ki-applicability: declaration-only
ki-guild: environment
ki-depends-on: [ki-env-housekeeping]
ki-runtime-binding: true
ki-supported-runtimes: [claude-code]
ki-shared-dependencies: [ki-skills:rubric]
description: >
  Audit Claude Desktop, Cowork, Claude Code and VSCode state: memory, storage hygiene, plugins, caches
  and backups. Use for local Claude housekeeping; `ki-acquire` owns exception-based agent-session
  capture, `ki-repo-kb` KB structure and `ki-env-tokenomics` context budgets.
argument-hint: 'audit | conform | help | educate | refresh'
---

# ki-env-housekeeping-claude

**Standard:** the hygiene of accumulated Claude state across the surfaces where it collects — the areas and the skill↔server pairing in [the Claude-state standard](references/standard-claude-state.md); the memory area's file format in [the auto-memory standard](references/standard-auto-memory.md); line-by-line criteria in [the rubric](references/rubric.md); tracked provenance in [sources](references/sources.md). The standards embed the two exact canonical shapes (directory/index and frontmatter), so this skill intentionally needs no separate exemplars file.

This skill composes `ki-env-housekeeping`, the family's lead, which holds the rules every agent host shares, and adds Claude's own surfaces and controls.

## What this skill owns

The **standard and judgment** over the state Claude accumulates on a machine, across three surfaces — Claude Desktop / Cowork sessions, Claude Code (`~/.claude/`), and VSCode chat sessions — spanning the areas: **sessions**, **artifacts / outputs**, **backups**, **plugins**, **project cache**, and **auto-memory**. Full model in [the Claude-state standard](references/standard-claude-state.md).

The **mechanical arm** is split by area:

1. **Native memory** — KI keeps Claude's native auto-memory off: a repository declares `auto_memory = "disabled"`, separate from Claude's boolean `autoMemoryEnabled`, and the checker resolves user, project and project-local settings plus the auto-memory environment override. Under that policy the index and file checks do not apply, a selected memory directory that still exists warns, and Claude memory still switched on fails selection. Omitting the value fails. A repository still reconciling old notes, or one with a deliberate per-project opt-in, follows the transition and enabled cases in [the auto-memory standard](references/standard-auto-memory.md).
2. **Headroom output and every other area** — a `headroom:learn` block is rendered-file evidence only; it does not prove a Headroom database, version, installation, or executed learn action. The paired **`mcp-housekeeping-claude`** server is a separate tool source: a source checkout or inventory declaration does not prove registration, access exposure, or an executed audit. The skill applies judgment only to independently obtained server audit evidence; it never re-implements those tools.

## AI session acquisition

Readable Claude session capture belongs to `ki-acquire`'s agent-session acquisition guidance. Full-session import is an owner-selected exception, not routine bulk housekeeping. The existing `mcp-housekeeping-claude` session-source surface stays read-only and shared; discovery or checkpoint evidence grants no capture, harvest or retirement authority. Keep this skill for content-minimised inventory, local memory and separately authorised storage cleanup.

## Operating modes

Carries the universal **AUDIT · CONFORM · EDUCATE · REFRESH**. Invoked as `help` / `-h` / `?`, it explains itself and stops — the generated HELP block (name, purpose, invocation, modes, off-ramps), taking no action. With no mode it does the same, then, in an interactive session only, offers the mode choice via `AskUserQuestion`, prompting for any `argument-hint` target the chosen mode shows.

| Mode | What it does |
| --- | --- |
| AUDIT | Composes `ki-env-housekeeping` first. Run `ki repo audit --skill ki-env-housekeeping-claude` for selected native-memory evidence and its bounded store. Report non-memory server state unavailable unless registration, access exposure, and an executed server audit are separately evidenced; then apply the judgment criteria in [rubric.md](references/rubric.md). Procedure in [mode-audit.md](references/mode-audit.md). |
| CONFORM | Run `ki repo conform --skill ki-env-housekeeping-claude`; it proposes only safe transactional repairs in an already selected bounded memory directory. Any non-memory cleanup requires independently established server access and authority. Re-AUDIT until the local evidence is clean. Procedure in [mode-conform.md](references/mode-conform.md). |
| EDUCATE | Run `ki repo educate --skill ki-env-housekeeping-claude` to declare the repository's bounded user-home evidence; add it with `ki skill add ki-env-housekeeping-claude` when it should also be installed for every supported Claude Code agent. User activation installs a skill only — it does not audit or conform it. |
| REFRESH | Re-check the standard against its sources: Headroom's memory-feature behavior for the memory format, and the `mcp-housekeeping-claude` server's tool surface for the other areas, per [mode-refresh.md](references/mode-refresh.md). |

## Notes

- The state this skill governs lives **outside the repo tree** — under `~/.claude/`, `~/Library/Application Support/Claude/`, and VSCode's `workspaceStorage/`. Its structured session is restricted to the selected repository's Claude project memory; the session / artifact / storage areas are machine-level and audited directly through the server, not by repository audit.
- Under disabled KI policy the index and file criteria are **NA**; SELECT-1 and SELECT-2 carry the selection findings, as [the rubric](references/rubric.md) sets out for every case.
- Route Markdown formatting to the separately applicable `ki-authoring` standard. The local `ki-skills:rubric` shared module is compile-time packaging, not a governance dependency.
- Does not assume any particular personal `~/.claude/CLAUDE.md` content — the doctrines checked are the systems' own universal instructions, not one user's private elaboration of them.
