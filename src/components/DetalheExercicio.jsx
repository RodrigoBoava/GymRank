import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, Dumbbell, Info, Wind, X } from "lucide-react";
import { DESCRICOES } from "../data/descricoes";

function Bloco({ icone: Icone, titulo, cor, children }) {
  return (
    <section className="mt-6">
      <h3 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${cor}`}>
        <Icone className="size-4" /> {titulo}
      </h3>
      <div className="mt-2 text-zinc-300">{children}</div>
    </section>
  );
}

export default function DetalheExercicio({ exercicio, onFechar }) {
  const { nome, grupo, subgrupo } = exercicio;
  const d = DESCRICOES[nome];
  const botaoFechar = useRef(null);

  useEffect(() => {
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const aoTecla = (e) => e.key === "Escape" && onFechar();
    window.addEventListener("keydown", aoTecla);
    botaoFechar.current?.focus();
    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", aoTecla);
    };
  }, [onFechar]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onFechar}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-exercicio"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-ink-900 shadow-2xl sm:rounded-3xl"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
      >
        <header className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-full bg-azul-500/15 px-2.5 py-1 text-azul-300">
                {grupo} · {subgrupo}
              </span>
              {d && (
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-zinc-300">
                  <Dumbbell className="size-3.5" /> {d.equipamento}
                </span>
              )}
            </div>
            <h2 id="titulo-exercicio" className="mt-3 font-display text-3xl font-extrabold uppercase leading-none tracking-wide sm:text-4xl">
              {nome}
            </h2>
          </div>
          <button
            ref={botaoFechar}
            onClick={onFechar}
            aria-label="Fechar"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-white/5 transition hover:bg-white/10"
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="overflow-y-auto px-5 pb-8">
          {!d ? (
            <p className="mt-6 rounded-xl border border-dashed border-white/15 p-6 text-center text-zinc-400">
              A descrição deste exercício está em preparação.
            </p>
          ) : (
            <>
              <Bloco icone={Info} titulo="Posição inicial" cor="text-azul-300">
                <p>{d.posicao}</p>
              </Bloco>

              <Bloco icone={Dumbbell} titulo="Como executar" cor="text-brand-400">
                <ol className="space-y-3">
                  {d.execucao.map((passo, i) => (
                    <li key={passo} className="flex gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span>{passo}</span>
                    </li>
                  ))}
                </ol>
              </Bloco>

              <Bloco icone={Wind} titulo="Respiração" cor="text-azul-300">
                <p>{d.respiracao}</p>
              </Bloco>

              <Bloco icone={Dumbbell} titulo="Músculos trabalhados" cor="text-brand-400">
                <p className="text-xs uppercase tracking-wider text-zinc-500">Principais</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {d.principais.map((m) => (
                    <span key={m} className="rounded-full bg-brand-500/15 px-3 py-1 text-sm font-semibold text-brand-300">
                      {m}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-zinc-500">Secundários</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {d.secundarios.map((m) => (
                    <span key={m} className="rounded-full bg-azul-500/15 px-3 py-1 text-sm font-semibold text-azul-300">
                      {m}
                    </span>
                  ))}
                </div>
              </Bloco>

              <Bloco icone={X} titulo="Erros comuns" cor="text-red-400">
                <ul className="space-y-2">
                  {d.erros.map((e) => (
                    <li key={e} className="flex gap-2">
                      <X className="mt-0.5 size-4 shrink-0 text-red-400" /> <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </Bloco>

              <Bloco icone={Check} titulo="Dicas de execução" cor="text-ok-400">
                <ul className="space-y-2">
                  {d.dicas.map((t) => (
                    <li key={t} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-ok-400" /> <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Bloco>

              <p className="mt-8 rounded-xl bg-white/5 p-3 text-xs text-zinc-400">
                Sentiu dor durante o movimento? Interrompa o exercício e procure um profissional de educação
                física ou de saúde.
              </p>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}