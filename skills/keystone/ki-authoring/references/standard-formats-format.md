---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T00:55:00Z
ki-status: in force
---

# Format format

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Document types](#41-document-types)
  - [4.2 Front matter](#42-front-matter)
  - [4.3 Version refs](#43-version-refs)
  - [4.4 Shape](#44-shape)
  - [4.5 Naming](#45-naming)
  - [4.6 What each format says](#46-what-each-format-says)
  - [4.7 Validation](#47-validation)

## 1. Introduction

What every type of document shares, and what the format standard for each type must say. Every format standard is an instance of this one, this one included. The decisions behind these rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The parts every type of document shares.

### 2.1 In scope

- Document types and their format standards.
- The front matter every document carries, the `ki-` prefix on the fields KI defines, and version refs.
- The shape every document shares.
- How documents are named.
- What each format standard says, and what a validator of any format checks.

[Back to contents](#contents)

### 2.2 Out of scope

- What is particular to one type: its own format standard says it.
- Where a document lives: each owner says.
- The formats of a skill's own files: `SKILL.md`, a mode file, `exemplars.md` and a generated `rubric.md` follow `ki-skills`' skill, mode, exemplars and rubric formats, which are instances of this one and are checked by its rubric.
- A knowledge graph's cards, whose own `type` names their card type and keeps its name.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Document type** | The kind of a document, such as standard, change or sources: the same word in its `ki-document-type` field and its file name. **Standard:** this one, [4.1](#41-document-types) |
| **Format standard** | The standard that sets how one type of document looks, named `standard-formats-<type>.md`. **Standard:** this one, [4.1](#41-document-types) |
| **Front matter** | The YAML block at the top of a document, holding what is about it rather than in it. **Standard:** this one, [4.2](#42-front-matter) |
| **KI field** | A front matter field KI defines, written with the `ki-` prefix, as against a field meant for another tool, such as `title`. **Standard:** this one, [4.2](#42-front-matter) |
| **Version ref** | What follows an `@`: an ISO 8601 date and time in UTC to the second, such as `2026-11-09T08:12:34Z`, or a Git ref, such as a commit hash. **Standard:** this one, [4.3](#43-version-refs) |
| **Change of substance** | An edit that alters what a document says, as against a mechanical one such as reformatting or renaming a field. **Standard:** this one, [4.2](#42-front-matter) |
| **Mechanical commit** | A commit that changes no document's substance, marked with the `Revised-Unchanged: true` trailer. **Standard:** this one, [4.2](#42-front-matter) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Document types

- **Each type has one word,** such as `standard`, `change` or `sources`, used in its `ki-document-type` field and its file name.
- **Each type has one format standard,** `standard-formats-<type>.md`, in `ki-authoring`'s `references/`, but for a skill's own files, whose formats sit in `ki-skills`' `references/`, beside the rubric that checks them.
- **A format standard not yet agreed** stands at its final path as a draft, with `ki-status: draft`, so that documents of its type have something to name; the agreed standard later replaces it at the same path.

[Back to contents](#contents)

### 4.2 Front matter

Every document opens with front matter, then its title. Every type carries at least:

```yaml
---
ki-document-type: <type>@<version ref of standard-formats-<type>.md>
ki-revised: 2026-11-17T00:55:00Z
---
```

- **`ki-document-type`** always names the kind of document a file is, and adds `@` and a version when that kind has a format standard: here, the format standard the document follows, at the version it follows. There is no separate format field. A document whose kind has no format standard, such as a resource's `ki-document-type: actor`, names its kind alone, and a reader takes the part before `@` as the kind, so the field has one sense everywhere. A knowledge graph's card keeps its own `type`, which names its card type, such as `type: term`.
- **`ki-revised`** is the date and time, in UTC to the second, of the document's last change of substance. It must be accurate: it moves with every change of substance, and not with a mechanical edit. A date survives a repository's history being squashed, where a commit would not.
- **A mechanical commit** says so with a trailer of its own, `Revised-Unchanged: true`, in its message's last paragraph beside any other trailer, such as `Co-Authored-By`. A commit that sweeps a field's name, reformats or regenerates carries it and leaves every `ki-revised` where it was; a commit that changes any document's substance in the same commit does not carry it, so a sweep goes in a commit of its own.
- **The title** is the document's name alone; when it stands is in `ki-revised`.
- **Every front matter field KI defines takes the `ki-` prefix,** as `ki-document-type`, `ki-revised`, `ki-status`, `ki-id`, `ki-inputs` and `ki-outputs`, so that no other tool reads or misreads it. Each format standard names its fields with the prefix.
- **A field meant for another tool keeps its name,** as `title`, which renderers and indexes read, and a skill's `SKILL.md` fields, `name`, `description` and the Agent Skills specification's others. A knowledge graph's card keeps its own `type`, and the `<kind>:` that opens a typed id's value, as in `actor:wayland`, is part of the value, not a field, and is unchanged.
- **Only top-level fields take it.** The keys nested inside a KI field's value, such as a list item's `id` and `route`, are already inside its namespace and keep their names.
- **Fields written without it.** Until every file is swept, a reader takes a KI field written without the prefix, as the older `type` and `revised`, under its `ki-` name, and the check warns on it, never failing. The sweep renames the fields in a mechanical commit and leaves `ki-revised` where it was.

[Back to contents](#contents)

### 4.3 Version refs

- **Times or commits.** Either kind of version ref may be used where it fits. A commit is exact but has to be checked against its repository; a time is simple and usually enough, and is given to the second, since minutes can collide.
- **Out of date.** A document whose `ki-document-type` names an older version of its format standard than the current one is out of date. It need not be revised at once: when it is next changed, it is brought into line and its `ki-document-type` moves up.

[Back to contents](#contents)

### 4.4 Shape

1. **Contents** after the title, linking every section and subsection.
2. **Sections are numbered,** and subsections numbered `4.1`, `4.1.1`, so their level shows in any viewer.
3. **Each section ends** with a **Back to contents** link.
4. **A section with subsections** holds only a short lead-in before them: no table or list.

A format standard sets its type's sections; these four hold for every type.

[Back to contents](#contents)

### 4.5 Naming

Every type names its files by one of two patterns:

- **Suffix:** `[<name>.]<type>.md`, such as `change-format.change.md`, or `change.md` alone.
- **Prefix:** `<type>[-<name>].md`, such as `standard-markdown.md`.

A name is in kebab case, such as `formats-change`. A pattern is a default: a place with good reason to differ may, and says why.

[Back to contents](#contents)

### 4.6 What each format says

A format standard says, for its type:

1. its type word, and which naming pattern it uses;
2. its front matter, adding to `ki-document-type` and `ki-revised`, each field it adds taking the `ki-` prefix;
3. its sections and their order;
4. anything it adds to or replaces from this standard;
5. what a validator checks beyond [4.7](#47-validation).

A format standard is itself a standard, so it follows the standard format as well as this one.

[Back to contents](#contents)

### 4.7 Validation

A validator of any format checks:

1. **Front matter:** `ki-document-type` and `ki-revised` are present, `ki-document-type` names a format standard that exists, and `ki-revised` is no earlier than the file's last Git commit of substance, `git log -1 --invert-grep --grep='^Revised-Unchanged: true$' --format=%cI -- <file>`, by more than a few minutes, since `ki-revised` is often set just before committing. A `ki-revised` behind its commit warns and never fails, since an unmarked mechanical edit rightly leaves it where it is; a file not in Git, in a repository with no commits yet, or with no `ki-revised`, is not compared.
2. **The prefix:** every top-level field but `title` carries `ki-`; one written without it is read under its `ki-` name and warned on.
3. **Format version:** the version ref in `ki-document-type` is the current one; if not, the document is reported out of date.
4. **Name:** the file name follows its format's pattern, or the place says why it differs.
5. **Shape:** Contents, numbered sections and Back to contents links are present.

These checks, and each format's own, are `ki-authoring`'s rubric items in its FMT family, run by `ki repo audit --skill ki-authoring` over every Markdown document in a repository whose `ki-document-type`, or the older `type`, names a format at a version: the first three mechanically, as warnings, the last commits read with one `git log` for many files, and the name, the shape and each format's own checks by judgement, unless a format in force runs its own checks mechanically, as the record format's FMT-record does, failing. A skill's own files are passed over here: `ki-skills`' SKILL-FMT items check them.

[Back to contents](#contents)
