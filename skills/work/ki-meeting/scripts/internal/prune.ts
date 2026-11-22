/**
 * Purpose: Choose which of a meeting room's messages a prune deletes and which it keeps, and write the transcript
 * lines that link each deleted message at its last commit, under the meeting standard's 4.14 and 4.17.
 * Boundary: Pure. It reads nothing and writes nothing; `scripts/prune-room.ts` gathers the files and Git facts.
 */

export type PruneMode = 'adjourn' | 'close' | 'running'

export type Message = {
  /** The file's name in `messages/`, as `20261116T1342Z-wayland-boards-committed.md`. */
  name: string
  /** The message file's text, front matter and body. */
  text: string
}

export type Decision = {
  name: string
  subject: string
  prune: boolean
  /** Why a message is kept; empty when it is pruned. */
  reason: string
}

/** Types that stay open until a message whose `ki-answers` names them (MSG-FORM). */
const ASKING_TYPES = new Set(['question', 'handoff', 'escalation', 'decision_gate'])

/** A message more than 24 hours old that has been answered goes from a sitting that runs on (ROOM-PRUNE). */
export const RUNNING_AGE_HOURS = 24

const NAME_TIME = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})Z-/

/** The time a message was posted, read from its file name, or null for a name that carries none. */
export const postedAt = (name: string): Date | null => {
  const match = NAME_TIME.exec(name)
  if (!match) return null
  const [, year, month, day, hour, minute] = match
  return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute)))
}

const frontMatter = (text: string): string => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
  return match?.[1] ?? ''
}

const field = (block: string, key: string): string => {
  const match = new RegExp(`^${key}:[ \\t]*(.*)$`, 'm').exec(block)
  return (match?.[1] ?? '')
    .replace(/\s+#.*$/, '')
    .trim()
    .replace(/^["']|["']$/g, '')
}

/** The file names a message answers: one name, or a flow list of them. */
const answered = (block: string): string[] => {
  const value = field(block, 'ki-answers')
  if (value === '' || value === '[]') return []
  return value
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((name) => name.trim().replace(/^["']|["']$/g, ''))
    .filter((name) => name !== '')
}

const subjectOf = (message: Message, block: string): string => {
  const subject = field(block, 'ki-subject')
  if (subject !== '') return subject
  const title = /^# (.+)$/m.exec(message.text)
  return title?.[1]?.trim() ?? message.name.replace(/\.md$/, '')
}

/**
 * Decide each message's fate. A message is kept while it carries an ask not yet answered, or when the caller names it
 * in `keep`, as for the owner's words not yet in a change document; in a sitting that runs on, a message also stays
 * until it is answered and more than 24 hours old. Every other message is pruned.
 */
export const decide = (
  messages: readonly Message[],
  mode: PruneMode,
  options: { now: Date; keep?: ReadonlySet<string> }
): Decision[] => {
  const blocks = new Map(messages.map((message) => [message.name, frontMatter(message.text)]))
  const answeredNames = new Set([...blocks.values()].flatMap(answered))
  const keep = options.keep ?? new Set<string>()
  return [...messages]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((message) => {
      const block = blocks.get(message.name) ?? ''
      const subject = subjectOf(message, block)
      const isAnswered = answeredNames.has(message.name)
      const kept = (reason: string): Decision => ({ name: message.name, subject, prune: false, reason })
      if (keep.has(message.name)) return kept('named by the caller to keep')
      if (ASKING_TYPES.has(field(block, 'ki-type')) && !isAnswered) return kept('carries an ask not yet answered')
      if (mode === 'running') {
        const posted = postedAt(message.name)
        if (posted === null) return kept('its name carries no time')
        const ageHours = (options.now.getTime() - posted.getTime()) / 3_600_000
        if (ageHours <= RUNNING_AGE_HOURS) return kept('not yet 24 hours old')
        if (!isAnswered) return kept('not yet answered or acknowledged')
      }
      return { name: message.name, subject, prune: true, reason: '' }
    })
}

/** One transcript line for the minutes, linking the message at the commit that last held it (4.17, item 5). */
export const transcriptLine = (decision: Decision, link: string): string => `- [${decision.subject}](${link})`

/** The GitHub base of a remote URL, as `https://github.com/<owner>/<repo>`, or null for another host. */
export const githubBase = (remote: string): string | null => {
  const match = /github\.com[:/]([^/]+)\/(.+?)(?:\.git)?\/?$/.exec(remote.trim())
  return match ? `https://github.com/${match[1]}/${match[2]}` : null
}
