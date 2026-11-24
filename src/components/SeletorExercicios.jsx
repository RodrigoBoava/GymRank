import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { GRUPOS, contarExercicios, normalizar } from "../data/exercicios";

export default function SeletorExercicios({ renderAcao }) {
  const [grupoId, setGrupoId] = useState(GRUPOS[0].id);
  const [busca, setBusca] = useState("");

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
        <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-zinc-500" />
        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar exercício (ex.: supino, agachamento)"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-10 pr-4 text-white placeholder-zinc-600 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {GRUPOS.map((g) => {
          const ativo = !buscando && g.id === grupoId;
          return (
            <button
              key={g.id}
              onClick={() => {
                setGrupoId(g.id);
                setBusca("");
              }}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                ativo
                  ? "border-lime-400 bg-lime-400 text-zinc-950"
                  : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600"
              }`}
            >
              {g.nome} <span className="opacity-60">{contarExercicios(g)}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-6">
        {buscando && blocos.length === 0 && (
          <p className="text-sm text-zinc-500">Nenhum exercício encontrado.</p>
        )}

        {blocos.map(({ grupo, subgrupo, exercicios }) => (
          <section key={`${grupo.id}-${subgrupo.id}`}>
            <h3 className="mb-2 flex flex-wrap items-baseline gap-2 text-sm font-semibold uppercase tracking-wide text-lime-400">
              {buscando && <span className="normal-case text-zinc-500">{grupo.nome} ·</span>}
              {subgrupo.nome}
              <span className="text-xs font-normal text-zinc-500">({exercicios.length})</span>
            </h3>
            <ul className="divide-y divide-zinc-800 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
              {exercicios.map((nome) => (
                <li key={nome} className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm">
                  <span>{nome}</span>
                  {renderAcao?.(grupo, nome)}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}