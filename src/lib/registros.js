import { supabase } from "./supabase.js";
import { detectarRecordes } from "./recordes.js";

export async function buscarHistorico(exercicio) {
  const { data, error } = await supabase
    .from("registros_carga")
    .select("*")
    .eq("exercicio", exercicio)
    .order("data", { ascending: false })
    .order("serie_num")
    .limit(1000);
  if (error) throw error;
  return data ?? [];
}

// Salva a sessão de um exercício, detecta recordes e marca o dia como "treinou".
// series: [{ serie_num, lado, repeticoes, carga_total_kg, carga_por_halter_kg?, carga_por_lado_kg?, peso_barra_kg?, duracao_min? }]
export async function salvarSessao({ userId, exercicio, grupo, fichaId = null, data, tipo, series }) {
  // Recorde = superar o que existia ANTES desta data
  const anteriores = tipo === "cardio" ? [] : (await buscarHistorico(exercicio)).filter((r) => r.data < data);

  const linhas = series.map((s) => ({
    user_id: userId, exercicio, grupo, ficha_id: fichaId, data, tipo_carga: tipo, ...s,
  }));
  const { error } = await supabase
    .from("registros_carga")
    .upsert(linhas, { onConflict: "user_id,exercicio,data,serie_num,lado" });
  if (error) throw error;

  const lados = [...new Set(series.map((s) => s.lado))];

  // Se o usuário reduziu o número de séries ao editar, remove as que sobraram
  for (const lado of lados) {
    const maior = Math.max(...series.filter((s) => s.lado === lado).map((s) => s.serie_num));
    const { error: e } = await supabase
      .from("registros_carga").delete()
      .eq("user_id", userId).eq("exercicio", exercicio).eq("data", data).eq("lado", lado).gt("serie_num", maior);
    if (e) throw e;
  }

  // Recordes (limpa os do mesmo dia para não duplicar quando a sessão é editada)
  const eventos = [];
  for (const lado of lados) {
    const novos = detectarRecordes(
      anteriores.filter((r) => r.lado === lado),
      series.filter((s) => s.lado === lado)
    );
    for (const ev of novos) eventos.push({ ...ev, lado });
  }
  const { error: eDel } = await supabase
    .from("recordes").delete().eq("user_id", userId).eq("exercicio", exercicio).eq("data", data);
  if (eDel) throw eDel;
  if (eventos.length) {
    const { error: eIns } = await supabase.from("recordes").insert(
      eventos.map((ev) => ({ user_id: userId, exercicio, data, ...ev }))
    );
    if (eIns) throw eIns;
  }

  // Frequência: treinar marca o dia como "treinou" (mesmo que estivesse como falta ou descanso)
  const { error: eFreq } = await supabase
    .from("frequencia")
    .upsert({ user_id: userId, data, status: "treinou", ficha_id: fichaId }, { onConflict: "user_id,data" });
  if (eFreq) throw eFreq;

  return { eventos };
}
