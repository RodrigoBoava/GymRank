import { GRUPOS } from "../exercicios";
import { DESCRICOES_PEITO } from "./peito";
import { DESCRICOES_PERNA } from "./perna";
import { DESCRICOES_COSTAS } from "./costas";
import { DESCRICOES_OMBRO } from "./ombro";
import { DESCRICOES_BICEPS } from "./biceps";
import { DESCRICOES_TRICEPS } from "./triceps";
import { DESCRICOES_ANTEBRACO } from "./antebraco";
import { DESCRICOES_ABDOMEN } from "./abdomen";
import { DESCRICOES_CARDIO } from "./cardio";

// Todas as descrições, indexadas pelo nome do exercício (igual ao nome em exercicios.js)
export const DESCRICOES = {
  ...DESCRICOES_PEITO,
  ...DESCRICOES_PERNA,
  ...DESCRICOES_COSTAS,
  ...DESCRICOES_OMBRO,
  ...DESCRICOES_BICEPS,
  ...DESCRICOES_TRICEPS,
  ...DESCRICOES_ANTEBRACO,
  ...DESCRICOES_ABDOMEN,
  ...DESCRICOES_CARDIO,
};

// Para conferir o que falta: devolve os nomes de exercícios do catálogo que ainda não têm descrição
export function exerciciosSemDescricao() {
  return GRUPOS.flatMap((g) => g.subgrupos.flatMap((s) => s.exercicios)).filter((nome) => !DESCRICOES[nome]);
}