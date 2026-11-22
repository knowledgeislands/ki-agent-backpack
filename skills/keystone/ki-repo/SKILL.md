---
name: ki-repo
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: governance
ki-applicability: baseline
ki-guild: keystone
ki-leads: repository
ki-detects: [ki-decision-records, ki-design, ki-engineering, ki-guides, ki-repo-homebrew-tap, ki-repo-kb, ki-repo-kb-streams, ki-repo-mcp, ki-repo-specifications, ki-repo-tools, ki-repo-website, ki-repo-website-app, ki-repo-website-cloudflare, ki-repo-website-content, ki-skills, ki-specs, ki-subagents, ki-subagents-chatgpt, ki-subagents-claude, ki-work-package]
ki-runtime-binding: true
ki-depends-on: [ki-authoring, ki-git]
ki-shared-dependencies: [ki-skills:rubric, ki-work-roadmap:work-identifiers]
ki-owns: ['.gitignore']
ki-contributes: ['.ki.toml']
ki-requires: ['.githooks/pre-commit']
description: >
  Lead the Repository guild and audit or conform the universal KI repository contract declared by `.ki.toml`, including
  setup, GitHub settings, and top-level `+` and `-` working areas. Use for whole-repository review or to find the skill
  for a kind of repository; specialised `ki-repo-*`, `ki-engineering`, and `ki-work-roadmap` skills own their narrower
  structures.
argument-hint: 'audit | conform <repo> | educate <repo> | help | refresh | review [scope] | review close <REV-NNN>'
---

# Knowledge Islands repo

You are helping hold git repos to one **Knowledge Islands repo standard**: how a repo is _set up_, not what its code does. A git repo that carries a `.ki.toml` is a Knowledge Islands repo, that file's presence being the compliance marker; the [`knowledgeislands`](https://github.com/knowledgeislands) org is the standard's reference set, not its boundary. This skill is a **standard, base-agnostic governance skill**: it hard-codes no single repo or org and discovers its targets at runtime, a local tree or a whole org through `gh`. REVIEW is the deliberate exception to its configuration-only scope: it may inspect architecture and implementation as evidence, but it creates no compliance criterion or automatic verdict. How it sits alongside the backpack's other skills is documented once in the ki-agent-backpack `README.md`, not repeated here.

## Where the rules live

This file routes; the standards hold the rules, and the generated rubric publishes the structured items under `scripts/rubric/`, each citing its section.

| For | Read |
| --- | --- |
| The three layers: root files and the composed `.gitignore`, `.ki/`, repository kind and shape, write authority, the `+`, `-` and `tmp/` working areas, the commit gate, GitHub settings, deeper GitHub, naming, visibility, maturity, per-repo overrides, the coverage cascade, and applying and verifying it | [The repository standard](references/standard-repository.md) |
| The `.ki.toml` contract: the compliance marker and its opening header, neighbourhoods, backpacks and the skills namespace, declared identity, territory and Capital, coverage enforcement, repository kind, scaffolding and ownership, activation, and the local registry | [The configuration standard](references/standard-configuration.md) |
| How durable documentation in a non-Knowledge-Base repository divides into concerns, and who routes between them | [The documentation topology](references/standard-documentation-topology.md) |
| The review criteria | [The generated rubric](references/rubric.md) |
| Worked examples, when onboarding a repo or when a rule needs one | [The exemplars](references/exemplars.md) |
| The human-led repository review | [The REVIEW procedure](references/mode-review.md) |
| Where the standards come from, and the decisions behind them | [The sources](references/sources.md) |

## The Repository guild

This skill leads the Repository guild: the repository contract and each kind of repository's structure. Its members:

- **`ki-git`** for commits and shared-tree safety, and **`ki-engineering`** for TypeScript and Bun engineering and its toolchain.
- **`ki-repo-project`** for a Project repository's baseline, and the overlay for each kind: `ki-repo-tools` for a CLI, `ki-repo-mcp` for an MCP server, `ki-repo-packages` for vendored packages, `ki-repo-homebrew-tap` for a tap, `ki-repo-specifications` for a specifications repository, `ki-repo-backpack` for a backpack and `ki-repo-dotfiles-chezmoi` for a chezmoi source.
- **`ki-repo-website`** for a website's generator-neutral seam, with `ki-repo-website-content`, `ki-repo-website-app` and `ki-repo-website-cloudflare` for its content, application and hosting.
- **`ki-repo-kb`** for a knowledge base, with `ki-repo-kb-streams`, `ki-repo-kb-activities`, `ki-repo-kb-live-artifacts` and `ki-repo-kb-principal` for its parts.

## Operating modes

Every governance skill carries the universal four **AUDIT · CONFORM · EDUCATE · REFRESH**; EDUCATE here onboards a repo. **REVIEW** is the additional human-led repository-review mode. Invoked as `help` / `-h` / `?`, the skill explains itself and stops — the generated HELP block (name, purpose, invocation, modes, off-ramps), taking no action. With no mode it does the same, then, in an interactive session only, offers the mode choice via `AskUserQuestion`, prompting for any `argument-hint` target the chosen mode shows.

### Mode AUDIT — check a repo against the standard

Auditing a whole tree or org is a set audit — **bound the context** (the set-audit discipline in `ki-skills`' enforcement framework §5): take the checker's one set-level run over every repo, then do the per-repo judgment pass **one repo at a time**, fully (including every coverage-selected engineering and artifact standard) before moving to the next; repos are independent, so the order is free.

1. Confirm `gh` is authenticated against the org (`gh auth status`).
2. **Run the native audit:** `ki repo audit --repo <repo>` resolves the declared skills from the verified installed collection and runs them in dependency order, reading local and GitHub evidence as [the repository standard's 4.14](references/standard-repository.md#414-verifying-it) sets; in a local KI installation it also checks the repository's registration, under [the configuration standard's 4.13](references/standard-configuration.md#413-local-registry). The declared `ki-authoring` prerequisite governs authored repository surfaces, while `ki-git` supplies portable working and commit policy before this skill adds repository shape and GitHub settings.
3. **Do the judgment pass the mechanical layer cannot** — the `[J]` items in [the rubric](references/rubric.md): does each description actually _match the repo's purpose_ (the mechanical layer checks non-emptiness and `package.json` sync, but not fit); do a public repo's topics describe what it is, applying the common estate topics from [the repository standard](references/standard-repository.md) where they fit; is each per-repo override (a `note` in the output) a warranted decision rather than waved-off drift; and, where `+/` or `-/` exists, whether its generic contents remain temporary directional material rather than becoming a shadow roadmap or uncontrolled archive.
4. **Report** by `repo · check · fix`, lead with FAILs, surface any **coverage** WARNs (a detected standard with no opt-in table), and call out the overrides (`note`s) you judged warranted.

### Mode CONFORM — bring a repo (or the org) into line

Outward-facing: it changes live GitHub settings and may open PRs. Show the diff and confirm before mutating.

1. Run **AUDIT** first, so you change against a known gap list.
2. Run `ki repo conform --repo <repo>` for the bounded local mechanical layer: it registers the root and proposes the composed `.gitignore` and the configuration foundation, as [the configuration standard's 4.12](references/standard-configuration.md#412-scaffolding--ownership) and [4.13](references/standard-configuration.md#413-local-registry) set; `--dry-run` writes nothing. Live GitHub settings remain outside the session proposal: inspect the commands in [the repository standard](references/standard-repository.md#413-applying-it), show the exact diff, and obtain explicit confirmation before applying them.
3. Resolve the judgment items yourself — document content, description fit, runtime orientation, override rationale, and standard synchronisation.
4. **Re-audit** to confirm convergence.

### Mode EDUCATE — make a repo Knowledge Islands–compliant

Onboard a repo by adding the marker file (and the other root files) so it joins the standard. Local only — no live GitHub change; hand the live settings to **CONFORM**.

1. Add any missing root files, under [the repository standard's 4.1.1](references/standard-repository.md#411-root-files).
2. Establish the declarative foundations only, the bounded scaffold [the configuration standard's 4.12](references/standard-configuration.md#412-scaffolding--ownership) sets, preserving any config already present. Activation stays separate from configuration, under the same section.
3. Declare the repository's identity, visibility and any `[…checks]` overrides (see [the configuration standard](references/standard-configuration.md) and [the repository standard's 4.11](references/standard-repository.md#411-per-repo-overrides)), commit (a direct push to `main` is fine — it's open), then run **CONFORM** for the GitHub settings.

### Mode REFRESH — re-anchor the standard to GitHub's surface

**Precondition:** REFRESH edits this skill's own canonical files, which exist only in `ki-agent-backpack`. Invoked from an installed copy, it stops here and names the backpack as where to run it — or, for a pattern recurring across bases, routes it through `ki-repo-kb`'s IMPROVE mode instead.

GitHub's settings surface moves (rulesets vs classic protection, new security toggles, Actions policy). Run on its declared cadence (see `references/sources.md`), or when asked "is the repo standard current".

1. **Read [the source list](references/sources.md)** — the tracked GitHub REST API / `gh` / rulesets / security-features sources, each with a `last reviewed` date.
2. **Re-fetch each** (WebFetch; fall back to WebSearch if a host is blocked or returns non-200) and **diff** against [the repository standard](references/standard-repository.md), [the configuration standard](references/standard-configuration.md), and the structured catalogue under `scripts/rubric/`: new or renamed settings, changed defaults, protection moving to rulesets, new security toggles.
3. **Scan the org** for emergent patterns the standard hasn't captured — explicitly including topic/keyword commonality across the estate, harvesting newly common terms into the repository standard's consider list.
4. **Propose a diff** to the applicable standard, the structured family module, and this file; confirm before writing.
5. **Update [the source list](references/sources.md)** — bump each `last reviewed` date and refresh the `## Last review` block (what's confirmed, open watch-items). What changed goes in the commit, not a changelog. Mandatory: the source list is the skill's memory of where the standard comes from.

### Mode REVIEW — assess repository purpose, fitness, architecture, and implementation

Run a bounded, human-led repository review: establish the repository's ecosystem responsibility and stable baseline, agree the frame, gather inspectable evidence, assess human comprehension and engineering maturity, interview material uncertainty, identify findings, and route each outcome to `ki-work-roadmap` / `ki-work plan`, `ki-decision-records`, `ki-specs`, a guide, or no action.

Read and follow [the REVIEW procedure](references/mode-review.md). Mechanical `ki repo audit` output may be evidence, but REVIEW does not turn architecture or implementation observations into repository-compliance rules, create an automatic score, or publish a durable route without explicit confirmation. Use `review close <REV-NNN>` to assess whether an optional review record can be pruned.

## Notes

- Requires an authenticated `gh` account with the GitHub **Administration** permission needed for the exact repository setting; inspect the account and planned write before mutation.
- `main` is **open by default**, so local-file fixes from EDUCATE or CONFORM step 2 can land as a direct commit; only a repo that turns `branch-protection` on has its `main` protected by CONFORM.
- **Private repos**: secret scanning is plan-limited and the standard exempts it. Revisit via **GHAS** if the org upgrades — a REFRESH follow-up.
- The auditor is **read-only**; EDUCATE and CONFORM are the write modes. CONFORM limits local mutation to mechanically confirmed gaps before it considers live GitHub changes.
- REVIEW is human-led and judgmental. It may inspect source code, but it does not broaden the AUDIT rubric or CONFORM mutation boundary.
- The structured catalogue owns criterion policy; `ki` owns validation, execution, findings, progress, and reporting.
