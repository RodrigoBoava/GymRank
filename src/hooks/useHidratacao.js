import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "../lib/supabase.js";
import { useAuth } from "../context/AuthContext";
import { addDias, hojeISO } from "../lib/datas.js";
import {
  calcularMetaAgua, deveOferecerEstimativa, estatisticasSemana, metaDoDia, resumoDoDia, totalDoDia,
} from "../lib/hidratacao.js";

const ordenarRegistros = (a, b) => a.registrado_em.localeCompare(b.registrado_em);

// Acompanha a virada do dia no fuso do usuário (confere a cada minuto e ao voltar para a aba)
function useHoje() {
  const [hoje, setHoje] = useState(hojeISO());
  useEffect(() => {
    const conferir = () => setHoje((atual) => (atual === hojeISO() ? atual : hojeISO()));
    const t = setInterval(conferir, 60_000);
    document.addEventListener("visibilitychange", conferir);
    return () => {
      clearInterval(t);
      document.removeEventListener("visibilitychange", conferir);
    };
  }, []);
  return hoje;
}

// diasPlanejados vem do useFichas (dias da semana marcados nas fichas de treino)
export function useHidratacao({ diasPlanejados = [], fichasCarregando = false } = {}) {
  const { user } = useAuth();
  const uid = user?.id;
  const hoje = useHoje();

  const [registros, setRegistros] = useState([]);
  const [metas, setMetas] = useState([]);
  const [dadosCorpo, setDadosCorpo] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [primeiroDia, setPrimeiroDia] = useState(null);
  const [primeiraVez, setPrimeiraVez] = useState(false);
  const criandoMeta = useRef(false);

  const carregar = useCallback(async () => {
    if (!uid) return;
    const [r, m, p, inicio] = await Promise.all([
      supabase.from("hidratacao_registros").select("id,data,quantidade_ml,registrado_em")
        .gte("data", addDias(hoje, -6)).order("registrado_em"),
      supabase.from("hidratacao_metas").select("vigente_desde,meta_ml,origem,estimativa_ml").order("vigente_desde"),
      supabase.from("perfis").select("peso_kg,nivel_atividade").eq("user_id", uid).maybeSingle(),
      supabase.from("hidratacao_registros").select("data").order("data").limit(1).maybeSingle(),
    ]);
    if (r.error || m.error) {
      setErro("Não foi possível carregar sua hidratação. Tente atualizar a página.");
    } else {
      setRegistros(r.data ?? []);
      setMetas(m.data ?? []);
      setPrimeiroDia(inicio.data?.data ?? null);
      setErro("");
    }
    setDadosCorpo(p.data ?? {});
    setCarregando(false);
  }, [uid, hoje]);

  useEffect(() => {
    carregar();
  }, [carregar]);

  // Outro aparelho pode ter registrado água: recarrega ao voltar para a aba
  useEffect(() => {
    const aoVoltar = () => document.visibilityState === "visible" && carregar();
    document.addEventListener("visibilitychange", aoVoltar);
    return () => document.removeEventListener("visibilitychange", aoVoltar);
  }, [carregar]);

  // ----- Meta -----
  const sugestao = useMemo(
    () => calcularMetaAgua({
      peso_kg: dadosCorpo?.peso_kg,
      treinosPorSemana: diasPlanejados.length,
      nivel_atividade: dadosCorpo?.nivel_atividade,
    }),
    [dadosCorpo, diasPlanejados.length]
  );

  const metaAtual = metaDoDia(metas, hoje);
  const meta_ml = metaAtual?.meta_ml ?? sugestao.meta_ml;

  // Grava a meta a partir de hoje, junto com a estimativa do momento (para saber depois se os dados mudaram)
  const definirMeta = useCallback(async (valor, origem) => {
    const linha = { user_id: uid, vigente_desde: hoje, meta_ml: valor, origem, estimativa_ml: sugestao.meta_ml };
    const { error } = await supabase.from("hidratacao_metas").upsert(linha, { onConflict: "user_id,vigente_desde" });
    if (error) throw error;
    setMetas((a) => [...a.filter((x) => x.vigente_desde !== hoje), linha].sort((x, y) => x.vigente_desde.localeCompare(y.vigente_desde)));
  }, [uid, hoje, sugestao.meta_ml]);

  // Primeira visita: grava a estimativa como meta inicial (ela fica no histórico)
  const pronto = !carregando && !fichasCarregando && dadosCorpo != null && !erro;
  useEffect(() => {
    if (!pronto || metas.length > 0 || criandoMeta.current) return;
    criandoMeta.current = true;
    definirMeta(sugestao.meta_ml, "sugerida")
      .then(() => setPrimeiraVez(true))
      .catch(() => {})
      .finally(() => {
        criandoMeta.current = false;
      });
  }, [pronto, metas.length, sugestao.meta_ml, definirMeta]);

  // Nova estimativa (peso ou frequência mudaram): oferecida, nunca aplicada sozinha
  const novaEstimativa = pronto && deveOferecerEstimativa(metaAtual, sugestao) ? sugestao.meta_ml : null;

  const aceitarEstimativa = () => definirMeta(sugestao.meta_ml, "sugerida");
  // Manter: registra a decisão (mesma meta, estimativa atualizada), vale em todos os aparelhos
  const manterMeta = () => definirMeta(metaAtual.meta_ml, metaAtual.origem);

  // ----- Registros -----
  const registrosHoje = useMemo(() => registros.filter((r) => r.data === hoje), [registros, hoje]);
  const consumido = totalDoDia(registros, hoje);
  const resumo = resumoDoDia(consumido, meta_ml);

  const adicionar = async (ml) => {
    const antes = consumido;
    const { data, error } = await supabase.from("hidratacao_registros")
      .insert({ user_id: uid, data: hoje, quantidade_ml: ml, registrado_em: new Date().toISOString() })
      .select("id,data,quantidade_ml,registrado_em").single();
    if (error) throw error;
    setRegistros((a) => [...a, data].sort(ordenarRegistros));
    setPrimeiroDia((p) => (!p || data.data < p ? data.data : p));
    return { antes, depois: antes + ml };
  };

  const editar = async (id, campos) => {
    const { data, error } = await supabase.from("hidratacao_registros").update(campos).eq("id", id)
      .select("id,data,quantidade_ml,registrado_em").single();
    if (error) throw error;
    setRegistros((a) => a.map((x) => (x.id === id ? data : x)).sort(ordenarRegistros));
  };

  const excluir = async (id) => {
    const { error } = await supabase.from("hidratacao_registros").delete().eq("id", id);
    if (error) throw error;
    setRegistros((a) => a.filter((x) => x.id !== id));
  };

  const semana = useMemo(
    () => estatisticasSemana({ registros, metas, hoje, metaPadrao: meta_ml, primeiroDia }),
    [registros, metas, hoje, meta_ml, primeiroDia]
  );

  return {
    hoje, carregando: carregando || fichasCarregando, erro,
    sugestao, metaAtual, meta_ml, resumo, registrosHoje, semana,
    primeiraVez, dispensarBoasVindas: () => setPrimeiraVez(false),
    novaEstimativa, aceitarEstimativa, manterMeta, definirMeta,
    adicionar, editar, excluir, recarregar: carregar,
  };
}