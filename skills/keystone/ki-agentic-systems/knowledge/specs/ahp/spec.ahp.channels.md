---
id: spec.ahp.channels
title: Channels and subscriptions, in the Agent Host Protocol
type: specification
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, SPEC-CARDS, drafted as a proposal for the owner's review (12 November 2026), corrected from the blind review of 18 November 2026 and agreed against AHP 1.1.0, SPEC-AHP a (19 November 2026)
links:
  spec.ahp:
    predicate: dcterms:isPartOf
  industry.channel:
    predicate: skos:relatedMatch
---

# Channels and subscriptions, in the Agent Host Protocol

Channels keep every client of an agent host in step, so each sees the same state and can recover it after a break. They are the core of the [Agent Host Protocol][spec.ahp] ([what is AHP][M8]).

AHP defines a channel as "a sequence of messages that is identified by a URI", and every channel has a state, empty for some, as the telemetry channel's, `ahp-otlp:`, always is. Among them are the root, `ahp-root://`, and each session, chat, terminal and changeset ([channels and subscriptions][AHP3]). A [client][spec.ahp.client] subscribes to a channel and receives a snapshot of its state, which the agent host may omit where the state is empty, then the actions that change it, numbered in order by the [agent host][spec.ahp.agent-host], and notifications for events the state does not keep. Every request and notification names its channel, so it can be routed by method and channel alone. The root channel's state holds the agent host's agents, terminals and configuration; sessions are listed by a request, `listSessions` ([channels and subscriptions][AHP3]).

An AHP channel carries the state of one resource to its subscribers. It is not a [channel][industry.channel] in this graph's sense, something outside a session pushing events into it while it runs; that card names AHP's as a sense of its own.

[spec.ahp]: ./spec.ahp.md
[spec.ahp.client]: ./spec.ahp.client.md
[spec.ahp.agent-host]: ./spec.ahp.agent-host.md
[industry.channel]: ../../industry/industry.channel.md
[M8]: https://microsoft.github.io/agent-host-protocol/guide/what-is-ahp.html
[AHP3]: https://microsoft.github.io/agent-host-protocol/specification/subscriptions.html
