# Sources — where the standard comes from

**Refresh:** external-spec · quarterly

The authoritative Homebrew sources behind the [Homebrew tap standard](standards-homebrew-tap.md) and [Audit Rubric](rubric.md). This skill **wraps an external standard**: Homebrew defines what a valid tap and formula are, and the in-house standard is only the tap-**shape** layer on top. Mode REFRESH reads this file, re-fetches each source, diffs it against the standard, rubric, and structured `scripts/rubric/items/index.ts`, then **bumps the `Last reviewed` dates** and refreshes the `## Last review` block below (what changed is recorded in the commit, not a changelog). This is the skill's memory of where the standard comes from—keep it current.

A finding is only **spec-driven** if it traces to the Authoritative table (Homebrew's own rules); everything else is this skill's tap-shape convention and should be labelled as such so it is not mistaken for a Homebrew requirement. The Advisory table below is weaker again: it informs guidance and judgment review, and never produces a mechanical finding.

## Authoritative (Homebrew)

| Tag      | Source                                       | Governs | Last reviewed |
| -------- | -------------------------------------------- | ------- | ------------- |
| COOKBOOK | [Formula Cookbook][cookbook]                 | †       | 2026-11-17    |
| AUDIT    | [`brew audit` command reference][audit]      | ‡       | 2026-11-15    |
| STYLE    | [`brew style` / rubocop formula cops][style] | §       | 2026-11-15    |
| ACCEPT   | [Acceptable Formulae][acceptable]            | ¶       | 2026-11-15    |
| TAP      | [Taps (third-party repositories)][taps]      | ‖       | 2026-11-15    |
| TESTBOT  | [BrewTestBot][testbot]                       | ※       | 2026-11-15    |

† The required formula parts (`class < Formula`, `desc`, `homepage`, `url`, `sha256`, `license`, `install`, `test do`) and their idioms—the source of `TAP-2` and `TAP-3`.

‡ What `brew audit --strict` enforces—separate package-manager evidence; never executed by static `TAP-7`.

§ The `desc` rules (≤ 80 chars, no leading "A"/"An"/"The") and RuboCop formula cops—the source of `TAP-4`, mirrored without invoking `brew`.

¶ Whether a tool is eligible for a formula (notability, stable release, versioned source) — background for the sourcing rule.

‖ How a tap repo is named (`homebrew-<x>`) and resolved by `brew tap`/`brew install` — the source of the fixed-name constraint.

※ The `brew test-bot` CI action a tap MAY run — the backstop when a local audit has no `brew`.

## Advisory (non-normative)

| Tag    | Source                        | Governs | Last reviewed |
| ------ | ----------------------------- | ------- | ------------- |
| README | [Standard Readme][standardreadme] | ⁂       | 2026-11-15    |

⁂ The section set a tap README follows (title, description, Install, Usage, Contributing, License) with the `## Formulae` table as an extra section — advisory shape guidance for EDUCATE, CONFORM, and `TAP-J5` only. It creates no mechanical check: generic README composition is `ki-authoring`'s and README presence is `ki-repo`'s.

## Last review

Focused review, **2026-11-17**: the Cookbook's "Add a test to the formula" section re-read. It still calls `foo --version` and `foo --help` bad tests, though better than none, and asks for a test of the tool's basic function on a small input. The standard's `test do` row, the SKILL example, EDUCATE, the AUDIT judgment pass and `TAP-J2`'s judgment question now ask for that, with a `--version` or `--help` assertion as the weak floor, which closes that point of the 2026-11-15 watch. The reference tap's `mgit` formula still asserts on `--version` and `--help`, which `TAP-J2` now reports as weak; changing it is the tap's own work.

REFRESH last run **2026-11-15**. All seven sources were re-read and confirmed for what the standard relies on. The `desc` rule `TAP-4` mirrors still holds: Homebrew's shared desc cop keeps an 80-character limit and rejects a leading "A", "An" or "The". The tap naming rule, the versioned-release preference and the optional `brew test-bot` all stand, and Standard Readme's section order is unchanged. Three things moved. The Brew Test Bot page is now titled BrewTestBot at a new address, and its links here, in the standard and in EDUCATE were updated. The `desc` wording now lives on a shared Description Guidelines page, which leaves length and capitalisation to `brew style`, so the Cookbook's "Audit the formula" section no longer mentions `brew style` at all. Since Homebrew 6.0.0, a non-official tap needs explicit trust: a fully qualified `brew install <owner>/<x>/<formula>` trusts only that formula, and `brew tap` followed by a short name fails until `brew trust` is run. Being watched, and raised with the owner rather than changed here: the Cookbook calls `--version` and `--help` "bad tests", though "better than no test at all", while the standard's `test do` row asks for exactly those assertions (taken on 2026-11-17, above); whether the README guidance should mention tap trust; and whether the STYLE source should point at the Description Guidelines and the desc cop instead. The Cookbook's new `compatibility_version` and `post_install_steps` concern `homebrew/core` and stay with `brew audit`.

REFRESH last run **2026-07-09** (initial authoring). The standard was written against the live Homebrew documentation as of this date and against the reference tap `knowledgeislands/homebrew-tap` (`Formula/mgit.rb`). No prior review to diff against.

**Open watch-items:**

- **Homebrew is a live target.** The Cookbook and `brew audit`/`brew style` cops change without a versioned spec release — hence the `quarterly` cadence rather than `on-change`. Re-diff the required-fields list and the `desc` cops each cycle.
- **`TAP-4` is a mirror.** The ≤ 80-character and no-leading-article rule is copied from `brew style` so the check runs without invoking `brew`. If that cop changes upstream, update the item in `scripts/rubric/items/tap.ts` or it will disagree with `brew`.
- **No `head` / `bottle` guidance yet.** The standard covers stable versioned-tarball formulae only; if a KI tool ever ships bottles or a `head` spec, extend the standard and rubric.
- **Standard Readme is advisory, added 2026-08-28.** It sits outside Homebrew's rules and must stay advisory here: if `ki-authoring` gains its own README convention set (KI-HARNESS-GOV-048), reconcile this entry with it rather than letting the two diverge.

[cookbook]: https://docs.brew.sh/Formula-Cookbook
[standardreadme]: https://github.com/RichardLitt/standard-readme
[audit]: https://docs.brew.sh/Manpage#audit-options-formulacask-
[style]: https://docs.brew.sh/Formula-Cookbook#audit-the-formula
[acceptable]: https://docs.brew.sh/Acceptable-Formulae
[taps]: https://docs.brew.sh/Taps
[testbot]: https://docs.brew.sh/BrewTestBot
