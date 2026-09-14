# Workout Tracker - Material Usability v1

## Deployment
Replace these files in the GitHub Pages repository:
- index.html
- sw.js
- manifest.json
- icon-192.png (optional; unchanged)

Keep the existing `config.js` unchanged.

Wait for GitHub Pages deployment to complete, then hard-refresh once on desktop. On Android, reopen the installed PWA; reinstall only if the previous app shell remains cached.

## Build Notes
- Added a Material-inspired visual and interaction pass aimed at Android/PWA use.
- Reworked Program editing around progressive disclosure to reduce scrolling and cognitive load.
- Workouts are now compact expandable cards instead of displaying every editor field at once.
- Exercises are now compact expandable rows with Active toggles and concise summaries.
- Exercise editing is grouped into:
  - Basics: name, sets, reps/duration, metric.
  - Load & progression: load type, targets, progression model, rule and increment.
  - Workout options: superset group, rest, warmups and substitutions.
- 5/3/1 settings are collapsed by default and summarized with TM/cycle/week.
- Program actions use a compact sticky action bar on mobile.
- Settings was rebuilt as a native-style preference list.
- Supabase URL/key moved under an Advanced section to reduce routine clutter.
- Added an in-app User Guide covering:
  - Getting started
  - Workout logging
  - Programs and exercises
  - 5/3/1
  - Accessory progression
  - Reps vs timed exercises
  - Bodyweight / added load
  - Supersets and rest
  - Progress and history
  - Cloud sync and backups
- Updated theme/surface styling, buttons, controls, navigation and touch targets toward Material design conventions.
- Preserved current workout logic, time metrics, bodyweight support, progression logic, cloud sync and multi-user behavior.

## Data / Schema Impact
- No Supabase schema changes.
- No program or workout data migration.
- Existing programs, history and account data are preserved.
- Existing `config.js` must be preserved.

## Migration / Backup
- No migration required.
- A JSON backup is still recommended before any major app update.
