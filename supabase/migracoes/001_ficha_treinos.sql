-- =====================================================================
-- GymRank, Fase 1: fichas de treino, cargas, recordes, frequência e peso
-- Pode ser executado mais de uma vez (idempotente). Não apaga dados.
-- Cole no Supabase: SQL Editor > New query > Run
-- =====================================================================

-- ---------- Fichas (Treino A, B, C...) ----------
create table if not exists public.fichas (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  nome text not null check (char_length(nome) between 1 and 60),
  descricao text check (char_length(descricao) <= 120),
  dias_semana text[] not null default '{}'
    check (dias_semana <@ array['seg','ter','qua','qui','sex','sab','dom']::text[]),
  ordem int not null default 0,
  criado_em timestamptz not null default now(),
  unique (id, user_id)
);

-- ---------- Exercícios de cada ficha ----------
create table if not exists public.ficha_exercicios (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  ficha_id uuid not null,
  grupo text not null,
  exercicio text not null,
  series int not null default 3 check (series between 1 and 20),
  repeticoes int not null default 10 check (repeticoes between 1 and 200),
  descanso_seg int not null default 60 check (descanso_seg between 0 and 900),
  duracao_min int check (duracao_min between 1 and 600),
  tipo_carga text not null default 'maquina'
    check (tipo_carga in ('halter','barra','maquina','peso_corporal','cardio')),
  unilateral boolean not null default false,
  ordem int not null default 0,
  criado_em timestamptz not null default now(),
  unique (ficha_id, exercicio),
  -- impede ligar um exercício à ficha de OUTRO usuário
  foreign key (ficha_id, user_id) references public.fichas (id, user_id) on delete cascade
);
create index if not exists ficha_exercicios_ficha_idx on public.ficha_exercicios (ficha_id, ordem);

-- ---------- Registro de cargas (uma linha por série) ----------
create table if not exists public.registros_carga (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  exercicio text not null,
  grupo text not null,
  ficha_id uuid,
  data date not null default current_date,
  serie_num int not null check (serie_num between 1 and 30),
  lado text not null default 'ambos' check (lado in ('ambos','esquerdo','direito')),
  tipo_carga text not null check (tipo_carga in ('halter','barra','maquina','peso_corporal','cardio')),
  repeticoes int check (repeticoes between 1 and 300),
  carga_total_kg numeric(7,2) check (carga_total_kg between 0 and 2000),
  carga_por_halter_kg numeric(6,2) check (carga_por_halter_kg between 0 and 1000),
  carga_por_lado_kg numeric(6,2) check (carga_por_lado_kg between 0 and 1000),
  peso_barra_kg numeric(5,2) check (peso_barra_kg between 0 and 100),
  duracao_min int check (duracao_min between 1 and 600),
  criado_em timestamptz not null default now(),
  -- evita registro duplicado da mesma série
  unique (user_id, exercicio, data, serie_num, lado),
  check (
    (tipo_carga = 'cardio' and duracao_min is not null)
    or (tipo_carga <> 'cardio' and repeticoes is not null and carga_total_kg is not null)
  ),
  foreign key (ficha_id, user_id) references public.fichas (id, user_id) on delete set null (ficha_id)
);
create index if not exists registros_carga_busca_idx on public.registros_carga (user_id, exercicio, data desc);

-- ---------- Recordes pessoais (eventos) ----------
create table if not exists public.recordes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  exercicio text not null,
  lado text not null default 'ambos' check (lado in ('ambos','esquerdo','direito')),
  tipo text not null check (tipo in ('carga','e1rm','repeticoes')),
  valor numeric(8,2) not null,
  anterior numeric(8,2),
  carga_ref_kg numeric(7,2) not null default 0,   -- carga usada no recorde de repetições
  data date not null default current_date,
  criado_em timestamptz not null default now(),
  unique (user_id, exercicio, lado, tipo, data, carga_ref_kg)
);
create index if not exists recordes_recentes_idx on public.recordes (user_id, data desc);

-- ---------- Frequência na academia ----------
create table if not exists public.frequencia (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  data date not null,
  status text not null check (status in ('treinou','faltou','descanso')),
  ficha_id uuid,
  observacao text check (char_length(observacao) <= 200),
  criado_em timestamptz not null default now(),
  unique (user_id, data),
  foreign key (ficha_id, user_id) references public.fichas (id, user_id) on delete set null (ficha_id)
);

-- ---------- Peso corporal ----------
create table if not exists public.peso_corporal (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  data date not null,
  peso_kg numeric(5,1) not null check (peso_kg between 20 and 400),
  criado_em timestamptz not null default now(),
  unique (user_id, data)
);

-- Mantém o peso da ficha pessoal (perfis) igual ao registro mais recente
create or replace function public.sincronizar_peso_perfil() returns trigger
language plpgsql as $$
begin
  if new.data >= coalesce((select max(p.data) from public.peso_corporal p where p.user_id = new.user_id), new.data) then
    update public.perfis set peso_kg = new.peso_kg, atualizado_em = now() where user_id = new.user_id;
  end if;
  return new;
end $$;

drop trigger if exists peso_corporal_sincroniza on public.peso_corporal;
create trigger peso_corporal_sincroniza
  after insert or update of peso_kg, data on public.peso_corporal
  for each row execute function public.sincronizar_peso_perfil();

-- ---------- Resumo dos exercícios já registrados (para a tela de evolução) ----------
create or replace view public.resumo_exercicios with (security_invoker = true) as
  select user_id, exercicio, max(grupo) as grupo, count(*)::int as series,
         count(distinct data)::int as sessoes, max(data) as ultima
  from public.registros_carga
  group by user_id, exercicio;

-- ---------- Segurança: cada usuário só enxerga e altera os próprios dados ----------
do $$
declare t text;
begin
  foreach t in array array['fichas','ficha_exercicios','registros_carga','recordes','frequencia','peso_corporal']
  loop
    execute format('alter table public.%I enable row level security', t);
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('drop policy if exists "dono_%1$s" on public.%1$I', t);
    execute format(
      'create policy "dono_%1$s" on public.%1$I for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id)', t);
  end loop;
end $$;

grant select on public.resumo_exercicios to authenticated;
