---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T06:10:00Z
ki-status: in force
---

# Coordinating-work standard: reply format and banner

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Coordinator reply format](#41-coordinator-reply-format)
    - [4.1.1 Blocks, parts and layouts](#411-blocks-parts-and-layouts)
    - [4.1.2 Triggers](#412-triggers)
    - [4.1.3 Structure–part matrix](#413-structurepart-matrix)
    - [4.1.4 Part content](#414-part-content)
    - [4.1.5 Templates](#415-templates)
    - [4.1.6 Verbs](#416-verbs)
    - [4.1.7 The Summary](#417-the-summary)
  - [4.2 Banner detail](#42-banner-detail)

## 1. Introduction

This file holds the coordinator reply format: its scope, the triggers that set each reply's structure and layout, the blocks and parts each structure carries, what each part holds, one template per structure, the verbs, the Summary's status table and footer, and the banner detail with its marked examples. It extends [the core](standard-coordination.md), which holds the banner layout and the one table of states. The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The coordinator reply format: how every reply in a coordinator session, and a run report, is built and closed with its banner.

### 2.1 In scope

- What the coordinator reply format governs, and what it does not.
- Blocks, parts and layouts, the reply id and times.
- The triggers that set each reply's structure, and the structure–part matrix.
- What each part holds, and one template per structure.
- The verbs.
- The Summary, its status table and its footer.
- The banner detail: the report heading, mode lines, the restart suggestion and the marked banner examples.

[Back to contents](#contents)

### 2.2 Out of scope

- The reply forms of a conversational session and the owner report: [reporting](standard-reporting.md).
- What each state's banner shows, the table of glyphs and the thread line: [the core](standard-coordination.md).
- The query cap, the interactive pass and query review: [queries](standard-queries.md).
- Putting work on hold and release: [holds](standard-holds.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Coordinator reply format** | The format of every reply in a coordinator session, and of a run report a run the coordinator launched writes into the package. **Standard:** this one, [4.1](#41-coordinator-reply-format) |
| **Reply structure** | What a reply is, such as Summary, Status, Bootstrap, run report, Stop, Position, Update or Answer, each with one layout. **Standard:** this one, [4.1.1](#411-blocks-parts-and-layouts) |
| **Trigger** | What a reply meets that sets its one reply structure, tried from T1 down, the first met winning; each is matched on a signal, a phrase, the state, the time or a move. **Standard:** this one, [4.1.2](#412-triggers) |
| **Status table** | The Summary's and Status's full board of live items: one row per change document or sub-package holding one, then a catch-all row, Not in a change yet. **Standard:** this one, [4.1.7](#417-the-summary) |
| **Report heading** | The heading block: one `#` heading, the package's name linked whole to its `_index.md` in the Cairn store, one bold form line, an optional opening note and one rule. **Standard:** this one, [4.2](#42-banner-detail) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Coordinator reply format

The **coordinator reply format** governs every reply in a coordinator session: reports, ordinary answers, timed one-line updates and wake lines. It also governs a **run report**, the final report a run the coordinator launched writes into the work package; the run writes it itself, in the Medium layout, and no trigger chooses it.

It does not govern:

- a conversational session, with no coordinating opener, which uses the plain conversational reply and, when a unit of work ends, the owner report without heading block or footer, under [Reply forms](standard-reporting.md#41-reply-forms);
- a background agent's own replies while it works, which follow its brief; only its final run report is in scope;
- what each state's banner shows, which the [one table of states](standard-coordination.md#46-banner) sets;
- the **communication level**, quiet, standard or detailed, which never changes the layout and governs only the wording inside B1, the Answer. No Knowledge Islands standard defines the levels; the owner's personal communication preferences set them.

Sources: REPLY-FORMAT in [the decision register](sources.md#3-decisions).

#### 4.1.1 Blocks, parts and layouts

A reply is built from up to three **blocks**, always in this order, each left out where none of its parts appear:

- **Heading block**, H1 to H4: which work this is and which reply.
- **Body block**, B1 to B6: what the reply says, what happened and what the owner needs to decide. B1, the Answer, holds whatever the reply says that no other part covers; the parts after it are the report's own.
- **Footer block**, F1 to F9: where the work stands and whose move it is, read from the bottom up. Its **banner** is F2 to F9.

Each block is a run of coded **parts**. Each reply has one **reply structure**, saying what the reply is, such as Summary, Status or Stop, and each structure has one **layout**, its depth: **Full**, **Medium**, **Short** or **Minimal**, deepest to shallowest. The structure decides which parts appear and how each part is shaped; Minimal has no heading block and closes with the one-line footer, giving the short banner, as Short does, only where the state, the counts or the items have changed since the session's previous reply.

**Reply id.** Every reply to the owner, in every layout, opens with its [reply id](standard-reporting.md#41-reply-forms), `**Reply HH:MM**`, the UTC time from `date -u +%H:%M` as the reply is written, then a blank line and the first block: in Full and Medium the heading block, so the `#` heading follows the id with no rule between them; in Short the Answer, or the banner where there is none; in Minimal the Answer or the update, then the one-line footer. The id stands outside the blocks and their parts, and the form line and banner keep their local times. A run report, saved into the package, carries none.

**Time.** Every time is the owner's local time, in one of two forms, each part choosing which in its entry under [Part content](#414-part-content): a **friendly time**, naming the day where it is not today, as in `10:30 GMT`, `yesterday 18:05 GMT` or `Thu 5 Nov 09:12 GMT`; or a **timestamp**, ISO 8601 with its offset, as in `2026-11-07T10:30+00:00`, the fallback wherever a friendly time does not fit. A part that names no form keeps the form its template shows.

#### 4.1.2 Triggers

Each **trigger** sets exactly one reply structure, which enables the parts in the [structure–part matrix](#413-structurepart-matrix); each part then reacts to the structure, the state and the mark under [Part content](#414-part-content). A reply tries the triggers from T1 down, and the first met wins.

| Trigger | Signal | When | Structure |
| --- | --- | --- | --- |
| T1 | Time | **Gap:**<br>Either the owner's message arrives `USER_LAST_MESSAGE` minutes or more after their previous one, while at least one query is with the owner; or no Full reply has been given for `SINCE_LAST_SUMMARY` minutes, met by the next reply | Summary |
| T2 | Move | **Session start:**<br>The first reply after the coordinating opener, or after a compaction once re-anchored | Bootstrap |
| T3 | Move | **Work stops:**<br>The coordinator commits the Project's close, or a hold or snooze after `pause`, `done for now` or `snooze` | Stop |
| T4 | Phrase | **Short phrases:**<br>`mark only`, `where are we`, `where does it stand` or `what's the state` | Position |
| T5 | Phrase | **Status phrases:**<br>`status` or `mark, status only` | Status |
| T6 | Phrase, Move or State | **Summary asks and events:**<br>The owner's phrase `mark`, `summary`, `summary since <time>`, `recap` or `full summary`; or the coordinator commits a send of the work to the owner or another target, or the last running or queued run the work dispatched finishes; the latter is met until a reply it wins | Summary |
| T7 | Move | **Other change of state:**<br>The coordinator commits any other change of state: a receive such as `with me`, a `resume`, the start of a drain | Position |
| T8 | Move | **Update:**<br>A timed update falls due under the update [cadence](standard-coordination.md#43-coordinator-responsiveness), or a wake, by timer or inbox | Update |
| T9 | Phrase | **Anything else:**<br>The owner's message, when it meets no other trigger | Answer |

Each trigger is matched on a **signal**, or for T6 on any of three:

- **Phrase:** a line of the owner's message that is exactly the phrase, ignoring case, spaces and a trailing full stop; `<time>` matches any time. T4's phrases are a finite list, grown as wordings that miss are noticed.
- **State:** the work's runs, from the agent host's view of its agents and the package.
- **Time:** the times of the owner's messages and of the last Full reply.
- **Move:** something the coordinator commits, or a wake.

**The gaps.** `USER_LAST_MESSAGE` is 30 minutes and `SINCE_LAST_SUMMARY` is 120 minutes by default. They change only when the owner asks in the session; a process such as setting up an [unattended window](standard-unattended.md#42-unattended-windows) may ask the owner what they should be.

Two things sit outside the triggers. [The mark](standard-mark.md#41-the-mark) belongs to the standard: it moves on a hold and on `mark`, `mark only` and `mark, status only`, and shows only in H2 and B2. A run report is written by the run itself, in Medium.

Sources: REPLY-FORMAT in [the decision register](sources.md#3-decisions).

#### 4.1.3 Structure–part matrix

Which parts each reply structure carries, one column per structure with its layout beneath its name: ● required, ○ optional, on its condition under [Part content](#414-part-content), and empty where the part is not used.

| Part | Summary<br>_Full_ | Status<br>_Full_ | Bootstrap<br>_Medium_ | Run report<br>_Medium_ | Stop<br>_Medium_ | Position<br>_Short_ | Update<br>_Minimal_ | Answer<br>_Minimal_ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Heading block** |  |  |  |  |  |  |  |  |
| **H1** · Heading | ● | ● | ● | ● | ● |  |  |  |
| **H2** · Form line | ● | ● | ● | ● | ● |  |  |  |
| **H3** · Opening note | ○ | ○ | ○ | ○ | ○ |  |  |  |
| **H4** · Rule | ● | ● | ● | ● | ● |  |  |  |
| **Body block** |  |  |  |  |  |  |  |  |
| **B1** · Answer | ○ | ○ | ○ | ○ | ○ | ○ | ● | ● |
| **B2** · Summary | ● |  | ● | ● | ● |  |  |  |
| **B3** · Status | ● | ● | ● | ● | ● |  |  |  |
| **B4** · Findings | ○ | ○ | ○ | ○ | ○ |  | ○ | ○ |
| **B5** · Queries | ● | ● | ● | ● | ● |  |  |  |
| **B6** · Reply block | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| **Footer block** |  |  |  |  |  |  |  |  |
| **F1** · Art | ○ | ○ |  |  |  |  |  |  |
| **F2** · Banner heading | ● | ● | ● | ● | ● | ● | ● | ● |
| **F3** · Counts line | ● | ● | ● | ● | ○ | ● | ○ | ○ |
| **F4** · Roadmap line | ● | ● |  |  |  |  |  |  |
| **F5** · Package line | ● | ● |  |  |  |  |  |  |
| **F6** · Item list | ● | ● | ● | ● | ● | ● | ○ | ○ |
| **F7** · Heading-for line | ○ | ○ | ○ |  | ○ | ○ | ○ | ○ |
| **F8** · Meeting line | ○ | ○ | ○ |  | ○ | ○ | ○ | ○ |
| **F9** · Thread line | ● | ● | ● | ● | ● | ● | ● | ● |

● required · ○ optional, on its condition under [Part content](#414-part-content) · empty: not used.

F3 and F4 show always or never by reply structure, never by judgement of whether they apply; F3 leaves Stop only when the work is Finished. F8 shows exactly while the session is in a meeting, whatever the structure. Every structure closes with its thread line, as Kris set under HOOK-ENFORCE on 18 November 2026: "Yeah, we need the hook enforcing". The Update and the Answer close with the **one-line footer**, F2's glyph state and F9 on one line, and give the short banner, F2, F3, F6 to F9, only where the state, the counts or the items have changed since the session's previous reply, as Kris set under MINIMAL-FOOTER on 19 November 2026; every other structure closes with its banner.

Sources: REPLY-FORMAT, LISTEN-LINE, FOOTER-DELEGATES, HOOK-ENFORCE, MINIMAL-FOOTER and FINDINGS-KEEP in [the decision register](sources.md#3-decisions).

#### 4.1.4 Part content

Each part: what it carries, when it appears and how the structure, the state and the mark shape it.

**Heading block.**

- **H1 Heading:** which package this is, its name linked whole to its `_index.md` in the Cairn store, under **Report heading** in [Banner detail](#42-banner-detail): `# [<Territory> › <rest of the id>](<package _index.md>)`, as `# [Cairn › summit](<package _index.md>)`. A run report adds `› <run name>` after the link.
- **H2 Form line:** which reply structure, when it was given and the mark: `**<Structure> at <now> · last mark <mark time>**`, the structure `Summary`, `Status`, `Bootstrap`, `Run report` or `Stop`. The mark time is the mark the reply's window opens at: after `mark`, the mark before the one just struck; otherwise the last mark struck, or the session's start where there is none. A Stop for a hold ends `· mark <the hold's mark>`. Both times are friendly times, so `last mark` names the day where it is not today, as in `last mark yesterday 18:05 GMT`. The work's state is not in H2; it shows only in F2.
- **H3 Opening note:** context worth putting high up, ahead of the body, such as an outline of the Answer or anything unusual that nothing else shows, in one or two lines; the rest of the Answer stays in B1. Only where the reply has such context.
- **H4 Rule:** one `---`, with a blank line either side, closing the heading block.

**Body block.**

- **B1 Answer:** anything the reply says that no other part covers, in its own words and with any normal sections: an answer to the owner's message, an explanation, a short table. It comes first in the body, straight after the heading block, and only where there is such content: a reply to a bare `summary` may have none, its Summary being B2. In Minimal it is the whole reply.
- **B2 Summary:** what changed since the window opened. In a Summary it is `## Summary`, with no time: one bold headline saying what the window came to, then one line per item that changed, delivered, decided, started, stopped, blocked or newly captured, with material failures, corrections and limitations beside the items they qualify, and commits and a recovered session among them; with nothing changed, one line says so. In every Medium structure it is `## Done`, one completed outcome per line: in a Bootstrap the coordinator's role and where the work stands, ending with the `Rename thread:` line under [Opening work](standard-opening.md#43-opening-work); in a run report its outcomes with commit identifiers and each check's outcome; in a Stop one line per repository for a hold, or one per close-out step at Finished.
- **B3 Status:** the full board of live items. In a Summary or Status it is `## Status`, the [status table](#417-the-summary). In every Medium structure it is `## In Progress`: what is running and what is waiting, each with its owner or dependency, or `Nothing is running`, then `Outstanding - no action requested now`. On hold, Left over comes here: another session's uncommitted file, or `Nothing`.
- **B4 Findings:** `## Findings`, only while a finding the owner asked for is open, each given in full the first time and in one line after, until the owner acknowledges it, under the owner report's **Findings**. In an Update or Answer it is one line closing the Answer instead, counting the findings still open and naming their tags, as `Findings open: 1, THEME-FIELD.`
- **B5 Queries:** `## Queries`, each decision the owner needs to make, in full, under the [owner report](standard-reporting.md#42-owner-report), at most three, the most critical first, then one line saying how many more are open and where they are held, under the [query cap](standard-queries.md#42-query-cap), a proposed work transfer last, or `None.` in a Summary or Status and `No outstanding queries` in a Medium structure. On hold, the parked queries come here instead, one line each, `<TAG> - <one line>`.
- **B6 Reply block:** the tags, letters and confidences, ready to copy: one fenced `text` block after the last query, holding exactly the text to send back, for the owner to copy, change and send. The queries in B5, the same three at most and no others, are grouped by priority under numbered headings, the most pressing first, each `<n> · <what the group is>`, adding `, can run while you're away` where the group's work can go ahead while the owner is away, with a blank line between groups; under each heading, one line per query, its tag, the recommended option's letter and that option's confidence in brackets, then a short gloss after a colon, as `<TAG> a (high): what it does`, each tag on one line only and never with an alternative's letter, under the owner report's **Reply block**. It appears whenever the reply asks the owner to decide anything, closing the body before any footer: whenever B5 carries at least one query in full, and after the Answer of a Position, Update or Answer that asks for a decision.

**Footer block.**

- **F1 Art:** the Knowledge Islands drawing, whose scroll's title is KNOWLEDGE ISLANDS with four lines beneath it, each centred in the 54-character space between the scroll's `|` marks with any odd space to the right: the host and state in capitals, as `SOL  ·  WITH YOU`, or `ALL CLEAR` when nothing waits, a blank line, the counts in words, and the day, date and local time, under **The footer** in [The Summary](#417-the-summary); `ki work banner` (KI-TOOL-KI-CLI-182 in `tools-ki`) renders it. Unless the owner asked for `no art`.
- **F2 Banner heading:** `### <glyph state> · at <time the work entered this state>`, from the [one table of states](standard-coordination.md#46-banner). It is the only place the work's state appears, with the one-line footer, which carries its glyph state without the time.
- **F3 Counts line:** `🤖 <n> running · ⏳ <n> queued · 👤 <n> with you · ⛔ <n> blocked · 🅿️ <n> parked`, all five views with zeros written, adding `· 📥 <n> to accept` in Project work with records awaiting the owner's acceptance. `👤 <n> with you` counts every open query with the owner, not only the three at most that B5 shows, under QUERY-COUNT. The state sets its content on hold: `⏸️ drained · 🅿️ <n> queries parked` on a paused hold, `💤 waiting for a message · 🅿️ <n> queries parked` while Snoozing. Left out only when the work is Finished.
- **F4 Roadmap line:** `🗺️ roadmap · <n> records · <n> open · <n> done awaiting prune · <n> ideas`, or `🗺️ roadmap · none` where the package's repository has no roadmap, under **Roadmap and package lines** in [Banner detail](#42-banner-detail).
- **F5 Package line:** `📦 package · changes <n> · open <n> · held <n> · meetings <n>`, under the same.
- **F6 Item list:** one line per live item, `- <glyph> <what> · <holder> · at <time>`, with one `👤` line per query B5 shows and one line for the rest of those with the owner, as `- 👤 7 more held in the change documents · owner`, opening with its state's agreed glyph alone, never with a bracketed state word, under **Glyph banner** in [the core](standard-coordination.md#46-banner); where no agreed glyph names its state, a provisional glyph with its state word in brackets, or the bracketed word alone, under **Provisional glyphs and bracketed words** there. Every glyph is in the core's [table of glyphs](standard-coordination.md#46-banner). It carries no awaiting-ACK items. On hold it lists only `🅿️` parked and the release under the hold's own glyph, `⏸️` or `💤`; Finished lists `🏁`.
- **F7 Heading-for line:** `↪️ <draining or finishing> → <target>`, only while the work is heading for a hold or a handoff, under **Heading for a hold or a handoff** in [the core](standard-coordination.md#46-banner).
- **F8 Meeting line:** `🤝 in <meeting> · with <names>` while the session is in a meeting, naming each meeting it is in by its folder's name, the id its entry file's `ki-id` carries after `meeting:`, and, after `· with`, who the session works with there: the other participants under the entry file's `ki-participants`, each by the name its roster file gives, or its seat's id where it has none, joined by `, `, as in `🤝 in cairn.wayfinder.designs · with Quire, Limner`. The owner, who is at every meeting, is not named, and with no other participant the `· with <names>` part is left off. Two or more meetings are joined by `, `, each with its own list, as in `🤝 in cairn.summit.voice · with Kitteth, cairn.wayfinder.designs · with Quire, Limner`. A session is in a meeting while it is a participant of an open meeting with a sitting under way, `ki-status: open` in the meeting's entry file under `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md#45-the-entry-file). In no meeting the line is left off and nothing shows in its place, under LISTEN-LINE and FOOTER-DELEGATES; the [inbox watcher](standard-listening.md#41-inbox-watch) has no line.
- **F9 Thread line:** `<role glyph> 🔑 <work-id>`, `<role glyph> <package>@<role>` for a seat without the keys, each written `<Name> (<that form>)` where the seat's actor is named, as in `Kitteth (🪨 🔑 cairn.summit)`, or `🧵 <work-id>`, always last, under **Thread line** in [the core](standard-coordination.md#46-banner). In the one-line footer it follows the glyph state after ` · `.

Sources: REPLY-FORMAT, REPLY-GROUPS, QUERY-CAP, QUERY-CAP-3, QUERY-COUNT, LISTEN-LINE, FOOTER-DELEGATES, ITEM-GLYPHS, GLYPH-TABLE, GLYPH-FALLBACK, NAME-FIRST, HEADING-FIX, HEADING-PACKAGE, HOOK-ENFORCE, MINIMAL-FOOTER and FINDINGS-KEEP in [the decision register](sources.md#3-decisions).

#### 4.1.5 Templates

Each structure has one complete template. A line in angle brackets says what goes there; a part marked _only when there is some_ is left out otherwise. Each template starts at its first block; in a reply the [reply id](#411-blocks-parts-and-layouts) stands above it. The [Banner](standard-coordination.md#46-banner) examples show finished banners.

**Summary**, Full, with each part's code in the right margin; the codes are not part of a reply:

````text
# [<Territory> › <rest of the id>](<package _index.md>)                      H1

**Summary at <now> · last mark <mark time>**                                 H2

<one or two lines of context; only when there is some>                       H3

---                                                                          H4

<anything the reply says that no other part covers; only when there is some>  B1

## Summary                                                                   B2

**<bold headline: what the window came to>**

- <one line per thing that changed since the last mark, or: Nothing changed.>

## Status                                                                    B3

| Change | Where it stands |
| --- | --- |
| **<NN slug>**<br><what it is, from _index.md's Changes> | **<state in a few words>**<br>🤖 <run work>; next: <step><br>🧵 <other package>: <what>; next: <step><br>🌐 <waiting on whom><br>👤 <with you>: <TAG> |

## Findings                                                                  B4

## Queries                                                                   B5

### <TAG> - <plain title>

**Context:** <enough to decide without reading anything else>

**Query:** <one sentence>

**Options:**

a) (recommended, confidence <level> - <reason>) <the course>

b) <the alternative>

```text                                                                       B6
1 · <what the most pressing group is>, can run while you're away
<TAG> a (<high, medium or low>): <gloss>

2 · <what the next group is>
<TAG> a (<high, medium or low>): <gloss>
```

<Knowledge Islands art; scroll: KNOWLEDGE ISLANDS, then four lines>            F1

### <glyph state> · at <time the work entered this state>                    F2

🤖 <n> running · ⏳ <n> queued · 👤 <n> with you · ⛔ <n> blocked · 🅿️ <n> parked   F3

🗺️ roadmap · <n> records · <n> open · <n> done awaiting prune · <n> ideas    F4

📦 package · changes <n> · open <n> · held <n> · meetings <n>                 F5

- <glyph> <what> · <holder> · at <time>                                      F6

↪️ <draining or finishing> → <target>                                        F7

<🤝 in <meeting> · with <names>; only while in a meeting>                     F8

<thread line>                                                                F9
````

**Status**, Full: the Summary's template with the form line `**Status at <now> · last mark <mark time>**` and no `## Summary`, so the Answer, where there is one, or `## Status` follows the rule; the same footer.

**Bootstrap**, Medium, under [Bootstrap](standard-bootstrap.md#41-bootstrap):

```text
# [<Territory> › <rest of the id>](<package _index.md>)

**Bootstrap at <now> · last mark <mark time>**

---

## Done

- <the coordinator's role and where the work stands>

Rename thread: /rename <thread line>

## In Progress

<what is running and waiting, or Nothing is running>

## Findings

<each open finding: in full the first time, then one line, tag · answer in brief · first given in Reply HH:MM; only when there is some>

## Queries

<every open query in full, then the reply block, or No outstanding queries>

### <glyph state> · at <time the work entered this state>

🤖 <n> running · ⏳ <n> queued · 👤 <n> with you · ⛔ <n> blocked · 🅿️ <n> parked

- <glyph> <what> · <holder> · at <time>

<🤝 in <meeting> · with <names>; only while in a meeting>

<thread line>
```

**Run report**, Medium, written by the run under the [owner report](standard-reporting.md#42-owner-report): the Bootstrap's template with `› <run name>` added to the heading, the form line `**Run report at <now> · last mark <mark time>**`, `## Done` holding its outcomes, commits and checks, no `Rename thread:` line, and a banner of F2, F3, F6 and F9 alone, closing with `🧵 <work-id>` of the work it reports to.

**Stop**, Medium, for a hold, under [Putting work on hold](standard-holds.md#41-putting-work-on-hold), alone in its message:

```text
# [<Territory> › <rest of the id>](<package _index.md>)

**Stop at <now> · mark <the hold's mark>**

---

## Done

- <one line per repository>

## In Progress

Left over: <another session's uncommitted file, or Nothing>

## Queries

- <TAG> - <one line each>

### ⏸️ On hold · paused until <release> · at <time the hold landed>

⏸️ drained · 🅿️ <n> queries parked

- 🅿️ <n> queries in the change documents
- ⏸️ <release>, or `resume`

<thread line>
```

**Stop while Snoozing**: the hold's template with the Snoozing banner:

```text
### 💤 Snoozing (on hold) · at <time the snooze landed>

💤 waiting for a message · 🅿️ <n> queries parked

- 🅿️ <n> queries in the change documents
- 💤 a message arrives, or `resume`

<thread line>
```

**Stop at Finished**, at [Finishing Project work](standard-mark.md#45-finishing-project-work):

```text
# [<Territory> › <rest of the id>](<package _index.md>)

**Stop at <now> · last mark <mark time>**

---

## Done

- <one line per close-out step>

## In Progress

Nothing is running

## Queries

No outstanding queries

### 🏁 Finished · <work label> closed at <time>

- 🏁 <what closed>

<thread line>
```

**Position**, Short, for `mark only`, the other short phrases and any other change of state: no heading block, an optional Answer of a line or two, then the banner without F1, F4 and F5:

```text
<one or two plain lines saying what moved or where the work stands; only when there is some>

### <glyph state> · at <time the work entered this state>

🤖 <n> running · ⏳ <n> queued · 👤 <n> with you · ⛔ <n> blocked · 🅿️ <n> parked

- <glyph> <what> · <holder> · at <time>

<↪️ heading-for line; only when there is one>

<🤝 in <meeting> · with <names>; only while in a meeting>

<thread line>
```

**Update** and **Answer**, Minimal: the Answer, with no heading block, then the **one-line footer**: the banner heading's glyph state without its time, then ` · ` and the thread line, as Kris set under MINIMAL-FOOTER on 19 November 2026: "I thought we had a minimal reply where you could effectively just say what the reply time was and then maybe a one or two liner. So you don't need to … repeat a lot of the footer-based information every time". Where the state, the counts or the items have changed since the session's previous reply, it gives the banner as the Position carries it instead, without F1, F4 and F5. Either way the reply closes with its thread line, as HOOK-ENFORCE of 18 November 2026 set. A timed update or wake line is one or two timestamped lines under the [cadence](standard-coordination.md#43-coordinator-responsiveness), above the footer:

```text
<the Answer, or one or two timestamped lines for an update>

Findings open: <n>, <TAG>, <TAG>.   (only while a finding is open)

<glyph state> · <thread line>
```

As `🤖 With worker · Kitteth (🪨 🔑 cairn.summit)`, `👤 With supervisor · Wayland (⚒️ 🔑 ki.cairn)`, or `💤 Snoozing (on hold) · 🧵 <work-id>` for a session with no role yet, each other state written as its banner heading writes it.

Sources: REPLY-FORMAT, REPORT-FORMS-TIDY, HOOK-ENFORCE, MINIMAL-FOOTER and FINDINGS-KEEP in [the decision register](sources.md#3-decisions).

#### 4.1.6 Verbs

The verbs, which the same plain words in chat also do:

```text
/ki-coordination mark                  strike the mark, then summarise since the previous one
/ki-coordination mark only             strike the mark, then the Position
/ki-coordination summary               summarise since the last mark (or the session's start)
/ki-coordination summary since 14:00   summarise from any point you name
/ki-coordination mark, status only     strike the mark, then the Status
/ki-coordination status                the Status; the mark stays
```

- Adding `no art` to any of them leaves the art out of the footer.
- Only `mark`, `mark only` and `mark, status only` move the mark, and a hold strikes one; a Summary and a Status never move it.
- The Status is the Summary without its `## Summary`.
- `/ki-coordination hold`: drain plus On hold, as `pause` does, under [Putting work on hold](standard-holds.md#41-putting-work-on-hold), ending in the Stop.
- `/ki-coordination drain`: stop launching while the work stays With worker, let what is running finish, then give a Summary whose `## Summary` carries the drain check's result, `DRAINED`, or `NOT DRAINED` with what remains.
- `/ki-coordination resume`: release held work under **Release** in [Putting work on hold](standard-holds.md#41-putting-work-on-hold), as the word `resume` does.
- `/ki-coordination send`: make the send under [States and moves](standard-coordination.md#45-states-and-moves): commit and sync the package and give the Summary whose banner names the handoff.
- `/ki-coordination goals`: walk `_index.md`'s Goals section in a [goal-setting pass](standard-queries.md#44-goal-setting-pass), as the word `goals` does, closing with a Status.
- `/ki-coordination receive`: take the owner's receive under [States and moves](standard-coordination.md#45-states-and-moves), as `with me` does, and commit it with the next send.
- Every reply that sends is followed by [committing and pushing the package](standard-coordination.md#481-committing-the-package).

`ki-work recap` keeps only the ordinary session recap; every summary while coordinating is the Summary.

Sources: SUMMARY-MODEL, SUMMARY-NOW, STATUS-FORM, STATUS-FORM-2, STATUS-FORM-3, MARK-STATUS, MARK-DURABLE, STATUS-DESIGN, HOLD-VERBS, REPORT-FORMS-TIDY, COORD-COMMANDS, GOAL-SETTING, RECAP-OWNER, REPLY-FORMAT and FOCUS-ROWS in [the decision register](sources.md#3-decisions).

#### 4.1.7 The Summary

The **Summary** is the coordinator's one summary form, a Full reply. It runs from the last mark, from the session's start where there is none, or from any time the owner names, laid out for about 90 columns unless the owner asks for another width. Where the owner named the window's start, B2's headline names it. It holds, in order, the parts the [structure–part matrix](#413-structurepart-matrix) gives: the heading block, the Answer where there is one, `## Summary`, `## Status`, `## Findings` while one is open, `## Queries` with the open queries in full, at most three under the [query cap](standard-queries.md#42-query-cap), and the reply block, then the footer, the art unless `no art` was asked for, and the banner with its roadmap and package lines and its thread line. The [interactive pass](standard-queries.md#43-interactive-pass) follows `## Queries`, keeping each query's tag, Context, Query and Options.

**The status table** has two columns, **Change** and **Where it stands**, and one row per change document or sub-package that holds a live item, in the order `_index.md`'s Changes section lists them, then one catch-all row, **Not in a change yet**, for live items no change document holds yet: a run, a Now line or another session's work. It is the full board, not a delta: every live item appears whether or not it changed.

- **Change cell:** line one is the change document's number and slug in bold, as in `**10 skills-review**`, or the sub-package's slug, and the catch-all row's is `**Not in a change yet**`. Under it, at normal size, what the change or sub-package is, a short phrase from its line in `_index.md`'s Changes section. The Change column takes at most a third of the table's width; a longer line is shortened in `_index.md`, never reworded in the Summary.
- **Where it stands:** a bold headline giving the row's state in a few words, then one line per item, opening with its **holder**, 👤 the owner, 🤖 a worker or run, 🧵 another session or 🌐 the outside world, glyphs the core's [table of glyphs](standard-coordination.md#46-banner) holds, then what it is and its next step. ⏳ means queued only. The owner's items come last and name their query's tag, so no waiting column is needed. Uncommitted work, unlogged decisions and repositories behind their remote, under the [repository level check](standard-sync.md#43-repository-level-check), are 🤖 lines in the row of the change they belong to, or the catch-all row.
- **No row** is given to a change document or sub-package with nothing live, and the catch-all row is left out when it has no item.
- **Rendering:** a plain Markdown table with `<br>` between the lines of a cell. The owner wants top-aligned cells, which Markdown cannot ask for; Orca's chat view is asked for them under [PERSONAL-DOTFILES-UE-107 (pruned)](https://github.com/krisb/dotfiles/blob/7f5a625/docs/roadmap/PERSONAL-DOTFILES-UE-107-decide-orca-adoption.md), ORCA-TABLE-ALIGN. Until then cells centre.

```markdown
## Status

| Change | Where it stands |
| --- | --- |
| **10 reporting**<br>Status-led reports every session can read cold | **Landing in the standard**<br>🤖 summary-model writes the Summary into ki-coordination; next: checks<br>👤 STATUS-WIDTH: whether 90 columns suits every surface |
| **Not in a change yet**<br>Runs, Now lines and other sessions' work | **Waiting outside**<br>🌐 Orca top-aligned table cells; next: Orca's answer |
```

**The footer** is the Knowledge Islands art, then the banner. The art shows on every Summary and Status unless the owner added `no art`, and on no other reply. What the art and the footer lines carry is for Knowledge Islands Cairn, `ki.cairn`, to decide, liaising with `ki.summit` as the keeper of this standard. Until Cairn publishes its own, the art is the 88-column Knowledge Islands drawing in the [summary-model design note](https://github.com/krisb/dotfiles/blob/29dc51c/+/_WORK/personal.reg.household-terra/_emerging/summary-model.design.md), its scroll's title KNOWLEDGE ISLANDS, and beneath it four lines, each centred in the 54-character space between the scroll's `|` marks with any odd space to the right: the host and state in capitals, as `SOL  ·  WITH YOU`, or `ALL CLEAR` when nothing waits, a blank line, the counts in words, and the day, date and local time; `ki work banner` (KI-TOOL-KI-CLI-182 in `tools-ki`) renders it. The art stays as a visible marker and can go later without touching anything else.

**Sources of a Summary:** the package's change documents; every report received since the mark, from its run packet or, once a [tidy](standard-mark.md#43-pruning-the-package) has removed the packet, from the change documents and records its outcome reached; the parked tags in the change documents; the agent host's view of its agents; record transitions in the work's scope from the Git history of the roadmap paths; and `git log -- work/<territory>/<id>/` in the Cairn store, the logbook. The mark bounds them all. Where a report can no longer be read and its outcome was not homed, the Summary says what it could not read rather than reconstructing it from memory.

Sources: SUMMARY-MODEL, TABLE-ALIGN, FOOTER-AGORA, FOOTER-COUNTS, REPLY-FORMAT, FOCUS-ROWS, QUERY-CAP and QUERY-CAP-3 in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.2 Banner detail

**Rendered glyphs.** The emoji stay the written notation in reports, terminals and commits, each with the meaning the core's [table of glyphs](standard-coordination.md#46-banner) gives it. A rendered surface, such as the Observatory's Work tab, may draw the five glyphs, 🤖, 👤, 🎯, ⏸️ and 🏁, and Snoozing's 💤 once the package carries one, with the matching line glyphs from `@knowledgeislands/icons`, always with the state's words beside them. The words, arrows and banner shape do not change, and the package owns the mapping from state to glyph.

**Report heading.** The heading block: one `#` heading, one bold form line, an optional opening note and one horizontal rule, then the body. It is plain Markdown, not a fenced block, so the heading can carry links.

- **Heading:** the package's name, linked whole: the territory's display name under [Work naming](standard-opening.md#42-work-naming), then the rest of the work id's dot-separated parts as they stand, joined by ` › `, the whole text one link to the package's entry file in the Cairn store by absolute local path, `<store>/work/<territory>/<id>/_index.md`. So `cairn.summit` is `# [Cairn › summit](/Users/krisbrown/kis/cairn/ki-cairn-store/work/cairn/cairn.summit/_index.md)` and `personal.tower` is `# [Personal › tower](<store>/work/personal/personal.tower/_index.md)`. `<store>` is where the rig keeps its clone of the store, as its configuration sets it, the Cairn MCP's `MCP_CAIRN_STORE`, as in `/Users/krisbrown/kis/cairn/ki-cairn-store` on Kris's rigs. Kris set this under HEADING-PACKAGE on 19 November 2026, the package being the work a session is in and the State of play gone; it replaces HEADING-FIX's forms, territory work's `› State of play`, Project work's `<Theme> › [<Project>]` and regular work's `[<title>]`.
  - **One link, the whole heading.** Nothing stands outside the link, and the link is the package's `_index.md`; it never links a repository, a README, a folder, a theme page or a Project note, as HEADING-FIX set.
  - **Every level alike.** A summit, a node, a Project and regular or ad hoc work take the same form; the heading adds no theme, title or `State of play`, and never mixes ` > ` with ` › `.
  - No rule stands before the heading, so it is the first line and H1 of every saved report.
- **Form line:** a blank line, then H2, `**<Structure> at <now> · last mark <mark time>**`, under [Part content](#414-part-content), with no state.
- **Times:** each with its own words.
  - `<Structure> at <time>`: when the reply was given.
  - `last mark <time>`: the mark the reply's window opens at; `mark <time>` in a hold's Stop, the mark struck for the hold.
  - In the banner, the heading's `at <time>`: when the work entered the state shown. Each item's `at <time>`: when it took its place.
- **Rule after:** a blank line, one `---`, a blank line, then the body.

Opening a Summary:

<!-- ki-coordination:block heading-example -->

```markdown
# [KI › ways-of-working](/Users/krisbrown/kis/cairn/ki-cairn-store/work/ki/ki.ways-of-working/_index.md)

**Summary at 23:52 BST · last mark 22:34 BST**

---

## Summary
```

A summit opening a Bootstrap whose last mark was the day before:

```markdown
# [<Territory> › summit](<store>/work/<territory>/<territory>.summit/_index.md)

**Bootstrap at 09:13 BST · last mark yesterday 18:05 BST**

---

## Done
```

**Roadmap and package lines.** Directly beneath the counts line, each after a blank line, a Full reply's footer carries one line of roadmap counts and one of package counts. In a Full reply on work On hold the counts line is the hold line, with the two lines beneath it, so the counts stay together under the heading and the thread line stays last.

- **Roadmap line:** `🗺️ roadmap · <n> records · <n> open · <n> done awaiting prune · <n> ideas`, from `ki repo roadmap summary` in the repository homing the package. Records is the total, ideas the `triage` horizon, done awaiting prune the done and cancelled records, and open every other record. A count of one takes the singular, as in `1 record` or `1 idea`. A repository with no roadmap shows `🗺️ roadmap · none`.
- **Package line:** `📦 package · changes <n> · open <n> · held <n> · meetings <n>`, from the package, as Kris let it be aligned under OLD-SHAPE-HOMES a on 14 November 2026: "you can align whatever you need to align [for] the footer message counts": changes counts its change documents, its sub-packages' included, open the open queries across their Open sections, held the items under `_index.md`'s `## Held`, and meetings the open meetings in the Cairn store's `meetings/` that the work sits in.
- Both are counted afresh for each Full reply and write their zeros; they are counts, never items. Medium and Short replies carry neither.

**Mode lines.** The meeting line, F8, sits below the list and any heading-for line and above the thread line, a blank line before it, in any reply that closes with the banner while the session is in a meeting, and nowhere else.

- `🤝 in <meeting> · with <names>` while the session is in a meeting, naming each meeting it is in by its folder's name and, after `· with`, the other participants it works with there by their roster names, or a seat's id where it has none, as in `🤝 in cairn.wayfinder.designs · with Quire, Limner`, two or more meetings joined by `, `, each with its own list; the owner is not named, and with no other participant the `· with <names>` part is left off. A session is in a meeting while it is a participant of an open meeting with a sitting under way, `ki-status: open` in the meeting's entry file under `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md#45-the-entry-file). It is a meeting line, not a listening line, as Kris set under FOOTER-DELEGATES on 19 November 2026, refining LISTEN-LINE: "whether or not we change the listening glyph now to something of our meeting in some way or other … And the idea that then something shows that it's not listening doesn't really make any sense either". In no meeting the line is left off and nothing stands in its place. The [inbox watcher](standard-listening.md#41-inbox-watch) has no line; the earlier `👂 listening`, `🔇 not listening` and `👂 in <meeting>` are gone, and the `ki-listening_enabled` and `ki-listening_status` fields still record the watcher.
- There is no sync line. A host sync thread on sol, whose seat Hob Sol holds, sitting in one meeting closes:

```text
🤝 in cairn.summit.voice · with Kitteth

Hob Sol (🏠 🔑 personal.rig.sol)
```

A run report's banner carries no mode lines and no heading-for line, because a run neither sits in a meeting nor drains.

With worker, closing a Summary while runs are out:

<!-- ki-coordination:block with-worker-banner -->

```markdown
### 🤖 With worker · at 23:41 BST

🤖 2 running · ⏳ 0 queued · 👤 1 with you · ⛔ 1 blocked · 🅿️ 0 parked

🗺️ roadmap · 6 records · 4 open · 1 done awaiting prune · 1 idea

📦 package · changes 3 · open 1 · held 0 · meetings 0

- 🤖 work-model · run/work-model · at 23:20
- 🤖 tools-burndown fix · work/ki.tools-burndown · at 23:05
- 👤 WORK-HOME · owner · at 22:58
- ⛔ package commit · repo/ki-cairn-store · at 22:40

⚒️ 🔑 ki.ways-of-working
```

Handoff to supervisor, closing a Summary that sends the work to the owner:

<!-- ki-coordination:block handoff-banner -->

```markdown
### 🤖 → 👤 Handoff to supervisor · at 23:52 BST

🤖 0 running · ⏳ 0 queued · 👤 2 with you · ⛔ 0 blocked · 🅿️ 1 parked

🗺️ roadmap · 6 records · 3 open · 2 done awaiting prune · 1 idea

📦 package · changes 3 · open 2 · held 0 · meetings 1

- 👤 WORK-MODEL · owner · at 23:52
- 👤 WORK-HOME · owner · at 22:58
- 🅿️ 1

🤝 in cairn.wayfinder.designs · with Quire, Limner

⚒️ 🔑 ki.ways-of-working
```

With worker, a Position while draining towards a hold after `pause`, with one run still finishing:

<!-- ki-coordination:block draining-banner -->

```markdown
### 🤖 With worker · at 23:41 BST

🤖 1 running · ⏳ 0 queued · 👤 1 with you · ⛔ 0 blocked · 🅿️ 0 parked

- 🤖 work-model · run/work-model · at 23:20
- 👤 WORK-HOME · owner · at 22:58

↪️ draining → ⏸️ On hold

⚒️ 🔑 ki.ways-of-working
```

**Restart suggestion.** Suggest restarting a session only when one of three triggers holds, and for nothing else:

- **Identity changed:** the work's id, level, label or run name changed in this session, as when a package moves from `hnr.email-routing` to `personal.email-routing`. The session's name, run and opener no longer match `_index.md`, and only a fresh opener sets all three again.
- **Repeated compaction:** the session has been compacted twice or more. Each [re-anchoring](standard-bootstrap.md#43-re-anchoring-after-compaction) rebuilds from a summary of a summary, and a fresh bootstrap from the package is more faithful.
- **Method moved on:** since the session opened, the method changed its opener, the hook line or the output style, checked under [Refreshing this guidance](standard-coordination.md#482-refreshing-this-guidance). A session keeps the style and opener it loaded at start; only a fresh session loads the current ones.

The suggestion is a single closing item placed directly before F2, the banner's `###` heading, after `## Queries` and its reply block, or after the Answer in a Position, so the banner and thread line stay last. It is one bold line naming the trigger and saying plainly that the session would be better restarted, then the work's opener, filled from its `_index.md` under [Opening work](standard-opening.md#43-opening-work), in one fenced block:

````text
**Restart suggested:** the work moved from hnr.email-routing to personal.email-routing in this session, so its id, label, run name and opener changed; this work would be better restarted in a fresh session with this opener.

```text
Bootstrap as personal.email-routing regular work under ki-coordination.
...
```
````

- It is the second named exception to the rule that a report carries no send, resume or paste line, beside the bootstrap `Rename thread:` line under [Opening work](standard-opening.md#43-opening-work).
- Never for length, age, a change of state, a hold or a model switch alone.
- Give it in each reply closing with the banner while the trigger holds; once the owner declines it, not again until a new trigger arises.
- A Stop, run report or conversational reply never carries it. Picking work up still follows the package, and the owner closes the old session.

Send and receive remain the work model's moves. To pick work up, follow [Picking work up](standard-bootstrap.md#44-picking-work-up) from the package; the thread line identifies work and is not a restart prompt.

On hold, closing a Stop:

<!-- ki-coordination:block hold-banner -->

```markdown
### ⏸️ On hold · paused until the backpack migration lands · at 00:10 BST

⏸️ drained · 🅿️ 9 queries parked

- 🅿️ 9 queries in the change documents
- ⏸️ after the backpack migration lands, or `resume`

⚒️ 🔑 ki.ways-of-working
```

Snoozing, closing a Stop for a hold that waits for more to come:

<!-- ki-coordination:block snoozing-banner -->

```markdown
### 💤 Snoozing (on hold) · at 23:58 GMT

💤 waiting for a message · 🅿️ 2 queries parked

- 🅿️ 2 queries in the change documents
- 💤 a message arrives, or `resume`

⚒️ 🔑 ki.ways-of-working
```

Finished, closing the Stop at [Finishing Project work](standard-mark.md#45-finishing-project-work):

```markdown
### 🏁 Finished · Ways of working closed at 18:00 BST

- 🏁 14 work items accepted, decisions homed, package pruned

⚒️ 🔑 ki.ways-of-working
```

**In an agent's report.** A background agent's run report takes the same heading block and banner, under the [owner report](standard-reporting.md#42-owner-report): the heading of the work it reports to with `› <run name>` added after the link and the structure `Run report`, so its form line reads `**Run report at <local time> · last mark <local time>**`, the mark being that work's. Its banner gives the run's state and items, `### 🤖 → 👤 Handoff to supervisor · at <time>`, or `### 🤖 → 👤 Handoff to supervisor · blocked · at <time>` where it sends back with a blocking query, closing with the thread line of the work it reports to. Opening a run report:

```markdown
# [KI › ways-of-working](/Users/krisbrown/kis/cairn/ki-cairn-store/work/ki/ki.ways-of-working/_index.md) › migrate-phase1

**Run report at 20:40 BST · last mark 14:54 BST**

---

## Done
```

Sources: BANNER-GLYPHS, RICH-HEADING, REPORT-FORMS-TIDY, SNOOZE-HEADING, FOOTER-COUNTS, LISTEN-STATUS, FOOTER-LAYOUT, FOOTER-CAPABILITY-STATUS-2, FOOTER-NOT-LISTENING, SYNC-LINE-OFF, RESTART-SUGGEST, REPLY-FORMAT, LISTEN-LINE, ITEM-GLYPHS, HEADING-FIX, HEADING-PACKAGE and NAME-FIRST in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)
