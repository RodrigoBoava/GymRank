import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import DetalheExercicio from "./DetalheExercicio";
import { infoDoExercicio } from "../lib/catalogo";

// Botão "Como fazer": abre as instruções do exercício (usa o mesmo detalhe do catálogo)
export default function BotaoComoFazer({ grupoId, nome, className = "" }) {
  const [aberto, setAberto] = useState(false);
  const fechar = useCallback(() => setAberto(false), []);
  const info = infoDoExercicio(grupoId, nome);

  return (
    <>
      <button
        type="button" onClick={() => setAberto(true)} aria-label={`Ver como executar: ${nome}`}
        className={`inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-azul-400/40 bg-azul-500/10 px-3 py-1.5 text-xs font-bold text-azul-300 transition hover:bg-azul-500/20 ${className}`}
      >
        <Eye className="size-4" /> Como fazer
      </button>
      {createPortal(
        <AnimatePresence>
          {aberto && <DetalheExercicio exercicio={{ nome, grupo: info.grupo, subgrupo: info.subgrupo }} onFechar={fechar} />}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
