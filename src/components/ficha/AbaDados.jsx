import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Loader2, Scale, UserRound } from "lucide-react";
import Stepper from "../Stepper";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../Toast";
import { supabase } from "../../lib/supabase.js";
import { formatarData, hojeISO } from "../../lib/datas.js";
import { num } from "../../lib/cargas.js";

export default function AbaDados() {
  const { user, perfil, recarregarPerfil } = useAuth();
  const { avisar } = useToast();
  const [pesos, setPesos] = useState(null);
  const [valor, setValor] = useState("");
  const [data, setData] = useState(hojeISO());
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    supabase.from("peso_corporal").select("data,peso_kg").order("data").then(({ data: linhas, error }) => {
      if (error) avisar("Não foi possível carregar seu histórico de peso.", "erro");
      setPesos(error ? [] : (linhas ?? []).map((l) => ({ ...l, peso_kg: Number(l.peso_kg) })));
    });
  }, [avisar]);

  async function salvar(e) {
    e.preventDefault();
    const peso = num(valor);
    if (!(peso >= 20 && peso <= 400)) return avisar("Informe um peso entre 20 e 400 kg.", "erro");
    setSalvando(true);
    const { error } = await supabase.from("peso_corporal").upsert({ user_id: user.id, data, peso_kg: peso }, { onConflict: "user_id,data" });
    setSalvando(false);
    if (error) return avisar("Não foi possível salvar o peso.", "erro");
    setPesos((a) => [...(a ?? []).filter((p) => p.data !== data), { data, peso_kg: peso }].sort((x, y) => x.data.localeCompare(y.data)));
    setValor("");
    avisar("Peso registrado.");
    recarregarPerfil?.();
  }

  const ultimo = pesos?.[pesos.length - 1];
  const primeiro = pesos?.[0];
  const variacao = pesos && pesos.length > 1 ? Math.round((ultimo.peso_kg - primeiro.peso_kg) * 10) / 10 : null;

  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide">Dados e peso</h2>

      <div className="cartao mt-5 flex items-center gap-4 p-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-azul-500/15 text-azul-300"><UserRound className="size-6" /></span>
        <div className="min-w-0 flex-1">
          <p className="font-semibold">Ficha pessoal</p>
          <p className="text-sm text-zinc-400">
            {perfil ? `${perfil.peso_kg ?? "—"} kg · ${perfil.altura_cm ?? "—"} cm` : "Preencha seus dados para calcular metas e gasto calórico."}
          </p>
        </div>
        <Link to="/perfil" className="btn-ghost btn-sm shrink-0">Editar</Link>
      </div>

      <form onSubmit={salvar} className="cartao mt-5 p-4">
        <p className="mb-3 flex items-center gap-2 text-sm font-bold"><Scale className="size-4 text-brand-400" /> Registrar peso corporal</p>
        <div className="grid grid-cols-2 gap-3">
          <Stepper id="peso-novo" rotulo="Peso (kg)" valor={valor} onChange={setValor} passo={0.1} min={0} max={400} placeholder={ultimo ? String(ultimo.peso_kg).replace(".", ",") : "0"} />
          <label className="flex flex-col gap-1 text-xs font-medium text-zinc-400">
            Data
            <input type="date" value={data} max={hojeISO()} onChange={(e) => e.target.value && setData(e.target.value)}
              className="min-h-12 rounded-xl border border-white/10 bg-ink-900 px-3 text-base text-white outline-none focus:border-brand-500" />
          </label>
        </div>
        <button type="submit" disabled={salvando} className="btn-primary mt-4 w-full">
          {salvando && <Loader2 className="size-5 animate-spin" />} Salvar peso
        </button>
        <p className="mt-2 text-xs text-zinc-500">O peso mais recente atualiza automaticamente a sua ficha pessoal.</p>
      </form>

      {pesos === null ? (
        <p className="py-10 text-center text-zinc-400">Carregando…</p>
      ) : pesos.length === 0 ? (
        <p className="cartao mt-5 p-6 text-center text-sm text-zinc-400">Nenhum peso registrado ainda.</p>
      ) : (
        <div className="cartao mt-5 p-4">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-xs text-zinc-400">Peso atual</p>
              <p className="font-display text-4xl font-extrabold text-brand-500">{String(ultimo.peso_kg).replace(".", ",")} kg</p>
            </div>
            {variacao != null && (
              <p className="text-right text-sm text-zinc-400">
                Desde {formatarData(primeiro.data)}
                <span className={`block font-bold ${variacao === 0 ? "text-zinc-300" : variacao < 0 ? "text-azul-300" : "text-brand-400"}`}>
                  {variacao > 0 ? "+" : ""}{String(variacao).replace(".", ",")} kg
                </span>
              </p>
            )}
          </div>
          {pesos.length >= 2 && (
            <div className="h-52" role="img" aria-label="Gráfico de peso corporal">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={pesos.map((p) => ({ data: formatarData(p.data), peso: p.peso_kg }))} margin={{ top: 8, right: 12, bottom: 0, left: -12 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                  <XAxis dataKey="data" stroke="#7a859e" fontSize={11} tickLine={false} />
                  <YAxis stroke="#7a859e" fontSize={11} tickLine={false} axisLine={false} domain={["dataMin - 1", "dataMax + 1"]} />
                  <Tooltip contentStyle={{ background: "#11151e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fff" }} formatter={(v) => [`${v} kg`, "Peso"]} />
                  <Line type="monotone" dataKey="peso" stroke="#4aa3ff" strokeWidth={3} dot={{ r: 4, fill: "#4aa3ff" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
