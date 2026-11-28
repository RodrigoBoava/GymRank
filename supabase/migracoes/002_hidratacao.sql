-- =====================================================================
-- GymRank, Hidratação: registros de água e histórico de metas
-- Pode ser executado mais de uma vez (idempotente). Não apaga dados.
-- Cole no Supabase: SQL Editor > New query > Run
-- =====================================================================

-- ---------- Cada copo/garrafa registrado ----------
-- "data" é o dia LOCAL do usuário (YYYY-MM-DD), calculado no navegador,
-- para que a virada do dia aconteça à meia-noite do fuso dele, e não em UTC.
create table if not exists public.hidratacao_registros (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  data date not null,
  quantidade_ml int not null check (quantidade_ml between 10 and 2000),
  registrado_em timestamptz not null default now(),
  criado_em timestamptz not null default now()
);

create index if not exists hidratacao_registros_dia_idx
  on public.hidratacao_registros (user_id, data, registrado_em);

-- ---------- Histórico da meta diária ----------
-- Uma linha por mudança de meta. A meta de um dia é a última com vigente_desde <= dia.
-- Assim, mudar a meta hoje não reescreve o desempenho dos dias anteriores.
-- origem: 'sugerida' (estimativa do app aceita) ou 'manual' (definida pelo usuário).
-- estimativa_ml: a estimativa do app no momento da decisão. Se peso ou frequência
-- mudarem, a estimativa nova fica diferente desta e o app OFERECE atualizar a meta
-- (nunca troca sozinho).
create table if not exists public.hidratacao_metas (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  vigente_desde date not null,
  meta_ml int not null check (meta_ml between 1000 and 6000),
  origem text not null check (origem in ('sugerida', 'manual')),
  estimativa_ml int check (estimativa_ml between 1000 and 6000),
  criado_em timestamptz not null default now(),
  unique (user_id, vigente_desde)
);

-- Para quem rodou a primeira versão deste arquivo
alter table public.hidratacao_metas
  add column if not exists estimativa_ml int check (estimativa_ml between 1000 and 6000);

-- ---------- Segurança: cada usuário só vê e altera os próprios dados ----------
alter table public.hidratacao_registros enable row level security;
alter table public.hidratacao_metas enable row level security;

drop policy if exists dono_hidratacao_registros on public.hidratacao_registros;
create policy dono_hidratacao_registros on public.hidratacao_registros
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists dono_hidratacao_metas on public.hidratacao_metas;
create policy dono_hidratacao_metas on public.hidratacao_metas
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);