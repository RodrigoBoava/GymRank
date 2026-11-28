import { addDias, diasDoIntervalo, fromISO } from "./datas.js";

// =====================================================================
// Meta de água: ESTIMATIVA de referência, não prescrição médica.
//
// Base: 35 ml por kg de peso corporal por dia. É o valor usado com frequência
// em nutrição esportiva (faixa comum de 30 a 40 ml/kg) e fica coerente com as
// referências de ingestão total de água (EFSA/IOM) para adultos ativos.
//
// Treino: o suor de 1 hora de treino moderado costuma ficar entre 0,4 e 0,8 L
// (ACSM). Usamos 500 ml por sessão e distribuímos pela semana, para que a meta
// seja a mesma todos os dias e fácil de acompanhar.
//
// Altura e idade NÃO entram: o peso já representa o tamanho corporal, e não há
// ajuste por idade bem estabelecido para adultos saudáveis. Somar fatores
// arbitrários só daria uma falsa precisão.
//
// Limites: mínimo de 1,5 L e máximo de 4 L por dia, para não sugerir consumo
// excessivo. Quem precisa de mais (calor extremo, treinos longos) deve ajustar
// manualmente ou com orientação profissional.
// =====================================================================

export const ML_POR_KG = 35;
export const ML_POR_SESSAO = 500;
export const META_MIN = 1500;
export const META_MAX = 4000;
export const META_PROVISORIA = 2000;
export const QUANTIDADES_RAPIDAS = [150, 250, 350, 500];
export const REGISTRO_MAX = 2000; // limite por registro (igual ao banco)

// Quando a pessoa não tem fichas com dias marcados, usamos o nível de atividade do perfil
const SESSOES_POR_NIVEL = { sedentario: 0, leve: 2, moderado: 4, intenso: 6, muito_intenso: 7 };

const arred50 = (n) => Math.round(n / 50) * 50;
const limitar = (n, min, max) => Math.min(max, Math.max(min, n));

export function calcularMetaAgua({ peso_kg, treinosPorSemana, nivel_atividade } = {}) {
  const peso = Number(peso_kg);
  if (!(peso >= 20 && peso <= 400)) {
    return {
      meta_ml: META_PROVISORIA, provisoria: true, base_ml: null, treino_ml: 0, sessoes: 0, fonteSessoes: "nenhuma",
    };
  }

  let sessoes = 0;
  let fonteSessoes = "nenhuma";
  if (Number.isFinite(treinosPorSemana) && treinosPorSemana > 0) {
    sessoes = limitar(Math.round(treinosPorSemana), 0, 7);
    fonteSessoes = "ficha";
  } else if (nivel_atividade && nivel_atividade in SESSOES_POR_NIVEL) {
    sessoes = SESSOES_POR_NIVEL[nivel_atividade];
    fonteSessoes = "nivel";
  }

  const base_ml = peso * ML_POR_KG;
  const treino_ml = (sessoes * ML_POR_SESSAO) / 7;
  const meta_ml = limitar(arred50(base_ml + treino_ml), META_MIN, META_MAX);

  return { meta_ml, provisoria: false, base_ml: arred50(base_ml), treino_ml: arred50(treino_ml), sessoes, fonteSessoes };
}

// metas: [{ vigente_desde: 'YYYY-MM-DD', meta_ml, origem }] em qualquer ordem.
// A meta de um dia é a mais recente com vigente_desde <= dia. Mudar a meta hoje
// não altera a avaliação dos dias anteriores.
export function metaDoDia(metas, dia) {
  let escolhida = null;
  for (const m of metas ?? []) {
    if (m.vigente_desde <= dia && (!escolhida || m.vigente_desde > escolhida.vigente_desde)) escolhida = m;
  }
  return escolhida;
}

export const totalDoDia = (registros, dia) =>
  (registros ?? []).reduce((s, r) => (r.data === dia ? s + Number(r.quantidade_ml) : s), 0);

export function resumoDoDia(consumido, meta_ml) {
  const pctReal = meta_ml > 0 ? Math.round((consumido / meta_ml) * 100) : 0;
  return {
    meta_ml,
    consumido,
    restante: Math.max(0, meta_ml - consumido),
    pct: Math.min(100, pctReal), // para a barra/anel
    pctReal, // pode passar de 100, mostrado sem comemorar o excesso
    atingida: meta_ml > 0 && consumido >= meta_ml,
    acimaDoRecomendavel: meta_ml > 0 && consumido >= meta_ml * 1.5,
  };
}

// Passou de < 100% para >= 100% com o último registro?
export const cruzouAMeta = (antes, depois, meta_ml) => meta_ml > 0 && antes < meta_ml && depois >= meta_ml;

// Últimos 7 dias (do mais antigo ao mais recente), comparando consumo e meta de cada dia.
// A média e a contagem só consideram dias a partir do primeiro registro da pessoa,
// para que quem começou ontem não tenha a média puxada para baixo por dias sem o recurso.
export function estatisticasSemana({ registros, metas, hoje, metaPadrao, primeiroDia }) {
  const ini = addDias(hoje, -6);
  const primeiro = primeiroDia ?? (registros ?? []).reduce((p, r) => (!p || r.data < p ? r.data : p), null);

  const dias = diasDoIntervalo(ini, hoje).map((data) => {
    const meta_ml = metaDoDia(metas, data)?.meta_ml ?? metaPadrao ?? null;
    const total = totalDoDia(registros, data);
    const conta = primeiro != null && data >= primeiro;
    return { data, total, meta_ml, atingiu: Boolean(meta_ml) && total >= meta_ml, conta };
  });

  const validos = dias.filter((d) => d.conta);
  const media = validos.length ? Math.round(validos.reduce((s, d) => s + d.total, 0) / validos.length) : 0;
  const diasMeta = validos.filter((d) => d.atingiu).length;
  const pctConsistencia = validos.length ? Math.round((diasMeta / validos.length) * 100) : null;

  return { dias, media, diasMeta, diasConsiderados: validos.length, pctConsistencia, consistencia: nivelHidratacao(pctConsistencia) };
}

export function nivelHidratacao(pct) {
  if (pct == null) return { id: "sem_dados", rotulo: "Comece registrando hoje", cor: "azul" };
  if (pct >= 85) return { id: "alta", rotulo: "Muito consistente", cor: "verde" };
  if (pct >= 60) return { id: "boa", rotulo: "Boa regularidade", cor: "verde" };
  if (pct >= 30) return { id: "media", rotulo: "Oscilando", cor: "azul" };
  return { id: "baixa", rotulo: "Vamos retomar", cor: "laranja" };
}

// ---------- Distribuição ao longo do dia ----------
// Janela de referência: das 7h às 22h. Fora dela não cobramos ritmo.
export const HORA_INICIO = 7;
export const HORA_FIM = 22;

const horaDecimal = (d) => d.getHours() + d.getMinutes() / 60;

export function ritmoDoDia({ meta_ml, consumido, agora = new Date() }) {
  const h = horaDecimal(agora);
  const fracao = limitar((h - HORA_INICIO) / (HORA_FIM - HORA_INICIO), 0, 1);
  const esperado = arred50(meta_ml * fracao);
  const porHora = arred50(meta_ml / (HORA_FIM - HORA_INICIO));
  let status = "no_ritmo";
  if (consumido >= meta_ml) status = "concluido";
  else if (fracao === 0) status = "cedo";
  else if (fracao === 1) status = "fim_do_dia"; // à noite não cobramos o que faltou
  else if (consumido < esperado - 300) status = "atrasado";
  else if (consumido > esperado + 300) status = "adiantado";
  return { esperado, porHora, status };
}

// Lembrete visual (dentro da página, nunca notificação):
// aparece se a meta não foi atingida, estamos entre 9h e 21h e faz mais de 2 h do último registro.
export function precisaLembrete({ registrosHoje, atingida, agora = new Date() }) {
  if (atingida) return null;
  const h = horaDecimal(agora);
  if (h < 9 || h >= 21) return null;
  if (!registrosHoje?.length) return { tipo: "sem_registro" };
  const ultimo = registrosHoje.reduce((m, r) => (r.registrado_em > m ? r.registrado_em : m), registrosHoje[0].registrado_em);
  const horas = (agora.getTime() - new Date(ultimo).getTime()) / 3_600_000;
  return horas >= 2 ? { tipo: "intervalo", horas: Math.floor(horas) } : null;
}

// Uma nova estimativa merece ser oferecida?
// Só quando os dados mudaram desde a última decisão (a estimativa de agora difere em pelo
// menos 100 ml da que existia quando a meta foi definida) E ela difere da meta em vigor.
// Assim, uma meta manual nunca é questionada só por ser diferente da estimativa.
const difere = (a, b) => Math.abs(a - b) >= 100;
export function deveOferecerEstimativa(metaAtual, sugestao) {
  if (!metaAtual || !sugestao || sugestao.provisoria) return false;
  const referencia = metaAtual.estimativa_ml ?? metaAtual.meta_ml;
  return difere(referencia, sugestao.meta_ml) && difere(metaAtual.meta_ml, sugestao.meta_ml);
}

// ---------- Validação e formatação ----------
export function validarQuantidade(valor) {
  const n = Math.round(Number(String(valor ?? "").replace(",", ".")));
  if (!Number.isFinite(n) || n < 10) return { ok: false, erro: "Informe pelo menos 10 ml." };
  if (n > REGISTRO_MAX) return { ok: false, erro: `Registre no máximo ${REGISTRO_MAX} ml por vez.` };
  return { ok: true, valor: n };
}

export function validarMeta(valor) {
  const n = arred50(Number(String(valor ?? "").replace(",", ".")));
  if (!Number.isFinite(n) || n < 1000 || n > 6000) return { ok: false, erro: "A meta deve ficar entre 1.000 e 6.000 ml." };
  return { ok: true, valor: n };
}

export const formatarMl = (ml) => `${Math.round(ml).toLocaleString("pt-BR")} ml`;
export const formatarLitros = (ml) =>
  `${(ml / 1000).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 2 })} L`;

export const formatarHora = (iso) =>
  new Date(iso).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

// Junta a data local do registro com um horário "HH:MM" digitado, no fuso do usuário
export function dataHoraLocal(dia, hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const d = fromISO(dia);
  d.setHours(h, m, 0, 0);
  return d.toISOString();
}

export const horaDoIso = (iso) => {
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};