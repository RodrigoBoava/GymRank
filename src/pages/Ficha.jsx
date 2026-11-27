import { Navigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, PenLine, TrendingUp, UserRound } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useFichas } from "../hooks/useFichas";
import { ToastProvider } from "../components/Toast";
import AbaTreinos from "../components/ficha/AbaTreinos";
import AbaRegistrar from "../components/ficha/AbaRegistrar";
import AbaEvolucao from "../components/ficha/AbaEvolucao";
import AbaFrequencia from "../components/ficha/AbaFrequencia";
import AbaDados from "../components/ficha/AbaDados";

const ABAS = [
  { id: "treinos", nome: "Treinos", icone: ClipboardList },
  { id: "registrar", nome: "Registrar", icone: PenLine },
  { id: "evolucao", nome: "Evolução", icone: TrendingUp },
  { id: "frequencia", nome: "Frequência", icone: CalendarCheck },
  { id: "dados", nome: "Dados", icone: UserRound },
];

function Conteudo() {
  const [params, setParams] = useSearchParams();
  const f = useFichas();
  const pedida = params.get("aba");
  const aba = ABAS.some((a) => a.id === pedida) ? pedida : "treinos";

  const irPara = (id, extra = {}) => setParams({ aba: id, ...extra });

  return (
    <main className="mx-auto max-w-4xl px-4 pb-10">
      <div className="pt-8">
        <h1 className="font-display text-4xl font-extrabold uppercase tracking-wide sm:text-5xl">
          Minha <span className="text-brand-500">ficha</span>
        </h1>
        <p className="mt-1 text-zinc-400">Seus treinos, cargas, recordes e frequência em um só lugar.</p>
      </div>

      <nav aria-label="Seções da ficha" className="sticky top-16 z-30 -mx-4 mt-5 border-b border-white/10 bg-ink-950/90 px-4 backdrop-blur-xl">
        <div className="flex gap-1 overflow-x-auto py-2" role="tablist">
          {ABAS.map(({ id, nome, icone: Icone }) => {
            const ativa = id === aba;
            return (
              <button key={id} role="tab" aria-selected={ativa} onClick={() => irPara(id)}
                className={`relative flex min-h-11 shrink-0 items-center gap-2 rounded-xl px-4 text-sm font-bold transition ${ativa ? "text-white" : "text-zinc-400 hover:text-white"}`}>
                {ativa && <motion.span layoutId="aba-ficha" className="absolute inset-0 rounded-xl bg-brand-500/20 ring-1 ring-brand-500/50" />}
                <Icone className="relative size-5" /> <span className="relative">{nome}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {f.erro && <p role="alert" className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">{f.erro}</p>}

      <motion.div key={aba} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="mt-6">
        {f.carregando ? (
          <p className="py-10 text-center text-zinc-400">Carregando…</p>
        ) : (
          <>
            {aba === "treinos" && <AbaTreinos f={f} irParaRegistrar={(id) => irPara("registrar", { ficha: id })} />}
            {aba === "registrar" && <AbaRegistrar f={f} fichaInicialId={params.get("ficha")} irParaTreinos={() => irPara("treinos")} />}
            {aba === "evolucao" && <AbaEvolucao />}
            {aba === "frequencia" && <AbaFrequencia f={f} irParaTreinos={() => irPara("treinos")} />}
            {aba === "dados" && <AbaDados />}
          </>
        )}
      </motion.div>
    </main>
  );
}

export default function Ficha() {
  const { user, carregando } = useAuth();
  if (carregando) return <p className="p-10 text-center text-zinc-400">Carregando...</p>;
  if (!user) return <Navigate to="/login" replace />;
  return (
    <ToastProvider>
      <Conteudo />
    </ToastProvider>
  );
}
