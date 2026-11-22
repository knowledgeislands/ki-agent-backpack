---
id: system.role
title: Role
type: system-term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 12, NAMES-ROLE a (17 November 2026), answered by change 20's SEAT-AT and ROLES-IN-STORE
links:
  system.actor:
    predicate: skos:related
  system.work-package:
    predicate: skos:related
  system.seat:
    predicate: skos:related
---

# Role

A role says what a job owns and what it never does, so whoever takes a place in a piece of work knows its bounds before acting.

A role is a job within a tier, leader, manager or maker, from the role catalogue, such as governor, warden or housekeeper. It is the job an [actor][system.actor] does in a [work package][system.work-package], and the same role may be held in many packages by different actors. It closely matches the role of agent frameworks, such as CrewAI's agent `role`, "the agent's function and expertise within the crew" ([CR1]), though a role here is a shared catalogue entry with its bounds, not a free-text field of one agent.

## Our conventions

- **One catalogue:** `ki-work-package`'s roles standard holds every role, its tier, glyph, what it owns and what it never does; nothing else decides a role.
- **The job after the `@`:** an actor's place in a package, its [seat][system.seat], is written `<package>@<role>`, as `ki.cairn@warden`, so the role is the part after the `@` (SEAT-AT).
- **One file each in the store:** each role has a file in the store's roster, `roster/roles/<role>.md`, opening `ki-id: role:<role>`, its fields taken word for word from the catalogue (ROLES-IN-STORE).

[system.actor]: ./system.actor.md
[system.work-package]: ./system.work-package.md
[CR1]: https://docs.crewai.com/en/concepts/agents
[system.seat]: ./system.seat.md
