# Cloud Sync Setup

This version uses Supabase Auth + Postgres. Supabase provides the browser client and Row Level Security; the app never needs the server/service-role key.

## 1. Create a Supabase project

Create a project at https://supabase.com/.

## 2. Create the cloud tables

Open **SQL Editor** and run the full contents of `supabase.sql`.

The SQL enables Row Level Security and grants each authenticated user access only to their own program and workout rows.

## 3. Add the browser credentials

In Supabase, open the project API settings and copy:
- Project URL
- Publishable key (or the project's public/anon key if that is what your dashboard exposes)

Open `config.js` and replace the two placeholders.

Do NOT use the `service_role` key in this file. It must stay server-side.

## 4. Deploy the app

Upload the app files to your GitHub Pages repository (or another HTTPS static host). The Supabase browser client is loaded from the jsDelivr CDN.

## 5. Create your account

Open the app, tap the gear, choose **Create account**, then sign in.

On the first sign-in, the app merges any workout history already stored on that device into the cloud, then uploads the current program.

After that, signing in on another device downloads the cloud history and program.

## Data model

`workout_programs`: one row per user containing the current program JSON.

`workout_sessions`: one row per completed workout session. Each session stores its full set-by-set payload as JSONB plus indexed date/routine fields.

## Security

The SQL enables Row Level Security on both tables. Policies use `auth.uid()` so authenticated users can access only rows with their own user ID. Never put a Supabase `service_role` key in the browser.
