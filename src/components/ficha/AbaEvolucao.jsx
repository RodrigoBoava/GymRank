import { useEffect, useMemo, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Dumbbell, Trophy } from "lucide-react";
import { supabase } from "../../lib/supabase.js";
import { formatarData } from "../../lib/datas.js";
import { formatarKg } from "../../lib/cargas.js";
import { melhoresMarcas, resumirSessoes } from "../../lib/recordes.js";
import { nomeDoGrupo } from "../../lib/catalogo";

const METRICAS = [
  { id: "cargaMax", nome: "Carga máxima", cor: "#ff6a13", unidade: "kg" },
  { id: "e1rm", nome: "1RM estimado", cor: "#4aa3ff", unidade: "kg" },
  { id: "volume", nome: "Volume", cor: "#34d399", unidade: "kg" },
];
const ROTULO_RECORDE = { carga: "Recorde de carga", e1rm: "Novo 1RM estimado", repeticoes: "Recorde de repetições" };

function Cartao({ titulo, valor, detalhe, cor }) {
  return (
    <div className="cartao p-4">
      <p className="text-xs text-zinc-400">{titulo}</p>
      <p className={`font-display text-3xl font-extrabold ${cor}`}>{valor}</p>
      {detalhe && <p className="text-xs text-zinc-500">{detalhe}</p>}
    </div>
  );
}

export default function AbaEvolucao() {
  const [lista, setLista] = useState(null);
  const [escolhido, setEscolhido] = useState(null);
  const [registros, setRegistros] = useState(null);
  const [recordes, setRecordes] = useState([]);
  const [lado, setLado] = useState("ambos");
  const [metrica, setMetrica] = useState("cargaMax");
  const [erro, setErro] = useState("");

  useEffect(() => {
    supabase.from("resumo_exercicios").select("*").order("ultima", { ascending: false }).then(({ data, error }) => {
      if (error) { setErro("Não foi possível carregar seu histórico."); setLista([]); return; }
      setLista(data ?? []);
      if (data?.length) setEscolhido(data[0].exercicio);
    });
  }, []);

  useEffect(() => {
    if (!escolhido) return;
    let ativo = true;
    setRegistros(null);
    Promise.all([
      supabase.from("registros_carga").select("*").eq("exercicio", escolhido).order("data").limit(2000),
      supabase.from("recordes").select("*").eq("exercicio", escolhido).order("data", { ascending: false }).limit(20),
    ]).then(([r, rec]) => {
      if (!ativo) return;
      setRegistros(r.data ?? []);
      setRecordes(rec.data ?? []);
      const lados = new Set((r.data ?? []).map((x) => x.lado));
      setLado(lados.has("ambos") ? "ambos" : [...lados][0] ?? "ambos");
    });
    return () => { ativo = false; };
  }, [escolhido]);

  const lados = useMemo(() => [...new Set((registros ?? []).map((r) => r.lado))], [registros]);
  const filtrados = useMemo(() => (registros ?? []).filter((r) => r.lado === lado), [registros, lado]);
  const sessoes = useMemo(() => resumirSessoes(filtrados), [filtrados]);
  const marcas = useMemo(() => melhoresMarcas(filtrados), [filtrados]);
  const m = METRICAS.find((x) => x.id === metrica);
  const dadosGrafico = sessoes.map((s) => ({ data: formatarData(s.data), valor: s[metrica] }));
  const ehCardio = filtrados.length > 0 && filtrados.every((r) => r.tipo_carga === "cardio");

  if (lista === null) return <p className="py-10 text-center text-zinc-400">Carregando…</p>;

  if (lista.length === 0) {
    return (
      <div className="cartao p-8 text-center">
        <Dumbbell className="mx-auto size-12 text-brand-400" />
        <p className="mt-3 font-semibold">{erro || "Sua evolução aparece aqui"}</p>
        <p className="mt-1 text-sm text-zinc-400">Registre as cargas dos seus treinos na aba Registrar e acompanhe gráficos e recordes de cada exercício.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide">Evolução</h2>

      <label className="mt-4 block text-xs font-medium text-zinc-400" htmlFor="exercicio-evolucao">Exercício</label>
      <select id="exercicio-evolucao" value={escolhido ?? ""} onChange={(e) => setEscolhido(e.target.value)}
        className="mt-1 min-h-12 w-full rounded-xl border border-white/10 bg-ink-900 px-3 text-base text-white outline-none focus:border-brand-500">
        {lista.map((x) => (
          <option key={x.exercicio} value={x.exercicio}>{x.exercicio} ({nomeDoGrupo(x.grupo)} · {x.sessoes} treino{x.sessoes === 1 ? "" : "s"})</option>
        ))}
      </select>

      {lados.length > 1 && (
        <div className="mt-3 flex gap-2">
          {lados.map((l) => (
            <button key={l} onClick={() => setLado(l)} aria-pressed={l === lado}
              className={`min-h-10 rounded-xl border px-4 text-sm font-bold capitalize ${l === lado ? "border-brand-500 bg-brand-500 text-white" : "border-white/10 bg-ink-900 text-zinc-300"}`}>
              {l === "ambos" ? "Ambos" : l}
            </button>
          ))}
        </div>
      )}

      {!registros ? (
        <p className="py-10 text-center text-zinc-400">Carregando…</p>
      ) : ehCardio ? (
        <p className="cartao mt-6 p-6 text-center text-sm text-zinc-400">Exercícios de cardio registram só o tempo. Gráficos de carga não se aplicam.</p>
      ) : (
        <>
          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <Cartao titulo="Maior carga" cor="text-brand-500" valor={formatarKg(marcas.cargaMax?.valor)}
              detalhe={marcas.cargaMax ? `${marcas.cargaMax.reps} reps · ${formatarData(marcas.cargaMax.data)}` : "Só peso corporal"} />
            <Cartao titulo="Melhor 1RM estimado" cor="text-azul-400" valor={formatarKg(marcas.e1rm?.valor)}
              detalhe={marcas.e1rm ? `${marcas.e1rm.reps}×${formatarKg(marcas.e1rm.carga)}` : "Precisa de séries até 12 reps"} />
            <Cartao titulo="Mais repetições" cor="text-ok-400" valor={marcas.maisReps ? `${marcas.maisReps.reps} reps` : "—"}
              detalhe={marcas.maisReps ? `com ${formatarKg(marcas.maisReps.carga)}` : ""} />
            <Cartao titulo="Treinos registrados" cor="text-white" valor={sessoes.length}
              detalhe={sessoes.length ? `desde ${formatarData(sessoes[0].data)}` : ""} />
          </div>
          <p className="mt-2 text-xs text-zinc-500">Os três recordes são independentes: a maior carga nem sempre é o seu melhor desempenho. O 1RM é uma estimativa (fórmula de Epley), não um teste real.</p>

          <div className="cartao mt-5 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {METRICAS.map((x) => (
                <button key={x.id} onClick={() => setMetrica(x.id)} aria-pressed={x.id === metrica}
                  className={`min-h-9 rounded-full border px-4 text-xs font-bold ${x.id === metrica ? "border-brand-500 bg-brand-500 text-white" : "border-white/10 text-zinc-300"}`}>
                  {x.nome}
                </button>
              ))}
            </div>
            {dadosGrafico.length < 2 ? (
              <p className="py-10 text-center text-sm text-zinc-400">Registre este exercício em mais um dia para ver o gráfico de evolução.</p>
            ) : (
              <div className="h-64" role="img" aria-label={`Gráfico de ${m.nome} por data`}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dadosGrafico} margin={{ top: 8, right: 12, bottom: 0, left: -12 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis dataKey="data" stroke="#7a859e" fontSize={11} tickLine={false} />
                    <YAxis stroke="#7a859e" fontSize={11} tickLine={false} axisLine={false} domain={["auto", "auto"]} />
                    <Tooltip contentStyle={{ background: "#11151e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fff" }}
                      formatter={(v) => [`${v} ${m.unidade}`, m.nome]} />
                    <Line type="monotone" dataKey="valor" stroke={m.cor} strokeWidth={3} dot={{ r: 4, fill: m.cor }} activeDot={{ r: 6 }} connectNulls />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          {marcas.repsPorCarga.length > 0 && (
            <div className="cartao mt-5 p-4">
              <p className="mb-2 text-sm font-bold">Melhores repetições por carga</p>
              <ul className="divide-y divide-white/5 text-sm">
                {marcas.repsPorCarga.map((x) => (
                  <li key={x.carga} className="flex justify-between py-2">
                    <span className="text-zinc-300">{x.carga > 0 ? formatarKg(x.carga) : "Peso corporal"}</span>
                    <span><strong>{x.reps}</strong> reps <span className="text-xs text-zinc-500">({formatarData(x.data)})</span></span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recordes.length > 0 && (
            <div className="cartao mt-5 p-4">
              <p className="mb-2 flex items-center gap-2 text-sm font-bold"><Trophy className="size-4 text-brand-400" /> Recordes batidos</p>
              <ul className="space-y-2 text-sm">
                {recordes.map((r) => (
                  <li key={r.id} className="flex flex-wrap justify-between gap-1">
                    <span className="text-zinc-300">
                      {formatarData(r.data)} · {ROTULO_RECORDE[r.tipo]}
                      {r.tipo === "repeticoes" ? ` com ${formatarKg(r.carga_ref_kg)}` : ""}
                    </span>
                    <span className="font-bold text-brand-400">
                      {r.tipo === "repeticoes" ? `${r.valor} reps` : formatarKg(r.valor)}
                      {r.anterior != null && <span className="ml-1 text-xs font-normal text-zinc-500">(antes {r.tipo === "repeticoes" ? `${r.anterior} reps` : formatarKg(r.anterior)})</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="cartao mt-5 p-4">
            <p className="mb-2 text-sm font-bold">Últimos treinos</p>
            <ul className="divide-y divide-white/5 text-sm">
              {[...sessoes].reverse().slice(0, 8).map((s, i, arr) => {
                const anterior = arr[i + 1];
                const delta = anterior ? s.cargaMax - anterior.cargaMax : null;
                return (
                  <li key={s.data} className="flex flex-wrap items-center justify-between gap-2 py-2">
                    <span className="text-zinc-300">{formatarData(s.data)} · {s.series} série{s.series === 1 ? "" : "s"} · {s.repsTotal} reps</span>
                    <span className="font-semibold">
                      {s.cargaMax > 0 ? formatarKg(s.cargaMax) : "Peso corporal"}
                      {delta != null && delta !== 0 && (
                        <span className={`ml-2 text-xs ${delta > 0 ? "text-ok-400" : "text-red-300"}`}>{delta > 0 ? "▲" : "▼"} {formatarKg(Math.abs(delta))}</span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
