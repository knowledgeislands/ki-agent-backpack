---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:44:50Z
ki-status: in force
---

# Knowledge Islands Activity standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Collection](#41-collection)
  - [4.2 Frontmatter](#42-frontmatter)
  - [4.3 Home](#43-home)
  - [4.4 Realization](#44-realization)
  - [4.5 Recurring-work profile](#45-recurring-work-profile)
  - [4.6 Judgment](#46-judgment)

## 1. Introduction

This standard defines Activity notes: the operational record of intentional automation, scheduling, agentic behaviour, and recurring manual processes adopted by a Knowledge Islands base.

The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The Activity collection of a Knowledge Islands base and the notes it holds.

### 2.1 In scope

- The collection's location, configuration and index.
- An Activity note's frontmatter, home and theme.
- The realization values and their fields.
- The opt-in recurring-work profile's boundary.
- The judgment an Activity note and its index are held to.

[Back to contents](#contents)

### 2.2 Out of scope

- General note frontmatter such as tags and dates: `ki-repo-kb`.
- The recurring-work profile's exact fields, schedule eligibility and run lifecycle: `ki-work-recurring`.
- The Project registry an Activity's `project` key names: `ki-work`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Activity** | One intentional automation, schedule, agentic behaviour or recurring manual process a base has adopted, described by one note. **Standard:** this one, [1](#1-introduction) |
| **Activity collection** | The folder holding the Activity notes and their `Activities.md` index, `Admin/Operations/Activities/` by default. **Standard:** this one, [4.1](#41-collection) |
| **Regular work** | A territory's recurring work, `<territory>.regular`, the home of an Activity. **Standard:** this one, [4.3](#43-home) |
| **Realization** | The execution form an Activity takes, such as `slash-command` or `scheduled-task`. **Standard:** this one, [4.4](#44-realization) |
| **Recurring-work profile** | The nested `housekeeping` mapping by which an Activity opts into the recurring-work lifecycle. **Standard:** this one, [4.5](#45-recurring-work-profile) |

[Back to contents](#contents)

## 4. Rules

The collection, frontmatter, home, realization, recurring-work profile and judgment, part by part.

### 4.1 Collection

The default collection is `Admin/Operations/Activities/`. One note named `<Activity Name>.md` describes one behaviour, and `Activities.md` indexes the collection.

A base may declare a different relative collection path with `activities_dir` under `[skills.ki-repo-kb-activities]`. The path must remain beneath the base and must not traverse a symbolic link. The optional `harness` key names a harness root, absolute or relative to the base, used only to resolve declared skill names at `skills/<name>/SKILL.md`. These are the only recognized keys; AUDIT warns on unknown keys and leaves every sibling configuration table untouched.

When activity notes exist, `Activities.md` lists every note. A repository-standard Obsidian wikilink, with or without an alias, or a Markdown link satisfies index coverage; link-shaped text inside a fenced code block does not. CONFORM may safely create a missing index or append missing entries to a regular index file. It must not create the collection directory, replace a non-regular index entry, follow a symbolic link, or write directly; it prepares one proposal for the host.

[Back to contents](#contents)

### 4.2 Frontmatter

An activity note that carries frontmatter declares:

| Key           | Value                                  |
| ------------- | -------------------------------------- |
| `status`      | `active` \| `paused` \| `retired`      |
| `realization` | The execution form described below.    |
| `author`      | Who authored or adopted this activity. |

An active Activity may also name a `theme` and, for a Project's own recurring check, a `project`, as described under [Home](#43-home). The `ki-repo-kb` skill owns general note frontmatter such as tags and dates.

[Back to contents](#contents)

### 4.3 Home

Under the [Work Process](https://github.com/knowledgeislands/ki-principal/blob/main/Pillars/Philosophy/Model/Processes/Work%20Process/Work%20Process.md), an Activity's home is its territory's regular work, `<territory>.regular`: the territory's recurring work, defined here in the Activity notes. An Activity needs no key to say so. A Project's own recurring check, needed only while the Project runs, stays with that Project instead and names it in a top-level `project` key, a slug in the territory's [Project registry](../../../keystone/ki-work/references/standard-project-registry.md).

An Activity may carry an optional top-level `theme`, a territory theme slug. A theme is a label, not a home: it holds no work. An Activity with a housekeeping profile may name the theme in the profile instead, which its runs inherit; when both are present they agree. The former `initiative`, at either place, is the thread-model name for `theme`: AUDIT warns on it until 7 November 2026 and fails it from that day, or earlier once a scan finds no residue, under Kris's THEME-CLOSE decision of 25 October 2026. Two themes that disagree still warn. Paused and retired Activities are not checked.

Regular work is self-coordinating. An occurrence starts by its schedule or by whoever needs it, with no coordinating session; the territory's state of play may discuss regular work but does not necessarily dispatch it. The link points upwards only: neither a theme page nor a Project note lists its Activities.

[Back to contents](#contents)

### 4.4 Realization

The known realization values are:

| Value            | Meaning                                                       |
| ---------------- | ------------------------------------------------------------- |
| `slash-command`  | A runtime skill named by the `skill` field.                   |
| `scheduled-task` | An external scheduled job named by the `schedule_name` field. |
| `conversational` | A recurring conversational pattern invoked by the user.       |
| `manual`         | A human-run process documented for operational completeness.  |
| `workflow`       | A multi-step automated workflow.                              |

Additional values are allowed. AUDIT reports them as `INFO` so a new execution environment can be documented without first changing this skill.

A `slash-command` activity declares `skill: <skill-name>`. When a harness is configured, AUDIT verifies `skills/<skill-name>/SKILL.md` exists beneath it.

A `scheduled-task` activity declares `schedule_name` and may declare a free-text `schedule_env`. AUDIT can check that the name is present but cannot verify external registration, so it reports the registration check as `INFO`.

[Back to contents](#contents)

### 4.5 Recurring-work profile

An Activity may opt into the recurring-work lifecycle with a nested `housekeeping` mapping. Declare and activate `ki-work-recurring` when using it; that skill owns the exact profile fields, schedule eligibility, stable housekeeping ID, single active run, and approved successful-run reconciliation. The Activity retains its normal metadata, realization, index entry, and narrative. Its `id`, `title`, and `status` are top-level; scheduling fields inside `housekeeping` use snake_case. There is no second status or copied definition in `Streams/Housekeeping/`.

An Activity without this mapping remains an ordinary Activity, even when externally scheduled. Do not force every conversational habit, automation, or report into a roadmap lifecycle. Recurring work that needs governed finite runs uses the profile; each run lives in `Streams/Roadmap/` and links back to the Activity's stable ID. A retired recurring Activity retains rationale and evidence but must have no active-run reservation; explicit disposition precedes retirement.

The repository definition explains the procedure, required capabilities, authority, evidence destination, and how a person or replacement execution environment can continue. A scheduler is a replaceable realization, not the durable owner of the behaviour or the only place its outcomes are recorded. Its schedule registration is verified separately; naming a task does not prove it exists or grant activation authority.

[Back to contents](#contents)

### 4.6 Judgment

Each activity note explains what the activity does, when it runs, and why it was adopted. Retired activities retain a rationale. Slash-command activities point readers to useful skill documentation or trigger guidance. Scheduled-task notes state their cadence and expected outcome.

The index is current, ordered, and useful to a reader, including status and realization information rather than serving as a bare mechanically complete list.

[Back to contents](#contents)
