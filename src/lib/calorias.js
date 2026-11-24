import { normalizar } from "../data/exercicios";

export const NIVEIS = [
  { id: "sedentario", nome: "Sedentário", desc: "pouco ou nenhum exercício", fator: 1.2 },
  { id: "leve", nome: "Leve", desc: "treina 1 a 3 dias por semana", fator: 1.375 },
  { id: "moderado", nome: "Moderado", desc: "treina 3 a 5 dias por semana", fator: 1.55 },
  { id: "intenso", nome: "Intenso", desc: "treina 6 a 7 dias por semana", fator: 1.725 },
  { id: "muito_intenso", nome: "Muito intenso", desc: "treino pesado diário ou trabalho braçal", fator: 1.9 },
];

export const OBJETIVOS = [
  { id: "perder", nome: "Perder gordura", ajuste: -0.15 },
  { id: "manter", nome: "Manter peso", ajuste: 0 },
  { id: "ganhar", nome: "Ganhar massa", ajuste: 0.1 },
];

export function calcularIdade(dataIso) {
  if (!dataIso) return null;
  const nascimento = new Date(`${dataIso}T00:00:00`);
  if (Number.isNaN(nascimento.getTime())) return null;
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const fezAniversario =
    hoje.getMonth() > nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() >= nascimento.getDate());
  if (!fezAniversario) idade--;
  return idade;
}

// Fórmula de Mifflin-St Jeor (taxa metabólica basal, em kcal/dia)
export function calcularTMB({ sexo, peso, altura, idade }) {
  const base = 10 * peso + 6.25 * altura - 5 * idade;
  return Math.round(sexo === "masculino" ? base + 5 : base - 161);
}

// Gasto diário total = TMB x fator do nível de atividade
export function calcularGastoDiario(tmb, nivelId) {
  const nivel = NIVEIS.find((n) => n.id === nivelId) ?? NIVEIS[2];
  return Math.round(tmb * nivel.fator);
}

// Meta diária ajustada ao objetivo, sem nunca ficar abaixo da TMB
export function calcularMeta(gasto, objetivoId, tmb) {
  const objetivo = OBJETIVOS.find((o) => o.id === objetivoId) ?? OBJETIVOS[1];
  return Math.max(Math.round(gasto * (1 + objetivo.ajuste)), tmb);
}

// Calorias = MET x peso (kg) x tempo (horas)
export function kcalPorMET(met, pesoKg, minutos) {
  return Math.round(met * pesoKg * (minutos / 60));
}

// Valores de MET aproximados (Compêndio de Atividades Físicas). A ordem importa.
const MET_CARDIO = [
  ["corrida intervalada", 10], ["esteira intervalada", 10], ["corrida estacionária", 8],
  ["esteira (corrida)", 9], ["corrida", 9], ["esteira inclinada", 6], ["caminhada", 3.5],
  ["spinning", 8.5], ["bicicleta", 6], ["ciclismo", 8], ["elíptico", 5], ["escada", 9],
  ["remo", 7], ["ski erg", 7], ["air bike", 8], ["pular corda", 11], ["burpee", 8],
  ["polichinelo", 8], ["mountain climber", 8], ["battle rope", 10], ["box jump", 8],
  ["slam ball", 8], ["trenó", 8], ["shadow boxing", 7], ["saco de pancada", 7],
  ["subida de ladeira", 7], ["natação", 7],
];

export const MET_FORCA = 5; // musculação intensidade moderada/alta
const MIN_POR_SERIE = 3; // tempo médio de uma série, contando o descanso

export function metDoCardio(nome) {
  const n = normalizar(nome);
  const achado = MET_CARDIO.find(([chave]) => n.includes(normalizar(chave)));
  return achado ? achado[1] : 6;
}

export function estimarGastoTreino(itens, pesoKg) {
  let cardio = 0;
  let forca = 0;
  for (const item of itens) {
    if (item.grupo === "cardio") {
      cardio += kcalPorMET(metDoCardio(item.exercicio), pesoKg, item.duracao_min ?? 0);
    } else {
      forca += kcalPorMET(MET_FORCA, pesoKg, (item.series ?? 0) * MIN_POR_SERIE);
    }
  }
  return { cardio, forca, total: cardio + forca };
}