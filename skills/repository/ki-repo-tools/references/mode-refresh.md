---
ki-document-type: mode@2026-11-17T00:55:00Z
---

# Mode REFRESH — re-anchor the standard to its sources

**Precondition:** REFRESH edits this skill's own canonical files, which exist only in `ki-agent-backpack`. Invoked from an installed copy, it stops here and names the backpack as where to run it — or, for a pattern recurring across bases, routes it through `ki-repo-kb`'s IMPROVE mode instead.

_On-demand procedure for tools' REFRESH mode. The cadence and source list are declared in [`sources.md`](sources.md). The full standard lives in [`standard-tool-repositories.md`](standard-tool-repositories.md)._

The tool-repo standard sits on top of moving external specs (shellcheck, bats, keep-a-changelog, semver, XDG) and the reference repos `tools-mgit` and `tools-ki`. This mode keeps the standard honest — it re-fetches each source and diffs it against what the skill codifies, so the audit never green-lights a repo against a spec that has moved on. Run it on the declared cadence (see [`sources.md`](sources.md)), or when someone asks "is our tools standard up to date".

1. **Read [the source list](sources.md)** — the tracked external specs + the in-house reference repo, each with a `Last reviewed` date and what it governs.
2. **Re-fetch each source** (WebFetch/WebSearch) and **diff against the [standard](standard-tool-repositories.md), [rubric](rubric.md), and structured catalogue under `scripts/rubric/items/`**. Look for: changed shellcheck defaults/severities, bats-core API or install changes, a new Keep a Changelog / SemVer revision, XDG spec changes, and any new capability signal the reference repo has adopted.
3. **Scan `tools-mgit`, `tools-ki`** (and any other `tools-*` repos) for emergent patterns the standard hasn't captured — promote the good ones; flag any that contradict the standard.
4. **Separate spec-driven from house style.** A change is a new _requirement_ only if it traces to an external spec in the source list; otherwise it is a workspace preference and must be labelled as such.
5. **Propose a diff** to the standard and native rubric definition (where a check became mechanical). Every new **[M]** item must land as a native checker check. Confirm before writing, then republish [the rubric](rubric.md) with `ki dev skill rubric ki-repo-tools --write`.
6. **Update [the source list](sources.md)** — bump each `Last reviewed` date, add/retire sources, and refresh the `## Last review` block. This step is mandatory: the source list is the skill's memory of where the standard comes from.

## Homebrew tap

_For the Homebrew sources behind the [Homebrew tap standard](standard-homebrew-tap.md), on the same cadence as the rest of [the source list](sources.md)._

The tap standard **wraps Homebrew's external standard** — the Formula Cookbook, `brew audit`, and `brew style`. Those move (new required fields, deprecated DSL, changed style rules), and the in-house standard is built on top. This mode keeps it honest: it pulls Homebrew's current rules and diffs them against what this skill codifies, so the audit never green-lights a formula against a Cookbook that has moved on. Run it on the declared cadence (see [`sources.md`](sources.md)) or when someone asks "is our homebrew-tap standard up to date".

1. **Read [the source list](sources.md)** — the tracked Homebrew sources (Formula Cookbook, `brew audit` reference, `brew style`/rubocop-cask, Acceptable Formulae, the tap docs), each with a `Last reviewed` date and what it governs.
2. **Re-fetch each source** (WebFetch/WebSearch) and **diff against the [Homebrew tap standard](standard-homebrew-tap.md), [rubric](rubric.md), and structured `scripts/rubric/items/tap.ts` contract**. Look for: new or renamed required formula fields, changed `desc` rules (length, forbidden leading words), new sourcing guidance (tarball vs `head`, `livecheck`), changed `brew audit --strict` behaviour, and any change to tap naming or `brew test-bot`.
3. **Separate spec from shape.** A change is a new _requirement_ only if it is Homebrew's own (traces to a Cookbook/`brew` source); otherwise it is this skill's tap-shape convention and must stay labelled as such so a house preference is never presented as a Homebrew "MUST".
4. **Reconcile the mirrored check.** `TAP-4` mirrors a `brew style` rule so it fires without invoking `brew`—if that rule changed upstream, update the item in `scripts/rubric/items/tap.ts` to match, or the local check will disagree with `brew`.
5. **Propose a diff** to the standard, rubric, and (where a check became mechanical or a mirrored rule moved) the checker. Confirm before writing.
6. **Update [the source list](sources.md)** — bump each `Last reviewed` date, add/retire sources, and refresh the `## Last review` block (what changed goes in the commit, not a changelog). This step is mandatory: the source list is the skill's memory of where the standard comes from.
