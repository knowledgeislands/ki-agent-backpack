---
ki-document-type: mode@2026-11-17T00:55:00Z
---

# Mode EDUCATE — scaffold a new tool repo

Create physical regular files at `docs/guides/developer/definition-of-done.md` and `docs/guides/developer/releasing.md`. Supply procedures appropriate to the repository's own delivery and release lifecycle; there is no universal content template.

_On-demand procedure for tools' EDUCATE mode. The canonical shape, the container-not-contents split, and the capability-conditional rule live in [`SKILL.md`](../SKILL.md) and are already loaded; this file is the procedure only._

1. **Name the repo `tools-<name>`** and confirm the tool's language (bash is the reference; a TS/Bun/Python/Go tool is fine but turns on a different capability path).
2. **Copy from `tools-mgit`** (the reference repo) over inventing — take and adapt:
   - `bin/<name>` — the executable, with the `bash`/`sh` shebang (for a shell tool), a `<NAME>_VERSION=` marker literal, and a `--version`/`-V` case. `chmod +x bin/<name>` and commit (git tracks the bit).
   - `install.sh` — adapt the `REPO`, the `<NAME>_INSTALL_DIR` (default `$HOME/.local/bin`) and `<NAME>_VERSION` (default latest release) env overrides, and the download → verify → install flow. `chmod +x install.sh`.
   - `.github/workflows/ci.yml` — a `shellcheck bin/<name> install.sh` lint job and a `bats tests/` job (for a shell tool).
   - `tests/<name>.bats` — a starter bats suite (for a shell tool).
   - Command-line options — design them against the [command-line conventions](standard-cli-conventions.md) before the first release, when a name is still free to change.
   - `CHANGELOG.md` — begin with one consolidated Pre-1.0 baseline of the current command surface and notable behaviours; 0.x tags and GitHub releases retain the per-release record.
3. **Add `ki-repo`'s files** (README, LICENSE, `.gitignore`, `.editorconfig`) — run `ki-repo`'s EDUCATE for the local-file + GitHub-settings layer.
4. **Declare the config tables.** Add `[skills.ki-repo-tools]` alongside the qualified `ki-repo` declaration; `ki repo conform --repo <repo-path> --skill ki-repo-tools` can add it to an existing parseable configuration. If the tool has a `package.json`, also declare qualified `ki-engineering` and run its EDUCATE.
5. **Set up the Homebrew tap** — add the companion `Formula/<name>.rb` to the tap repo, following [Homebrew tap](#homebrew-tap) below.
6. **Cut the first release** — tag `v0.1.0`, create the GitHub release, and confirm `install.sh` fetches it. Run the checker until clean.

## Homebrew tap

_For a new Homebrew tap. Its shape and the name Homebrew fixes live in the [Homebrew tap standard](standard-homebrew-tap.md)._

1. **Name the repo `homebrew-<x>`.** Homebrew requires the prefix so `brew tap <owner>/<x>` resolves (KI uses `homebrew-tap` → `knowledgeislands/tap`). This is an external constraint — do not deviate.
2. **Create the tap skeleton:**
   - `Formula/` — the directory that makes the repo a tap.
   - `README.md` — in the [Standard Readme](https://github.com/RichardLitt/standard-readme) shape: title, one-line description, `Install` and `Usage` carrying `brew install <owner>/<x>/<formula>`, `Contributing`, `License`, and a `## Formulae` table as the tap's extra section (start it with a header row; add a row per formula).
   - OPTIONAL `.github/workflows/` running [`brew test-bot`](https://docs.brew.sh/BrewTestBot) so the deep formula checks run in CI.
3. **Add the first formula**, `Formula/<tool>.rb`, copying the shape from an existing formula (e.g. `Formula/mgit.rb`): `class <Camel> < Formula`, a `desc` (≤ 80 chars, no leading article), `homepage`, a **versioned-tarball** `url` (`…/archive/refs/tags/vX.Y.Z.tar.gz`), the tarball's `sha256` (`curl -sL <url> | shasum -a 256`), a `license`, a `def install`, and a `test do` that runs the installed binary's basic job on a small input in `testpath` and asserts on its output, not just `--version` or `--help`. Add its row to the README table.
4. **Wire governance.** After `ki-repo` establishes the shared `.ki.toml`, set `primary_shape = "ki-repo-homebrew-tap"` under `[skills.ki-repo]` and add a keyless `[skills.ki-repo-tools]` table, then copy the canonical hooks from `assets/githooks/ki-repo-homebrew-tap/`. Run `ki-repo`'s EDUCATE for the repo-level files and GitHub settings. Do **not** add `[skills.ki-engineering]`—a tap has no TypeScript toolchain.
5. **Verify.** Run `ki repo audit --skill ki-repo-tools --repo <path>` to 0 FAIL, then run `brew style` and `brew audit --strict` explicitly on each formula. Confirm `brew install <owner>/<x>/<tool>` works before publishing.
