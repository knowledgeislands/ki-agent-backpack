---
ki-document-type: sources@2026-11-15T00:17:25Z
ki-revised: 2026-11-17T23:48:00Z
ki-refresh: external-spec · monthly
---

# Sources — where the standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Portable Agent Skills contract](#211-portable-agent-skills-contract)
    - [2.1.2 Established authoring practice](#212-established-authoring-practice)
    - [2.1.3 Runtime overlay: OpenAI](#213-runtime-overlay-openai)
    - [2.1.4 Knowledge Islands house standard](#214-knowledge-islands-house-standard)
    - [2.1.5 Runtime overlay: Claude Code](#215-runtime-overlay-claude-code)
  - [2.2 Advisory](#22-advisory)
    - [2.2.1 Anthropic practice](#221-anthropic-practice)
    - [2.2.2 OpenAI practice](#222-openai-practice)
    - [2.2.3 Community](#223-community)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The authoritative and community sources behind the [Agent Skills](standard-agent-skills.md), [Knowledge Islands](standard-knowledge-islands.md), [guilds](standard-guilds.md) and [rubric-authoring](standard-rubric-authoring.md) standards, the [skill](standard-formats-skill.md), [mode](standard-formats-mode.md), [exemplars](standard-formats-exemplars.md) and [rubric](standard-formats-rubric.md) formats, and their [rubric](rubric.md). Mode REFRESH reads this file, re-fetches each source, diffs it against those standards and the rubric, then **bumps the `last reviewed` dates** and refreshes the [Last review](#4-last-review) block below (what changed is recorded in the commit, not a changelog). This is the skill's memory of where best practice comes from — keep it current.

Abbreviations match the `(SOURCE)` tags in the standards and [rubric](rubric.md).

[Back to contents](#contents)

## 2. Outside sources

The specifications, practice and runtime documentation the standards follow or draw on. Each source carries its tag, as the standards and rubric cite it.

### 2.1 Authoritative

The portable contract, established practice, the runtime overlays and the house standard.

[Back to contents](#contents)

#### 2.1.1 Portable Agent Skills contract

| Source | Governs | Last reviewed |
| --- | --- | --- |
| SPEC — [Agent Skills specification][spec] | Format and constraints | 2026-11-15 |
| — [`skills-ref validate`][skills-ref]‡ | Demonstration validator | 2026-11-15 |

‡ The reference library explicitly says it is demonstration-only and unsuitable as a production validator; it remains supporting validation evidence subordinate to the specification.

[Back to contents](#contents)

#### 2.1.2 Established authoring practice

The Agent Skills [documentation index][agentskills-index] is the inventory authority for this set. Every REFRESH fetches it first, reconciles this table with its current pages, then reviews every listed page individually. The index currently lists the nine documentation pages below; the index itself is also tracked because it detects additions and removals.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| AS — [Agent Skills documentation index][agentskills-index] | Page inventory | 2026-11-15 |
| AS — [Agent Skills overview][home] | Conceptual overview | 2026-11-15 |
| AS — [Skill-creator quickstart][quickstart] | First-skill workflow | 2026-11-15 |
| AS — [Skill-creator best practices][agentskills-best-practices] | Authoring guidance | 2026-11-15 |
| AS — [Optimising descriptions][optimizing-descriptions] | Description quality | 2026-11-15 |
| AS — [Evaluating skills][evaluating-skills] | Evaluation practice | 2026-11-15 |
| AS — [Using scripts][using-scripts] | Script execution | 2026-11-15 |
| AS — [Client showcase][clients] | Client inventory | 2026-11-15 |
| AS — [Adding skills support][adding-skills-support] | Client implementation | 2026-11-15 |
| BP — [Skill authoring best practices][bp] | Authoring checklist | 2026-11-15 |
| ENG — [Equipping agents with Agent Skills][eng]† | Design rationale | 2026-11-15 |

† Published 2025-10-16; updated to announce the open standard 2025-12-18.

[Back to contents](#contents)

#### 2.1.3 Runtime overlay: OpenAI

| Source | Governs | Last reviewed |
| --- | --- | --- |
| OA — [OpenAI Build skills][openai-skills] | ChatGPT/Codex runtime overlay | 2026-11-15 |

`OA` documents OpenAI runtime discovery, listing, path metadata, implicit invocation, and `agents/openai.yaml`. It qualifies runtime claims but never changes the portable Agent Skills contract.

[Back to contents](#contents)

#### 2.1.4 Knowledge Islands house standard

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ki-agent-backpack README — The repo's own `README.md` | Backpack structure | 2026-11-15 |
| ADR-KI-HARNESS-SKILLS-004 — Local decision record | Standalone skills and variation | 2026-11-15 |
| ADR-KI-HARNESS-SKILLS-006 — Local decision record | Kind, taxonomy, and dependencies | 2026-11-15 |

The README is cited only for the backpack's four-part structure. Local decision records, rather than the README, support the semantic house claims.

[Back to contents](#contents)

#### 2.1.5 Runtime overlay: Claude Code

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CC — [Claude Code — skills][cc] | Claude runtime overlay† | 2026-11-15 |

† Claude Code extensions and runtime behaviour. This overlay may qualify a portable or Knowledge Islands rule for Claude Code, but never weakens the portable contract.

[Back to contents](#contents)

### 2.2 Advisory

Discovery and community sources: supporting evidence, not normative rules.

[Back to contents](#contents)

#### 2.2.1 Anthropic practice

The Claude blog is a discovery source, not a normative standard. On each REFRESH, scan its landing page for new articles materially relevant to agent skills, agentic practice, or authoring workflows; open and assess only those relevant articles.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| BLOG — [Claude blog][claude-blog] | Agentic-practice and authoring article discovery | 2026-11-15 |

[Back to contents](#contents)

#### 2.2.2 OpenAI practice

The OpenAI News page is a discovery source, not a normative standard. On each REFRESH, scan its landing page for new articles materially relevant to agent skills, agentic practice, or authoring workflows; open and assess only those relevant articles.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| OPENAI — [OpenAI News][openai-news] | Agentic-practice and authoring article discovery | 2026-11-15 |

[Back to contents](#contents)

#### 2.2.3 Community

| Source | Informs | Last reviewed |
| --- | --- | --- |
| COMMUNITY — [Skill Authoring Patterns][patterns] | Patterns and feedback | 2026-11-15 |
| COMMUNITY — [obra/superpowers writing-skills][superpowers]† | Convergent conventions | 2026-11-15 |
| COMMUNITY — [skills.sh — Open Agent Skills Ecosystem][skills-sh] | Registry and security | 2026-11-15 |
| FAFF — [shftwst/faff][faff] | Claude Code delivery-harness and autonomy-gate discovery | 2026-11-15 |

† Community restatement of the best-practices document.

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| KNOWLEDGE-KIND | Kris's decision, in the Cairn summit's change 22: a third kind of skill, `ki-kind: knowledge`, only equips a session with a body of knowledge held as a knowledge graph; it audits and conforms nothing, publishes no rubric, its modes are EDUCATE and REFRESH, and other skills link to its cards rather than define its terms again. | 2026-11-10 | [Skill shape](standard-knowledge-islands.md#42-skill-shape), KI-SHAPE-3, KI-SHAPE-6, KI-SHAPE-19 | In force |
| KG-HOME | Kris's decision, in the Cairn summit's change 06: a skill may hold a knowledge graph in its `references/`, as `ki-knowledge-graph` holds its own, each card named `<id>.md` beside a `_graph.md` root definition. | 2026-11-12 | [Skill shape](standard-knowledge-islands.md#42-skill-shape), KI-SHAPE-6 | In force; its place, `references/`, superseded by KNOWLEDGE-FOLDER |
| KNOWLEDGE-FOLDER | Kris's word, relayed by the Cairn summit's guardian: a skill that holds a knowledge graph keeps it in `knowledge/` at the skill's top level, with the root definition `_graph.md` at its root; only the graph's cards go there, and everything else useful in the skill, its standards, sources, rubric, proposals and migration standards, stays in `references/`, so `knowledge/` is its own area outside `references/`. | 2026-11-12 | [Skill shape](standard-knowledge-islands.md#42-skill-shape), [Layout](standard-agent-skills.md#431-layout), KI-SHAPE-6, LAY-3 | In force |
| GRAPH-FOLDERS | Kris's word, relayed by the Cairn summit's guardian, option a: inside `knowledge/` there is one folder for each subgraph, and files keep their id names, as `knowledge/industry/industry.session.md`; ids and front-matter `links:`, keyed by id, do not change, and only path-based Markdown links follow a card. | 2026-11-12 | [Skill shape](standard-knowledge-islands.md#42-skill-shape), KI-SHAPE-6 | In force |
| GUILD-PLACE | Kris's decision, 13 November 2026, in the Cairn summit's change 14: each skill's frontmatter names its guild, `ki-guild: <guild>`, and a lead names the guild it leads, `ki-leads: <guild>`; the folder a skill sits in is storage, not structure. | 2026-11-13 | [Skill shape](standard-knowledge-islands.md#42-skill-shape), KI-SHAPE-22 | In force |
| KI-KEYS | Kris's decision, 13 November 2026, in the Cairn summit's change 14: the guild keys carry the `ki-` prefix every Knowledge Islands key carries, so none collides with the Agent Skills specification's. | 2026-11-13 | [Skill shape](standard-knowledge-islands.md#42-skill-shape), KI-SHAPE-22 | In force |
| GUILD-TERM | Kris's decision, 13 November 2026, in the Cairn summit's change 14: a guild is a set of skills that belong together and work together. | 2026-11-13 | [Guilds](standard-guilds.md#41-what-a-guild-is) | In force |
| GUILD-LEAD | Kris's decision, 13 November 2026, in the Cairn summit's change 14: each guild is a tree of skills led by one lead skill, which discloses the rest as a skill discloses its references; nothing new sits above skills. | 2026-11-13 | [Guilds](standard-guilds.md#41-what-a-guild-is) | In force |
| KEYSTONE-HUB | Kris's decision, 13 November 2026, in the Cairn summit's change 14: Keystone is the guild of guilds: its lead, `ki-keystone`, mostly signposts, and each guild's lead is a member of Keystone as well as the root of its own guild; there is no deeper hierarchy. | 2026-11-13 | [Guilds](standard-guilds.md#42-keystone) | In force |
| KEYSTONE-MIN | Kris's decision, 13 November 2026, in the Cairn summit's change 14: Keystone holds only what every other guild rests on, and never becomes a dumping ground. | 2026-11-13 | [Guilds](standard-guilds.md#42-keystone) | In force |
| GUILD-NAMED | Kris's decision, 13 November 2026, in the Cairn summit's change 14: a guild's lead is named after it, and the guild's prefix is the lead's name, as `ki-repo` and `ki-repo-*`. | 2026-11-13 | [Guilds](standard-guilds.md#43-names-and-prefixes) | In force |
| ENV-PREFIX | Kris's decision, 13 November 2026, in the Cairn summit's change 14: the Environment guild is led by `ki-env`, and its families are `ki-env-binding`, `ki-env-housekeeping` and `ki-env-tokenomics`. | 2026-11-13 | [Guilds](standard-guilds.md#43-names-and-prefixes) | In force |
| AGENTS-GUILD | Kris's decision, 13 November 2026, in the Cairn summit's change 14: option b: the Agentic systems guild is led by the knowledge skill `ki-agentic-systems`, with the prefix `ki-agentic-`; there is no `ki-agents`. | 2026-11-13 | [Guilds](standard-guilds.md#43-names-and-prefixes) | In force |
| DESIGN-LEAD | Kris's decision, 13 November 2026, in the Cairn summit's change 14: option a: a new `ki-design` leads the Design guild, covering technical as well as visual design. | 2026-11-13 | [Guilds](standard-guilds.md#43-names-and-prefixes) | In force |
| GUILD-FOLDERS | Kris's decision, 14 November 2026, in the Cairn summit's change 14: option a: a harness stores its skills in a folder per guild, named by the guild, with every lead in `keystone/`. | 2026-11-14 | [Guilds](standard-guilds.md#44-membership) | In force |
| HOUSEKEEPING-LEAD | Kris's decision, 14 November 2026, in the Cairn summit's change 14: option a: a new `ki-env-housekeeping` holds the rules its Claude and ChatGPT skills share, as `ki-env-binding` and `ki-env-tokenomics` do for theirs. | 2026-11-14 | [Guilds](standard-guilds.md#45-how-a-lead-discloses-its-guild) | In force |
| PROCESS-SUBCOMMANDS | Kris's decision, 13 November 2026, in the Cairn summit's change 14: process skills that form one lifecycle become subcommands of their guild's lead, each with a reference loaded only when called, keeping the separate skills' boundaries as rules. | 2026-11-13 | [Guilds](standard-guilds.md#45-how-a-lead-discloses-its-guild) | In force |
| BOOTSTRAP-FOLD | Kris's decision, 13 November 2026, in the Cairn summit's change 14: `ki-bootstrap` becomes `ki-keystone bootstrap`. | 2026-11-13 | [Guilds](standard-guilds.md#45-how-a-lead-discloses-its-guild) | In force |
| KEYSTONE-SKILL | Kris's decision, 13 November 2026, in the Cairn summit's change 14: `ki-keystone` holds the guild map, generated from frontmatter, where a session starts in a repository, and Keystone's joining rule. | 2026-11-13 | [Guilds](standard-guilds.md#46-the-guild-map) | In force |
| KEYSTONE-BASELINE | Kris's decision, 13 November 2026, in the Cairn summit's change 14's guild tree: `ki-keystone` is a baseline governance skill, so the complete baseline becomes `ki-repo`, `ki-authoring` and `ki-keystone`, widening ADR-KI-HARNESS-SKILLS-014's two. | 2026-11-13 | [Skill shape](standard-knowledge-islands.md#42-skill-shape), KI-SHAPE-19 | In force |
| SKILL-FORMAT | Kris's word, 17 November 2026, about 00:17 GMT, taking the high-confidence points of the Cairn summit's change 11: "it would make sense for us to have a file format then, right? For our skills. We could have more conformance over just the generic skills." A skill's own files have formats, owned by `ki-skills`: `SKILL.md` is `skill`, a mode file `mode`, `exemplars.md` `exemplars` and the generated `rubric.md` `rubric`, the generator writing the field; a knowledge graph's cards keep their own `type`. It reverses `ki-authoring`'s FILES-OWNED. Each file names its format in `ki-document-type` and, being versioned with its skill in Git, carries no `ki-revised`; mode and exemplar files take front matter like the others, so that one check finds and versions all four. | 2026-11-17 | [Skill format](standard-formats-skill.md), [mode format](standard-formats-mode.md), [exemplars format](standard-formats-exemplars.md), [rubric format](standard-formats-rubric.md), SKILL-FMT-1 to SKILL-FMT-4 | In force |
| KI-PREFIX | Kris's word, 17 November 2026, about 00:17 GMT, in the Cairn summit's change 11: every front matter field Knowledge Islands defines takes the `ki-` prefix, and fields meant for other tools keep their names. In `SKILL.md` the target-file declarations become `ki-requires`, `ki-contributes` and `ki-owns`, read under their older bare names while the skills are swept; the Agent Skills specification's fields and a runtime's own, such as `argument-hint`, keep theirs. | 2026-11-17 | [Skill format](standard-formats-skill.md#42-fields), KI-SHAPE-16, SKILL-FMT-3 | In force |
| REVIEW-HOME | Option b, Kris's word, 17 November 2026, about 01:37 GMT, raised to high by his word that consistency is vital, relayed by the Cairn summit's guardian from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/9a7354a/work/cairn/cairn.summit/16-design-guild.change.md#42-decided): one general review standard in `ki-authoring`, which every reviewable document cites, skills among them. A REVIEW candidate is also a finding in its shape. | 2026-11-17 | [REVIEW](mode-review.md), [candidate shape](standard-candidate-findings.md#41-candidate-shape) | In force |
| STANDARDS-RENAME | Taken by the Cairn summit's guardian, 17 November 2026, about 04:03 GMT, under Kris's direction to take high-confidence calls, from the summit's change 11, gap 1: the plural `standards-<topic>.md` files, 108 across about 50 skills on 14 November, are renamed guild by guild in each guild's review, and the allowance is removed after the last; nothing is renamed ahead of the reviews. Reversible; Kris can overturn it. | 2026-11-17 | [Reference vocabulary](standard-knowledge-islands.md) | In force |
| REF-5-SOURCE | In-house correction, 17 November 2026, from the Cairn summit's change 11, gap 2: REF-5 cited "SPEC §8", which traced to this skill's July standard, whose section 8 was Progressive disclosure, not to the Agent Skills specification that SPEC labels; it now cites that section's home, [`standard-agent-skills.md` §4.4.2](standard-agent-skills.md#442-progressive-disclosure), where the mode-router shape is set. | 2026-11-17 | [rubric](rubric.md) | In force |
| RUBRIC-KNOWLEDGE | Kris's word, 17 November 2026, about 23:34 GMT, under GUARDIAN-LANDS a, relayed by the Cairn summit's guardian from the summit's [change 11](https://github.com/krisb/ki-cairn-store/blob/c17433e/work/cairn/cairn.summit/11-keystone-guild.change.md#45-decided): option a, the rubric checks a knowledge graph: its root definition, each card's id against its file name, its type and its status, and its links; the check that each card read in order links the next only warns, and exempts the last card of a chain. | 2026-11-17 | [Skill shape](standard-knowledge-islands.md#42-skill-shape), KI-SHAPE-23, KI-SHAPE-24 | In force |

[Back to contents](#contents)

## 4. Last review

A later in-house review on **2026-11-17** applied RUBRIC-KNOWLEDGE a, which Kris took that night: [the skill shape](standard-knowledge-islands.md#42-skill-shape) now says how the rubric checks a knowledge graph, KI-SHAPE-23 failing a malformed root definition, a card whose id, type or status is wrong, or a relative link that resolves to nothing, and KI-SHAPE-24 warning on a card read in order whose Next section links no card and ends no chain. Both pass on `ki-agentic-systems` and `ki-knowledge-graph`; the broken link in `ki-knowledge-graph`'s `semantic-markdown.md` was fixed earlier that day. No outside source refreshed.

A later in-house review on **2026-11-17** recorded STANDARDS-RENAME, taken by the Cairn summit's guardian, in [the reference vocabulary](standard-knowledge-islands.md), and corrected REF-5's citation (REF-5-SOURCE).

A later in-house review on **2026-11-17** applied REVIEW-HOME b, which Kris took that day: [REVIEW](mode-review.md) and [the candidate shape](standard-candidate-findings.md#41-candidate-shape) cite `ki-authoring`'s review standard, so that a REVIEW candidate is also a finding in its shape, its Evidence the anchor and its Proposed action what to change, with its kind, whether it blocks and its confidence, and the report saying what was not checked. REVIEW now ends with the review standard's two outcomes: Approve, or Accept with changes, whose work is the accepted candidates routed to the roadmap, so confirming the routes is part of that outcome. EXTRACT's candidates are unchanged, since giving them a finding's kind, blocking and confidence would change what EXTRACT reports, not only its words. No outside source refreshed.

An in-house review on **2026-11-17** applied SKILL-FORMAT a and, for `SKILL.md`, KI-PREFIX a, which Kris took that day, relayed by the Cairn summit's guardian from the summit's [change 11](https://github.com/krisb/ki-cairn-store/blob/4bc5285/work/cairn/cairn.summit/11-keystone-guild.change.md#45-decided). Four format standards now set a skill's own files, each an instance of `ki-authoring`'s format format: [the skill format](standard-formats-skill.md), [the mode format](standard-formats-mode.md), [the exemplars format](standard-formats-exemplars.md) and [the rubric format](standard-formats-rubric.md). They name the fields and rules the Agent Skills, Knowledge Islands and rubric-authoring standards already set rather than repeat them. The new SKILL-FMT family warns on a missing or out-of-date `ki-document-type` and on `SKILL.md` fields without the prefix, and `ki dev skill rubric` writes the rubric's field. No outside source refreshed.

REFRESH last run **2026-11-15**. It fetched [the documentation index][agentskills-index] first; it still lists the same nine pages, and every page, the specification, `skills-ref`, BP, ENG, OA, CC, the house sources and the community sources were re-read and still support the standards and rubric as written. One small correction was made: the Superpowers file has moved into the skill's `references/` folder, and its link now follows it. The OpenAI News page refused the fetch, so it was read through its own news feed instead; neither discovery source carried a new article on skill authoring, and the Claude blog's piece on always-on agents is agentic-practice background, not a rule. Nothing found requires a standard or rubric change, but four points are watched for the owner: Claude Code now accepts the portable `license`, `compatibility` and `metadata` fields and rejects any other key outside Claude Code, in claude.ai uploads and the Skills API; Claude Code adds `${CLAUDE_PROJECT_DIR}` and plugin-only substitutions that ※3's list does not name; OpenAI lets `skills.max_context_tokens` raise the Codex list budget to 10,000 tokens; and ADR-KI-HARNESS-SKILLS-006 still describes concern-first folders, which GUILD-FOLDERS has since replaced with a folder per guild. This run checked sources only and did not repeat the in-house scan.

REFRESH last run **2026-09-26**. It fetched [the documentation index][agentskills-index] first; it still lists the same nine pages and the specification retains the portable format and budgets. The review found no immediate standard or rubric change; its material follow-ups were dispositioned on 2026-10-06, as recorded below.

- **SPEC, extra directories (checked 2026-11-12):** the specification's directory structure lists `scripts/`, `references/` and `assets/` as optional and ends with "Any additional files or directories"; its Optional directories section says "A skill directory may contain any files and directories beyond the required `SKILL.md`", the three names being recommendations. A top-level `knowledge/` is therefore lawful, and KNOWLEDGE-FOLDER adds it beside `.ki-meta/`. The specification also asks that file references stay one level deep from `SKILL.md`, which concerns chains of references rather than folder depth.
- **SPEC:** portable fields and constraints remain current. `allowed-tools` is the only portable tool declaration and remains experimental; `disallowed-tools` is not in the specification.
- **Agent Skills home:** accessible; three-stage progressive disclosure (metadata ~100 tok / instructions < 5000 tok / resources on demand). Spec unchanged.
- **Description voice:** the current Agent Skills description guide prefers direct imperative phrasing, while Anthropic and community guidance retains third person. The portable rule now accepts either activation-oriented form and continues to reject first-/second-person explanation.
- **CC:** `disallowed-tools` and `background` remain Claude Code extensions; the former accepts a string or YAML list, while `background` applies only with `context: fork`.
- **OA:** Targeted evidence was rechecked on 2026-09-26. OpenAI documents `.agents/skills` discovery, initial name/description/path listings, a two-per-cent or 8,000-character initial-list budget, description shortening before possible omission warnings, `agents/openai.yaml`, and `allow_implicit_invocation`. Description remains the primary signal for implicit matching, not the only listed metadata.
- **ENG:** published 2025-10-16 and updated 2025-12-18; it remains rationale, not a normative source.
- **BLOG (Claude blog):** added as a discovery source. Future REFRESH runs scan it for articles materially relevant to agent skills, agentic practice, or authoring workflows; an article is supporting evidence, not a normative rule by itself.
- **OPENAI (OpenAI News):** added as a discovery source. Future REFRESH runs scan it for articles materially relevant to agent skills, agentic practice, or authoring workflows; an article is supporting evidence, not a normative rule by itself.
- **GASCITY retired (2026-10-06):** the former Gas Town Hall source now redirects to Gas City, a Beads-native software-factory platform. A review of its home page and guide index found work-graph, orchestration, and durable-memory positioning but no skill-authoring or harness practice beyond what this standard and the KI work-record skills already cover, so it was removed as a discovery source. The `ki-agentic-radar` Gas City assessment subject is unaffected.
- **FAFF (shftwst/faff):** added as a discovery source. Future REFRESH runs review its delivery-loop contracts, autonomy levels, and gate design for transferable lessons; its Claude Code-specific implementation is supporting evidence, not a portable rule by itself.
- **COMMUNITY:** the reviewed pattern guide, Superpowers guidance, and skills.sh registry remain supporting evidence. They introduce no further portable constraint; the soft ~300-line split suggestion remains below our 500-line WARN and is not adopted as a separate cap.
- **`skills-ref`:** the repository now explicitly labels the reference library demonstration-only and not for production. Keep it as supporting validation evidence; the specification remains the normative baseline.
- **In-house scan:** the then-current governed skill set passed its skill-quality audit, including `ki-skills` itself. Exact commands and fleet counts are intentionally omitted because both change as the host and skill set evolve.
- **Open watch-items:** none; no source disagreement requires a standard or rubric change.

(What past reviews changed in the standard / rubric / linter is in git.)

[Back to contents](#contents)

[spec]: https://agentskills.io/specification
[agentskills-index]: https://agentskills.io/llms.txt
[home]: https://agentskills.io/
[quickstart]: https://agentskills.io/skill-creation/quickstart
[agentskills-best-practices]: https://agentskills.io/skill-creation/best-practices
[optimizing-descriptions]: https://agentskills.io/skill-creation/optimizing-descriptions
[evaluating-skills]: https://agentskills.io/skill-creation/evaluating-skills
[using-scripts]: https://agentskills.io/skill-creation/using-scripts
[clients]: https://agentskills.io/clients
[adding-skills-support]: https://agentskills.io/client-implementation/adding-skills-support
[bp]: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
[cc]: https://code.claude.com/docs/en/skills
[eng]: https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
[claude-blog]: https://claude.com/blog
[openai-news]: https://openai.com/news/
[openai-skills]: https://learn.chatgpt.com/docs/build-skills
[faff]: https://github.com/shftwst/faff
[skills-ref]: https://github.com/agentskills/agentskills/tree/main/skills-ref
[patterns]: https://generativeprogrammer.com/p/skill-authoring-patterns-from-anthropics
[superpowers]: https://github.com/obra/superpowers/blob/main/skills/writing-skills/references/anthropic-best-practices.md
[skills-sh]: https://www.skills.sh/
