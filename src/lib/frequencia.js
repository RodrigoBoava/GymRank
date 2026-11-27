import { addDias, diaDaSemanaId, diasDoIntervalo, inicioDaSemana, mesDe, toISO, ultimoDiaDoMes } from "./datas.js";

// Células do calendário do mês (Dom a Sáb). null = espaço vazio.
export function gradeDoMes(ano, mes0) {
  const primeiro = new Date(ano, mes0, 1);
  const total = new Date(ano, mes0 + 1, 0).getDate();
  const celulas = Array(primeiro.getDay()).fill(null);
  for (let d = 1; d <= total; d++) celulas.push(toISO(new Date(ano, mes0, d)));
  while (celulas.length % 7) celulas.push(null);
  return celulas;
}

export function nivelConsistencia(pct) {
  if (pct == null) return { id: "sem_plano", rotulo: "Defina seus dias de treino", cor: "azul" };
  if (pct >= 80) return { id: "alta", rotulo: "Consistente", cor: "verde" };
  if (pct >= 60) return { id: "boa", rotulo: "Boa regularidade", cor: "verde" };
  if (pct >= 40) return { id: "media", rotulo: "Oscilando", cor: "azul" };
  return { id: "baixa", rotulo: "Hora de retomar", cor: "laranja" };
}

// registros: [{ data: 'YYYY-MM-DD', status: 'treinou' | 'faltou' | 'descanso' }]
// diasPlanejados: ['seg', 'qua', ...] (união dos dias das fichas)
// Dia "planejado" = dia da semana planejado que NÃO foi marcado como descanso.
// A porcentagem só conta treinos feitos em dias planejados, então treinos extras não escondem faltas.
export function estatisticasFrequencia({ registros, diasPlanejados = [], hoje, mes }) {
  const status = new Map(registros.map((r) => [r.data, r.status]));
  const planejado = (iso) => diasPlanejados.includes(diaDaSemanaId(iso)) && status.get(iso) !== "descanso";

  const contar = (ini, fim) => {
    const r = { treinos: 0, faltas: 0, descansos: 0, planejados: 0, treinosPlanejados: 0 };
    if (ini > fim) return r;
    for (const iso of diasDoIntervalo(ini, fim)) {
      const s = status.get(iso);
      if (s === "treinou") r.treinos++;
      if (s === "faltou") r.faltas++;
      if (s === "descanso") r.descansos++;
      if (planejado(iso)) {
        r.planejados++;
        if (s === "treinou") r.treinosPlanejados++;
      }
    }
    return r;
  };
  const pct = (r) => (r.planejados > 0 ? Math.min(100, Math.round((r.treinosPlanejados / r.planejados) * 100)) : null);

  const [ano, m] = mes.split("-").map(Number);
  const fimDoMes = ultimoDiaDoMes(ano, m - 1);
  const doMes = contar(`${mes}-01`, fimDoMes < hoje ? fimDoMes : hoje);

  const iniSemana = inicioDaSemana(hoje);
  const daSemana = contar(iniSemana, addDias(iniSemana, 6));
  const ultimos28 = contar(addDias(hoje, -27), hoje);

  // Sequência: dias seguidos treinando. Descanso marcado não quebra a sequência (mas não conta como treino).
  let sequencia = 0;
  let dia = status.has(hoje) ? hoje : addDias(hoje, -1);
  for (let i = 0; i < 400; i++) {
    const s = status.get(dia);
    if (s === "treinou") sequencia++;
    else if (s !== "descanso") break;
    dia = addDias(dia, -1);
  }

  // Histórico por mês (do mais recente ao mais antigo)
  const meses = [...new Set(registros.map((r) => mesDe(r.data)))].sort().reverse();
  const historicoMeses = meses.map((ym) => {
    const [a, mm] = ym.split("-").map(Number);
    const fim = ultimoDiaDoMes(a, mm - 1);
    const r = contar(`${ym}-01`, fim < hoje ? fim : hoje);
    return { mes: ym, treinos: r.treinos, faltas: r.faltas, descansos: r.descansos, percentual: pct(r) };
  });

  // Treinos por semana nas últimas 12 semanas
  const semanas = [];
  for (let i = 11; i >= 0; i--) {
    const ini = addDias(iniSemana, -7 * i);
    const r = contar(ini, addDias(ini, 6));
    semanas.push({ inicio: ini, treinos: r.treinos });
  }

  return {
    treinosMes: doMes.treinos,
    faltasMes: doMes.faltas,
    descansosMes: doMes.descansos,
    percentualMes: pct(doMes),
    treinosSemana: daSemana.treinos,
    planejadosSemana: daSemana.planejados,
    percentualSemana: pct(daSemana),
    percentual28: pct(ultimos28),
    sequencia,
    historicoMeses,
    semanas,
    nivel: nivelConsistencia(pct(ultimos28)),
  };
}
