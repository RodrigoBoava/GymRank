import { useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import { User, CalendarDays, Scale, Ruler, Flame, Activity, Target, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import Campo from "../components/Campo";
import {
  NIVEIS, OBJETIVOS, MET_FORCA, metDoCardio,
  calcularIdade, calcularTMB, calcularGastoDiario, calcularMeta, kcalPorMET,
} from "../lib/calorias";

const vazio = {
  nome: "", sexo: "", data_nascimento: "", peso_kg: "", altura_cm: "",
  nivel_atividade: "moderado", objetivo: "manter",
};

function Opcoes({ rotulo, valor, onChange, opcoes }) {
  return (
    <fieldset>
      <legend className="mb-1.5 text-sm font-medium text-zinc-300">{rotulo}</legend>
      <div className="flex gap-2">
        {opcoes.map((o) => (
          <button
            type="button" key={o.id} onClick={() => onChange(o.id)} aria-pressed={valor === o.id}
            className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
              valor === o.id
                ? "border-lime-400 bg-lime-400 text-zinc-950"
                : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600"
            }`}
          >
            {o.nome}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function Metrica({ icone: Icone, titulo, valor, texto }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <Icone className="size-5 text-lime-400" /> {titulo}
      </div>
      <p className="mt-2 text-4xl font-extrabold text-lime-400">
        {valor} <span className="text-base font-medium text-zinc-400">kcal/dia</span>
      </p>
      <p className="mt-2 text-sm text-zinc-500">{texto}</p>
    </div>
  );
}

export default function Perfil() {
  const { user, carregando: autenticando } = useAuth();
  const [form, setForm] = useState(vazio);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [salvo, setSalvo] = useState(false);
  const [erro, setErro] = useState("");

  const alterar = (campo) => (valor) => {
    setForm((f) => ({ ...f, [campo]: valor }));
    setSalvo(false);
  };
  const aoDigitar = (campo) => (e) => alterar(campo)(e.target.value);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("perfis")
      .select("*")
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) {
          setErro("Não foi possível carregar sua ficha. Confira se a tabela foi criada no Supabase.");
        } else if (data) {
          setForm({
            nome: data.nome ?? "",
            sexo: data.sexo ?? "",
            data_nascimento: data.data_nascimento ?? "",
            peso_kg: data.peso_kg ?? "",
            altura_cm: data.altura_cm ?? "",
            nivel_atividade: data.nivel_atividade ?? "moderado",
            objetivo: data.objetivo ?? "manter",
          });
        } else {
          setForm((f) => ({ ...f, nome: user.user_metadata?.nome ?? "" }));
        }
        setCarregando(false);
      });
  }, [user]);

  const resultado = useMemo(() => {
    const idade = calcularIdade(form.data_nascimento);
    const peso = Number(form.peso_kg);
    const altura = Number(form.altura_cm);
    const valido =
      form.sexo && idade !== null && idade >= 14 && idade <= 100 &&
      peso >= 20 && peso <= 400 && altura >= 80 && altura <= 250;
    if (!valido) return null;

    const tmb = calcularTMB({ sexo: form.sexo, peso, altura, idade });
    const gasto = calcularGastoDiario(tmb, form.nivel_atividade);
    const meta = calcularMeta(gasto, form.objetivo, tmb);
    return { idade, peso, tmb, gasto, meta };
  }, [form]);

  async function salvar(e) {
    e.preventDefault();
    setErro("");
    setSalvo(false);

    if (!resultado) {
      return setErro(
        "Preencha sexo, data de nascimento (entre 14 e 100 anos), peso (20 a 400 kg) e altura (80 a 250 cm)."
      );
    }

    setSalvando(true);
    const { error } = await supabase.from("perfis").upsert({
      user_id: user.id,
      nome: form.nome.trim() || null,
      sexo: form.sexo,
      data_nascimento: form.data_nascimento,
      peso_kg: Number(form.peso_kg),
      altura_cm: Number(form.altura_cm),
      nivel_atividade: form.nivel_atividade,
      objetivo: form.objetivo,
      atualizado_em: new Date().toISOString(),
    });
    setSalvando(false);

    if (error) return setErro("Não foi possível salvar. Tente novamente.");
    setSalvo(true);
  }

  if (autenticando) return <p className="p-10 text-center text-zinc-400">Carregando...</p>;
  if (!user) return <Navigate to="/login" replace />;

  const hojeIso = new Date().toISOString().slice(0, 10);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">
        Minha <span className="text-lime-400">ficha</span>
      </h1>
      <p className="mb-8 mt-2 text-zinc-400">
        Com esses dados o {` `}app calcula sua taxa metabólica e quantas calorias você queima.
      </p>

      {carregando ? (
        <p className="text-zinc-500">Carregando sua ficha...</p>
      ) : (
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* FORMULÁRIO */}
          <form onSubmit={salvar} className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <Campo
              id="nome" label="Nome" icone={User} type="text" autoComplete="name"
              placeholder="Como quer ser chamado" value={form.nome} onChange={aoDigitar("nome")}
            />

            <Opcoes
              rotulo="Sexo biológico (usado na fórmula)" valor={form.sexo} onChange={alterar("sexo")}
              opcoes={[{ id: "masculino", nome: "Masculino" }, { id: "feminino", nome: "Feminino" }]}
            />

            <div>
              <Campo
                id="nascimento" label="Data de nascimento" icone={CalendarDays} type="date"
                max={hojeIso} value={form.data_nascimento} onChange={aoDigitar("data_nascimento")}
              />
              {resultado && <p className="mt-1 text-xs text-zinc-500">Idade: {resultado.idade} anos</p>}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Campo
                id="peso" label="Peso" icone={Scale} type="number" step="0.1" min="20" max="400"
                placeholder="Ex.: 75.5" value={form.peso_kg} onChange={aoDigitar("peso_kg")}
                direita={<span className="text-sm text-zinc-500">kg</span>}
              />
              <Campo
                id="altura" label="Altura" icone={Ruler} type="number" step="0.5" min="80" max="250"
                placeholder="Ex.: 175" value={form.altura_cm} onChange={aoDigitar("altura_cm")}
                direita={<span className="text-sm text-zinc-500">cm</span>}
              />
            </div>

            <div>
              <label htmlFor="nivel" className="mb-1.5 block text-sm font-medium text-zinc-300">
                Nível de atividade
              </label>
              <select
                id="nivel" value={form.nivel_atividade} onChange={aoDigitar("nivel_atividade")}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-3 text-white outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30"
              >
                {NIVEIS.map((n) => (
                  <option key={n.id} value={n.id}>{n.nome}: {n.desc}</option>
                ))}
              </select>
            </div>

            <Opcoes
              rotulo="Objetivo" valor={form.objetivo} onChange={alterar("objetivo")} opcoes={OBJETIVOS}
            />

            {erro && (
              <p role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                {erro}
              </p>
            )}
            {salvo && (
              <p role="status" className="rounded-lg border border-lime-400/30 bg-lime-400/10 px-3 py-2 text-sm text-lime-400">
                Ficha salva!
              </p>
            )}

            <button
              type="submit" disabled={salvando}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 py-3 font-bold text-zinc-950 transition hover:bg-lime-300 disabled:opacity-60"
            >
              {salvando && <Loader2 className="size-5 animate-spin" />}
              {salvando ? "Salvando..." : "Salvar ficha"}
            </button>
          </form>

          {/* RESULTADOS */}
          <section className="space-y-4 lg:sticky lg:top-24">
            {resultado ? (
              <>
                <Metrica
                  icone={Flame} titulo="Taxa metabólica basal (TMB)" valor={resultado.tmb}
                  texto="Calorias que seu corpo gasta em repouso, só para manter as funções vitais."
                />
                <Metrica
                  icone={Activity} titulo="Gasto diário total" valor={resultado.gasto}
                  texto="Sua TMB ajustada pelo nível de atividade. Já considera seus treinos habituais."
                />
                <Metrica
                  icone={Target} titulo="Meta diária de calorias" valor={resultado.meta}
                  texto="Gasto diário ajustado ao seu objetivo. Nunca fica abaixo da sua TMB."
                />

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                  <p className="text-sm font-semibold">Quanto você queima em uma sessão (estimativa)</p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                    {[
                      ["Caminhada, 30 min", kcalPorMET(metDoCardio("Caminhada"), resultado.peso, 30)],
                      ["Corrida, 30 min", kcalPorMET(metDoCardio("Corrida contínua"), resultado.peso, 30)],
                      ["Musculação, 45 min", kcalPorMET(MET_FORCA, resultado.peso, 45)],
                    ].map(([nome, kcal]) => (
                      <li key={nome} className="flex justify-between">
                        <span>{nome}</span>
                        <span className="font-mono text-lime-400">~{kcal} kcal</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-700 p-8 text-center text-zinc-400">
                Preencha sexo, nascimento, peso e altura para ver sua taxa metabólica e sua meta de calorias.
              </div>
            )}

            <p className="text-xs text-zinc-600">
              São estimativas baseadas em fórmulas padrão (Mifflin-St Jeor e tabela MET) e não substituem
              a avaliação de um médico ou nutricionista.
            </p>
          </section>
        </div>
      )}
    </main>
  );
}