---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T00:18:51Z
ki-status: in force
---

# Coordinating-work standard: queries

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Questions](#41-questions)
  - [4.2 Query cap](#42-query-cap)
  - [4.3 Interactive pass](#43-interactive-pass)
  - [4.4 Goal-setting pass](#44-goal-setting-pass)
  - [4.5 Query review](#45-query-review)
  - [4.6 Review independence source](#46-review-independence-source)
  - [4.7 Defaults query](#47-defaults-query)
  - [4.8 Acceptance bundles](#48-acceptance-bundles)

## 1. Introduction

This file holds how queries reach the owner: the interactive and goal-setting passes, blind query review, the defaults query and acceptance bundles. It extends [the core](standard-coordination.md). The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How queries reach the owner, and how many one reply puts to them.

### 2.1 In scope

- Where queries reach the owner, and the query cap.
- The interactive pass: its two replies, the read-back, the real example, the discussion options and the plain fallback.
- The goal-setting pass.
- Blind query review and the marked review-independence source.
- The defaults query and acceptance bundles.

[Back to contents](#contents)

### 2.2 Out of scope

- A query's shape, its confidence, the reply block and tags: [reporting](standard-reporting.md).
- Unattended windows, before which packed queries are unpacked: [unattended windows](standard-unattended.md).
- Closing accepted records: `ki-work accept`'s [closure authority](../../../keystone/ki-work/references/standard-acceptance.md#42-obtain-closure-authority).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Query cap** | At most three queries in one reply, the most critical first, then one line saying how many more are open and where they are held. **Standard:** this one, [4.2](#42-query-cap) |
| **Interactive pass** | Taking the open queries one decision at a time, in two replies per query: the context in chat, then a short question card, or plain chat alone where the runtime has no card. **Standard:** this one, [4.3](#43-interactive-pass) |
| **Discussion options** | The two options closing every query in a pass, Talk it through now and Come back at the end, so the owner can defer without typing. **Standard:** this one, [4.3](#43-interactive-pass) |
| **Query review** | One masked, blind review run a query goes to before it reaches the owner when it is medium or low confidence, or high with a destructive recommended course. **Standard:** this one, [4.5](#45-query-review) |
| **Acceptance bundle** | One `ACCEPT` query per work listing its records awaiting acceptance, oldest first, which the State of play brings before any other query. **Standard:** this one, [4.8](#48-acceptance-bundles) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Questions

Queries reach the owner in the Summary by default. After a Summary that lists open queries, or on the owner's request, use the [interactive pass](#43-interactive-pass): one decision per turn, its context in chat Markdown, then a short question card, or plain chat Markdown alone where the runtime has no card.

[Back to contents](#contents)

### 4.2 Query cap

A reply puts at most three queries to the owner, so each reply stays short enough to deal with, as Kris set under QUERY-CAP-3 on 19 November 2026: "You give me a big long list of them again. So that's really difficult for me to deal with … up to two or three". It narrows the ten QUERY-CAP set on 18 November 2026.

- **Which three:** the most critical first: a query whose due date is close, or that blocks other work or another territory. Within the same criticality, the highest confidence first.
- **The rest:** where more are open, one line after the last query says how many more there are and where they are held, as in `A further 7 are held in the package's change documents.`
- **Reply block:** it carries the same three queries and no others.
- **Where it applies:** to what one reply shows, in `## Queries` and the reply block: the Summary, the Status, the Bootstrap, a run report and every other form that carries queries in full. A Summary or Bootstrap that restates the open queries shows the top three in full and the further-queries line.
- **Where it does not:** the queries file and the change documents keep every open query in their Open sections.

Sources: QUERY-CAP and QUERY-CAP-3 in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.3 Interactive pass

After a Summary that lists open queries, or on the owner's request, the coordinator takes the open queries in an interactive pass; either one alone starts it. The pass after the Summary that closes a pass asks only the queries that pass did not. The pass never batches: one decision at a time, two replies per query, so the owner sends nothing between questions.

1. **First reply.** Start a short background timer, about 5 seconds, such as a background `sleep 5` whose completion wakes the coordinator. End the reply with its last text: the [read-back](#the-read-back) of the previous answer, if any, then the next query's context as ordinary Markdown:

   ```markdown
   <read-back of the previous answer: what was chosen, then what it changes>

   Query <n> of <total>

   ## <TAG>: <plain title>

   **Where things stand**

   - <a short bullet>
   - <a few more, enough to decide without scrolling back>
   - <for a field or a format: its real current value, quoted from its file, and what it would become>
   ```

2. **Second reply.** Woken by the timer, the reply holds only the card, through the runtime's question tool, such as `AskUserQuestion`:
   - **Title:** one line, the counter and the plain question, as in `Query 2 of 5: Release the held work now?`.
   - **Options:** each a short label, the real choices first with the recommended one leading, its label carrying `(recommended, <confidence> confidence)`, then the two [discussion options](#the-discussion-options). A card holds at most four options, so it carries at most two real choices; a query with more is asked in the plain fallback's chat form, or split into separately tagged parts.
   - **Descriptions:** one or two sentences per option saying what it means; the recommended option's opens with `Why:`.
   - **Own words:** the card's free-text box takes the owner's own words, so no option offers them.
   - **Pairs:** two related questions may share one card, each with a short header and its own two discussion options; otherwise one question per card.
3. **After the answer.** Log a real choice in the change document it belongs to, then go back to step 1, whose read-back, saying what was chosen and what it changes, opens the next query's first reply. A discussion option logs nothing; [the discussion options](#the-discussion-options) say what follows.
4. **Why.** Orca folds everything in a reply under "Worked for" except its last text, and does not show text written after a card's answer in the same reply. So the context is the first reply's last text, the card stands alone in its own reply, and the read-back, plain chat after the answer, breaks the run of tool calls so the next context renders on its own instead of folding away with them. Orca's card also drops line breaks in its title, as reported to Orca, while chat text renders in full above the card.
5. **At the end of the set.** Take again the queries deferred to the end, in the order they were deferred, each opening with a short discussion in plain chat before its first reply. When the last query is answered and logged, the next reply reads it back, with what it changes, takes a mark and gives the Summary, for a clean baseline and a fresh view.

**Where things stand** is a few short bullets, enough to decide without scrolling back.

<a id="the-real-example"></a>**The real example.** A query about a field or a format shows the real thing in its context, from the store or the repository it concerns: the actual current value, quoted from its file and named by its path, and what it would become under the recommended choice, and under another where they differ, so the owner decides on the thing itself rather than a description of it, as Kris took CONTEXT-EXAMPLE a on 16 November 2026: "that level of detail… is exactly what is useful to me".

<a id="the-read-back"></a>**The read-back** is a short line or two in plain chat: what the owner chose, then what it changes, naming what gets recorded, what gets built and what is left alone. It reads the same in card mode and in the plain fallback. For a discussion option it says which was chosen and that nothing is recorded yet.

<a id="the-discussion-options"></a>**The discussion options** close every query's options, on a card and in the plain fallback alike, after the real choices, so the owner can say "not yet, let's talk" without typing into the free-text box:

- **Talk it through now:** the pass pauses on this query, a short discussion of it follows in plain chat, then the query is asked again, its options revised where the talk changed them, and the pass carries on.
- **Come back at the end:** the query moves to the end of this set and is taken again there, before the closing mark and Summary; it is not parked beyond the set. Chosen again at the end, it leaves the query open for the Summary that closes the set.

A quick first run through the set thus decides what it can. While a query is talked through or waits for the end, work on queries already decided may launch in the background, each decision logged in its change document first, as [the decisions practice](standard-coordination.md#44-coordinating-practices) allows, so the decided work starts while the rest are discussed.

**Plain fallback.** Where the runtime has no question card, or no way for a timer to wake the coordinator, ask in plain chat Markdown alone: one reply with the read-back of the previous answer and what it changes, the context and **The options**, numbered, each with a bold name and what it means, the recommended one first carrying _(recommended, <confidence> confidence)_ and a one-line _Why:_, then the two discussion options, closing with "Reply with a number, or your own words.". Then stop and wait. An unattended window asks in plain text, never through a card, because a card blocks the session.

- Never put the next query's card in the same reply as an answer's read-back.
- The total is the number of open queries when the pass starts. When an answer raises a new query, add it to the total and say so. A query deferred to the end keeps its number when it is taken again.
- Nothing is shortened because it is asked interactively, and each query keeps its [tag](standard-reporting.md#needs-tags).

Sources: SUMMARY-MODEL, QUERY-RULES, INTERACTIVE-QUERIES, QUERY-TURNS, QUERY-SET-MARK, CARD-LOOP, CARD-PATTERN, CARD-READBACK, CARD-DISCUSS and CONTEXT-EXAMPLE in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.4 Goal-setting pass

The owner asks for a goal-setting pass with "goals" or `/ki-coordination goals`. The coordinator walks the Goals section of `_index.md` in order, one goal at a time, in the [interactive pass](#43-interactive-pass)'s two-reply shape: it reads back the goal and its place in the order, and asks the owner to confirm, reword, reorder, add or retire it. At the end it writes the Goals section of the steward's own `_index.md` in one commit, logs the owner's words in the change document they belong to and closes with a Status. It strikes no mark and launches nothing.

Sources: GOAL-SETTING and FOCUS-ROWS in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.5 Query review

Before a query reaches the owner, it goes to one blind review run if it is medium- or low-confidence, or high-confidence with a destructive recommended course.

- **Which queries:** each query whose option a) carries `medium` or `low` confidence, and each `high` one whose recommended course destroys, deletes or publishes, including queries drafted and not yet sent.
- **The review:** one blind review run, a background agent on the strongest model at high effort, under Codex rather than Claude Code where independence from the session's own model matters.
  - It is masked: the brief carries the query's Context and Query only, with the options in no ranked order and no recommendation, confidence or reason.
  - The reviewer never reads the work's change documents or any report, where the recommendation is written.
  - It checks what it can directly and returns its own recommended option with a confidence and a one-line reason.
- **Independence:** the brief carries the [review-independence sentence](#46-review-independence-source) word for word. Its Context states each earlier decision as a dated fact, what was decided, by whom and when, never as a premise the question takes for granted.
- **Agreement:** where the review recommends the same course, the confidence rises one level, `low` to `medium` or `medium` to `high`, and its reason begins `reviewed`, as in `a) (recommended, confidence high - reviewed, the patch is already on main) push it`. A `high` query keeps `high` and is marked `reviewed` the same way.
  - The lift never takes to `high` a destructive course resting on claims not verified directly.
  - Precedent alone earns no lift: agreement resting only on an earlier decision, or only on the coordinator's framing, leaves the confidence where it was, its reason beginning `reviewed, precedent only`.
- **Disagreement:** the confidence stays, its reason begins `review disagrees`, and the query shows both views: **Context** ends with the reviewer's view and reason in one sentence, and the reviewer's course joins the **Options** where it is not already one.
- **Challenge:** where the review questions an earlier decision the query rests on, whether or not it agrees with the recommended course, **Context** ends, after any disagreement, with the challenge in one sentence, naming the decision by its words and date and giving the reviewer's reason. The **Options** gain one to revisit that decision. A challenge is shown even when the confidence is unchanged, and nothing acts on it until the owner answers.
- **Run reports:** the coordinator reviews the queries a run report raises when it receives the report, before they reach the owner. The background agent that raised them does not launch the review itself.
- **Split rule:** a query still below `high` after review is split into separately tagged parts, each one decision the owner can answer with one instruction and each with its own confidence. Packed queries are unpacked before an [unattended window](standard-unattended.md#42-unattended-windows) starts, so nothing waiting on the owner bundles decisions while they are away.

Sources: QUERY-REVIEW, QUERY-REVIEW-STANDARD, BLIND-REVIEW, REVIEW-INDEPENDENCE, REVIEW-CHALLENGE, ACCEPT-BY-CRITERIA, REVIEW-LIFT and QUERY-RULES in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.6 Review independence source

<!-- ki-coordination:source review-independence -->

```markdown
**Independence**, in a review run: form your own view from the evidence before you weigh anything the brief says was decided. Earlier decisions are dated facts, not premises, and you may challenge any of them: where the evidence suggests one was wrong, name it by its words and date and give your reason, as well as answering what was asked. A challenge goes to the owner and is never acted on without them.
```

[Back to contents](#contents)

### 4.7 Defaults query

Low-stakes choices the coordinator has already made, where the owner's silence is consent, go in one query headed `DEFAULTS - defaults unless you say otherwise`:

- Context: one line per choice.
- Query: `keep these defaults?`
- Options: `a) (recommended, confidence high - each choice is low-stakes and reversible) keep the defaults` and `b) object to the ones you name`.

A choice the owner objects to becomes its own tagged query. A decision that is not low-stakes never goes there. No other query bundles more than one decision: a query the owner cannot answer with one instruction is two queries.

[Back to contents](#contents)

### 4.8 Acceptance bundles

Records awaiting acceptance reach the owner as one bundle per work, and the State of play brings them first.

- **When:** at bootstrap and resume, the State of play's first call on the owner, before any other query, is the territory's `awaiting-review` records. Project work brings its own at each handoff to the owner.
- **Shape:** one `ACCEPT` query per work, tagged with the work's name, listing each record oldest first, linked under [Linking records](standard-reporting.md#44-linking-records), with its outcome and any concern in one line. The owner answers `ACCEPT`, or `ACCEPT` with the exceptions named.
- **Grant:** the coordinator quotes the answer in the change document it belongs to with its source and lists the exact records it covers. That is the standing human grant the `ki-work accept` [closure authority](../../../keystone/ki-work/references/standard-acceptance.md#42-obtain-closure-authority) recognises. A named exception stays `awaiting-review` and keeps its own query.
- **Closure:** one `ki-work accept` run per repository closes the accepted records from that quotation and prunes them in the next prune-only commit. The coordinator never accepts a record in its own turn.

Sources: ACCEPT-BUNDLE in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)
