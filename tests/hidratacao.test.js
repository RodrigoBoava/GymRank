import test from "node:test";
import assert from "node:assert/strict";
import {
  calcularMetaAgua, metaDoDia, resumoDoDia, cruzouAMeta, estatisticasSemana, ritmoDoDia, precisaLembrete,
  deveOferecerEstimativa, validarQuantidade, validarMeta, totalDoDia, nivelHidratacao,
} from "../src/lib/hidratacao.js";

test("meta: 35 ml/kg + treinos distribuídos na semana", () => {
  // 70 kg, sem treino: 2450 ml
  assert.equal(calcularMetaAgua({ peso_kg: 70 }).meta_ml, 2450);
  // 70 kg, 4 treinos: 2450 + 4*500/7 (285,7) = 2735,7 -> 2750
  const m = calcularMetaAgua({ peso_kg: 70, treinosPorSemana: 4 });
  assert.equal(m.meta_ml, 2750);
  assert.equal(m.fonteSessoes, "ficha");
  assert.equal(m.provisoria, false);
});

test("meta: usa o nível de atividade só quando não há fichas", () => {
  assert.equal(calcularMetaAgua({ peso_kg: 70, nivel_atividade: "moderado" }).sessoes, 4);
  assert.equal(calcularMetaAgua({ peso_kg: 70, nivel_atividade: "moderado" }).fonteSessoes, "nivel");
  assert.equal(calcularMetaAgua({ peso_kg: 70, treinosPorSemana: 2, nivel_atividade: "intenso" }).sessoes, 2);
});

test("meta: limites e valor provisório sem peso", () => {
  assert.equal(calcularMetaAgua({ peso_kg: 140, treinosPorSemana: 7 }).meta_ml, 4000); // não sugere excesso
  assert.equal(calcularMetaAgua({ peso_kg: 38 }).meta_ml, 1500);
  const p = calcularMetaAgua({});
  assert.equal(p.meta_ml, 2000);
  assert.equal(p.provisoria, true);
  assert.equal(calcularMetaAgua({ peso_kg: "abc" }).provisoria, true);
});

test("meta do dia respeita o histórico", () => {
  const metas = [
    { vigente_desde: "2026-11-01", meta_ml: 2500 },
    { vigente_desde: "2026-11-20", meta_ml: 3000 },
  ];
  assert.equal(metaDoDia(metas, "2026-10-31"), null);
  assert.equal(metaDoDia(metas, "2026-11-19").meta_ml, 2500);
  assert.equal(metaDoDia(metas, "2026-11-20").meta_ml, 3000);
  assert.equal(metaDoDia(metas, "2026-12-05").meta_ml, 3000);
});

test("resumo do dia e excesso", () => {
  const r = resumoDoDia(1750, 3000);
  assert.deepEqual([r.restante, r.pct, r.atingida], [1250, 58, false]); // exemplo do enunciado
  const ok = resumoDoDia(3200, 3000);
  assert.equal(ok.pct, 100);
  assert.equal(ok.pctReal, 107);
  assert.equal(ok.restante, 0);
  assert.equal(ok.atingida, true);
  assert.equal(ok.acimaDoRecomendavel, false);
  assert.equal(resumoDoDia(4500, 3000).acimaDoRecomendavel, true);
});

test("comemoração só ao cruzar os 100%", () => {
  assert.equal(cruzouAMeta(2800, 3050, 3000), true);
  assert.equal(cruzouAMeta(3000, 3250, 3000), false); // já tinha atingido
  assert.equal(cruzouAMeta(1000, 1250, 3000), false);
});

test("estatísticas da semana com meta variável e dias anteriores ao início", () => {
  const hoje = "2026-11-27";
  const registros = [
    { data: "2026-11-25", quantidade_ml: 1500 }, { data: "2026-11-25", quantidade_ml: 1100 },
    { data: "2026-11-26", quantidade_ml: 2000 },
    { data: "2026-11-27", quantidade_ml: 500 },
  ];
  const metas = [{ vigente_desde: "2026-11-25", meta_ml: 2500 }, { vigente_desde: "2026-11-27", meta_ml: 3000 }];
  const s = estatisticasSemana({ registros, metas, hoje, metaPadrao: 3000 });
  assert.equal(s.dias.length, 7);
  assert.equal(s.dias[0].data, "2026-11-21");
  assert.equal(s.diasConsiderados, 3); // começou dia 25
  assert.equal(s.diasMeta, 1); // só o dia 25 (2600 >= 2500)
  assert.equal(s.media, Math.round((2600 + 2000 + 500) / 3));
  assert.equal(s.dias[6].meta_ml, 3000);
  assert.equal(totalDoDia(registros, "2026-11-25"), 2600);
  // começou antes da janela: todos os 7 dias contam
  assert.equal(estatisticasSemana({ registros, metas, hoje, primeiroDia: "2026-11-01" }).diasConsiderados, 7);
  assert.equal(estatisticasSemana({ registros: [], metas, hoje }).consistencia.id, "sem_dados");
  assert.equal(nivelHidratacao(100).id, "alta");
});

test("ritmo ao longo do dia", () => {
  const meio = new Date(2026, 10, 27, 14, 30); // metade da janela 7h–22h
  assert.equal(ritmoDoDia({ meta_ml: 3000, consumido: 1500, agora: meio }).status, "no_ritmo");
  assert.equal(ritmoDoDia({ meta_ml: 3000, consumido: 500, agora: meio }).status, "atrasado");
  assert.equal(ritmoDoDia({ meta_ml: 3000, consumido: 2500, agora: meio }).status, "adiantado");
  assert.equal(ritmoDoDia({ meta_ml: 3000, consumido: 0, agora: new Date(2026, 10, 27, 6) }).status, "cedo");
  assert.equal(ritmoDoDia({ meta_ml: 3000, consumido: 3000, agora: meio }).status, "concluido");
  assert.equal(ritmoDoDia({ meta_ml: 3000, consumido: 1000, agora: new Date(2026, 10, 27, 23) }).status, "fim_do_dia");
  assert.equal(ritmoDoDia({ meta_ml: 3000, consumido: 0, agora: meio }).porHora, 200);
});

test("lembrete visual só em horário razoável e após 2 h", () => {
  const agora = new Date(2026, 10, 27, 15, 0);
  const r = (h) => ({ registrado_em: new Date(2026, 10, 27, h, 0).toISOString() });
  assert.equal(precisaLembrete({ registrosHoje: [], atingida: false, agora }).tipo, "sem_registro");
  assert.equal(precisaLembrete({ registrosHoje: [r(10), r(12)], atingida: false, agora }).horas, 3);
  assert.equal(precisaLembrete({ registrosHoje: [r(14)], atingida: false, agora }), null);
  assert.equal(precisaLembrete({ registrosHoje: [], atingida: true, agora }), null);
  assert.equal(precisaLembrete({ registrosHoje: [], atingida: false, agora: new Date(2026, 10, 27, 23) }), null);
});

test("nova estimativa só quando os dados mudam, e nunca contra meta manual sem mudança", () => {
  const sug = (meta_ml) => ({ meta_ml, provisoria: false });
  // meta manual 3500, estimativa da época 2750, dados não mudaram: não oferece
  assert.equal(deveOferecerEstimativa({ meta_ml: 3500, origem: "manual", estimativa_ml: 2750 }, sug(2750)), false);
  // peso subiu: estimativa 2950 -> oferece
  assert.equal(deveOferecerEstimativa({ meta_ml: 3500, origem: "manual", estimativa_ml: 2750 }, sug(2950)), true);
  // diferença pequena: não incomoda
  assert.equal(deveOferecerEstimativa({ meta_ml: 2750, estimativa_ml: 2750 }, sug(2800)), false);
  // estimativa nova coincide com a meta atual: não oferece
  assert.equal(deveOferecerEstimativa({ meta_ml: 3000, estimativa_ml: 2750 }, sug(3000)), false);
  assert.equal(deveOferecerEstimativa({ meta_ml: 2000, estimativa_ml: 2000 }, { meta_ml: 2000, provisoria: true }), false);
  assert.equal(deveOferecerEstimativa(null, sug(3000)), false);
});

test("validação de quantidade e meta", () => {
  assert.deepEqual(validarQuantidade("300"), { ok: true, valor: 300 });
  assert.equal(validarQuantidade("5").ok, false);
  assert.equal(validarQuantidade("2500").ok, false);
  assert.equal(validarQuantidade("").ok, false);
  assert.deepEqual(validarMeta("2730"), { ok: true, valor: 2750 });
  assert.equal(validarMeta("800").ok, false);
  assert.equal(validarMeta("7000").ok, false);
});