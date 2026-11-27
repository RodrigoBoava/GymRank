import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Info, TriangleAlert } from "lucide-react";

const Ctx = createContext({ avisar: () => {} });
export const useToast = () => useContext(Ctx);

const ESTILOS = {
  ok: ["border-ok-500/40 bg-ok-500/15 text-ok-400", Check],
  erro: ["border-red-500/40 bg-red-500/15 text-red-300", TriangleAlert],
  info: ["border-azul-400/40 bg-azul-500/15 text-azul-300", Info],
};

export function ToastProvider({ children }) {
  const [lista, setLista] = useState([]);
  const avisar = useCallback((texto, tipo = "ok") => {
    const id = `${Date.now()}-${Math.random()}`;
    setLista((l) => [...l, { id, texto, tipo }]);
    setTimeout(() => setLista((l) => l.filter((t) => t.id !== id)), 3800);
  }, []);
  const valor = useMemo(() => ({ avisar }), [avisar]);

  return (
    <Ctx.Provider value={valor}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-24 z-[90] flex flex-col items-center gap-2 px-4 md:bottom-6">
        <AnimatePresence>
          {lista.map((t) => {
            const [cor, Icone] = ESTILOS[t.tipo] ?? ESTILOS.ok;
            return (
              <motion.div
                key={t.id} layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }}
                className={`pointer-events-auto flex max-w-md items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold shadow-xl backdrop-blur ${cor}`}
              >
                <Icone className="size-5 shrink-0" /> {t.texto}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </Ctx.Provider>
  );
}
