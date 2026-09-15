# Workout Tracker — Material v1.3.1 Substitute Action Fix

## Deploy
Replace `index.html` and `sw.js` in GitHub Pages. Keep your existing `config.js` unchanged. No Supabase changes are required.

## Build Notes
- Fixed a Material UI regression that removed the visible in-workout substitution action from accessory exercise cards.
- Added a clear, always-visible `↔ Swap exercise` action to every accessory exercise during an active workout.
- When a temporary substitute is already active, the action changes to `↔ Change substitute` and a `Use planned exercise` action appears.
- Preserved the existing smart substitution picker, catalog recommendations, Favorites, Recents, equipment filters, and `Just for today` / `Replace in this program` flows.
- Main 5/3/1 lift remains intentionally excluded from quick in-workout substitution.
- Temporary substitutions continue to record both planned and performed exercise identities and do not advance the planned exercise's progression.
- No data-model or Supabase schema changes.
- No migration required.
- Existing `config.js` must be preserved.

## Data / Schema Impact
None.

## Migration / Backup
No migration required. A JSON backup before deployment is still recommended for any production update.
