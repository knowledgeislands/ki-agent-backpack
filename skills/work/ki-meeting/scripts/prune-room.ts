#!/usr/bin/env bun
/**
 * Purpose: Prune a meeting room's messages at an adjournment, at the close, or in a sitting that runs on, and print
 * the transcript lines the minutes carry, each linking a pruned message at its last commit.
 * Run: bun scripts/prune-room.ts --help
 * Boundary: Without `--write` it only reads the room and Git and prints. With `--write` it runs `git rm` on the pruned
 * messages, staging their deletion; it never commits, so the caller commits the deletions with the minutes in one
 * commit, as the meeting standard's 4.17 sets.
 *
 * Usage:
 *   bun scripts/prune-room.ts <adjourn|close|running> <meeting folder> [--keep <message file>]... [--write]
 *
 * `adjourn` and `close` prune every message in `messages/`; `running`, for a sitting that runs on, prunes only those
 * more than 24 hours old that a later message's `ki-answers` names. In every mode a message carrying an ask not yet
 * answered stays, and so does each message named with `--keep`, which is how the caller keeps the owner's words until
 * they are in a change document. A message not yet committed has no commit to link, so the script stops and names it.
 */

import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { decide, githubBase, type Message, type PruneMode, transcriptLine } from './internal/prune.ts'

const USAGE =
  'usage: bun scripts/prune-room.ts <adjourn|close|running> <meeting folder> [--keep <message file>]... [--write]'

const MODES = new Set<PruneMode>(['adjourn', 'close', 'running'])

const git = (cwd: string, ...args: string[]): string =>
  execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()

const fail = (message: string): never => {
  console.error(message)
  process.exit(2)
}

const main = (argv: string[]): void => {
  if (argv.length === 0 || argv.includes('--help') || argv.includes('-h')) {
    console.log(USAGE)
    return
  }
  const [mode, folderArg, ...rest] = argv
  if (!MODES.has(mode as PruneMode) || folderArg === undefined) fail(USAGE)
  const keep = new Set<string>()
  let write = false
  for (let index = 0; index < rest.length; index += 1) {
    const arg = rest[index]
    if (arg === '--write') write = true
    else if (arg === '--keep' && rest[index + 1] !== undefined) {
      keep.add(rest[index + 1] as string)
      index += 1
    } else fail(`unknown argument: ${arg}\n${USAGE}`)
  }

  const folder = resolve(folderArg as string)
  const messagesDir = join(folder, 'messages')
  if (!existsSync(join(folder, '_index.md'))) fail(`no meeting here: ${folder} has no _index.md`)
  if (!existsSync(messagesDir)) {
    console.log('No messages/ folder: nothing to prune.')
    return
  }

  const root = git(folder, 'rev-parse', '--show-toplevel')
  const base = githubBase(git(root, 'remote', 'get-url', 'origin'))
  const messages: Message[] = readdirSync(messagesDir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => ({ name, text: readFileSync(join(messagesDir, name), 'utf8') }))
  const decisions = decide(messages, mode as PruneMode, { now: new Date(), keep })
  const unknown = [...keep].filter((name) => !messages.some((message) => message.name === name))
  if (unknown.length > 0) fail(`--keep names no message in the room: ${unknown.join(', ')}`)

  const pruned = decisions.filter((decision) => decision.prune)
  const lines: string[] = []
  const uncommitted: string[] = []
  for (const decision of pruned) {
    const path = relative(root, join(messagesDir, decision.name))
    const commit = git(root, 'log', '-1', '--format=%H', '--', path)
    const dirty = git(root, 'status', '--porcelain', '--', path)
    if (commit === '' || dirty !== '') {
      uncommitted.push(decision.name)
      continue
    }
    const link = base ? `${base}/blob/${commit}/${path}` : `${path} at ${commit}`
    lines.push(transcriptLine(decision, link))
  }
  if (uncommitted.length > 0) {
    fail(
      `Commit these messages first, so the transcript can link them:\n${uncommitted.map((n) => `- ${n}`).join('\n')}`
    )
  }

  console.log(`Transcript (${pruned.length} pruned):`)
  console.log(lines.length > 0 ? lines.join('\n') : '- none')
  const kept = decisions.filter((decision) => !decision.prune)
  if (kept.length > 0) {
    console.log(`\nKept (${kept.length}):`)
    for (const decision of kept) console.log(`- ${decision.name}: ${decision.reason}`)
  }
  if (!write) {
    console.log('\nDry run: nothing removed. Add --write to stage the deletions.')
    return
  }
  if (pruned.length > 0) {
    git(root, 'rm', '-q', '--', ...pruned.map((decision) => relative(root, join(messagesDir, decision.name))))
  }
  console.log(`\nStaged ${pruned.length} deletions. Put the transcript in the minutes and commit both together.`)
}

main(process.argv.slice(2))
