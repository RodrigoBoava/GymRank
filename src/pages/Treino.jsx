import { useEffect, useMemo, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { Trash2, Plus, Check } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import SeletorExercicios from "../components/SeletorExercicios";
import { DIAS, GRUPOS } from "../data/exercicios";
import { estimarGastoTreino } from "../lib/calorias";

const DIA_POR_INDICE = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

function Numero({ rotulo, valor, onChange, onBlur, min = 1, max, passo = 1 }) {
  return (
    <label className="flex w-24 flex-col gap-1 text-xs text-zinc-400">
      {rotulo}
      <input
        type="number"
        min={min}
        max={max}
        step={passo}
        value={valor ?? ""}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="rounded-lg border border-white/15 bg-ink-950 px-2 py-1.5 text-sm text-white outline-none focus:border-brand-500"
      />
    </label>
  );
}

export default function Treino() {
  const { user, carregando: autenticando } = useAuth();
  const [dia, setDia] = useState(DIA_POR_INDICE[new Date().getDay()]);
  const [itens, setItens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [pesoKg, setPesoKg] = useState(null);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("treino_itens")
      .select("*")
      .order("criado_em")
      .then(({ data, error }) => {
        if (error) setErro("Não foi possível carregar seu treino. Confira se a tabela foi criada no Supabase.");
        else setItens(data);
        setCarregando(false);
      });

    supabase
      .from("perfis")
      .select("peso_kg")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => setPesoKg(data?.peso_kg ?? null));
  }, [user]);

  const itensDoDia = useMemo(() => itens.filter((i) => i.dia === dia), [itens, dia]);

  const adicionados = useMemo(
    () => new Set(itensDoDia.map((i) => `${i.grupo}|${i.exercicio}`)),
    [itensDoDia]
  );

  const porGrupo = useMemo(() => {
    const mapa = {};
    itensDoDia.forEach((i) => {
      (mapa[i.grupo] ??= []).push(i);
    });
    return Object.entries(mapa);
  }, [itensDoDia]);

  const totalSeries = itensDoDia.reduce((total, i) => total + (i.series ?? 0), 0);
  const gasto = pesoKg ? estimarGastoTreino(itensDoDia, pesoKg) : null;
  const nomeDoGrupo = (id) => GRUPOS.find((g) => g.id === id)?.nome ?? id;

  async function adicionar(grupo, nome) {
    setErro("");
    const cardio = grupo.id === "cardio";
    const novo = {
      dia,
      grupo: grupo.id,
      exercicio: nome,
      ...(cardio ? { duracao_min: 20 } : { series: 3, repeticoes: 10 }),
    };
    const { data, error } = await supabase.from("treino_itens").insert(novo).select().single();
    if (error) {
      setErro(error.code === "23505" ? "Esse exercício já está neste dia." : "Não foi possível adicionar o exercício.");
      return;
    }
    setItens((atual) => [...atual, data]);
  }

  function alterar(id, campo, valor) {
    const numero = valor === "" ? null : Number(valor);
    setItens((atual) => atual.map((i) => (i.id === id ? { ...i, [campo]: numero } : i)));
  }

  async function salvar(id, itemNovo) {
    const item = itemNovo ?? itens.find((i) => i.id === id);
    if (!item) return;
    const { error } = await supabase
      .from("treino_itens")
      .update({
        series: item.series,
        repeticoes: item.repeticoes,
        carga_kg: item.carga_kg,
        carga_unilateral: item.carga_unilateral ?? false,
        carga_por_lado_kg: item.carga_unilateral ? item.carga_por_lado_kg : null,
        duracao_min: item.duracao_min,
      })
      .eq("id", id);
    if (error) setErro("Não foi possível salvar a alteração. Confira os valores digitados.");
    else setErro("");
  }

  // Unilateral: o valor digitado é por lado e a carga total é sempre o dobro (30 -> 60)
  function alterarPorLado(id, valor) {
    const lado = valor === "" ? null : Number(valor);
    setItens((atual) =>
      atual.map((i) => (i.id === id ? { ...i, carga_por_lado_kg: lado, carga_kg: lado === null ? null : lado * 2 } : i))
    );
  }

  function trocarModoCarga(id, unilateral) {
    const item = itens.find((i) => i.id === id);
    if (!item || Boolean(item.carga_unilateral) === unilateral) return;
    const novo = unilateral
      ? {
          ...item,
          carga_unilateral: true,
          carga_por_lado_kg: item.carga_kg == null ? null : item.carga_kg / 2,
        }
      : { ...item, carga_unilateral: false, carga_por_lado_kg: null };
    setItens((atual) => atual.map((i) => (i.id === id ? novo : i)));
    salvar(id, novo);
  }

  async function remover(id) {
    const { error } = await supabase.from("treino_itens").delete().eq("id", id);
    if (error) return setErro("Não foi possível remover o exercício.");
    setItens((atual) => atual.filter((i) => i.id !== id));
  }

  if (autenticando) return <p className="p-10 text-center text-zinc-400">Carregando...</p>;
  if (!user) return <Navigate to="/login" replace />;

  const diaAtual = DIAS.find((d) => d.id === dia);

  return (
    <main className="mx-auto w-full max-w-6xl overflow-x-clip px-4 py-10">
      <h1 className="font-display text-4xl font-extrabold uppercase tracking-wide sm:text-5xl">
        Meu <span className="text-brand-400">treino semanal</span>
      </h1>
      <p className="mt-2 text-zinc-400">
        Escolha o dia, adicione os exercícios e defina séries, repetições e carga.
      </p>

      <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" role="tablist">
        {DIAS.map((d) => {
          const qtd = itens.filter((i) => i.dia === d.id).length;
          const ativo = d.id === dia;
          return (
            <button
              key={d.id}
              role="tab"
              aria-selected={ativo}
              onClick={() => setDia(d.id)}
              className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                ativo
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-white/10 bg-ink-900 text-zinc-300 hover:border-zinc-600"
              }`}
            >
              {d.curto}
              {qtd > 0 && (
                <span
                  className={`rounded-full px-1.5 text-xs ${
                    ativo ? "bg-ink-950 text-brand-400" : "bg-ink-800 text-zinc-300"
                  }`}
                >
                  {qtd}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {erro && (
        <p role="alert" className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
          {erro}
        </p>
      )}

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-2">
        {/* TREINO DO DIA */}
        <section className="min-w-0">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide">{diaAtual.nome}</h2>
          <p className="mt-1 text-sm text-zinc-400">
            {itensDoDia.length} exercício(s) · {totalSeries} série(s)
          </p>

          {itensDoDia.length > 0 &&
            (gasto ? (
              <p className="mt-2 inline-flex items-center gap-2 rounded-lg bg-brand-500/10 px-3 py-1.5 text-sm text-brand-400">
                🔥 Queima estimada: <strong>~{gasto.total} kcal</strong>
              </p>
            ) : (
              <p className="mt-2 text-sm text-zinc-500">
                <Link to="/perfil" className="text-brand-400 hover:underline">Preencha sua ficha</Link>{" "}
                para ver a queima calórica estimada.
              </p>
            ))}

          {carregando ? (
            <p className="mt-6 text-zinc-500">Carregando seu treino...</p>
          ) : itensDoDia.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-white/15 p-8 text-center text-zinc-400">
              Nenhum exercício neste dia ainda. Escolha ao lado e clique em <strong>Adicionar</strong>.
            </div>
          ) : (
            <div className="mt-6 space-y-6">
              {porGrupo.map(([grupoId, lista]) => (
                <div key={grupoId}>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-400">
                    {nomeDoGrupo(grupoId)}
                  </h3>
                  <ul className="space-y-3">
                    {lista.map((item) => {
                      const cardio = item.grupo === "cardio";
                      return (
                        <li key={item.id} className="rounded-xl border border-white/10 bg-ink-900 p-4">
                          <div className="flex items-start justify-between gap-3">
                            <p className="font-semibold">{item.exercicio}</p>
                            <button
                              onClick={() => remover(item.id)}
                              aria-label={`Remover ${item.exercicio}`}
                              className="text-zinc-500 transition hover:text-red-400"
                            >
                              <Trash2 className="size-5" />
                            </button>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-3">
                            {cardio ? (
                              <Numero
                                rotulo="Minutos" max={600} valor={item.duracao_min}
                                onChange={(v) => alterar(item.id, "duracao_min", v)}
                                onBlur={() => salvar(item.id)}
                              />
                            ) : (
                              <>
                                <Numero
                                  rotulo="Séries" max={20} valor={item.series}
                                  onChange={(v) => alterar(item.id, "series", v)}
                                  onBlur={() => salvar(item.id)}
                                />
                                <Numero
                                  rotulo="Repetições" max={200} valor={item.repeticoes}
                                  onChange={(v) => alterar(item.id, "repeticoes", v)}
                                  onBlur={() => salvar(item.id)}
                                />
                                <div className="flex flex-col gap-1 text-xs text-zinc-400">
                                  <span>Carga</span>
                                  <div role="group" aria-label="Tipo de carga" className="flex w-fit rounded-lg border border-white/15 p-0.5">
                                    {[[false, "Carga total"], [true, "Unilateral"]].map(([uni, nomeModo]) => (
                                      <button
                                        key={nomeModo}
                                        type="button"
                                        aria-pressed={Boolean(item.carga_unilateral) === uni}
                                        onClick={() => trocarModoCarga(item.id, uni)}
                                        className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${
                                          Boolean(item.carga_unilateral) === uni
                                            ? "bg-brand-500 text-white"
                                            : "text-zinc-400 hover:text-white"
                                        }`}
                                      >
                                        {nomeModo}
                                      </button>
                                    ))}
                                  </div>
                                  <div className="mt-1 flex flex-wrap items-end gap-3">
                                    {item.carga_unilateral ? (
                                      <>
                                        <Numero
                                          rotulo="Por lado (kg)" min={0} passo={0.5} valor={item.carga_por_lado_kg}
                                          onChange={(v) => alterarPorLado(item.id, v)}
                                          onBlur={() => salvar(item.id)}
                                        />
                                        <p className="pb-1.5 text-sm text-zinc-300">
                                          Carga total:{" "}
                                          <strong className="text-brand-400">
                                            {item.carga_kg == null ? "—" : `${item.carga_kg} kg`}
                                          </strong>
                                        </p>
                                      </>
                                    ) : (
                                      <Numero
                                        rotulo="Total (kg)" min={0} passo={0.5} valor={item.carga_kg}
                                        onChange={(v) => alterar(item.id, "carga_kg", v)}
                                        onBlur={() => salvar(item.id)}
                                      />
                                    )}
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ESCOLHER EXERCÍCIOS */}
        <section className="min-w-0">
          <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-wide">Adicionar exercícios</h2>
          <SeletorExercicios
            renderAcao={(grupo, nome) =>
              adicionados.has(`${grupo.id}|${nome}`) ? (
                <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-400">
                  <Check className="size-4" /> No treino
                </span>
              ) : (
                <button
                  onClick={() => adicionar(grupo, nome)}
                  className="flex shrink-0 items-center gap-1 rounded-lg bg-brand-500 px-2.5 py-1 text-xs font-bold text-white transition hover:bg-brand-400"
                >
                  <Plus className="size-4" /> Adicionar
                </button>
              )
            }
          />
        </section>
      </div>
    </main>
  );
}