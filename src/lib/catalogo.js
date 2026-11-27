import { GRUPOS } from "../data/exercicios";
import { DESCRICOES } from "../data/descricoes";

// Índice do catálogo: (grupo + nome) -> grupo e subdivisão anatômica
const indice = new Map();
for (const g of GRUPOS) {
  for (const s of g.subgrupos) {
    for (const nome of s.exercicios) indice.set(`${g.id}|${nome}`, { grupoId: g.id, grupo: g.nome, subgrupo: s.nome, nome });
  }
}

export function infoDoExercicio(grupoId, nome) {
  return indice.get(`${grupoId}|${nome}`) ?? { grupoId, grupo: grupoId, subgrupo: "", nome };
}

export const equipamentoDoExercicio = (nome) => DESCRICOES[nome]?.equipamento ?? "";

export const nomeDoGrupo = (grupoId) => GRUPOS.find((g) => g.id === grupoId)?.nome ?? grupoId;
