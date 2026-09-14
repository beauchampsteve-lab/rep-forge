# RepForge Branding v1.4

## Build Notes
- Renamed the app from Workout Tracker to **RepForge** throughout the UI.
- Added the approved Signature v2 RF/barbell brand mark.
- Added production PWA icon assets at 96, 192, 512 and 1024 px.
- Added 16/32 px favicons and `favicon.ico`.
- Added dark and light horizontal RepForge wordmarks.
- Updated the PWA manifest name, short name, theme/background colors and maskable icon definitions.
- Added RepForge branding to the app header.
- Added branded startup/loading treatment: **Build Progress. Every Rep Counts.**
- Updated Settings/About and in-app guide references to RepForge.
- Updated backup filenames to use the RepForge name.
- Bumped service-worker cache to `repforge-brand-v140` and precached primary brand assets.
- No changes to workout logic, program data, sync architecture, exercise catalog, or Supabase schema.

## Data / Schema Impact
None. Existing user programs, history and Supabase records are unchanged.

## Deployment
Upload/replace all files in this package **except your existing `config.js`**. This package intentionally does not include `config.js`.

Recommended files to deploy:
- `index.html`
- `sw.js`
- `manifest.json`
- `icon-96.png`
- `icon-192.png`
- `icon-512.png`
- `icon-1024.png`
- `favicon-16.png`
- `favicon-32.png`
- `favicon.ico`
- `logo-mark.png`
- `logo-horizontal-dark.png`
- `logo-horizontal-light.png`

## Android Icon Refresh
Android aggressively caches installed PWA icons. After GitHub Pages deploys:
1. Remove the existing installed PWA from Android.
2. Open the RepForge URL in Chrome.
3. If the old icon remains, clear site storage for the URL.
4. Install/Add to Home Screen again.

## Migration / Backup
No migration is required. A JSON backup before deployment is still recommended as normal release hygiene.
