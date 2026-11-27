import { useEffect, useMemo, useState } from "react";
import { Copy, Loader2, Plus, Trash2 } from "lucide-react";
import Stepper from "../Stepper";
import BotaoComoFazer from "../BotaoComoFazer";
import { useAuth } from "../../context/AuthContext";
import { buscarHistorico, salvarSessao } from "../../lib/registros.js";
import { PESO_BARRA_PADRAO, arredondar, calcularCargaTotal, formatarKg, num } from "../../lib/cargas.js";
import { calcularMarcas } from "../../lib/recordes.js";
import { formatarData } from "../../lib/datas.js";

const LADOS = [{ id: "esquerdo", nome: "Esquerdo" }, { id: "direito", nome: "Direito" }];
const fmt = (n) => (n == null ? "" : String(Number(n)).replace(".", ","));

// Converte uma linha salva no valor que aparece no campo de carga
function valorDoCampo(r, tipo, unilateral) {
  if (!r) return "";
  if (tipo === "cardio") return fmt(r.duracao_min);
  if (tipo === "halter") return fmt(r.carga_por_halter_kg ?? (unilateral ? r.carga_total_kg : Number(r.carga_total_kg) / 2));
  if (tipo === "barra" && r.carga_por_lado_kg != null) return fmt(r.carga_por_lado_kg);
  return fmt(r.carga_total_kg);
}

const resumoDaSessao = (linhas) =>
  linhas.map((r) => (r.duracao_min ? `${r.duracao_min} min` : `${r.repeticoes}×${formatarKg(r.carga_total_kg)}`)).join(" · ");

export default function RegistroSeries({ item, data, onSalvo }) {
  const { user } = useAuth();
  const tipo = item.tipo_carga;
  const cardio = tipo === "cardio";
  const unilateral = item.unilateral && !cardio;
  const lados = useMemo(() => (unilateral ? ["esquerdo", "direito"] : ["ambos"]), [unilateral]);

  const [historico, setHistorico] = useState(null);
  const [estado, setEstado] = useState({}); // { lado: [{ reps, kg }] }
  const [ladoAtivo, setLadoAtivo] = useState(lados[0]);
  const [modoLado, setModoLado] = useState(false); // barra: informar por lado
  const [pesoBarra, setPesoBarra] = useState(String(PESO_BARRA_PADRAO));
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    let ativo = true;
    buscarHistorico(item.exercicio)
      .then((h) => {
        if (!ativo) return;
        setHistorico(h);
        // Pré-preenche com o treino do dia (se já registrado) ou com a última sessão
        const doDia = h.filter((r) => r.data === data);
        const ultimaData = [...new Set(h.filter((r) => r.data < data).map((r) => r.data))].sort().reverse()[0];
        const fonte = doDia.length ? doDia : h.filter((r) => r.data === ultimaData);
        const comLado = fonte.find((r) => r.carga_por_lado_kg != null);
        if (tipo === "barra" && comLado) {
          setModoLado(true);
          setPesoBarra(fmt(comLado.peso_barra_kg ?? PESO_BARRA_PADRAO));
        }
        const novo = {};
        for (const lado of lados) {
          const linhas = fonte.filter((r) => r.lado === lado).sort((a, b) => a.serie_num - b.serie_num);
          const n = cardio ? 1 : Math.max(item.series, linhas.length);
          novo[lado] = Array.from({ length: n }, (_, i) => {
            const r = linhas[i] ?? linhas[linhas.length - 1];
            return { reps: String(r?.repeticoes ?? item.repeticoes), kg: valorDoCampo(r, tipo, unilateral) };
          });
        }
        setEstado(novo);
      })
      .catch(() => ativo && setErro("Não foi possível carregar o histórico deste exercício."));
    return () => { ativo = false; };
  }, [item.id, item.exercicio, item.series, item.repeticoes, data, tipo, cardio, unilateral, lados]);

  const marcas = useMemo(
    () => calcularMarcas((historico ?? []).filter((r) => r.lado === ladoAtivo && r.data < data)),
    [historico, ladoAtivo, data]
  );
  const ultima = useMemo(() => {
    const linhas = (historico ?? []).filter((r) => r.lado === ladoAtivo && r.data < data);
    const d = linhas[0]?.data; // histórico vem do mais recente para o mais antigo
    return d ? { data: d, linhas: linhas.filter((r) => r.data === d).sort((a, b) => a.serie_num - b.serie_num) } : null;
  }, [historico, ladoAtivo, data]);

  if (!historico && !erro) return <p className="py-10 text-center text-zinc-400">Carregando…</p>;
  if (!estado[ladoAtivo]) return erro ? <p role="alert" className="text-red-300">{erro}</p> : null;

  const series = estado[ladoAtivo];
  const passoKg = tipo === "halter" ? 1 : tipo === "barra" && modoLado ? 1.25 : 2.5;
  const rotuloKg =
    tipo === "halter" ? "Cada halter (kg)" : tipo === "barra" ? (modoLado ? "Cada lado (kg)" : "Total (kg)")
    : tipo === "peso_corporal" ? "Carga extra (kg)" : "Carga (kg)";

  // Ao editar a carga de uma série, as séries seguintes que ainda estavam iguais a ela acompanham
  // (digita uma vez e vale para as 3 séries; quem já foi ajustado à mão não é alterado)
  const mudar = (i, campo, valor) =>
    setEstado((e) => {
      const lista = e[ladoAtivo];
      const antes = lista[i][campo];
      return {
        ...e,
        [ladoAtivo]: lista.map((s, idx) => {
          if (idx === i) return { ...s, [campo]: valor };
          if (campo === "kg" && idx > i && s.kg === antes) return { ...s, kg: valor };
          return s;
        }),
      };
    });
  const adicionarSerie = () =>
    setEstado((e) => ({ ...e, [ladoAtivo]: [...e[ladoAtivo], { ...e[ladoAtivo][e[ladoAtivo].length - 1] }] }));
  const removerSerie = (i) =>
    setEstado((e) => ({ ...e, [ladoAtivo]: e[ladoAtivo].filter((_, idx) => idx !== i) }));
  // Ao trocar entre "carga total" e "carga de cada lado", converte os valores já digitados
  // (sem isso, 50 kg de total viraria 50 kg POR LADO = 120 kg)
  const alternarModoLado = (ligar) => {
    const barra = num(pesoBarra) ?? PESO_BARRA_PADRAO;
    setEstado((e) =>
      Object.fromEntries(
        Object.entries(e).map(([lado, lista]) => [
          lado,
          lista.map((s) => {
            const v = num(s.kg);
            if (v == null) return s;
            const novo = ligar ? (v - barra) / 2 : barra + 2 * v;
            return { ...s, kg: novo >= 0 ? fmt(arredondar(novo)) : "" };
          }),
        ])
      )
    );
    setModoLado(ligar);
  };
  const copiarParaOutroLado = () => {
    const outro = ladoAtivo === "esquerdo" ? "direito" : "esquerdo";
    setEstado((e) => ({ ...e, [outro]: e[ladoAtivo].map((s) => ({ ...s })) }));
    setLadoAtivo(outro);
  };

  async function salvar() {
    setErro("");
    const linhas = [];
    for (const lado of lados) {
      for (let i = 0; i < estado[lado].length; i++) {
        const s = estado[lado][i];
        const nome = unilateral ? `Lado ${lado}, série ${i + 1}` : `Série ${i + 1}`;
        if (cardio) {
          const min = num(s.kg);
          if (!(min >= 1 && min <= 600)) return setErro("Informe a duração em minutos (1 a 600).");
          linhas.push({ serie_num: 1, lado, duracao_min: Math.round(min) });
          continue;
        }
        const reps = num(s.reps);
        if (!Number.isInteger(reps) || reps < 1 || reps > 300) return setErro(`${nome}: informe as repetições (1 a 300).`);
        const total = calcularCargaTotal({ tipo, unilateral, valor: s.kg, usarLado: modoLado, pesoBarra });
        if (total == null) return setErro(`${nome}: informe uma carga válida.`);
        const linha = { serie_num: i + 1, lado, repeticoes: reps, carga_total_kg: total };
        if (tipo === "halter") linha.carga_por_halter_kg = num(s.kg);
        if (tipo === "barra" && modoLado) {
          linha.carga_por_lado_kg = num(s.kg);
          linha.peso_barra_kg = num(pesoBarra);
        }
        linhas.push(linha);
      }
    }
    setSalvando(true);
    try {
      const { eventos } = await salvarSessao({
        userId: user.id, exercicio: item.exercicio, grupo: item.grupo, fichaId: item.ficha_id, data, tipo, series: linhas,
      });
      onSalvo(eventos);
    } catch {
      setErro("Não foi possível salvar. Verifique sua conexão e tente de novo.");
      setSalvando(false);
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-zinc-400">
          Meta: {cardio ? `${item.duracao_min ?? 20} min` : `${item.series} × ${item.repeticoes}`} · descanso {item.descanso_seg}s
        </p>
        <BotaoComoFazer grupoId={item.grupo} nome={item.exercicio} />
      </div>

      {unilateral && (
        <div role="tablist" className="grid grid-cols-2 gap-2">
          {LADOS.map((l) => (
            <button key={l.id} role="tab" aria-selected={ladoAtivo === l.id} onClick={() => setLadoAtivo(l.id)}
              className={`min-h-11 rounded-xl border text-sm font-bold ${ladoAtivo === l.id ? "border-brand-500 bg-brand-500 text-white" : "border-white/10 bg-ink-900 text-zinc-300"}`}>
              {l.nome}
            </button>
          ))}
        </div>
      )}

      {!cardio && (
        <div className="cartao space-y-1 p-3 text-sm">
          {ultima ? (
            <p className="text-zinc-300"><span className="text-zinc-500">Última vez ({formatarData(ultima.data)}):</span> {resumoDaSessao(ultima.linhas)}</p>
          ) : (
            <p className="text-zinc-400">Primeiro registro deste exercício. Ele vira sua base para os recordes.</p>
          )}
          {marcas.cargaMax > 0 && (
            <p className="text-zinc-400">
              Recorde de carga: <strong className="text-brand-400">{formatarKg(marcas.cargaMax)}</strong>
              {marcas.e1rmMax > 0 && <> · 1RM estimado: <strong className="text-azul-300">{formatarKg(marcas.e1rmMax)}</strong></>}
            </p>
          )}
        </div>
      )}

      {tipo === "barra" && (
        <div className="space-y-3 rounded-xl border border-white/10 p-3">
          <label className="flex min-h-9 cursor-pointer items-center gap-3 text-sm font-semibold">
            <input type="checkbox" checked={modoLado} onChange={(e) => alternarModoLado(e.target.checked)} className="size-5 accent-orange-500" />
            Informar a carga de cada lado da barra
          </label>
          {modoLado && (
            <div className="max-w-44">
              <Stepper id="peso-barra" rotulo="Peso da barra (kg)" valor={pesoBarra} onChange={setPesoBarra} passo={2.5} max={100} />
            </div>
          )}
        </div>
      )}

      <ul className="space-y-3">
        {series.map((s, i) => {
          const total = cardio ? null : calcularCargaTotal({ tipo, unilateral, valor: s.kg, usarLado: modoLado, pesoBarra });
          return (
            <li key={i} className="cartao p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-bold text-brand-400">{cardio ? "Duração" : `Série ${i + 1}`}</p>
                {!cardio && series.length > 1 && (
                  <button onClick={() => removerSerie(i)} aria-label={`Remover série ${i + 1}`} className="grid size-8 place-items-center rounded-lg text-zinc-500 hover:bg-red-500/10 hover:text-red-400">
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>
              {cardio ? (
                <Stepper id={`min-${i}`} rotulo="Minutos" valor={s.kg} onChange={(v) => mudar(i, "kg", v)} passo={5} min={0} max={600} />
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <Stepper id={`reps-${i}`} rotulo="Repetições" valor={s.reps} onChange={(v) => mudar(i, "reps", v)} passo={1} min={0} max={300} />
                    <Stepper id={`kg-${i}`} rotulo={rotuloKg} valor={s.kg} onChange={(v) => mudar(i, "kg", v)} passo={passoKg} />
                  </div>
                  {total != null && (tipo === "halter" || (tipo === "barra" && modoLado)) && (
                    <p className="mt-2 text-xs text-zinc-400">= <strong className="text-white">{formatarKg(total)}</strong> no total{tipo === "halter" && !unilateral ? " (dois halteres)" : ""}</p>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap gap-2">
        {!cardio && (
          <button onClick={adicionarSerie} className="btn-ghost btn-sm"><Plus className="size-4" /> Série (repete a anterior)</button>
        )}
        {unilateral && (
          <button onClick={copiarParaOutroLado} className="btn-ghost btn-sm"><Copy className="size-4" /> Copiar para o outro lado</button>
        )}
      </div>

      {erro && <p role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">{erro}</p>}

      <button onClick={salvar} disabled={salvando} className="btn-primary w-full">
        {salvando && <Loader2 className="size-5 animate-spin" />} {salvando ? "Salvando…" : "Salvar exercício"}
      </button>
    </div>
  );
}
