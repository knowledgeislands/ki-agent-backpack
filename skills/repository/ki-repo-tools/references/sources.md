# Sources — where the standard comes from

**Refresh:** external-spec · quarterly

The authoritative and in-house sources behind the [tool-repository standard](standards-tool-repositories.md) and [rubric](rubric.md). Mode REFRESH reads this file, re-fetches each source, and diffs it against the standard plus the structured catalogue under `scripts/rubric/items/`. It then **bumps the `Last reviewed` dates** and refreshes the `## Last review` block below; what changed belongs in the commit, not a changelog here.

Two layers feed the standard: the **external specs** (shellcheck, bats, keep-a-changelog, semver, XDG) that a conformant tool repo builds on, and the **in-house tool repos** that supply implementation evidence for shared practice. A finding is only "spec-driven" if it traces to an external spec; everything else is house style layered on top and should be labelled as such.

## External specs

| Tag | Source | Governs | Last reviewed |
| --- | --- | --- | --- |
| SHELLCHECK | [ShellCheck][shellcheck] | Shell-tool lint gate (SHELL-LINT) — clean in CI | 2026-11-15 |
| BATS | [bats-core][bats] | Shell-tool test framework (SHELL-TEST) — `*.bats` + CI run; fatal `[[ ]]` and `!` assertions (SHELL-FATAL) | 2026-11-15 |
| CHANGELOG | [Keep a Changelog][keepachangelog] | Optional chronological changelog shape | 2026-11-15 |
| SEMVER | [Semantic Versioning 2.0.0][semver] | `vX.Y.Z` version marker + release tags | 2026-11-15 |
| XDG | [XDG Base Directory Specification][xdg] | Where the tool writes config/state/cache; the [command-line conventions](standards-cli-conventions.md#configuration-state-and-cache) directory table | 2026-11-15 |
| POSIX-UTIL | [POSIX.1-2024 Utility Conventions][posix-util] | [Command-line](standards-cli-conventions.md) option syntax, `--`, `-` as standard input | 2026-11-15 |
| POSIX-FIND | [POSIX `find`][posix-find] and the `cp`, `chown`, `cd` pages | `-H`, `-L` and `-P` symbolic-link options | 2026-11-15 |
| GNU-CLI | [GNU Coding Standards: Command-Line Interfaces][gnu-cli] | Long options, `--help`, `--version`, the option table | 2026-10-18 |
| BASH-EXIT | [Bash Reference Manual: Exit Status][bash-exit] | 2 for usage, 126, 127 and 128 + n | 2026-10-18 |
| CLIG | [Command Line Interface Guidelines][clig] | Streams, prompts, colour, signals, secrets, configuration precedence | 2026-11-15 |
| NO-COLOR | [NO_COLOR][no-color] | Disabling colour by environment | 2026-11-15 |

## In-house tool repositories

The tool repositories under `knowledgeislands/` provide evidence for house style. When an implementation and the standard diverge, decide which is right and reconcile; keep shared policy in the skill and tool-specific procedures in the local guides.

| Tag | Source | Governs | Last reviewed |
| --- | --- | --- | --- |
| MGIT | `tools-mgit` | Bash/Git boundary, installer overrides, workspace/repository command grouping; fatal Bats assertions under Bash 3.2 (`00ef0de`) | 2026-10-04 |
| KI | `tools-ki` | Typed command host, diagnostics, completion, signed installer, manual distribution | 2026-10-04 |
| RIG | `tools-rig` | Authored assembly, terminal ownership, workstation isolation, installer verification | 2026-10-04 |
| TECHNE | `tools-techne` | Typed operator boundary, compiled archives, remote-environment hold | 2026-10-04 |
| ALMANAC | `tools-git-almanac` | Read-only Git inspection, reporting boundary, Node artifact delivery | 2026-10-04 |

## Last review

The external-spec REFRESH of **15 November 2026** re-read nine of the eleven external sources and confirmed them. ShellCheck is unchanged. bats-core 1.14.0, released in July, still supports Bash 3.2, and its gotchas page still says a failing `[[ ]]` mid-test passes on Bash before 4.1 and that `|| false` fixes both that and `!`, which is what SHELL-FATAL asks for. Keep a Changelog is still 1.1.0, and Semantic Versioning still 2.0.0, which still treats a `v` prefix as a tag convention rather than part of the version. The XDG specification is still version 0.8 with the same defaults and the same rule for relative paths, but it has moved to a new address, which is now linked. The POSIX.1-2024 utility guidelines and the `find`, `cp`, `chown` and `cd` pages, clig.dev and `NO_COLOR` read as the command-line conventions say. The two GNU sources, the Coding Standards' command-line page and the Bash manual's Exit Status page, refused every request this run, so they keep 18 October. Being watched: bats-core 1.14.0 now applies `set -e` inside `run` and fails a suite that finds no tests; POSIX `find` has only `-H` and `-L`, with `-P` coming from `cp`, `chown` and the GNU and BSD `find`; clig.dev would let `-v` mean version, where the house rule keeps it for verbose; and all five tool repositories have changed a great deal since the 4 October in-house review, including CI and release workflows that now run only on manual dispatch. The in-house rows were not re-reviewed and keep their dates.

The bounded in-house review of 29 October 2026 records RELEASE-NOTICE: after an authorised release, the releasing territory owner or coordinator informs affected owning work through its messages queue, falling back to receiving State of play when ownership is unclear, with version, change, compatibility, adoption and reply needs. Existing release approval, receiver ownership and routing boundaries remain; no release, consumer selection engine or rollout is performed. External sources were not re-fetched.

The external-spec REFRESH last ran **2026-07-30**. The targeted in-house review on **2026-10-04** compared all five tools' standing instructions and delivery/release guides, clarified shared policy versus executable local procedures, and consolidated repeated guidance. Installer verification examples now require explicit disposable executable/manual destinations, unavailable checks remain visible, and post-hook committed-path inspection belongs to `ki-git`. Repeatable CLI parity remains a native-test responsibility; static hosted audit does not execute tools or claim semantic conformance. External specifications were not re-fetched in this review.

The CLI-CONVENTIONS addition on **2026-10-18** wrote the [command-line conventions](standards-cli-conventions.md) from the POSIX, GNU, Bash, clig.dev, `NO_COLOR` and XDG sources above and from the symbolic-link survey of the `mgit-learn` run, comparing `tools-ki`, `tools-mgit` and `tools-rig` against it. The sources were cited from their published text without being re-fetched in that run; the next external-spec REFRESH re-reads them.

The owner-approved diagnostic review on **2026-10-05** compared all five tools' `diag` and `doctor` implementations and Rig's table renderer. It established common execution-context facts, evidence-backed local/release/unknown installation provenance, scoped health verdicts and counts, share-safe default diagnostics, and width-aware tables with lossless identifiers and deterministic redirected output. These are house conventions rather than new external requirements. Isolated repository-native fixtures own runtime proof; the hosted audit continues to report the semantic review as judgment work without launching target executables.

**Open watch-items:**

- Homebrew's own audit surface (`brew audit` / `brew style`, the Formula Cookbook) is tracked by the sibling `ki-repo-homebrew-tap` skill, not here — reconcile the tap-facing half there.
- If a second shell-specific concern emerges beyond shellcheck + bats, reconsider a dedicated `ki-shell` skill (deliberately not created at n=1).

[shellcheck]: https://www.shellcheck.net/
[bats]: https://bats-core.readthedocs.io/
[keepachangelog]: https://keepachangelog.com/en/1.1.0/
[semver]: https://semver.org/spec/v2.0.0.html
[xdg]: https://specifications.freedesktop.org/basedir/latest/
[posix-util]: https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap12.html
[posix-find]: https://pubs.opengroup.org/onlinepubs/9799919799/utilities/find.html
[gnu-cli]: https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html
[bash-exit]: https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html
[clig]: https://clig.dev/
[no-color]: https://no-color.org/
