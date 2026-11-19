# Local backpack development

This is the contributor workflow for making an installed canonical backpack follow a local checkout. Normal users should start with [Install and get started](https://knowledgeislands.info/guidance/using-ki/getting-started/).

## Prepare the user environment

Install the released `ki` executable, then bootstrap the detected agent runtimes:

```bash
brew install knowledgeislands/tap/ki
ki bootstrap
```

Bootstrap installs the verified canonical backpack and the core user skills. It does not declare repository governance.

## Enable the development checkout

From any directory, point `ki` at the physical backpack checkout:

```bash
ki dev local set /path/to/ki-agent-backpack
ki dev local on
```

The command validates the required `skills/`, `subagents/`, and `hooks/` roots before replacing the installed canonical payload with managed links to the checkout. It also refreshes configured user skills so the next agent session sees the local sources.

Confirm the active installation:

```bash
ki diag --full
ki doctor
```

Start a new agent session after changing skill activation or switching backpack source so the runtime re-scans its skill directories.

## Restore the verified backpack

When checkout-local development is complete, restore the verified canonical archive and refresh the user projections:

```bash
ki dev local off
ki doctor
```

`ki dev local off` preserves unfamiliar state and fails with recovery guidance rather than deleting an unproven installation.
