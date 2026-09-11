-- Workout Tracker cloud backend for Supabase
-- Run this entire file in Supabase SQL Editor.

create table if not exists public.workout_programs (
  user_id uuid primary key references auth.users(id) on delete cascade,
  program jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.workout_sessions (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  session_date date not null,
  routine text not null,
  payload jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists workout_sessions_user_date_idx
  on public.workout_sessions(user_id, session_date);

alter table public.workout_programs enable row level security;
alter table public.workout_sessions enable row level security;

revoke all on public.workout_programs from anon;
revoke all on public.workout_sessions from anon;
grant select, insert, update, delete on public.workout_programs to authenticated;
grant select, insert, update, delete on public.workout_sessions to authenticated;

drop policy if exists "Users can read their own program" on public.workout_programs;
drop policy if exists "Users can insert their own program" on public.workout_programs;
drop policy if exists "Users can update their own program" on public.workout_programs;
drop policy if exists "Users can delete their own program" on public.workout_programs;

drop policy if exists "Users can read their own sessions" on public.workout_sessions;
drop policy if exists "Users can insert their own sessions" on public.workout_sessions;
drop policy if exists "Users can update their own sessions" on public.workout_sessions;
drop policy if exists "Users can delete their own sessions" on public.workout_sessions;

create policy "Users can read their own program"
  on public.workout_programs for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can insert their own program"
  on public.workout_programs for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own program"
  on public.workout_programs for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Users can delete their own program"
  on public.workout_programs for delete
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can read their own sessions"
  on public.workout_sessions for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can insert their own sessions"
  on public.workout_sessions for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own sessions"
  on public.workout_sessions for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Users can delete their own sessions"
  on public.workout_sessions for delete
  to authenticated
  using ((select auth.uid()) = user_id);
