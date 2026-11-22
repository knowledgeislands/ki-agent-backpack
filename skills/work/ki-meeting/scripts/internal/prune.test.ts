import { describe, expect, test } from 'bun:test'
import { decide, githubBase, type Message, postedAt } from './prune.ts'

const message = (name: string, fields: Record<string, string>): Message => ({
  name,
  text: `---\nki-document-type: message\n${Object.entries(fields)
    .map(([key, value]) => `ki-${key}: ${value}`)
    .join('\n')}\n---\n\n# ${fields.subject ?? name}\n`
})

const now = new Date(Date.UTC(2026, 10, 22, 20, 0))
const ask = message('20261121T1000Z-voice-which-way.md', {
  from: 'actor:natter',
  subject: 'Which way?',
  type: 'question'
})
const reply = message('20261121T1005Z-kitteth-this-way.md', {
  from: 'actor:kitteth',
  subject: 'Re: Which way?',
  answers: '20261121T1000Z-voice-which-way.md'
})
const openAsk = message('20261122T1900Z-kitteth-turn-on.md', { subject: 'Turn on?', type: 'question' })
const status = message('20261122T1910Z-kitteth-landed.md', { subject: '"Step 4 landed"' })

describe('prune at an adjournment or close', () => {
  test('prunes answered asks and plain messages, and keeps an open ask', () => {
    const decisions = decide([status, openAsk, reply, ask], 'adjourn', { now })
    expect(decisions.map(({ name, prune }) => [name, prune])).toEqual([
      [ask.name, true],
      [reply.name, true],
      [openAsk.name, false],
      [status.name, true]
    ])
    expect(decisions[2]?.reason).toBe('carries an ask not yet answered')
    expect(decisions[3]?.subject).toBe('Step 4 landed')
  })

  test('keeps a message the caller names, as for the owner words not yet recorded', () => {
    const [decision] = decide([status], 'close', { now, keep: new Set([status.name]) })
    expect(decision?.prune).toBe(false)
  })
})

describe('prune in a sitting that runs on', () => {
  test('prunes only answered messages more than 24 hours old', () => {
    const decisions = decide([ask, reply, status], 'running', { now })
    expect(decisions.map(({ prune }) => prune)).toEqual([true, false, false])
    expect(decisions[1]?.reason).toBe('not yet answered or acknowledged')
    expect(decisions[2]?.reason).toBe('not yet 24 hours old')
  })
})

describe('helpers', () => {
  test('reads the posting time from the file name', () => {
    expect(postedAt(ask.name)?.toISOString()).toBe('2026-11-21T10:00:00.000Z')
    expect(postedAt('notes.md')).toBeNull()
  })

  test('turns a GitHub remote into its web base', () => {
    expect(githubBase('git@github.com:krisb/ki-cairn-store.git')).toBe('https://github.com/krisb/ki-cairn-store')
    expect(githubBase('https://github.com/krisb/ki-cairn-store')).toBe('https://github.com/krisb/ki-cairn-store')
    expect(githubBase('https://example.org/x.git')).toBeNull()
  })
})
