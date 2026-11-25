import { useCallback, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Eye, Search } from "lucide-react";
import { GRUPOS, contarExercicios, normalizar } from "../data/exercicios";
import DetalheExercicio from "./DetalheExercicio";

export default function SeletorExercicios({ renderAcao }) {
  const [grupoId, setGrupoId] = useState(GRUPOS[0].id);
  const [busca, setBusca] = useState("");
  const [aberto, setAberto] = useState(null);

  const fechar = useCallback(() => setAberto(null), []);

  const termo = normalizar(busca.trim());
  const buscando = termo.length >= 2;
  const grupoAtual = GRUPOS.find((g) => g.id === grupoId);

  const blocos = useMemo(() => {
    const visiveis = buscando ? GRUPOS : [grupoAtual];
    return visiveis.flatMap((grupo) =>
      grupo.subgrupos
        .map((subgrupo) => ({
          grupo,
          subgrupo,
          exercicios: buscando
            ? subgrupo.exercicios.filter((nome) => normalizar(nome).includes(termo))
            : subgrupo.exercicios,
        }))
        .filter((b) => b.exercicios.length > 0)
    );
  }, [buscando, termo, grupoAtual]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-zinc-500" />
        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar exercício (ex.: supino, agachamento)"
          className="min-h-12 w-full rounded-xl border border-white/10 bg-ink-900 py-3 pl-11 pr-4 text-base text-white placeholder-zinc-500 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
        />
      </div>

      <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {GRUPOS.map((g) => {
          const ativo = !buscando && g.id === grupoId;
          return (
            <button
              key={g.id}
              onClick={() => {
                setGrupoId(g.id);
                setBusca("");
              }}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                ativo
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-white/10 bg-ink-900 text-zinc-300 hover:border-white/25"
              }`}
            >
              {g.nome} <span className="opacity-60">{contarExercicios(g)}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-6">
        {buscando && blocos.length === 0 && <p className="text-sm text-zinc-500">Nenhum exercício encontrado.</p>}

        {blocos.map(({ grupo, subgrupo, exercicios }) => (
          <section key={`${grupo.id}-${subgrupo.id}`}>
            <h3 className="mb-2 flex flex-wrap items-baseline gap-2 text-sm font-bold uppercase tracking-wide text-brand-400">
              {buscando && <span className="normal-case text-zinc-500">{grupo.nome} ·</span>}
              {subgrupo.nome}
              <span className="text-xs font-normal text-zinc-500">({exercicios.length})</span>
            </h3>
            <ul className="divide-y divide-white/5 overflow-hidden rounded-xl border border-white/10 bg-ink-850/60">
              {exercicios.map((nome) => (
                <li key={nome} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 text-sm">
                  <span className="min-w-0 flex-1 basis-44 font-medium">{nome}</span>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      onClick={() => setAberto({ nome, grupo: grupo.nome, subgrupo: subgrupo.nome })}
                      aria-label={`Ver como executar: ${nome}`}
                      className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-azul-400/40 bg-azul-500/10 px-3 py-1.5 text-xs font-bold text-azul-300 transition hover:bg-azul-500/20"
                    >
                      <Eye className="size-4" /> Como fazer
                    </button>
                    {renderAcao?.(grupo, nome)}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <AnimatePresence>
        {aberto && <DetalheExercicio exercicio={aberto} onFechar={fechar} />}
      </AnimatePresence>
    </div>
  );
}