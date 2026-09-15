# RepForge v1.5.2 — 5/3/1 Cycle Progression Fix

## Build Notes
- Fixed 5/3/1 Week 3 incorrectly triggering the end-of-cycle review and skipping Week 4 deload.
- Cycle completion is now based on the week that was actually logged, not the already-advanced program week.
- Week 1 completion advances to Week 2; Week 2 to Week 3; Week 3 to Week 4 deload.
- The 5/3/1 cycle review appears only after a completed Week 4 workout.
- Training Max is eligible to increase only after Week 4 and only if all prescribed main-lift weights and minimum rep targets were completed across Weeks 1–4.
- Weeks 1–3 also require the separate AMRAP set to meet at least that week’s minimum rep prescription at the prescribed weight.
- If any prescribed set/weight/reps are missing or below target, the next cycle starts with the same Training Max.
- Cycle review now explains why a TM is being held when targets were missed.
- New 5/3/1 sessions store the exact programmed prescription used for that workout so later TM evaluation is not affected by future rounding-setting changes.
- “Keep TM & Advance” advances to the next cycle/Week 1 without increasing the Training Max.
- Accessory progression review remains independent from 5/3/1 Training Max progression.
- Updated User Guide 5/3/1 explanation.

## Data / Schema Impact
- No Supabase schema changes.
- No data migration required.
- Existing workout history and program settings are preserved.

## Deployment Notes
- Replace `index.html` and `sw.js`.
- Preserve your existing `config.js`.
- Service-worker cache bumped to `repforge-531-cycle-v152`.
- Hard refresh once after GitHub Pages deployment.

## Validation
Expected sequence:
1. Log Week 1 -> program becomes Week 2.
2. Log Week 2 -> program becomes Week 3.
3. Log Week 3 -> program becomes Week 4 (Deload), with no TM review.
4. Log Week 4 -> cycle review appears.
5. If all prescribed targets from Weeks 1–4 were met, TM increase is offered. Otherwise TM is held.
