---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T03:48:44Z
ki-status: in force
---

# Coordinating-work standard: listening and host sync

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Inbox watch](#41-inbox-watch)
  - [4.2 Session capabilities](#42-session-capabilities)

## 1. Introduction

This file holds the inbox watch, the two session capabilities and host sync. It extends [the core](standard-coordination.md). The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How a coordinator listens for news and keeps its machine in sync: the inbox watch, the two session capabilities and host sync.

### 2.1 In scope

- When a coordinator listens, and the one watcher it keeps armed.
- What it does at a wake.
- The watcher's status field.
- The listening and syncing capabilities and their four state fields.
- The small tidy made at each wake, and host sync.

[Back to contents](#contents)

### 2.2 Out of scope

- Messages in a meeting: `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md).
- Snoozing and the holds that disarm the watcher: [holds](standard-holds.md).
- The banner's listening line: [reply format and banner](standard-report-forms.md).
- The package's state fields and tidy rules: the `ki-work-package` [work-package standard](../../ki-work-package/references/standard-work-package.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Watcher** | The one long-running detached shell loop that spends no model time and exits only on news: a new message in a meeting the session sits in, a run finishing, or a pull that cannot fast-forward. **Standard:** this one, [4.1](#41-inbox-watch) |
| **Wake** | The watcher exiting on news, after which the coordinator speaks only about what landed and re-arms. **Standard:** this one, [4.1](#41-inbox-watch) |
| **Listening** | The capability by which a coordinator keeps the watcher armed, switched on only by the owner's express word or an agreed role. **Standard:** this one, [4.2](#42-session-capabilities) |
| **Host sync** | The capability by which a coordinator is its Mac's sync thread, repeating each pass until the Mac and GitHub are clean and level; it implies listening. **Standard:** this one, [4.2](#42-session-capabilities) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Inbox watch

- **Inbox watch:** a coordinator listens only once the owner expressly asks, in words such as "listen for messages" or "keep listening", and logs the request in the change document it belongs to. A Rig host sync thread, `personal.reg.rig-<host>`, listens by its role, because [host sync](#thread-capabilities) implies listening. A coordinator never asked does not listen. "stop the wake" or "stop listening" ends listening until the owner asks again.
- **When:** while a listening coordinator is open and its work is not draining, On hold or Finished, it keeps one watcher armed, whoever holds the work. Work [Snoozing](standard-holds.md#41-putting-work-on-hold) keeps it armed On hold too.
- **The watcher:** one long-running detached shell loop that spends no model time. The heartbeat while runs go is separate and stays, listening or not, and joins the watcher in one loop.
  - Every couple of minutes it fetches and fast-forwards local `main` silently and compares the `messages/` folder of each meeting the session sits in with the one it started from, reading no content.
  - It exits only on news: a new message in such a meeting, a run in this coordinator's group finishing, or a pull that cannot fast-forward, which needs a resolve.
  - It has no timed bound while idle, so a quiet period brings no wake, no tool calls and no chat line.
  - Polling is the baseline. AHP may later replace the polling, and only the polling, for an agent host the `ki-agentic-radar` radar shows supports it, under [The Cairn Beacon](standard-messages.md#42-the-cairn-beacon).
- **At a wake:** speak only about what landed. On a new message, act on it under `ki-meeting`'s [messages](../../ki-meeting/references/standard-meeting.md#48-messages), commit, re-arm and tell the owner in one timed line what was done. On a finished run, receive it in one timed line and re-arm.
- **One loop:** a coordinator never holds more than one loop. After a compaction or a recovery it checks whether one is armed before arming another.
- **Session-bound:** the watcher lives and dies with the session. It is a session wake, not a scheduled agent, and promises nothing once the session closes. A runtime with no proven way for the watcher's exit to wake the session checks the inbox only at owner messages and run events, with `ki-listening_status: off`.
- **Open questions:** a shared shell command for the watcher, and each runtime's wake, remain with the owner.
- **Watcher status:** `ki-listening_status` is `on` while the watcher is armed and `off` otherwise, which is the default:
  - while draining, from `pause`, `done for now` or `drain` until the drain ends, because a drain disarms the watcher;
  - On hold and paused;
  - after "stop the wake" or "stop listening";
  - where the runtime cannot be woken;
  - where the owner has not asked the session to listen and it is no host sync thread, `ki-listening_enabled: false`.

  Work [Snoozing](standard-holds.md#41-putting-work-on-hold), the idle hold included, keeps the watcher armed. The watcher shows no line in the banner: the [banner's listening line](standard-report-forms.md#42-banner-detail) names only the meetings the session is in, under LISTEN-LINE.

Sources: INBOX-WATCH, LISTEN-STATUS, LISTEN-OPT-IN, QUIET-LISTEN, WAKE-SESSION and LISTEN-LINE in [the decision register](sources.md#3-decisions).

<a id="thread-capabilities"></a>

[Back to contents](#contents)

### 4.2 Session capabilities

A coordinator may hold two capabilities. Each is switched on only by the owner's express word, logged in the change document it belongs to, or by an agreed role, such as a Rig host sync thread's. `_index.md` records them in four state fields under the `ki-work-package` [state](../../ki-work-package/references/standard-work-package.md#45-the-state):

| Field | Values | Set |
| --- | --- | --- |
| `ki-listening_enabled`, `ki-syncing_enabled` | `true` or `false` | when the owner's word or the agreed role grants the capability; cleared only when the owner withdraws it |
| `ki-listening_status`, `ki-syncing_status` | `on` or `off` | each `_status` at every arm, stop, drain, hold and resume |

- `ki-syncing_enabled: true` requires `ki-listening_enabled: true`: a syncing session always listens.
- "stop the wake" or "stop listening" sets the status to `off` and keeps the capability.
- The close-out at [Finished](standard-mark.md#45-finishing-project-work) clears both `_enabled` fields.

**Listening.** The coordinator keeps the [watcher](#41-inbox-watch) armed. At each wake it also makes at most one small tidy of its own package, within the turn budget:

- keep `_index.md`'s state fields, Now and Held true;
- home received reports' outcomes and remove their run packets, and tidy the package under the `ki-work-package` [tidy rules](../../ki-work-package/references/standard-work-package.md#410-the-tidy);
- strike a decision, or cut it to a one-line pointer, once a durable home carries it, under the [decisions life cycle](standard-decisions.md#413-decisions-life-cycle);
- clear answered questions from the change documents' Open sections, once each answer is recorded where it belongs;
- raise what it cannot settle as a query.

It mentions a tidy only when something needs the owner. It never edits another package; a problem there goes up the tree as feedback.

**Host sync.** The coordinator is its Mac's sync thread. It repeats each pass until the Mac and GitHub are clean and level, or something needs judgement, and only then waits for its next slot. A quiet pass says nothing, a pass that changed something says at most one short line, and only a matter for judgement or the owner gets a full report. Host sync implies listening.

Neither capability has a banner line: the listening line names only the meetings the session is in, under LISTEN-LINE. Host sync has no banner line either, because Cairn keeps the machines in sync through each machine's household package; the `ki-syncing_enabled` and `ki-syncing_status` fields stay in `_index.md`'s state fields.

Sources: THREAD-CAPABILITIES, FOOTER-CAPABILITY-STATUS-2, LISTEN-OPT-IN, LISTEN-TENDS-PACKAGE, SYNC-UNTIL-CLEAN, SYNC-QUIET, SYNC-LINE-OFF, REPLY-FORMAT and LISTEN-LINE in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)
