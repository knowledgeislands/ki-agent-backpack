---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T02:10:23Z
ki-refresh: canonical · on-change
---

# Sources — where the Keystone standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house sources](#211-in-house-sources)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources and decisions behind [the Keystone standard](standard-keystone.md), its [rubric](rubric.md), and [the bootstrap standard](standard-bootstrap.md) behind the BOOTSTRAP mode. Mode REFRESH reads this file, compares the standard and the guild purposes in the SKILL.md with the decisions below, and records what it checked in the [Last review](#4-last-review) block.

[Back to contents](#contents)

## 2. Outside sources

Keystone's guild rules have none: Keystone is Knowledge Islands' own, and the industry has no word for a guild of skills, as `ki-agentic-ecosystems`' guild card records. The bootstrap guidance follows in-house sources only.

### 2.1 Authoritative

Every source the bootstrap guidance follows is in-house.

#### 2.1.1 In-house sources

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ADR — [ADR-KI-HARNESS-012](../../../../docs/decisions/ADR-KI-HARNESS-012-compatible-harness-publication-and-governed-rubric-boundary.md) | backpack payload, capability, and native-rubric ownership | 2026-11-23 |
| HC — [Compatible harness decision, ADR-KI-HARNESS-012](../../../../docs/decisions/ADR-KI-HARNESS-012-compatible-harness-publication-and-governed-rubric-boundary.md) | backpack identity, capability identity, and activation boundary | 2026-11-23 |
| TK — installed `ki --help` surfaces | current public grammar, bootstrap, activation, local development, and diagnostics | 2026-11-23 |
| KR — `ki-repo` skill | `.ki.toml` and declared repository coverage | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| WEBSITE-APP-NAME a | `ki-repo-website-app` is renamed `ki-repo-website-interactive`, a name that says the kind of site without naming a framework. Kris, 22 November 2026, about 22:16 GMT, in chat: "WEBSITE-APP-NAME a"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | The Repository row of the guild map | In force |
| KEYSTONE-HUB | The owner's decision, in the Cairn summit's change 14: Keystone is the guild of guilds; its lead, `ki-keystone`, mostly signposts, and each guild's lead is a member of Keystone as well as the root of its own guild; there is no deeper hierarchy. | 2026-11-13 | [4.1](standard-keystone.md#41-the-joining-rule), [4.2](standard-keystone.md#42-one-lead-for-each-guild) | In force |
| KEYSTONE-MIN | The owner's decision, in change 14: Keystone holds only what every other guild rests on, and never becomes a dumping ground. | 2026-11-13 | [4.1](standard-keystone.md#41-the-joining-rule) | In force |
| GUILD-LEAD | The owner's decision, in change 14: each guild is a tree of skills led by one lead skill. | 2026-11-13 | [4.2](standard-keystone.md#42-one-lead-for-each-guild) | In force |
| GUILD-PLACE | The owner's decision, in change 14: each skill's frontmatter names its guild and a lead the guild it leads; the folder a skill sits in is storage, not structure. | 2026-11-13 | [4.2](standard-keystone.md#42-one-lead-for-each-guild), [4.3](standard-keystone.md#43-the-guild-map) | In force |
| KEYSTONE-SKILL | The owner's decision, in change 14: `ki-keystone` holds the guild map, each guild's purpose in a line and its lead, generated from frontmatter; where a session starts in a repository, `ki-repo`, `ki-authoring` and `ki-agentic-ecosystems`; and the rule for joining Keystone, pointing to `ki-skills` for the rest. | 2026-11-13 | [4.3](standard-keystone.md#43-the-guild-map), [4.4](standard-keystone.md#44-where-a-session-starts) | In force; the backpack's catalogue stays with `ki-repo-backpack` for now, grouped by the same guilds |
| BOOT-HOME | Kris's decision: this skill owns the one machine-readiness checklist from a fresh machine to a working coordinator, ending in "Ready to coordinate" with observable hook and output-style checks, and `ki-coordination`'s Bootstrap cites it as its "Before the opener" step. | 2026-10-26 | [bootstrap standard](standard-bootstrap.md#47-machine-readiness-for-coordinating-work) | In force |
| BOOTSTRAP-FOLD | The owner's decision, in change 14: `ki-bootstrap` becomes `ki-keystone bootstrap`, its body a reference loaded only when the mode is called. | 2026-11-13 | [mode-bootstrap.md](mode-bootstrap.md) | In force |
| OPENER-DELEGATE | Kris's decision in conversation, option a: every opener or brief that starts a session tells it to delegate its work to its agent host's own subagents, stay responsive to its messages and to the owner while that work runs, and let the subagents do most of the work, checking what they return before posting it. | 2026-11-14 | [bootstrap standard](standard-bootstrap.md#47-machine-readiness-for-coordinating-work) | In force |
| OPENER-NAME | Kris's decision in conversation, option a: every opener that starts a new agent session names its thread line and tells the session to rename itself to it as its first act. | 2026-11-14 | [bootstrap standard](standard-bootstrap.md#47-machine-readiness-for-coordinating-work) | In force |
| SEAT-LINE | Kris's decision in conversation, option a: a seat working in a package without its keys is named `<role glyph> <work-id>+<role>`, under `ki-work-package`'s thread line. | 2026-11-14 | [bootstrap standard](standard-bootstrap.md#47-machine-readiness-for-coordinating-work) | In force; the seat re-spelt `<package>@<role>` under SEAT-AT |
| GUILD-TREE | The owner's decision, in change 14, option a: the guild tree, with each guild's one-line purpose as its working label. | 2026-11-14 | [SKILL.md](../SKILL.md#the-guilds) | In force |
| SEAT-AT | Kris's decision, option a, relayed by the Cairn summit's guardian from the summit's [change 20](https://github.com/krisb/ki-cairn-store/blob/7fb6be3/work/cairn/cairn.summit/20-learnings.change.md#45-decided): a seat is `<package>@<role>`, or `<package>+<slug>@<role>` in a sub-package, in place of `<work id>+<role>`, so a seat working in a package without its keys is named `<role glyph> <package>@<role>`, under `ki-work-package`'s thread line. | 2026-11-16 | [bootstrap standard](standard-bootstrap.md#47-machine-readiness-for-coordinating-work) | In force |
| NAME-FIRST | Kris's decision, option a, relayed by the Cairn summit's guardian: where a seat's actor is named, the thread line puts the actor's `ki-name` first and the seat's form in brackets, as `Kitteth (🪨 🔑 cairn.summit)`, under `ki-work-package`'s thread line; an unnamed seat keeps the bare form. | 2026-11-17 | [bootstrap standard](standard-bootstrap.md#47-machine-readiness-for-coordinating-work) | In force |
| RELEASED-MODE | Kris's decision, option a, taken on 17 November 2026 in the Cairn summit's [change 13](https://github.com/krisb/ki-cairn-store/blob/c17433e9/work/cairn/cairn.summit/13-runtimes-and-skill-copies.change.md#42-standalone-repositories-carry-their-skills) and given its yes through TOOL-RELEASES: a released-backpack mode, linked to a verified backpack release rather than the working checkout and between current and vendored, is part of `ki-keystone bootstrap`'s verified backpack selection rather than a mode of its own in `tools-ki`. | 2026-11-17 | [bootstrap standard](standard-bootstrap.md#49-verified-backpack-selection), [mode-bootstrap.md](mode-bootstrap.md#released-backpack-mode) | In force |
| TOOL-RELEASES | Kris's decision, option a, by voice on 22 November 2026, recorded in the ki summit's [change 12](https://github.com/krisb/ki-cairn-store/blob/e411307b/work/ki/ki.summit/12-tools-veneer.change.md#34-decided): keep the shared Homebrew tap and independent releases, one formula for each tool with its own release cycle. The canonical backpack's release therefore moves with the `ki` release that pins it. | 2026-11-22 | [bootstrap standard](standard-bootstrap.md#49-verified-backpack-selection) | In force |
| KEYSTONE-FIXES | The ten Keystone skills are all kept, and their mechanical fixes land in the Cairn summit's change 10, step 6.3; for this skill, "Where to start" matches how sessions really begin, with `ki-coordination` for opened work and `ki-work` for choosing and doing work, the guild map then finding `ki-repo`, `ki-authoring` and `ki-agentic-ecosystems`. It refines KEYSTONE-SKILL's three starting skills. Kris, 22 November 2026, about 19:33 GMT, at the Keystone guild's sitting, card: "Keep all, fix". | 2026-11-22 | [4.4](standard-keystone.md#44-where-a-session-starts), [SKILL.md](../SKILL.md) | In force |
| BOOTSTRAP-HOME | Option b: `ki-keystone bootstrap` stays in `ki-keystone`, where a new session starts, and only its repeat of `ki-repo`'s registry and activation rules is trimmed, pointing to `ki-repo` instead. Kris, 22 November 2026, about 19:43 GMT, at the Keystone guild's sitting, card: "Keep in ki-keystone"; on its low use he added: "We haven't done a bootstrap for a while, because we haven't had need to do a bootstrap for a while." | 2026-11-22 | [bootstrap 4.2](standard-bootstrap.md#42-declarative-repository-selection), [the bootstrap reference](mode-bootstrap.md#repository-operations) | In force |
| TRADES-DROP | Option a: `ki-trades` and `ki-trade` are dropped now, ahead of the 31 December review TRADES-FATE set, so the guild map's Work row no longer lists them. Kris, 22 November 2026, about 19:59 GMT, at the Work guild's sitting in the Cairn summit's change 10, card: "Drop now". | 2026-11-22 | [SKILL.md](../SKILL.md) | In force |
| KB-FOLD b | "Fold three, split streams", Kris, 22 November 2026, about 20:49 GMT, the Repository guild's sitting, recorded in the Cairn summit's [change 10](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/10-skills-review.change.md#43-decided): four Repository guild members, `ki-repo-kb-activities`, `ki-repo-kb-live-artifacts`, `ki-repo-kb-principal` and `ki-repo-kb-streams`, leave the backpack, so the generated guild map drops them. | 2026-11-22 | [SKILL.md](../SKILL.md) | In force |
| EXCHANGE-HOME a | `ki-exchange-dynamics` moves from Acquire to Authoring, so the generated guild map lists it under Authoring. Kris, 22 November 2026, about 22:25 GMT, the Acquire guild's sitting in the Cairn summit's change 10, card: "I presume you mean move it to the authoring because it becomes another document format that we create standards for." | 2026-11-22 | [SKILL.md](../SKILL.md) | In force |
| RADAR-MERGE a | “a: `ki-agentic-radar` and `ki-model-radar` merge into one `ki-radar`: a shared radar standard, a standard and snapshot for each subject kind kept intact, one rubric, one REFRESH, the evidence schemas merged, and a monthly cadence matching how they are run; MODEL-TIERS' tiers go with it (Kris, 22 November, about 22:33 GMT, the Agentic ecosystems guild's sitting, card: "One ki-radar, monthly")”, Cairn summit's change 10, 4.3, landed under step 6.3. The guild map lists `ki-radar` in place of the two radars. | 2026-11-22 | [SKILL.md](../SKILL.md) | In force |
| ORCA-WORKERS b | “b: `ki-delegation-orca` is retired; background work goes to each host's own subagents under `ki-delegation`, and if Kris later asks for Orca workers, Orca's own `orchestration` skill covers the commands; the skill folder goes, its mentions in `ki-delegation`, `ki-agentic-bots`, `ki-coordination`, the guild map and the catalogue are removed or repointed, any declaration is dropped, and `tools-ki`'s retired-name tolerance covers it; the bots' own use of Orca in `ki-agentic-bots` is unchanged (Kris, 22 November, about 22:45 GMT, the Agentic ecosystems guild's sitting, card: "Retire it")”, Cairn summit's change 10, 4.3, landed under step 6.3. Applied here: the guild map drops `ki-delegation-orca` from the Agentic ecosystems guild. | 2026-11-22 | [SKILL.md](../SKILL.md) | In force |

[Back to contents](#contents)

## 4. Last review

On 23 November 2026 REFRESH re-checked the in-house sources; nothing in the guidance changed. ADR-KI-HARNESS-012 is still current, though its text still says harness and names `knowledgeislands/ki-agentic-harness` where the skill says backpack. Every `ki` command the guidance names exists in `tools-ki` 0.17.0, the latest tag, including `ki backpack install`, `reinstall`, `info` and `uninstall`, `ki repo skill add` and `remove`, `ki dev local set`, `on` and `off`, and `ki bootstrap --refresh`. `ki-repo` still owns the `.ki.toml` contract, with coverage kept separate from user activation. `ki doctor` does not yet carry the readiness checks.

On 23 November 2026, under EXCHANGE-HOME a, the generated guild map moved `ki-exchange-dynamics` from the Acquire row to the Authoring row; no rule or criterion changed.

On 22 November 2026 WEBSITE-APP-NAME a, from the Cairn summit's change 10, step 6.3, renamed `ki-repo-website-app` to `ki-repo-website-interactive`, and this skill's references follow; no rule or criterion changed.

On 22 November 2026 KEYSTONE-FIXES and BOOTSTRAP-HOME b, recorded under [Decisions](#3-decisions), were applied in the Cairn summit's change 10, step 6.3. "Where to start" in `SKILL.md` and [the Keystone standard's 4.4](standard-keystone.md#44-where-a-session-starts) now starts a session with `ki-coordination` for opened work and `ki-work` for choosing and doing work, the guild map then finding `ki-repo`, `ki-authoring` and `ki-agentic-ecosystems`, which KEYSTONE-SKILL had named as the start. [The bootstrap standard's 4.2](standard-bootstrap.md#42-declarative-repository-selection) no longer restates `ki-repo`'s declaration rules, whose `[ki-<skill>]` table form had gone stale, and points to `ki-repo`'s `.ki.toml` contract for the schema, resolution, activation flow and local registry, keeping the resolver guarantees that are bootstrap's own; the bootstrap reference and BOOTSTRAP mode point there too. No outside source was refreshed.

On 22 November 2026 RELEASED-MODE a was built, freed by TOOL-RELEASES a: the bootstrap standard gains [4.9, verified backpack selection](standard-bootstrap.md#49-verified-backpack-selection), naming the released, development and vendored sources and the released-backpack mode between current and vendored, and the later rules move up one. The bootstrap reference, the exemplars and an eval scenario follow it. The `ki` commands it names were checked against `tools-ki` 0.17.0: `ki backpack install` installs only an absent backpack, and `ki backpack reinstall` replaces an inactive one. No external source refreshed.

On 18 November 2026 the guild map's generator says backpack where it said harness, its root parameter `backpackRoot`, as the Cairn summit's [change 12](https://github.com/krisb/ki-cairn-store/blob/4e581ef/work/cairn/cairn.summit/12-names.change.md#5-steps), step 6, scheduled and Kris's GUARDIAN-LANDS a built. No external source refreshed.

On 17 November 2026 Kris took NAME-FIRST a, relayed by the Cairn summit's guardian: the checklist's opener step names a named seat's session with its actor's name first, as `claude --name "Kitteth (🪨 🔑 cairn.summit)"`, an unnamed seat keeping the bare form. No external source refreshed.

On 16 November 2026 Kris took SEAT-AT a, relayed by the Cairn summit's guardian: the checklist's opener step names the keyless thread line `<role glyph> <package>@<role>`, the seat's id, in place of `<role glyph> <work-id>+<role>`, `+` now adding a sub-package's strand under SUMMIT-SUB-PACKAGES. No external source refreshed.

On 14 November 2026 Kris took OPENER-DELEGATE a in conversation: the checklist's opener step now has the opener tell the session to delegate its work to its agent host's own subagents, stay responsive while they run and check what they return before posting it. No external source refreshed.

On 14 November 2026 Kris took OPENER-NAME a and SEAT-LINE a in conversation: the checklist's opener step now has the opener name the session's thread line and the session rename itself to it first, and names the keyless form for a seat without its package's keys. No external source refreshed.

On 14 November 2026 the skill was written from the Cairn summit's change 25 (now 14), guilds, under GUILDS-REMIT. The guild purposes are change 25's working labels for the guild tree. The same day, under BOOTSTRAP-FOLD and RENAME-NOW, the `ki-bootstrap` skill folded in as the BOOTSTRAP mode, with its standard, exemplars and sources; the core user skills `ki bootstrap` activates were brought into line with tools-ki 0.16.0, `ki-keystone` and `ki-work`.

The bootstrap guidance's earlier reviews, as the `ki-bootstrap` skill recorded them:

A 2026-11-10 in-house review under `agora.sop.main` follows the removal of `ki agent` in `tools-ki` v0.15.0: the checklist's opener step takes the opener from `ki-coordination`'s Opening work templates rather than `ki agent prompts`, the hook check no longer unsets `KI_AGENT_RUN`, and the openers watch-item names `ki-coordination`'s openers. No external source refreshed.

A 2026-10-26 in-house review under `wow-harness-a` applied BOOT-HOME, which Kris decided that day: this skill owns the one machine-readiness checklist from a fresh machine to a working coordinator, ending in "Ready to coordinate" with observable hook and output-style checks, and `ki-coordination`'s Bootstrap cites it as its "Before the opener" step. A `ki doctor` readiness check was requested from `tools-ki` by message; readiness never depends on it before it exists. Command surfaces were confirmed against the installed `ki --help` (`ki agent prompts`, `ki registry`, `ki doctor`), not re-reviewed in full.

The REFRESH before that ran on **2026-08-12**.

- ADR and HC confirm that verified installed compatible harnesses are authoritative, runtime links are projections, and repositories never carry an alternative executor.
- TK confirms current `ki bootstrap`, `ki harness`, `ki skill add/remove`, `ki repo skill add/remove`, `ki repo`, `ki dev local set/on/off`, `ki doctor`, and `ki diag` grammar.
- KR confirms that repository coverage remains explicit in `.ki.toml` and separate from user activation.
- The FND-003 boundary review confirmed that this skill remains guidance-only: no harness-local bootstrap process launch, publisher, synchroniser, generated HELP, or repository executor remains. `tools-ki` owns bootstrap execution, native rubric hosting, reporting, and transactions; its validated external `ConformCommand` and per-agent user-space mutation boundaries remain deliberately external.

**Watching:**

- Re-check the core user-skill set whenever bootstrap policy changes.
- Re-check the guidance if `ki backpack missing`, `outdated` or `search`, new in the command surface and not yet named, become part of bootstrap or activation.
- Re-check bare-name ambiguity and qualified capability input when multi-harness activation evolves.
- Re-check supported agent discovery and managed link locations when a runtime binding changes.
- Re-check acquisition, replacement, and uninstall wording, and the released-backpack mode, when backpack version selection is introduced or `tools-ki` changes how a release is pinned.
- Re-check the machine-readiness checklist when the chezmoi hook registration, the output-style link, the Capital's declared skill set or `ki-coordination`'s openers change, and fold in `ki doctor` once it carries the readiness checks.

[Back to contents](#contents)
