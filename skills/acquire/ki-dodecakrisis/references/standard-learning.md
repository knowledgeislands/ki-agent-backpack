---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:32:59Z
ki-status: in force
---

# D12 learning standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Noticing corrections](#41-noticing-corrections)
  - [4.2 The corrections log](#42-the-corrections-log)
  - [4.3 Drafting rules](#43-drafting-rules)
  - [4.4 Stated rules](#44-stated-rules)

## 1. Introduction

How D12's rules improve: corrections noticed from Kris's moves, rules he states, and drafts that go live only on his answer. It applies the [D12 standard](standard-dodecakrisis.md), whose rule 7, Determine teaches, it carries out. Kris set it on 6 November 2026 (D12-LEARNS): D12 "learns from how I reorder things, or I can tell you expressly how certain things need to move, so you can put better rules in place."

The sources and decisions behind these rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How the sorting rules improve, within the D12 standard's write and approval rules.

### 2.1 In scope

- Noticing corrections from Kris's moves.
- The corrections log and its fields.
- Drafting learnt rules, and stated rules.

[Back to contents](#contents)

### 2.2 Out of scope

- The ten rules, the rules file and the approval every write needs: [the D12 standard](standard-dodecakrisis.md).
- Labels, sweeps and providers: [the mailbox standard](standard-mailbox.md).
- Running the learning loop: the Inbox's `ki-muninn d12 learn`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Correction** | A move by Kris that changes how a rule placed an item, or places one from Determine by hand. **Standard:** this one, [4.1](#41-noticing-corrections) |
| **Corrections log** | The append-only JSON Lines file of corrections at the configured `corrections` path. **Standard:** this one, [4.2](#42-the-corrections-log) |
| **Learnt rule** | A rule drafted from agreeing corrections, live only on Kris's answer. **Standard:** this one, [4.3](#43-drafting-rules) |
| **Stated rule** | A rule Kris states in plain words; it outranks a learnt one. **Standard:** this one, [4.4](#44-stated-rules) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

[Back to contents](#contents)

### 4.1 Noticing corrections

`ki-muninn d12 learn` reads one mailbox's change history since its last checkpoint, headers and labels only, and records a correction whenever Kris:

- swaps one outcome for another on an item a rule placed (the rule said Digest, Kris made it Decide);
- takes an item out of Delete or out of Trash;
- places an item from Determine by hand, the case rule 7 says should teach a rule; or
- moves an item into or out of a Deposit route's capture folder.

The provenance label `<root>/Rules/<id>` names the rule a correction is against; a hand placement from Determine has no rule. Moves on protected labels are never read as corrections.

[Back to contents](#contents)

### 4.2 The corrections log

The corrections log is a JSON Lines file in the declaring repository, at the configured `corrections` path: one object per line, appended and never rewritten. Each line carries exactly these fields and no others, so no message body, snippet or address beyond the sender's domain is ever kept:

| Field | Meaning |
| --- | --- |
| `date` | When the move was seen, as an ISO 8601 date |
| `mailbox` | A declared mailbox |
| `kind` | `relabel`, `undelete`, `placed` or `capture` |
| `rule` | The rule id the move corrects, or `null` for a hand placement from Determine |
| `sender_domain` | The sender's domain |
| `subject_pattern` | The subject with names, numbers and dates generalised |
| `from` | The outcome before the move, or `null` |
| `to` | The outcome after the move |

```json
{"date":"2026-11-08","mailbox":"gmail","kind":"relabel","rule":"R07","sender_domain":"substack.com","subject_pattern":"Weekly digest #<n>","from":"Digest","to":"Decide"}
```

[Back to contents](#contents)

### 4.3 Drafting rules

- **Three agreeing corrections draft a change.** When three corrections agree on a sender domain or subject pattern, the learning run drafts a new rule, an exception to an existing one, or a move from automatic to suggest.
- **A draft goes to Kris as a query** with its dry-run count and confidence, through the coordinating work's queries, and goes into the rules file with `origin = "learnt"` only on his answer, which its `approval` cites (GD12-LEARN a).
- **A rule whose corrections pass 5% of what it placed drops back to suggest** on its own, since that only makes it more careful; the run reports the change.
- **Determine shrinking week on week** is the measure that the rules are learning, and each learning run reports it.

[Back to contents](#contents)

### 4.4 Stated rules

Kris may state a rule in plain words, such as "mail from the parish goes to Digest". The rule is logged as a `D12-RULE` decision line in his words in the coordinating work's change document, given a rule id, dry-run against the live mailbox and its count shown back. His statement is the approval: it goes into the rules file with `origin = "stated"` and that line as its `approval` once the count matches what he expects. A stated rule outranks a learnt one.

[Back to contents](#contents)
