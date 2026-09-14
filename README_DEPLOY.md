# Workout Tracker — Exercise Catalog & Smart Substitutions v1.3

## Deploy
Replace `index.html`, `sw.js`, and `manifest.json` in GitHub Pages. Keep your existing `config.js` unchanged. `icon-192.png` may also be replaced.

## Build Notes
- Added a built-in curated exercise catalog with movement pattern, primary/secondary muscles, equipment, load type, metric, laterality and difficulty metadata.
- Added Material-style catalog search, equipment filtering, Favorites, Recents, In Programs and My Exercises views.
- Program `+ Exercise` now opens the catalog instead of creating a blank exercise first.
- Added custom-exercise fallback for movements not in the built-in catalog.
- Added one-tap Replace flow from Program.
- Added in-workout Substitute action for accessory exercises.
- Added metadata-driven substitute recommendations based on movement pattern, muscle overlap, load/metric and laterality.
- Added `Just for today` substitutions that do not change the saved program.
- Added `Replace in this program` substitution option for permanent changes.
- Temporary substitutions preserve both planned and performed exercise identity in session history.
- Each substituted exercise keeps independent history/progression; planned exercise progression is not advanced by a temporary substitute.
- Added Favorites and Recent exercises to speed repeat use.
- Updated User Guide with catalog and substitution workflows.
- Preserved time-vs-reps metrics, bodyweight modes, 5/3/1, progression, cloud sync, and existing Supabase schema.

## Data / Schema Impact
- No Supabase schema changes.
- New catalog metadata and substitution references live inside existing JSON payloads.
- Existing program exercises are automatically matched to catalog entries by exact name where possible.
- Existing custom exercises remain valid.

## Migration / Backup
- No migration required.
- Exporting a JSON backup before deployment remains recommended.
