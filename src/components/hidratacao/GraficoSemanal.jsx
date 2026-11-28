import { Bar, CartesianGrid, Cell, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { fromISO } from "../../lib/datas.js";
import { formatarMl } from "../../lib/hidratacao.js";

const diaCurto = (iso) => fromISO(iso).toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");

function Dica({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-xl border border-white/10 bg-ink-850 px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold capitalize text-white">{d.rotuloLongo}</p>
      <p className="mt-1 text-azul-300">Consumo: {formatarMl(d.total)}</p>
      {d.meta_ml != null && <p className="text-zinc-400">Meta: {formatarMl(d.meta_ml)}</p>}
      {d.atingiu && <p className="mt-1 font-semibold text-ok-400">Meta atingida</p>}
    </div>
  );
}

// Barras = consumo de cada dia. Linha tracejada = meta daquele dia (pode mudar ao longo da semana).
export default function GraficoSemanal({ dias, hoje }) {
  const dados = dias.map((d) => ({
    ...d,
    rotulo: d.data === hoje ? "hoje" : diaCurto(d.data),
    rotuloLongo: fromISO(d.data).toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "2-digit" }),
    litros: d.total / 1000,
    metaL: d.meta_ml != null ? d.meta_ml / 1000 : null,
  }));

  return (
    <div className="h-52 w-full" role="img" aria-label="Gráfico do consumo de água nos últimos 7 dias comparado com a meta">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={dados} margin={{ top: 8, right: 8, bottom: 0, left: -18 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis dataKey="rotulo" stroke="#7a859e" fontSize={11} tickLine={false} axisLine={false} />
          <YAxis stroke="#7a859e" fontSize={11} tickLine={false} axisLine={false} unit=" L" allowDecimals />
          <Tooltip content={<Dica />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
          <Bar dataKey="litros" radius={[8, 8, 3, 3]} maxBarSize={34} animationDuration={700}>
            {dados.map((d) => (
              <Cell key={d.data} fill={d.atingiu ? "#34d399" : d.data === hoje ? "#4aa3ff" : "#1d84f5"} fillOpacity={d.data === hoje || d.atingiu ? 1 : 0.7} />
            ))}
          </Bar>
          <Line dataKey="metaL" type="stepAfter" stroke="#ff8a3d" strokeWidth={2} strokeDasharray="5 5" dot={false} activeDot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}