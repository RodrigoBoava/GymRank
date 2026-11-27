import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Folha from "./Folha";
import { formatarKg } from "../lib/cargas.js";

const ROTULO_LADO = { esquerdo: " (lado esquerdo)", direito: " (lado direito)", ambos: "" };

function Linha({ ev }) {
  if (ev.tipo === "carga") {
    return (
      <>
        <p className="text-sm text-zinc-400">Recorde de carga{ROTULO_LADO[ev.lado]}</p>
        <p className="font-display text-4xl font-extrabold text-brand-500">{formatarKg(ev.valor)}</p>
        {ev.anterior != null && <p className="text-xs text-zinc-500">Antes: {formatarKg(ev.anterior)}</p>}
      </>
    );
  }
  if (ev.tipo === "e1rm") {
    return (
      <>
        <p className="text-sm text-zinc-400">Novo 1RM estimado{ROTULO_LADO[ev.lado]}</p>
        <p className="font-display text-4xl font-extrabold text-azul-400">{formatarKg(ev.valor)}</p>
        <p className="text-xs text-zinc-500">Antes: {formatarKg(ev.anterior)} · estimativa, não é um teste real de 1 repetição</p>
      </>
    );
  }
  return (
    <>
      <p className="text-sm text-zinc-400">Recorde de repetições com {formatarKg(ev.carga_ref_kg)}{ROTULO_LADO[ev.lado]}</p>
      <p className="font-display text-4xl font-extrabold text-ok-400">{ev.valor} reps</p>
      <p className="text-xs text-zinc-500">Antes: {ev.anterior} reps</p>
    </>
  );
}

export default function CelebracaoRecorde({ exercicio, eventos, onFechar }) {
  return (
    <Folha aberta onFechar={onFechar} titulo="Novo recorde!" largura="max-w-md">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 12 }}
          className="mx-auto grid size-20 place-items-center rounded-full bg-brand-500/15 text-brand-400 ring-2 ring-brand-500/40"
        >
          <Trophy className="size-10" />
        </motion.div>
        <p className="mt-4 font-semibold">{exercicio}</p>
        <div className="mt-4 space-y-4">
          {eventos.map((ev, i) => (
            <motion.div
              key={`${ev.tipo}-${ev.lado}-${ev.carga_ref_kg}`}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i + 0.2 }}
              className="cartao p-4"
            >
              <Linha ev={ev} />
            </motion.div>
          ))}
        </div>
        <button onClick={onFechar} className="btn-primary mt-6 w-full">Continuar</button>
      </div>
    </Folha>
  );
}
