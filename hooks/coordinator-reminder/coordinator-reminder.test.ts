import { expect, test } from 'bun:test'
import { spawnSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { markedBlock } from '../../skills/work/ki-coordination/scripts/generate/index.ts'

const script = resolve(import.meta.dir, 'coordinator-reminder.sh')
const line = markedBlock(
  readFileSync(resolve(import.meta.dir, '../../skills/work/ki-coordination/references/standard-coordination.md'), 'utf8'),
  'source',
  'hook-line'
).body
const pointer = markedBlock(
  readFileSync(resolve(import.meta.dir, '../../skills/work/ki-coordination/references/standard-coordination.md'), 'utf8'),
  'source',
  'hook-pointer'
).body
const root = mkdtempSync(join(tmpdir(), 'ki-coordinator-reminder-'))
const coordinating = join(root, 'capital')
const undeclared = join(root, 'undeclared')
const ordinary = join(root, 'ordinary')
mkdirSync(join(coordinating, '+', '_CHECKPOINTS'), { recursive: true })
mkdirSync(join(coordinating, 'Streams', 'Projects'), { recursive: true })
writeFileSync(join(coordinating, '.ki.toml'), '[skills.ki-repo]\nrepository = "capital"\n\n[skills.ki-delegation]\n\n[skills.ki-coordination]\n\n[skills.ki-work-package]\n')
spawnSync('git', ['init', '--quiet'], { cwd: coordinating })
// Checkpoints without the declaration: the signal is the `[skills.ki-coordination]` table, not `+/_CHECKPOINTS/`.
mkdirSync(join(undeclared, '+', '_CHECKPOINTS'), { recursive: true })
writeFileSync(join(undeclared, '.ki.toml'), '[skills.ki-repo]\nrepository = "undeclared"\n\n[skills.ki-work-package]\n')
spawnSync('git', ['init', '--quiet'], { cwd: undeclared })
mkdirSync(ordinary, { recursive: true })
// A Cairn store under the home, and Cairn's config.toml naming it as `~/store` (NAME-FIRST).
const unconfigured = join(root, 'unconfigured')
const configured = join(root, 'config')
const store = join(root, 'store')
mkdirSync(join(configured, 'cairn'), { recursive: true })
writeFileSync(join(configured, 'cairn', 'config.toml'), '[store]\npath = "~/store"\n')
const seat = (id: string, role: string, worker: string): void => {
  mkdirSync(join(store, 'work', 'cairn', id), { recursive: true })
  writeFileSync(join(store, 'work', 'cairn', id, '_index.md'), `---\nki-id: ${id}\nki-role: ${role}\nki-workers:\n  - id: ${worker}\n    role: ${role}\n---\n`)
}
seat('cairn.summit', 'guardian', 'actor:kitteth')
seat('cairn.guilds', 'steward', 'actor:moss')
mkdirSync(join(store, 'roster', 'actors', 'kitteth'), { recursive: true })
writeFileSync(join(store, 'roster', 'actors', 'kitteth', '_index.md'), '---\nki-id: actor:kitteth\nki-name: Kitteth\n---\n')
mkdirSync(join(store, 'roster', 'actors', 'moss'), { recursive: true })
writeFileSync(join(store, 'roster', 'actors', 'moss', '_index.md'), '---\nki-id: actor:moss\n---\n')
const named = { XDG_CONFIG_HOME: configured, HOME: root }

process.on('exit', () => rmSync(root, { recursive: true, force: true }))

interface Outcome {
  readonly status: number | null
  readonly stdout: string
  readonly context?: string
  readonly event?: string
}

const run = (input: string, extraEnv: Record<string, string> = {}, hook = script): Outcome => {
  // No Cairn config by default, so the real store never names a test's seat.
  const env: Record<string, string> = { ...(process.env as Record<string, string>), XDG_CONFIG_HOME: unconfigured, ...extraEnv }
  // The suite may itself run inside Claude Code; the runtime split is driven per test.
  delete env.CLAUDECODE
  Object.assign(env, extraEnv)
  const result = spawnSync('bash', [hook], { input, encoding: 'utf8', env, cwd: ordinary })
  const stdout = result.stdout ?? ''
  if (stdout.trim() === '') return { status: result.status, stdout }
  const parsed = JSON.parse(stdout) as { hookSpecificOutput: { hookEventName: string; additionalContext: string } }
  return {
    status: result.status,
    stdout,
    context: parsed.hookSpecificOutput.additionalContext,
    event: parsed.hookSpecificOutput.hookEventName
  }
}

const claudePrompt = (cwd: string, prompt = 'Where are we?'): string =>
  JSON.stringify({
    session_id: 'abc123',
    transcript_path: join(root, 'transcript.jsonl'),
    cwd,
    permission_mode: 'default',
    hook_event_name: 'UserPromptSubmit',
    prompt
  })

const codexPrompt = (cwd: string): string =>
  JSON.stringify({
    session_id: 'thread-1',
    transcript_path: join(root, 'rollout.jsonl'),
    cwd,
    hook_event_name: 'UserPromptSubmit',
    model: 'gpt-6.1-sol',
    permission_mode: 'default',
    prompt: 'Status?'
  })

const sessionStart = (cwd: string, source: string): string =>
  JSON.stringify({ session_id: 'abc123', transcript_path: join(root, 't.jsonl'), cwd, hook_event_name: 'SessionStart', source })

test('a Claude Code owner message in coordinating work gets the one line', () => {
  const outcome = run(claudePrompt(coordinating))
  expect(outcome.status).toBe(0)
  expect(outcome.event).toBe('UserPromptSubmit')
  expect(outcome.context).toBe(line)
})

test('a Codex owner message in coordinating work gets the same line', () => {
  const outcome = run(codexPrompt(coordinating))
  expect(outcome.status).toBe(0)
  expect(outcome.event).toBe('UserPromptSubmit')
  expect(outcome.context).toBe(line)
})

test('a subdirectory of a coordinating checkout still counts', () => {
  const outcome = run(claudePrompt(join(coordinating, 'Streams', 'Projects')))
  expect(outcome.status).toBe(0)
  expect(outcome.context).toBe(line)
})

test('a checkout holding checkpoints but not declaring ki-coordination gets nothing', () => {
  const outcome = run(claudePrompt(undeclared))
  expect(outcome.status).toBe(0)
  expect(outcome.stdout).toBe('')
  expect(run(claudePrompt(join(undeclared, '+', '_CHECKPOINTS'))).stdout).toBe('')
})

test('an ordinary interactive session gets nothing', () => {
  const outcome = run(claudePrompt(ordinary))
  expect(outcome.status).toBe(0)
  expect(outcome.stdout).toBe('')
})

test('the post-compaction session start injects the re-anchoring pointer', () => {
  const outcome = run(sessionStart(coordinating, 'compact'), { CLAUDECODE: '1' })
  expect(outcome.status).toBe(0)
  expect(outcome.event).toBe('SessionStart')
  expect(outcome.context).toBe(pointer)
  expect(run(sessionStart(coordinating, 'compact')).context).toBe(pointer)
})

test('other session starts and other events stay silent', () => {
  expect(run(sessionStart(coordinating, 'startup')).stdout).toBe('')
  expect(run(sessionStart(coordinating, 'resume')).stdout).toBe('')
  const other = JSON.stringify({ hook_event_name: 'PreToolUse', cwd: coordinating, tool_name: 'Bash' })
  expect(run(other).stdout).toBe('')
})

test('malformed, empty or cwd-less input fails open without blocking', () => {
  expect(run('{not json')).toEqual({ status: 0, stdout: '' })
  expect(run('')).toEqual({ status: 0, stdout: '' })
  const missingCwd = JSON.stringify({ hook_event_name: 'UserPromptSubmit', cwd: join(root, 'gone') })
  expect(run(missingCwd)).toEqual({ status: 0, stdout: '' })
})

test.each([0, 1, 6])('unknown selection ignores %s stale packages and reads no package or method history', (count) => {
  const checkout = join(root, `unknown-${count}`)
  mkdirSync(checkout)
  writeFileSync(join(checkout, '.ki.toml'), '[skills.ki-coordination]\n')
  const states = ['with-worker', 'with-supervisor', 'on-hold', 'finished', 'with-worker', 'with-worker']
  for (let index = 0; index < count; index++) {
    const folder = join(checkout, '+/_WORK', `ki.reg.stale-${index}`)
    mkdirSync(folder, { recursive: true })
    writeFileSync(join(folder, '_index.md'), `---\nlevel: ${index ? 'project' : 'regular'}\n---\n`)
    writeFileSync(join(folder, 'state.md'), `---\nstate: ${states[index]}\nmethod_read: stale\n---\n`)
  }
  // Bash records executed commands, including substitutions and expanded globs.
  // No command may enumerate/read packages or inspect method Git history.
  const trace = join(root, `unknown-${count}.trace`)
  const bashEnv = join(root, `unknown-${count}.bash-env`)
  writeFileSync(bashEnv, `set -T\ntrap 'printf "%s\\n" "$BASH_COMMAND" >> "$HOOK_TRACE"' DEBUG\n`)
  const env = { BASH_ENV: bashEnv, HOOK_TRACE: trace }
  for (const input of [claudePrompt(checkout), codexPrompt(checkout)]) {
    expect(run(input, env)).toEqual({ status: 0, stdout: `${JSON.stringify({hookSpecificOutput: {hookEventName: 'UserPromptSubmit', additionalContext: line}})}\n`, context: line, event: 'UserPromptSubmit' })
  }
  expect(run(sessionStart(checkout, 'compact'), env).context).toBe(pointer)
  expect(readFileSync(trace, 'utf8')).not.toMatch(/_WORK|method_read|git .*log|rev-parse --verify|awk/)
  expect(line.length).toBeLessThan(300)
  expect(pointer.length).toBeLessThan(350)
})

test.each(['null', '[]', '42', '"text"', '{"hook_event_name":{}}', '{"hook_event_name":"UserPromptSubmit","cwd":{}}'])('unusable payload %s stays silent', (input) => {
  expect(run(input)).toEqual({ status: 0, stdout: '' })
})

// Kris, 19 November 2026: a seat should close with its named thread line the first time, before the Stop hook holds a
// bare one back. Once the session's seat is known, from its opener's Session: line or an earlier reply's thread line,
// the reminder names the line where the Cairn store names the seat's actor, and otherwise says nothing more.
const told = `${line} Close every banner or one-line footer with your seat's named thread line: Kitteth (🪨 🔑 cairn.summit).`
const session = (thread: string): string =>
  claudePrompt(coordinating, `Open cairn.summit.\nSession: ${thread}. Your first act is to rename this session to it with your agent host's rename.`)
const replied = (thread: string): string => {
  const path = join(root, `replied-${thread.length}.jsonl`)
  const reply = { type: 'assistant', message: { role: 'assistant', content: [{ type: 'text', text: `Mark struck.\n\n### 🤖 With worker\n\n${thread}` }] } }
  writeFileSync(path, `${JSON.stringify(reply)}\n`)
  return JSON.stringify({ ...JSON.parse(claudePrompt(coordinating, 'mark')), transcript_path: path })
}

test("a known seat whose actor the store names is told its named thread line", () => {
  expect(run(session('🪨 🔑 cairn.summit'), named).context).toBe(told)
  expect(run(session('Kitteth (🪨 🔑 cairn.summit)'), named).context).toBe(told)
  expect(run(replied('🪨 🔑 cairn.summit'), named).context).toBe(told)
  expect(run(replied('Kitteth (🪨 🔑 cairn.summit)'), named).context).toBe(told)
  // A reply closing with the one-line footer gives its seat from the thread line after the state (MINIMAL-FOOTER).
  const path = join(root, 'replied-one-line.jsonl')
  const reply = { type: 'assistant', message: { role: 'assistant', content: [{ type: 'text', text: 'Still going.\n\n🤖 With worker · 🪨 🔑 cairn.summit' }] } }
  writeFileSync(path, `${JSON.stringify(reply)}\n`)
  expect(run(JSON.stringify({ ...JSON.parse(claudePrompt(coordinating, 'and now?')), transcript_path: path }), named).context).toBe(told)
})

test('an unnamed, unknown or unresolvable seat gets the line alone', () => {
  expect(run(session('⚖️ 🔑 cairn.guilds'), named).context).toBe(line)
  expect(run(session('🏛️ 🔑 5ge.summit'), named).context).toBe(line)
  expect(run(session('🧵 cairn.summit'), named).context).toBe(line)
  expect(run(claudePrompt(coordinating), named).context).toBe(line)
  expect(run(session('🪨 🔑 cairn.summit')).context).toBe(line)
})

// Kris, 19 November 2026: Wayland's session was told to close with Kitteth's line, read from the SendMessage it had
// addressed to Kitteth and the message Kitteth sent back. Only the session's own replies name its seat.
seat('ki.cairn', 'steward', 'actor:wayland')
mkdirSync(join(store, 'roster', 'actors', 'wayland'), { recursive: true })
writeFileSync(join(store, 'roster', 'actors', 'wayland', '_index.md'), '---\nki-id: actor:wayland\nki-name: Wayland\n---\n')
const wayland = `${line} Close every banner or one-line footer with your seat's named thread line: Wayland (⚒️ 🔑 ki.cairn).`
const kitteth = 'Kitteth (🪨 🔑 cairn.summit)'
const peer = `Another Claude session sent a message:\n<cross-session-message from="uds:/tmp/cc-socks/1.sock" from-name="${kitteth}">\n${kitteth}, 03:20 GMT. Noted.\n\nSession: 🪨 🔑 cairn.summit.\n\n${kitteth}\n</cross-session-message>`
const crossTalk = (own: boolean, prompt = 'mark'): string => {
  const path = join(root, `cross-talk-${own}.jsonl`)
  const text = (body: string): object => ({ type: 'assistant', message: { role: 'assistant', content: [{ type: 'text', text: body }] } })
  const lines = [
    ...(own ? [text('Mark struck.\n\n### 🤖 With worker\n\nWayland (⚒️ 🔑 ki.cairn)')] : []),
    { type: 'assistant', message: { role: 'assistant', content: [{ type: 'tool_use', name: 'SendMessage', input: { to: kitteth, message: `Wayland (⚒️ 🔑 ki.cairn), 03:16 GMT. Done.\n\n${kitteth}` } }] } },
    { type: 'user', message: { role: 'user', content: [{ type: 'tool_result', content: `Sent to ${kitteth}\n${kitteth}` }] } },
    { type: 'user', isMeta: true, origin: { kind: 'peer', name: kitteth, body: `${kitteth}, 03:20 GMT.\n${kitteth}` }, message: { role: 'user', content: peer } },
    // A subagent's reply nested in another entry, and a reply quoting the peer's line without closing on it.
    { type: 'progress', data: { message: { type: 'assistant', message: { role: 'assistant', content: [{ type: 'text', text: `Done.\n\n${kitteth}` }] } } } },
    { type: 'assistant', isSidechain: true, message: { role: 'assistant', content: [{ type: 'text', text: `Done.\n\n${kitteth}` }] } },
    text(`Kitteth wrote:\n\n${kitteth}\n\nNoted.`)
  ]
  writeFileSync(path, `${lines.map((entry) => JSON.stringify(entry)).join('\n')}\n`)
  return JSON.stringify({ ...JSON.parse(claudePrompt(coordinating, prompt)), transcript_path: path })
}

test("a peer's line in a message to or from it never names the session's seat", () => {
  expect(run(crossTalk(true), named).context).toBe(wayland)
  expect(run(crossTalk(true, peer), named).context).toBe(wayland)
  expect(run(crossTalk(false), named).context).toBe(line)
  expect(run(crossTalk(false, peer), named).context).toBe(line)
  expect(run(crossTalk(false, `<task-notification>\nSession: 🪨 🔑 cairn.summit.\n</task-notification>`), named).context).toBe(line)
})

test('the seat-name resolver is the same in both coordinator hooks', () => {
  const copy = (path: string): string => {
    const text = readFileSync(resolve(import.meta.dir, path), 'utf8')
    return text.slice(text.indexOf('# >>> seat-name'), text.indexOf('# <<< seat-name'))
  }
  const here = copy('coordinator-reminder.sh')
  expect(here).toContain('seat_named()')
  expect(copy('../coordinator-footer/coordinator-footer.sh')).toBe(here)
})
