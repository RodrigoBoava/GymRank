import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarCheck, ClipboardList, Flame, Trophy } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import { useFichas } from "../hooks/useFichas";
import { diaDaSemanaId, hojeISO, addDias, mesDe, formatarData } from "../lib/datas";
import { estatisticasFrequencia } from "../lib/frequencia";
import { formatarKg } from "../lib/cargas";
import { ToastProvider } from "../components/Toast";
import SecaoHidratacao from "../components/hidratacao/SecaoHidratacao";

const ROTULO_TIPO = { carga: "Maior carga", e1rm: "1RM estimado", repeticoes: "Repetições" };

function Numero({ icone: Icone, rotulo, valor, cor = "text-brand-500" }) {
  return (
    <div className="cartao p-4">
      <p className="flex items-center gap-2 text-sm text-zinc-400"><Icone className="size-4" /> {rotulo}</p>
      <p className={`mt-1 font-display text-4xl font-extrabold ${cor}`}>{valor}</p>
    </div>
  );
}

function ConteudoPainel() {
  const { user } = useAuth();
  const f = useFichas();
  const [freq, setFreq] = useState([]);
  const [recordes, setRecordes] = useState([]);
  const hoje = hojeISO();

  useEffect(() => {
    if (!user) return;
    supabase.from("frequencia").select("data,status").gte("data", addDias(hoje, -400)).order("data")
      .then(({ data }) => setFreq(data ?? []));
    supabase.from("recordes").select("exercicio,tipo,valor,carga_ref_kg,data").order("data", { ascending: false }).order("criado_em", { ascending: false }).limit(4)
      .then(({ data }) => setRecordes(data ?? []));
  }, [user, hoje]);

  const est = useMemo(
    () => estatisticasFrequencia({ registros: freq, diasPlanejados: f.diasPlanejados, hoje, mes: mesDe(hoje) }),
    [freq, f.diasPlanejados, hoje]
  );

  const nome = (user?.user_metadata?.nome ?? "atleta").split(" ")[0];
  const fichasDeHoje = f.fichas.filter((x) => (x.dias_semana ?? []).includes(diaDaSemanaId(hoje)));
  const treinouHoje = freq.some((r) => r.data === hoje && r.status === "treinou");

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl font-extrabold uppercase tracking-wide sm:text-5xl">
        Olá, <span className="text-brand-500">{nome}</span>
      </h1>
      <p className="mt-1 text-zinc-400">{user?.email}</p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <Numero icone={Flame} rotulo="Sequência" valor={`${est.sequencia} d`} />
        <Numero icone={CalendarCheck} rotulo="Treinos no mês" valor={est.treinosMes} cor="text-azul-300" />
        <Numero icone={ClipboardList} rotulo="Na semana" valor={est.planejadosSemana ? `${est.treinosSemana}/${est.planejadosSemana}` : est.treinosSemana} cor="text-ok-400" />
      </div>

      <section className="cartao mt-6 p-5">
        <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide">Treino de hoje</h2>
        {f.carregando ? (
          <p className="mt-3 text-sm text-zinc-500">Carregando…</p>
        ) : fichasDeHoje.length === 0 ? (
          <p className="mt-3 text-zinc-400">
            Nenhuma ficha marcada para hoje. <Link to="/ficha" className="font-semibold text-brand-400 hover:underline">Monte sua ficha</Link>.
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {fichasDeHoje.map((x) => (
              <li key={x.id} className="flex items-center justify-between gap-3 rounded-xl bg-white/5 p-3">
                <span className="font-semibold">{x.nome}</span>
                <Link to={`/ficha?aba=registrar&ficha=${x.id}`} className="btn-primary btn-sm">
                  {treinouHoje ? "Registrar mais" : "Registrar treino"}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <SecaoHidratacao diasPlanejados={f.diasPlanejados} fichasCarregando={f.carregando} />

      <section className="cartao mt-4 p-5">
        <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold uppercase tracking-wide">
          <Trophy className="size-5 text-brand-500" /> Recordes recentes
        </h2>
        {recordes.length === 0 ? (
          <p className="mt-3 text-zinc-400">Seus recordes aparecem aqui assim que você registrar cargas.</p>
        ) : (
          <ul className="mt-3 divide-y divide-white/5">
            {recordes.map((r, i) => (
              <li key={i} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                <span className="min-w-0">
                  <span className="block truncate font-semibold">{r.exercicio}</span>
                  <span className="text-xs text-zinc-500">{ROTULO_TIPO[r.tipo]} · {formatarData(r.data)}</span>
                </span>
                <span className="font-mono font-bold text-brand-400">
                  {r.tipo === "repeticoes" ? `${r.valor} reps` : formatarKg(Number(r.valor))}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default function Painel() {
  return (
    <ToastProvider>
      <ConteudoPainel />
    </ToastProvider>
  );
}