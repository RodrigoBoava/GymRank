import { e1rm } from "./cargas.js";

// Três recordes SEPARADOS (maior carga não é o mesmo que melhor desempenho):
//  - carga:       maior carga total já usada
//  - e1rm:        maior 1RM estimado (força relativa ao número de repetições)
//  - repeticoes:  mais repetições com a MESMA carga
const EPS = 0.001;
const chave = (carga) => String(Math.round(Number(carga) * 100) / 100);

function atualizar(marcas, carga, reps) {
  if (!(reps >= 1) || !(carga >= 0)) return;
  if (carga > marcas.cargaMax) marcas.cargaMax = carga;
  const e = e1rm(carga, reps);
  if (e != null && e > marcas.e1rmMax) marcas.e1rmMax = e;
  const k = chave(carga);
  if (!(k in marcas.repsPorCarga) || reps > marcas.repsPorCarga[k]) marcas.repsPorCarga[k] = reps;
}

export function calcularMarcas(historico) {
  const marcas = { cargaMax: 0, e1rmMax: 0, repsPorCarga: {} };
  for (const r of historico) atualizar(marcas, Number(r.carga_total_kg), Number(r.repeticoes));
  return marcas;
}

// historico: séries ANTERIORES à sessão. novos: séries da sessão atual, em ordem.
// Só há recorde quando já existia histórico (a primeira sessão apenas cria a base).
export function detectarRecordes(historico, novos) {
  const inicio = calcularMarcas(historico);
  const atual = { ...inicio, repsPorCarga: { ...inicio.repsPorCarga } };
  const temBase = historico.some((r) => Number(r.repeticoes) >= 1);
  const eventos = new Map();

  for (const s of novos) {
    const carga = Number(s.carga_total_kg);
    const reps = Number(s.repeticoes);
    if (!(reps >= 1) || !(carga >= 0)) continue;

    if (temBase) {
      if (carga > 0 && carga > atual.cargaMax + EPS) {
        eventos.set("carga", { tipo: "carga", valor: carga, anterior: inicio.cargaMax || null, carga_ref_kg: 0 });
      }
      const e = e1rm(carga, reps);
      if (e != null && inicio.e1rmMax > 0 && e > atual.e1rmMax + 0.05) {
        eventos.set("e1rm", { tipo: "e1rm", valor: e, anterior: inicio.e1rmMax, carga_ref_kg: 0 });
      }
      const k = chave(carga);
      if (k in inicio.repsPorCarga && reps > atual.repsPorCarga[k]) {
        eventos.set(`reps|${k}`, {
          tipo: "repeticoes", valor: reps, anterior: inicio.repsPorCarga[k], carga_ref_kg: Number(k),
        });
      }
    }
    atualizar(atual, carga, reps);
  }
  const ordem = { carga: 0, e1rm: 1, repeticoes: 2 };
  return [...eventos.values()].sort((a, b) => ordem[a.tipo] - ordem[b.tipo]);
}

// Uma linha por dia de treino, para os gráficos de evolução
export function resumirSessoes(registros) {
  const porData = new Map();
  for (const r of registros) {
    const reps = Number(r.repeticoes);
    if (!(reps >= 1)) continue;
    const carga = Number(r.carga_total_kg) || 0;
    const s = porData.get(r.data) ?? { data: r.data, series: 0, repsTotal: 0, cargaMax: 0, e1rm: 0, volume: 0 };
    s.series += 1;
    s.repsTotal += reps;
    s.cargaMax = Math.max(s.cargaMax, carga);
    s.e1rm = Math.max(s.e1rm, e1rm(carga, reps) ?? 0);
    s.volume += carga * reps;
    porData.set(r.data, s);
  }
  return [...porData.values()]
    .map((s) => ({ ...s, volume: Math.round(s.volume), e1rm: s.e1rm || null }))
    .sort((a, b) => a.data.localeCompare(b.data));
}

// Cartões de recordes da tela de evolução (sempre calculados do histórico completo)
export function melhoresMarcas(registros) {
  const validos = registros.filter((r) => Number(r.repeticoes) >= 1);
  let cargaMax = null, melhorE1rm = null, maisReps = null;
  const porCarga = {};
  for (const r of validos) {
    const carga = Number(r.carga_total_kg) || 0;
    const reps = Number(r.repeticoes);
    if (carga > 0 && (!cargaMax || carga > cargaMax.valor)) cargaMax = { valor: carga, data: r.data, reps };
    const e = e1rm(carga, reps);
    if (e != null && (!melhorE1rm || e > melhorE1rm.valor)) melhorE1rm = { valor: e, data: r.data, carga, reps };
    if (!maisReps || reps > maisReps.reps || (reps === maisReps.reps && carga > maisReps.carga)) {
      maisReps = { reps, carga, data: r.data };
    }
    const k = chave(carga);
    if (!porCarga[k] || reps > porCarga[k].reps) porCarga[k] = { carga: Number(k), reps, data: r.data };
  }
  const repsPorCarga = Object.values(porCarga).sort((a, b) => b.carga - a.carga).slice(0, 6);
  return { cargaMax, e1rm: melhorE1rm, maisReps, repsPorCarga };
}
