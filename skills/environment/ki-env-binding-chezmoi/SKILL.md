---
name: ki-env-binding-chezmoi
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: governance
ki-applicability: declaration-only
ki-guild: environment
ki-shared-dependencies: [ki-env-binding:binding, ki-skills:rubric]
ki-depends-on: [ki-env-binding, ki-repo-dotfiles-chezmoi]
description: >
  Audit or conform what chezmoi renders into runtime settings for KI: MCP servers from canonical
  `mcp-servers.yaml` through a renderer partial, and backpack hook registrations for Claude Code and Codex,
  through `chezmoi apply`. Use for that source-to-dotfiles pipeline; `ki-env-binding` owns the MCP source
  contract and `ki-repo-dotfiles-chezmoi` owns general chezmoi structure.
argument-hint: 'audit <target> | conform <target> | help | educate <target> | refresh'
---

# The chezmoi render path for KI bindings

You are governing **one render path**: how the canonical MCP single source becomes the file-editable surfaces that run the servers, through chezmoi. This governance skill's own part is the render contract — the `mcp-servers-json` template, its source-data wiring, and the `chezmoi apply` that generates the surfaces `ki-env-binding` audits — which belongs to neither sibling it composes, as [Composition](#composition) sets out. The full model is in [the standard](references/standard-chezmoi-mcp-rendering.md); the checkable criteria are in [the generated rubric](references/rubric.md); provenance is in [the sources list](references/sources.md).

It is also the one owner of **hook registration**: how chezmoi registers a selected backpack hook payload in Claude Code's and Codex's settings, through the `.chezmoitemplates/*-hook-registrations-json` partials, from the `ki`-installed path. The backpack keeps the payloads, under `ki-repo-backpack`'s three-part hook model. The rules are in [the hook registration standard](references/standard-chezmoi-hook-registration.md); the rubric does not yet check them, so AUDIT reads them by hand.

## Operating modes

Like every governance skill it carries the universal **AUDIT · CONFORM · EDUCATE · REFRESH**.

### Mode HELP — orient without changing anything

Invoked as `help` / `-h` / `?`, it explains itself and stops: name, purpose, invocation, modes, and off-ramps, taking no action. With no mode it does the same, then, in an interactive session only, offers the mode choice and prompts for the target the chosen mode requires.

### Mode AUDIT — check the render path, by composition

The AUDIT is a **composition**, declared here and run in sequence — it does not fork or re-implement the sibling criteria:

1. Run `ki repo audit --repo <chezmoi-repo> --skill ki-repo-dotfiles-chezmoi` for generic chezmoi repository shape.
2. Run `ki repo audit --repo <chezmoi-repo> --skill ki-env-binding` for the canonical source and mcporter evidence.
3. Run `ki repo audit --repo <chezmoi-repo> --skill ki-env-binding-chezmoi` for this skill's delta: the target is safely inspectable (`BINDCHEZ-1`), source structure is distinguished from rendered and applied state (`BINDCHEZ-2`), valid MCP render data exists (`BINDCHEZ-3`), the exact `mcp-servers-json` partial exists (`BINDCHEZ-4`), and at least one target template uses it (`BINDCHEZ-5`).
4. Judge the [J] criteria by reading: does separately authorised, secret-safe evidence establish render parity (`BINDCHEZ-6`), and do the standard, rubric, provenance, and sibling boundaries remain coherent (`BINDCHEZ-7`)?
5. Read the hook registrations against [the hook registration standard](references/standard-chezmoi-hook-registration.md): one partial for each hook or hook group, registered from the installed path, a Codex hook trusted by hash where Claude Code needs none, a disabled hook removed.
6. Report sibling findings under their owning skill and BINDCHEZ findings under this one. Its mechanical violations are WARN-level because the external render choice requires an operator decision.

### Mode CONFORM — bring the render path into step

1. Run **AUDIT** first.
2. **Compose the sibling write passes.** Run `ki-repo-dotfiles-chezmoi` CONFORM on the chezmoi repo, then `ki-env-binding` for the canonical source — in sequence, never forked.
3. **Resolve the report-only choices.** This skill deliberately proposes no writes or commands: choose the repository's existing data pattern, template location, and target set from the findings. Those are external chezmoi policy decisions, not defaults the rubric can infer safely.
4. **Render** — edit the chosen MCP source, or a hook's data or registration partial, preview with `chezmoi diff`, then run `chezmoi apply`. The render path regenerates a surface from the source; it never blesses a hand-edited rendered config, which would diverge from the source.
5. **Re-run AUDIT** until clean.

### Mode EDUCATE — explain and activate the render contract

EDUCATE scaffolds no standalone artifact. Use `ki repo educate --skill ki-env-binding-chezmoi --repo <target>` to explain the render contract after the repository declares this skill and its `ki-env-binding` and `ki-repo-dotfiles-chezmoi` dependencies.

### Mode REFRESH — re-anchor the render contract

**Precondition:** REFRESH edits this skill's own canonical files, which exist only in `ki-agent-backpack`. Invoked from an installed copy, it stops here and names the backpack as where to run it — or, for a pattern recurring across bases, routes it through `ki-repo-kb`'s IMPROVE mode instead.

Re-anchor when the chezmoi render contract changes — the `mcp-servers-json` template shape, the `.chezmoidata` wiring, or the `chezmoi apply` behaviour — when Claude Code's or Codex's hook settings shape changes, or when either composed sibling's contract moves. Read [the sources list](references/sources.md), confirm the standard still matches the render template and each surface's real config, propose a diff, bump the dates.

## Composition

This is a **composition skill**: it sits on two siblings and adds the render contract over them, never forking their shared modes. It is its own skill rather than a `--backend` flag on `ki-env-binding` (`ADR-KI-HARNESS-SKILLS-004`, the composition-for-backends corollary), because `ki-env-binding` is renderer-neutral by design and folding chezmoi into it would couple every surface audit to one renderer.

- `ki-env-binding` — owns the portable canonical source, mcporter evidence and the renderer-neutral surface audit (surfaces agree with the single source); runtime adapters own their native client surfaces. This skill composes its AUDIT / CONFORM for the surface half; it never re-implements the surface check.
- `ki-repo-dotfiles-chezmoi` — owns the generic chezmoi source-repo standard (naming prefixes, templating, `chezmoi apply`, surgical-patch reverse-merge), with no knowledge of MCP. This skill composes its AUDIT / CONFORM for the repo half; it never re-checks generic repo shape.
- `ki-repo-backpack` — owns the hook payloads this skill registers, and the three-part hook model.
- `ki-repo-mcp` — owns each MCP server's own code and the cross-surface-enablement design record. For a single server's layout, route there.

## Notes

- **Not coverage-scoped everywhere:** this skill is installed only where the chezmoi render path is actually in use; a plain (non-chezmoi) setup runs `ki-env-binding` alone and re-renders through whatever tool reads the canonical source.
