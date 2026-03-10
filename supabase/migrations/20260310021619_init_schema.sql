-- Schema Setup for Study-Sync MVP

-- Enable pg_trgm for search
create extension if not exists "pg_trgm";

-- 1. Profiles (extending auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  display_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.profiles enable row level security;

-- 2. Projects
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  deadline timestamp with time zone,
  created_by uuid references public.profiles(id) not null,
  health_status text default 'ON_TRACK' check (health_status in ('ON_TRACK', 'AT_RISK', 'CRITICAL')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.projects enable row level security;

-- 3. Project Members
create table public.project_members (
  project_id uuid references public.projects(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  role text default 'MEMBER' check (role in ('OWNER', 'MEMBER')),
  joined_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (project_id, user_id)
);
alter table public.project_members enable row level security;

-- 4. Tasks
create table public.tasks (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references public.projects(id) on delete cascade not null,
  title text not null,
  description text,
  assigned_to uuid references public.profiles(id),
  status text default 'TODO' check (status in ('TODO', 'IN_PROGRESS', 'REVIEW', 'DONE')),
  due_date timestamp with time zone,
  estimated_hours numeric default 1.0,
  criticality_score numeric default 0.0, -- Updatable via Edge Function
  is_active_focus boolean default false, -- For Realtime Sync Progress
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.tasks enable row level security;

-- RLS: Profiles (Users can read public profiles and update their own)
create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);
create policy "Users can update own profile." on public.profiles
  for update using (auth.uid() = id);

-- RLS: Projects (Users can see projects they are members of)
create policy "Members can view projects" on public.projects
  for select using (
    exists (
      select 1 from public.project_members pm
      where pm.project_id = id and pm.user_id = auth.uid()
    )
  );
create policy "Owners can insert projects" on public.projects
  for insert with check (auth.uid() = created_by);
create policy "Owners can update projects" on public.projects
  for update using (auth.uid() = created_by);

-- RLS: Project Members
create policy "Members can view all members in their projects" on public.project_members
  for select using (
    exists (
      select 1 from public.project_members pm
      where pm.project_id = project_members.project_id and pm.user_id = auth.uid()
    )
  );
create policy "Owners can add members" on public.project_members
  for insert with check (
    exists (
      select 1 from public.projects p
      where p.id = project_id and p.created_by = auth.uid()
    )
  );

-- RLS: Tasks
create policy "Members can view tasks of their projects" on public.tasks
  for select using (
    exists (
      select 1 from public.project_members pm
      where pm.project_id = tasks.project_id and pm.user_id = auth.uid()
    )
  );
create policy "Members can insert tasks" on public.tasks
  for insert with check (
    exists (
      select 1 from public.project_members pm
      where pm.project_id = project_id and pm.user_id = auth.uid()
    )
  );
create policy "Assignee or Owners can update tasks" on public.tasks
  for update using (
    auth.uid() = assigned_to or
    exists (
      select 1 from public.projects p
      where p.id = project_id and p.created_by = auth.uid()
    )
  );

-- Set up realtime for tasks updates (for the Focus Timer / Sync Progress)
alter publication supabase_realtime add table public.tasks;
alter publication supabase_realtime add table public.projects;
