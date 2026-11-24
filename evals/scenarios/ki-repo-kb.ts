/**
 * Eval scenarios for the `ki-repo-kb` skill — the Knowledge Islands zone
 * model. Each probes a house-specific rule (zone routing, the zone set, the digest
 * path) a skill-less baseline wouldn't know from general knowledge.
 */
import type { Scenario } from '../harness.ts'

export const scenarios: Scenario[] = [
  {
    skill: 'ki-repo-kb',
    id: 'kb-routing',
    prompt:
      'In a Knowledge Islands base, where does each of these go: (a) an active, in-progress workstream, (b) settled internal knowledge about our methodology, (c) external reference material that would exist without this base? Name the top-level zone for each.',
    assertions: [
      { name: 'active work → Streams', re: /\bStreams\b/ },
      { name: 'settled internal → Pillars', re: /\bPillars\b/ },
      { name: 'external → Resources', re: /\bResources\b/ }
    ],
    rubric:
      'House zone model: active/in-progress work → Streams/; settled internal knowledge → Pillars/ (migrates there from Streams once settled); external reference that would exist without this base → Resources/. A correct answer maps all three (Streams, Pillars, Resources) accordingly.'
  },
  {
    skill: 'ki-repo-kb',
    id: 'kb-zone-set',
    prompt:
      'What are the top-level folders of a Knowledge Islands base, and which of them are zones vs. working areas?',
    assertions: [
      {
        name: 'names the five zones',
        re: /Calendar[\s\S]*Pillars[\s\S]*Resources[\s\S]*Streams[\s\S]*Admin|Admin[\s\S]*Calendar/i
      },
      { name: 'Admin is a zone', re: /\bAdmin\b/ },
      {
        name: '+ / - are working areas, not zones',
        re: /(`?\+`?|`?-`?)[^.\n]{0,40}(working area|staging|inbound|outbound|not (a )?zone)/i
      }
    ],
    rubric:
      'House structure: FIVE zones — Calendar, Pillars, Resources, Streams, Admin — each with a same-name index note; flanked by `+` (inbound) and `-` (outbound) WORKING areas, which are not zones and carry no same-name index. A correct answer lists the five zones and identifies + / - as working areas rather than zones.'
  },
  {
    skill: 'ki-repo-kb',
    id: 'kb-digest-path',
    prompt:
      'I want to save a session digest in a Knowledge Islands base. What is the exact destination path and required frontmatter?',
    assertions: [
      { name: 'outbound _DIGESTS path', re: /-\/_DIGESTS\/|_DIGESTS/ },
      { name: 'type: session-digest', re: /session-digest/ },
      { name: 'retain_until frontmatter', re: /retain_until/ }
    ],
    rubric:
      'House convention: a session digest is written to `-/_DIGESTS/<UTC timestamp> <Short Topic>.md` (timestamp YYYY-MM-DDTHHMMSSZ), with frontmatter `type: session-digest` and `retain_until: YYYY-MM-DD` (default ~30 days out). A correct answer gives the `-/_DIGESTS/` outbound location and both frontmatter keys.'
  },
  // Activities, Live Artifacts and the Enactment gate came from their own skills.
  {
    skill: 'ki-repo-kb',
    id: 'act-slash-skill',
    prompt:
      "I'm adding an Activity note to our base for our `/weekly-digest` slash command. What should go in the note's frontmatter so it's conformant?",
    assertions: [
      { name: 'realization key', re: /realization/i },
      { name: 'slash-command type', re: /slash-command/i },
      { name: 'skill field naming the SKILL.md', re: /skill:/i },
      { name: 'lives under Activities folder', re: /Admin\/Operations\/Activities/i }
    ],
    rubric:
      'House fact: an Activity with `realization: slash-command` must declare `skill: <skill-name>`, which has to match a SKILL.md `name:` in the harness (the checker verifies the skill exists). A correct answer sets `realization: slash-command` and adds a `skill:` key naming the backing skill — not a generic "command" or "path" field.'
  },
  {
    skill: 'ki-repo-kb',
    id: 'act-scheduled-register',
    prompt:
      'Register our nightly inbox-triage automation as a scheduled-task activity. What does the activity note need, and is there anything the audit cannot confirm?',
    assertions: [
      { name: 'scheduled-task type', re: /scheduled-task/i },
      { name: 'schedule_name field', re: /schedule_name/i },
      { name: 'schedule_env field', re: /schedule_env/i },
      { name: 'external registration not verifiable', re: /regist|WARN|advisor|manual|cannot verify/i }
    ],
    rubric:
      'House fact: `realization: scheduled-task` requires `schedule_name` and `schedule_env` (e.g. `cowork`); the checker cannot verify registration in an external scheduler, so it only WARNs if `schedule_name` is absent and emits an ADVISORY that the job must be registered manually. A correct answer adds those fields and flags that external registration is not machine-verifiable.'
  },
  {
    skill: 'ki-repo-kb',
    id: 'act-index',
    prompt:
      'Where do activity notes live in an Islands base, and how does someone get the full list of what automations the base has adopted?',
    assertions: [
      { name: 'activities folder path', re: /Admin\/Operations\/Activities/i },
      { name: 'Activities.md index', re: /Activities\.md/ },
      { name: 'realization recorded', re: /realization/i },
      { name: 'status recorded', re: /status/i }
    ],
    rubric:
      'House fact: activity notes live at `Admin/Operations/Activities/<Activity Name>.md` and are indexed by `Admin/Operations/Activities/Activities.md` (the audit checks the index exists when any activity note is found). A correct answer names the `Admin/Operations/Activities/` folder and the `Activities.md` index note — not a README, a tag search, or a `Pillars/` location.'
  },
  {
    skill: 'ki-repo-kb',
    id: 'la-pairing',
    prompt:
      'Our Live Artifacts folder has a `Status Board.md` but no matching HTML file, and a stray `Metrics.html` with no Markdown. What is the state of each, in our terms?',
    assertions: [
      { name: 'lone .md is unpublished', re: /unpublished/i },
      { name: 'lone .html is orphan', re: /orphan/i },
      { name: 'html half', re: /\.html/i },
      { name: 'md half', re: /\.md/i }
    ],
    rubric:
      'House fact: each artifact is a pair `<Name>.md` + `<Name>.html` (same stem, same folder). A lone `.md` with no `.html` is an **unpublished** artifact; a lone `.html` with no `.md` is an **orphan**. The `.md` carries frontmatter; the `.html` does not. A correct answer labels the lone `.md` "unpublished" and the lone `.html` "orphan" rather than treating them as generic missing/extra files.'
  },
  {
    skill: 'ki-repo-kb',
    id: 'la-sync-threshold',
    prompt: 'How does the live-artifacts audit decide a dashboard is stale? Give the exact default rule.',
    assertions: [
      { name: 'default 24 hours', re: /\b24\b/ },
      { name: 'sync_threshold_hours binding', re: /sync_threshold_hours/i },
      { name: 'html vs md compared', re: /\.html/i },
      { name: 'direction: html older than md', re: /older|behind|stale|out of date/i }
    ],
    rubric:
      'House fact: the pair is in sync when the `.html` is not older than the `.md` by more than the configured threshold — **default 24 hours**, set by `sync_threshold_hours`. Staleness is specifically the `.html` lagging the `.md`. A correct answer states the direction and the 24-hour default and names `sync_threshold_hours`.'
  },
  {
    skill: 'ki-repo-kb',
    id: 'la-renders-fm',
    prompt: 'Scaffold the frontmatter for a new live-artifact Markdown source. What keys are mandatory?',
    assertions: [
      { name: 'renders key', re: /renders/i },
      { name: 'html render type', re: /html/i },
      { name: 'status key', re: /status/i },
      { name: 'author key', re: /author/i }
    ],
    rubric:
      'House fact: the `.md` source requires frontmatter `status` (`active` | `archived`), `renders` (`html`, or a comma-separated list of render types), and `author`. A correct answer includes the non-obvious `renders: html` key alongside `status` and `author`, not just generic tags/date frontmatter.'
  },
  {
    skill: 'ki-repo-kb',
    id: 'kb-enactment-gate',
    prompt:
      'In my Knowledge Islands base I want to (a) substantively revise a note in `Pillars/` and (b) fix a typo in a `Calendar/` daily note. Which can I edit directly, and which has to go through approved forward work? Which zones does that gate protect?',
    assertions: [
      { name: 'names the three gated canonical zones', re: /Admin[\s\S]*Pillars[\s\S]*Resources/i },
      { name: 'the Pillars change needs approved forward work', re: /pillars[\s\S]*(forward work|roadmap|approv|ki-work)/i },
      {
        name: 'the trivial / Calendar fix is exempt (direct edit)',
        re: /(typo|trivial|calendar)[\s\S]*(exempt|directly|without)/i
      }
    ],
    rubric:
      'House process (the one Enactment gate): substantive changes to `Admin`, `Pillars` or `Resources` need explicitly approved forward work, captured and delivered through `ki-work`, so a substantive `Pillars/` change is not edited directly. Trivial fixes, `Calendar/` entries and `+/` triage are exempt. A correct answer gates the Pillars edit behind approved forward work, names the three canonical zones, and lets the Calendar typo be a direct edit.'
  }
]
