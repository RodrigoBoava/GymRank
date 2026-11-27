import { useCallback, useEffect, useMemo, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Check, ChevronLeft, ChevronRight, Flame, Moon, X } from "lucide-react";
import { motion } from "framer-motion";
import Folha from "../Folha";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../Toast";
import { supabase } from "../../lib/supabase.js";
import { addDias, formatarData, formatarDataLonga, hojeISO, nomeDoMes } from "../../lib/datas.js";
import { estatisticasFrequencia, gradeDoMes } from "../../lib/frequencia.js";

const COR_ANEL = { verde: "#34d399", azul: "#4aa3ff", laranja: "#ff6a13" };
const ESTILO_DIA = {
  treinou: "border-ok-500/50 bg-ok-500/20 text-ok-400",
  faltou: "border-red-500/40 bg-red-500/15 text-red-300",
  descanso: "border-azul-400/40 bg-azul-500/15 text-azul-300",
};
const SEMANA = ["D", "S", "T", "Q", "Q", "S", "S"];
const maiuscula = (t) => t.charAt(0).toUpperCase() + t.slice(1);

function Anel({ pct, nivel }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const valor = pct ?? 0;
  return (
    <div className="relative size-32 shrink-0">
      <svg viewBox="0 0 100 100" className="size-full -rotate-90" role="img" aria-label={`Consistência: ${pct ?? 0}%`}>
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" />
        <motion.circle cx="50" cy="50" r={r} fill="none" stroke={COR_ANEL[nivel.cor]} strokeWidth="9" strokeLinecap="round"
          strokeDasharray={c} initial={{ strokeDashoffset: c }} animate={{ strokeDashoffset: c * (1 - valor / 100) }} transition={{ duration: 0.8 }} />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-display text-3xl font-extrabold leading-none">{pct == null ? "—" : `${pct}%`}</p>
          <p className="text-[10px] text-zinc-400">últimas 4 semanas</p>
        </div>
      </div>
    </div>
  );
}

export default function AbaFrequencia({ f, irParaTreinos }) {
  const { user } = useAuth();
  const { avisar } = useToast();
  const hoje = hojeISO();
  const [registros, setRegistros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [mes, setMes] = useState(() => ({ ano: Number(hoje.slice(0, 4)), mes0: Number(hoje.slice(5, 7)) - 1 }));
  const [diaAberto, setDiaAberto] = useState(null);

  useEffect(() => {
    supabase.from("frequencia").select("data,status,ficha_id").gte("data", addDias(hoje, -730)).order("data").then(({ data, error }) => {
      if (error) avisar("Não foi possível carregar sua frequência.", "erro");
      else setRegistros(data ?? []);
      setCarregando(false);
    });
  }, [hoje, avisar]);

  const statusPorDia = useMemo(() => new Map(registros.map((r) => [r.data, r.status])), [registros]);
  const chaveMes = `${mes.ano}-${String(mes.mes0 + 1).padStart(2, "0")}`;
  const stats = useMemo(
    () => estatisticasFrequencia({ registros, diasPlanejados: f.diasPlanejados, hoje, mes: chaveMes }),
    [registros, f.diasPlanejados, hoje, chaveMes]
  );
  const grade = useMemo(() => gradeDoMes(mes.ano, mes.mes0), [mes]);
  const fecharDia = useCallback(() => setDiaAberto(null), []);

  const mudarMes = (delta) =>
    setMes(({ ano, mes0 }) => { const d = new Date(ano, mes0 + delta, 1); return { ano: d.getFullYear(), mes0: d.getMonth() }; });

  async function marcar(iso, status) {
    try {
      if (status === null) {
        const { error } = await supabase.from("frequencia").delete().eq("data", iso);
        if (error) throw error;
        setRegistros((a) => a.filter((r) => r.data !== iso));
      } else {
        const { error } = await supabase.from("frequencia").upsert({ user_id: user.id, data: iso, status }, { onConflict: "user_id,data" });
        if (error) throw error;
        setRegistros((a) => [...a.filter((r) => r.data !== iso), { data: iso, status }].sort((x, y) => x.data.localeCompare(y.data)));
        avisar(status === "treinou" ? "Treino marcado. Bom trabalho!" : status === "faltou" ? "Falta registrada." : "Descanso marcado.", status === "faltou" ? "info" : "ok");
      }
      setDiaAberto(null);
    } catch {
      avisar("Não foi possível salvar. Tente novamente.", "erro");
    }
  }

  if (carregando) return <p className="py-10 text-center text-zinc-400">Carregando…</p>;

  const graficoSemanas = stats.semanas.map((s) => ({ nome: formatarData(s.inicio), treinos: s.treinos }));
  const statusAberto = diaAberto ? statusPorDia.get(diaAberto) : null;
  const futuro = diaAberto && diaAberto > hoje;

  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide">Frequência</h2>

      {f.diasPlanejados.length === 0 && (
        <p className="mt-3 rounded-xl border border-azul-400/30 bg-azul-500/10 p-3 text-sm text-azul-300">
          Defina os dias da semana de cada ficha em <button onClick={irParaTreinos} className="font-bold underline">Treinos</button> para calcular sua porcentagem de frequência.
        </p>
      )}

      <div className="cartao mt-5 flex items-center gap-5 p-5">
        <Anel pct={stats.percentual28} nivel={stats.nivel} />
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">Consistência</p>
          <p className="font-display text-2xl font-extrabold uppercase">{stats.nivel.rotulo}</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-300">
            <Flame className="size-4 text-brand-400" /> {stats.sequencia} dia{stats.sequencia === 1 ? "" : "s"} treinando em sequência
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          ["Treinos no mês", stats.treinosMes, "text-ok-400"],
          ["Frequência do mês", stats.percentualMes == null ? "—" : `${stats.percentualMes}%`, "text-brand-500"],
          ["Esta semana", stats.planejadosSemana ? `${stats.treinosSemana}/${stats.planejadosSemana}` : stats.treinosSemana, "text-azul-400"],
          ["Faltas no mês", stats.faltasMes, "text-red-300"],
        ].map(([titulo, valor, cor]) => (
          <div key={titulo} className="cartao p-4">
            <p className="text-xs text-zinc-400">{titulo}</p>
            <p className={`font-display text-3xl font-extrabold ${cor}`}>{valor}</p>
          </div>
        ))}
      </div>
      {stats.percentualSemana != null && <p className="mt-2 text-xs text-zinc-500">Frequência desta semana: {stats.percentualSemana}% dos dias planejados.</p>}

      <div className="cartao mt-5 p-4">
        <div className="mb-3 flex items-center justify-between">
          <button onClick={() => mudarMes(-1)} aria-label="Mês anterior" className="grid size-10 place-items-center rounded-xl hover:bg-white/10"><ChevronLeft className="size-5" /></button>
          <p className="font-display text-xl font-extrabold uppercase tracking-wide">{maiuscula(nomeDoMes(mes.ano, mes.mes0))}</p>
          <button onClick={() => mudarMes(1)} aria-label="Próximo mês" className="grid size-10 place-items-center rounded-xl hover:bg-white/10"><ChevronRight className="size-5" /></button>
        </div>
        <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] font-semibold text-zinc-500">
          {SEMANA.map((d, i) => <span key={i}>{d}</span>)}
        </div>
        <div className="mt-1.5 grid grid-cols-7 gap-1.5">
          {grade.map((iso, i) => {
            if (!iso) return <span key={`v${i}`} />;
            const s = statusPorDia.get(iso);
            const ehHoje = iso === hoje;
            return (
              <button key={iso} onClick={() => setDiaAberto(iso)} aria-label={`${formatarDataLonga(iso)}${s ? `: ${s}` : ""}`}
                className={`aspect-square rounded-xl border text-sm font-bold transition active:scale-95 ${s ? ESTILO_DIA[s] : "border-white/10 bg-white/5 text-zinc-400"} ${iso > hoje && !s ? "opacity-50" : ""} ${ehHoje ? "ring-2 ring-brand-500" : ""}`}>
                {Number(iso.slice(8))}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5"><i className="size-3 rounded bg-ok-500/60" /> Treinou</span>
          <span className="flex items-center gap-1.5"><i className="size-3 rounded bg-red-500/50" /> Faltou</span>
          <span className="flex items-center gap-1.5"><i className="size-3 rounded bg-azul-500/60" /> Descanso</span>
          <span className="flex items-center gap-1.5"><i className="size-3 rounded bg-white/15" /> Sem marcação</span>
        </div>
      </div>

      <div className="cartao mt-5 p-4">
        <p className="mb-2 text-sm font-bold">Treinos por semana (últimas 12)</p>
        <div className="h-40" role="img" aria-label="Treinos por semana">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={graficoSemanas} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
              <XAxis dataKey="nome" stroke="#7a859e" fontSize={10} tickLine={false} interval={1} />
              <Tooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} contentStyle={{ background: "#11151e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fff" }}
                formatter={(v) => [v, "Treinos"]} labelFormatter={(l) => `Semana de ${l}`} />
              <Bar dataKey="treinos" fill="#ff6a13" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {stats.historicoMeses.length > 0 && (
        <div className="cartao mt-5 p-4">
          <p className="mb-2 text-sm font-bold">Histórico dos meses</p>
          <ul className="divide-y divide-white/5 text-sm">
            {stats.historicoMeses.map((m) => {
              const [a, mm] = m.mes.split("-").map(Number);
              return (
                <li key={m.mes} className="flex flex-wrap items-center justify-between gap-2 py-2">
                  <span className="text-zinc-300">{maiuscula(nomeDoMes(a, mm - 1))}</span>
                  <span className="text-zinc-400">
                    <strong className="text-ok-400">{m.treinos}</strong> treinos · {m.faltas} faltas · {m.descansos} descansos
                    {m.percentual != null && <strong className="ml-2 text-brand-400">{m.percentual}%</strong>}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <Folha aberta={!!diaAberto} onFechar={fecharDia} titulo={diaAberto ? maiuscula(formatarDataLonga(diaAberto)) : "Dia"} largura="max-w-md">
        {diaAberto && (
          <div className="space-y-3">
            <p className="text-sm text-zinc-400">Atual: {statusAberto ? { treinou: "treinou", faltou: "faltou", descanso: "descanso" }[statusAberto] : "sem marcação"}</p>
            {!futuro && (
              <button onClick={() => marcar(diaAberto, "treinou")} className="btn-primary w-full"><Check className="size-5" /> Treinei</button>
            )}
            {!futuro && (
              <button onClick={() => marcar(diaAberto, "faltou")} className="btn-ghost w-full text-red-300"><X className="size-5" /> Não fui</button>
            )}
            <button onClick={() => marcar(diaAberto, "descanso")} className="btn-ghost w-full text-azul-300"><Moon className="size-5" /> Dia de descanso</button>
            {statusAberto && <button onClick={() => marcar(diaAberto, null)} className="w-full py-2 text-sm font-semibold text-zinc-400 hover:text-white">Limpar marcação</button>}
          </div>
        )}
      </Folha>
    </div>
  );
}
