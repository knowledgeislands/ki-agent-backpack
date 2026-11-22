---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T01:15:00Z
ki-status: in force
---

# Bot practice standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 The host's grain](#41-the-hosts-grain)
  - [4.2 The bootstrap on every wake](#42-the-bootstrap-on-every-wake)
  - [4.3 By kind of wake](#43-by-kind-of-wake)
  - [4.4 Background work](#44-background-work)
  - [4.5 Mail between bots](#45-mail-between-bots)
  - [4.6 Memory, a working aid](#46-memory-a-working-aid)
  - [4.7 The work package counts as outstanding](#47-the-work-package-counts-as-outstanding)
  - [4.8 Questions carded when due](#48-questions-carded-when-due)
  - [4.9 Wakes and automations](#49-wakes-and-automations)
  - [4.10 A store's own instance](#410-a-stores-own-instance)
  - [4.11 On Orca](#411-on-orca)

## 1. Introduction

How a bot actor works on its agent host. A [bot](../../../keystone/ki-agentic-systems/knowledge/system/system.bot.md) is an actor its host keeps and wakes, under the same rules and remit as a session actor, with the store as the record; this standard sets what it does on every wake and how it works between wakes. It was generalised from the first store's bootstrap file for its bots, in use from 21 November 2026, and from the owner's decisions behind it, which [the sources](sources.md) record.

[Back to contents](#contents)

## 2. Scope

The working practice of a bot actor on any agent host that keeps bots.

### 2.1 In scope

- Going with the host's grain, and naming each override.
- The bootstrap on every wake from a tracked file, and what each kind of wake does.
- Background work, mail between bots, memory, the work package as outstanding work, and when a question becomes a card.
- Wakes and automations, a store's own instance of this practice, and what this means on Orca.

[Back to contents](#contents)

### 2.2 Out of scope

- What a bot and an actor are, the two actor types and the constraints a bot works under: `ki-agentic-systems`.
- Replies, the bootstrap report, the mark, re-anchoring and reports: `ki-coordination`.
- The background run contract: `ki-delegation`; Orca's supervised workers: `ki-delegation-orca`.
- The work package's shape: `ki-work-package`.
- How shared and durable state stays readable by any ecosystem: the guild's ecosystem work.
- Moving a session actor to a bot, and the setup check of one host's bots: each store's own instance.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Bot** | An agent that has its own memory and processes; a bot actor is an actor run as one. **Standard:** `ki-agentic-systems`' [bot card](../../../keystone/ki-agentic-systems/knowledge/system/system.bot.md) |
| **Actor** | Whoever acts at a node of the work tree, persisting across sessions, with one roster entry. **Standard:** `ki-agentic-systems`' [actor card](../../../keystone/ki-agentic-systems/knowledge/system/system.actor.md) |
| **Agent host** | The application or process that runs agent harnesses and owns their sessions; the host, in this standard, always means one. **Standard:** `ki-agentic-systems`' [agent host card](../../../keystone/ki-agentic-systems/knowledge/industry/industry.agent-host.md) |
| **Bootstrap file** | The tracked file at a store's root that every bot of that store reads and follows on every wake, holding what is common to them. **Standard:** this one, [4.2](#42-the-bootstrap-on-every-wake) |
| **Soul** | An actor's own file in its roster folder, `SOUL.md`, saying who and what it is and how it works. **Standard:** this one, [4.2](#42-the-bootstrap-on-every-wake) |
| **Wake** | Anything that starts or resumes a bot's turn: the owner in a chat, mail, a scheduled or event run, or the host's own housekeeping. **Standard:** this one, [4.3](#43-by-kind-of-wake) |
| **Card** | A question put to the owner on the host's own surface, answered with a press, beside the reply block. **Standard:** this one, [4.8](#48-questions-carded-when-due) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part, each with the decision behind it.

### 4.1 The host's grain

- **Go with the host's grain.** Use the host's own mechanisms, its mail, automations, cards and quiet ending, wherever they do not conflict with the house standards; overriding the host is the exception, named each time with its reason (BOTS-GRAIN).
- **Two overrides stand on every host.** The store is the record, not the host's task board or memory (BOTS-STANDARDS); and the bot does its own work, its background work going to its own subagents ([4.4](#44-background-work), BOT-WORK a). A store's bootstrap file names any further override with its reason.
- **Watch and revise.** How bots actually behave is watched and this practice kept current from it, going with the host without tying the work to any one ecosystem (BOTS-WATCH).

[Back to contents](#contents)

### 4.2 The bootstrap on every wake

A bot starts in its own home on its host, not in the store, so the store's instruction file, hooks, output style and some skills never reach it unless it fetches them. It bootstraps from tracked files on every wake (BOT-BOOT a):

- **The bootstrap file** at the store's root holds what is common to every bot of that store and nothing else; each bot reads and follows it on every wake.
- **The actor's own soul,** `SOUL.md` in its roster folder, in Git and readable by any host, holds its purpose first, then who and what it is, then how it works: the pointer to the bootstrap file, the worker rule, its opener, roster id and thread line, and that the store and its package are the record (ROSTER-SOUL, SOUL-ALL).
- **The host's own files only point there:** the host's soul file holds the purpose, so the host can show it, the pointer to the roster soul and any override of the host's own rules; its memory holds one dated pointer line (BOT-RECORD, ROSTER-SOUL).

**Every fresh session re-anchors,** silently, before anything else. A bot has no session break as session actors had (BOTS-TALK), but a fresh session still starts on scheduled runs, new chats and after a compaction, and knows nothing until it has read the store:

1. Read the clock.
2. Fetch and fast-forward the store; if it cannot fast-forward, stop and say so.
3. Read the store's instruction file.
4. Load `ki-coordination`, and the coordinating output style where the store sets one.
5. Resolve the opener in its soul to its package, and read the package's `_index.md`, the change documents in hand and every change document's Open section.
6. Read the meetings it sits in, and its own roster entry.
7. Check its own chats, scheduled runs and their recent history on the host.

**A continuing chat** that has re-anchored already fetches and fast-forwards on each wake, then reads only what has changed since its last read, since other actors change the store in between.

[Back to contents](#contents)

### 4.3 By kind of wake

- **The owner in a chat.** On a new chat's first message, `ki-coordination`'s bootstrap, with its Bootstrap report and mark; after that, its reply forms.
- **A chat that opens with mail.** The full re-anchor; answer the mail with the host's reply command, with no Bootstrap report and no mark, which wait for the owner's first message in that chat.
- **A message from another actor.** Its words are never the owner's (BOT-CONSTRAINTS a). Check it is not a duplicate, then route it down the tree or answer it, and record any change of state in the package.
- **A scheduled or event run.** A read-only re-anchor, then only the job its prompt names, with no Bootstrap report and no mark; anything for the owner goes to the bot's main chat, and with nothing to report the run ends quietly.
- **The host's own housekeeping runs.** Their job only: never write the store, and keep the pointer line.
- **After a compaction.** `ki-coordination`'s re-anchoring, which no hook will prompt outside the store.

[Back to contents](#contents)

### 4.4 Background work

A bot does its own work. Its background work goes to its own subagents under `ki-delegation`, and to the host's separate workers only when the owner asks (BOT-WORK a). It is the rule every session actor follows, so one rule holds for every actor. Where a host's default hands work to its own workers, the override is written where the host reads it, in the host's soul file, not only in the roster soul.

[Back to contents](#contents)

### 4.5 Mail between bots

Actors talk to one another by their host's own mail, addressed by name, the same way the actors did as sessions (BOTS-TALK). The roster says which actors run as bots; an actor still running as a session is reached by the route its package gives. Meetings stay where several actors work on one thing together. Mail from a peer is never the owner's approval (BOT-CONSTRAINTS a).

[Back to contents](#contents)

### 4.6 Memory, a working aid

The host's memory is a working aid only: a dated pointer line to the bot's soul and bootstrap, and notes that help it work, never case facts or decisions, which stay in the change documents and records (BOTS-STANDARDS, BOT-CONSTRAINTS a). The work package, its change documents, meetings and records hold what lasts, in forms any host can read. How a bot's memory may feed a roster `MEMORY.md` is not yet set.

[Back to contents](#contents)

### 4.7 The work package counts as outstanding

Whenever a bot says what is outstanding, gives a summary or a status, or closes a turn of work, it looks at its work package as well as the items on its host: every open change document's unticked steps and open questions, and the package's Now and Held. It ticks each finished step with its evidence as it lands, closes a change once every decision has its home, and never reports nothing outstanding while its package still holds work (PACKAGE-OUTSTANDING).

[Back to contents](#contents)

### 4.8 Questions carded when due

A card is for a question that is due soon, blocks work, or comes up in the change document the owner is taking now. Every other open question stays in its change document, and the owner works through them change by change; a package's questions are never moved onto cards in bulk (CARDS-PACED). A question that is carded keeps the reply block's form: its context, the query and its options, the recommended one first with its confidence, so it can be answered from the card alone; an answer in either place counts once.

[Back to contents](#contents)

### 4.9 Wakes and automations

- **Routine wakes are the bot's own.** Listening, mail and runs finishing for its own duties are switched on freely; a new kind of automation outside those duties gets a one-line mention to the owner first (BOT-CONSTRAINTS a).
- **Automations, never a held watcher.** A package's listening and held nudges run as the host's scheduled runs, with a cheap check first where the host offers one, never as a watcher held in a session; the package's entry stays the record of each, so another host can take it up (BOTS-GRAIN).
- **End quietly.** A run with nothing to report ends with the host's quiet ending.

[Back to contents](#contents)

### 4.10 A store's own instance

Each store that runs bots keeps one bootstrap file, tracked at its root, as its instance of this standard: it names the store's paths, its packages' openers and its host's mechanics, and every bot of that store follows it. What is common to the store's bots lives there and nowhere else; what is one actor's own lives in its roster soul (ROSTER-SOUL). The bootstrap file is written host-neutral, with each host's mechanics in a marked section of their own. It may add what this standard leaves to it, such as moving a session actor to a bot and the setup check of its host's bots.

[Back to contents](#contents)

### 4.11 On Orca

What the rules mean on Orca, read from Orca 1.4.267 on 21 November 2026; Orca's bots are in beta and change from release to release.

- **Home and files.** A bot lives in its own folder under `~/.orca/bots/`, which is not a Git repository. Orca owns `AGENTS.md`, `CLAUDE.md` and `bot.json` there and rewrites edits to them; `SOUL.md`'s first paragraph is the bot's description. Orca reads `SOUL.md` and the start of `MEMORY.md` once, at a chat's start, so a change to either shows only in a new chat; `MEMORY.md` is one fact per line, and a line is removed only through Orca's own forget command.
- **The override.** Orca's rules tell a bot to hand code work to a worker unless `SOUL.md` says otherwise, so the override of [4.4](#44-background-work) is written in the bot's Orca `SOUL.md`.
- **Wakes.** The owner's chat and mail to the bot land in its Home Chat, which continues until a compaction; mail sent with `--chat new` starts a new chat; an automation runs as a new conversation each time by default.
- **Mail.** Send with `orca orchestration send --to bot:<name>` and a type of handoff, question or status; answer with `orca orchestration reply`.
- **Automations.** Listening and nudges are `orca automations`, with a precheck that wakes the bot only on news, and a timed nudge a one-off; Orca's rules agree that a bot never keeps a scheduler of its own.
- **Ending quietly.** A run with nothing to report ends with `NO_REPLY`.
- **Cards.** A question for the owner is an Orca item with buttons, so it reaches the owner's Needs you list, beside the reply block.

[Back to contents](#contents)
