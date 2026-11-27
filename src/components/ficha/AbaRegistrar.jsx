import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, ChevronRight, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import Folha from "../Folha";
import RegistroSeries from "./RegistroSeries";
import CelebracaoRecorde from "../CelebracaoRecorde";
import { useToast } from "../Toast";
import { supabase } from "../../lib/supabase.js";
import { diaDaSemanaId, formatarData, hojeISO } from "../../lib/datas.js";
import { formatarKg } from "../../lib/cargas.js";

function textoUltima(linhas) {
  const ordenadas = [...linhas].sort((a, b) => a.serie_num - b.serie_num);
  if (ordenadas[0].duracao_min) return `${ordenadas[0].duracao_min} min`;
  const maior = Math.max(...ordenadas.map((r) => Number(r.carga_total_kg) || 0));
  return `${ordenadas.length} ${ordenadas.length === 1 ? "série" : "séries"} · até ${formatarKg(maior)}`;
}

export default function AbaRegistrar({ f, fichaInicialId, irParaTreinos }) {
  const { avisar } = useToast();
  const [data, setData] = useState(hojeISO());
  const [escolhida, setEscolhida] = useState(fichaInicialId ?? null);
  const [resumo, setResumo] = useState({});
  const [versao, setVersao] = useState(0);
  const [aberto, setAberto] = useState(null);
  const [celebrar, setCelebrar] = useState(null);

  // Ficha sugerida: a do dia da semana de hoje; senão, a primeira
  const padrao = useMemo(
    () => (f.fichas.find((x) => x.dias_semana.includes(diaDaSemanaId(hojeISO()))) ?? f.fichas[0])?.id ?? null,
    [f.fichas]
  );
  const fichaId = f.fichas.some((x) => x.id === escolhida) ? escolhida : padrao;
  const itens = fichaId ? f.itensDaFicha(fichaId) : [];
  const chaveNomes = itens.map((i) => i.exercicio).join("|");

  useEffect(() => {
    if (!chaveNomes) { setResumo({}); return; }
    let ativo = true;
    supabase
      .from("registros_carga")
      .select("exercicio,data,lado,serie_num,repeticoes,carga_total_kg,duracao_min")
      .in("exercicio", chaveNomes.split("|"))
      .order("data", { ascending: false })
      .limit(800)
      .then(({ data: linhas, error }) => {
        if (!ativo || error) return;
        const r = {};
        for (const l of linhas ?? []) {
          const e = (r[l.exercicio] ??= { feito: false, ultima: null, linhasUltima: [] });
          if (l.data === data) e.feito = true;
          else if (l.data < data) {
            if (!e.ultima) e.ultima = l.data;
            if (e.ultima === l.data) e.linhasUltima.push(l);
          }
        }
        setResumo(r);
      });
    return () => { ativo = false; };
  }, [chaveNomes, data, versao]);

  const feitos = itens.filter((i) => resumo[i.exercicio]?.feito).length;
  const fecharFolha = useCallback(() => setAberto(null), []);
  const fecharCelebracao = useCallback(() => setCelebrar(null), []);

  function aoSalvar(eventos) {
    const exercicio = aberto.exercicio;
    setAberto(null);
    setVersao((v) => v + 1);
    avisar("Exercício registrado! Dia marcado como treinado.");
    if (eventos.length) setCelebrar({ exercicio, eventos });
  }

  if (f.fichas.length === 0) {
    return (
      <div className="cartao p-8 text-center">
        <ClipboardList className="mx-auto size-12 text-brand-400" />
        <p className="mt-3 font-semibold">Crie uma ficha para começar a registrar suas cargas</p>
        <button onClick={irParaTreinos} className="btn-primary mt-5">Ir para Treinos</button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide">Registrar treino</h2>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <p className="mb-1.5 text-xs font-medium text-zinc-400">Ficha</p>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {f.fichas.map((x) => (
              <button key={x.id} onClick={() => setEscolhida(x.id)} aria-pressed={x.id === fichaId}
                className={`shrink-0 rounded-xl border px-4 py-2 text-sm font-bold ${x.id === fichaId ? "border-brand-500 bg-brand-500 text-white" : "border-white/10 bg-ink-900 text-zinc-300"}`}>
                {x.nome}
              </button>
            ))}
          </div>
        </div>
        <label className="flex flex-col gap-1.5 text-xs font-medium text-zinc-400">
          Data
          <input type="date" value={data} max={hojeISO()} onChange={(e) => e.target.value && setData(e.target.value)}
            className="min-h-11 rounded-xl border border-white/10 bg-ink-900 px-3 text-base text-white outline-none focus:border-brand-500" />
        </label>
      </div>

      {itens.length === 0 ? (
        <p className="cartao mt-6 p-6 text-center text-sm text-zinc-400">
          Esta ficha ainda não tem exercícios.{" "}
          <button onClick={irParaTreinos} className="font-semibold text-brand-400 hover:underline">Adicionar em Treinos</button>
        </p>
      ) : (
        <>
          <div className="mt-5">
            <div className="mb-1 flex justify-between text-xs text-zinc-400">
              <span>{feitos} de {itens.length} exercícios registrados</span>
              <span>{Math.round((feitos / itens.length) * 100)}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-valuenow={feitos} aria-valuemax={itens.length}>
              <motion.div className="h-full rounded-full bg-ok-500" animate={{ width: `${(feitos / itens.length) * 100}%` }} />
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            {itens.map((item) => {
              const r = resumo[item.exercicio];
              return (
                <li key={item.id}>
                  <button onClick={() => setAberto(item)}
                    className={`cartao flex w-full items-center gap-3 p-4 text-left transition active:scale-[0.99] ${r?.feito ? "border-ok-500/40" : ""}`}>
                    <span className={`grid size-9 shrink-0 place-items-center rounded-full ${r?.feito ? "bg-ok-500 text-ink-950" : "bg-white/5 text-zinc-500"}`}>
                      <Check className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold leading-tight">{item.exercicio}</span>
                      <span className="block text-xs text-zinc-500">
                        {r?.ultima ? `Última vez (${formatarData(r.ultima)}): ${textoUltima(r.linhasUltima)}` : "Ainda sem registro anterior"}
                      </span>
                    </span>
                    <ChevronRight className="size-5 shrink-0 text-zinc-500" />
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}

      <Folha aberta={!!aberto} onFechar={fecharFolha} titulo={aberto?.exercicio ?? "Exercício"}>
        {aberto && <RegistroSeries key={`${aberto.id}-${data}`} item={aberto} data={data} onSalvo={aoSalvar} />}
      </Folha>

      {celebrar && <CelebracaoRecorde exercicio={celebrar.exercicio} eventos={celebrar.eventos} onFechar={fecharCelebracao} />}
    </div>
  );
}
