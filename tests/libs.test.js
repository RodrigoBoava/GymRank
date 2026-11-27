import test from "node:test";
import assert from "node:assert/strict";
import { num, calcularCargaTotal, e1rm, tipoCargaDoExercicio, ehUnilateral } from "../src/lib/cargas.js";
import { detectarRecordes, resumirSessoes, melhoresMarcas, calcularMarcas } from "../src/lib/recordes.js";
import { gradeDoMes, estatisticasFrequencia, nivelConsistencia } from "../src/lib/frequencia.js";
import { addDias, inicioDaSemana, diaDaSemanaId, toISO, fromISO } from "../src/lib/datas.js";

test("num aceita vírgula e rejeita lixo", () => {
  assert.equal(num("22,5"), 22.5);
  assert.equal(num("22.5"), 22.5);
  assert.equal(num(""), null);
  assert.equal(num("abc"), null);
  assert.equal(num(null), null);
});

test("carga total: halteres, barra, máquina, peso corporal", () => {
  assert.equal(calcularCargaTotal({ tipo: "halter", valor: "20" }), 40); // 20 kg em cada mão
  assert.equal(calcularCargaTotal({ tipo: "halter", unilateral: true, valor: "20" }), 20);
  assert.equal(calcularCargaTotal({ tipo: "halter", valor: "22,5" }), 45);
  assert.equal(calcularCargaTotal({ tipo: "barra", usarLado: true, valor: "20", pesoBarra: "20" }), 60); // exemplo do enunciado
  assert.equal(calcularCargaTotal({ tipo: "barra", usarLado: true, valor: "10", pesoBarra: "15" }), 35);
  assert.equal(calcularCargaTotal({ tipo: "barra", valor: "60" }), 60);
  assert.equal(calcularCargaTotal({ tipo: "maquina", valor: "80" }), 80);
  assert.equal(calcularCargaTotal({ tipo: "peso_corporal", valor: "" }), 0);
  assert.equal(calcularCargaTotal({ tipo: "peso_corporal", valor: "10" }), 10);
});

test("carga total: entradas inválidas viram null", () => {
  assert.equal(calcularCargaTotal({ tipo: "maquina", valor: "" }), null);
  assert.equal(calcularCargaTotal({ tipo: "maquina", valor: "-5" }), null);
  assert.equal(calcularCargaTotal({ tipo: "halter", valor: "abc" }), null);
  assert.equal(calcularCargaTotal({ tipo: "maquina", valor: "5000" }), null);
  assert.equal(calcularCargaTotal({ tipo: "barra", usarLado: true, valor: "20", pesoBarra: "x" }), null);
});

test("1RM estimado (Epley)", () => {
  assert.equal(e1rm(100, 1), 100);
  assert.equal(e1rm(100, 10), 133.3);
  assert.equal(e1rm(100, 13), null); // acima de 12 reps não é confiável
  assert.equal(e1rm(0, 5), null);
  assert.equal(e1rm(60, 0), null);
});

test("tipo de carga sugerido a partir do equipamento", () => {
  const t = tipoCargaDoExercicio;
  assert.equal(t("Supino reto com barra", "Barra e banco reto"), "barra");
  assert.equal(t("Supino reto com halteres", "Halteres e banco reto"), "halter");
  assert.equal(t("Leg press 45°", "Máquina de leg press 45°"), "maquina");
  assert.equal(t("Puxada frontal pegada aberta", "Polia alta com barra reta"), "maquina");
  assert.equal(t("Barra fixa pronada", "Barra fixa"), "peso_corporal");
  assert.equal(t("Barra fixa com peso", "Barra fixa e cinto de lastro (ou colete com peso)"), "peso_corporal");
  assert.equal(t("Barra fixa assistida na máquina", "Máquina de barra fixa assistida"), "maquina");
  assert.equal(t("Flexão de braço tradicional", "Peso corporal"), "peso_corporal");
  assert.equal(t("Afundo (passada estacionária)", "Peso corporal, halteres ou barra"), "halter");
  assert.equal(t("Agachamento no Smith", "Smith machine"), "barra");
  assert.equal(t("Mergulho nas paralelas (foco em peito)", "Barras paralelas"), "peso_corporal");
  assert.equal(t("Remada baixa no cabo (triângulo)", "Polia baixa com pegador triangular"), "maquina");
  assert.equal(t("Supino no chão (floor press)", "Barra ou halteres e o chão"), "barra");
  assert.equal(t("Esteira (corrida)", "Esteira", "cardio"), "cardio");
  assert.equal(t("Qualquer coisa", ""), "maquina");
});

test("exercícios unilaterais", () => {
  assert.equal(ehUnilateral("Remada unilateral com halter (serrote)"), true);
  assert.equal(ehUnilateral("Rosca concentrada"), true);
  assert.equal(ehUnilateral("Tríceps coice com halter"), true);
  assert.equal(ehUnilateral("Supino reto com barra"), false);
  assert.equal(ehUnilateral("Afundo (passada estacionária)"), false);
});

const s = (carga, reps) => ({ carga_total_kg: carga, repeticoes: reps });

test("recordes: a primeira sessão cria a base e não gera recorde", () => {
  assert.deepEqual(detectarRecordes([], [s(40, 10), s(50, 8), s(60, 5)]), []);
});

test("recordes: carga e 1RM superados (exemplo 50 -> 55 kg)", () => {
  const ev = detectarRecordes([s(50, 10)], [s(55, 8)]);
  const carga = ev.find((e) => e.tipo === "carga");
  assert.equal(carga.valor, 55);
  assert.equal(carga.anterior, 50);
  assert.ok(ev.find((e) => e.tipo === "e1rm"));
  assert.equal(ev.find((e) => e.tipo === "repeticoes"), undefined); // 55 kg é carga nova
});

test("recordes: maior carga NÃO é automaticamente melhor 1RM", () => {
  const ev = detectarRecordes([s(50, 12)], [s(60, 1)]); // e1rm 70 antes; 60 agora
  assert.ok(ev.find((e) => e.tipo === "carga"));
  assert.equal(ev.find((e) => e.tipo === "e1rm"), undefined);
});

test("recordes: repetições com a mesma carga", () => {
  const ev = detectarRecordes([s(60, 5)], [s(60, 6)]);
  const r = ev.find((e) => e.tipo === "repeticoes");
  assert.deepEqual([r.valor, r.anterior, r.carga_ref_kg], [6, 5, 60]);
  assert.equal(ev.find((e) => e.tipo === "carga"), undefined);
});

test("recordes: séries repetidas na mesma sessão não duplicam o evento", () => {
  const ev = detectarRecordes([s(50, 10)], [s(60, 5), s(60, 5), s(60, 5)]);
  assert.equal(ev.filter((e) => e.tipo === "carga").length, 1);
});

test("recordes: carga nova na sessão não gera recorde de repetições", () => {
  const ev = detectarRecordes([s(50, 10)], [s(60, 5), s(60, 8)]);
  assert.equal(ev.find((e) => e.tipo === "repeticoes"), undefined);
});

test("recordes: peso corporal (carga 0) só tem recorde de repetições", () => {
  const ev = detectarRecordes([s(0, 10)], [s(0, 12)]);
  assert.equal(ev.length, 1);
  assert.deepEqual([ev[0].tipo, ev[0].valor, ev[0].carga_ref_kg], ["repeticoes", 12, 0]);
});

test("recordes: histórico só com 15+ reps não gera 1RM", () => {
  const ev = detectarRecordes([s(40, 15)], [s(40, 16)]);
  assert.deepEqual(ev.map((e) => e.tipo), ["repeticoes"]);
});

test("sessões e melhores marcas", () => {
  const regs = [
    { data: "2026-11-01", ...s(50, 10) }, { data: "2026-11-01", ...s(50, 8) },
    { data: "2026-11-08", ...s(55, 8) }, { data: "2026-11-08", ...s(60, 3) },
  ];
  const sessoes = resumirSessoes(regs);
  assert.equal(sessoes.length, 2);
  assert.equal(sessoes[0].series, 2);
  assert.equal(sessoes[0].volume, 50 * 10 + 50 * 8);
  assert.equal(sessoes[1].cargaMax, 60);
  const m = melhoresMarcas(regs);
  assert.equal(m.cargaMax.valor, 60);
  assert.equal(m.maisReps.reps, 10);
  assert.equal(m.repsPorCarga[0].carga, 60);
  assert.equal(calcularMarcas(regs).cargaMax, 60);
});

test("datas locais", () => {
  assert.equal(addDias("2026-11-30", 1), "2026-12-01");
  assert.equal(addDias("2026-03-01", -1), "2026-02-28");
  assert.equal(diaDaSemanaId("2026-11-26"), "qui");
  assert.equal(inicioDaSemana("2026-11-26"), "2026-11-22");
  assert.equal(toISO(fromISO("2026-02-05")), "2026-02-05");
});

test("grade do calendário (novembro de 2026 começa em um domingo)", () => {
  const g = gradeDoMes(2026, 10);
  assert.equal(g.length % 7, 0);
  assert.equal(g[0], "2026-11-01");
  assert.equal(g.filter(Boolean).length, 30);
  const jan = gradeDoMes(2027, 0); // 1/1/2027 é uma sexta
  assert.equal(jan.indexOf("2027-01-01"), 5);
});

const reg = (data, status) => ({ data, status });
const hoje = "2026-11-26"; // quinta-feira

test("frequência: porcentagens, faltas, descansos e sequência", () => {
  const registros = [
    reg("2026-11-02", "treinou"), reg("2026-11-04", "treinou"), reg("2026-11-06", "treinou"),
    reg("2026-11-09", "treinou"), reg("2026-11-11", "faltou"), reg("2026-11-13", "treinou"),
    reg("2026-11-16", "descanso"), reg("2026-11-18", "treinou"), reg("2026-11-20", "treinou"),
    reg("2026-11-23", "treinou"), reg("2026-11-25", "treinou"),
  ];
  const e = estatisticasFrequencia({ registros, diasPlanejados: ["seg", "qua", "sex"], hoje, mes: "2026-11" });
  assert.equal(e.treinosMes, 9);
  assert.equal(e.faltasMes, 1);
  assert.equal(e.descansosMes, 1);
  assert.equal(e.percentualMes, 90); // 9 treinos / 10 dias planejados (a segunda 16 foi descanso)
  assert.equal(e.treinosSemana, 2);
  assert.equal(e.percentualSemana, 67); // 2 de 3 dias planejados da semana
  assert.equal(e.sequencia, 1); // hoje ainda sem marcação; ontem treinou; anteontem não
  assert.equal(e.percentual28, 82);
  assert.equal(e.nivel.id, "alta");
  assert.equal(e.historicoMeses[0].mes, "2026-11");
  assert.equal(e.semanas.length, 12);
  assert.equal(e.semanas[11].treinos, 2);
});

test("frequência: treino extra não esconde falta no plano", () => {
  const registros = [reg("2026-11-23", "faltou"), reg("2026-11-24", "treinou"), reg("2026-11-25", "treinou")];
  const e = estatisticasFrequencia({ registros, diasPlanejados: ["seg", "qua"], hoje, mes: "2026-11" });
  assert.equal(e.treinosMes, 2);
  assert.equal(e.percentualMes < 100, true);
});

test("frequência: descanso não quebra a sequência", () => {
  const registros = [reg("2026-11-26", "treinou"), reg("2026-11-25", "descanso"), reg("2026-11-24", "treinou"), reg("2026-11-23", "faltou")];
  const e = estatisticasFrequencia({ registros, diasPlanejados: [], hoje, mes: "2026-11" });
  assert.equal(e.sequencia, 2);
});

test("frequência: sem dias planejados não inventa porcentagem", () => {
  const e = estatisticasFrequencia({ registros: [reg("2026-11-25", "treinou")], diasPlanejados: [], hoje, mes: "2026-11" });
  assert.equal(e.percentualMes, null);
  assert.equal(e.nivel.id, "sem_plano");
  assert.equal(nivelConsistencia(35).id, "baixa");
  assert.equal(nivelConsistencia(65).id, "boa");
});
