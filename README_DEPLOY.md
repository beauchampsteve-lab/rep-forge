# Workout Tracker - Time/Duration Metrics Update

## Build Notes
- Added a per-exercise **Metric** setting: **Reps** or **Time**.
- Time-based exercises (for example planks/holds) use duration rather than reps.
- Duration is stored internally as seconds and displayed as seconds or `m:ss` when appropriate.
- The workout entry field accepts both plain seconds (for example `60`) and `m:ss` (for example `1:00`).
- Added time-aware double/bodyweight progression. A time target such as `30-60 sec` can progress by a configured number of seconds.
- Separated training volume into **rep volume (load x reps)** and **timed volume (load x seconds)** so timed holds are not counted as rep tonnage.
- Added total timed-work duration to workout history and progress KPIs.
- Added time-aware exercise history/PR presentation, using best hold time instead of e1RM for timed exercises.
- Timed exercises do not calculate e1RM.
- Existing historical sessions without a `metric` field continue to be treated as rep-based for backward compatibility.
- Existing exercises are normalized to Reps unless their configured description already indicates seconds/minutes/holds; the sample Hollow Hold is configured as a Time exercise.

## Data / Schema Impact
- No Supabase schema changes are required.
- No new database columns are required.
- The exercise `metric` is stored inside the existing program/session payload JSON.
- Existing `workout_sessions` and `workout_programs` tables remain unchanged.

## Deployment Notes
- Replace `index.html` and `sw.js` in GitHub Pages.
- `manifest.json` and `icon-192.png` may be replaced if desired.
- Preserve the existing `config.js` exactly as-is.
- This build does not require any Supabase SQL changes.
- The service-worker cache version is bumped to invalidate the previous UI build.

## Migration / Backup Requirements
- No migration is required for existing program or session data.
- Existing programs will continue to behave as Reps unless their exercise metric is explicitly set to Time.
- A JSON backup before deployment is recommended but not required.

## Suggested Setup
For a plank:
- Load: Bodyweight
- Metric: Time
- Sets: 3
- Reps / Duration: `30-60 sec`
- Progression: Bodyweight or Double Progression
- Increment: `5` seconds
