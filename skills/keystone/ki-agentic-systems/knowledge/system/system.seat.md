---
id: system.seat
title: Seat
type: system-term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 20, SEAT-AT a (16 November 2026), and change 12, the seat card taken by the summit's guardian on 17 November 2026 under the owner's direction to take high-confidence calls
links:
  system.work-package:
    predicate: dcterms:isPartOf
  system.role:
    predicate: skos:related
  system.actor:
    predicate: skos:related
---

# Seat

A seat gives each job in a piece of work an address of its own, so work can be routed to it whoever holds it.

A seat is the place for one [role][system.role] in one [work package][system.work-package]. An [actor][system.actor] holds it, and the same actor may hold seats in many packages; when the actor changes, the seat and its address stay. The industry has no word for it: agent frameworks give a role to an agent, not a place in a piece of work, so it is not mapped.

## Our conventions

- **The address:** a seat is written `<package>@<role>`, or `<package>+<slug>@<role>` in a sub-package, as `ki.cairn@warden` and `hnr.summit+website@information-architect`: `.` builds a package's name, `+` adds a strand and `@` names a seat (SEAT-AT).
- **The binding:** a package's live seats are its `ki-workers` entries, each a role, its tier and at most the holding actor's id; a seat that has ended leaves the list, and which seats an actor holds is read from there, never stored in the roster.
- **A seat's own actor:** an actor with no name of its own takes its seat's id, as `actor:ki.cairn@information-architect`, its roster file named the same; it may be given a name later in that file, as the actor at `cairn.summit@voice` is Natter.

[system.role]: ./system.role.md
[system.work-package]: ./system.work-package.md
[system.actor]: ./system.actor.md
