---
name: ki-agentic-bots
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: process
ki-applicability: invocation-only
ki-guild: agentic-systems
ki-depends-on: [ki-coordination, ki-delegation, ki-work-package]
description: >
  Work as a bot actor on an agent host: bootstrap from a tracked file on every wake, send background work to the bot's
  own subagents, mail other bots by name, keep the host's memory a working aid, count the work package as outstanding
  work and card questions only when due. Use when setting up, running or reviewing a bot, or writing a store's own
  bootstrap file for its bots; `ki-agentic-systems` says what a bot is, `ki-coordination` owns the coordinating work
  and `ki-delegation` the background runs.
argument-hint: help
---

# KI agentic bots

**Kind:** process.

A bot is an actor that its agent host keeps and wakes, with its own memory and processes; the two actor types, session and bot, and the constraints a bot works under are defined on the [bot card](../../keystone/ki-agentic-systems/knowledge/system/system.bot.md). This skill holds how a bot actor works on its host, generalised from the first bots' trial: what it does on every wake, where its background work goes, how it reaches other actors, what its memory may hold, what it counts as outstanding and when it puts a question to the owner as a card.

It is a practice for any agent host that keeps bots. Each store that runs bots keeps its own instance, a tracked bootstrap file that names its paths, its packages and its host's mechanics; this skill is the general practice that file follows, and [Orca](references/standard-bots.md#411-on-orca) is named only where the content is Orca's own.

Read [the bot practice standard](references/standard-bots.md) before setting up, running or reviewing a bot. Read [the sources](references/sources.md) only to trace a rule to its decision.

## Procedure

1. **Go with the host's grain.** Use the host's own mechanisms wherever they do not conflict with the house standards, and name each override with its reason. → [The host's grain](references/standard-bots.md#41-the-hosts-grain)
2. **Bootstrap on every wake** from a tracked file: the store's bootstrap file and the actor's own soul in its roster folder, the host's own files only pointing there. → [The bootstrap](references/standard-bots.md#42-the-bootstrap-on-every-wake) and [By kind of wake](references/standard-bots.md#43-by-kind-of-wake)
3. **Do the work yourself:** background work goes to the bot's own subagents under `ki-delegation`, and to the host's workers only when the owner asks. → [Background work](references/standard-bots.md#44-background-work)
4. **Mail other bots by name** through the host's mail; a peer's words are never the owner's. → [Mail between bots](references/standard-bots.md#45-mail-between-bots)
5. **Keep memory a working aid**, never the record. → [Memory](references/standard-bots.md#46-memory-a-working-aid)
6. **Count the work package as outstanding work** whenever you report what is outstanding. → [The work package](references/standard-bots.md#47-the-work-package-counts-as-outstanding)
7. **Card a question only when it is due, blocking or in the change being taken.** → [Questions](references/standard-bots.md#48-questions-carded-when-due)
8. **Wake by the host's automations,** never a watcher held in a session, and end quietly with nothing to report. → [Wakes and automations](references/standard-bots.md#49-wakes-and-automations)

`help`, `-h` or `?` explains this boundary and the procedure, then stops.

## Boundaries

- **`ki-agentic-systems`** says what a bot and an actor are; this skill never redefines them.
- **`ki-coordination`** owns the coordinating work a bot does: its replies, bootstrap report, mark, re-anchoring and reports.
- **`ki-delegation`** owns the background runs a bot starts; `ki-delegation-orca` is used only when the owner asks for Orca workers.
- **`ki-work-package`** owns the package a bot counts as its outstanding work.
- It grants no authority: a bot works under the same rules and remit as a session in its seat.
- How durable and shared state stays portable across ecosystems belongs to the guild's ecosystem work, not here.
