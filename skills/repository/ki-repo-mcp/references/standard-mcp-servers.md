---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:50:00Z
ki-status: in force
---

# Workspace MCP Standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Project layout](#41-project-layout)
    - [4.1.1 Layer responsibilities](#411-layer-responsibilities)
  - [4.2 Config injection](#42-config-injection)
  - [4.3 Tool naming](#43-tool-naming)
  - [4.4 Access-level gate (annotation-driven)](#44-access-level-gate-annotation-driven)
  - [4.5 Audit logging](#45-audit-logging)
  - [4.6 Security invariants](#46-security-invariants)
  - [4.7 Bun vs Node](#47-bun-vs-node)
  - [4.8 package.json](#48-packagejson)
  - [4.9 tsconfig / vitest / biome](#49-tsconfig--vitest--biome)
  - [4.10 .env.example & env vars](#410-envexample--env-vars)
  - [4.11 Docs](#411-docs)
  - [4.12 Protocol profiles](#412-protocol-profiles)
  - [4.13 Spec conformance: tool results, errors & metadata](#413-spec-conformance-tool-results-errors--metadata)
  - [4.14 OAuth security (auth-server repos)](#414-oauth-security-auth-server-repos)

## 1. Introduction

The canonical shape shared by every stdio MCP server in the `knowledgeislands/` workspace: `mcp-git-audit`, `mcp-ki-kb-fs`, `mcp-gsuite`, `mcp-m365`, `mcp-housekeeping-claude`, `mcp-housekeeping-chatgpt`, `mcp-acquire-whatsapp`. This is the reference the `ki-repo-mcp` skill codifies and audits against. Where repos disagree, the majority shape is the standard; documented per-repo exceptions are noted inline. The sources and decisions behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The standard applies only when a repository declares `[skills.ki-repo-mcp]` in `.ki.toml`. The optional `profile` key selects a supported whole-file projection from the [MCP shared-code standard](standard-mcp-shared-code.md); an absent key leaves existing utilities repository-owned. The optional `tool-name-exceptions` key lists tool names a repository keeps outside [the naming form](#43-tool-naming), with a comment above it giving the reason (TOOL-EXCEPTION). Detected MCP-shaped source remains coverage evidence for `ki-repo`, not selection authority for this skill.

### 2.1 In scope

- The workspace convention: source layout, config injection, tool naming, the access-level gate, audit logging, security invariants, and the MCP delta on the common engineering layer, in [4.1](#41-project-layout) to [4.11](#411-docs).
- The rules traced to the MCP specification: protocol profiles, tool results and errors, and OAuth security, in [4.12](#412-protocol-profiles) to [4.14](#414-oauth-security-auth-server-repos).

[Back to contents](#contents)

### 2.2 Out of scope

- The common engineering layer the MCP delta sits on: `ki-engineering`.
- Repository settings and the presence of the universal root documents: `ki-repo`.
- Optional vendored utility profiles: the [MCP shared-code standard](standard-mcp-shared-code.md).
- Versioned source-release evidence and the installer hand-off: the [MCP source-distribution standard](standard-mcp-distribution.md).
- Enabling servers across client surfaces: the [cross-surface enablement standard](standard-cross-surface-enablement.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Workspace convention** | The in-house majority shape the sibling servers share on top of the MCP specification. **Standard:** this one, [4](#4-rules) |
| **Access level** | One of `read`, `write` and `destructive`, nesting in that order, derived from a tool's annotations and gated by `MCP_<APP>_ACCESS_LEVEL`. **Standard:** this one, [4.4](#44-access-level-gate-annotation-driven) |
| **MCP delta** | What an MCP repository adds on top of the common engineering standard. **Standard:** this one, [4.8](#48-packagejson) |
| **Protocol profile** | The dated MCP revision a server's package family selects: legacy 2025-11-25 or modern 2026-07-28. **Standard:** this one, [4.12](#412-protocol-profiles) |

[Back to contents](#contents)

## 4. Rules

The workspace convention, then the rules traced to the specification.

> **Spec vs house style.** Sections 4.1–4.11 are the in-house **workspace convention**; §4.12–4.14 trace directly to the official MCP specification and supported SDK profiles tracked in [the source list](sources.md). The runtime dependency selects the applicable dated profile, so a legacy server is not falsely measured against modern-only requirements. When citing a rule, know which layer it comes from — never present a workspace preference as a protocol "MUST". Mode REFRESH in the [SKILL](../SKILL.md) re-anchors §4.12–4.14 (and the annotation semantics in §4.4) to the current spec.

### 4.1 Project layout

```text
src/
├── config/index.ts        # loadConfig(env?) → Config; types/constants re-export
├── mcp-server/index.ts     # stdio wrapper (entry point) — coverage-excluded
├── tools/<group>/index.ts  # MCP tool definitions — coverage-excluded, no logic
├── main/<concern>/         # real implementation, library-usable; index.ts re-export per concern
├── cli/                    # OPTIONAL: cli.ts (bin, all printing) + index.ts (re-export)
└── utils/                  # cross-MCP helpers, kept in sync across siblings
```

Top-level `src/` folders are identical across all seven repos: `config`, `main`, `mcp-server`, `tools`, `utils`, plus `cli` where a human-runnable command exists, and per-domain extras (`auth-server` in gsuite/m365; `types.ts`).

[Back to contents](#contents)

#### 4.1.1 Layer responsibilities

- **`config/`** — the only place env is read. `loadConfig(env?) → Config`. No module-level config singleton; nothing reads env at import time.
- **`mcp-server/`** — wiring only: `loadConfig()` once, build the `AuditConfig` slice, then a per-connection server factory that sets `server.registerTool = makeAccessGatedRegister(...)` and calls `registerXxxTools(server, config)` per group. Pass that factory to `serveStdio`, as the modern profile in [§4.12](#412-protocol-profiles) sets, and log readiness on **stderr**; a server still on the legacy profile connects a `StdioServerTransport` instead.
- **`tools/`** — thin shells. Validate args with a `.strict()` zod schema, call a `main/` function (passing the needed config slice), map the result or thrown error to an MCP envelope via `jsonResult` / `errorResult`. `tools/**/index.ts` is coverage-excluded — **never put logic here**.
- **`main/`** — the real implementation, grouped by concern, mirroring the tool groups. Each concern dir has an `index.ts` re-export. Every entry point that touches FS/network/config takes its config (or the specific slice — `safeRoots`, `rootPath`, `NotionConfig`, …) as its **first argument**. No `console.*` here (return data; let the tool/CLI present it). Reusable concerns are surfaced via the package `exports` map.
- **`cli/`** (optional) — `cli.ts` is the `#!/usr/bin/env node` bin: it loads `.env` itself (Node parity with Bun), parses args, dispatches to the **same** `main/` functions the tools use, and does **all** human-readable printing. `cli/index.ts` re-exports the `main/` library surface. The CLI verb surface mirrors the MCP tool surface (same resource/verb structure). `cli.ts` is coverage-excluded; the `main/` functions it calls are not.
- **`utils/`** — cross-MCP helpers that take the **specific primitive** they need, not the whole `Config`. Common files kept in sync across siblings: `access-level.ts`, `annotations.ts`, `audit-log.ts`, and per-repo `paths`/ `results`/`errors`. Domain-specific utils (`git-exec.ts`, `mime.ts`, `html-sanitizer.ts`, `odata-helpers.ts`, `protected.ts`, `atomic-write.ts`) live here too but are not shared.

[Back to contents](#contents)

### 4.2 Config injection

- `loadConfig(env = process.env): Config` hydrates `process.env` from the package's `.env*` files via `process.loadEnvFile()` inside a try/catch (Bun has no such API and throws `TypeError`, which the catch swallows; Bun auto-loads `.env*` itself), then parses env into a plain, immutable `Config`. Resolve each file from the module's own location (`import.meta.url`), **not** `process.cwd()` — the compiled server is launched as `node /abs/path/dist/…` from an arbitrary cwd, so a `./`-relative path silently misses. Load highest precedence first — `.env.local`, then `.env.${NODE_ENV}` (when `NODE_ENV` is set), then `.env`; `loadEnvFile` never overwrites an already-set var, so the launcher's environment always wins over a file.
- **No module-level singleton.** Nothing reads `process.env` at import time outside `config/index.ts`. `main/` and `utils/` receive config as their first argument; tests build a literal `Config` and pass it (never mutate env, never call `loadConfig()` in a test — critical for repos that walk real user dirs).
- Universal exports from `config/index.ts`:
  - `type AccessLevel = 'read' | 'write' | 'destructive'`
  - `const ACCESS_LEVELS = ['read','write','destructive'] as const`
  - `const ACCESS_LEVEL_RANK = { read:1, write:2, destructive:3 }`
  - `type AuditLogMode = 'off' | 'writes' | 'all'`
  - `loadConfig`, plus parse helpers (`parseAccessLevel`, `parseAuditLogMode`, `parseNonNegativeInt`).
- `Config` always includes `accessLevel`, `auditLogMode`, `auditLogPath`, `auditLogMaxBytes` (default 10 MiB), `auditLogKeep` (default 5), plus domain fields (`safeRoots`, `rootPath`, `auth`, …).
- **Divergence:** gsuite/m365 export `SERVER_NAME`/`SERVER_VERSION` from `config/index.ts`; others hard-code the name in `mcp-server` or `audit-log.ts`.

[Back to contents](#contents)

### 4.3 Tool naming

`<app>_<resource>_<action>`, snake_case.

| Repo                     | `<app>` prefix(es)                        |
| ------------------------ | ----------------------------------------- |
| mcp-git-audit            | `git`                                     |
| mcp-ki-kb-fs             | `kb`                                      |
| mcp-gsuite               | `gsuite`                                  |
| mcp-m365                 | `m365`                                    |
| mcp-housekeeping-claude  | `claude_code`, `claude_desktop`, `vscode` |
| mcp-housekeeping-chatgpt | `chatgpt`, `codex`                        |
| mcp-acquire-whatsapp     | `whatsapp`                                |

- **Plural** resource for collection ops (`git_repos_scan`, `gsuite_email_messages_search`, `claude_code_sessions_list`).
- **Singular** for single-item ops (`claude_code_session_read`, `git_repo_commit`, `gsuite_email_message_get`).
- Metadata/lifecycle tools may drop the resource segment (`m365_about`, `gsuite_auth_start`).
- **Exception (KB-NAMES):** `mcp-ki-kb-fs`'s tools act on one implied resource, the Knowledge Base entry, so they drop the middle segment and take `<app>_<action>` (`kb_read`, `kb_list`, `kb_write`, `kb_search`), naming a resource only where another is meant (`kb_folder_create`). Accepted, because renaming them would break every client for no gain — do not flag.
- **Declared exceptions (TOOL-EXCEPTION):** a repository that keeps other names records them in `[skills.ki-repo-mcp]` as `tool-name-exceptions = [...]`, with a comment above the key giving the reason and an entry under Exceptions in its `AGENTS.md`; the audit then reports them as declared rather than as a finding, and flags a listed name no tool registers. `mcp-cairn` keeps `who`, `since` and `presence` this way, since renaming them would break every client (MCP-TRIM).
- The CLI verb surface mirrors the tool names.

The house scheme is a deliberate **subset** of what the spec permits: per [TOOLS](sources.md), names SHOULD be 1–128 chars from `[A-Za-z0-9_.-]`. Snake_case `<app>_<resource>_<action>` stays well inside that, so a conformant house name is always a conformant spec name — the constraint to enforce is the house scheme, not the looser spec one.

[Back to contents](#contents)

### 4.4 Access-level gate (annotation-driven)

`utils/access-level.ts` exports `makeAccessGatedRegister(server, accessLevel, audit)`. At registration it derives a level from each tool's `annotations` and registers the tool only if that level ≤ `config.accessLevel`:

- `readOnlyHint: true` → **read**
- `destructiveHint: true` → **destructive**
- explicit `readOnlyHint: false` AND `destructiveHint: false` → **write**
- anything else → **destructive** (fail-safe)

These four hints (`readOnlyHint`, `destructiveHint`, `idempotentHint`, `openWorldHint`) and their semantics are defined by the spec ([TOOLS](sources.md)) and have been stable since revision 2025-03-26 (confirmed current through 2025-11-25): `destructiveHint`/`idempotentHint` are only meaningful when `readOnlyHint` is false. The gate reads them as a risk vocabulary, exactly as the spec intends — the presets in `utils/annotations.ts` set `idempotentHint` (the `_IDEMPOTENT` variants) and `openWorldHint` (the `_REMOTE` variants) too, even though the gate keys only on read/destructive. The spec also warns clients to treat a server's annotations as **untrusted** — which is why the gate is the operator-controlled `MCP_<APP>_ACCESS_LEVEL`, not anything self-asserted at call time.

Levels nest `read ⊂ write ⊂ destructive`; env `MCP_<APP>_ACCESS_LEVEL` (default `read`). Every tool sets `annotations` to a preset from `utils/annotations.ts`: `READ_ONLY`, `WRITE`, `WRITE_IDEMPOTENT`, `WRITE_IDEMPOTENT_REMOTE`, `DESTRUCTIVE`, `DESTRUCTIVE_REMOTE`, `DESTRUCTIVE_ONESHOT`, plus `_REMOTE`/read variants per repo. `DESTRUCTIVE_ONESHOT` = effect depends on current FS/index state. Never bypass the register proxy; never derive the level from the tool name.

**Divergence (WA-DEFAULTS):** default access level is `read` everywhere except `mcp-acquire-whatsapp`, which defaults to `destructive`, and its audit log defaults to `off` rather than `writes`. A `read` default would unregister its six spool-writing acquisition tools, and a log on by default would keep a record of who the operator talks to. Its ADR-KI-MCP-WA-005 records both choices; the gate and the log are otherwise implemented as this standard sets — accepted, do not flag.

[Back to contents](#contents)

### 4.5 Audit logging

`utils/audit-log.ts` exports the `AuditConfig` slice (`{ mode, path, maxBytes, keep }`), an `AuditEvent` shape, `appendAuditEvent(audit, event)`, and `withAuditLog(audit, name, level, cb)`. `mcp-server` wires it through the gated register. Append-only JSONL with size-based rotation (`maxBytes` × `keep`). **Secrets never appear in the log** — tokens/PATs/Bearer values are redacted; only ids, arg shapes, and status/scope/expiry are recorded. The tool boundary returns errors via `errorResult` (not `throw`) so the audit wrapper sees the `isError` envelope.

[Back to contents](#contents)

### 4.6 Security invariants

1. **Path containment is two-layer.** Every user path goes through a lexical normalize (rejects `..`, Windows separators) **and** a realpath check of the deepest existing ancestor against the allowed root(s) (catches symlink escape), before any `fs.*` / `execFile` / URL call. Validate against the **full** set of roots, threaded in as the first arg of the `main/` function.
2. **Cached results are re-validated.** A tool that consumes a prior tool's output (e.g. a scan envelope) re-checks every path against the live config before acting — a cached result cannot widen the security boundary.
3. **Shell-out uses `execFile` with an argv array, never a shell string.** For git: `execFile('git', ['--no-optional-locks', '-C', repo, ...args], opts)` — `--no-optional-locks` is mandatory.
4. **Subprocess calls are time- and memory-bounded.** Local commands use a short timeout (~8s), network commands a longer one (~60s); both capped by `maxBuffer`. Network git sets `GIT_TERMINAL_PROMPT=0` so auth prompts fail fast instead of hanging. Never spawn an unbounded subprocess.
5. **Directory walks are depth-limited** and prune hidden dirs + `node_modules`.
6. **Identifier inputs that become argv/path tokens have tightened regex schemas** (remote/branch names, URLs, uuids, workspace/project/session ids): reject leading `-` (option injection), `..`, and path separators. Bare `z.string().min(1)` is not acceptable.
7. **Destructive / non-idempotent tools expose `dry_run`, default `true`**, and only mutate when explicitly `false`. A dry run, whether a tool's `dry_run` argument or an optional CLI's `--dry-run` flag, covers the complete operation: preparatory steps (staging into an index, temporary or cache writes, lock or token acquisition, remote calls with effects) are side-effect-free as well as the final mutation. Pass native `--dry-run` through where git offers it; a flag combination that cannot be previewed without effects is rejected before any effect.
8. **Risky multi-state flags are enums, not booleans** (e.g. force-push: `force_mode: 'none' | 'with_lease' | 'force'`).
9. **All zod schemas are `.strict()` with bounded numerics** (`.int().max(N)`, array/string length caps).
10. **Per-item failures don't crash a batch** — aggregate into an `errors[]`.
11. **Errors and audit logs never leak secrets or absolute paths** — surface caller input relative to the root. A 401 names a recovery path the caller can reach at its configured access level: where `*_auth_start` is registered at that level, name it; otherwise name the out-of-band remedy the repository ships (its `mcp-<name>-auth` bin or equivalent CLI) and the `MCP_<APP>_ACCESS_LEVEL` change that would expose the tool. A hint never names a tool that is not registered.

[Back to contents](#contents)

### 4.7 Bun vs Node

The Bun-install / Node-run split, the **`bun test` trap**, the `process.loadEnvFile()` parity call, and `NODE_ENV`-only-in-dev are the **common engineering standard**, owned by `ki-engineering`. Run `ki repo audit --skill ki-engineering --repo <repo>` for this layer—it is not re-checked here. The MCP-specific consequence: `ki:server:mcp:dev` / `:inspect` set `NODE_ENV=development`, so production ignores `.env.*` and config must come from the client's `env` block.

[Back to contents](#contents)

### 4.8 package.json

`type` / `packageManager` / `engines` / `files`, aggregate/scoped audit wiring, lifecycle scripts, and the `build`/cli-chmod rule are the **common engineering standard** (`ki-engineering`)—copy them from a healthy sibling and let its hosted audit check them; they are not re-checked here. This section is the **MCP delta** on top:

- **`main` / `bin`** — `"main": "dist/mcp-server/index.js"`; `"bin": { "mcp-<name>": "dist/mcp-server/index.js" }`, plus a second entry for a CLI (`"mcp-<name>-<verb>": "dist/cli/cli.js"`) or auth server (`"mcp-<name>-auth"`) where present.
- **`exports`** — always `"."` (→ `dist/mcp-server`), `"./config"`, and `"./package.json"`; plus one entry per reusable `main/<concern>`.
- **`ki:server:mcp:*` scripts** — `ki:server:mcp:dev` / `ki:server:mcp:inspect` (both `NODE_ENV=development bun …`) / `ki:server:mcp:start` (`bun run build && node dist/mcp-server/index.js`); OAuth repos with an `src/auth-server/` add the `ki:server:auth:*` pair (`ki:server:auth:dev` / `ki:server:auth:start`), and a repo with a CLI/smoke harness adds `ki:test:smoke`.
- **`ki:test:record` / `ki:test:replay` (record/replay harness).** A repo with mcporter integration recordings ships the pair together — `ki:test:record` captures a live run into `fixtures/recordings/`, `ki:test:replay` runs against the committed fixture. Defining one without the other is drift (checked by the hosted MCP rubric).
- **CI — the smoke delta.** The common CI shape (`jdx/mise-action` + one released `ki` + direct `ki repo audit --repo .`, with `bun run test` only for tests the audit does not itself run) is `ki-engineering`'s. An MCP repo with a smoke harness also includes `bun run ki:test:smoke` in `.github/workflows/ci.yml` — the MCP delta checked by the hosted MCP rubric. The hosted audit verifies this workflow wiring and reports the explicit smoke command; it does not launch repository scripts.
- **Typed client — `ki:generate:client` script.** Every repo ships a `ki:generate:client` script that emits a typed TypeScript client via `mcporter emit-ts <server-name> --mode client --out src/generated/client.ts --types-out src/generated/types.d.ts`. The emitted `src/generated/client.ts` is committed (it is the deliverable, not build output); it is excluded from vitest coverage. Run `bun run ki:generate:client` explicitly when refreshing it: the script is application code, not a host-owned `ki repo conform` repair. The `<server-name>` must match a registered mcporter instance (`mcporter list`).
- **Commit gate.** An MCP repository adds no hook content of its own. Its canonical hooks are the `ki-repo` frame with the `ki-engineering` package lines, published as worked examples under [`assets/githooks/`](../assets/githooks/); copy them exactly, since `ki-repo` HOOK-4 compares each hook byte for byte ([ADR-KI-HARNESS-SKILLS-017](../../../../docs/decisions/ADR-KI-HARNESS-SKILLS-017-commit-gate-existence-and-content-are-owned-separately.md)).

[Back to contents](#contents)

### 4.9 tsconfig / vitest / biome

`tsconfig.json` (the shared compiled-TS base), `tsconfig.build.json`, and `biome.json` are the **common engineering standard** (`ki-engineering` §4.8–§4.11); when the repository selects Vitest by carrying `vitest.config.*`, that common layer also requires 100% coverage on all four metrics. Only under that selected profile does the **MCP delta** add its coverage `exclude` list — beyond the common `src/**/*.test.ts`, an MCP excludes its pure-wiring layers: `src/mcp-server/index.ts`, `src/tools/**/index.ts`, `src/utils/annotations.ts`, plus `src/auth-server/**`, `src/cli/cli.ts`, and pure-data modules (`src/utils/notion-args.ts`) where present.

[Back to contents](#contents)

### 4.10 .env.example & env vars

The committed `.env*.example` template (real `.env.*` gitignored) and the `process.loadEnvFile` parity call are the **common engineering standard** (`ki-engineering` §4.12). The **MCP delta** is the variable prefix + shared block:

- Prefix `MCP_<SCREAMING_SNAKE_APPNAME>_*`. Shared block across all repos: `MCP_<APP>_ACCESS_LEVEL` (default `read`), `MCP_<APP>_AUDIT_LOG` (default `writes`), `MCP_<APP>_AUDIT_LOG_PATH` (default `~/.local/state/mcp-<name>/audit.jsonl`), `MCP_<APP>_AUDIT_LOG_MAX_BYTES` (10485760), `MCP_<APP>_AUDIT_LOG_KEEP` (5), plus domain vars (`*_SAFE_ROOTS`, `*_ROOT`, OAuth client id/secret, PAT, …).

[Back to contents](#contents)

### 4.11 Docs

**Presence** of `README.md`, `CLAUDE.md`, and `ROADMAP.md` is `ki-repo`'s layer (the first two universal/FAIL, `ROADMAP.md` a warn), as is where orientation lives: shared guidance in root `AGENTS.md`, which every agent host loads, imported by a `CLAUDE.md` that keeps only what is Claude's own. This section owns their **MCP content contract**, plus the three MCP-family root docs whose presence is the **MCP delta**:

- **`README.md`** — user-facing: tool catalog (purpose + I/O shape per tool), install/config, client setup, dev commands.
- **`AGENTS.md`** — architecture invariants, security requirements, and what an agent needs beyond the README, for every agent host; `CLAUDE.md` imports it and does not restate them. Must stay in sync with the code: an `AGENTS.md` describing a layer that has since been renamed/moved (e.g. an `orchestrator/` section after the move to `cli/` + `main/`) is a finding.
- **`ROADMAP.md`** — planned features / deprecations.
- **`CONTRIBUTING.md`** — setup, dev loop, conventions (code / commits / testing), pre-PR checklist. _(MCP delta: presence required.)_
- **`SECURITY.md`** — vulnerability reporting, scope (in / out), supported versions (OAuth repos add a token-storage note). _(MCP delta: presence required.)_
- **`CHANGELOG.md`** — release notes; present **and non-empty** (an empty stub at 1.0.0 is a finding). _(MCP delta.)_

[Back to contents](#contents)

### 4.12 Protocol profiles

The server package family selects exactly one dated protocol profile. Do not add a claimable `.ki.toml` switch whose value can drift from executable code.

- **Legacy profile — MCP 2025-11-25.** `@modelcontextprotocol/sdk` major 1 selects the legacy profile. Its `StdioServerTransport` entry point and legacy result envelopes remain conformant; modern-only discovery and `resultType` checks do not apply.
- **Modern profile — MCP 2026-07-28.** `@modelcontextprotocol/server` major 2 selects the modern profile. Each synchronous `jsonResult` and `errorResult` helper returns `resultType: "complete"`. The stdio entry point supplies a per-connection server factory to the supported `serveStdio` boundary. The SDK owns `server/discover`, protocol stamping, and conservative cache defaults; the repository smoke test proves that live boundary, so source audit does not require a local `server/discover` literal or handler.
- **Transition compatibility.** A modern server may retain deliberate legacy client fallback while the fleet migrates, but it remains a modern-profile server. The v2 `@modelcontextprotocol/client` package does not select the server profile.
- **Fail-closed selection.** Mixed server package families, unknown majors, a modern implementation retaining only the legacy server dependency, or a v2 server retaining the legacy SDK server boundary are violations. Migration remains receiver-owned work; the audit does not rewrite dependencies or server entry points.

[Back to contents](#contents)

### 4.13 Spec conformance: tool results, errors & metadata

These trace to the MCP spec ([TOOLS](sources.md) + [CHANGELOG](sources.md), 2025-11-25). They are how the thin `tools/` layer must shape what it returns.

- **Errors are Tool Execution Errors, not protocol errors.** The spec (clarified 2025-11-25) requires input-validation failures, API failures, and business-logic errors to be returned in the result envelope with `isError: true` so the model can self-correct — only malformed requests / unknown tools are JSON-RPC protocol errors. This is exactly why the house rule is **`errorResult` (return), never `throw`** at the tool boundary: a thrown zod/validation error would surface as a protocol error and also bypass the `withAuditLog` wrapper, which keys on the `isError` envelope. Confirm `errorResult` produces `{ content, isError: true }`.
- **Structured output is `outputSchema` + `structuredContent`, paired** (spec 2025-11-25). A tool that returns machine-shaped data **SHOULD** declare an `outputSchema` (JSON Schema 2020-12) on registration and return the matching object in `structuredContent`, **and** (for backwards-compat with older clients) the same JSON serialized in a text content block. The cleanest path is to derive both from the same zod result schema via `zod-to-json-schema` so schema and output cannot drift. A tool that returns `structuredContent` without a declared `outputSchema`, or that uses `jsonResult` (returning JSON) without having adopted `structuredContent` at all, is a **WARN** finding. Plain text-only results need neither.
- **Deterministic `tools/list` ordering.** Tools **SHOULD** be registered in a stable, predictable order within each tool-group file (e.g. alphabetical by tool name, or by natural CRUD order). Deterministic ordering improves prompt-cache hit rates for clients that hash the tool list. Randomised or nondeterministic registration order is a **WARN** finding.
- **`inputSchema` dialect.** The spec defaults schemas to JSON Schema 2020-12. zod-to-json-schema output is accepted by Claude; no action needed unless a client rejects the emitted dialect — then set an explicit `$schema`.
- **Optional metadata** (`icons`, `title`, `execution.taskSupport`) is available as of 2025-11-25 but not part of the house standard; adopt per-repo only if a client surfaces it. Async **Tasks** (`execution.taskSupport`) are experimental and irrelevant to these short-lived stdio tools — do not flag their absence.

[Back to contents](#contents)

### 4.14 OAuth security (auth-server repos)

Only the OAuth repos — **mcp-gsuite** and **mcp-m365** — have an `auth-server/` and a token store; these items do not apply to the filesystem/subprocess repos. They trace to the spec's [SEC](sources.md) and [AUTH](sources.md) pages. The §4.6 invariants still apply on top of these.

**Two roles, only one of them ours — items 1–6 apply, 7–8 don't (yet).** Items 1–6 govern these repos' actual role: an OAuth **client** of a third-party IdP (Google / Microsoft) running the loopback consent flow and holding the resulting downstream tokens. Items 7–8 come from the **MCP authorization framework**, which governs a server that is itself a **remote HTTP OAuth resource server** (and the authorization server fronting it). **No current workspace server occupies that role** — all are stdio servers that obtain their own tokens — so 7–8 are **N/A today**; they go live only if a server is deployed remotely. When citing 7–8, say which role you mean.

1. **No token passthrough.** The server uses tokens it obtained for _itself_ against the downstream API (Google / Microsoft Graph); it must never accept a caller- supplied token and forward it. (Spec: "MCP servers MUST NOT accept any tokens that were not explicitly issued for the MCP server.")
2. **Authorization-code flow with PKCE and a single-use `state`.** The loopback OAuth flow generates a cryptographically random `state`, stores it server-side until the callback, validates an **exact** match, and expires/deletes it after one use. Reject a callback with missing or mismatched `state`.
3. **Exact `redirect_uri` match** — loopback redirect compared by exact string, not prefix/wildcard.
4. **Least-privilege scopes.** Request only the scopes the shipped tools need; do not pre-request a broad catalog. Scope creep is a finding.
5. **SSRF discipline on any fetched URL.** Discovery/token/Graph endpoints are HTTPS and host-pinned to the known provider; never fetch an attacker-influenceable URL, and never follow redirects to internal/loopback/link-local addresses (`169.254.169.254`, `10/172.16/192.168`, `::1`).
6. **Secure token storage & redaction.** Refresh/access tokens are stored with restrictive file permissions outside any served root, never logged, and redacted from the audit log and from error messages (already required by §4.6.11). A 401 never echoes the token; its recovery hint follows §4.6.11, naming only a path reachable at the configured access level.
7. **RFC 8707 `resource` parameter + audience validation — _remote resource-server role only; N/A to current repos_.** Per the 2025-11-25 spec (AUTH): when an MCP **client** obtains a token to call a **remote** MCP server, it MUST include a `resource` parameter naming that server's canonical URI; the authorization server SHOULD bind it into the token's `aud`; and the server, **acting as an OAuth resource server**, MUST validate `aud` before accepting the token — rejecting any whose audience isn't itself (a token-passthrough defense, item #1). This governs the MCP authorization framework, not a third-party OAuth-client flow: the current stdio servers are not resource servers, and their IdPs (Google / Microsoft v2) scope tokens by **scope**, not RFC 8707 `resource` — so there is nothing to implement here today. The live protection for our servers is item #1 (no token passthrough).
8. **Client ID Metadata Documents (SHOULD) — _authorization-server role only; N/A to current repos_.** Per the 2025-11-25 spec (AUTH): an **authorization server** SHOULD declare `client_id_metadata_document_supported: true` and accept URL-formatted `client_id` values — fetch the JSON document at that URL over HTTPS, validate its `client_id` matches the URL exactly, validate the request's `redirect_uri` against its `redirect_uris`, with SSRF mitigations on the fetch (item #5). It is the preferred client-registration path, superseding Dynamic Client Registration. Our servers are OAuth **clients**, not authorization servers — the AS is Google / Microsoft — so they cannot declare CIMD and this does not apply; it goes live only for a workspace component that itself acts as an MCP authorization server.

[Back to contents](#contents)
