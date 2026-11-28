import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Droplet } from "lucide-react";
import { formatarLitros } from "../../lib/hidratacao.js";

const GOTAS = Array.from({ length: 14 }, (_, i) => ({
  x: (i * 53) % 100,
  atraso: (i % 7) * 0.12,
  duracao: 1.4 + (i % 4) * 0.25,
  tamanho: 14 + (i % 3) * 6,
}));

// Comemoração exibida uma vez, no momento em que o registro faz a pessoa chegar a 100%
export default function MetaAlcancada({ aberta, meta_ml, onFechar }) {
  useEffect(() => {
    if (!aberta) return;
    const t = setTimeout(onFechar, 6000);
    const aoTecla = (e) => e.key === "Escape" && onFechar();
    window.addEventListener("keydown", aoTecla);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", aoTecla);
    };
  }, [aberta, onFechar]);

  return createPortal(
    <AnimatePresence>
      {aberta && (
        <motion.div
          className="fixed inset-0 z-[95] grid place-items-center overflow-hidden bg-black/75 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onFechar}
        >
          {/* Gotas caindo */}
          {GOTAS.map((g, i) => (
            <motion.span
              key={i} aria-hidden="true" className="pointer-events-none absolute top-0 text-azul-300"
              style={{ left: `${g.x}%` }}
              initial={{ y: "-10vh", opacity: 0 }}
              animate={{ y: "105vh", opacity: [0, 1, 1, 0] }}
              transition={{ duration: g.duracao, delay: g.atraso, ease: "easeIn" }}
            >
              <Droplet style={{ width: g.tamanho, height: g.tamanho }} fill="currentColor" />
            </motion.span>
          ))}

          <motion.div
            role="alertdialog" aria-modal="true" aria-labelledby="meta-agua-titulo"
            onClick={(e) => e.stopPropagation()}
            className="cartao relative w-full max-w-sm overflow-hidden p-7 text-center"
            initial={{ scale: 0.8, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            {/* Ondas ao fundo do cartão */}
            <svg aria-hidden="true" viewBox="0 0 400 80" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-20 w-[200%]">
              <motion.path
                d="M0 40 Q 50 20 100 40 T 200 40 T 300 40 T 400 40 V 80 H 0 Z" fill="rgba(74,163,255,0.18)"
                animate={{ x: [0, -200] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M0 50 Q 50 34 100 50 T 200 50 T 300 50 T 400 50 V 80 H 0 Z" fill="rgba(52,211,153,0.18)"
                animate={{ x: [-200, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.15 }}
                className="mx-auto grid size-20 place-items-center rounded-full bg-ok-500/15 text-ok-400 ring-2 ring-ok-500/40"
              >
                <motion.span
                  className="block" initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.35 }}
                >
                  <Check className="size-10" strokeWidth={3} />
                </motion.span>
              </motion.div>
              <h2 id="meta-agua-titulo" className="mt-5 font-display text-4xl font-extrabold uppercase tracking-wide text-ok-400">
                Meta alcançada!
              </h2>
              <p className="mt-2 text-zinc-300">
                Parabéns! Você atingiu sua meta diária de hidratação de <strong className="text-white">{formatarLitros(meta_ml)}</strong>. Continue mantendo bons hábitos!
              </p>
              <button onClick={onFechar} className="btn-primary mt-6 w-full">Continuar</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}