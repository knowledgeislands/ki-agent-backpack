---
id: system.bot
title: Bot
type: system-term
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 70, BOT-DEFINITION, ACTOR-TYPES, ACTOR-TYPE-FIELD, BOTS-STANDARDS, BOT-RECORD, ROSTER-SOUL and BOT-CONSTRAINTS a (21 November 2026), written under BOTS-GUILD (22 November 2026)
links:
  system.actor:
    predicate: skos:broader
  industry.agent:
    predicate: skos:related
  industry.session:
    predicate: skos:related
  industry.agent-host:
    predicate: skos:related
  system.work-package:
    predicate: skos:related
---

# Bot

A bot gives an [actor][system.actor] a home of its own on an [agent host][industry.agent-host], so it can be reached by name and woken by messages and schedules without anyone opening a session for it, while the work it does stays on the record every actor shares.

A bot is an [agent][industry.agent] that has its own memory and processes (BOT-DEFINITION): a durable, named identity on one agent host, with a folder of its own, mail addressed to its name, and scheduled or event-driven runs, that acts through many [sessions][industry.session] over time. It is one of the two types of actor that run. A **session actor** is run as an agent host's session, opened by an opener and a bootstrap and kept by hand; a **bot actor** is run as a bot, its host keeping it and waking it (ACTOR-TYPES). The industry uses "bot" loosely, for any chat or automation program, and has no agreed term for an agent with its own durable identity and processes; agent hosts that offer one name it themselves, as Orca's bots are. So it is Knowledge Islands' own word, and it is not mapped.

## Our conventions

- **The roster records the type:** an actor's `ki-kind` is `agent` for a session actor and `bot` for a bot actor, and `ki-name` names both alike; a bot keeps `ki-host` for its agent host and `ki-rig` for its [rig][system.rig], and its host reaches it by its roster id, so there is no bot field of its own (ACTOR-TYPE-FIELD).
- **The same rules as a session:** a bot works under the same rules, access and remit as a session actor in its seat, and a peer's message is never the owner's approval. Its routine wakes for its own duties are its to set up; a new kind of automation beyond them gets a one-line mention to the owner first. There is no fallback session: the bot replaces the session, and the owner can restart a session from the [work package][system.work-package] at any time. No Family or legal bots until the trial goes well (BOT-CONSTRAINTS a).
- **The store is the record:** the work package, its change documents, meetings and records hold what lasts, in forms any host can read; the bot's own task list and memory are working aids, never the record (BOTS-STANDARDS, BOT-CONSTRAINTS a).
- **Its own files are in the roster:** who and what an actor is, its soul, lives in its roster folder in Git, `SOUL.md` beside its entry; a bot's own files on its host only point there (BOT-RECORD, ROSTER-SOUL).
- **How a bot works:** the `ki-agentic-bots` skill sets the practice a bot actor follows on its host: its bootstrap on every wake, its background work, its mail, its memory and its questions.

[system.actor]: ./system.actor.md
[system.rig]: ./system.rig.md
[system.work-package]: ./system.work-package.md
[industry.agent]: ../industry/industry.agent.md
[industry.session]: ../industry/industry.session.md
[industry.agent-host]: ../industry/industry.agent-host.md
