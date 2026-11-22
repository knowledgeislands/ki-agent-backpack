---
id: industry.environment
title: Execution environment
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, ENVIRONMENT a) (12 November 2026), revised by ki.summit change 21, EXEC-ENV a), EXEC-ENV-VALUES and EXEC-ENV-NAMES a) (21 November 2026)
links:
  industry.machine:
    predicate: dcterms:isPartOf
  industry.agent:
    predicate: skos:related
  industry.session:
    predicate: skos:related
---

# Execution environment

An execution environment, or environment for short, sets the bounds of an [agent's][industry.agent] work: where its actions run, and what they can reach.

An execution environment is the bounded place where a [session's][industry.session] tool calls actually run: the files, processes, network and credentials they can reach. It has a location and an isolation. It may be provided by the agent host, the [agent harness][industry.agent-harness] or the vendor, but it is none of them. A worktree is a working folder, not an environment.

Its location is where it runs: a [machine][industry.machine], physical or virtual, or a vendor's cloud, on machines you cannot identify, as Claude Code on the web and Codex Cloud run. Its isolation is how far it is fenced off there: from none, a session running directly on a machine within what its configuration allows, to a harness's sandbox or a container. Location and isolation are two properties, never one value; "host environment" is not used (HOST-SENSES).

## Our conventions

The machine, the execution environment and the agent host are recorded apart, each a field of its own that can be filtered on by itself, never folded into one compound value (EXEC-ENV-VALUES): the Cairn store's roster records an agent [actor's][system.actor] machine as `ki-rig`, its execution environment as `ki-environment` and its agent host as `ki-host`. A compact display may show them together, while the stored values stay separate.

`ki-environment` records isolation only, one of four values (EXEC-ENV-NAMES):

- `none`: checked, and running directly on the machine within what its configuration allows;
- `harness-sandbox`: the agent harness's own sandbox;
- `container`: a container;
- `vendor-sandbox`: a sandbox the vendor provides, as for a cloud session.

`null` means unknown, never `none`. Location stays in `ki-rig`: the machine's name, a virtual machine counting as a machine, or `cloud` for a vendor's machines that cannot be identified. "Remote" is not stored, since it depends on where one looks from. The compact display shows the machine, then the environment unless it is `none`, then the agent host, as `sol · orca` or `sol · container · orca`.

Orca's own "environment", a paired remote Orca runtime, is not an execution environment; [its card][orca.environment] relates it to this one.

## Next

A [machine][industry.machine] is the computer an execution environment runs on.

[industry.agent]: ./industry.agent.md
[industry.session]: ./industry.session.md
[industry.agent-harness]: ./industry.agent-harness.md
[industry.machine]: ./industry.machine.md
[system.actor]: ../system/system.actor.md
[orca.environment]: ../vendors/orca/orca.environment.md
