# Coordinating-work standard: opening and naming

This file holds the levels and forms, work naming and the openers. It extends [the core](standards-coordination.md).

## Contents

- [Levels and forms](#levels-and-forms)
- [Work naming](#work-naming)
- [Opening work](#opening-work)

## Levels and forms

The Work Process note's Levels and forms of work table sets the three levels, the two forms and the cascade rule. Under this standard:

| | State of play | Project work | Regular work and ad hoc work |
| --- | --- | --- | --- |
| Id | `<territory>.summit`, such as `ki.summit`; a node beneath it `<territory>.<slug>`, such as `ki.tools` | `<territory>.<project>`, such as `ki.ways-of-working` | `<territory>.<slug>`, such as `personal.inbox` |
| `_index.md` | `work/<territory>/<territory>.summit/_index.md` in the Cairn store, and `work/<territory>/<id>/_index.md` for each node beneath it | `work/<territory>/<territory>.<project>/_index.md` in the Cairn store | `work/<territory>/<id>/_index.md`, one package per ad hoc piece |
| Coordinates | Assigned packages: priorities, the queue and cross-cutting decisions; a node beneath the summit, only the part the summit splits off to it; executes nothing | One Project's work items and runs when explicitly opened | Its own work, conversationally or through explicitly opened coordination |
| Governed by | This standard | This standard while coordinating | Activity notes, `ki-work-recurring` and declared skills; this standard while coordinating |
| Report forms | The coordinator forms, the report heading reading `› State of play` | The coordinator forms while coordinating, under the Project's heading | The coordinator forms while coordinating, under the work's title linked to its `_index.md`; otherwise the conversational reply forms |

`_index.md` declares the level in its `ki-level` field under the work-package standard: `territory`, `regular` or `project`, ad hoc work taking `regular`. The id names no kind, so the level is read from the `ki-level` field, never from the id, and a package changing kind keeps its id (KIND-DROP, Kris, 11 November 2026):

- second segment `summit`: the territory's summit, its main State of play, `ki-level: territory`;
- any other id: a node beneath the summit, `ki-level: regular`, as a [secondary](standards-territory.md#secondary-states-of-play) is, or `ki-level: project` where it carries one Project (NODE-ID, Kris, 16 November 2026).

The State of play sends direction down into Project work as steer, under [Work between packages](standards-messages.md#messages-between-work). Its first concern with any new matter is where the work goes, not holding it in its own context.

Sources: SOP-ROLE, SECONDARY-SOP and NODE-ID in [the decision register](sources.md#decision-register).

## Work naming

Every piece of work above a work item has an **id**, a **slug** and a **title**; the id is authoritative and the other two derive from it. This section is the one place they are defined; `ki-work-package` and `ki-delegation` point here.

| Work | Id | Slug | Title |
| --- | --- | --- | --- |
| Main State of play, the summit | `<territory>.summit` | `<territory>-summit` | `<Territory> > SoP` |
| A node beneath the summit, a secondary State of play, regular or ad hoc work | `<territory>.<slug>`, and a further `.<slug>` for a node beneath a node | `<territory>-<slug>` | `<Territory> > <node in words>` |
| A node carrying Project work | `<territory>.<project>` | `<territory>-<project>` | `<Territory> > <Theme title> > <Project title>`, or `<Territory> > <Project title>` with no theme |
| Sub-package | `<parent id>+<slug>` | `<parent slug>-<slug>` | `<parent title> > <strand in words>` |

Canonical stored names are `<territory>.summit`, which replaced `<territory>.sop.main`, and `<territory>.<slug>` for every node beneath it, as `ki.cairn` and `ki.tools`, with a further dot segment for a node beneath a node, as `personal.rig.sol` beneath `personal.rig.summit`, as Kris took NODE-ID a on 16 November 2026. An id names no kind (KIND-DROP, Kris, 11 November 2026): `<territory>.sop.<name>`, `<territory>.prj.<project>`, `<territory>.reg.main` and `<territory>.reg.<topic>` are earlier forms, read only under [the migration file](standards-coordination-migration.md). A Project's node takes the Project's slug, `<project>`.

A member-repository Project session is a seat for its Capital package, not authority to move that package. Deliberate member-homed regular exceptions stay valid. A package's existence never selects coordination.

**Id.**

- **Segments:** joined by `.`, which builds a package's name, each a lower-case kebab name, `[a-z0-9]+(-[a-z0-9]+)*`, so a segment never holds a dot, an underscore, a host or a runtime session identifier.
- **Territory:** the alias of the territory whose Capital holds `_index.md`, from the estate's territory list in the principal Knowledge Base: `ki`, `hnr`, `er`, `tmx`, `va`, `lgl`, `personal` or `si`. `personal` is the reserved handle for the owner's own territory under the `ki-repo` [territory selection](../../../keystone/ki-repo/references/standard-configuration.md#49-territory-selection) standard.
- **Node:** every package beneath a territory's summit is a node, `<territory>.<slug>`, its `ki-level` `regular`, or `project` where it carries one Project; a node beneath another node adds a dot segment to that node's path, as `personal.rig.sol` beneath `personal.rig.summit` (NODE-ID). A [secondary State of play](standards-territory.md#secondary-states-of-play) is such a node, `ki-level: regular`.
- **Project slug:** a node carrying Project work takes the `slug` of the Project note under the `ki-work` [Project registry standard](../../../keystone/ki-work/references/standard-project-registry.md), such as `tools-burndown`. No id carries a theme, so relabelling a Project's theme renames nothing.
- **Node slug:** any other node's slug is chosen when the work first takes a package, by the owner, or proposed by the agent and confirmed: a short kebab name for the subject, led by the system it works on where the subject alone would be ambiguous, as in `acquire-intake` rather than `intake`. It is never `summit`, which names a summit, never a Project slug of the territory, and never carries a date or host.
- **Sub-package:** one strand of a package that the parent's own seat works, the root's and the summits' included. Its id is the parent's canonical id, `+` and the sub-package's slug, as in `hnr.summit+website`, `+` adding a strand, as Kris took SUMMIT-SUB-PACKAGES b on 16 November 2026; its folder is the slug, inside the parent's. A strand that needs a seat of its own is a node of its own instead, `<territory>.<slug>`. A sub-package has no sub-package; the slug and title rules apply unchanged. Its level, parent, writers and fold-back are the work-package standard's [Sub-packages](../../ki-work-package/references/standard-work-package.md#47-sub-packages).
- **Seat:** a seat in a package is named by its id, `<package id>@<role>`, `@` naming the seat, as in `ki.cairn@warden`, `cairn.summit@guardian` and `hnr.summit+website@information-architect`, as Kris took SEAT-AT a on 16 November 2026; it replaces the title, `<work id>+<role>`. An actor with no name takes its seat's id, as `actor:ki.cairn@information-architect`, under the `ki-work-package` [role fields](../../ki-work-package/references/standard-roles.md#45-role-fields).
- **Unique and stable:** no two pieces of work in a territory share an id or a slug. The id is set once, when the package is created, and changes only through an owner-approved rename when a Project's slug is renamed; every derived name then changes in the same commit.

**Slug.** The id with each `.` and `+` written as `-`: one path component in the run-name alphabet, `[A-Za-z0-9_-]`, which has no dot.

- It names the work's native-session binding, `~/.local/state/ki/threads/<repository>/<slug>.json`, and its coordinator run. The package folder itself is named by the dotted id.
- Existing runtime folder names and immutable run tokens stay unchanged through a package rename; only mutable current home pointers follow the package. Runs keep their own hyphenated slugs.
- The slug is never parsed back into an id; the id is read from `_index.md`.

**Title and label.** The title is the human name, built from display names joined by ` > `. It keeps the theme as display text while the id carries none:

- **Territory:** the territory's name where it is one word, `Personal`, `Legal` or `Techmedix`, otherwise its alias in capitals, `KI`, `HNR`, `ER`, `VA` or `SI`.
- **Theme and Project:** the `title` fields of the theme page and the Project note as they stand, such as `Model` and `Ways of working`. A title follows a registry change at `_index.md`'s next update; the id does not.
- **State of play:** `SoP` in the title and `State of play` in full in the report heading.
- **Node:** a node's slug in words, in sentence case, unless the owner names it otherwise, as `KI > Tools` for `ki.tools`.
- **Label:** the title, plus a `(<host>)` suffix, after a space, only when the work is limited to that machine. The id, slug and title never carry a host.
- **Work name:** the label followed by the id in brackets, `<label> (<id>)`, as in `KI > Model > Ways of working (ki.ways-of-working)` and `KI > SoP (ki.summit)`.

**Where each name is used.**

- The work name names the work in replies and reports, as the sender of [steer or feedback](standards-messages.md#messages-between-work), in a handoff and in the opener's `Label:` line.
- A native session takes its seat's [thread line](../../ki-work-package/references/standard-roles.md#46-thread-line) instead: `<role glyph> 🔑 <work-id>`, the glyph of its one role from the [role catalogue](../../ki-work-package/references/standard-roles.md#43-role-catalogue), with 🔑 marking the keyholder, the session holding the package's keys; `<role glyph> <package>@<role>`, with no key, the seat's id, for a seat working in the package without its keys, such as a maker in a meeting; or `🧵 <work-id>` while it has no role. Where the seat's actor is named, its `ki-name` in the Cairn store's roster, the name comes first and the form above in brackets, as in `Kitteth (🪨 🔑 cairn.summit)` and `Eugene (🏛️ 🔑 5ge.summit)`, under NAME-FIRST; an unnamed seat keeps the bare form. The launch name, the `Rename thread:` line, every report's [thread line](standards-coordination.md#banner) and the sender of every line the seat writes agree. A line's sender is the label with the thread line in brackets, as in `KI > Tools (⚒️ 🔑 ki.tools):` for an unnamed seat and `Cairn > SoP (Kitteth (🪨 🔑 cairn.summit)):` for a named one. The work id stays last, so the name still names the work.
- The label stays in the opener. The [report heading](standards-report-forms.md#banner-detail) uses the title's display names without the territory, joined by ` › `, the work's own name linked to its package's `_index.md` in the Cairn store and nothing else linked, under HEADING-FIX.

| Work | Id | Title | Old shape |
| --- | --- | --- | --- |
| Knowledge Islands main State of play | `ki.summit` | `KI > SoP` | `_state-of-play.md`, `ki.sop`, `ki`, `ki.sop.main` |
| The quartermaster's node beneath the Knowledge Islands summit | `ki.tools` | `KI > Tools` | `ki.sop.tools` |
| Sol's rig, a node beneath a node | `personal.rig.sol` | `Personal > Rig sol` | `personal.reg.rig-sol` |
| Ways of working | `ki.ways-of-working` | `KI > Model > Ways of working` | `knowledge-islands-model.ways-of-working.md`, `ki.prj.ways-of-working` |
| Tools burndown | `ki.tools-burndown` | `KI > Foundations > Tools burndown` | `platform-foundations.tools-burndown.md`, `ki.prj.tools-burndown` |
| Registry removal | `ki.registry-removal` | `KI > Registry removal` | a conversational session, `ki.regular.registry-removal`, `ki.reg.registry-removal` |

Sources: NAMING-MODEL, SUB-PACKAGE, TITLE-THEME, LABEL-HOST, WORK-LABEL, STAGE-C-ROLES, RENAME-NAME, SEAT-LINE, SUMMIT-SUB-PACKAGES, SEAT-AT, NODE-ID, NAME-FIRST and HEADING-FIX in [the decision register](sources.md#decision-register).

## Opening work

The owner opens a session in the actual package-home checkout, the Capital by default or the approved regular or ad hoc member home, names it by its [thread line](#work-naming) where the runtime can name a session, and pastes one opener.

- **Runtime binding:** in the runtime-specific Claude Code binding, the opener launches the session as `claude --name "<thread line>"`: `<role glyph> 🔑 <work-id>` from `_index.md`'s `ki-role`, written `<Name> (<role glyph> 🔑 <work-id>)` where the seat's actor is named, as in `claude --name "Kitteth (🪨 🔑 cairn.summit)"`, or `🧵 <work-id>` with no role yet, the same name as the rename line and every report's thread line.
- **Named in the opener:** every brief or opener that starts a new agent session, a coordinating opener, a meeting participant's or any other skill's, names the [thread line](../../ki-work-package/references/standard-roles.md#46-thread-line) the session is to take, named or bare under NAME-FIRST, in a coordinating opener its `Session:` line, and tells it to rename itself to that line as its first act, before anything else, by its agent host's rename (runtime-specific: `/rename <thread line>` in Claude Code). A background run starts no session and needs none.
- **Delegation in the opener:** the same opener or brief tells the session to delegate its work to its agent host's own subagents, to stay responsive to its messages and to the owner while that work runs, and to let the subagents do most of the work, checking what they return before posting it, as Kris took OPENER-DELEGATE a on 14 November 2026. A coordinating opener carries it in its role and `Background agents:` lines, which apply [the responsive coordinator](standards-coordination.md#the-responsive-coordinator) and its [turn budget](standards-coordination.md#coordinator-responsiveness); any other session-starting brief carries it in one line. How a session briefs, follows and checks those runs is `ki-delegation`'s. A background run starts no session and is itself the subagent, so its prompt carries none.
- **Rename line:** every Bootstrap carries one `Rename thread: /rename <thread line>` line, so a session opened another way can take the name. It is one of two named exceptions to the rule that reports carry no paste line; the other is the [restart suggestion](standards-coordination.md#banner).
- **Ownership:** the State of play prepares the package first, so every session opens with one opener and nothing else.
- **Shape:** an opener is a steering-ready brief, not a transcript: it names the work and leaves state to the package. Its role line carries the three rules of [the responsive coordinator](standards-coordination.md#the-responsive-coordinator).

For the main State of play:

```text
Bootstrap as <territory>.summit territory work under ki-coordination.
Session: <thread line>. Your first act is to rename this session to it with your agent host's rename, such as /rename <thread line>.
Role: coordinator only. The coordinator never does substantive work itself; every unit of work goes to a detached background agent; an owner message never pre-empts work in flight. Dispatch, decide with me, report; stay responsive.
Label: <Territory> > SoP (<territory>.summit). Work package: work/<territory>/<territory>.summit/ in the Cairn store.
Project management only: priorities, the Project-work queue (cap three or four), decisions and releases; route real work to Project work.
Background agents: run substantive work on your agent host's own subagents, never another session; stay responsive to messages and to me while they run; let them do most of the work, and check what each returns before you post it.
Steering: my messages steer; stop or abort only when I expressly say so, naming the work.
Next step: follow the Bootstrap in ki-coordination, then give the full re-bootstrap report.
```

For Project work:

```text
Bootstrap as <territory>.<project> Project work under ki-coordination.
Session: <thread line>. Your first act is to rename this session to it with your agent host's rename, such as /rename <thread line>.
Role: coordinator only. The coordinator never does substantive work itself; every unit of work goes to a detached background agent; an owner message never pre-empts work in flight. Dispatch, decide with me, report; stay responsive.
Label: <Territory> > <Theme> > <Project> (<territory>.<project>). Work package: work/<territory>/<territory>.<project>/ in the Cairn store.
Project: <project>; work only this Project's records.
Background agents: run substantive work on your agent host's own subagents, never another session; stay responsive to messages and to me while they run; let them do most of the work, and check what each returns before you post it.
Steering: my messages steer; stop or abort only when I expressly say so, naming the work.
Next step: follow the Bootstrap in ki-coordination, then give the full re-bootstrap report.
```

For a secondary State of play, a node beneath the summit:

```text
Bootstrap as <id> regular work under ki-coordination, a node beneath the summit.
Session: <thread line>. Your first act is to rename this session to it with your agent host's rename, such as /rename <thread line>.
Role: coordinator only. The coordinator never does substantive work itself; every unit of work goes to a detached background agent; an owner message never pre-empts work in flight. Dispatch, decide with me, report; stay responsive.
Label: <Territory> > <node in words> (<id>). Work package: work/<territory>/<id>/ in the Cairn store.
A node beneath <Territory> > SoP (<territory>.summit), under its rules: project management only for the work beneath this node; the summit stays the owner's front door and owns cross-cutting decisions, the territory's ceiling on active Project work and acceptance, so take those to it in a meeting or a change document.
Background agents: run substantive work on your agent host's own subagents, never another session; stay responsive to messages and to me while they run; let them do most of the work, and check what each returns before you post it.
Steering: my messages steer; stop or abort only when I expressly say so, naming the work.
Next step: follow the Bootstrap in ki-coordination, then give the full re-bootstrap report.
```

For explicitly selected regular or ad hoc coordination, keeping its actual level and home:

```text
Bootstrap as <id> regular work under ki-coordination.
Session: <thread line>. Your first act is to rename this session to it with your agent host's rename, such as /rename <thread line>.
Role: coordinator only, explicitly selected for this package. Delegate substantive units to detached background agents; stay responsive; owner messages steer and never pre-empt work in flight.
Label: <actual work label> (<id>). Work package: work/<territory>/<id>/ in the Cairn store.
Authority: <owner opening instruction or logged decision>. Scope: <approved episode>; end condition: <bounded end condition, or explicitly approved continuity>.
Background agents: run substantive work on your agent host's own subagents, never another session; stay responsive to messages and to me while they run; let them do most of the work, and check what each returns before you post it.
Next step: follow Bootstrap in ki-coordination, checking capability or the specific owner-approved exception, then give the full re-bootstrap report.
```

For a session already on this contract, the one-line `Re-bootstrap as <id> under ki-coordination.` under [Bootstrap](standards-bootstrap.md#bootstrap) is enough.

The owner takes each opener from these templates, filled from each work's `_index.md`, for the main State of play, each secondary and each unfinished eligible package, regular and ad hoc work included. Reports and banners carry none, under the [thread line](standards-coordination.md#banner).

Sources: RENAME-NAME, STAGE-C-ROLES, THREAD-RENAME, RENAME-THREAD-FORM, RESPONSIVE-PRINCIPLE, OPENER-NAME, OPENER-DELEGATE, SECONDARY-SOP and NAME-FIRST in [the decision register](sources.md#decision-register).
