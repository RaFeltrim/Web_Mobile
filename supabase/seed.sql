-- Insert 3 mock users corresponding to the team members
-- Note: User auth records must be inserted via API or Supabase Dashboard. 
-- In a local environment, you could insert directly into auth.users but for simplicity we'll insert into a proxy table or create mock profiles if RLS allows or if we just run it as superuser.
-- The easiest way in local Supabase seed is to insert directly into auth.users.

insert into auth.users (id, email, raw_user_meta_data)
values 
  ('11111111-1111-1111-1111-111111111111', 'estefano@miv.com', '{"name": "Estefano Nascimento"}'),
  ('22222222-2222-2222-2222-222222222222', 'pedro@miv.com', '{"name": "Pedro Augusto"}'),
  ('33333333-3333-3333-3333-333333333333', 'pyerre@miv.com', '{"name": "Pyerre Klyzlow"}')
on conflict (id) do nothing;

insert into public.profiles (id, display_name)
values 
  ('11111111-1111-1111-1111-111111111111', 'Estefano'),
  ('22222222-2222-2222-2222-222222222222', 'Pedro'),
  ('33333333-3333-3333-3333-333333333333', 'Pyerre')
on conflict (id) do nothing;

-- Insert Mock Project "SSC0961"
insert into public.projects (id, name, description, created_by, health_status)
values
  ('99999999-9999-9999-9999-999999999999', 'SSC0961 - Projeto Mobile', 'Desenvolver o app Study-Sync para a aula da Profa. Lina', '11111111-1111-1111-1111-111111111111', 'AT_RISK')
on conflict (id) do nothing;

-- Map Members
insert into public.project_members (project_id, user_id, role)
values
  ('99999999-9999-9999-9999-999999999999', '11111111-1111-1111-1111-111111111111', 'OWNER'),
  ('99999999-9999-9999-9999-999999999999', '22222222-2222-2222-2222-222222222222', 'MEMBER'),
  ('99999999-9999-9999-9999-999999999999', '33333333-3333-3333-3333-333333333333', 'MEMBER')
on conflict (project_id, user_id) do nothing;

-- Insert Tasks
insert into public.tasks (id, project_id, title, assigned_to, status, criticality_score, is_active_focus)
values
  (gen_random_uuid(), '99999999-9999-9999-9999-999999999999', 'Criar Diagrama de Classes', '11111111-1111-1111-1111-111111111111', 'DONE', 0, false),
  (gen_random_uuid(), '99999999-9999-9999-9999-999999999999', 'Modelagem do Banco via Migrar', '22222222-2222-2222-2222-222222222222', 'IN_PROGRESS', 5.5, true),
  (gen_random_uuid(), '99999999-9999-9999-9999-999999999999', 'Implementar Auth no Frontend', '33333333-3333-3333-3333-333333333333', 'TODO', 8.0, false),
  (gen_random_uuid(), '99999999-9999-9999-9999-999999999999', 'Integrar Edge Functions', '11111111-1111-1111-1111-111111111111', 'TODO', 10.0, false);
