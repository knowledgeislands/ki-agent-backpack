import { expect, test } from 'bun:test'
import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { generate } from './generate/index.ts'

// The report heading and the glyph banner are normative text: every
// coordinator renders both the same way, so the standard and the output style
// must agree. The report heading is the rich-text heading Kris asked for on
// 2026-10-14, "a better heading that is the actual just normal text, so it can
// be rich text rather than fixed width text", with its single rule since
// 2026-10-17, "we can just go single horizontal rule", so no saved report opens
// with `---`. Under REPLY-FORMAT, agreed on 7 November 2026, its form line names
// the reply structure, the time and the last mark, with no state, and the banner
// heading alone shows the state. The banner is the Work Process note's, set with
// BANNER-GLYPH on 18 October and TARGET-GLYPH the same day: the glyphs come first
// and the last glyph is whose move it is, a settled state shows its holder's glyph
// alone and an arrow appears only in a handoff state. The block-letter frames
// retired with the work model. This test is the mechanical check the COORD rubric
// cannot run against a repository, because the transcripts the banners appear in
// are not tracked.

const skillRoot = resolve(import.meta.dir, '..')
const harnessRoot = resolve(skillRoot, '..', '..', '..')
const references = resolve(skillRoot, 'references')
/** The standard's reference files, core first, so an assertion holds wherever its rule lands. */
const standardFiles = readdirSync(references)
  .filter((name) => /^standards?-.*\.md$/.test(name))
  .sort(
    (a, b) => Number(b === 'standard-coordination.md') - Number(a === 'standard-coordination.md') || a.localeCompare(b)
  )
const readReference = (name: string): string => readFileSync(resolve(references, name), 'utf8')
const core = readReference('standard-coordination.md')
/** Joins the reference files so a fenced block never runs on from one file into the next. */
const FILE_BREAK = '\n<!-- ki-coordination:file -->\n'
const standard = standardFiles.map(readReference).join(FILE_BREAK)
const outputStyle = readFileSync(resolve(harnessRoot, 'output-styles', 'ki-coordinator.md'), 'utf8')
const hook = readFileSync(resolve(harnessRoot, 'hooks', 'coordinator-reminder', 'coordinator-reminder.sh'), 'utf8')

/**
 * The package's entry file in the Cairn store, the one link a report heading carries under HEADING-FIX (Kris, 17
 * November 2026): never a repository, README or theme page.
 */
const PACKAGE_INDEX = '/Users/krisbrown/kis/cairn/ki-cairn-store/work/ki/ki.ways-of-working/_index.md'
/** The report heading opening a Summary, as the standard and the output style draw it. */
const HEADING_EXAMPLE = [
  `# Model › [Ways of working](${PACKAGE_INDEX})`,
  '',
  '**Summary at 23:52 BST · last mark 22:34 BST**',
  '',
  '---',
  '',
  '## Summary'
].join('\n')
/**
 * The `#` heading under HEADING-FIX: an optional plain theme and ` › `, the work's name linked to its package's
 * `_index.md` by absolute path, and for a run report ` › <run name>`.
 */
const HEADING_LINE = /^# (?:[^[\]()]+ › )?\[[^\]]+\]\(\/[^)]+\/_index\.md\)( › [a-z0-9-]+)?$/
/** Territory work's heading: the territory linked to its package's `_index.md`, then a plain ` › State of play`. */
const STATE_OF_PLAY_LINE = /^# \[[^\]]+\]\([^)]+\) › State of play$/
/** A glyph state: a settled holder's glyph alone, or an arrow in a handoff state, with an optional reason; never a target in brackets. */
const GLYPH_STATE = `(?:🤖 With worker|👤 With supervisor|🤖 → 👤 Handoff to supervisor(?: · blocked)?|👤 → 🤖 Handoff to worker|→ 🎯 Handoff to [^·*]+|⏸️ On hold(?: · paused until [^·*]+)?|💤 Snoozing \\(on hold\\)|🏁 Finished)`
/** A friendly time: the local time and zone, naming the day where it is not today. */
const FRIENDLY_TIME = String.raw`(?:yesterday |[A-Z][a-z]{2} \d{1,2} [A-Z][a-z]{2} )?\d{2}:\d{2} [A-Z]{3,4}`
/**
 * The form line under REPLY-FORMAT: the reply structure, the local time and the last mark, bold, in friendly times and
 * with no state; a hold's Stop names the hold's own mark.
 */
const FORM_LINE = new RegExp(
  String.raw`^\*\*(?:(?:Summary|Status|Bootstrap|Run report|Stop) at ${FRIENDLY_TIME} · last mark|Stop at ${FRIENDLY_TIME} · mark) ${FRIENDLY_TIME}\*\*$`,
  'u'
)
/** The banner heading: `### <glyph state> · at <time>` under SNOOZE-HEADING, or Finished's close line. */
const BANNER_HEADING = new RegExp(
  String.raw`^### (?:${GLYPH_STATE} · at \d{2}:\d{2} [A-Z]{3,4}|🏁 Finished · .+ closed at \d{2}:\d{2} [A-Z]{3,4})$`,
  'u'
)
/** A glyph without its variation selector, so `🅿️` and `🅿` read alike. */
const bare = (glyph: string): string => glyph.replace(/\uFE0F/gu, '')
/** The backticked glyphs of a Markdown table's first cell. */
const cellGlyphs = (cell: string): string[] => [...cell.matchAll(/`([^`]+)`/gu)].map((match) => bare(match[1] ?? ''))
/** The rows of the first Markdown table after `marker` in `text`, each as its trimmed cells. */
const tableAfter = (text: string, marker: string): string[][] => {
  const lines = (text.split(marker)[1] ?? '').split('\n')
  const start = lines.findIndex((line) => line.startsWith('| '))
  const end = lines.findIndex((line, at) => at > start && !line.startsWith('|'))
  return lines.slice(start + 2, end).map((line) =>
    line
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim())
  )
}
/**
 * The one table of glyphs under GLYPH-TABLE (Kris, 17 November 2026): "the key thing is to create a single table with all
 * the glyphs that are used." Read from the core, so the test holds no copy of it.
 */
const GLYPH_ROWS = tableAfter(core, '**One table of glyphs.**')
/** Every agreed glyph, retired ones included: a provisional glyph clashes with none of them. */
const AGREED = new Set(GLYPH_ROWS.flatMap(([glyph = '']) => cellGlyphs(glyph)))
/** The agreed glyphs that open a banner item, F6 in the table's Where it appears. */
const ITEM_GLYPHS = new Set(
  GLYPH_ROWS.filter(([, , where = '']) => /\bF6\b/.test(where)).flatMap(([glyph = '']) => cellGlyphs(glyph))
)
/**
 * The role glyphs, which the table links to `ki-work-package`'s role catalogue rather than copying, read from its Glyph
 * column by the header, since the catalogue gained a Rank column under ROLE-RANK (Kris, 17 November 2026).
 */
const ROLE_GLYPHS = ((): Set<string> => {
  const roles = readFileSync(resolve(skillRoot, '..', 'ki-work-package', 'references', 'standard-roles.md'), 'utf8')
  const header =
    (roles.split('### 4.3 Role catalogue')[1] ?? '').split('\n').find((line) => line.startsWith('| ')) ?? ''
  const column = header
    .split('|')
    .slice(1, -1)
    .map((cell) => cell.trim())
    .indexOf('Glyph')
  return new Set(tableAfter(roles, '### 4.3 Role catalogue').map((row) => bare(row[column] ?? '')))
})()
/** The bracketed state words ITEM-GLYPHS retired, each now an agreed glyph's, so never written in brackets. */
const RETIRED_WORDS = new Set(
  'running queued with-you stuck blocked parked release finished window scheduled stranded branch stash'
    .split(' ')
    .map((word) => word.replace('-', ' '))
)
/**
 * The form of a banner item, `- <glyph> <what>`, under ITEM-GLYPHS and GLYPH-FALLBACK (Kris, 17 November 2026): an agreed
 * item glyph alone; a provisional glyph, clashing with no agreed or role glyph, followed by its bracketed state word; or the
 * bracketed state word alone, never one an agreed glyph already names. An agreed glyph with brackets has no form. The live
 * items name a holder and end `· at <time>`; housekeeping lives in the report body.
 */
const itemForm = (line: string): 'agreed' | 'provisional' | 'bracketed' | undefined => {
  const match = /^- (?:([^\s!-~]+) )?(?:\[([a-z][a-z -]*)\] )?(?!\[)\S.*$/u.exec(line)
  if (!match) return undefined
  const [, glyph, word] = match
  if (glyph === undefined) return word === undefined || RETIRED_WORDS.has(word) ? undefined : 'bracketed'
  const known = AGREED.has(bare(glyph)) || ROLE_GLYPHS.has(bare(glyph))
  if (word === undefined) return ITEM_GLYPHS.has(bare(glyph)) ? 'agreed' : undefined
  return known ? undefined : 'provisional'
}
/** The items BANNER-TRIM moved out of the banner and into the report body. */
const BODY_ITEM = /^- \[(handoff|committed|uncommitted|recovered|unlogged|behind)\]/
const HOLDER_ITEM =
  /^- (?:🤖|⏳|👤|⛔) [^·]+ · (owner|agent|run\/[\w-]+|work\/[\w.-]+|person\/[\w-]+|repo\/[\w-]+) · at \d{2}:\d{2}$/u
const PROJECT_THREAD_LINE = '⚒️ 🔑 ki.ways-of-working'
const TERRITORY_THREAD_LINE = '🧵 ki.sop.main'
/**
 * The thread line under STAGE-C-ROLES (Kris, 7 November 2026): `<role glyph> 🔑 <work-id>`, or `🧵 <work-id>` for a
 * session with no role yet and for every run report; and under SEAT-LINE a (Kris, 14 November 2026) and SEAT-AT a
 * (Kris, 16 November 2026), `<role glyph> <package>@<role>` for a seat working in a package without its keys, the
 * package a sub-package's `<parent id>+<slug>` where the seat works one.
 */
const SEAT_FORM = String.raw`[^\s!-~]+ 🔑 [a-z0-9-]+(?:\.[a-z0-9-]+){0,2}|[^\s!-~]+ [a-z0-9-]+(?:\.[a-z0-9-]+){1,3}(?:\+[a-z0-9-]+)?@[a-z]+(?:-[a-z]+)*`
/**
 * Under NAME-FIRST (Kris, 17 November 2026) a seat whose actor is named puts the actor's roster `ki-name` first and the
 * seat's form in brackets, as `Kitteth (🪨 🔑 cairn.summit)`; `🧵 <work-id>` never takes a name.
 */
const THREAD_LINE = new RegExp(
  String.raw`^(?:🧵 [a-z0-9-]+(?:\.[a-z0-9-]+){0,2}|${SEAT_FORM}|[A-Za-z][A-Za-z0-9.-]*(?: [A-Za-z][A-Za-z0-9.-]*)* \((?:${SEAT_FORM})\))$`,
  'u'
)
/** The heading-for line: what the worker is doing, an arrow and the hold or handoff it is heading for. */
const HEADING_FOR_LINE =
  /^↪️ (?:draining → (?:⏸️ On hold|💤 Snoozing \(on hold\))|(?:draining|finishing) → 👤 Handoff to supervisor|finishing → 🎯 Handoff to [^·*]+)$/u
/** The counts line of a live state: all five views, zeros written, and the records awaiting acceptance where any are. */
const COUNTS_LINE =
  /^🤖 \d+ running · ⏳ \d+ queued · 👤 \d+ with you · ⛔ \d+ blocked · 🅿️ \d+ parked(?: · 📥 \d+ to accept)?$/u
/** The listening line under LISTEN-LINE: the meetings the session is in, by their ids, joined by `, `. */
const MEETING_LINE = /^👂 in [a-z0-9-]+(?:\.[a-z0-9-]+)*(?:, [a-z0-9-]+(?:\.[a-z0-9-]+)*)*$/u
/** The listening line while the inbox watcher was armed, before LISTEN-LINE, read only in past reports. */
const LISTEN_LINE = /^👂 listening$/u
/** The listening line REPORT-FORMS-TIDY gave a hold waiting for a message, which SNOOZE replaced with plain listening. */
const LISTEN_HOLD_LINE = '👂 listening · a message releases the hold'
/** The listening line otherwise, its default before LISTEN-LINE, read only in past reports. */
const LISTEN_OFF_LINE = /^🔇 not listening$/u
/** The roadmap line under FOOTER-COUNTS, in a Full reply's footer, reading none where the repository has no roadmap. */
const ROADMAP_LINE =
  /^🗺️ roadmap · (?:none|(?:1 record|(?!1 )\d+ records) · \d+ open · \d+ done awaiting prune · (?:1 idea|(?!1 )\d+ ideas))$/u
/** The package line under FOOTER-COUNTS, beside the roadmap line in a Full reply's footer. */
const PACKAGE_LINE = /^📦 package · changes \d+ · open \d+ · held \d+ · meetings \d+$/u
/** The sync line SYNC-LINE-OFF removed from every banner, read only in past reports. */
const SYNC_LINE = /^🔄 (?:not )?syncing for [a-z0-9<>-]+$/u
/** The standard less its Generated surfaces sources, whose text is checked through what they render. */
const withoutSources = (text: string): string =>
  text.replace(/<!-- ki-coordination:source [\w-]+ -->\n\n(`{3,})[a-z]*\n[\s\S]*?\n\1\n/g, '')

/** Every fenced `markdown` block in a document, as lines. */
const markdownBlocks = (text: string): string[][] =>
  text.split(FILE_BREAK).flatMap((file) =>
    withoutSources(file)
      .split('```markdown\n')
      .slice(1)
      .map((block) => block.split('\n```')[0]?.split('\n') ?? [])
  )

/** The blocks that open with a `#` report heading. */
const headings = (text: string): string[][] =>
  markdownBlocks(text).filter((lines) => lines.some((line) => line.startsWith('# ')))

/** The blocks that open with a `###` glyph banner heading. */
const banners = (text: string): string[][] =>
  markdownBlocks(text).filter((lines) => BANNER_HEADING.test(lines[0] ?? ''))

/** A report heading: the `#` heading, a blank line, the form line, a blank line, one rule, a blank line, then the first section. */
const expectReportHeading = (lines: string[] | undefined): void => {
  expect(lines).toBeDefined()
  if (!lines) return
  expect(lines[0]?.match(HEADING_LINE) ?? lines[0]?.match(STATE_OF_PLAY_LINE)).not.toBeNull()
  expect(lines[1]).toBe('')
  expect(lines[2]).toMatch(FORM_LINE)
  expect(lines[3]).toBe('')
  expect(lines[4]).toBe('---')
  expect(lines[5]).toBe('')
  expect(lines[6]).toMatch(/^## (Done|Summary)$/)
  expect(lines.slice(7).filter((line) => line !== '')).toEqual([])
}

/**
 * A banner, top to bottom under FOOTER-LAYOUT and REPLY-FORMAT: the heading, a blank line, a counts line where live, a
 * blank line, then in a Full reply's footer under FOOTER-COUNTS the roadmap line and the package line, each followed by a
 * blank line, the items, then each closing line after a blank line: the heading-for line where one stands, the listening
 * line while the session is in a meeting and never at Finished (LISTEN-LINE), and the thread line last.
 */
const expectBanner = (lines: string[]): void => {
  expect(lines[0]).toMatch(BANNER_HEADING)
  expect(lines[1]).toBe('')
  const finished = lines[0]?.startsWith('### 🏁') ?? false
  expect(lines.at(-1)).toMatch(THREAD_LINE)
  expect(lines.filter((line) => THREAD_LINE.test(line))).toHaveLength(1)
  let end = lines.length - 1
  const closing: string[] = []
  while (end > 1 && lines[end - 1] === '' && !lines[end - 2]?.startsWith('- ')) {
    closing.unshift(lines[end - 2] ?? '')
    end -= 2
  }
  expect(lines[end - 1]).toBe('')
  let at = 0
  if (HEADING_FOR_LINE.test(closing[at] ?? '')) at += 1
  const listening = MEETING_LINE.test(closing[at] ?? '')
  if (listening) at += 1
  expect(at).toBe(closing.length)
  if (finished) expect(listening).toBe(false)
  let first = 2
  if (!finished) {
    const hold = /^### (?:⏸️|💤)/u.test(lines[0] ?? '')
    expect(lines[2]).toMatch(hold ? /^(?:⏸️|💤) [a-z ]+ · 🅿️ \d+ quer(?:y|ies) parked$/u : COUNTS_LINE)
    expect(lines[3]).toBe('')
    first = 4
    if (ROADMAP_LINE.test(lines[first] ?? '')) {
      expect(lines[first + 1]).toBe('')
      expect(lines[first + 2]).toMatch(PACKAGE_LINE)
      first += 2
    }
    if (PACKAGE_LINE.test(lines[first] ?? '')) {
      expect(lines[first + 1]).toBe('')
      first += 2
    }
  }
  const items = lines.slice(first, end - 1)
  expect(items.length).toBeGreaterThan(0)
  for (const item of items) expect([item, itemForm(item)]).toEqual([item, 'agreed'])
  for (const item of items.filter((line) => /^- (?:🤖|⏳|👤|⛔) /u.test(line))) expect(item).toMatch(HOLDER_ITEM)
  for (const item of items) expect(item).not.toMatch(/decision \d|#\d/)
}

// Kris, 09:26 GMT on 17 November 2026, relayed by ki.cairn's warden, under ITEM-GLYPHS: "I'm happy to use the glyphs
// rather than the square brackets, but don't use the glyph and the square brackets." Each holder line opens with its
// state's glyph alone.
test('each holder line opens with its state glyph alone, never a bracketed state word', () => {
  for (const line of [
    '- 👤 Ten decisions from the window · owner · at 07:47',
    '- 🤖 work-model · run/work-model · at 23:20',
    '- ⛔ work-model stuck · run/work-model · at 23:20',
    '- 🅿️ 2 queries in the change documents',
    '- ⏸️ after the harness migration lands, or `resume`',
    '- 💤 a message arrives, or `resume`',
    '- 🏁 14 work items accepted',
    '- 🧹 stranded run/work-model · ki.ways-of-working',
    '- 🪟 until 08:00 GMT · stop the wake'
  ])
    expect([line, itemForm(line)]).toEqual([line, 'agreed'])
  for (const line of [
    '- [with you] WORK-HOME · owner · at 22:58',
    '- 👤 [with you] WORK-HOME · owner · at 22:58',
    '- [parked] 1',
    '- [release] a message arrives, or `resume`'
  ])
    expect([line, itemForm(line)]).toEqual([line, undefined])
  for (const text of [standard, outputStyle]) {
    expect(text).not.toMatch(
      /`(?:- )?\[(?:running|queued|with you|stuck|blocked|parked|release|finished|scheduled|window|state)\]/
    )
    for (const lines of banners(text)) expect(lines.some((line) => line.startsWith('- ['))).toBe(false)
  }
  expect(standard).toContain('`- <glyph> <what> · <holder> · at <time>`')
  expect(standard).toContain('ITEM-GLYPHS')
})

// Kris, about 09:55 GMT on 17 November 2026, relayed by the Cairn summit's guardian, under GLYPH-TABLE: "the key thing is
// to create a single table with all the glyphs that are used." Every glyph the standard and the output style write is in
// the core's one table, or is a role glyph the table links to the role catalogue.
test('one table holds every glyph the coordination surfaces use', () => {
  expect(GLYPH_ROWS.length).toBeGreaterThan(20)
  for (const row of GLYPH_ROWS) expect([row.join(' | '), row.length]).toEqual([row.join(' | '), 3])
  expect([...ITEM_GLYPHS].sort()).toEqual(
    ['🤖', '⏳', '👤', '⛔', '🅿️', '⏸️', '💤', '🪟', '⏰', '🏁', '🧹'].map(bare).sort()
  )
  for (const glyph of ['→', '↪️', '🎯', '📥', '🗺️', '📦', '👂', '🧵', '🔑', '🌐'].map(bare))
    expect(AGREED).toContain(glyph)
  expect(ROLE_GLYPHS.size).toBeGreaterThan(10)
  expect(
    GLYPH_ROWS.some(([glyph = '', , where = '']) => glyph === 'Role glyph' && where.includes('#43-role-catalogue'))
  ).toBe(true)
  for (const glyph of ROLE_GLYPHS) expect([glyph, AGREED.has(glyph)]).toEqual([glyph, false])
  const used = new Set(
    [standard, outputStyle].flatMap((text) =>
      [...text.matchAll(/(?:\p{Extended_Pictographic}\uFE0F?|→)(?! \[)/gu)].map(([glyph]) => bare(glyph))
    )
  )
  for (const glyph of used) expect([glyph, AGREED.has(glyph) || ROLE_GLYPHS.has(glyph)]).toEqual([glyph, true])
  for (const name of ['standard-unattended.md', 'standard-territory.md', 'standard-report-forms.md'])
    expect(readReference(name)).toContain('[table of glyphs](standard-coordination.md#46-banner)')
  expect(core).toContain('GLYPH-TABLE')
})

// Kris, about 09:55 GMT on 17 November 2026, under GLYPH-FALLBACK: "if you've got a glyph that you can use instead of the
// square brackets in the name, you should do. Otherwise you can use the square brackets", and "if you do make a choice like
// that, you must show the glyph and then the value in the brackets, because it's not a glyph that's recognized."
test('an item takes an agreed glyph alone, a provisional glyph with its word in brackets, or the bracketed word alone', () => {
  expect(itemForm('- 🤖 work-model · run/work-model · at 23:20')).toBe('agreed')
  expect(itemForm('- 🌀 [rebasing] ki-agent-backpack · run/rebase · at 09:58')).toBe('provisional')
  expect(itemForm('- [rebasing] ki-agent-backpack · run/rebase · at 09:58')).toBe('bracketed')
  for (const line of [
    '- 🤖 [running] work-model · run/work-model · at 23:20',
    '- 🅿️ [rebasing] ki-agent-backpack · run/rebase · at 09:58',
    '- 🗺️ [rebasing] ki-agent-backpack · run/rebase · at 09:58',
    '- 🔇 [rebasing] ki-agent-backpack · run/rebase · at 09:58',
    '- 📐 [rebasing] ki-agent-backpack · run/rebase · at 09:58',
    '- 🌀 rebasing ki-agent-backpack · run/rebase · at 09:58',
    '- 🗺️ ki-agent-backpack · run/rebase · at 09:58',
    '- [running] work-model · run/work-model · at 23:20',
    '- 🌀 [rebasing] [rebasing] ki-agent-backpack · run/rebase · at 09:58'
  ])
    expect([line, itemForm(line)]).toEqual([line, undefined])
  for (const text of [core, outputStyle]) {
    expect(text).toContain('`- 🌀 [rebasing] <what> · <holder> · at <time>`')
    expect(text).toContain('`- [rebasing] <what> · <holder> · at <time>`')
    expect(text).toContain('GLYPH-FALLBACK')
  }
  expect(core).toContain('An agreed glyph is never paired with brackets.')
  expect(core).toContain('GLYPH-REVIEW')
  expect(readFileSync(resolve(skillRoot, 'SKILL.md'), 'utf8')).toContain(
    'List the provisional glyphs and bracketed state words seen in reports since the last refresh'
  )
})

test('the standard carries the report heading linking only the package, the form line and one rule', () => {
  const found = headings(standard)
  expect(found).toHaveLength(3)
  const [summary, territory, runReport] = found
  expect(summary?.join('\n')).toBe(HEADING_EXAMPLE)
  expectReportHeading(summary)
  expect(territory?.[0]).toBe('# [<Territory>](<store>/work/<territory>/<territory>.summit/_index.md) › State of play')
  expect(territory?.[2]).toBe('**Bootstrap at 09:13 BST · last mark yesterday 18:05 BST**')
  expect(territory?.[6]).toBe('## Done')
  expectReportHeading(territory)
  expect(runReport?.[0]).toBe(`# Model › [Ways of working](${PACKAGE_INDEX}) › migrate-phase1`)
  expect(runReport?.[2]).toBe('**Run report at 20:40 BST · last mark 14:54 BST**')
  expectReportHeading(runReport)
})

test('the form line names the reply structure, the local time and the last mark, in friendly times and with no state', () => {
  for (const structure of ['Summary', 'Status', 'Bootstrap', 'Run report', 'Stop'])
    expect(`**${structure} at 19:13 BST · last mark 14:54 BST**`).toMatch(FORM_LINE)
  expect('**Bootstrap at 09:13 BST · last mark yesterday 18:05 BST**').toMatch(FORM_LINE)
  expect('**Summary at 09:13 GMT · last mark Thu 5 Nov 09:12 GMT**').toMatch(FORM_LINE)
  expect('**Stop at 15:02 BST · mark 14:58 BST**').toMatch(FORM_LINE)
  expect('**Summary at 15:02 BST · mark 14:58 BST**').not.toMatch(FORM_LINE)
  expect('**🤖 With worker · Summary at 19:13 BST · last mark 14:54 BST**').not.toMatch(FORM_LINE)
  expect('**🤖 With worker · Summary at 19:13 BST · since 14:54 BST**').not.toMatch(FORM_LINE)
  expect('**⏸️ On hold · Hold report at 15:02 BST · mark 14:58 BST**').not.toMatch(FORM_LINE)
  for (const retired of ['Recap', 'Full summary', 'Re-bootstrap', 'Finish report', 'Position', 'Update'])
    expect(`**${retired} at 09:05 GMT · last mark 08:54 GMT**`).not.toMatch(FORM_LINE)
  expect('**Summary at 2026-10-14T17:03:02Z · last mark 14:54 BST**').not.toMatch(FORM_LINE)
  expect('# [Ways of working](/a/b.md)').not.toMatch(HEADING_LINE)
  expect('# [Inbox](/s/work/personal/personal.inbox/_index.md)').toMatch(HEADING_LINE)
  expect('# [Model](/a/model.md) › [Ways of working](/s/work/ki/ki.ways-of-working/_index.md)').not.toMatch(
    HEADING_LINE
  )
  expect('# [ki-agent-backpack](/Users/krisbrown/kis/ki/ki-agent-backpack)').not.toMatch(HEADING_LINE)
  expect('# [Tools](/a/README.md)').not.toMatch(HEADING_LINE)
  expect('# [KI Capital](/a/b.md) › State of play').toMatch(STATE_OF_PLAY_LINE)
})

test('the glyph banner shows a settled holder alone and an arrow only in a handoff state', () => {
  for (const settled of ['🤖 With worker', '👤 With supervisor', '💤 Snoozing (on hold)'])
    expect(`### ${settled} · at 07:40 BST`).toMatch(BANNER_HEADING)
  for (const handoff of ['🤖 → 👤 Handoff to supervisor', '👤 → 🤖 Handoff to worker', '→ 🎯 Handoff to run/obs-push'])
    expect(`### ${handoff} · at 07:55 BST`).toMatch(BANNER_HEADING)
  expect('### 👤 → 👤 With supervisor · at 07:40 BST').not.toMatch(BANNER_HEADING)
  expect('### 🤖 Handoff to supervisor · at 07:40 BST').not.toMatch(BANNER_HEADING)
  expect('### 🏁 Finished · Ways of working closed at 18:00 BST').toMatch(BANNER_HEADING)
})

// Kris, 31 October 2026, under DRAIN-TARGET: while work is With worker but deliberately moving towards a hold or a
// handoff, the banner says so. Under FOOTER-LAYOUT the same afternoon the target left the heading for a line of its own
// below the list: "the point at the top in the header is who it's with, from a state perspective". The line is not a
// state or a move, so the counts and items keep their shape and the target is never a count or an item.
test('With worker names the hold or handoff it is heading for in its own line below the list, never in brackets', () => {
  const targets = [
    'draining → ⏸️ On hold',
    'draining → 👤 Handoff to supervisor',
    'finishing → 👤 Handoff to supervisor',
    'finishing → 🎯 Handoff to <target>'
  ]
  for (const target of targets) {
    expect(`↪️ ${target}`).toMatch(HEADING_FOR_LINE)
    expect(`### 🤖 With worker (${target}) · at 13:05 GMT`).not.toMatch(BANNER_HEADING)
    for (const text of [standard, outputStyle]) expect(text).toContain(`\`↪️ ${target}\``)
  }
  expect('↪️ draining').not.toMatch(HEADING_FOR_LINE)
  expect('↪️ finishing → ⏸️ On hold').not.toMatch(HEADING_FOR_LINE)
  expect('(draining → ⏸️ On hold)').not.toMatch(HEADING_FOR_LINE)
  const draining = banners(standard).find((lines) => lines.some((line) => HEADING_FOR_LINE.test(line)))
  expect(draining?.[0]).toBe('### 🤖 With worker · at 23:41 BST')
  expect(draining?.slice(-5)).toEqual([
    '- 👤 WORK-HOME · owner · at 22:58',
    '',
    '↪️ draining → ⏸️ On hold',
    '',
    PROJECT_THREAD_LINE
  ])
  expect(standard).toContain('**Heading for a hold or a handoff.**')
  for (const name of ['DRAIN-TARGET', 'FOOTER-LAYOUT']) expect(standard).toContain(name)
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('the target is never a count or an item')
    expect(text).toMatch(/runs still finishing count and list as `🤖` running/u)
  }
})

// Kris, 16 November 2026, under LISTEN-LINE: "it should indicate meetings it's in or not. Otherwise should be left off".
// Listening means only whether a session is in a meeting, so the listening line names the meetings it is in and is left
// off in none; the inbox watcher keeps its status fields and has no line. Kris removed the sync line under SYNC-LINE-OFF,
// about 18:00 GMT on 4 November 2026: "remove the sync mode line from the banner entirely", as Cairn keeps machines in
// sync.
test('the listening line names the meetings the session is in, is left off in none, and there is no sync line', () => {
  expect('👂 in cairn.wayfinder.designs').toMatch(MEETING_LINE)
  expect('👂 in cairn.summit.voice, cairn.wayfinder.designs').toMatch(MEETING_LINE)
  for (const line of [
    '👂 listening',
    '🔇 not listening',
    '👂 in',
    '👂 in cairn.summit.voice,cairn.wayfinder.designs',
    '🧵 ki.sop.main'
  ])
    expect(line).not.toMatch(MEETING_LINE)
  const banner = (closing: string[]): string[] => [
    '### 🤖 With worker · at 09:00 GMT',
    '',
    '🤖 1 running · ⏳ 0 queued · 👤 0 with you · ⛔ 0 blocked · 🅿️ 0 parked',
    '',
    '- 🤖 host pass · run/host-pass · at 08:58',
    '',
    ...closing.flatMap((line) => [line, '']),
    '🧵 personal.reg.rig-sol'
  ]
  expectBanner(banner([]))
  expectBanner(banner(['↪️ draining → ⏸️ On hold']))
  expectBanner(banner(['👂 in cairn.summit.voice']))
  expectBanner(banner(['↪️ draining → ⏸️ On hold', '👂 in cairn.summit.voice, cairn.wayfinder.designs']))
  for (const closing of [['👂 listening'], ['🔇 not listening'], ['👂 in cairn.summit.voice', '🔄 syncing for sol']])
    expect(() => expectBanner(banner(closing))).toThrow()
  expect(() =>
    expectBanner([
      '### 🏁 Finished · Demo closed at 18:00 GMT',
      '',
      '- 🏁 3 work items accepted',
      '',
      '👂 in cairn.summit.voice',
      '',
      '🧵 ki.prj.demo'
    ])
  ).toThrow()
  for (const lines of banners(standard)) {
    expect(lines.some((line) => SYNC_LINE.test(line))).toBe(false)
    expect(lines.some((line) => LISTEN_LINE.test(line) || LISTEN_OFF_LINE.test(line))).toBe(false)
  }
  const [withWorker, handoff, draining, hold, snoozing] = banners(standard)
  expect(handoff?.at(-3)).toBe('👂 in cairn.wayfinder.designs')
  for (const lines of [withWorker, draining, hold, snoozing])
    expect(lines?.some((line) => line.startsWith('👂'))).toBe(false)
  expect(standard).toContain('**Mode lines.**')
  for (const name of ['LISTEN-LINE', 'LISTEN-STATUS', 'FOOTER-CAPABILITY-STATUS-2', 'SYNC-LINE-OFF'])
    expect(standard).toContain(name)
  expect(standard).toContain('- **Inbox watch:**')
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('`👂 in <meeting>`')
    expect(text).toContain('as in `👂 in cairn.wayfinder.designs`')
    expect(text).toContain('a sitting under way')
    expect(withoutSources(text)).not.toMatch(/^🔄 /mu)
    for (const field of ['listening_enabled', 'listening_status', 'syncing_enabled', 'syncing_status'])
      expect(text).toContain(field)
    expect(text).not.toContain('draining, so not listening')
    expect(text).not.toContain('not the sync thread for <host>')
    expect(text).toContain('the inbox watcher')
  }
  expect(outputStyle).not.toContain('`👂 listening`')
  expect(outputStyle).not.toContain('`🔇 not listening`')
  for (const text of [standard, outputStyle])
    expect(text).toContain(
      'after a blank line following its listening line, or its list or heading-for line where it has none, with exactly one plain Markdown thread line'
    )
})

// Kris, 31 October 2026, under LISTEN-OPT-IN: "any of the coordination [threads] can be set up in this mode, but we've
// got to expressly ask them to be". Listening is opt-in, recorded in the decisions log; the Rig host sync threads listen
// by their role; "stop listening" ends it; the heartbeat while runs go is separate.
test('a thread listens only when the owner asks it to, and a Rig host sync thread by its role', () => {
  expect(standard).toContain('LISTEN-OPT-IN')
  expect(standard).toContain('heartbeat while runs go is separate and stays, listening or not')
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('"listen for messages" or "keep listening"')
    expect(text).toContain('"stop the wake" or "stop listening"')
    expect(text).toContain('Rig host sync thread')
  }
  for (const text of [standard, outputStyle]) expect(text).not.toContain('no listening line at all')
  expect(standard).not.toContain('keep one inbox watcher armed whenever')
})

// Kris, 31 October 2026, under THREAD-CAPABILITIES and SYNC-UNTIL-CLEAN: "a resync doesn't finish until it's got to a
// point of being clean". A thread may hold listening and host sync, each switched on only by express word or an agreed
// role; host sync repeats each pass until clean and level, stays quiet on quiet passes and implies listening.
test('a session may hold listening and host sync, and the banner shows only the listening line', () => {
  expect(standard).toContain('### 4.2 Session capabilities')
  expect(standard).toContain('[Session capabilities](standard-listening.md#42-session-capabilities)')
  for (const name of ['THREAD-CAPABILITIES', 'SYNC-UNTIL-CLEAN', 'SYNC-QUIET', 'Host sync implies listening.'])
    expect(standard).toContain(name)
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('until the Mac and GitHub are clean and level')
    expect(text).not.toContain('`🔄 syncing for sol`')
  }
})

// Kris, 31 October 2026, under UNATTENDED-AWAKE: "a key part of unattended mode is that you do keep the chat session
// alive ... and therefore you try to keep the machine awake that is then leading that chat session".
test('an unattended window keeps its session and machine awake and says so at entry, on top of normal coordination', () => {
  expect(standard).toContain('- **Awake:**')
  expect(standard).toContain('UNATTENDED-AWAKE')
  expect(standard).toContain('says how the session and its machine are kept awake')
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('`caffeinate -dims -w <session pid>`')
    expect(text).toMatch(/mode on top of normal coordination/)
  }
})

test('the standard carries the With worker, handoff, draining, On hold, Snoozing and Finished banners, in that order', () => {
  const found = banners(standard)
  expect(found.map((lines) => lines[0]?.split(' · ')[0])).toEqual([
    '### 🤖 With worker',
    '### 🤖 → 👤 Handoff to supervisor',
    '### 🤖 With worker',
    '### ⏸️ On hold',
    '### 💤 Snoozing (on hold)',
    '### 🏁 Finished'
  ])
  for (const lines of found) expectBanner(lines)
  const [withWorker, handoff, , hold] = found
  expect(withWorker?.[2]).toBe('🤖 2 running · ⏳ 0 queued · 👤 1 with you · ⛔ 1 blocked · 🅿️ 0 parked')
  expect(withWorker).toContain('- 🤖 work-model · run/work-model · at 23:20')
  expect(handoff).toContain('- 🅿️ 1')
  expect(found.flat().some((line) => BODY_ITEM.test(line))).toBe(false)
  expect(handoff?.some((line) => line.startsWith('- 🤖'))).toBe(false)
  expect(hold?.[0]).toBe('### ⏸️ On hold · paused until the harness migration lands · at 00:10 BST')
  expect(hold).toContain('- ⏸️ after the harness migration lands, or `resume`')
  expect(hold?.[2]).toBe('⏸️ drained · 🅿️ 9 queries parked')
  expect(hold?.filter((line) => line.startsWith('- ')).every((line) => /^- (?:🅿️|⏸️) /u.test(line))).toBe(true)
})

test('reports omit routine push state, and an On hold banner lists nothing waiting', () => {
  for (const text of [standard, outputStyle]) {
    expect(text).not.toContain('who decides the push')
    expect(text).not.toContain('- [on hold] committed')
    expect(text).not.toContain('- ⏸️ committed and pushed')
    expect(text).toContain('`⏸️ drained · 🅿️ <n> queries parked`')
    expect(text).toContain("items are only `🅿️` parked and its release under the hold's own glyph")
    for (const lines of banners(text)) {
      for (const item of lines.filter((line) => line.startsWith('- '))) expect(item).not.toMatch(/push/i)
      if (!lines[0]?.startsWith('### ⏸️')) continue
      expect(lines[2]).not.toContain('with you')
      expect(lines.some((line) => /^- (?:👤|🤖|⏳|\[)/u.test(line))).toBe(false)
    }
  }
  expect(standard).toContain('**Push state stays out of reports.**')
  expect(standard).toContain('**A hold lists nothing waiting.**')
  expect(standard).toContain('PUSH-NOT-WITH-YOU')
  expect(standard).toContain('HOLD-CLEAN')
  expect(standard).toContain('A Stop keeps nothing about pushes beyond a failure.')
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('own unit could not be published because its push failed')
    expect(text).not.toMatch(/names? the other sessions' stacked commits once|show them only as `\[unpushed\]`/)
  }
})

test('the output style carries the report heading and the live banners byte-identical to the standard', () => {
  const styledHeadings = headings(outputStyle)
  expect(styledHeadings).toHaveLength(1)
  expect(styledHeadings[0]?.join('\n')).toBe(HEADING_EXAMPLE)
  const styled = banners(outputStyle)
  expect(styled).toEqual(banners(standard).slice(0, 5))
})

// Kris, 29 October 2026: "There becomes a point when the agents should suggest that this thread would be better off
// being restarted. ... but only when it's necessary." The restart suggestion is the second named exception to the
// no-paste rule, beside the bootstrap rename line, and both the standard and the output style carry its triggers.
test('the restart suggestion is a named exception with narrow triggers, placed before the banner', () => {
  expect(standard).toContain('**Restart suggestion.**')
  expect(standard).toContain(
    'It is the second named exception to the rule that a report carries no send, resume or paste line'
  )
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('**Restart suggested:**')
    expect(text).toContain('compacted twice or more')
    expect(text).toContain('filled from its `_index.md` under')
    expect(text).toContain('not for length, age, a change of state, a hold or a model switch alone')
  }
  expect(standard).not.toContain("hook's stale-method advisory")
  expect(outputStyle).toContain('beyond a warranted restart suggestion after a second compaction')
  expect(outputStyle).toContain('with two named exceptions')
  expect(outputStyle).toContain('never in a Stop, a run report or a conversational reply')
})

test('every banner closes with its work identity and never emits a send or resume prompt', () => {
  for (const text of [standard, outputStyle]) {
    for (const lines of banners(text)) expect(lines.at(-1)).toBe(PROJECT_THREAD_LINE)
    expect(text).toContain('`<role glyph> 🔑 <work-id>` for every explicitly coordinating package')
    expect(text).not.toMatch(/^(?:Send|Resume) <label>/m)
    expect(text).not.toContain('To bring this work back and continue it, paste this:')
    expect(text).not.toContain('{{send-line}}')
    expect(text).not.toContain('{{hold-send-line}}')
    expect(text).toContain('**Stop at <local time> · mark <local time>**')
  }
  expect(PROJECT_THREAD_LINE).toMatch(THREAD_LINE)
  expect(TERRITORY_THREAD_LINE).toMatch(THREAD_LINE)
  for (const invalid of [
    '🧵 State of play thread · Ways of working (ki.ways-of-working)',
    '🧵 Coordination thread · KI > SoP (ki)',
    '🧵 Coordination thread · Too many segments (ki.regular.intake.extra)',
    '🧵 Coordination thread · Missing id'
  ])
    expect(invalid).not.toMatch(THREAD_LINE)
  for (const surface of generate(harnessRoot)) {
    expect(surface.content).not.toMatch(/^(?:Send|Resume) <label>/m)
    if (surface.path.includes('ki-delegation/assets/')) {
      expect(surface.content).toContain('🧵 <work-id>')
      expect(surface.content).toContain('using the work you report to')
    }
  }
  expect(standard).toContain('### 4.1 Putting work on hold')
  expect(standard).toContain('### 4.4 Picking work up')
  expect(standard).toContain('### 4.2 Pushing beneath other sessions')
})

// Under REPLY-FORMAT, agreed on 7 November 2026, the reply block returns whenever a reply carries a query: one fenced
// `text` block, replacing REPLY-BLOCK of 18 October. Under REPLY-GROUPS, of 12 November 2026, its queries are grouped
// by priority under numbered headings and each line carries the recommended option's confidence in brackets.
test('the standard and the output style carry the reply block and retire the block-letter frames', () => {
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('replacing REPLY-BLOCK of 18 October')
    expect(text).toContain('one fenced `text` block')
    expect(text).toContain('`<n> · <what the group is>`')
    expect(text).toContain("`, can run while you're away`")
    expect(text).toContain('`<TAG> a (high)`, `(medium)` or `(low)`')
    expect(text).toContain('with nothing to strip out')
    expect(text).not.toContain('`<TAG> a`,')
    expect(withoutSources(text)).not.toMatch(/^╭─/m)
    expect(text).not.toContain('- [at rest]')
  }
  expect(standard).toContain('#### 4.2.1 Answers')
  expect(standard).toContain('Taken as: <the instruction it will act on>')
  expect(standard).toContain(
    'the numbered group headings are ignored, and so is a bracketed confidence after the letter'
  )
})

/** A reply block's group heading, `<n> · <what the group is>[, can run while you're away]`. */
const REPLY_GROUP = /^(\d+) · (\S.*)$/
/** A reply block's answer line, `<TAG> <letter>`, its bracketed confidence and a gloss after a colon optional on the way back. */
const REPLY_LINE = /^([A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*) ([a-z])(?: \((high|medium|low)\))?(?:: \S.*)?$/

/** The groups of a reply block, refusing any line that is neither a heading, an answer line nor a blank between groups. */
const replyGroups = (block: string): { readonly heading: string; readonly lines: readonly string[] }[] => {
  const groups: { heading: string; lines: string[] }[] = []
  for (const line of block.split('\n')) {
    const heading = REPLY_GROUP.exec(line)
    if (heading) {
      expect(Number(heading[1])).toBe(groups.length + 1)
      groups.push({ heading: heading[2] ?? '', lines: [] })
    } else if (line === '') expect(groups.at(-1)?.lines.length ?? 0).toBeGreaterThan(0)
    else {
      expect(line).toMatch(REPLY_LINE)
      expect(groups.length).toBeGreaterThan(0)
      groups.at(-1)?.lines.push(line)
    }
  }
  return groups
}

/** The answers a block sent back gives, read as Answers sets: headings ignored, a bracketed confidence ignored. */
const replyAnswers = (block: string): Record<string, string> =>
  Object.fromEntries(
    replyGroups(block)
      .flatMap(({ lines }) => lines)
      .map((line) => {
        const [, tag, letter] = REPLY_LINE.exec(line) ?? []
        return [tag ?? '', letter ?? '']
      })
  )

test('the reply block groups its queries by priority under numbered headings, each line carrying its confidence', () => {
  const reporting = readReference('standard-reporting.md')
  const example = /A reply block:\n\n {2}```text\n([\s\S]*?)\n {2}```\n/.exec(reporting)?.[1]?.replaceAll(/^ {2}/gm, '')
  expect(example).toBeDefined()
  const groups = replyGroups(example ?? '')
  expect(groups.map(({ heading }) => heading)).toEqual([
    "Baseline build, can run while you're away",
    'Window design',
    'Outside Cairn'
  ])
  // Under HOOK-ENFORCE each line carries its gloss, and each tag stands once, its recommended option only.
  const lines = groups.flatMap(({ lines }) => lines)
  for (const line of lines) expect(line).toMatch(/^\S+ a \((?:high|medium|low)\): \S/)
  expect(new Set(lines.map((line) => line.split(' ')[0])).size).toBe(lines.length)
  expect(replyAnswers(example ?? '')).toEqual({
    'WINDOW-BUILD': 'a',
    'ROADMAP-ATL003': 'a',
    'CON-PROFILE': 'a',
    'HANDOFF-OBS': 'a'
  })

  const template = /```text +B6\n([\s\S]*?)\n```\n/.exec(readReference('standard-report-forms.md'))?.[1]
  expect(template).toContain("1 · <what the most pressing group is>, can run while you're away")
  expect(template).toContain('<TAG> a (<high, medium or low>): <gloss>')
  expect(template?.split('\n\n')).toHaveLength(2)
})

test('a reply block sent back as it stands, or changed, still answers every query', () => {
  const answered = [
    "1 · Baseline build, can run while you're away",
    'WINDOW-BUILD a (high)',
    'ROADMAP-ATL003 b (high)',
    '',
    '2 · Window design',
    'CON-PROFILE a',
    '',
    '3 · Roadmap housekeeping',
    'ROADMAP-PRUNE a (high): prune the done records',
    'ROADMAP-NET005 c (low)'
  ].join('\n')
  expect(replyAnswers(answered)).toEqual({
    'WINDOW-BUILD': 'a',
    'ROADMAP-ATL003': 'b',
    'CON-PROFILE': 'a',
    'ROADMAP-PRUNE': 'a',
    'ROADMAP-NET005': 'c'
  })
  expect('ROADMAP-PRUNE a (certain)').not.toMatch(REPLY_LINE)
  expect('2 Window design').not.toMatch(REPLY_GROUP)
})

// Kris, 14 November 2026, under REPLY-BLOCK a and REPLY-ID a: every reply to the owner, in every form, opens with its
// reply id, `**Reply HH:MM**` in UTC from the clock, and every reply asking the owner to decide anything ends with the
// reply block, a conversational reply included.
test('every reply opens with its reply id, and every reply asking a decision ends with the reply block', () => {
  const reporting = readReference('standard-reporting.md')
  expect(reporting).toContain('opens with its id as a bold first line, `**Reply HH:MM**`')
  expect(reporting).toContain('`date -u +%H:%M`, never guessed')
  expect(reporting).toContain(
    'Every reply that asks the owner to decide anything ends with the reply block, whatever its form'
  )
  expect(reporting).toContain('as `<TAG> a (high): what it does`')
  expect(reporting).toContain('and so is a gloss after a colon')
  expect(reporting).not.toContain("A conversational session's report carries none")
  expect(reporting).not.toContain('A question for the owner is one line')
  expect(readReference('standard-report-forms.md')).toContain('**Reply id.** Every reply to the owner, in every layout')
  for (const text of [core, outputStyle]) {
    expect(text).toContain('opens with its reply id, as Kris set under REPLY-ID on 14 November 2026')
    expect(text).toContain('under REPLY-BLOCK of 14 November 2026 every reply that asks Kris to decide anything')
  }
  for (const source of [/^line='(.*)'$/m, /^pointer='(.*)'$/m])
    expect(source.exec(hook)?.[1]).toEndWith(
      'Every reply opens with **Reply HH:MM** (date -u); one asking a decision ends with the reply block.'
    )
})

// Kris, about 01:15 GMT on 18 November 2026, under HOOK-ENFORCE a: "Yeah, we need the hook enforcing". Every
// coordinating reply closes with the banner and its thread line; the trigger sets only its depth.
test("every coordinating reply ends with the banner, its structure, which its trigger chooses, setting the banner's depth", () => {
  expect(standard).toContain('**When it appears.**')
  expect(standard).toContain(
    "every reply closes with it: every Summary, Status, Bootstrap, run report, Stop and Position, and an Update or Answer, the Minimal layout, with the Position's short banner"
  )
  expect(standard).toContain('never a judgement of whether a reply answers where the work stands')
  expect(standard).not.toContain('an Update or Answer, the Minimal layout, has none')
  expect(standard).not.toContain('Minimal has no footer')
  expect(outputStyle).toContain(
    'Every reply closes with the banner, as Kris set under HOOK-ENFORCE on 18 November 2026, and the trigger, not judgement, sets its depth'
  )
  expect(outputStyle).not.toContain('an Update or Answer has none')
  for (const text of [standard, outputStyle])
    expect(text).not.toContain(
      "moves the mark, changes the work's state or answers where the work stands ends with the banner"
    )
})

// SUMMARY-MODEL, approved by Kris with immediate effect on 4 November 2026 and
// relayed as SUMMARY-NOW: the mark is only a timestamp, and one Summary form
// replaces the Summary, recap and full summary, superseding MARK-STATUS's
// table after the queries. Its footer's art and lines are Cairn's (FOOTER-AGORA).
// Under REPLY-FORMAT its section is `## Summary`, with no time. Under FOCUS-ROWS
// (15 November 2026) its status table has a row per live change and one catch-all.
test('the Summary runs its summary, the two-column status table, the queries in full, then the footer', () => {
  const summaryAt = standard.indexOf('#### 4.1.7 The Summary')
  const summary = standard.slice(summaryAt, standard.indexOf('### 4.1 Coordinating work', summaryAt))
  const parts = [
    'the Answer where there is one, `## Summary`',
    '`## Status`',
    '`## Findings` while one is open',
    '`## Queries` with the open queries in full, at most ten under the [query cap](standard-queries.md#42-query-cap), and the reply block',
    'then the footer'
  ]
  const at = parts.map((part) => summary.indexOf(part))
  expect(at.every((index) => index > 0)).toBe(true)
  expect([...at].sort((a, b) => a - b)).toEqual(at)
  expect(summary).toContain('| Change | Where it stands |')
  expect(summary).not.toContain('| Focus |')
  expect(summary).not.toContain('Waiting on you |')
  for (const glyph of ['👤 the owner', '🤖 a worker or run', '🧵 another session', '🌐 the outside world'])
    expect(summary).toContain(glyph)
  expect(summary).toContain('⏳ means queued only')
  expect(summary).not.toContain('⏳ the outside world')
  expect(outputStyle).toContain('🌐 the outside world')
  expect(summary).toContain('**Not in a change yet**')
  expect(summary).not.toContain('**\\_emerging**')
  expect(outputStyle).toContain("in the order `_index.md`'s Changes lists them")
  expect(summary).toContain('FOOTER-AGORA')
  expect(summary).toContain('TABLE-ALIGN')
  for (const verb of ['mark', 'mark only', 'summary', 'summary since 14:00']) {
    expect(standard).toContain(`/ki-coordination ${verb} `)
  }
  expect(standard).toContain('Adding `no art` to any of them leaves the art out of the footer.')
  expect(standard).toContain('The mark is only a timestamp')
  expect(standard).not.toContain('### Full summary')
  expect(standard).not.toContain('### Recap since the mark')
  expect(standard).not.toContain('- **Status:** the Summary that follows a mark')
  expect(outputStyle).toContain('The Summary is the one summary form, replacing the Summary, recap and full summary')
  expect(outputStyle).not.toContain('What I heard')
})

test('the core retains all five hard rules and lists every purpose file', () => {
  for (const name of standardFiles.filter((file) => file !== 'standard-coordination.md'))
    expect(core).toContain(`](${name})`)
  const line = core
  expect(line).toContain(
    'Follow the coordinating-work standard (skills/work/ki-coordination/references/standard-coordination.md) and the Work Process note it cites'
  )
  expect(line).toContain(
    'Hard rules: 1) delegate every unit of work to a detached background agent and stay responsive'
  )
  expect(line).toContain(
    '2) an owner message never pre-empts work in flight: stop an agent only when the owner names it and says stop'
  )
  expect(line).toContain(
    '3) while work lies with a worker, give a timed one-to-two-line update when you launch work and when a run finishes, keeping one background check armed that wakes you only when a run finishes, with no timed bound, and no heartbeat otherwise'
  )
  expect(line).toContain(
    '4) give every reply the structure and layout its trigger sets in the ki-coordination reply format, a Summary or Status in full, a Bootstrap or Stop in the owner-report shape, heading block to glyph banner, a Position as the banner, an update or plain answer closing with the short banner too, so every reply closes with its thread line'
  )
  expect(line).toContain('with a reply block whenever there is a query')
  expect(line).toContain(
    'a Summary and a Bootstrap restating the open queries in full, at most ten, most critical first'
  )
  expect(line).toContain(
    'every medium- or low-confidence query, and any high-confidence destructive, deletion or publication one, goes to one blind review before it reaches the owner'
  )
  expect(line).toContain('5) commit your own work and the work package by explicit path after every finished change')
  expect(line).not.toContain('6)')
})

test('unknown-session hook sources stay short and conditional while the style retains refresh and re-anchoring', () => {
  const line = /^line='(.*)'$/m.exec(hook)?.[1] ?? ''
  const pointer = /^pointer='(.*)'$/m.exec(hook)?.[1] ?? ''
  expect(line).toContain('Only if the owner explicitly opened or resumed coordination')
  expect(line).toContain('Otherwise use its conversational Reply forms')
  expect(line.length).toBeLessThan(300)
  expect(pointer).toContain('Only if explicitly coordinating')
  expect(pointer).toContain('Re-anchoring after compaction')
  expect(pointer.length).toBeLessThan(350)
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('before each state-file update')
    expect(text).toContain('method_read')
    expect(text).toContain('the change documents in hand in full')
    expect(text).toContain('one blind review')
  }
})

test('the run-report and footer-report sources carry the quiet-tools rule and the reply block', () => {
  expect(standard).toContain('#### 4.2.2 Quiet tools')
  const quiet = 'run Git with `-q`, never paste gate, audit or Git output, and report each outcome in one line.'
  for (const surface of generate(harnessRoot).filter(({ path }) => path.includes('ki-delegation/assets/'))) {
    expect(surface.content).toContain(quiet)
    expect(surface.content).toContain('**Run report at <local time> · last mark <local time>**')
    expect(surface.content).toContain('closing the queries with a reply block')
    expect(surface.content).toContain('the queries grouped under numbered headings in priority order')
    expect(surface.content).toContain('as `<TAG> a (high)`')
    expect(surface.content).not.toContain('no reply block')
  }
})

test('the hook line, the pointer and the output style confine the coordinator forms to coordinating work', () => {
  expect(hook).toContain("line='Only if the owner explicitly opened or resumed coordination")
  expect(hook).toContain('Otherwise use its conversational Reply forms')
  expect(hook).toContain('Only if explicitly coordinating, follow Re-anchoring after compaction')
  expect(outputStyle).toContain('This style applies only while the owner explicitly opens or resumes coordination')
  expect(standard).toContain('### 4.1 Reply forms')
})

test('every generated surface matches what the standard renders, so none is edited by hand', () => {
  const surfaces = generate(harnessRoot)
  for (const tier of ['none', 'push', 'prune', 'release']) {
    const footer = surfaces.find((surface) => surface.path.endsWith(`rules-${tier}.md`))
    expect(footer).toBeDefined()
    expect(footer?.content).toContain('Owner reports, run reports and banners omit routine push state')
    expect(footer?.content).toContain('own unit could not be published because its push failed')
  }
  const prompt = surfaces.find((surface) => surface.path.endsWith('run-prompt.md'))
  expect(prompt?.content).toContain('Owner reports, run reports and banners omit routine push state')
  const brief = surfaces.find((surface) => surface.path.endsWith('ki-work/assets/design/brief.md'))
  for (const surface of [prompt, brief])
    expect(surface?.content).toContain('**Independence**, in a review run: form your own view from the evidence')
  expect(prompt?.content).toContain('own unit could not be published because its push failed')
  for (const surface of surfaces)
    expect({
      path: surface.path,
      content: readFileSync(resolve(harnessRoot, surface.path), 'utf8')
    }).toEqual({
      path: surface.path,
      content: surface.content
    })
})

test('housekeeping and behind findings go in the report body, with all level-check triggers', () => {
  const orderedBanner = standard.split('**Glyph banner.**')[1]?.split('\n')[0] ?? ''
  for (const item of ['[handoff]', '[committed]', '[uncommitted]', '[recovered]', '[unlogged]', '[behind]'])
    expect(orderedBanner).not.toContain(item)
  expect(standard).toContain('under BANNER-TRIM')
  expect(standard).toContain('`<repository>: <count> commits behind`')
  expect(outputStyle).toContain('The banner carries no `[handoff]` or housekeeping item')
  expect(outputStyle).toContain('carry each unresolved behind finding in the status table or In Progress')
  expect(outputStyle).toContain('before a cross-host resume, at every mark and before leaving a host')
  expect(outputStyle).toContain('A failed check remains unknown')
})

test('regular coordination is explicit, capability-checked and uses its real work heading', () => {
  expect(standard).toContain('`territory`, `project` and `regular` are all eligible')
  expect(standard).toContain('A package, id, level, binding or capability declaration alone never selects the role')
  expect(standard).toContain("Acquire's already-approved intake exception remains usable")
  expect(standard).toContain('Ending that episode does not finish or hold the package, move its mark or abandon runs')
  expect(standard).toContain('Bootstrap as <id> regular work under ki-coordination.')
  expect(standard).toContain('never fabricates a Project')
  expect(outputStyle).toContain('including regular or ad hoc work without a coordinating opener')
  for (const id of [
    'ki.sop.main',
    'ki.sop.topic',
    'ki.prj.ways-of-working',
    'personal.reg.main',
    'personal.reg.acquire-intake',
    'personal.regular.acquire-intake',
    'ki.ways-of-working',
    'ki'
  ]) {
    expect(`🧵 ${id}`).toMatch(THREAD_LINE)
    expect(`⚖️ 🔑 ${id}`).toMatch(THREAD_LINE)
  }
  for (const seat of [
    '📐 ki.cairn@information-architect',
    '🏗️ ki.cairn@technical-architect',
    '🎨 ki.cairn@illustrator',
    '🦜 cairn.summit@voice',
    '🐝 ki.ways-of-working@journeyman',
    '📐 hnr.summit+website@information-architect'
  ])
    expect(seat).toMatch(THREAD_LINE)
  for (const invalid of [
    '🔑 ki.reg.guilds',
    '⚖️ ki.reg.guilds',
    '⚖️ 🔑 KI.reg.guilds',
    'guild 🔑 ki.reg.guilds',
    '📐 🔑 ki.cairn@information-architect',
    'information-architect ki.cairn@information-architect',
    '📐 ki.cairn@Information-architect',
    '📐 ki.cairn+architect'
  ])
    expect(invalid).not.toMatch(THREAD_LINE)
  expect(standard).toContain('Reports saved before this change retain their original closing line and remain readable')
  for (const surface of generate(harnessRoot).filter((surface) =>
    /(?:run-prompt|rules-[^/]+)\.md$/.test(surface.path)
  )) {
    expect(surface.content).toContain('# [<title>](<package _index.md>) › <run name>')
    expect(surface.content).toContain('regular and ad hoc work')
    expect(surface.content).toContain('including regular or ad hoc work without coordination')
  }
})

// Kris, relayed by the Cairn summit's guardian on 17 November 2026 under NAME-FIRST a: "where we have a named actor
// that the name should be first and then in brackets it should be effectively what we're currently putting out", and
// under HEADING-FIX a: a report heading links its package's `_index.md` in the Cairn store and nothing else.
test('a named seat puts its name first and its form in brackets, an unnamed seat keeps the bare form', () => {
  for (const named of [
    'Kitteth (🪨 🔑 cairn.summit)',
    'Eugene (🏛️ 🔑 5ge.summit)',
    'Hob Sol (🏠 🔑 personal.rig.sol)',
    'Quire (📐 ki.cairn@information-architect)'
  ])
    expect(named).toMatch(THREAD_LINE)
  for (const bareLine of ['⚖️ 🔑 ki.guilds', '🧵 cairn.summit', '📐 ki.cairn@information-architect'])
    expect(bareLine).toMatch(THREAD_LINE)
  for (const invalid of [
    '(🪨 🔑 cairn.summit) Kitteth',
    'Kitteth (🧵 cairn.summit)',
    'Kitteth (cairn.summit)',
    'Kitteth 🪨 🔑 cairn.summit',
    'Kitteth (🪨 🔑 cairn.summit',
    'Quire (📐 ki.cairn+architect)'
  ])
    expect(invalid).not.toMatch(THREAD_LINE)
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('Kitteth (🪨 🔑 cairn.summit)')
    expect(text).toContain('NAME-FIRST')
    expect(text).toContain('HEADING-FIX')
  }
})

test('an interactive pass ends a timed first reply with the read-back and context, then shows only the card in the reply the timer wakes', () => {
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('Query <n> of <total>')
    expect(text).toContain('## <TAG>: <plain title>')
    expect(text).toContain('**Where things stand**')
    expect(text).toContain('(recommended, <confidence> confidence)')
    expect(text).toContain("Orca's card drops line breaks in its title")
    expect(text).toContain('a short background timer, about 5 seconds')
    expect(text).toContain('Second reply, woken by the timer')
    expect(text).toContain('holds only the card')
    expect(text).toContain('no card or no wake')
    expect(text).not.toContain('never in the same one')
    expect(text).toContain('Reply with a number, or your own words.')
    expect(text).not.toContain('Reply with 1, 2 or 3')
    expect(text).not.toContain('Never ask through a question tool')
    // Kris, 15 November 2026, under CARD-READBACK a: the read-back says what the answer changes, in card and chat mode.
    expect(text).toContain('what gets recorded, what gets built and what is left alone')
    expect(text).toContain('the read-back of the previous answer and what it changes')
    expect(text).not.toContain('one-line read-back')
    // Kris, 15 November 2026, under CARD-DISCUSS a: every query offers talk now or come back at the end, in card and chat mode.
    expect(text).toContain('Talk it through now')
    expect(text).toContain('Come back at the end')
    expect(text).toContain('at most two real choices')
    expect(text).toContain('then the two discussion options')
    expect(text).toContain('in the order they were deferred')
  }
  expect(standard).toContain('A query deferred to the end keeps its number')
  expect(standard).toContain('that nothing is recorded yet')
  expect(standard).toContain('it is not parked beyond the set')
  expect(standard).not.toContain('The coordinator never asks through')
  expect(standard).toContain('Where the runtime has no question card, or no way for a timer to wake the coordinator')
  expect(standard).toContain('Orca folds everything in a reply under "Worked for" except its last text')
  expect(standard).toContain('**Pairs:** two related questions may share one card, each with a short header')
})

// Kris, 31 October 2026, under LISTEN-TENDS-PACKAGE: "if a thread is listening, it's important that it is also helping
// to manage and refine the work packages and make sure they're in good state". A listening thread makes at most one
// small, silent tidy of its own package at a wake and only points out problems in another's.
test('a listening thread tends its own work package at its wakes', () => {
  expect(standard).toContain('LISTEN-TENDS-PACKAGE')
  expect(standard).toContain('#410-the-tidy')
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('at most one small tidy')
    expect(text).toMatch(/another work's package/)
  }
})

// Kris, 31 October 2026, under QUIET-LISTEN: "for a thread which is listening ... we don't need it to give an update
// unless it actually gets new information that's landed". The watcher is one long-running loop that fetches and
// fast-forwards silently and exits only on news; a run finishing is itself the wake, and nothing is timed while idle.
test('the inbox watcher wakes only on news, with no timed bound or timed heartbeat', () => {
  expect(standard).toContain('QUIET-LISTEN')
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('fetches and fast-forwards')
    expect(text).toContain("a run in this session's group finishing")
    expect(text).toContain('so a quiet period')
    expect(text).toContain('"stop the wake" or "stop listening"')
    for (const gone of [
      'fifteen otherwise',
      'five minutes while runs go',
      'after 5 minutes',
      'bare timeout',
      'quiet wake'
    ])
      expect(text).not.toContain(gone)
  }
  expect(outputStyle).toContain('a run finishing is itself the wake')
  expect(standard).toContain('a run finishing is itself the wake')
})

// Kris, 31 October 2026, under RENAME-THREAD-FORM: "we name them like: `🧵 personal.reg.rig-terra`". The bootstrap and
// re-bootstrap Done line renames the thread to its thread line.
test('the bootstrap rename line names the thread by its thread line', () => {
  expect(standard).toContain('RENAME-THREAD-FORM')
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('`Rename thread: /rename <thread line>`')
    expect(text).not.toContain('/rename <label> (<id>)')
  }
})

// Kris, 1 November 2026, under RENAME-NAME a): a session opened from its opener starts with the thread name
// `🧵 <work-id>`, the same as the rename line and every report's thread line.
test('the opener launches the session under its thread line', () => {
  expect(standard).toContain('RENAME-NAME')
  expect(standard).toContain('`claude --name "<thread line>"`')
  expect(standard).toContain('STAGE-C-ROLES')
  expect(standard).not.toContain('claude --name "<label> (<id>)"')
})

// Under REPLY-FORMAT, agreed on 7 November 2026, a sent line awaiting its ACK is no longer listed as the
// `[awaiting ACK]` item NO-LINK-MARK set on 4 November; since OLD-SHAPE-HOMES a the package line no longer counts it,
// and since MSG-RETIRE, on 17 November, there is no queue and no ACK at all.
test('the banner lists no `[awaiting ACK]` item', () => {
  const banner = [
    '### 👤 With supervisor · at 23:52 GMT',
    '',
    '🤖 0 running · ⏳ 0 queued · 👤 1 with you · ⛔ 0 blocked · 🅿️ 0 parked',
    '',
    '🗺️ roadmap · none',
    '',
    '📦 package · changes 2 · open 1 · held 0 · meetings 0',
    '',
    '- 👤 WORK-HOME · owner · at 22:58',
    '',
    '👂 in cairn.summit.voice',
    '',
    '🧵 ki.sop.main'
  ]
  expectBanner(banner)
  const listed = [...banner]
  listed.splice(9, 0, '- [awaiting ACK] MSG-8029f0fa · to personal.reg.assistant-sol · at 22:27')
  expect(() => expectBanner(listed)).toThrow()
  for (const lines of banners(standard)) expect(lines.some((line) => line.startsWith('- [awaiting ACK]'))).toBe(false)
  expect(standard).toContain('MSG-RETIRE')
  for (const text of [standard, outputStyle]) expect(text).not.toContain('`- [awaiting ACK] <id>')
  expect(standard).toContain('NO-LINK-MARK')
})

// Kris, about 20:40 GMT on 6 November 2026, of the footer personal.reg.household-terra trialled, under FOOTER-COUNTS:
// "I absolutely love that footer. Can you make that the case, please, and get that to be rolled out?" Beneath the
// counts line, the hold line on hold, a Full reply's footer carries one roadmap line and one package line, the roadmap
// line reading none where there is no roadmap under REPLY-FORMAT; the Medium and Short layouts carry neither, and the
// thread line stays last.
test("a Full reply's footer carries the roadmap and package lines beneath its counts line, and the other layouts neither", () => {
  expect('🗺️ roadmap · 1 record · 0 open · 1 done awaiting prune · 0 ideas').toMatch(ROADMAP_LINE)
  expect('🗺️ roadmap · none').toMatch(ROADMAP_LINE)
  expect('📦 package · changes 0 · open 0 · held 0 · meetings 0').toMatch(PACKAGE_LINE)
  for (const line of [
    '🗺️ roadmap · 1 records · 0 open · 0 done awaiting prune · 0 ideas',
    '🗺️ roadmap · 2 records · 1 open · 0 done awaiting prune · 1 ideas'
  ])
    expect(line).not.toMatch(ROADMAP_LINE)
  expect('📦 package · changes 0').not.toMatch(PACKAGE_LINE)
  expect('📦 package · inbox 0 · outbox 0 · held 0 · awaiting ACK 0').not.toMatch(PACKAGE_LINE)
  expect(() =>
    expectBanner([
      '### 👤 With supervisor · at 23:52 GMT',
      '',
      '🤖 0 running · ⏳ 0 queued · 👤 1 with you · ⛔ 0 blocked · 🅿️ 0 parked',
      '',
      '🗺️ roadmap · 1 record · 0 open · 1 done awaiting prune · 0 ideas',
      '',
      '- 👤 WORK-HOME · owner · at 22:58',
      '',
      '👂 in cairn.summit.voice',
      '',
      '🧵 ki.sop.main'
    ])
  ).toThrow()
  const [withWorker, handoff, draining, hold, finished] = banners(standard)
  expect(withWorker?.slice(2, 7)).toEqual([
    '🤖 2 running · ⏳ 0 queued · 👤 1 with you · ⛔ 1 blocked · 🅿️ 0 parked',
    '',
    '🗺️ roadmap · 6 records · 4 open · 1 done awaiting prune · 1 idea',
    '',
    '📦 package · changes 3 · open 1 · held 0 · meetings 0'
  ])
  expect(handoff?.[4]).toMatch(ROADMAP_LINE)
  expect(handoff?.[6]).toMatch(PACKAGE_LINE)
  for (const lines of [draining, hold, finished])
    expect(lines?.some((line) => PACKAGE_LINE.test(line) || ROADMAP_LINE.test(line))).toBe(false)
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('`🗺️ roadmap · <n> records · <n> open · <n> done awaiting prune · <n> ideas`')
    expect(text).toContain('`🗺️ roadmap · none`')
    expect(text).toContain('`📦 package · changes <n> · open <n> · held <n> · meetings <n>`')
    expect(text).toContain('`ki repo roadmap summary`')
    expect(text).toContain('FOOTER-COUNTS')
  }
  expect(outputStyle).toContain('the Medium and Short layouts carrying neither')
  expect(standard).toContain('**Roadmap and package lines.**')
  expect(standard).toContain("a Full reply's footer carries one line of roadmap counts and one of package counts")
  expect(standard).toContain('In a Full reply on work On hold the counts line is the hold line')
})

// Kris, relayed by household-terra on 6 November 2026 under REPORT-FORMS-TIDY, asked for one complete template per form
// and the status table without the history part; under REPLY-FORMAT, agreed on 7 November 2026, each reply structure
// has its template, and a Stop folds the hold and finish reports.
test('each reply structure has one template, and the form line carries no state', () => {
  const templates = standard.split('#### 4.1.5 Templates\n')[1]?.split('\n#### 4.1.6 Verbs\n')[0] ?? ''
  for (const structure of [
    '**Summary**',
    '**Status**',
    '**Bootstrap**',
    '**Run report**',
    '**Stop**',
    '**Stop while Snoozing**',
    '**Stop at Finished**',
    '**Position**',
    '**Update** and **Answer**'
  ])
    expect(templates).toContain(structure)
  for (const line of [
    '**Summary at <now> · last mark <mark time>**',
    '**Bootstrap at <now> · last mark <mark time>**',
    "**Stop at <now> · mark <the hold's mark>**",
    '**Stop at <now> · last mark <mark time>**'
  ])
    expect(templates).toContain(line)
  for (const retired of [
    '**Re-bootstrap report**',
    '**Hold report**',
    '**Finish report**',
    '<glyph state> · Summary at'
  ])
    expect(templates).not.toContain(retired)
  expect(standard).toContain('- **Times:**')
  expect(standard).toContain('- **Snoozing:**')
  expect(standard).toContain('/ki-coordination mark, status only')
  expect(standard).toContain('/ki-coordination status ')
  for (const text of [standard, outputStyle]) {
    expect(text).toContain('`mark, status only`')
    expect(text).not.toContain('· since <window start>')
  }
})

// Kris, relayed by household-terra on 6 November 2026 under SNOOZE, SNOOZE-STATE and SNOOZE-HEADING: "I think that's
// snoozing now. That's a better term than more expected"; it gets the z's, keeps listening and so is not drained; one
// table of states renders every state the same way; and the banner heading says "at", because "The word since isn't
// useful".
test('Snoozing has its own glyph, keeps its watcher, is never drained, and one table renders every state', () => {
  const snoozing = banners(standard).find((lines) => lines[0]?.startsWith('### 💤'))
  expect(snoozing?.[0]).toBe('### 💤 Snoozing (on hold) · at 23:58 GMT')
  expect(snoozing?.[2]).toBe('💤 waiting for a message · 🅿️ 2 queries parked')
  expect(snoozing).toContain('- 💤 a message arrives, or `resume`')
  expect(snoozing?.some((line) => line.startsWith('👂'))).toBe(false)
  expect(snoozing?.some((line) => line.includes('drained'))).toBe(false)
  expect(snoozing?.filter((line) => line.startsWith('- ')).every((line) => /^- (?:🅿️|💤) /u.test(line))).toBe(true)
  expect('**Stop at 23:58 GMT · mark 23:55 GMT**').toMatch(FORM_LINE)
  expect('### ⏸️ On hold · more expected · at 23:58 GMT').not.toMatch(BANNER_HEADING)
  expect('### 👤 With supervisor · since 23:52 GMT').not.toMatch(BANNER_HEADING)
  expect('↪️ draining → 💤 Snoozing (on hold)').toMatch(HEADING_FOR_LINE)
  const table = standard.split('**One table of states.**')[1]?.split('\n\n**')[0] ?? ''
  expect(table).toContain(
    '| State | Glyph | Banner heading | Counts line | Allowed items | Listening line | Reply structure |'
  )
  for (const state of [
    'With worker',
    'Handoff to supervisor',
    'With supervisor',
    'Handoff to worker',
    'On hold, paused',
    'Snoozing (on hold)',
    'Finished'
  ])
    expect(table).toContain(`| ${state} |`)
  for (const text of [standard, outputStyle]) {
    expect(text).not.toContain(`\`${LISTEN_HOLD_LINE}\`;`)
    expect(text).not.toContain('hold, more expected` and push')
    expect(text).toContain('`hold, snoozing`')
    expect(text).toContain('`💤 waiting for a message · 🅿️ <n> queries parked`')
  }
  expect(outputStyle).not.toContain(LISTEN_HOLD_LINE)
  expect(standard).not.toContain('- **Listening hold:**')
})
