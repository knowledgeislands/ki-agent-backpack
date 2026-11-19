---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T23:40:27Z
ki-status: in force
---

# Roles

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Prime directive](#41-prime-directive)
  - [4.2 Tiers](#42-tiers)
  - [4.3 Role catalogue](#43-role-catalogue)
  - [4.4 Marks](#44-marks)
  - [4.5 Role fields](#45-role-fields)
  - [4.6 Thread line](#46-thread-line)
  - [4.7 Rules of the role model](#47-rules-of-the-role-model)

## 1. Introduction

A role is the job a seat does within a piece of work: what it owns and what it never does. This standard is the one home of the role catalogue, the three tiers, the glyph each role carries, the `ki-role` and `ki-workers` fields that record them, and the thread line a seat closes with. Kris asked for it under STAGE-C-ROLES at 02:30 GMT on 7 November 2026: "land the role catalogue and role glyphs first, end to end", the catalogue in `ki-work-package`, "every role with its tier, a one-line definition (what it owns, what it never does) and its glyph, the one home for what each glyph means". `ki-coordination` uses the thread line in its banner, session names and message senders; it holds no copy of the catalogue. Tolerance for the forms this standard replaces is in [the role migration file](migration-roles.md), which can be deleted whole once the territories have moved. The decisions behind these rules are in [the sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

The roles seats take within work, and how a package and a session record them.

### 2.1 In scope

- The prime directive every role answers to.
- The tiers with their default roles, the role catalogue and the marks.
- The `ki-role` and `ki-workers` fields.
- The thread line, and the rules of the role model.

[Back to contents](#contents)

### 2.2 Out of scope

- The work package that carries the fields: [the work-package standard](standard-work-package.md).
- The banner, session names and message senders that show the thread line: `ki-coordination`.
- The admission gate, vote and seat folders, which land with the later seat rules.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Territory** | An island's domain, such as KI, HNR or Personal. **Standard:** `ki-coordination` |
| **Package** | The work itself, named by its work id, such as `ki.cairn`; messages route to packages. **Standard:** [the work-package standard](standard-work-package.md) |
| **Seat** | One role taking part in a package; a session holding a package's keys is its seat. **Standard:** this one, [4.4](#44-marks) |
| **Tier** | A level of authority: leaders, managers or makers. **Standard:** this one, [4.2](#42-tiers) |
| **Default role** | A tier's general role, which a seat takes unless the work calls for one of the tier's specialisations. **Standard:** this one, [4.2](#42-tiers) |
| **Rank** | A role's place within its tier, 1 the highest, set in the catalogue and never by a UI; the default role ranks lowest. **Standard:** this one, [4.3](#43-role-catalogue) |
| **Role** | The job within a tier, one of the catalogue's. **Standard:** this one, [4.3](#43-role-catalogue) |
| **Pack** | A seat's own subagents and background runs; private to the seat. **Standard:** this one, [4.7](#47-rules-of-the-role-model) |
| **Guild** | A set of skills, such as change management, kept by the guildmaster. **Standard:** this one, [4.3](#43-role-catalogue) |
| **Library** | The knowledge base, kept by the librarian. **Standard:** this one, [4.3](#43-role-catalogue) |
| **Thread line** | The one string that names a session's seat. **Standard:** this one, [4.6](#46-thread-line) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Prime directive

Every institution in this model exists to serve its purpose and the people it serves, never to protect its members' standing. Kris's word for this is **ethical**: ethical guilds, as distinct from guilds, as he set it on 6 November 2026 in the [role-catalogue brief](https://github.com/krisb/dotfiles/blob/2fe13be/+/_WORK/personal.reg.household-terra/housekeeping/role-catalogue.brief.md). The test of any rule or role here is that Kris, or a new seat on its first day, can read it, understand it and challenge it without an intermediary.

- **Radical simplicity.** Every rule, role and standard is written so that it can be read, understood and challenged without an intermediary. If a seat cannot understand the rule it is held to, the rule is at fault, and complexity only the incumbent can navigate is a defect.
- **External accountability.** No tier polices itself alone. The guildmaster defines roles but is not their only judge: Kris, and the council for anything crossing territories, may review and overturn. Decisions and their reasons are recorded where anyone can read them, in change documents, standards, messages and Git.
- **Open entry.** A seat is admitted for its demonstrated fit to a role's stated standard, never for seniority, incumbency or sponsorship. An objection in an admission vote names the part of the role's standard that is not met; an objection without a reason does not count.
- **Purpose review.** Every role states its purpose and is reviewed against it. The capture signs are rules that grow, entry that gets harder without the work getting harder, roles that persist with nothing to do and decisions that only favour incumbents. Reserved roles stay reserved until the work calls for them.

[Back to contents](#contents)

### 4.2 Tiers

| Tier | Decides | Reports to | Default role | Specialised roles |
| --- | --- | --- | --- | --- |
| leaders | Within their territory; matters that cross territories go to the leaders together | Kris, with queries | councillor | guardian, governor |
| managers | Within standing grants; exceptions go up to the territory's leaders | The territory's leaders | warden | guildmaster, quartermaster, librarian, gatekeeper, housekeeper |
| makers | Within the hand-off they were given | The seat that handed the work over, never Kris directly | journeyman | voice, technical-architect, information-architect, illustrator |

Each tier has one default role, and every other role in the tier is a specialisation of it: the governor is the leader at the head of one territory, the housekeeper is the warden of a machine, the gatekeeper of what comes in and goes out, the librarian of the library, the guildmaster of the standards and skills and the quartermaster of the island's tools, as Kris took ROLE-DEFAULTS a on 11 November 2026 and QM-TIER on 17 November 2026. The leaders' default is the councillor, not the governor, as Kris took DEFAULT-LEADER on 17 November 2026: "governor is the wrong kind of leader, because it's very specifically the head of a territory"; every territory's summit is still seated by its governor.

The tiers run in this order, leaders, managers, makers, and the specialised roles are listed in rank order, highest first, under ROLE-RANK in [4.3](#43-role-catalogue).

[Back to contents](#contents)

### 4.3 Role catalogue

Every seat takes exactly one role from this table, and this table is the one place that says what each role glyph means. Role names are singular, and any seat may be one agent or a lead with a pack. Managers may also make. Chancellor, over several libraries, and a guildmaster for each guild are reserved: neither has a glyph until the work calls for it. Steward is not a role: it folds into warden, since whether a place's work is standing or a Project is its package's `ki-level`, not the role, as Kris took ROLE-DEFAULTS a on 11 November 2026; the warden takes the word's everyday sense, the keeper of a place.

The rows run tier by tier in the tiers' order, leaders, managers, makers, and within each tier in rank order, highest first: `Rank` is an integer, 1 the highest in its tier, and the tier's default role always ranks lowest, as Kris took ROLE-RANK on 17 November 2026, "the generic ranks should always be the lowest one in each of the categories". A rank is set here, in the skills, never by a UI: a UI sorts tiers by this order and roles by rank, never alphabetically.

| Role | Tier | Rank | Glyph | Owns | Never does |
| --- | --- | --- | --- | --- | --- |
| guardian | leaders | 1 | 🪨 | The state of every work package in the Cairn store, from `cairn.summit`, the root of its work tree | Does a package's own work, which is its seat's, or acts on a change document before Kris's word |
| governor | leaders | 2 | 🏛️ | Heads one territory: its State of play, priorities, dispatch, the admission of its managers and the queries it brings to Kris; convenes its council | Outranks another territory's governor, decides for another territory, or does its managers' or makers' work |
| councillor | leaders | 3 | 🗳️ | A further leader's share of one territory's decisions, by its governor's grant, and its vote in the council and in admissions | Heads the territory, acts outside it, or decides alone what the council holds |
| guildmaster | managers | 1 | ⚖️ | This catalogue and the skills that capture how we work | Judges roles alone, since Kris and the council may overturn it, or builds the tools and does the work its skills govern |
| quartermaster | managers | 2 | 🧰 | The island's tools and MCP servers, kept working, released and accounted for, from its own package, `ki.tools` | Decides how a tool must behave, which is the guild's, heads the territory, or releases without Kris |
| librarian | managers | 3 | 📚 | The library: what knowledge is kept, where, and how it is found | Owns the work the knowledge comes from, or keeps what has a durable home elsewhere |
| gatekeeper | managers | 4 | 🦉 | What comes in and goes out: capture, intake, mail and the packs prepared for Kris | Decides what it carries, or sends anything in Kris's name without his word |
| housekeeper | managers | 5 | 🏠 | One machine's health and its match with the declared setup: applies, drift, doctor findings and the installs Kris decides | Changes another machine, or changes the tooling and standards it applies |
| warden | managers | 6 | ⚒️ | One place in the work tree, standing work or a Project: its package, records, runs and queue, its standing work within its standing grants, and a Project's delivery from Ready to awaiting acceptance | Sets priority across Projects, takes up territory dispatch, accepts its own delivery, acts past its grants instead of taking the exception up, or works outside its place |
| voice | makers | 1 | 🦜 | Kris's spoken word carried to and from the seat that holds a package, as messages in its meeting, quoting him exactly | Decides anything, writes anything but messages, or carries as Kris's word what he did not say |
| technical-architect | makers | 2 | 🏗️ | Technical architecture: the components, data, interfaces and technology choices of a handed-off piece | Takes work no seat handed it, or reports to Kris directly |
| information-architect | makers | 3 | 📐 | Information architecture: the structure, naming, navigation and models of a handed-off piece | Takes work no seat handed it, or reports to Kris directly |
| illustrator | makers | 4 | 🎨 | Visual design and its artefacts for a handed-off piece | Takes work no seat handed it, or reports to Kris directly |
| journeyman | makers | 5 | 🐝 | A handed-off unit of general making, reported to the seat that handed it over | Takes work no seat handed it, or reports to Kris directly |

The two architects are two makers because their responsibilities differ, as Kris took ARCHITECT-SPLIT a on 16 November 2026: the information architect shapes how a piece is organised and found, the technical architect how it is built, as `ki-design`'s [design standard](../../../keystone/ki-design/references/standard-design.md#41-what-design-covers) draws them. Their seats read `ki.cairn@information-architect` and `ki.cairn@technical-architect`; the one `architect` they replace is read under [the role migration file](migration-roles.md).

The voice is a maker because it speaks for the seat that holds the package and reports to it, as Kris asked on 17 November 2026 for a role glyph for his voice client, "some kind of chatterbox thing": its seat reads `<package>@voice`, such as `cairn.summit@voice`, and the store's `VOICE.md` sets how it works.

Every territory's summit, `<territory>.summit`, is seated by its governor; councillor is kept for any further leader, as Kris took SOP-MAIN-GOVERNOR a) under ROLES-WRITE on 7 November 2026, for the main State of play the summit has replaced. The quartermaster's seat is `ki.tools`, under `ki.summit`, as Kris set under QUARTERMASTER-SOP on 7 November 2026, "the actual quartermaster should be ki.sop.tools, and it should live as a leader", the id becoming `ki.tools` under KIND-DROP on 11 November 2026, when secondary States of play gave way to nodes beneath the summit. The quartermaster is a manager, ranked after the guildmaster, as Kris took QM-TIER a on 17 November 2026: it holds one package, `ki.tools`, kept working and released within the territory, never heads the territory or decides how a tool behaves, and answers to KI's governor, as QM-SEAT named it on 14 November 2026, "a manager across the tools repositories". The guardian's seat is `cairn.summit`, the root of the Cairn store's work tree: Kris took the role as the agoranomos under AGORANOMOS-ROLE on 10 November 2026, and renamed it the guardian, glyph 🪨, under ROOT-ROLE and THREAD-GLYPH a on 11 November 2026. Each role glyph differs from every other and from the banner's state and line glyphs under `ki-coordination`'s [Banner](../../ki-coordination/references/standard-coordination.md#46-banner).

[Back to contents](#contents)

### 4.4 Marks

Two marks stand in the thread line beside the role glyph. They are not roles and carry no authority of their own.

| Mark | Name | Meaning |
| --- | --- | --- |
| 🔑 | keyholder | The session holding the package's keys: the seat that may write its package and speak for it. A seat without the keys carries no mark and closes with its seat's id instead |
| 🧵 | thread | A session with no role yet, and every background run, which takes no seat and reports to the work it serves |

[Back to contents](#contents)

### 4.5 Role fields

A package records its role and its live seats in its entry file, `_index.md`, as Kris took ROLE-FIELDS a) under ROLES-WRITE on 7 November 2026, the seats moving there with the state under [the work-package standard](standard-work-package.md#45-the-state).

| Field | File | Value |
| --- | --- | --- |
| `ki-role` | `_index.md` | The package's role: one catalogue role. Every package names one |
| `ki-workers` | `_index.md` | A list of the package's live seats, each a mapping with the keys below; absent or empty when no seat is live |

| `ki-workers` key | Requirement | Value |
| --- | --- | --- |
| `role` | required | One catalogue role |
| `tier` | required | The catalogue tier of that role: `leaders`, `managers` or `makers` |
| `id` | optional | The typed id of the actor holding the seat, `actor:<id>`, naming its roster file, as `actor:wayland`, or `actor:<package>@<role>` for an actor with no name; absent while no actor holds it (SEAT-VACANT a) |
| `since` | optional | UTC time the seat took the package up |
| `status` | optional | `active` or `idle` |

An entry is the seat's binding and carries nothing else. It points at its actor by typed id and never copies the actor's name or anything else of it, as Kris set under ACTOR-KEY a on 16 November 2026. Presence, where and how the actor runs, its host, rig and last seen, is the actor's roster file's in the Cairn store, never the entry's, and a reader takes each from its home, as the Cairn summit's guardian took ROSTER-SPLIT a under Kris's word on 14 November 2026.

The roster is the list of actors, agent or person, one roster file each. A roster file opens with the actor's `ki-id`, `actor:<id>`, then `ki-document-type: actor`, an optional human `ki-name` that is never a copy of the id, and `ki-kind`, `agent` or `person`, then its presence, `ki-host`, `ki-rig` and `ki-last_seen`, under ACTOR-KEY a, each field taking the `ki-` prefix under KI-PREFIX a. It holds no titles: who sits where is read from the tree's `ki-workers` entries, each naming its actor's id. An actor with no name, such as a maker in a meeting, still has a roster file: it takes its seat's id, `<package>@<role>`, as `actor:ki.cairn@information-architect` in `roster/ki.cairn@information-architect.md`, under SEAT-AT a, and that file holds its host and rig.

Whether a session is listening is in neither: it is read from meetings alone, a session listening while it is a participant of an open meeting with a sitting under way, under `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md#45-the-entry-file), as Kris set under LISTEN-HOME a on 16 November 2026. The seat's thread line is never stored: it is derived from its role's glyph and the work id, with its role for a seat without the keys and its actor's name in front where the actor is named, as the [thread line](#46-thread-line) sets out. An entry carries no session address or vendor session id, under the work-package standard's [prohibited payloads](standard-work-package.md#416-prohibited-payloads-and-claims), as Kris answered WORKERS-URI on 7 November 2026: "Drop it". A reader that needs to find a seat's live session, such as Cairn, reads the uncommitted machine-local thread binding `~/.local/state/ki/threads/<repository>/<slug>.json`, never the package. The `ki-work-package` rubric's RECORD-2 checks every value against this catalogue, reading the table in [4.3](#43-role-catalogue) at audit time, so the checker holds no copy of it.

[Back to contents](#contents)

### 4.6 Thread line

The thread line is the one string that names a session's seat. It closes every banner under `ki-coordination`'s [Banner](../../ki-coordination/references/standard-coordination.md#46-banner), names the session, ends a bootstrap or re-bootstrap report's `Rename thread:` line and signs every message the seat sends:

```text
thread-line = name " (" seat-line ")"  ; a seat whose actor is named
            | seat-line                ; a seat whose actor has no name, or that no actor holds
            | "🧵 " work-id             ; a session with no role yet, and every background run
seat-line   = role-glyph " 🔑 " work-id ; the seat holding the package's keys
            | role-glyph " " seat-id   ; a seat working in the package without its keys
name        = the ki-name of the seat's actor in its roster file, exactly as written there
seat-id     = work-id "@" role
role-glyph  = the catalogue glyph of the seat's one role
role        = the catalogue name of that role, such as information-architect
work-id     = the authoritative id from _index.md, a sub-package's being <parent id>+<slug>
```

Examples: `⚖️ 🔑 ki.reg.guilds`, `🏛️ 🔑 ki.summit`, `🏠 🔑 personal.reg.household-sol`, `🦉 🔑 personal.reg.inbox-terra`. The role glyph standing ahead of the work id says the role, so the work id stays the package's own id. A background run closes its report with `🧵 <work-id>` of the work it reports to, as Kris took RUN-THREAD-LINE a) under ROLES-WRITE.

Where the seat's actor is named, the name comes first and the seat's form in brackets, as in `Kitteth (🪨 🔑 cairn.summit)`, `Eugene (🏛️ 🔑 5ge.summit)` and `Quire (📐 ki.cairn@information-architect)`, as Kris took NAME-FIRST a on 17 November 2026: "where we have a named actor that the name should be first and then in brackets it should be effectively what we're currently putting out". The name is the `ki-name` of the actor the seat's `ki-workers` entry points at, read from its roster file in the Cairn store under [4.5](#45-role-fields) and written exactly as it stands there. A seat whose actor has no `ki-name`, or that no actor holds, keeps the bare form, as `⚖️ 🔑 ki.guilds`, and `🧵 <work-id>` never takes a name. The name is read afresh, never stored in the package.

Only the keyholder carries 🔑. A seat working inside a package without holding its keys, such as a maker in a meeting or a role handed work in the package, takes the keyless form: its catalogue glyph, no key, and its seat's id, `<package>@<role>`, or `<package>+<slug>@<role>` in a sub-package, as in `📐 ki.cairn@information-architect`, `🎨 ki.cairn@illustrator` and `🏗️ hnr.summit+website@technical-architect`, as Kris took SEAT-LINE a on 14 November 2026 and SEAT-AT a on 16 November 2026. The package is the one it works in. In an id, `.` builds a package's name, `+` adds a strand and `@` names a seat; the seat's id replaces what the Cairn store called a title, `<work id>+<role>`, which [the role migration file](migration-roles.md) reads.

The same string appears on each surface:

| Surface | Form |
| --- | --- |
| Banner's closing line | `<thread line>` |
| Session name | `claude --name "<thread line>"` at launch, as in `claude --name "Kitteth (🪨 🔑 cairn.summit)"`, or `/rename <thread line>` as the session's first act when its opener names it, its `Session:` line naming the same |
| Bootstrap and re-bootstrap report | `Rename thread: /rename <thread line>`, the last line of `## Done` |
| Message sender | `<label> (<thread line>):`, as in `KI > Guilds (⚖️ 🔑 ki.guilds):` for an unnamed seat and `Cairn > SoP (Kitteth (🪨 🔑 cairn.summit)):` for a named one |
| Run report | `🧵 <work-id>` of the work it reports to |

Every brief or opener that starts a new agent session names the thread line it is to take and tells the session to rename itself to that line as its first act, by its agent host's rename (runtime-specific: `/rename <thread line>` in Claude Code), as Kris took OPENER-NAME a on 14 November 2026. `ki-coordination`'s [Opening work](../../ki-coordination/references/standard-opening.md#43-opening-work) carries it for openers. A background run starts no session and needs none.

[Back to contents](#contents)

### 4.7 Rules of the role model

These are the role-catalogue brief's rules as they stand today; the admission gate, vote and seat folders land with the later seat rules.

1. Only a seat with a role in this catalogue may join Cairn; Cairn tells an unrecognised session the path in: take a role, or ask the tier above.
2. Cairn members put being available for messages before doing work themselves, and hand work down to makers or their own pack.
3. Admission goes one tier up within scope: a maker asks its package's managers, a manager its territory's leaders. Quorum is no objection and at least 75% of that tier's live members voting; one live member is a quorum alone; a vote short of quorum after about two hours goes to Kris.
4. Authority follows the [tiers](#42-tiers).
5. A package's keyholder creates the seats it needs and ends them when they are no longer needed, even mid-work.
6. Naming migrates incrementally: a seat corrects its name the next time it takes up its role, and each governor brings its territory's packages into line, under [the role migration file](migration-roles.md).
7. In web addresses, package and seat are separate query parameters, as in `package=ki.summit&seat=governor`.
8. One ratification round for today's seats: each declares its tier and role, and the tier above confirms, cascading through each territory's governor.
9. The guildmaster owns the role model as skills; `ki.cairn` builds the admission gate and vote into Cairn; the guildmaster and the librarian together carry islands, guilds and the library into the Knowledge Islands concept.
10. There is one library, `ki.reg.library`; a territory gets its own only if it needs one.
11. Each territory's council is its governor and any councillors. Matters that cross territories go to the governors together. No governor outranks another; `ki.summit`'s governor only convenes and records.
12. "Assistant" and "liaison" are not roles: whatever Kris is talking to is his point of contact in that capacity.

[Back to contents](#contents)
