# Bootstrap exemplars

These examples illustrate the scope boundaries in [the bootstrap standard](standard-bootstrap.md). For the exact options supported by an installed release, use `ki --help`.

## First-time setup

```sh
ki bootstrap
ki doctor
ki diag --full
```

The first command detects supported agent runtimes, establishes the user configuration, installs the canonical backpack, and activates the core user skills, `ki-keystone` and `ki-work`. `ki-delegation` remains an opt-in standard for durable delegation packets. `ki doctor` checks the resulting environment; `ki diag --full` reports the effective configuration, backpack inventory, repository, and XDG paths.

Running `ki bootstrap` again leaves correctly managed state in place. Use the refresh form after adding or removing a supported agent runtime or after reconciling installed state:

```sh
ki bootstrap --refresh
```

## Additional compatible backpack

```sh
ki harness install example/operations
ki harness list
ki harness info example/operations
```

Installation adds verified capability sources to the user-owned backpack set. It does not make every skill in that backpack discoverable and does not change a repository.

When exactly one installed backpack provides `example-engineering`, activate it for the configured user runtimes:

```sh
ki skill add example-engineering
```

Remove that activation without uninstalling its backpack:

```sh
ki skill remove example-engineering
```

## Repository activation and maintenance

Given an existing KI repository whose `.ki.toml` does not yet declare `ki-work-roadmap`, add the installed skill at repository scope:

```sh
ki repo skill add ki-work-roadmap --repo .
```

The command adds the `[skills.ki-work-roadmap]` declaration and managed runtime-discovery links only for that repository. It does not add the skill to user scope.

Native repository maintenance then resolves the repository's declared skills from verified installed backpacks:

```sh
ki repo educate --repo .
ki repo audit --repo .
ki repo conform --repo . --dry-run
```

Remove the repository declaration and its managed repository links without changing user activation:

```sh
ki repo skill remove ki-work-roadmap --repo .
```

## Canonical backpack development

Use a checkout only through the explicit development switch:

```sh
ki dev local set knowledgeislands/ki-agent-backpack /absolute/path/to/ki-agent-backpack
ki dev local on knowledgeislands/ki-agent-backpack
ki repo audit --repo /absolute/path/to/governed-repository
ki dev local off knowledgeislands/ki-agent-backpack
```

The first command validates the checkout before switching the canonical installed payload. The last restores the verified archive; proximity to a checkout never changes resolution by itself.
