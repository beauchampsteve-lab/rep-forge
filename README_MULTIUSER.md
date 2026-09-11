# Multi-user update

This build makes local program and workout data account-scoped.

- Each signed-in account gets its own IndexedDB/localStorage namespace.
- Signing out resets the active local profile to the guest/template program.
- Legacy local workout rows without an owner are not exposed to signed-in users or uploaded to their account.
- Supabase cloud data remains scoped by the authenticated user's ID.

Deploy by replacing `index.html` and `sw.js` in the existing GitHub Pages repository. Keep the existing `config.js` unchanged.
