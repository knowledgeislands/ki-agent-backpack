#!/usr/bin/env bash
# UserPromptSubmit and SessionStart(compact): short conditional pointers owned by
# ki-coordination. Checkout capability does not prove selected work or session role.
# Full rules, re-anchoring and the coordinator method self-check live in the
# authoritative standard/output style. Full session-sensitive detection is deferred,
# but a session whose opener's Session: line or earlier reply names its seat, and whose
# actor the Cairn store names, is told its named thread line (NAME-FIRST).
# Fail open silently on unusable input.
set -u

line='Only if the owner explicitly opened or resumed coordination, follow ki-coordination (skills/work/ki-coordination/references/standard-coordination.md). Otherwise use its conversational Reply forms. Every reply opens with **Reply HH:MM** (date -u); one asking a decision ends with the reply block.'
pointer='Context was compacted. Only if explicitly coordinating, follow Re-anchoring after compaction in ki-coordination (skills/work/ki-coordination/references/standard-bootstrap.md). Otherwise use its conversational Reply forms. Every reply opens with **Reply HH:MM** (date -u); one asking a decision ends with the reply block.'

command -v jq >/dev/null 2>&1 || exit 0
input=$(cat 2>/dev/null) || exit 0
[ -n "$input" ] || exit 0

event=$(printf '%s' "$input" | jq -r '.hook_event_name // empty' 2>/dev/null) || exit 0
context=$line
case "$event" in
  UserPromptSubmit) ;;
  SessionStart)
    source=$(printf '%s' "$input" | jq -r '.source // empty' 2>/dev/null) || exit 0
    [ "$source" = compact ] || exit 0
    context=$pointer
    ;;
  *) exit 0 ;;
esac

# Capability guard only: a declaration never establishes session role or selection.
# The working directory may be a subdirectory of the declaring checkout.
cwd=$(printf '%s' "$input" | jq -r '.cwd // empty' 2>/dev/null) || exit 0
[ -n "$cwd" ] || cwd=$PWD
[ -d "$cwd" ] || exit 0

capable() {
  [ -f "$1/.ki.toml" ] && grep -Eq '^\[skills\.ki-coordination\]' "$1/.ki.toml" 2>/dev/null
}

if ! capable "$cwd"; then
  top=$(git -C "$cwd" rev-parse --show-toplevel 2>/dev/null) || exit 0
  [ -n "$top" ] || exit 0
  capable "$top" || exit 0
fi

# >>> seat-name: the same in both coordinator hooks, which coordinator-reminder.test.ts holds alike.
# A thread line's named form, <Name> (<seat form>), from the ki-name of the actor its seat's ki-workers
# entry points at (NAME-FIRST): the entry holding the package's ki-role for the keyholder, its role for
# a keyless seat. Reads only the Cairn store that Cairn's config.toml names; prints nothing where the
# seat is unnamed, ambiguous or anything is unresolved.
seat_named() {
  local inner=$1 id role conf store actors actor name names=
  local named_re='^[A-Za-z][A-Za-z0-9.-]*( [A-Za-z][A-Za-z0-9.-]*)* \((.*)\)$'
  local name_re='^[A-Za-z][A-Za-z0-9.-]*( [A-Za-z][A-Za-z0-9.-]*)*$'
  local key_re='^[^ ]+ 🔑 ([a-z0-9][a-z0-9.+-]*)$'
  local seat_re='^[^ ]+ ([a-z0-9-]+(\.[a-z0-9-]+)+(\+[a-z0-9-]+)*)@([a-z]+(-[a-z]+)*)$'
  [[ $inner =~ $named_re ]] && inner=${BASH_REMATCH[2]}
  if [[ $inner =~ $key_re ]]; then
    id=${BASH_REMATCH[1]} role=
  elif [[ $inner =~ $seat_re ]]; then
    id=${BASH_REMATCH[1]} role=${BASH_REMATCH[4]}
  else
    return 0
  fi
  conf=${XDG_CONFIG_HOME:-}
  case $conf in /*) ;; *) conf=${HOME:-}/.config ;; esac
  store=$(sed -n '/^\[store\]/,/^\[/s/^path[[:space:]]*=[[:space:]]*"\([^"]*\)".*/\1/p' "$conf/cairn/config.toml" 2>/dev/null | head -n 1)
  case $store in \~/*) store=${HOME:-}/${store#\~/} ;; esac
  case $store in /*) ;; *) return 0 ;; esac
  set -- "$store"/work/*/"$id"/_index.md
  [ $# -eq 1 ] && [ -f "$1" ] || return 0
  actors=$(awk -v want="$role" '
    function val(s) { sub(/^[^:]*:[ \t]*/, "", s); gsub(/["\047]/, "", s); sub(/[ \t]+$/, "", s); return s }
    function field(s) { sub(/^[ \t]+/, "", s); if (s ~ /^id:/) ids[n] = val(s); else if (s ~ /^role:/) roles[n] = val(s) }
    { sub(/\r$/, "") }
    NR == 1 { if ($0 != "---") exit; next }
    /^---[ \t]*$/ { exit }
    /^[^ \t-]/ { inw = $0 ~ /^(ki-)?workers:/; if ($0 ~ /^(ki-)?role:/) lead = val($0); next }
    inw && /^[ \t]*- / { n++; s = $0; sub(/^[ \t]*- /, "", s); field(s); next }
    inw && /^[ \t]+[a-z_]+:/ { field($0) }
    END {
      if (want == "") want = lead
      for (i = 1; want != "" && i <= n; i++) if (roles[i] == want && ids[i] ~ /^actor:[a-z0-9][a-z0-9-]*$/) print substr(ids[i], 7)
    }' "$1" 2>/dev/null) || return 0
  for actor in $actors; do
    name=$(awk '
      { sub(/\r$/, "") }
      NR == 1 { if ($0 != "---") exit; next }
      /^---[ \t]*$/ { exit }
      /^ki-name:/ { sub(/^ki-name:[ \t]*/, ""); gsub(/["\047]/, ""); sub(/[ \t]+$/, ""); print; exit }' "$store/roster/actors/$actor/_index.md" 2>/dev/null)
    [[ $name =~ $name_re ]] || continue
    [ -z "$names" ] || [ "$names" = "$name" ] || return 0
    names=$name
  done
  [ -z "$names" ] || printf '%s (%s)\n' "$names" "$inner"
}
# <<< seat-name

# The session's seat, read only once it is known: the opener's Session: line in this prompt,
# else the last thread line an earlier reply closed with, from the transcript's last 8 MiB.
seat=$(printf '%s' "$input" | jq -r '.prompt | strings' 2>/dev/null | sed -n 's/^Session: //p' | tail -n 1)
seat=${seat%%. Your first act*}
seat=${seat%.}
transcript=$(printf '%s' "$input" | jq -r '.transcript_path | strings' 2>/dev/null)
if [ -z "$seat" ] && [ -f "$transcript" ]; then
  size=$(wc -c <"$transcript" 2>/dev/null) || size=0
  blocks=$((size / 1048576))
  seat=$(dd if="$transcript" bs=1048576 skip=$((blocks > 8 ? blocks - 8 : 0)) 2>/dev/null |
    LC_ALL=C grep -F '"type":"assistant"' |
    LC_ALL=C grep -oE '(\\n|")([A-Za-z][A-Za-z0-9.-]*( [A-Za-z][A-Za-z0-9.-]*)* \()?((🧵|[^ -~"\\]+ 🔑) [A-Za-z0-9][A-Za-z0-9._+-]*|[^ -~"\\]+ [a-z0-9-]+([.][a-z0-9-]+)+([+][a-z0-9-]+)*[@+][a-z]+(-[a-z]+)*)\)?(\\n|")' |
    tail -n 1 | sed -e 's/^\\n//' -e 's/^"//' -e 's/\\n$//' -e 's/"$//')
fi
if [ -n "$seat" ]; then
  named=$(seat_named "$seat")
  [ -z "$named" ] || context="$context Close every banner with your seat's named thread line: $named."
fi

jq -cn --arg event "$event" --arg line "$context" \
  '{hookSpecificOutput: {hookEventName: $event, additionalContext: $line}}' 2>/dev/null || exit 0

exit 0
