# AGENTS.md — Knowledge Islands Agent Backpack

**This is the common, runtime-neutral orientation** for any agent working in this repo — the [open agents.md standard](https://agents.md/), read directly by Codex and imported by `CLAUDE.md` for Claude Code. Put shared guidance here; keep only genuinely runtime-specific notes in per-runtime files.

The README is the entry point; the website-owned [skills-by-outcome guide](https://knowledgeislands.info/guidance/skills/by-outcome/), generated [capability catalogue](skills/README.md#generated-capability-catalogue), and [roadmap](ROADMAP.md) supply detail. This file is the short anchor.

## What this repo is

The canonical home for reusable Knowledge Islands agentic capabilities. The [README](README.md) owns the four-part source layout and current repository status; the website-owned [skills-by-outcome guide](https://knowledgeislands.info/guidance/skills/by-outcome/) owns task-oriented selection, while the generated [capability catalogue](skills/README.md#generated-capability-catalogue) publishes exact membership and declared dependencies.

## How skills relate

The `ki-skills` skill and its cited decisions own the dependency, optional-augmentation, shared-module, and repository-variation contracts. Do not restate or fork those contracts here.

## Working here

- **Cross-repository work** → use `ki-trades` for the portable contract. The receiving repository retains priority, execution, and acceptance authority.
- **Skill work** → use `ki-skills` for `SKILL.md`, rubric, dependency, collision, and cross-skill consistency concerns.
- **Markdown and TOML** → use `ki-authoring` for formatting, authored shape, and knowledge placement.
- **TypeScript and Bun** → use `ki-engineering` for code, tests, package scripts, and toolchain configuration.
- **Git** → use `ki-git` for portable commit and hygiene policy, which also sets this repository's linked-worktree edits. This repository's local delta is a solo direct-to-`main` workflow with no PR gate, under PRFLOW, which Kris chose on 2026-10-09 and reconfirmed the next day: "background agents keep pushing directly to harness main through the admin bypass, after tests and audit". Kris confirmed on 2026-10-25 that this file is its durable home. Its check-only pre-commit hook and CI audit follow `ki-repo-backpack`'s commit gate. The type check and the `ki-skills` audit belong to the verification below; the focused `ki-diagrams` audit and CI also check working-file receipts.
- **Verification** → run `bun run test`, `bunx tsc --noEmit`, and the relevant focused `ki repo audit --skill <skill>` sequentially. Record fleet findings separately from failures in the contract under change. A declared audit or hook that cannot run is unknown, not a pass: stop and report the activation step it needs rather than committing with `--no-verify`. In a linked worktree, audit under the `ki-delegation` [worktree audit](skills/agentic-systems/ki-delegation/references/standards-background-runs.md#coordination) recipe.

## Toolchain

[Bun](https://bun.sh) is the install and development runtime; `ki` is the repository-governance executor.

```bash
ki repo audit --skill ki-skills             # current proven skill-quality audit
ki repo conform --skill ki-skills --dry-run # validate and report safe proposals
ki dev skill rubric ki-skills               # verify generated rubric publication
bun run test                                # harness source tests
bunx tsc --noEmit                           # TypeScript gate
```
