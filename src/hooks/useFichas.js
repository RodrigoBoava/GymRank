import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase.js";
import { useAuth } from "../context/AuthContext";
import { ehUnilateral, tipoCargaDoExercicio } from "../lib/cargas.js";
import { equipamentoDoExercicio } from "../lib/catalogo";

const ordenar = (a, b) => a.ordem - b.ordem || String(a.criado_em).localeCompare(String(b.criado_em));

export function useFichas() {
  const { user } = useAuth();
  const [fichas, setFichas] = useState([]);
  const [itens, setItens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const carregar = useCallback(async () => {
    if (!user) return;
    const [f, e] = await Promise.all([
      supabase.from("fichas").select("*").order("ordem").order("criado_em"),
      supabase.from("ficha_exercicios").select("*").order("ordem").order("criado_em"),
    ]);
    if (f.error || e.error) {
      setErro("Não foi possível carregar suas fichas. Confira se o SQL da Fase 1 foi executado no Supabase.");
    } else {
      setFichas(f.data ?? []);
      setItens(e.data ?? []);
      setErro("");
    }
    setCarregando(false);
  }, [user]);

  useEffect(() => {
    carregar();
  }, [carregar]);

  const itensDaFicha = useCallback(
    (fichaId) => itens.filter((i) => i.ficha_id === fichaId).sort(ordenar),
    [itens]
  );

  const diasPlanejados = useMemo(() => [...new Set(fichas.flatMap((f) => f.dias_semana ?? []))], [fichas]);

  // ----- Fichas -----
  const criarFicha = async ({ nome, descricao, dias_semana }) => {
    const { data, error } = await supabase
      .from("fichas")
      .insert({ user_id: user.id, nome: nome.trim(), descricao: descricao?.trim() || null, dias_semana, ordem: fichas.length })
      .select().single();
    if (error) throw error;
    setFichas((a) => [...a, data]);
    return data;
  };

  const atualizarFicha = async (id, campos) => {
    const { data, error } = await supabase.from("fichas").update(campos).eq("id", id).select().single();
    if (error) throw error;
    setFichas((a) => a.map((x) => (x.id === id ? data : x)));
  };

  const excluirFicha = async (id) => {
    const { error } = await supabase.from("fichas").delete().eq("id", id);
    if (error) throw error;
    setFichas((a) => a.filter((x) => x.id !== id));
    setItens((a) => a.filter((x) => x.ficha_id !== id));
  };

  // ----- Exercícios da ficha -----
  const adicionarExercicio = async (fichaId, grupoId, nome) => {
    const doGrupo = itens.filter((i) => i.ficha_id === fichaId);
    const tipo = tipoCargaDoExercicio(nome, equipamentoDoExercicio(nome), grupoId);
    const linha = {
      user_id: user.id, ficha_id: fichaId, grupo: grupoId, exercicio: nome, tipo_carga: tipo,
      unilateral: tipo === "cardio" ? false : ehUnilateral(nome),
      ordem: doGrupo.length ? Math.max(...doGrupo.map((i) => i.ordem)) + 1 : 0,
      ...(tipo === "cardio" ? { series: 1, repeticoes: 1, duracao_min: 20 } : {}),
    };
    const { data, error } = await supabase.from("ficha_exercicios").insert(linha).select().single();
    if (error) throw error;
    setItens((a) => [...a, data]);
    return data;
  };

  const editarLocal = (id, campos) => setItens((a) => a.map((i) => (i.id === id ? { ...i, ...campos } : i)));

  const persistirExercicio = async (id, campos) => {
    const { error } = await supabase.from("ficha_exercicios").update(campos).eq("id", id);
    if (error) throw error;
  };

  // Para selects e caixas de marcar: atualiza a tela e salva na hora
  const atualizarExercicio = async (id, campos) => {
    editarLocal(id, campos);
    await persistirExercicio(id, campos);
  };

  // Para campos numéricos: edita na tela enquanto digita e salva ao sair do campo
  const salvarExercicio = (id) => {
    const i = itens.find((x) => x.id === id);
    if (!i) return Promise.resolve();
    return persistirExercicio(id, {
      series: i.series, repeticoes: i.repeticoes, descanso_seg: i.descanso_seg, duracao_min: i.duracao_min,
    });
  };

  const removerExercicio = async (id) => {
    const { error } = await supabase.from("ficha_exercicios").delete().eq("id", id);
    if (error) throw error;
    setItens((a) => a.filter((i) => i.id !== id));
  };

  const moverExercicio = async (fichaId, id, delta) => {
    const lista = itens.filter((i) => i.ficha_id === fichaId).sort(ordenar);
    const i = lista.findIndex((x) => x.id === id);
    const j = i + delta;
    if (i < 0 || j < 0 || j >= lista.length) return;
    const nova = [...lista];
    [nova[i], nova[j]] = [nova[j], nova[i]];
    const mudancas = nova.map((x, idx) => ({ id: x.id, ordem: idx })).filter((x) => lista.find((l) => l.id === x.id).ordem !== x.ordem);
    setItens((a) => a.map((x) => mudancas.find((m) => m.id === x.id) ? { ...x, ordem: mudancas.find((m) => m.id === x.id).ordem } : x));
    const resultados = await Promise.all(mudancas.map((m) => supabase.from("ficha_exercicios").update({ ordem: m.ordem }).eq("id", m.id)));
    if (resultados.some((r) => r.error)) throw new Error("Falha ao reordenar");
  };

  return {
    fichas, itens, carregando, erro, recarregar: carregar, itensDaFicha, diasPlanejados,
    criarFicha, atualizarFicha, excluirFicha,
    adicionarExercicio, editarLocal, atualizarExercicio, salvarExercicio, removerExercicio, moverExercicio,
  };
}
