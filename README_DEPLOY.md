# Workout Tracker vNext - Cloud-authoritative program sync

This build keeps Supabase as the authoritative source for the program when signed in.

## Deploy
Replace `index.html` and `sw.js` in the existing GitHub Pages repository. Keep the existing `config.js` unchanged.

## Sync behavior
- Program edits are saved locally immediately.
- When signed in and online, program saves use optimistic concurrency against the cloud `updated_at` value.
- Opening the app on another device pulls the latest cloud program instead of re-uploading a stale local copy.
- Offline local edits are marked pending and are only uploaded if the cloud revision has not changed.
- If another device changed the program first, the app shows a conflict dialog with **Use Cloud Version** or **Keep My Changes**.
- Workout/session history remains mergeable and account-scoped.

No Supabase schema changes are required; the existing `workout_programs.updated_at` field is used for revision checks.
