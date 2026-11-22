---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T18:32:15Z
ki-status: in force
---

# claude.ai MCP connector control standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 The one thing to know first](#41-the-one-thing-to-know-first)
  - [4.2 The layers](#42-the-layers)
  - [4.3 Per-conversation — scope the surface per task](#43-per-conversation--scope-the-surface-per-task)
  - [4.4 Per-tool permission mode — the fatigue-vs-safety dial](#44-per-tool-permission-mode--the-fatigue-vs-safety-dial)
  - [4.5 Account connectors — the only install point](#45-account-connectors--the-only-install-point)
  - [4.6 Organization / admin — governance for Team & Enterprise](#46-organization--admin--governance-for-team--enterprise)
  - [4.7 How claude.ai connectors surface in Claude Code](#47-how-claudeai-connectors-surface-in-claude-code)
    - [4.7.1 Three mechanisms — provide vs filter](#471-three-mechanisms--provide-vs-filter)
    - [4.7.2 Evaluation order (per server, before it loads)](#472-evaluation-order-per-server-before-it-loads)
    - [4.7.3 The claude.ai-specific interaction](#473-the-claudeai-specific-interaction)
  - [4.8 Picking a lever](#48-picking-a-lever)

## 1. Introduction

How MCP connectors added through **claude.ai** are governed—the levers, where each one persists, and how they interact with Claude Code. This is the claude.ai leg of the [Claude binding standard](standard-claude-binding.md#43-claudeai-web); it settles that standard's manual-only verdict for this surface. The vendor documentation it rests on is in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The levers that control MCP connectors added through claude.ai, and how they reach Claude Code.

### 2.1 In scope

- The per-conversation, per-tool, account and organization layers, and where each persists.
- Claude Code's managed settings that provide or filter claude.ai connectors.
- Which lever to pick for which need.

[Back to contents](#contents)

### 2.2 Out of scope

- File-editable surfaces: the [Claude binding standard](standard-claude-binding.md); the canonical source: `ki-env-binding`.
- Any conform action: every lever here is manual or admin-side, and report-only.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **claude.ai connector** | An MCP connector installed at the account or organization level in the claude.ai web interface. **Standard:** this one, [4.1](#41-the-one-thing-to-know-first) |
| **Managed settings** | Claude Code's admin-controlled on-disk settings, which user or project settings cannot override. **Standard:** this one, [4.7](#47-how-claudeai-connectors-surface-in-claude-code) |
| **Provide versus filter** | `managed-mcp.json` provides the servers Claude Code loads in place of users' own, and `managedMcpServers` provides remote servers alongside them; `allowedMcpServers` and `deniedMcpServers` filter servers already configured. **Standard:** this one, [4.7.1](#471-three-mechanisms--provide-vs-filter) |

[Back to contents](#contents)

## 4. Rules

What to know first and the layers, each lever in turn, how connectors land in Claude Code, and which lever to pick.

### 4.1 The one thing to know first

claude.ai connectors are **installed and managed only in the claude.ai web interface**, at the account or organization level — not from within any chat, and not from a Claude Code session. A conversation can only _enable or disable_ what the account already carries; it cannot add or remove a connector. Claude Code, likewise, cannot install a claude.ai connector — it can only _filter_ which of them it exposes (§4.7).

So "control" is really four layers at three different persistence scopes.

[Back to contents](#contents)

### 4.2 The layers

| Layer | Where | Scope | Persists beyond one chat? |
| --- | --- | --- | --- |
| Per-conversation toggles | Composer **+** / `/` → Connectors | This chat only | No |
| Per-tool permission mode | Organization settings → Connectors → Tools (Always allow / Needs approval / Blocked) | Every member; members cannot override it | Yes |
| Account connectors | Customize → Connectors ([claude.ai/customize/connectors](https://claude.ai/customize/connectors)) | Whole account, all clients | Yes |
| Org admin governance | Admin Console → Policies; Organization settings → Connectors | Every member | Yes |

Only the first row is "just this session." Everything that is actual _control_ — what is installed, what is blocked, what an org may use — lives in persistent state (account UI, admin console, or on-disk config), never in a single conversation.

[Back to contents](#contents)

### 4.3 Per-conversation — scope the surface per task

Open the tools menu (composer **+**, or `/` → **Connectors**) to toggle which connectors and which individual tools are live for that chat. This is how a crowded connector set is kept from flooding context: enable only what the task needs. Resets each conversation.

**Tool access** in the same menu chooses **Auto**, the default, or **On demand**, which the vendor suggests once ten or more connectors are active.

Watch the tool-count ceiling — connecting many connectors (≈10+) on one account can make chats fail immediately by exceeding Claude's per-request tool limit.† Keep the enabled set lean at the account level rather than relying on per-chat toggles to rescue an overloaded account.

† The vendor states no hard cap; it suggests On demand tool access at ten or more active connectors. Treat ≈10 as a caution threshold, not a spec.

[Back to contents](#contents)

### 4.4 Per-tool permission mode — the fatigue-vs-safety dial

This is an organisation lever. An organisation's Owners set each connector tool to **Always allow**, **Needs approval** or **Blocked** under Organization settings → Connectors → Tools. The setting applies to the whole organisation, and no member can override it. The vendor documents no default mode.

An individual has two lighter levers: the **Allow always** choice in a tool's approval prompt, and the **Search and tools** menu, which turns tools on or off for the conversation (§4.3). Claude Code enforces the organisation's **Blocked** setting, so a tool blocked here stays blocked from a Claude Code session too.

[Back to contents](#contents)

### 4.5 Account connectors — the only install point

Customize → Connectors ([claude.ai/customize/connectors](https://claude.ai/customize/connectors)) adds or removes Directory connectors and custom remote-MCP connectors. A custom connector takes a name and a remote MCP server URL, an authentication choice (Sign in now, Sign in when needed or No sign in), an OAuth client (Claude's published identity, recommended; automatic registration; or the server's own client ID and secret) and optional request headers; it cannot be edited, only removed and added again. Claude reaches it from Anthropic's cloud, so the server must be publicly reachable on port 443. A connector enabled here appears across web, Desktop, Cowork and mobile for that account. Free accounts are limited to one custom connector.

[Back to contents](#contents)

### 4.6 Organization / admin — governance for Team & Enterprise

The strong levers are admin-side:

- **Organization settings → Connectors** — an Owner or Primary Owner (on Enterprise, also a custom role with Manage access to Libraries, for custom connectors) adds an org connector (Browse connectors → **Add to your team**) or a custom remote MCP URL; members then authenticate individually, unless the connector carries a shared credential, which gives everyone that credential's access.
- **Admin Console → Policies** — push MCP allowlists and tool permissions to every member with no MDM. Server-managed settings require a direct connection to `api.anthropic.com` and are **bypassed** when traffic is routed through a gateway via `ANTHROPIC_BASE_URL`.
- **Enterprise-managed auth** — authorize a connector once for the organization so members inherit access on first login: IdP-managed (generally available, Okta only, SSO on both sides) or Claude-issued (beta, no IdP). Set it per connector under Organization settings → Connectors → Configuration → Managed authorization, and per role under Organization settings → Roles; an owner can require a connector to connect only through managed authorization (Team/Enterprise).
- **Verified-domain restriction** — Enterprise Owners/Primary Owners can prevent services on their verified domains from being connected to accounts _outside_ the organization.

[Back to contents](#contents)

### 4.7 How claude.ai connectors surface in Claude Code

This is the leg that matters most for the backpack: Claude Code carries its own admin-controlled MCP governance, and claude.ai connectors fall under it. Everything here is written to on-disk managed settings, so it outlives any session and **cannot be overridden by user or project settings**.

[Back to contents](#contents)

#### 4.7.1 Three mechanisms — provide vs filter

Two mechanisms provide servers and one filters them.

- **`managed-mcp.json` provides servers in place of users' own.** It is the admin's exclusive-control deployment: present ⇒ every user-added server and claude.ai connector stops loading, and Claude Code loads the servers it lists. Its servers skip the allowlist, unless they use `${VAR}` expansion outside `env`. `{"mcpServers": {}}` (empty map) stops user-added servers and claude.ai connectors, but it does **not** disable MCP entirely: servers provided through `managedMcpServers`, in-process servers (the desktop app's connectors, VS Code's), mod tools, and Claude in Chrome where it is allowed still load. It is a standalone file at an OS path only an admin can write, delivered by MDM/Jamf/GPO/Intune:

  | Platform    | Path                                                       |
  | ----------- | ---------------------------------------------------------- |
  | macOS       | `/Library/Application Support/ClaudeCode/managed-mcp.json` |
  | Linux / WSL | `/etc/claude-code/managed-mcp.json`                        |
  | Windows     | `C:\Program Files\ClaudeCode\managed-mcp.json`             |

  Its shape is the same `mcpServers` map as a project `.mcp.json` (`http`/`sse` with `url`, or `stdio` with `command`/`args`/`env`). Any user on the machine can read it, so **never put credentials in `env`** — use `${VAR}` expansion, OAuth/per-user headers, or `headersHelper`.

- **`managedMcpServers` provides remote servers alongside users' own** (v2.1.259+). A managed-settings key, it adds remote `https` servers without suppressing anything, takes precedence over a same-named server in every other scope, and skips the allowlist.

- **`allowedMcpServers` / `deniedMcpServers` filter** whatever was already configured (by a user or a plugin; `managed-mcp.json` servers only where they use `${VAR}` outside `env`). They are **not a registry** — a server must already exist to be evaluated.

[Back to contents](#contents)

#### 4.7.2 Evaluation order (per server, before it loads)

Merge both lists from every settings source, then: (1) **denylist wins** — a match by `serverUrl`, `serverCommand`, or `serverName` is blocked and nothing overrides it; (2) **allowlist** — if `allowedMcpServers` is unset anywhere, the server loads; if it is set, the server must match.

Four sharp edges:

- **Unset ≠ empty array.** `allowedMcpServers` unset = all allowed; `[]` = _nothing_ allowed; populated = only matches. Easy footgun.
- **`serverName` is not a security control** — it is the user-assigned label, so a user can name any server `github`. For enforcement use `serverUrl` (supports `*` wildcards; host match is case-insensitive, path case-sensitive) or `serverCommand` (every argument matched exactly, in order). In `allowedMcpServers`, `serverName` is limited to letters, numbers, hyphens, underscores; in `deniedMcpServers` it accepts any non-empty string without leading or trailing whitespace, so a claude.ai connector can be blocked by display name — e.g. `{ "serverName": "claude.ai Slack" }` — but a rename, or a `(N)` suffix on a colliding name, breaks it, so prefer `serverUrl`.
- **`allowManagedMcpServersOnly: true`** makes only the managed allowlist authoritative (user/project allowlists ignored); the **denylist still merges from all sources**, so a user can always block a server for themselves.
- **Ports and name fallbacks.** A `serverUrl` hostname written in full matches only the scheme's default port; one with `*` matches every port, so `https://staging.example.com/*` does not deny `:8443`. In the allowlist a `serverName` match counts only when there are no `serverUrl` (remote) or `serverCommand` (stdio) entries.

[Back to contents](#contents)

#### 4.7.3 The claude.ai-specific interaction

- **Suppression by default** — deploying `managed-mcp.json` _suppresses claude.ai connectors_, including ones an admin configured for the org in the claude.ai console.
- **`allowAllClaudeAiMcps: true`** (v2.1.149+, admin-controlled tiers only) reloads the claude.ai connectors alongside the managed set. Allow/deny still apply, so specific connectors can still be blocked; it affects _only_ claude.ai connectors — plugin-provided servers stay suppressed.
- **`disableClaudeAiConnectors`** turns claude.ai connectors off entirely.
- **`forceRemoteSettingsRefresh`** makes enforcement fail-closed — Claude Code refuses to start if managed settings cannot be fetched.

This managed-settings surface is precisely what makes claude.ai connectors governable _from the Claude Code side_, independent of the account/org levers in §4.6.

[Back to contents](#contents)

### 4.8 Picking a lever

- **Individual, day to day** — per-chat tools menu (§4.3) and the Allow always prompt (§4.4).
- **Individual, durable** — prune the account connector set (§4.5); fewer connectors beats more toggling.
- **Org governance** — per-tool permission modes (§4.4), admin console allowlist and/or Enterprise-managed auth (§4.6).
- **Governing how they land in Claude Code** — `allowedMcpServers` / `deniedMcpServers` and the `managed-mcp.json` interaction (§4.7).

[Back to contents](#contents)
