---
id: system.work-package
title: Work package
type: system-term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 23 (now 12), NAMES (13 November 2026), and change 20, NODE-ID, SUMMIT-SUB-PACKAGES and SEAT-AT (16 November 2026)
links:
  system.actor:
    predicate: skos:related
---

# Work package

A work package gives one piece of work a single place where its scope, its changes and where they stand are kept, so whoever picks it up knows where things are.

A work package is the folder for one piece of work above a work item, holding its entry file, its change documents and its sub-packages: a node of the work tree. Outside the store it is always written in full, work package, since package alone means too many things. The industry has no word for it, and none is mapped: the project-management work package, the lowest level of a work breakdown, is a different sense.

## Our conventions

- **A node's id** is `<territory>.<slug>`, with a further dot segment for a node beneath a node, as `ki.cairn` or `personal.rig.sol`; each territory's top is `<territory>.summit`, beneath the one root (NODE-ID).
- **A sub-package** is a strand of a package that its own [actor][system.actor] works, `<parent id>+<slug>`, as `hnr.summit+website`, in the folder `work/hnr/hnr.summit/website/`; a strand that needs an actor of its own is a node beneath instead (SUMMIT-SUB-PACKAGES).
- **An actor's place in a package** is written `<package>@<role>`, as `ki.cairn@warden` or `hnr.summit+website@information-architect`: `.` builds a package's name, `+` adds a strand and `@` names the place (SEAT-AT).
- **Its shape:** the `ki-work-package` skill sets the entry file, `_index.md`, and what a package holds; the change documents follow `ki-authoring`'s change format.

[system.actor]: ./system.actor.md
