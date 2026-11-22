---
id: system.actor
title: Actor
type: system-term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 23 (now 12), NAMES (13 November 2026), change 20, ACTOR-KEY and SEAT-AT (16 November 2026), and change 70, ACTOR-TYPES and ACTOR-TYPE-FIELD (21 November 2026)
links:
  industry.agent:
    predicate: skos:related
  industry.session:
    predicate: skos:related
  system.work-package:
    predicate: skos:related
  system.bot:
    predicate: skos:related
---

# Actor

An actor gives each piece of work someone who answers for it, who stays the same while the sessions that act for it come and go.

An actor is whoever acts at a node of the work tree, a person or an [agent][industry.agent], the owner among them. An actor persists across [sessions][industry.session] and agent hosts, where a session is one run: many sessions may act as one actor, one after another or at once. The industry has no word for it; the Unified Modeling Language's actor, someone outside a system who uses it, is related but not the same, and is not mapped.

An agent actor runs as one of two types (ACTOR-TYPES): a **session actor**, run as an agent host's session, opened by an opener and a bootstrap and kept by hand, or a **bot actor**, run as a [bot][system.bot], a named identity its agent host keeps and wakes.

## Our conventions

- **One roster file each:** every actor has one file in the store's roster, named by its id. It opens `ki-id: actor:<id>`, then `ki-document-type: actor`, an optional human `ki-name`, then `ki-kind`, the actor's type: `agent` for a session actor, `bot` for a bot actor, or `character` for one that never runs, as `ki-id: actor:wayland` with `ki-name: Wayland` and `ki-kind: bot` (ACTOR-KEY and ACTOR-TYPE-FIELD, in the store contract's `ki-` fields).
- **An actor with no name of its own** takes the id of its role in its [work package][system.work-package], `<package>@<role>`, as `actor:ki.cairn@information-architect`, its roster file named the same (SEAT-AT).
- **Ids, never copies:** a work package's `workers` entry points at its actor by `id: actor:<id>`, and a meeting's participant carries only its actor id and how it is reached, so no file repeats another's fields.
- **Presence lives in the roster file:** an agent actor's [agent host][industry.agent-host] and [agent harness][industry.agent-harness], as `ki-host` and `ki-harness` (PRESENCE-FIELDS a), and the [rig][system.rig] it runs on are its roster file's; who acts where is the work tree's.

[industry.agent]: ../industry/industry.agent.md
[industry.session]: ../industry/industry.session.md
[industry.agent-host]: ../industry/industry.agent-host.md
[industry.agent-harness]: ../industry/industry.agent-harness.md
[system.work-package]: ./system.work-package.md
[system.rig]: ./system.rig.md
[system.bot]: ./system.bot.md
