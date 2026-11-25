import { GRUPOS } from "../exercicios";
import { DESCRICOES_PEITO } from "./peito";

export const DESCRICOES = {
  ...DESCRICOES_PEITO,
  // próximos grupos entram aqui
};

// Para conferir o que falta: no console do navegador, import e rode exerciciosSemDescricao()
export function exerciciosSemDescricao() {
  return GRUPOS.flatMap((g) => g.subgrupos.flatMap((s) => s.exercicios)).filter((nome) => !DESCRICOES[nome]);
}