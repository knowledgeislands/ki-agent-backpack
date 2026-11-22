---
ki-document-type: mode@2026-11-17T00:55:00Z
---

# Mode AUDIT — check a repository against the standard

The mechanical audit treats missing or non-regular `docs/guides/developer/definition-of-done.md` and `docs/guides/developer/releasing.md` as FAIL findings. It verifies only their exact paths and safe file type; review their repository-defined contents against the shared checklists in the judgment pass.

_On-demand procedure for `ki-repo-tools` AUDIT. The canonical shape, the container-not-contents split, and the capability-conditional rule live in [`SKILL.md`](../SKILL.md) and are already loaded; this file owns only the audit sequence._

1. **Identify the target.** Confirm the repo path (default: the cwd repo). Note the tool name (`<name>` from `tools-<name>`) and the primary bin file's language (its shebang).
2. **Run the mechanical checker.** `ki repo audit --repo <repo-path> --skill ki-repo-tools` covers the static container: `bin/` + exec bit (FAIL), `install.sh`, local release markers, `CHANGELOG.md`, CI workflow source, `tests/` or `src/tests/`, the shell capability conditionals (shellcheck + bats), the physical `man/<tool>.1`→`mandoc` CI conditional, the `package.json`→`ki-engineering` note, and the qualified `ki-repo-tools` marker. It never executes the tool, installer, CI, or network validator. Capture the result verbatim — downstream tooling renders it; do not re-derive what it found.
3. **Run `ki-repo`'s audit too.** The tool repo's standard files (README, LICENSE, `.gitignore`, `.editorconfig`) and GitHub settings are `ki-repo`'s — run its checker for that layer. A TS/Bun tool (a `package.json` present) also runs `ki-engineering`'s audit.
4. **Do the judgment pass the script can't** — walk [rubric.md](rubric.md)'s **[J]** items:
   - **Developer guide alignment**: compare the local definition of done with [change readiness](standard-change-readiness.md) and the release guide with [release readiness](standard-release-readiness.md). Confirm they name shared owners and retain accurate local commands, destinations, risks and procedures without copying common policy. Check `AGENTS.md` for repeated guidance that belongs in a skill and duplicate local gate lists. A shared-checklist citation alone does not prove semantic alignment.
   - **`install.sh` robustness**: read it — POSIX-ish, honours the target-dir + version env overrides, verifies the download, idempotent on re-run.
   - **Release candidate**: for a concrete release, work through [the release-readiness checklist](standard-release-readiness.md); otherwise, check the single version marker against the latest `vX.Y.Z` tag (`git tag`, `gh release list`). For 1.0+, also check the first dated changelog entry; for 0.x, review the consolidated baseline instead of comparing a version heading.
   - **Input and output contracts**: newly written user configuration omits schema/version metadata; reads accept only recognised legacy shapes and repair is explicit. Each generated public contract has its own v1 identity before 1.0, while private persisted-state migrations retain the markers they need.
   - **CHANGELOG shape**: one consolidated Pre-1.0 command and behaviour baseline during 0.x; dated semantic-version entries from 1.0 onward.
   - **Shared CLI surface**: `--help` succeeds and matches the shipped surface; successful commands, operational errors, and invalid owned syntax use statuses 0, 1, and 2 respectively; completion is singular; owned syntax fails as a namespaced error with usage before `--help`. Read the options against the [command-line conventions](standard-cli-conventions.md) and report a flag letter, stream, exit status, colour or directory that departs from them as advisory.
   - **Manual authoring**: a physical manual's command groups match help; its roff uses the portable macros, a `\&` line follows each `.SH` / `.SS`, and `mandoc -Tutf8 … | col -b` renders the intended spacing.
   - **Manual distribution**: where a physical manual exists, the release installer installs it and `--link` links it with the executable.
   - **Homebrew formula**: a companion `Formula/<name>.rb` exists in the tap as the second channel (audit the tap itself under [Homebrew tap](#homebrew-tap) below).
   - **One tool per repo**; XDG for any config/state the tool writes.
5. **Report.** Group findings on the ladder: a missing/non-executable `bin/<tool>` is a **FAIL**; a missing `install.sh` / `CHANGELOG` / CI source / tests / capability gate is a **WARN**; runtime `--version`, release/tag, and executed CI checks are separate evidence for a human. Cite the rubric ID and the fix for each.

## Homebrew tap

_For a Homebrew tap, the `TAP` family's repository: a tap runs only `TAP` and `CONFIG`, so this sequence replaces the tool-repository steps above. Its shape and rules live in the [Homebrew tap standard](standard-homebrew-tap.md)._

1. **Identify the target.** Confirm the tap path (default: the cwd repo). It should be a `homebrew-<x>` repo with a `Formula/` directory.
2. **Run the mechanical checker.** `ki repo audit --skill ki-repo-tools --repo <tap-path>` checks static `Formula/` presence, per-formula class, fields, description style, versioned URL, the README table, and the `[skills.ki-repo-tools]` table. `TAP-7` never runs Homebrew; `brew style` and `brew audit --strict` require separately authorized isolated diagnostics.
3. **Also run `ki-repo`'s audit.** The tap is first a repo: `ki repo audit --skill ki-repo --repo <tap-path>` covers README, LICENSE, `.gitignore`, GitHub settings, and security. The tap is clean only when both pass. It does **not** run `ki-engineering` because a tap has no `package.json` toolchain.
4. **Keep package-manager evidence separate.** `brew audit --strict`, `brew style`, and `brew test-bot` are not structural evidence. Run them only in an explicitly authorized isolated diagnostic against the intended tap and report unavailable evidence as unavailable, never as a structural PASS. Those commands resolve a formula **by name through the tapped clone** under `$(brew --repository)/Library/Taps/<owner>/homebrew-<x>/`, and `brew audit <path>` is disabled outright, so an unpushed or working-copy formula has no name to resolve. Either push the change first, or stage the single formula file into that clone, run the commands, and remove it afterwards — an untracked file left there collides with the tracked one on the next `brew update`. `brew style <path>` is the exception: it accepts a path and needs neither.
5. **Do the judgment pass the host cannot.** Walk the [rubric](rubric.md)'s **[J]** items:
   - **Meaningful test.** The `test do` exercises the installed binary doing its basic job on a small input in `testpath`, with an assertion on the result, not a placeholder. A test that only asserts on `--version` or `--help` output is weak: Homebrew's Cookbook calls it a bad test, though better than none, so report it unless the tool has no basic operation it can run offline.
   - **Honest install.** `def install` installs what the `tools-*` repo actually ships (`bin/<tool>`), and the `sha256` matches the tarball at `url`.
   - **Sourcing.** The `url` tag version matches `#{version}`; not a branch/HEAD.
   - **Table freshness.** Each README row's description + source link is correct, not a stale placeholder.
   - **CI backstop.** If local `brew` is unavailable, confirm a `brew test-bot` workflow runs the deep checks.
6. **Report.** Group on the ladder: no `Formula/` is a **FAIL**; a missing field, non-versioned URL, unlisted formula, unavailable/stale Homebrew validation, or `brew` finding is a **WARN**. Cite `Formula/<file>` and give the fix. Label each finding **spec** (Homebrew's, via `brew` or the Cookbook) or **shape** (this skill's tap convention) so a house preference is never presented as a Homebrew "MUST".
