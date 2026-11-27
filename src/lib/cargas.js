// Regras de carga: tipo do exercício, carga total, 1RM estimado

export const TIPOS_CARGA = [
  { id: "halter", nome: "Halteres" },
  { id: "barra", nome: "Barra" },
  { id: "maquina", nome: "Máquina / carga total" },
  { id: "peso_corporal", nome: "Peso corporal" },
  { id: "cardio", nome: "Cardio (tempo)" },
];

export const PESO_BARRA_PADRAO = 20;

const norm = (t) => String(t ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// Aceita "22,5" e "22.5"; devolve null quando vazio ou inválido
export function num(v) {
  if (v === "" || v == null) return null;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

export const arredondar = (x) => Math.round(x * 100) / 100;

const UNILATERAL =
  /unilateral|serrote|concentrada|pistol|meadows|landmine press|bayesian|coice|rotacao (externa|interna)|abducao de quadril|aducao de quadril|deitado de lado|hidrante|scott com halteres/;

export function ehUnilateral(nome) {
  return UNILATERAL.test(norm(nome));
}

// Sugere o tipo de carga a partir do equipamento (descrição do exercício) e do nome
export function tipoCargaDoExercicio(nome, equipamento = "", grupoId = "") {
  if (grupoId === "cardio") return "cardio";
  const eq = norm(equipamento);
  const texto = `${eq} ${norm(nome)}`;

  if (/assistid/.test(texto)) return "maquina";

  const fixo = /barra fixa|paralelas|trx|roda abdominal|suspensao/.test(eq);
  const semFixa = eq.replace(/barra fixa|barras paralelas/g, "");
  const livre = /halter|kettlebell|anilha|\bbarra\b|smith/.test(semFixa);
  if (fixo || (/peso corporal/.test(eq) && !livre)) return "peso_corporal";

  if (/polia|cabo|maquina/.test(eq)) return "maquina";

  const iHalter = eq.search(/halter|kettlebell/);
  const iBarra = eq.search(/\bbarra\b|smith|rack/);
  if (iHalter >= 0 && (iBarra < 0 || iHalter < iBarra)) return "halter";
  if (iBarra >= 0) return "barra";
  return "maquina";
}

// Calcula a carga total levantada (kg). Devolve null quando os dados estão incompletos ou inválidos.
// - halter: valor de cada halter; total = 2x (ou 1x quando o exercício é unilateral)
// - barra: total direto, ou (peso da barra + 2 x carga de cada lado)
// - maquina: carga total indicada
// - peso_corporal: carga extra (vazio = 0)
export function calcularCargaTotal({ tipo, unilateral = false, valor, usarLado = false, pesoBarra = PESO_BARRA_PADRAO }) {
  const v = num(valor);
  let total;
  if (tipo === "peso_corporal") {
    total = valor === "" || valor == null ? 0 : v;
  } else if (v == null) {
    return null;
  } else if (tipo === "halter") {
    total = unilateral ? v : v * 2;
  } else if (tipo === "barra" && usarLado) {
    const barra = num(pesoBarra);
    if (barra == null || barra < 0) return null;
    total = barra + 2 * v;
  } else {
    total = v;
  }
  if (total == null || total < 0 || total > 2000) return null;
  return arredondar(total);
}

// 1RM estimado (fórmula de Epley). Só é confiável até ~12 repetições; acima disso devolve null.
export function e1rm(carga, reps) {
  const c = Number(carga);
  const r = Number(reps);
  if (!(c > 0) || !(r >= 1) || r > 12) return null;
  return r === 1 ? arredondar(c) : Math.round(c * (1 + r / 30) * 10) / 10;
}

export const formatarKg = (kg) =>
  kg == null ? "—" : `${String(arredondar(kg)).replace(".", ",")} kg`;
