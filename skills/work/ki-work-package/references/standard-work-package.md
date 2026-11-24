---
ki-document-type: standard@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T10:18:15Z
ki-status: in force
---

# Work package

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Activation and ownership](#41-activation-and-ownership)
  - [4.2 Location and identity](#42-location-and-identity)
  - [4.3 The shape](#43-the-shape)
  - [4.4 The entry file](#44-the-entry-file)
  - [4.5 The state](#45-the-state)
  - [4.6 Change documents](#46-change-documents)
  - [4.7 Sub-packages](#47-sub-packages)
  - [4.8 Messages](#48-messages)
  - [4.9 Writers](#49-writers)
  - [4.10 The tidy](#410-the-tidy)
    - [4.10.1 WIP reset](#4101-wip-reset)
  - [4.11 Work identity and native sessions](#411-work-identity-and-native-sessions)
  - [4.12 Optional runtime reminder consumers](#412-optional-runtime-reminder-consumers)
  - [4.13 Update lifecycle](#413-update-lifecycle)
  - [4.14 Resume lifecycle](#414-resume-lifecycle)
  - [4.15 Removal lifecycle](#415-removal-lifecycle)
  - [4.16 Prohibited payloads and claims](#416-prohibited-payloads-and-claims)
  - [4.17 Audit and conform boundary](#417-audit-and-conform-boundary)
  - [4.18 A repository stands on its own](#418-a-repository-stands-on-its-own)

## 1. Introduction

A work package is the folder for one piece of work above a work item: its entry file, `_index.md`, and its change documents, with sub-packages of the same shape where the work has more than one strand. It lives in the Cairn store, at `work/<territory>/<work id>/`. The entry file is enough to recover from: a fresh agent, or State of play routing new work, pointed at it knows where the work stands without a transcript, private runtime state or a vendor session. Git is the logbook: each move is a commit, so the package keeps no moves list and no history. The sources behind these rules are in [the sources file](sources.md).

The work model is the [Work Process](https://github.com/knowledgeislands/ki-principal/blob/main/Pillars/Philosophy/Model/Processes/Work%20Process/Work%20Process.md) note's, decided by [GDR-KI-PRINCIPAL-009](https://github.com/knowledgeislands/ki-principal/blob/main/Admin/Governance/Decisions/GDR-KI-PRINCIPAL-009-the-work-model.md). The skill was `ki-checkpoint`, then `ki-work-folder` from 18 October 2026, and became `ki-work-package` on 19 October 2026. The session-level checkpoint remains the conversational word for writing the package's state before a pause.

[Back to contents](#contents)

## 2. Scope

What a work package holds, where it lives, and how it is kept.

### 2.1 In scope

- Where a package lives, its identity, and the files and folders it holds.
- Its entry file: definition, repositories, state and links to its changes and sub-packages.
- Where its state, decisions, open points and messages live.
- Who writes a package, and the tidy that brings each package to the shape.
- Updating, resuming and removing a package, and what it must never carry.
- What a repository's `AGENTS.md` says about the package it serves.

[Back to contents](#contents)

### 2.2 Out of scope

- The contents of the work itself.
- The format of a change document: `ki-authoring`'s [change format](../../../keystone/ki-authoring/references/standard-formats-change.md).
- How messages and presence are stored: the Cairn store's contract and its MCP.
- When a package is tidied, the levels, states and moves, and the report forms: `ki-coordination`.
- The run side, briefs and run reports included: `ki-delegation`.
- How sessions share the Cairn store, how its history is squashed, and how `ki` and the hooks find packages in it. These are not yet set.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Work package** | The folder for one piece of work above a work item: its entry file and its change documents, each with at most one draft file, with sub-packages of the same shape. **Standard:** this one, [4.3](#43-the-shape) |
| **Entry file** | A package's `_index.md`: purpose, repositories, the state for recovery, and links to its changes and sub-packages. **Standard:** this one, [4.4](#44-the-entry-file) |
| **State** | Where the work lies now: the state fields, at most five Now lines, Held and the live seats under `ki-workers`, with no history. **Standard:** this one, [4.5](#45-the-state) |
| **Sub-package** | One strand of a package's work, with the same shape as a package. **Standard:** this one, [4.7](#47-sub-packages) |
| **Change document** | A proposal to change standards or how work is done, with its design outline and a planning section. **Standard:** `ki-authoring`'s [change format](../../../keystone/ki-authoring/references/standard-formats-change.md) |
| **The tidy** | The pass that brings a package to the shape and keeps only what is current. **Standard:** this one, [4.10](#410-the-tidy) |
| **Signposts** | The last part of a package's Scope: the triggers that send a matter beyond the node, each saying what comes up, to whom and how, on top of the defaults every package inherits. **Standard:** this one, [4.4](#signposts) |
| **Holder** | Who the work lies with: `owner`, `agent`, `run/<name>`, `work/<id>`, `person/<handle>` or `repo/<name>`. **Standard:** this one, [4.5](#45-the-state) |
| **Keyholder** | The session holding a package's keys, the seat that may write its package. **Standard:** [the role standard](standard-roles.md#44-marks) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Activation and ownership

The capability is optional. A repository declares `ki-work-package` in `.ki.toml`; the declaration is an empty capability marker. The audit reads the packages under `work/` in a repository that declares it. Git supplies any recovery history.

This standard is the one specification of the work package. It owns the package's shape, its entry file, who writes it and the tidy, at every level, coordinated or not. The other owners keep only their side and link here for the rest:

| Concern | Owner |
| --- | --- |
| When a package is tidied, at send, mark, hold and finish; whether an outcome has a durable home; the report forms; acting on messages and route receipt | `ki-coordination` |
| The run packet, with run briefs and reports, and how a session delegates to its agent host's subagents | `ki-delegation` |
| The format of a change document | `ki-authoring` |
| A change document's review and graduation | `ki-work design` |
| Messages and presence between work | The Cairn store and its MCP |

[Back to contents](#contents)

### 4.2 Location and identity

A work package lives in the Cairn store, at `work/<territory>/<work id>/`, one per piece of work above a work item; where the store sits on each rig is whatever that rig sets. A work item has no package, because its record is its home. `<work id>` is the work's dotted id under `ki-coordination`'s [Work naming](../../ki-coordination/references/standard-opening.md#42-work-naming), which defines the id, slug and title: lower-case kebab segments joined by `.`, never a host, an underscore or a runtime session identifier. `<territory>` is the id's first segment. The folder name, the `ki-id` field of `_index.md` and its H1 agree exactly.

`work/` holds only territory folders and the root's own, `cairn`, and each of them only packages, each a physical directory with its entry file. Symlinked, timestamped, archived and alternate layouts are invalid; the one nesting is a [sub-package](#47-sub-packages). There is no holding area for work awaiting review: live work is a package, and work that is not live is deleted, Git keeping its history.

A package names the repositories it mainly works in under `repositories:` in its entry file, and it may still change others. Records remain in the repositories that own their plans, priority and acceptance; a record's `project` resolves through the Capital's registry without execution authority. A record without `project` goes first to its regular or ad hoc owner, then to State of play only when unresolved.

<a id="three-places"></a>**Three places, each with one job,** as the owner set on 24 November 2026. A repository's roadmap holds high-level, long-lived items, under `ki-work-roadmap`'s [Records and work packages](../../ki-work-roadmap/references/standard-repository-roadmaps.md#49-records-and-work-packages): an understanding of what may be needed, which can sit there a long time. A work package holds work in hand: an item is pulled into a package when it is taken up, and only then worked, as change documents with an outline, steps and open questions; a record carrying that detail itself is possible but not the norm. An Orca item, or any host's equivalent, is only a pointer, under [change documents](#46-change-documents). A package names the records it works in its entry file's `ki-records`, by full record id, so the Wayfinder can follow them, and never copies their state.

Work no longer in hand goes back to the roadmaps of the repositories it belongs to as high-level items, Git keeping the detail; a parked package's work goes under [parking](#parking).

`cairn.summit`, `ki-level: root`, is the estate package and the guardian's seat, not a territory's. It stands apart from the territories' trees rather than over them, a special case rather than the parent of the territories' summits: it carries no `ki-parent`, no territory's summit names it as one, and the `cairn.*` packages name it as theirs. Each territory's top is its summit, `<territory>.summit`, its State of play, which carries no `ki-parent` and roots its territory's tree, because each territory needs an independence of its own; the summit replaces the main State of play, `<territory>.sop.main`. Every other package, a Project, regular work, ad hoc work or a secondary State of play, is a node beneath the summit: its id is `<territory>.<slug>`, with a further dot segment for a node beneath a node, as `ki.cairn` beneath `ki.summit` and `personal.rig.sol` beneath `personal.rig.summit`, and its level `regular`, or `project` where it carries one Project, the id naming no kind. Each names as `ki-parent` the node of its own territory whose authority it sits under, its summit or a node beneath it; a sub-package names its parent package instead. Any node can split its authority by adding nodes beneath it, and nodes fold back up when they are no longer needed, so a Project sits where the authority it needs is. The tree is the register: a node covers everything beneath it, read from the `ki-parent` links, and work with no package yet belongs on the roadmap, not in any package. Check that each parent resolves, stays within its territory and closes no cycle.

<a id="cascade-down"></a>

**Work cascades down the tree and stays down:** delegate work down, own it where there is no one to cascade it to, and escalate up. This is the tree's governing principle, and every rule that moves work between packages, in this standard and in `ki-coordination`, follows it.

- **Delegate down.** A node passes work to the next node down that owns it, and that node keeps it.
- **Own it if there is no one below.** Where the node the work would go to has no one seated, no seat under its `ki-workers` or only a vacant one, there is no one to cascade it to: the node holding the work owns it and does it itself, through its own runs where it delegates. It never parks work on an empty node, and never waits for a seat to be filled.
- **Escalate up.** Only a real escalation comes back up: a decision beyond the node's remit. A node never passes work back up because it got no response, and never because the work is hard.
- **Confidence is no grant.** High confidence never licenses a node to act without coordination: what it does on its own confidence stays within its remit and is told to the node above, under `ki-coordination`'s [Weighing what to do](../../ki-coordination/references/standard-reporting.md#415-weighing-what-to-do).
- **One path.** An escalation travels up the path the work came down, node by node. A summit has no parent, so a matter going up from a summit goes to the guardian by name, the keyholder of `cairn.summit`. The owner may still talk to any node directly.

[Back to contents](#contents)

### 4.3 The shape

A package is its entry file and its change documents, each with at most one draft file beside it. Where it holds more than one strand of work, each strand is a sub-package with the same shape; where it holds one, the change documents sit at the top.

```text
<package>/
  _index.md              entry: purpose, repositories, state for recovery, links to its changes and sub-packages
  NN-<slug>.change.md    the work: its agreed outline and Steps, open points in its Open section
  NN-<slug>.<word>.md    optional: the draft of that change's result, deleted with it
  <sub-package>/         a strand of work, the same shape again
    _index.md
    NN-<slug>.change.md
```

- **The package's `_index.md` is enough to recover.** It holds the state, what is in hand, what waits and who is working, and links to every change and sub-package, so an agent pointed at it knows where things stand.
- **A change document may have one draft file beside it,** holding only the draft of its result, under [4.6](#draft-file).
- **There are no other package files:** no `state.md`, `decisions.md`, `discussions.md` or `messages.md`, and no focus folders, run reports, briefs, findings or feedback files. The words focus and theme are not used for sub-packages: theme belongs to roadmaps, and focus suggests what is looked at first.
- **No empty folders.**
- **Temporary output** belongs in the run's temporary directory, `$TMPDIR/ki-agents/<run>/<name>/`, outside every repository, under the `ki-delegation` [run packet](../../../agentic-ecosystems/ki-delegation/references/standard-background-runs.md#44-run-packet); scripts, screenshots, `scratch/` folders and the output of tools never enter a package.

[Back to contents](#contents)

### 4.4 The entry file

A package's entry file is `_index.md`, so it sorts first. It holds the work's definition and its state.

```yaml
---
ki-id: ki.observatory
ki-parent: ki.summit
ki-level: project
ki-project: observatory
ki-description: >-
  Builds and runs the local Observatory in apps-observatory.local, the territory's read-only view of work, runs
  and diagrams. Takes Observatory features, its design system and `ki work status` consumers. Not for timelines
  and calendars (ki.timelines) or the work model itself (ki.ways-of-working).
ki-worker: agent
ki-supervisor: owner
ki-role: warden
ki-created_at: 2026-10-13T23:50:00Z
ki-repositories:
  - ki/apps-observatory.local
ki-state: with-worker
ki-since: 2026-10-19T11:25:41Z
ki-workers:
  - role: warden
    tier: managers
    since: 2026-10-19T07:14:00Z
    status: active
---
```

Every field takes the `ki-` prefix, as KI defines them all, under the [format format](../../../keystone/ki-authoring/references/standard-formats-format.md#42-front-matter): the keys inside a `ki-workers` entry or a `ki-hold` keep their names, and a field written without the prefix is read as its `ki-` name and warned on until packages are swept. The definition's field set is closed; the state fields of [4.5](#45-the-state) stand beside it, and nothing else:

| Field | Presence | Value |
| --- | --- | --- |
| `ki-id` | required | the work's dotted id, agreeing with its folder, or a sub-package's `<parent id>+<slug>` |
| `ki-level` | required | `root`, on `cairn.summit` alone, `territory`, `regular` or `project`; a sub-package's is its parent's, or `regular` beneath the root or a summit |
| `ki-label` | optional | title with an inventory host or category requirement suffix; never a session seat |
| `ki-project` | required at `project` level, else absent | the Project note's slug, the node's own slug in its id |
| `ki-parent` | required except on the root and a territory's summit, absent on both | a node of the same territory, `cairn.summit` for a `cairn.*` node, or a sub-package's parent package |
| `ki-description` | required | the routing description, at most 500 characters |
| `ki-worker`, `ki-supervisor` | required | each a holder |
| `ki-role` | required | the package's role, one role from [the role catalogue](standard-roles.md#43-role-catalogue); a package without one is warned on under [the role migration file](migration-roles.md) |
| `ki-created_at` | optional | UTC time the package was created, no later than `ki-since` |
| `ki-repositories` | required | a list of the repositories the package mainly works in, each named `<territory folder>/<repository>`, as `ki/apps-cairn.local` or `cairn/ki-cairn-store`, empty where it works in none |
| `ki-records` | optional | a list of the records the package works, each by its full record id, as `KI-HARNESS-GOV-152`, never a short one; each links to its record by the id's prefix through the ki registry, and the record's state is never copied |

Territory work is the territory's summit, id `<territory>.summit`, its State of play; `summit` is never the second and last segment at another level, and `ki-level: root` belongs to `cairn.summit` alone. A sub-package takes its parent's level, except that one beneath the root or a territory's summit takes `ki-level: regular`. The level is the one authority for the kind of work: not the title, a native session name, the folder name, the repository declaration, an output style, a hook line or a cached copy.

The `ki-description` is written for routing, in a skill description's voice: third person, what the work does, then "Takes ..." naming the kinds of unit it accepts, then "Not for ..." naming the neighbouring works by id, one to three sentences, tested against a handful of ambiguous routing examples. There is no `active` or `accepts` field: every state except `finished` can receive, and a work winding down says "Not taking new units" in its description.

The body has exactly this heading sequence, with an optional one-line `## Values` after Scope:

```markdown
# ki.observatory

## Goals

## Scope

## Values

## Now

## Held

## Changes
```

- **Goals** - the node's **direction**: the standing goals of the work, stable across its waves, as few as it needs. For Project work the first line links the Project note's `outcome` and never restates it; for regular work it links the Activity note; for territory work, the Charter. Links point upward: the package names its Project, and the Project note never links down.
- **Scope** - the node's **remit**: `In:` and `Out:` lines, In naming what the work may decide and do, and Out what goes up or belongs to which other work, by id, a line saying the package works mainly in the repositories `repositories:` names and may still change others, and its [Signposts](#signposts). This is what State of play reads when two descriptions both match.
- **Values** - optional: one line linking the shared values, written once in the Work Process note under an Enactment record, and adding any the work holds itself.
- **Now** and **Held** - the state's body, under [4.5](#45-the-state).
- **Changes** - a link to every change document and every sub-package, one list item each, saying in a line what it is and where it stands.

Each section says something, if only `None`. Nothing else belongs in the entry file: no history, evidence or discussion. Direction and remit need no section of their own: a node's way of working is part of its remit, changed by the node where the change reaches only it and its children, and proposed up the tree where it reaches wider, as the Cairn summit's [change 00](https://github.com/krisb/ki-cairn-store/blob/fa651a2c309ff338acf15b533d84820809fd5c7e/work/cairn/cairn.summit/00-authority-tree.change.md) sets out.

<a id="signposts"></a>

**Signposts say where a matter goes when it is not the node's own:** a leader that meets something with wider reach does not take it straight to a skill or a guild's lead, because its coming up probably has wider implications, so it goes up to the node that can see them all, which delegates it back down. Scope ends with a `Signposts:` line, then a short list of triggers, each saying what comes up, to whom and how. Every package inherits the defaults below and lists only what it adds; a package that adds nothing writes `Signposts: the standard's defaults.`

```markdown
Signposts: the standard's defaults, and:

- **A skill and what the Cairn shows disagree** - to ki.summit's keyholder, as feedback, for the guardian.
```

The defaults follow the rule that [work cascades down](#cascade-down): a matter goes up the path the work came down and comes back down from the node that can see all it touches, and the owner may still talk to any node directly.

- **Wider reach goes up, never sideways.** A matter that reaches beyond the node and the nodes beneath it, such as a skill, a standard, the work model or anything crossing packages, goes to the parent's keyholder, as feedback by Orca mail between sessions in Orca, otherwise through the agent host's messaging or a meeting, under `ki-coordination`'s [Steer and feedback](../../ki-coordination/references/standard-reporting.md#416-steer-and-feedback). Where the parent has no one seated, its keyholder is the one above it, under [Writers](#49-writers). Each node settles what reaches only its own subtree and passes the rest up, node by node; a summit, which has no parent, sends it to the guardian by name, the keyholder of `cairn.summit`, which stands apart from the trees. A skill, a standard and the work model reach every territory, so they reach the guardian. A node never takes such a matter straight to a guild, its lead skill or another leader, even one that is running.
- **The guardian sends it back down.** It delegates the matter down the tree to the node that owns it: for a skill or a standard, the guild that `ki-keystone`'s [guild map](../../../keystone/ki-keystone/SKILL.md#the-guild-map) names, through that guild's package; otherwise the leader whose Scope covers it. Where that node has no one seated, the nearest seated node above it owns the work.
- **The owner's word given at a node.** When the owner gives a leader a decision directly that changes a standard, a skill or the work model, the leader applies it to a change document of its own package and sends it up, as above, to land. It does not change the skill or the standard itself.
- **A long-standing request** left with the owner is flagged up a level at a time, under `ki-coordination`'s [Long-standing requests](../../ki-coordination/references/standard-territory.md#43-long-standing-requests).
- **The work stays down.** Only the matter goes up. The node keeps doing what its remit covers, and a signpost grants no authority to the node it points at.

[Back to contents](#contents)

### 4.5 The state

The state lives in `_index.md`: its state fields, at most five Now lines, Held and `ki-workers`, with no history. It is rewritten in place at every move, so the package's Git log is the history of the work's moves.

| Field | Presence | Value |
| --- | --- | --- |
| `ki-state` | required | `with-worker`, `handoff-to-supervisor`, `with-supervisor`, `handoff-to-worker`, `handoff`, `on-hold` or `finished` |
| `ki-target` | required in `handoff`, else absent | the holder the work is in transit to |
| `ki-hold` | required in `on-hold`, else absent | a mapping of `reason`, `paused`, or `more-expected` for Snoozing until `ki` accepts `snoozing`, `release`, the condition in words, and an optional `set_by`, `owner` or `worker`, the worker setting only the idle `more-expected` hold under `ki-coordination`'s [Putting work on hold](../../ki-coordination/references/standard-holds.md#41-putting-work-on-hold); absent reads `owner` |
| `ki-blocking` | optional | `true` only in `handoff-to-supervisor`, when the worker sent back with a blocking query |
| `ki-since` | required | UTC time of the last move |
| `ki-received` | optional | UTC time of the supervisor's receive, or `null` |
| `ki-beat` | optional | UTC time of the last heartbeat while with a worker, or `null` |
| `ki-mark` | optional | UTC time of the last mark |
| `ki-method_read` | optional | the short ki-agent-backpack revision whose `ki-coordination` and `ki-work-package` guidance the worker last read, or `null` |
| `ki-raised` | optional, on a guardian's package only; absent when nothing is raised | the interrupts the guardian has raised to the owner and not yet seen settled: a list of entries, each a mapping of only `tag`, the query's tag, and `since`, the UTC time it was raised |
| `ki-listening_enabled` | optional | `true` when the thread has the listening capability, by the owner's express word or an agreed role; absent reads `false` |
| `ki-listening_status` | required while `ki-listening_enabled` is `true`, else optional | `on` while the inbox watcher is armed, `off` otherwise; `on` only while `ki-listening_enabled` is `true` |
| `ki-syncing_enabled` | optional | `true` when the thread is its host's sync thread; absent reads `false`; `true` requires `ki-listening_enabled: true` |
| `ki-syncing_status` | required while `ki-syncing_enabled` is `true`, else optional | `on` while host sync runs, `off` otherwise; `on` only while `ki-syncing_enabled` is `true` |
| `ki-workers` | optional | the package's seats, live or vacant, each its binding: a mapping of `role` and `tier` and at most `id`, the holding actor's typed id `actor:<id>`, an actor with no name taking its seat's id, `<package>@<role>`, `since` and `status`, `active`, `idle` or `vacant`, a vacant seat carrying no `id` or `since`, under [the role standard's fields](standard-roles.md#45-role-fields), presence staying in the actor's roster file; absent or empty when it has no seat, since a node may have no worker |

The holder the work lies with now and its role are derived from `ki-state`, `ki-target`, `ki-worker` and `ki-supervisor`, never stored. Timestamps use UTC RFC 3339 second precision; quote `ki-label` in YAML where it contains `>`. There is no `title` field: a package's id and its place in the tree name it, and a view works out its words from them. The four capability fields record the thread capabilities under `ki-coordination`'s [Thread capabilities](../../ki-coordination/references/standard-listening.md#thread-capabilities): each thread carries `ki-listening_enabled`, `ki-listening_status`, `ki-syncing_enabled` and `ki-syncing_status`, and if `ki-syncing_enabled` is true, `ki-listening_enabled` must be true, because a syncing thread is always a listening thread. `_enabled` says whether the thread has the capability; `_status` says whether it is on now, and the banner's mode lines read both. These are the fields the Work Process note's Observatory fields read through `ki work status`. `ki-method_read` replaces the body line a coordinator once wrote under its refresh rule; setting it is the confirmation that a `REFRESH` message has been acted on, under `ki-coordination`'s [Refreshing this guidance](../../ki-coordination/references/standard-coordination.md#482-refreshing-this-guidance).

`ki-raised` is the mark of a raised interrupt, as the Cairn summit's [Rooms (50)](https://github.com/krisb/ki-cairn-store/blob/4fcaf48d8c9d3c280021a5cdc758bb770310e688/work/cairn/cairn.summit/50-rooms.change.md#46-decided) sets out. The guardian adds an entry when it raises a query to the owner under the same change's [Timed and indefinite stand-downs](https://github.com/krisb/ki-cairn-store/blob/4fcaf48d8c9d3c280021a5cdc758bb770310e688/work/cairn/cairn.summit/50-rooms.change.md#49-timed-and-indefinite-stand-downs), which lets news from a background-only, stood-down or paused actor interrupt the owner only through the guardian; it removes the entry when the owner answers the query or the query lapses. An entry holds only the query's tag and when it was raised, never its text, and the field is absent, not empty, when nothing is raised. Only a guardian's package carries it for now. Cairn reads the field read-only for its map, using only each entry's `tag` and `since`.

```yaml
ki-raised:
  - tag: QUIET-INTERRUPT
    since: 2026-11-21T17:00:00Z
```

- **Now** - at most five lines: what is running, what lies with whom, since when. It holds the present only.
- **Held** - work waiting on a named decision or event, one line each with its release condition. Deferred deliverable work becomes an unadopted triage record in its home repository under `ki-work next`'s [capture rule](../../../keystone/ki-work/references/standard-next-work.md#432-capture-substantive-prospective-work), and ideas go to the Project note's Notes, to the Inbox, or to a record through `ki-work next`; neither stays here.
- **Workers** - the live seats, one entry each; a seat that has ended leaves the list.

**Pitfall: an `_index.md` summary goes stale fast** (Bastion's lesson, `ki.cairn`'s Overnight UI (52), steps 53 to 55). A Now line or a Changes summary written at one move is wrong by the next, so the session that makes a move rewrites every line it touched in the same commit, and a reader checks the change document before acting on a summary.

History stays out: the recap since the mark reads the package's Git log, so nothing needs a dated log in Now or Held. Evidence, such as commit identifiers, test counts and artefact hashes, lives in the run report and the commit; the state may link one, not copy it.

**An actor's state and its package's.** An actor's state, on its roster entry, and its package's state, its hold with `release` and `ki-since`, are independent, each recorded in its own place, though often aligned. A return time on the roster and one in a hold's `release` can drift apart. A stand-down parks nothing; where the owner parks the package too, [parking](#parking) applies.

- **While an actor is paused,** a request for it goes into its package, a change as a change document and a short request as a message, never to the actor.
- **What cannot wait:** the guardian tells the owner about anything that cannot wait for the return, because of a deadline or because the pilot group is blocked, and the owner brings the actor back early or moves the item to a working seat.
- **Meanwhile** the guardian acknowledges and answers for the paused package but takes none of its work forward.

Standing an actor down and bringing it back are `ki-coordination`'s [holds](../../ki-coordination/references/standard-holds.md#42-standing-a-seat-down).

[Back to contents](#contents)

### 4.6 Change documents

- **Change documents carry the work.** Each is `NN-<slug>.change.md`, under `ki-authoring`'s [change format](../../../keystone/ki-authoring/references/standard-formats-change.md), its slug lower-case kebab case.
- **They are numbered** in tens by group, in the order they are taken, with gaps for new ones.
- **They are named by name, not number.** The number is only a change document's priority; its name is the slug after the number, in sentence case. Wherever one is mentioned, in a file or a reply, it is called by that name, with its number in brackets after it if at all, as "Case website (70)", never "change 70" or "70" alone, and a link to it takes the same text, as `[Case website (70)](70-case-website.change.md)`. Replies follow `ki-coordination`'s [Links and wording](../../ki-coordination/references/standard-reporting.md#43-links-and-wording).
- **Decisions are applied to the change document they belong to.** When the owner decides, the decision is applied to the change document's outline or Steps and its question removed from the Open section, and then the work acts on it. The output, a skill, `AGENTS.md`, a note or the site, carries the result, and the change document is deleted once its work has landed. No change document or `_index.md` keeps a decision log, a `Decided` section or the owner's words; Git history is the only trace. Review and graduation are `ki-work design`'s.
- **A change document that runs past about 1,500 words or holds a `Decided` section is due a tidy,** which applies its decided points to the outline or Steps, removes them, and deletes the document once its work has landed.
- <a id="draft-file"></a>**A change document may have one draft file beside it,** `NN-<slug>.<word>.md`: its number and slug are the change document's own, and its word is one lower-case word naming what it drafts, never `change` nor a word naming a file kind the closed list bars, `state`, `decisions`, `discussions`, `messages`, `brief`, `report`, `findings` or `feedback`, as `20-site-layout.layout.md` beside `20-site-layout.change.md`. It holds only the draft of the change's result, the text that will land in the output's own home, and nothing the change document carries: no outline, Steps, open points or decisions. It is a file, not the `draft` status a change document carries while its outline is agreed. It is not a change document, so the length and `Decided` check does not read it and the Changes section need not link it. It is deleted with its change document, and a draft with no change document beside it, or a second draft of one change document, falls outside the closed list.
- **Open points live in a change document's Open section,** in full, and nothing already answered stays there. An answered question leaves Open in the same turn its answer is applied to the outline or Steps; an `_Answered <letter>_` marker left on it meanwhile is temporary and goes at the next tidy, and Questions read None by `agreed`. A question overtaken before it is answered is struck through as withdrawn, under `ki-authoring`'s [change format](../../../keystone/ki-authoring/references/standard-formats-change.md).
- **An Orca item is only a pointer.** An Orca item, or any host's equivalent, is a doorbell: it says something needs the owner and links to one question or step in a change document. It holds no question, answer or work of its own, and it closes once answered, the answer applied in the change document.

[Back to contents](#contents)

### 4.7 Sub-packages

A sub-package is one strand of a package's work: a package in miniature, with its own `_index.md` and one or more change documents, in a folder of the package named by a lower-case kebab slug. A package with one strand needs none.

- **Identity:** its id is `<parent id>+<slug>`, as `hnr.summit+website` in `work/hnr/hnr.summit/website/`, under `ki-coordination`'s [Work naming](../../ki-coordination/references/standard-opening.md#42-work-naming): `.` builds a package's name and `+` adds a strand. Its folder is the slug, and its `ki-id` and H1 agree with the parent's id and that slug. The earlier `<parent id>.<slug>` is read under [the role migration file](migration-roles.md).
- **Form:** the package's shape, its `ki-level` the parent's, except under the root or a territory's summit, where a sub-package takes `ki-level: regular`, the one exception. Its `ki-parent` names the parent package, so it sits in the tree beneath its parent.
- **Sub-package or node:** a strand the parent's own seat works is a sub-package; a strand that needs a seat of its own is a node of its own beneath, `<territory>.<slug>`, with its own package. Most territories run their work through the summit's package, with sub-packages where a strand needs its own.
- **Links:** the parent's Changes section links it.

[Back to contents](#contents)

### 4.8 Messages

The message queue has retired: a package keeps no queue of its own and the Cairn store keeps no `messages/`. Work for another package goes along the tree as steer or feedback, and the receiving package's holder, or the root's guardian while none holds it, records it in its change documents, Now or Held, under `ki-coordination`'s [Work between packages](../../ki-coordination/references/standard-messages.md#messages-between-work). Sessions talk by Orca mail, under `ki-coordination`'s [messages standard](../../ki-coordination/references/standard-messages.md#42-orca-mail-and-the-cairn-beacon), in a meeting, under `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md), or, for a session outside Orca, through its agent host's own messaging; that conversation carries no authority, and nothing in it binds a package until its holder records it.

Owner feedback on a document the work produced reaches the package the same way, as a message rather than a feedback file. Each point is recorded in the change document it reaches as what is to change, not in the owner's words.

[Back to contents](#contents)

### 4.9 Writers

Every writer is named, and every other party only reads. This standing contract implements the ownership set out in [4.1](#41-activation-and-ownership) and is the contract other skills, tools and runs check in on:

1. **One owner sets the shape and the tidy rules:** this standard sets the closed list, what each writer may write and how a deletion is made.
2. **Every other writer is named** with its permitted kinds, in the table below.
3. **Only the package's own work deletes.** Runs, other work and tools never delete there.
4. **A check backs each writer mechanically,** through the [rubric](rubric.md); the judgement whether an outcome has a durable home stays with the package's keyholder under `ki-coordination`.

| Writer | Writes | Never |
| --- | --- | --- |
| The package's keyholder† | `_index.md`, its change documents with their draft files, and sub-packages, and tidy deletions | Another package |
| A background run, design runs and `ki-work design` included | A change document in the package its brief names, and that change document's draft file | Any other kind, its report included |

† The keyholder is the actor seated at the package, as its `ki-workers` name it. A package with no seat, or only a vacant one, is held by its parent node's keyholder, a summit's by the guardian since it has no parent, under the rule that [work cascades down](#cascade-down), who writes in it as its keyholder until a seat is taken. Every other party writes nothing in a package: it asks the keyholder in a meeting or a conversation.

A new package is seeded by its parent node's keyholder, usually the guardian, or by any session the owner points at it on the owner's word, which holds the new package's keys while it seeds it: it writes `_index.md` on hold, with the package's first step as the top line of its Now, and a first change document only if there is a change to carry. Whatever must be done first on pick-up stays the top line of Now.

The `ki-description` in `_index.md` is written at seeding by whoever seeds the package, and afterwards by its keyholder; anyone else proposes a change to it to the keyholder. Readers, such as `ki work status`, the Observatory and the rubrics, change nothing; a change of shape names them as consumers.

A seat changes hands by acknowledged handover. The old seat reconciles its runs in flight, queued launches and pending writes, stops launching for the package and commits the change to `ki-workers` in one coherent write; the new seat acknowledges before it acts and takes supervision of the reconciled runs. A closed or quiet session, a missing binding or an old last-seen time transfers nothing; there is no timeout takeover. Uncertain ownership is reported. A node acting for a package whose session is idle, under `ki-coordination`'s [acting for idle work](../../ki-coordination/references/standard-territory.md#411-territory-work), takes over nothing.

A package is created in the state its actual move supports; an absent package never implies `with-worker`.

A run brief names its reporting package separately from the product repository; the package's keyholder receives the result. A classification change reconciles running work and report destinations before rerouting anything.

[Back to contents](#contents)

### 4.10 The tidy

The pass each package receives to reach the shape, and to keep it:

1. **The shape.** The entry file is `_index.md`; the state folds into it, live decisions are applied to the change document they belong to, and open points move into its Open section.
2. **Consolidate.** Keep only what is current. Delete anything whose outcome has a lasting home: a commit, a record, a standard or `AGENTS.md`. Git keeps the history.
3. **Sub-packages.** Each strand of work becomes a sub-package with its own `_index.md` and change documents, or its changes come up to the top where the package has one strand. Retire one that has ended; merge ones that overlap.
4. **No empty folders.**
5. **Identity.** `_index.md`'s `ki-id`, `ki-level`, `ki-role` and H1 match the package's current work id and the role catalogue.
6. **The state is now.** At most five Now lines, waiting items under Held, live seats under `ki-workers`, no history.
7. **Every open point is in a change document's Open section,** in full, and nothing already answered: no `_Answered <letter>_` marker is left.
8. **Every rule has a home.** A decision that changes how work is done goes into the standard that owns the practice or, if local to one repository, that repository's `AGENTS.md`.
9. **The roster is current.** The package is registered under its current id, with nothing left under an old id.
10. **Earlier copies listed.** Any copy left elsewhere after a move or rename is listed, and removed only on its owner's word.

Each tidy ends with a check against the work-package rubric and a short report: what changed, what was deleted and why, and what needs the owner.

- **When:** `ki-coordination` says when a coordinator tidies; regular and ad hoc work tidies at its own next update.
- **How:** in one commit by explicit path, `git rm` of each file named and nothing else, never a folder-wide delete, so that Git history holds every deleted file. A draft file goes in the same commit as its change document. The deletion is operational work and opens no record. A change whose outcome has no durable home yet is kept, not homed in haste. The rubric lists candidates; a listing is never permission to delete.
- **Who:** each piece of work tidies only its own package. Territory work never tidies another package; it names each package the rubric flags in a message to that work, and the owning work tidies at its next send. The one exception is a finished work's package, which no coordinator reads once the work is Finished: territory work closes it itself under Close-out.
- **Before a hold:** work going On hold, for either reason and whoever sets it, first tidies its package, so that it holds nothing already dealt with: each change document goes once it has landed. A hold expecting more is no exception: it still carries nothing already dealt with.
- <a id="parking"></a>**Parking:** when the owner parks part of the work tree, one package or a branch of packages, with a paused hold, its remaining work goes back onto the roadmaps of the repositories it belongs to, as high-level items under `ki-work next`'s [capture](../../../keystone/ki-work/references/standard-next-work.md#432-capture-substantive-prospective-work), never as detailed steps, Git keeping the detail, and each parked open question becomes an open question on its record. The package then closes under Close-out, or is pruned to a pointer: its `_index.md` alone, `on-hold`, naming those records in `ki-records`, with nothing live in Now or Held. A parked package holds nothing live. A Snoozing or idle hold parks nothing, since its work is still in hand.
- **Close-out:** finished work's package is deleted at the mark that closes it, in one commit, once its decisions' results have landed and its change documents are resolved, their draft files with them, under [4.15](#415-removal-lifecycle). Where the package outlives the finishing thread, territory work closes it at an owner-authorised mark of its own whose report names the package, so that the package is deleted rather than flagged. This is administrative close-out only: it reopens nothing, accepts nothing and settles nothing on the owner's behalf. It first checks that the state is `finished`, every decision's result has landed and other durable information has reached its owners, no change document is left open, and no run of the work is running or queued. If all hold, it deletes the package in one commit by explicit path, `docs(work): <id> close-out`. If any check fails, it deletes nothing and puts one open point to the owner in a change document of its own. A parked package closes by the same checks, save that its state is `on-hold` and its remaining work and open questions are on their records under [parking](#parking).

[Back to contents](#contents)

#### 4.10.1 WIP reset

The WIP reset, set by the owner on 24 November 2026, is the repeatable procedure that brings an over-full package back to the work in hand, under the [three places](#three-places). The package's owner runs it, in this order:

1. **Gather.** Take everything in the package, steps and open questions alike, and read it beside the roadmap records of the repositories the package names.
2. **Map first.** Before anything leaves the package, commit a map in it, as a change document of its own: one line per step and question, giving the record it went to, or "dropped". Git keeps the detail.
3. **Merge and write back.** Merge the two and write the result back onto the roadmaps as high-level records, each at its right horizon, `now`, `next` or `triage`, through `ki-work next`'s [capture](../../../keystone/ki-work/references/standard-next-work.md#432-capture-substantive-prospective-work), with each open question carried on the record it belongs to.
4. **Keep only the work in hand.** The package keeps only the work actually in hand, as minimal change documents; the map is deleted at the next tidy once every record it names stands. From then on, work is only ever pulled forward from a roadmap into the package.

**Trigger:** the package's owner, or the weekly work-tree check, runs the reset on a package once its in-hand load passes a limit, the numbers being set by WIP-LIMIT.

[Back to contents](#contents)

### 4.11 Work identity and native sessions

A native client session, a Claude Code or Codex session or a Zed tab, is seated in one package and may act in other packages that its coordinating work explicitly stewards. The package identifies the work and its level; the session is an actor, never the unit of work or evidence of stewardship. A local binding establishes identity only, not liveness or write authority.

- **Key:** `<repository name>/<work id>`, such as `ki-principal/ki.ways-of-working`. It is stable across hosts, clients and sessions.
- **Authority:** the entry file's `ki-id` identifies the work and its `ki-level` describes its type. Coordination is an explicitly owner-opened session role on any valid package under `ki-coordination`, not a consequence of level, id, native name or binding. Its opener checks scope, opening authority and coordination capability, preserving any specific owner-approved exception. The native session name derives from the work label; it never decides work identity, level or stewardship.
- **Binding:** the native session identifiers for a piece of work live only in a machine-local runtime file, `~/.local/state/ki/threads/<repository>/<slug>.json`, as Work naming names it. The binding is never committed, never copied into the package, which keeps no runtime identifier under [4.16](#416-prohibited-payloads-and-claims), and never moved between hosts: each host rebuilds its own.
- **Supply:** identity reaches a session through one of three channels, in this order: the agent host's environment and session name, for a session an agent host or a host tool starts; the `SessionStart` hook on startup, resume and compact, where the binding exists; and the pasted opener or thread identity, which names the id and label, where no hook runs.
- **Drift:** a mismatch between the binding, the native name and the entry file is reported in one line and never repaired by the session that finds it; the owner renames by hand, or the work's next update corrects the package.

Until the `ki thread` tooling and its hook registration ship, no binding is written and a session knows its work only from its opener, its thread identity or an explicit id under [4.14](#414-resume-lifecycle).

[Back to contents](#contents)

### 4.12 Optional runtime reminder consumers

A runtime-specific reminder consumer is separately opt-in. It may act only when its native event contract is independently evidenced and all of the following are true:

1. The repository declares `ki-work-package` and resolves to one physical repository root.
2. The runtime adapter is explicitly enabled in that runtime's own configuration; the portable `ki-work-package` declaration remains an empty capability marker.
3. The adapter receives one exact, human-selected work id from that explicit runtime configuration. It resolves only `work/<territory>/<id>/_index.md` in the Cairn store; directory scans, newest-record selection, runtime-derived names, and archived or nested fallback are forbidden.
4. The resolved record is a regular file that satisfies this standard's identity and closed-schema requirements.

The only first-delivery action is a compact reminder that the already-selected package may need an explicit update. The consumer does not create, update, remove, select, or reword a package file; infer work state or completion; invoke `ki-work recap`; read a transcript or vendor session; or expose a session identifier. Repeated, interrupted, malformed, unknown, absent, or otherwise unsafe input is a quiet no-op. The native runtime adapter owns its event semantics, registration, timeout, exit behaviour, and any actionable failure text; the portable contract supplies no shared hook or fallback.

[Back to contents](#contents)

### 4.13 Update lifecycle

Every send, receive, mark and hold rewrites the state in `_index.md`, its fields, Now and Held, under `ki-coordination`'s [Picking work up](../../ki-coordination/references/standard-bootstrap.md#44-picking-work-up), and otherwise the package changes only on explicit user request or a documented repository-local trigger, such as before context compaction or a known pause. The definition changes only when the work does. A generic Stop event is not authority to create or choose a package.

An update replaces the current state in place. It never appends a moves list, timestamped copies or transcript history. Only sends and the supervisor's receives commit, each subject carrying the move, as in `docs(work): ki.ways-of-working send to owner`; the package's Git log is the logbook.

Write durable decisions, accepted work state, or reusable knowledge to their proper owners before referring to them from the package. The package may name those canonical artifacts; it must not become their only copy.

An update that hands work to a fresh agent follows this lifecycle and nothing else. `ki-work recap` supplies no package update and has no checkpoint composition; the update procedure refuses any repository mismatch, stale baseline, ambiguous work, interrupted update or incomplete work state. The hand-off names the physical repository identity, immutable committed baseline or one complete portable patch against that baseline, scoped authority, result destination, and expected verification. A transcript, runtime session, shared filesystem, or provider snapshot may be available but is never required evidence and cannot replace those portable inputs. The package records concise current state and references to durable owners; it does not embed the patch, become the result store, or take ownership of the delegated work.

[Back to contents](#contents)

### 4.14 Resume lifecycle

The manual portable flow is deliberately small:

1. Require the user-selected work id or, from an opener, the Project slug.
2. Resolve to one exact package, `work/<territory>/<id>/` in the Cairn store. If no folder, or more than one, matches, stop and ask the human which package is meant.
3. Read `_index.md` in full and validate the package's identity and schema; open a change document or sub-package when the work in hand lies in it.
4. Act on its state as `ki-coordination`'s Picking work up sets it, its first step, the top line of its Now, first, then its messages, and continue from its Now.

The title and label never take part in resolution. Do not search archived or nested paths as a fallback. Resume creates a fresh working context; it does not reopen, locate, or authenticate to the conversation that last held the work.

[Back to contents](#contents)

### 4.15 Removal lifecycle

Finished work keeps its package with `ki-state: finished` until the mark that closes it, when the package is deleted in one commit with Git keeping it, by the finishing coordinator or, where the package outlives the finishing thread, by territory work at its own mark, under [4.10](#410-the-tidy) and `ki-coordination`'s [Finishing Project work](../../ki-coordination/references/standard-mark.md#45-finishing-project-work). Removal otherwise requires explicit user direction; an agent must not infer completion from record content, a quiet session, or a Stop event. First confirm durable facts reached their proper owners, then delete the exact package.

No retired copy is kept. Git is the recovery mechanism, so `_RETIRED`, archive, timestamped-copy, and other nested layouts are invalid.

[Back to contents](#contents)

### 4.16 Prohibited payloads and claims

A package contains its definition, its current state and its change documents with their draft files, not a transcript. It has no vendor-session field, conversation URL, runtime identifier or chat log. A session's host seat, where it runs or will resume, stays out of packages, holds and reports. A host or category required by the work may appear on a message, brief, record or package label. Names resolve through the territory's machine inventory, with concrete hosts distinguished from categories; bootstrap and re-anchoring map the local machine to that inventory rather than trusting a raw hostname. Unknown, renamed or ambiguous names block device-dependent execution until resolved. Prose must not claim that a future agent can access or reopen the session that last held the work.

It is also not a completion signal, roadmap, decision record, knowledge store, or session recap. Project notes and theme pages ([the Project registry standard](../../../keystone/ki-work/references/standard-project-registry.md)) are the durable home of standing outcome and status, and the entry file names its Project while the Project note does not link down. `ki-work recap` owns the user-facing judgment-led recap; the relevant governance skill owns each durable artifact. An optional runtime reminder consumer may use only an already-selected valid record under [its explicit contract](#412-optional-runtime-reminder-consumers). It does not grant write authority, choose work, invoke recap, read session material, or turn a portable procedure into a native host operation.

[Back to contents](#contents)

### 4.17 Audit and conform boundary

AUDIT, CONFORM, and EDUCATE are currently hosted `ki repo` operations. REMOVE, RESUME, and UPDATE remain explicit agent procedures until a host operation is implemented and independently verified. AUDIT reads every package under `work/` in a repository that declares the capability and validates each package's location, identity, closed front matter, body, closed list, Changes links and boundary, sub-packages included; it warns on Now past five lines, a description past 500 characters, history in the state and each earlier copy of a package left in a retired working area, `+/_WORK/`, `+/_WORK_REVIEW/`, `+/_THREADS/` or `+/_CHECKPOINTS/`; it reports absent scope as not applicable when the capability is undeclared, and rejects symlinks and unsupported layouts.

CONFORM never authors a package file or moves work between states or shapes. It may publish the generated rubric, but it cannot create, update, or remove a package, because those actions need human-selected work and explicit write authority.

[Back to contents](#contents)

### 4.18 A repository stands on its own

A repository must be able to work on its own when it has to, so leaning on one shared store for its work is not a risk it carries. The package does not replace the repository's `AGENTS.md`, which stays its guide: it holds everything a session needs to work in the repository alone, its conventions, checks, boundaries and how it is run, and in one section which work package it serves and where that lives. The package holds direction, remit and state. Neither restates the other, so they cannot drift apart.

When a session cannot reach its package, it carries on from `AGENTS.md` within the last remit it was given and keeps a note in the repository of what it did and decided that would have gone up. When the store is back it re-coordinates: it reads its package, sends that note up as feedback to the guardian, and takes any fresh steer. Each package's bringing-in from its legacy reconciles its repositories' `AGENTS.md` this way.

Every repository's `AGENTS.md` carries one short orientation section near the top, in this form:

```markdown
## Orientation

This repository is part of Knowledge Islands and is worked under the Cairn work model. It serves the work package `<work id>` in the Cairn store, `~/kis/cairn/ki-cairn-store/work/<territory>/<work id>/`, which holds its direction, remit and state; the `ki-work-package` and `ki-coordination` skills say how sessions work together. Read the package first when you can reach it. When you cannot, work from this file within the last remit you were given, keep a note in the repository of what would have gone up, and re-coordinate with the guardian once the store is back.
```

It stops there: no package state, remit or open points, which are the package's; no account of how sessions coordinate, which is the skills'; and nothing about other repositories. Everything else in the file is the repository's own rules. An `AGENTS.md` that already goes further is trimmed back to this by its node's session when its package comes in from its legacy.

[Back to contents](#contents)
