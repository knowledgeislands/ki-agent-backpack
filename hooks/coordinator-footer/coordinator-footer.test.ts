import { expect, test } from 'bun:test'
import { spawnSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const script = resolve(import.meta.dir, 'coordinator-footer.sh')
const root = mkdtempSync(join(tmpdir(), 'ki-coordinator-footer-'))
// A coordinating checkout with a roadmap, one without, and an ordinary directory.
const coordinating = join(root, 'harness')
const roadless = join(root, 'capital')
const ordinary = join(root, 'ordinary')
for (const checkout of [coordinating, roadless]) {
  mkdirSync(join(checkout, '+', '_WORK', 'ki.prj.demo'), { recursive: true })
  writeFileSync(join(checkout, '.ki.toml'), '[skills.ki-repo]\n\n[skills.ki-coordination]\n')
  spawnSync('git', ['init', '--quiet'], { cwd: checkout })
}
mkdirSync(join(coordinating, 'docs', 'roadmap'), { recursive: true })
// A Cairn store and Cairn's config.toml naming it, from which the hook reads a seat's actor (NAME-FIRST).
const unconfigured = join(root, 'unconfigured')
const configured = join(root, 'config')
const store = join(root, 'store')
mkdirSync(join(configured, 'cairn'), { recursive: true })
writeFileSync(join(configured, 'cairn', 'config.toml'), `[rig]\nname = "sol"\n\n[store]\npath = "${store}"\n\n[app]\npath = "elsewhere"\n`)
const seat = (territory: string, id: string, role: string, workers: readonly (readonly [string, string])[]): void => {
  mkdirSync(join(store, 'work', territory, id), { recursive: true })
  const entries = workers.map(([worker, held]) => `  - id: ${worker}\n    role: ${held}\n    tier: leaders\n    status: active\n`).join('')
  writeFileSync(join(store, 'work', territory, id, '_index.md'), `---\nki-id: ${id}\nki-role: ${role}\nki-workers:\n${entries}---\n\n# ${id}\n`)
}
const actor = (id: string, name?: string): void => {
  mkdirSync(join(store, 'roster', 'actors', id), { recursive: true })
  writeFileSync(join(store, 'roster', 'actors', id, '_index.md'), `---\nki-id: actor:${id}\n${name ? `ki-name: ${name}\n` : ''}ki-kind: agent\n---\n`)
}
seat('cairn', 'cairn.summit', 'guardian', [['actor:kitteth', 'guardian'], ['actor:natter', 'voice']])
seat('ki', 'ki.guilds', 'steward', [['actor:moss', 'steward']])
seat('ki', 'ki.cairn', 'lead', [['actor:quire', 'information-architect']])
actor('kitteth', 'Kitteth')
actor('natter', 'Natter')
actor('moss')
actor('quire', '"Quire"')
mkdirSync(ordinary, { recursive: true })

process.on('exit', () => rmSync(root, { recursive: true, force: true }))

const art = [
  '```text',
  '  /==================================================================================\\',
  ' /                                 KNOWLEDGE  ISLANDS                                 \\',
  '|======================================================================================|',
  '```'
].join('\n')
const heading = '### 🤖 → 👤 Handoff to supervisor · at 21:10 GMT'
const counts = '🤖 0 running · ⏳ 0 queued · 👤 1 with you · ⛔ 0 blocked · 🅿️ 0 parked'
const roadmap = '🗺️ roadmap · 6 records · 3 open · 2 done awaiting prune · 1 idea'
const pkg = '📦 package · changes 3 · open 2 · held 0 · meetings 1'
const items = '- 👤 FOOTER-HOOK · owner · at 21:10'
const listening = '🤝 in cairn.wayfinder.designs · with Quire, Limner'
const thread = '🧵 ki.prj.demo'
const summaryBody = [
  '# [KI › demo](/tmp/store/work/ki/ki.demo/_index.md)',
  '',
  '**Summary at 21:10 GMT · last mark 20:00 GMT**',
  '',
  '---',
  '',
  '## Summary',
  '',
  '**The hook landed.**',
  '',
  '## Status',
  '',
  '## Queries',
  '',
  'None.'
].join('\n')
const summary = (...footer: string[]): string => [summaryBody, ...footer].join('\n\n')
const fullSummary = summary(art, heading, counts, roadmap, pkg, items, listening, thread)
const rebootstrap = (...banner: string[]): string =>
  ['# [KI › demo](/tmp/store/work/ki/ki.demo/_index.md)', '', '**Bootstrap at 21:10 GMT · last mark 20:00 GMT**', '', '---', '', '## Done', '', 'Coordinator for ki.prj.demo.', ...banner].join('\n\n')
const shortBanner = [heading, counts, items, listening, thread].join('\n\n')

interface Turn {
  readonly owner?: string | readonly unknown[]
  readonly meta?: boolean
  readonly reply?: string
}

let transcripts = 0
const transcript = (turns: readonly Turn[]): string => {
  const path = join(root, `t-${++transcripts}.jsonl`)
  const lines: string[] = []
  for (const turn of turns) {
    if (turn.owner !== undefined)
      lines.push(JSON.stringify({ type: 'user', ...(turn.meta ? { isMeta: true } : {}), message: { role: 'user', content: turn.owner } }))
    if (turn.reply !== undefined) {
      lines.push(JSON.stringify({ type: 'assistant', message: { role: 'assistant', content: [{ type: 'tool_use', name: 'Bash', input: {} }] } }))
      lines.push(JSON.stringify({ type: 'user', message: { role: 'user', content: [{ type: 'tool_result', content: 'mark' }] } }))
      lines.push(JSON.stringify({ type: 'assistant', message: { role: 'assistant', content: [{ type: 'text', text: turn.reply }] } }))
    }
  }
  // A partly written last line must not stop the reader.
  writeFileSync(path, `${lines.join('\n')}\n{"type":"user","message":`)
  return path
}

// An earlier banner-closing reply makes the session a coordinating one.
const coordinated = (owner: Turn['owner'], meta = false): string =>
  transcript([{ owner: 'Open ki.prj.demo', reply: rebootstrap(shortBanner) }, { owner, meta }])

const stop = (reply: string | undefined, path: string, cwd = coordinating, extra: Record<string, unknown> = {}): string =>
  JSON.stringify({
    session_id: 'abc123',
    transcript_path: path,
    cwd,
    permission_mode: 'default',
    hook_event_name: 'Stop',
    stop_hook_active: false,
    ...(reply === undefined ? {} : { last_assistant_message: reply }),
    ...extra
  })

interface Outcome {
  readonly status: number | null
  readonly stdout: string
  readonly reason?: string
  readonly warning?: string
}

const run = (input: string, extraEnv: Record<string, string> = {}, shell = 'bash'): Outcome => {
  // No Cairn config by default, so the real store never names a test's seat.
  const env: Record<string, string> = { ...(process.env as Record<string, string>), XDG_CONFIG_HOME: unconfigured }
  Object.assign(env, extraEnv)
  const result = spawnSync(shell, [script], { input, encoding: 'utf8', env, cwd: ordinary })
  const stdout = result.stdout ?? ''
  if (stdout.trim() === '') return { status: result.status, stdout }
  const parsed = JSON.parse(stdout) as { decision?: string; reason?: string; systemMessage?: string }
  if (parsed.systemMessage !== undefined) {
    // A warning lets the reply through: it never blocks as well.
    expect(parsed.decision).toBeUndefined()
    return { status: result.status, stdout, warning: parsed.systemMessage }
  }
  expect(parsed.decision).toBe('block')
  return { status: result.status, stdout, reason: parsed.reason }
}

const silent = { status: 0, stdout: '' }
const plain = transcript([{ owner: 'summary' }])

test('the hook ships executable', () => {
  expect(statSync(script).mode & 0o111).toBe(0o111)
})

test('a Summary with its whole footer passes', () => {
  expect(run(stop(fullSummary, plain))).toEqual(silent)
})

// The Status is the Summary without `## Summary`, and takes the same long footer.
test('a Status takes the long footer, as a Summary does', () => {
  const status = (...footer: string[]): string =>
    [
      summaryBody
        .replace('**Summary at', '**Status at')
        .replace('## Summary\n\n**The hook landed.**\n\n', ''),
      ...footer
    ].join('\n\n')
  expect(run(stop(status(art, heading, counts, roadmap, pkg, items, listening, thread), plain))).toEqual(silent)
  expect(run(stop(status(heading, counts, roadmap, pkg, items, listening, thread), plain)).warning).toStartWith(
    "Footer check: this Summary's footer has no Knowledge Islands art above the banner. "
  )
})

// Kris, relayed on 7 November 2026, asked that the hook "allow it but warn against it and feedback on it to make sure
// it's intentional": only a lost banner or thread line holds a reply back.
test('a Summary without the art passes with a warning naming it', () => {
  const outcome = run(stop(summary(heading, counts, roadmap, pkg, items, listening, thread), plain))
  expect(outcome.status).toBe(0)
  expect(outcome.reason).toBeUndefined()
  expect(outcome.warning).toBe(
    "Footer check: this Summary's footer has no Knowledge Islands art above the banner. It was let through; confirm it was intended, since ki-coordination's Banner section sets the usual form."
  )
})

test('art drawn below the banner heading does not count', () => {
  expect(run(stop(summary(heading, counts, roadmap, pkg, art, items, listening, thread), plain)).warning).toContain('no Knowledge Islands art')
})

test('no art, asked for plainly or through the command, leaves the art out', () => {
  const footer = summary(heading, counts, roadmap, pkg, items, listening, thread)
  expect(run(stop(footer, transcript([{ owner: 'mark no art' }])))).toEqual(silent)
  const command = '<command-name>/ki-coordination</command-name>\n<command-args>summary since 14:00 no art</command-args>'
  expect(run(stop(footer, transcript([{ owner: [{ type: 'text', text: command }] }])))).toEqual(silent)
})

test('an unreadable transcript leaves the art unasked but still checks the rest', () => {
  expect(run(stop(summary(heading, counts, roadmap, pkg, items, listening, thread), join(root, 'gone.jsonl')))).toEqual(silent)
  expect(run(stop(summary(heading, counts, roadmap, items, listening, thread), join(root, 'gone.jsonl'))).warning).toContain('has no 📦 package line.')
})

test('a Summary without its roadmap and package lines passes with a warning naming both', () => {
  const outcome = run(stop(summary(art, heading, counts, items, listening, thread), plain))
  expect(outcome.warning).toStartWith("Footer check: this Summary's footer has no 🗺️ roadmap line and no 📦 package line. ")
})

test('a repository without a roadmap still shows the roadmap line, reading none', () => {
  expect(run(stop(summary(art, heading, counts, '🗺️ roadmap · none', pkg, items, listening, thread), plain, roadless))).toEqual(silent)
  expect(run(stop(summary(art, heading, counts, pkg, items, listening, thread), plain, roadless)).warning).toStartWith("Footer check: this Summary's footer has no 🗺️ roadmap line. ")
})

test('footer lines above the banner heading do not count', () => {
  expect(run(stop(summary(art, roadmap, pkg, heading, counts, items, listening, thread), plain)).warning).toContain('no 🗺️ roadmap line and no 📦 package line')
})

test('a Summary whose banner is missing is held back, naming the lost structure and the rest', () => {
  const outcome = run(stop(summaryBody, plain))
  expect(outcome.reason).toBe(
    "This Summary's footer lacks the banner's ### state heading and the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>, last, under ki-coordination's Banner section. Give the reply again in full with them, since the last text is what the owner reads. It also has no Knowledge Islands art above the banner, no 🗺️ roadmap line and no 📦 package line; keep that only where the owner asked for it."
  )
})

test('the thread line must close the reply', () => {
  expect(run(stop(`${fullSummary}\n\nAnything else?`, plain)).reason).toStartWith("This Summary's footer lacks the thread line as the very last line, ")
  expect(run(stop(`${fullSummary}\n\n`, plain))).toEqual(silent)
})

test('a list straight after the heading is no counts line', () => {
  expect(run(stop(summary(art, heading, items, roadmap, pkg, listening, thread), plain)).warning).toContain('no counts line beneath the state heading')
})

test('an odd counts line or an unrecognised state heading passes with a warning', () => {
  expect(run(stop(summary(art, heading, 'Two runs going', roadmap, pkg, items, listening, thread), plain)).warning).toContain(
    'a counts line opening with none of the counts glyphs'
  )
  const unknown = '### 🌙 Resting · at 21:10 GMT'
  expect(run(stop(rebootstrap(unknown, counts, items, listening, thread), plain)).warning).toStartWith(
    "Footer check: this reply's banner has a state heading the table of states does not name. "
  )
})

test('a query or finding heading is no state heading', () => {
  expect(run(stop(rebootstrap('### FOOTER-HOOK - Relax the hook', thread), plain)).reason).toStartWith(
    "This reply's banner lacks the banner's ### state heading, "
  )
})

test('a re-bootstrap report needs the short banner only', () => {
  expect(run(stop(rebootstrap(shortBanner), plain))).toEqual(silent)
  const outcome = run(stop(rebootstrap(), plain))
  expect(outcome.reason).toStartWith(
    "This reply's banner lacks the banner's ### state heading and the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>, last, "
  )
  expect(run(stop(rebootstrap(heading, items, listening, thread), plain)).warning).toContain('no counts line')
})

test('a Stop and a Finished banner pass in their own shapes', () => {
  const hold = [
    '**Stop at 21:10 GMT · mark 21:10 GMT**',
    '## Done',
    '### ⏸️ On hold · paused until Monday · at 21:10 GMT',
    '⏸️ drained · 🅿️ 2 queries parked',
    '- 🅿️ 2 queries in the change documents',
    listening,
    thread
  ].join('\n\n')
  expect(run(stop(hold, plain))).toEqual(silent)
  // A Finished banner carries no counts line.
  expect(run(stop(['### 🏁 Finished · Demo closed at 18:00 GMT', '- 🏁 3 work items accepted', thread].join('\n\n'), plain))).toEqual(silent)
  expect(run(stop(hold.replace('⏸️ drained · 🅿️ 2 queries parked\n\n', ''), plain)).warning).toContain('no counts line')
  // Snoozing, under SNOOZE, keeps its watcher armed, so its counts line waits for a message rather than saying drained.
  const snoozing = [
    '**Stop at 21:10 GMT · mark 21:10 GMT**',
    '## Done',
    '### 💤 Snoozing (on hold) · at 21:10 GMT',
    '💤 waiting for a message · 🅿️ 2 queries parked',
    '- 🅿️ 2 queries in the change documents\n- 💤 a message arrives, or `resume`',
    thread
  ].join('\n\n')
  expect(run(stop(snoozing, plain))).toEqual(silent)
  expect(run(stop(snoozing.replace('### 💤 Snoozing (on hold) · at 21:10 GMT\n\n', ''), plain)).reason).toContain(
    "the banner's ### state heading"
  )
  // A Snoozing banner closing a Status, at the owner's `mark, status only`, passes as any other state does.
  const snoozingStatus = [
    '**Status at 21:10 GMT · last mark 21:10 GMT**',
    '## Status',
    art,
    '### 💤 Snoozing (on hold) · at 21:10 GMT',
    '💤 waiting for a message · 🅿️ 2 queries parked',
    roadmap,
    pkg,
    '- 🅿️ 2 queries in the change documents',
    thread
  ].join('\n\n')
  expect(run(stop(snoozingStatus, coordinated('mark, status only')))).toEqual(silent)
  expect(run(stop(snoozingStatus, coordinated('status')))).toEqual(silent)
  // A heading written before SNOOZE-HEADING, with `since`, passes too, and so does an earlier form line with its state.
  expect(run(stop(snoozing.replace('· at 21:10 GMT', '· since 21:10 GMT'), plain))).toEqual(silent)
  expect(run(stop(hold.replace('**Stop at', '**⏸️ On hold · Hold report at'), plain))).toEqual(silent)
})

// LISTEN-LINE, Kris, 16 November 2026, and FOOTER-DELEGATES, 19 November 2026: the meeting line names the meetings the
// session is in and who it works with there, and is left off in none, so a banner without it passes quietly, and an
// earlier listening line warns.
test('the meeting line is optional, and an earlier listening form warns', () => {
  expect(run(stop(rebootstrap(heading, counts, items, thread), plain))).toEqual(silent)
  expect(
    run(stop(rebootstrap(heading, counts, items, '🤝 in cairn.summit.voice · with Kitteth, cairn.wayfinder.designs · with Quire, Limner', thread), plain))
  ).toEqual(silent)
  for (const old of ['👂 listening', '🔇 not listening', '👂 in cairn.wayfinder.designs'])
    expect(run(stop(rebootstrap(heading, counts, items, old, thread), plain)).warning).toStartWith(
      "Footer check: this reply's banner has a meeting line in an earlier form, 👂 listening, 🔇 not listening or 👂 in <meeting>, which FOOTER-DELEGATES replaces with 🤝 in <meeting> · with <names>, or no line in no meeting. "
    )
})

test('a reply that opens a banner but leaves it unfinished is held back', () => {
  expect(run(stop(`Launched the run.\n\n${heading}\n\n${counts}`, plain)).reason).toStartWith("This reply's banner lacks the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>, last, ")
  expect(run(stop(`Launched the run.\n\n${thread}`, plain)).reason).toContain("the banner's ### state heading")
})

// Kris, about 01:15 GMT on 18 November 2026, under HOOK-ENFORCE a: "Yeah, we need the hook enforcing". Every reply in a
// coordinating session closes with the banner and its thread line, not only the reply to an owner's mark or state word.
test("an owner's mark or state word in a coordinating session needs the banner", () => {
  for (const word of ['mark', 'Mark.', 'mark only', 'mark, status only', 'pause', 'done for now', 'snooze', 'with me', 'status', 'summary since 14:00', 'where are we', "what's the state"]) {
    const outcome = run(stop('Mark struck at 21:10.', coordinated(word)))
    expect(outcome.reason).toStartWith("This reply's banner lacks the banner's ### state heading and the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>, last, ")
  }
  const command = '<command-name>/ki-coordination</command-name>\n<command-args>drain</command-args>'
  expect(run(stop('Draining.', coordinated(command))).reason).toContain('the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>')
  expect(run(stop(`Mark struck.\n\n${shortBanner}`, coordinated('mark')))).toEqual(silent)
  // A subdirectory of the coordinating checkout counts.
  expect(run(stop('Mark noted.', coordinated('mark'), join(coordinating, '+', '_WORK'))).reason).toContain('the banner')
})

test('the same words are quiet in a conversational session or an ordinary checkout', () => {
  expect(run(stop('Mark noted.', transcript([{ owner: 'mark' }])))).toEqual(silent)
  expect(run(stop('Mark noted.', coordinated('mark'), ordinary))).toEqual(silent)
})

test('every reply in a coordinating session needs the banner, a plain answer, a wake and a meta line included', () => {
  const lacks = "This reply's banner lacks the banner's ### state heading and the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>, last, "
  expect(run(stop('The run is still going.', coordinated('how is the run doing?'))).reason).toStartWith(lacks)
  expect(run(stop('21:10 GMT - footer-hook finished.', coordinated('<task-notification>\n<task-id>b1</task-id>\nmark</task-notification>'))).reason).toStartWith(lacks)
  const metaLast = transcript([{ owner: 'Open ki.prj.demo', reply: rebootstrap(shortBanner) }, { owner: 'what next?' }, { owner: 'mark', meta: true }])
  expect(run(stop('Next is the review.', metaLast)).reason).toStartWith(lacks)
  // An Answer or an Update closing with the short banner passes, as a Position does.
  expect(run(stop(`The run is still going.\n\n${shortBanner}`, coordinated('how is the run doing?')))).toEqual(silent)
  expect(run(stop(`21:10 GMT - footer-hook finished.\n\n${shortBanner}`, coordinated('<task-notification>\n<task-id>b1</task-id>\n</task-notification>')))).toEqual(silent)
  // A thread line that is not last still holds the reply back.
  expect(run(stop(`${shortBanner}\n\nAnything else?`, coordinated('how is the run doing?'))).reason).toContain('the thread line as the very last line')
})

// Kris, about 03:29 GMT on 19 November 2026, under MINIMAL-FOOTER a: "I thought we had a minimal reply where you could
// effectively just say what the reply time was and then maybe a one or two liner. So you don't need to … repeat a lot of
// the footer-based information every time". An Update or Answer may close with one line, its state then its thread
// line, refining HOOK-ENFORCE: the thread line inside it is held to the same checks, and a reply with none is held back.
test('an Update or Answer closing with the one-line footer passes, its thread line checked as a banner\'s', () => {
  const asked = coordinated('how is the run doing?')
  for (const footer of [
    '🤖 With worker · 🧵 ki.prj.demo',
    '👤 With supervisor · ⚒️ 🔑 ki.prj.demo',
    '💤 Snoozing (on hold) · 🧵 ki.prj.demo',
    '🤖 → 👤 Handoff to supervisor · 📐 ki.cairn@information-architect',
    '🤖 With worker · Kitteth (🪨 🔑 cairn.summit)',
    '👤 With supervisor · Wayland (⚒️ 🔑 ki.cairn)'
  ]) {
    expect(run(stop(`The run is still going.\n\n${footer}`, asked))).toEqual(silent)
    expect(run(stop(`21:10 GMT - footer-hook finished.\n\n${footer}`, coordinated('<task-notification>\n<task-id>b1</task-id>\n</task-notification>')))).toEqual(silent)
  }
  // A session whose replies have closed only with the one-line footer is still a coordinating one.
  const oneLiners = transcript([{ owner: 'Open ki.prj.demo', reply: 'Started.\n\n🤖 With worker · 🧵 ki.prj.demo' }, { owner: 'and now?' }])
  expect(run(stop('Still going.', oneLiners)).reason).toStartWith("This reply's banner lacks the banner's ### state heading and the thread line, ")
})

test('a bare reply with no footer is still held back, and told of the one-line footer', () => {
  const outcome = run(stop('The run is still going.', coordinated('how is the run doing?')))
  expect(outcome.reason).toStartWith("This reply's banner lacks the banner's ### state heading and the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>, last, ")
  expect(outcome.reason).toContain('An Update or Answer may close instead with the one-line footer, <glyph state> · <thread line>, as 🤖 With worker · 🧵 <work-id>')
  // A one-line footer that is not last, or whose thread line is not one, closes nothing.
  for (const reply of ['Still going.\n\n🤖 With worker · 🧵 ki.prj.demo\n\nAnything else?', 'Still going.\n\n🤖 With worker · ki.prj.demo', 'Still going.\n\nWith worker · 🧵 ki.prj.demo'])
    expect(run(stop(reply, coordinated('how is the run doing?'))).reason).toContain('the thread line')
  // A report with a heading block or form line still needs its banner.
  expect(run(stop(rebootstrap('🤖 With worker · 🧵 ki.prj.demo'), plain)).reason).toContain("the banner's ### state heading")
  expect(run(stop(summary(art, '🤖 With worker · 🧵 ki.prj.demo'), plain)).reason).toContain("the banner's ### state heading")
  // In a reply with a heading block, the hint is not given.
  expect(run(stop(rebootstrap('🤖 With worker · 🧵 ki.prj.demo'), plain)).reason).not.toContain('one-line footer')
})

test('a named seat closing a one-line footer with its bare thread line is still held back', () => {
  const env = { XDG_CONFIG_HOME: configured }
  const asked = coordinated('how is the run doing?')
  expect(run(stop('Still going.\n\n🤖 With worker · 🪨 🔑 cairn.summit', asked), env).reason).toStartWith(
    "This reply's banner lacks the thread line in its named form, Kitteth (🪨 🔑 cairn.summit), since the seat's actor is named (NAME-FIRST), under ki-coordination's Banner section. Give the reply again in full with it, "
  )
  expect(run(stop('Still going.\n\n👤 With supervisor · 📐 ki.cairn@information-architect', asked), env).reason).toContain('Quire (📐 ki.cairn@information-architect)')
  expect(run(stop('Still going.\n\n🤖 With worker · Kitteth (🪨 🔑 cairn.summit)', asked), env)).toEqual(silent)
  expect(run(stop('Still going.\n\n🤖 With worker · ⚖️ 🔑 ki.guilds', asked), env)).toEqual(silent)
  // The thread line's own warnings still apply inside the one-line footer.
  expect(run(stop('Still going.\n\n🤖 With worker · 📐 ki.cairn+architect', asked)).warning).toContain('a seat line in the earlier <work-id>+<role> form')
  expect(run(stop('Still going.\n\n🤖 With worker · 🧵 cairn.summit', asked))).toEqual(silent)
})

test('a session that has closed no reply with a thread line stays conversational, even in a coordinating checkout', () => {
  const chat = transcript([{ owner: 'What does the hook check?', reply: 'The footer.' }, { owner: 'And the reply block?' }])
  expect(run(stop('That too.', chat))).toEqual(silent)
  expect(run(stop('That too.', chat, roadless))).toEqual(silent)
})

// Kris, 19 November 2026: a peer's thread line, in a SendMessage to it or the message it sent back, is not the
// session's own; only a reply of the session's own closing with a thread line makes it a coordinating one.
test("a peer's thread line in a message to or from it never makes the session a coordinating one", () => {
  const kitteth = 'Kitteth (🪨 🔑 cairn.summit)'
  const path = join(root, 'cross-talk.jsonl')
  const entries = [
    { type: 'user', message: { role: 'user', content: 'Tell Kitteth the shots moved.' } },
    { type: 'assistant', message: { role: 'assistant', content: [{ type: 'tool_use', name: 'SendMessage', input: { to: kitteth, message: `Moved.\n\n${kitteth}` } }] } },
    { type: 'user', message: { role: 'user', content: [{ type: 'tool_result', content: `Sent to ${kitteth}` }] } },
    { type: 'user', isMeta: true, origin: { kind: 'peer', name: kitteth }, message: { role: 'user', content: `<cross-session-message from-name="${kitteth}">\nThanks.\n\n${kitteth}\n</cross-session-message>` } },
    { type: 'progress', data: { message: { type: 'assistant', message: { role: 'assistant', content: [{ type: 'text', text: `Done.\n\n${kitteth}` }] } } } },
    { type: 'assistant', isSidechain: true, message: { role: 'assistant', content: [{ type: 'text', text: `Done.\n\n${kitteth}` }] } },
    { type: 'assistant', message: { role: 'assistant', content: [{ type: 'text', text: `Kitteth wrote:\n\n${kitteth}\n\nNoted.` }] } }
  ]
  writeFileSync(path, `${entries.map((entry) => JSON.stringify(entry)).join('\n')}\n`)
  expect(run(stop('Sent.', path))).toEqual(silent)
  const own = { type: 'assistant', message: { role: 'assistant', content: [{ type: 'text', text: rebootstrap(shortBanner) }] } }
  writeFileSync(path, `${[own, ...entries].map((entry) => JSON.stringify(entry)).join('\n')}\n`)
  expect(run(stop('Sent.', path)).reason).toContain('the thread line')
})

test('a banner quoted in a code fence is not a footer', () => {
  const quoted = ['The banner looks like this:', '```markdown', '## Summary', heading, thread, '```', 'Shall I adopt it?'].join('\n\n')
  expect(run(stop(quoted, plain))).toEqual(silent)
})

test('a session already continuing from a Stop hook is never held back again, only warned', () => {
  const outcome = run(stop(summaryBody, plain, coordinating, { stop_hook_active: true }))
  expect(outcome.reason).toBeUndefined()
  expect(outcome.warning).toStartWith(
    "Footer check: this Summary's footer has a footer without the banner's ### state heading and the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>, last, and no Knowledge Islands art"
  )
  expect(run(stop('Mark struck.', coordinated('mark'), coordinating, { stop_hook_active: true })).warning).toContain("a footer without the banner's")
  expect(run(stop(fullSummary, plain, coordinating, { stop_hook_active: true }))).toEqual(silent)
})

test('without the reply text the hook reads the last reply from the transcript', () => {
  const path = transcript([{ owner: 'summary', reply: summary(art, heading, counts, items, listening, thread) }])
  expect(run(stop(undefined, path)).warning).toContain('no 🗺️ roadmap line and no 📦 package line')
  expect(run(stop(undefined, transcript([{ owner: 'summary', reply: fullSummary }])))).toEqual(silent)
  expect(run(stop(undefined, join(root, 'gone.jsonl')))).toEqual(silent)
  expect(run(stop('', plain))).toEqual(silent)
})

test.each([
  '',
  '{not json',
  'null',
  '[]',
  '42',
  '"text"',
  '{"hook_event_name":"UserPromptSubmit","prompt":"mark"}',
  '{"hook_event_name":"SubagentStop","last_assistant_message":"## Summary since 20:00 GMT"}',
  '{"hook_event_name":"Stop","last_assistant_message":{}}',
  '{"hook_event_name":"Stop","stop_hook_active":"yes","last_assistant_message":"## Summary since 20:00 GMT"}'
])('unusable or foreign input %s fails open', (input) => {
  expect(run(input)).toEqual(silent)
})

test('a missing jq fails open', () => {
  expect(run(stop(summaryBody, plain), { PATH: '/nonexistent' }, '/bin/bash')).toEqual(silent)
})

test('the system Bash runs the same checks', () => {
  expect(run(stop(fullSummary, plain), {}, '/bin/bash')).toEqual(silent)
  expect(run(stop('Still going.\n\n🤖 With worker · 🧵 ki.prj.demo', coordinated('and now?')), {}, '/bin/bash')).toEqual(silent)
  expect(run(stop('Still going.\n\n🤖 With worker · 🪨 🔑 cairn.summit', coordinated('and now?')), { XDG_CONFIG_HOME: configured }, '/bin/bash').reason).toContain('Kitteth (🪨 🔑 cairn.summit)')
  expect(run(stop('Mark struck.', coordinated('mark')), {}, '/bin/bash').reason).toContain('the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>')
  expect(run(stop(summary(heading, counts, roadmap, pkg, items, listening, thread), plain), {}, '/bin/bash').warning).toContain('no Knowledge Islands art')
})

// Kris, 7 November 2026, under STAGE-C-ROLES: the hook "accepts both forms, blocks only a missing banner heading or
// thread line, warns on the unusual". A seat with a role closes `<role glyph> 🔑 <work-id>`; ⭐, 🔧 and 🧵 in the role
// glyph's place pass with a warning under the role migration file.
const keyThread = '⚒️ 🔑 ki.prj.demo'
const keySummary = summary(art, heading, counts, roadmap, pkg, items, listening, keyThread)

test('a key-form Summary and banner pass, in the session name form of the role standard', () => {
  expect(run(stop(keySummary, plain))).toEqual(silent)
  expect(run(stop(rebootstrap(heading, counts, items, listening, '⚖️ 🔑 ki.reg.guilds'), plain))).toEqual(silent)
  expect(run(stop(rebootstrap(heading, counts, items, listening, '🏛️ 🔑 ki.sop.main'), plain))).toEqual(silent)
})

// Kris, 14 November 2026, under SEAT-LINE a, and 16 November 2026, under SEAT-AT a: a seat working in a package
// without its keys closes `<role glyph> <package>@<role>`, its catalogue glyph, no key and its seat's id, with
// `+<slug>` for a sub-package; the earlier `<work-id>+<role>` passes with a warning.
test('a keyless seat thread line passes as the thread line', () => {
  expect(run(stop(rebootstrap(heading, counts, items, listening, '📐 ki.cairn@information-architect'), plain))).toEqual(silent)
  expect(run(stop(summary(art, heading, counts, roadmap, pkg, items, listening, '🎨 ki.cairn@illustrator'), plain))).toEqual(silent)
  expect(run(stop(rebootstrap(heading, counts, items, listening, '🏗️ hnr.summit+website@technical-architect'), plain))).toEqual(silent)
  expect(run(stop(`${rebootstrap(heading, counts, items, listening, '📐 ki.cairn@information-architect')}\n\nAnything else?`, plain)).reason).toContain(
    'the thread line as the very last line'
  )
  expect(run(stop(rebootstrap(heading, counts, items, listening, '📐 ki.cairn+architect'), plain)).warning).toContain(
    'a seat line in the earlier <work-id>+<role> form'
  )
  const seated = transcript([
    { owner: 'Join the meeting', reply: rebootstrap(heading, counts, items, listening, '📐 ki.cairn@information-architect') },
    { owner: 'mark' }
  ])
  expect(run(stop('Mark struck.', seated)).reason).toContain('the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>')
})

// Kris, about 23:15 GMT on 17 November 2026, under NAME-FIRST a: "where we have a named actor that the name should be
// first and then in brackets it should be effectively what we're currently putting out". A named seat closes
// `<Name> (<seat form>)`, the name as its roster's `ki-name` writes it; an unnamed seat keeps the bare form.
test('a named seat thread line passes, keyholder or keyless, and is read as the bare form inside its brackets', () => {
  for (const line of [
    'Kitteth (🪨 🔑 cairn.summit)',
    'Eugene (🏛️ 🔑 5ge.summit)',
    'Hob Sol (🏠 🔑 personal.rig.sol)',
    'Quire (📐 ki.cairn@information-architect)'
  ]) {
    expect(run(stop(rebootstrap(heading, counts, items, listening, line), plain))).toEqual(silent)
    expect(run(stop(summary(art, heading, counts, roadmap, pkg, items, listening, line), plain))).toEqual(silent)
  }
  expect(run(stop(rebootstrap(heading, counts, items, listening, '⚖️ 🔑 ki.guilds'), plain))).toEqual(silent)
  expect(run(stop(`${rebootstrap(heading, counts, items, listening, 'Kitteth (🪨 🔑 cairn.summit)')}\n\nAnything else?`, plain)).reason).toContain(
    'the thread line as the very last line'
  )
  expect(run(stop(rebootstrap(heading, counts, items, listening, 'Kitteth (🦉⭐ 🔑 cairn.summit)'), plain)).warning).toContain(
    '⭐ or 🔧 beside the role glyph'
  )
  expect(run(stop(rebootstrap(heading, counts, items, listening, 'Quire (📐 ki.cairn+architect)'), plain)).warning).toContain(
    'a seat line in the earlier <work-id>+<role> form'
  )
  for (const invalid of ['Kitteth (🧵 cairn.summit)', '(🪨 🔑 cairn.summit) Kitteth', 'Kitteth (cairn.summit)'])
    expect(run(stop(rebootstrap(heading, counts, items, listening, invalid), plain)).reason).toContain('the thread line')
  const named = transcript([
    { owner: 'Open cairn.summit', reply: rebootstrap(heading, counts, items, listening, 'Kitteth (🪨 🔑 cairn.summit)') },
    { owner: 'mark' }
  ])
  expect(run(stop('Mark struck.', named)).reason).toContain('the thread line, <role glyph> 🔑 <work-id>')
})

// Kris, 19 November 2026, asking why `🪨 🔑 cairn.summit` passed where Kitteth holds the seat: the hook reads the
// seat's actor from the Cairn store that Cairn's config.toml names, and holds back a bare line it can name. An unnamed
// seat, a package or store it cannot find, and a named line pass, so a lookup never blocks.
test('a bare seat line whose actor the store names is held back with the named line', () => {
  const env = { XDG_CONFIG_HOME: configured }
  const bare = run(stop(rebootstrap(heading, counts, items, listening, '🪨 🔑 cairn.summit'), plain), env)
  expect(bare.reason).toStartWith(
    "This reply's banner lacks the thread line in its named form, Kitteth (🪨 🔑 cairn.summit), since the seat's actor is named (NAME-FIRST), under ki-coordination's Banner section. Give the reply again in full with it, "
  )
  expect(run(stop(summary(art, heading, counts, roadmap, pkg, items, listening, '📐 ki.cairn@information-architect'), plain), env).reason).toContain(
    'Quire (📐 ki.cairn@information-architect)'
  )
  expect(run(stop(rebootstrap(heading, counts, items, listening, 'Kitteth (🪨 🔑 cairn.summit)'), plain), env)).toEqual(silent)
  expect(run(stop(rebootstrap(heading, counts, items, listening, 'Quire (📐 ki.cairn@information-architect)'), plain), env)).toEqual(silent)
  // Never twice in a row: the second pass only warns.
  expect(run(stop(rebootstrap(heading, counts, items, listening, '🪨 🔑 cairn.summit'), plain, coordinating, { stop_hook_active: true }), env).warning).toContain(
    'Kitteth (🪨 🔑 cairn.summit)'
  )
})

test('an unnamed seat, an unresolvable seat and an unconfigured store pass a bare line', () => {
  const env = { XDG_CONFIG_HOME: configured }
  expect(run(stop(rebootstrap(heading, counts, items, listening, '⚖️ 🔑 ki.guilds'), plain), env)).toEqual(silent)
  expect(run(stop(rebootstrap(heading, counts, items, listening, '🏛️ 🔑 5ge.summit'), plain), env)).toEqual(silent)
  expect(run(stop(rebootstrap(heading, counts, items, listening, '🎨 ki.cairn@illustrator'), plain), env)).toEqual(silent)
  expect(run(stop(rebootstrap(heading, counts, items, listening, thread), plain), env)).toEqual(silent)
  expect(run(stop(rebootstrap(heading, counts, items, listening, '🪨 🔑 cairn.summit'), plain))).toEqual(silent)
  expect(run(stop(rebootstrap(heading, counts, items, listening, '🪨 🔑 cairn.summit'), plain), { XDG_CONFIG_HOME: 'relative', HOME: unconfigured })).toEqual(silent)
})

// Kris, about 23:15 GMT on 17 November 2026, under HEADING-FIX a: the report heading links only its package's
// `_index.md` in the Cairn store, by absolute path, never a repository, README or theme note; and about 03:25 GMT on
// 19 November 2026, under HEADING-PACKAGE: the whole heading is that one link, the package's name, as
// `Cairn › summit`, so `State of play`, a theme or a title outside the link drifts. The hook warns, never blocks.
test('a report heading that is not one link to its package entry file passes with a warning', () => {
  const headed = (h1: string): string => rebootstrap(heading, counts, items, listening, keyThread).replace(/^# .*$/m, h1)
  for (const good of [
    '# [Cairn › summit](/Users/krisbrown/kis/cairn/ki-cairn-store/work/cairn/cairn.summit/_index.md)',
    '# [KI › ways-of-working](/Users/krisbrown/kis/cairn/ki-cairn-store/work/ki/ki.ways-of-working/_index.md)',
    '# [Personal › rig › sol](/s/work/personal/personal.rig.sol/_index.md)',
    '# [Personal › inbox](/s/work/personal/personal.inbox/_index.md) › migrate-phase1'
  ])
    expect(run(stop(headed(good), plain))).toEqual(silent)
  for (const [bad, warning] of [
    ['# [Personal › tower](/Users/krisbrown/kis/personal/apps-ninja.midnight.tower/README.md)', 'whose link is not its package'],
    ['# [Personal](/s/work/personal/personal.summit/_index.md) › State of play', 'not one link covering its whole text'],
    ['# Model › [Ways of working](/s/work/ki/ki.ways-of-working/_index.md)', 'not one link covering its whole text'],
    ['# [Inbox](/s/work/personal/personal.inbox/_index.md)', 'not one link covering its whole text'],
    ['# [Model](/p/Streams/Themes/model.md) › [Ways of working](/s/work/ki/ki.ways-of-working/_index.md)', 'whose link is not its package'],
    ['# Tower › Personal > Tower', 'links no package'],
    ['# [KI › demo](work/ki/ki.demo/_index.md)', 'whose link is not its package']
  ]) {
    const outcome = run(stop(headed(bad ?? ''), plain))
    expect(outcome.reason).toBeUndefined()
    expect(outcome.warning).toContain(warning ?? '')
  }
  expect(run(stop(headed('# [Personal](/s/work/personal/personal.summit/_index.md) › State of play'), plain)).warning).not.toContain(
    'State of play'
  )
  // A heading inside a fence is quoted, not the reply's own.
  const quoted = headed('# [KI › demo](/s/work/ki/ki.demo/_index.md)').replace(
    'Coordinator for ki.prj.demo.',
    'Coordinator for ki.prj.demo.\n\n```markdown\n# [Tower](/x/README.md)\n```'
  )
  expect(run(stop(quoted, plain))).toEqual(silent)
})

test('a key-form thread line that is not last is held back', () => {
  expect(run(stop(`${keySummary}\n\nAnything else?`, plain)).reason).toStartWith(
    "This Summary's footer lacks the thread line as the very last line, "
  )
})

test('⭐, 🔧 or 🧵 standing as the role glyph passes with a warning', () => {
  for (const line of ['🦉⭐ 🔑 personal.reg.inbox-terra', '🎨🔧 🔑 ki.prj.demo'])
    expect(run(stop(rebootstrap(heading, counts, items, listening, line), plain)).warning).toContain('⭐ or 🔧 beside the role glyph')
  expect(run(stop(rebootstrap(heading, counts, items, listening, '🧵 🔑 ki.prj.demo'), plain)).warning).toContain(
    "🧵 in the role glyph's place"
  )
})

test("an owner's mark word engages after an earlier key-form reply, and a conversational session stays quiet", () => {
  const keyed = transcript([
    { owner: 'Open ki.prj.demo', reply: rebootstrap(heading, counts, items, listening, keyThread) },
    { owner: 'mark' }
  ])
  expect(run(stop('Mark struck.', keyed)).reason).toContain('the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>')
  const conversational = transcript([{ owner: 'What is a 🔑 for?', reply: 'The keyholder mark.' }, { owner: 'mark' }])
  expect(run(stop('Marked.', conversational))).toEqual(silent)
})

// Kris, 14 November 2026, under REPLY-CHECK: in every session, coordinating or not, a reply asking the owner to decide,
// a fenced `text` block holding `<TAG> <letter>` lines, needs the block to open with a `1 · ` group heading and every
// such line to carry `(high)`, `(medium)` or `(low)` after the letter. Under HOOK-ENFORCE a, 18 November 2026, each
// line needs its `: <gloss>` too, and each tag takes one line only, the recommended option's, never alternatives.
const replyId = '**Reply 13:27**'
const decision = (...block: string[]): string =>
  [replyId, 'Two things need your word: whether to push now, and whether to keep the old hook.', ['```text', ...block, '```'].join('\n')].join('\n\n')
const shape =
  "under ki-coordination's owner report, a reply block opens with a 1 · <what the group is> heading and gives each tag one line, its recommended option only, reading <TAG> <letter> (high), (medium) or (low): <gloss>"
const conversation = transcript([{ owner: 'Should we push?' }])

test('a conversational reply with a well-formed reply block passes, glosses and all', () => {
  const block = decision(
    "1 · Landing, can run while you're away",
    'PUSH a (high): push now',
    'HOOK-KEEP b (low): keep the old hook',
    '',
    '2 · Later',
    '04-RULE2 a (medium): the second rule'
  )
  expect(run(stop(block, conversation, ordinary))).toEqual(silent)
  expect(run(stop(block, conversation))).toEqual(silent)
  expect(run(stop(block, join(root, 'gone.jsonl'), join(root, 'missing')))).toEqual(silent)
})

test('a reply block without its first group heading is held back in any session', () => {
  const outcome = run(stop(decision('PUSH a (high): push now'), conversation, ordinary))
  expect(outcome.reason).toBe(
    `This reply's reply block does not open with its first group heading, 1 · <what the group is>; ${shape}. Give the reply again in full with the reply block put right, since the last text is what the owner reads.`
  )
  expect(run(stop(decision('2 · Later', 'PUSH a (high): push now'), conversation, ordinary)).reason).toContain('does not open with its first group heading')
})

test('a reply block line without its confidence is held back, naming the line', () => {
  expect(run(stop(decision('1 · Now', 'PUSH a'), conversation, ordinary)).reason).toStartWith(
    "This reply's reply block has a line without (high), (medium) or (low) after the letter: PUSH a; "
  )
  const outcome = run(stop(decision('PUSH a', 'HOOK-KEEP b (certain)', 'GLOSS c: no confidence'), conversation, ordinary))
  expect(outcome.reason).toStartWith(
    "This reply's reply block does not open with its first group heading, 1 · <what the group is> and has lines without (high), (medium) or (low) after the letter: PUSH a, HOOK-KEEP b, GLOSS c; "
  )
})

test('a reply block line without its gloss is held back, naming the line', () => {
  expect(run(stop(decision('1 · Now', 'PUSH a (high)'), conversation, ordinary)).reason).toBe(
    `This reply's reply block has a line without : <gloss> after the confidence: PUSH a; ${shape}. Give the reply again in full with the reply block put right, since the last text is what the owner reads.`
  )
  for (const line of ['PUSH a (high):', 'PUSH a (high): ', 'PUSH a (high) push now', 'PUSH a (high):push now'])
    expect(run(stop(decision('1 · Now', line), conversation, ordinary)).reason).toContain('without : <gloss> after the confidence: PUSH a')
  // A line without its confidence is named for that alone.
  expect(run(stop(decision('1 · Now', 'PUSH a'), conversation, ordinary)).reason).not.toContain('<gloss> after the confidence')
})

test('a tag given more than once, offering alternatives, is held back, naming the tag', () => {
  expect(run(stop(decision('1 · Now', 'PUSH a (high): push now', 'PUSH b (low): wait for review'), conversation, ordinary)).reason).toBe(
    `This reply's reply block gives a tag more than once, offering alternatives: PUSH; ${shape}. Give the reply again in full with the reply block put right, since the last text is what the owner reads.`
  )
  // Across groups too, and each tag is named once however often it repeats.
  expect(
    run(stop(decision('1 · Now', 'PUSH a (high): push now', 'KEEP a (high): keep it', '', '2 · Later', 'PUSH b (low): wait', 'KEEP b (low): drop it', 'PUSH c (low): never'), conversation, ordinary)).reason
  ).toStartWith("This reply's reply block gives tags more than once, offering alternatives: PUSH, KEEP; ")
  // A tag may stand once in each of two separate blocks.
  const twoBlocks = [decision('1 · Now', 'PUSH a (high): push now'), '```text\n1 · Again\nPUSH a (high): push now\n```'].join('\n\n')
  expect(run(stop(twoBlocks, conversation, ordinary))).toEqual(silent)
})

test('every fault in a reply block is named together', () => {
  expect(run(stop(decision('PUSH a', 'KEEP a (high)', 'KEEP b (low): drop it'), conversation, ordinary)).reason).toStartWith(
    "This reply's reply block does not open with its first group heading, 1 · <what the group is>, has a line without (high), (medium) or (low) after the letter: PUSH a, has a line without : <gloss> after the confidence: KEEP a and gives a tag more than once, offering alternatives: KEEP; "
  )
})

test('text blocks that ask nothing stay quiet', () => {
  for (const reply of [
    ['Here is the art:', art].join('\n\n'),
    ['The log:', '```text', 'hello world', 'A b', 'TODO write the tests', 'M a', '```'].join('\n'),
    ['The shape:', '```text', '1 · <what the group is>', '<TAG> a (high)', '```'].join('\n'),
    ['Quoted inside another fence:', '````markdown', '```text', 'PUSH a', '```', '````'].join('\n'),
    ['A Markdown block:', '```markdown', 'PUSH a', '```'].join('\n'),
    'No block at all: PUSH a.'
  ])
    expect(run(stop(reply, conversation, ordinary))).toEqual(silent)
})

test('a reply block left unclosed at the end of the reply is still read', () => {
  expect(run(stop(`${replyId}\n\n\`\`\`text\n1 · Now\nPUSH a (high): push now`, conversation, ordinary))).toEqual(silent)
  expect(run(stop(`${replyId}\n\n\`\`\`text\nPUSH a (high): push now`, conversation, ordinary)).reason).toContain('does not open with its first group heading')
})

test('a reply block is never held back twice in a row, only warned', () => {
  const outcome = run(stop(decision('1 · Now', 'PUSH a'), conversation, ordinary, { stop_hook_active: true }))
  expect(outcome.warning).toBe(
    `Reply block check: this reply's reply block has a line without (high), (medium) or (low) after the letter: PUSH a; ${shape}. It was let through, since the hook never holds a reply back twice in a row.`
  )
})

test("a coordinating reply's reply block and footer are checked together", () => {
  const withBlock = (block: string): string => fullSummary.replace('None.', `### PUSH - Push now\n\n${block}`)
  expect(run(stop(`${replyId}\n\n${withBlock('```text\n1 · Now\nPUSH a (high): push now\n```')}`, plain))).toEqual(silent)
  expect(run(stop(withBlock('```text\nPUSH a (high): push now\n```'), plain)).reason).toStartWith(
    "This reply's reply block does not open with its first group heading, 1 · <what the group is>; "
  )
  const both = run(stop(summaryBody.replace('None.', '```text\n1 · Now\nPUSH a\n```'), plain))
  expect(both.reason).toStartWith(
    "This Summary's footer lacks the banner's ### state heading and the thread line, <role glyph> 🔑 <work-id> or 🧵 <work-id>, last, under ki-coordination's Banner section. This reply's reply block has a line without (high), (medium) or (low) after the letter: PUSH a; "
  )
  expect(both.reason).toContain('Give the reply again in full with them, since the last text is what the owner reads. It also has no Knowledge Islands art')
  const warned = run(stop(withBlock('```text\n1 · Now\nPUSH a\n```').replace(`\n\n${art}`, ''), plain))
  expect(warned.reason).toEndWith(
    "Give the reply again in full with the reply block put right, since the last text is what the owner reads. The Summary's footer also has no Knowledge Islands art above the banner; keep that only where the owner asked for it."
  )
})

// Kris, about 09:55 GMT on 17 November 2026, under GLYPH-TABLE and GLYPH-FALLBACK: one table holds every glyph, and a banner
// item takes an agreed glyph alone, a provisional glyph with its word in brackets, or the bracketed word alone. The hook
// warns on an agreed glyph with brackets, from its own copy of the table, which this test holds to the standard.
test("the hook's agreed glyphs are the standard's one table of glyphs", () => {
  const bare = (glyph: string): string => glyph.replace(/\uFE0F/gu, '')
  const standard = readFileSync(
    resolve(import.meta.dir, '..', '..', 'skills', 'work', 'ki-coordination', 'references', 'standard-coordination.md'),
    'utf8'
  )
  const lines = (standard.split('**One table of glyphs.**')[1] ?? '').split('\n')
  const start = lines.findIndex((line) => line.startsWith('| '))
  const end = lines.findIndex((line, at) => at > start && !line.startsWith('|'))
  const table = lines
    .slice(start + 2, end)
    .flatMap((line) => [...(line.split('|')[1] ?? '').matchAll(/`([^`]+)`/gu)].map((match) => bare(match[1] ?? '')))
  const copy = /^agreed='([^']*)'$/mu.exec(readFileSync(script, 'utf8'))?.[1]?.split(' ').map(bare)
  expect(table.length).toBeGreaterThan(20)
  expect(copy?.sort()).toEqual(table.sort())
})

test('a banner item with an agreed glyph and brackets warns; a provisional glyph or a bracketed word passes', () => {
  const banner = (item: string): string => summary(art, heading, counts, roadmap, pkg, item, listening, thread)
  for (const item of [
    '- 👤 FOOTER-HOOK · owner · at 21:10',
    '- 🌀 [rebasing] ki-agent-backpack · run/rebase · at 21:10',
    '- [rebasing] ki-agent-backpack · run/rebase · at 21:10'
  ])
    expect(run(stop(banner(item), plain))).toEqual(silent)
  for (const item of [
    '- 👤 [with you] FOOTER-HOOK · owner · at 21:10',
    '- 🅿️ [parked] 2 queries in the change documents',
    '- 🅿 [parked] 2 queries in the change documents',
    '- 🤖 [rebasing] ki-agent-backpack · run/rebase · at 21:10'
  ])
    expect(run(stop(banner(item), plain)).warning).toContain('a banner item pairing an agreed glyph with a bracketed state word')
  expect(run(stop(banner('- 👤 [with you] FOOTER-HOOK · owner · at 21:10'), plain), {}, '/bin/bash').warning).toContain(
    'a banner item pairing an agreed glyph'
  )
})
