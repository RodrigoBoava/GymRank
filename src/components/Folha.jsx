import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

// Janela que sobe de baixo no celular e abre no centro no computador
export default function Folha({ aberta, onFechar, titulo, children, largura = "max-w-2xl" }) {
  useEffect(() => {
    if (!aberta) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const aoTecla = (e) => e.key === "Escape" && onFechar();
    window.addEventListener("keydown", aoTecla);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", aoTecla);
    };
  }, [aberta, onFechar]);

  return createPortal(
    <AnimatePresence>
      {aberta && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onFechar}
        >
          <motion.div
            role="dialog" aria-modal="true" aria-label={titulo}
            onClick={(e) => e.stopPropagation()}
            className={`flex max-h-[92dvh] w-full ${largura} flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-ink-900 shadow-2xl sm:rounded-3xl`}
            initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            <header className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide">{titulo}</h2>
              <button onClick={onFechar} aria-label="Fechar" className="grid size-10 place-items-center rounded-full bg-white/5 transition hover:bg-white/10">
                <X className="size-5" />
              </button>
            </header>
            <div className="overflow-y-auto p-5 pb-8">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
