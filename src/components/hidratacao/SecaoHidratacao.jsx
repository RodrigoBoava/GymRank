import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BellRing, CalendarCheck, Check, Clock, Droplet, Droplets, GlassWater, Info, Loader2, Pencil, Plus, RefreshCw, Sparkles, TrendingUp, X,
} from "lucide-react";
import { useHidratacao } from "../../hooks/useHidratacao";
import { useToast } from "../Toast";
import CopoOndas from "./CopoOndas";
import GraficoSemanal from "./GraficoSemanal";
import MetaAlcancada from "./MetaAlcancada";
import { FolhaMeta, FolhaRegistro } from "./FolhasHidratacao";
import {
  QUANTIDADES_RAPIDAS, cruzouAMeta, formatarHora, formatarLitros, formatarMl, precisaLembrete, ritmoDoDia, validarQuantidade,
} from "../../lib/hidratacao.js";

const COR_NIVEL = { verde: "text-ok-400", azul: "text-azul-300", laranja: "text-brand-400" };

function useAgora() {
  const [agora, setAgora] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setAgora(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);
  return agora;
}

function Dado({ rotulo, valor, cor = "text-white", pequeno = false }) {
  return (
    <div className="rounded-xl bg-white/5 px-3 py-2.5">
      <p className="truncate text-xs text-zinc-400">{rotulo}</p>
      <p className={`whitespace-nowrap font-display font-extrabold ${pequeno ? "text-xl" : "text-2xl"} ${cor}`}>{valor}</p>
    </div>
  );
}

function Aviso({ icone: Icone, cor, children, onFechar }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
    >
      <div className={`mt-4 flex items-start gap-3 rounded-2xl border p-3.5 text-sm ${cor}`}>
        <Icone className="mt-0.5 size-5 shrink-0" />
        <div className="min-w-0 flex-1 text-zinc-200">{children}</div>
        {onFechar && (
          <button onClick={onFechar} aria-label="Fechar aviso" className="-m-1 grid size-8 shrink-0 place-items-center rounded-full text-zinc-400 hover:bg-white/10">
            <X className="size-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

function textoRitmo(r, resumo) {
  if (r.status === "concluido") return null;
  if (r.status === "cedo") return `Comece o dia com um copo. Distribuir cerca de ${formatarMl(r.porHora)} por hora até as 22h deixa a meta tranquila.`;
  if (r.status === "fim_do_dia")
    return "O dia está acabando. Não tente compensar tudo de uma vez antes de dormir; amanhã a meta recomeça.";
  if (r.status === "atrasado")
    return `O ideal até agora seria uns ${formatarMl(r.esperado)}. Sem pressa: um copo a cada hora resolve, não precisa beber tudo de uma vez.`;
  if (r.status === "adiantado") return `Você está à frente do ritmo. Faltam ${formatarMl(resumo.restante)} para o resto do dia.`;
  return `No ritmo certo. Cerca de ${formatarMl(r.porHora)} por hora mantém você na meta.`;
}

export default function SecaoHidratacao({ diasPlanejados, fichasCarregando }) {
  const h = useHidratacao({ diasPlanejados, fichasCarregando });
  const { avisar } = useToast();
  const agora = useAgora();

  const [enviando, setEnviando] = useState(null);
  const [personalizado, setPersonalizado] = useState("");
  const [editarMeta, setEditarMeta] = useState(false);
  const [registroEditado, setRegistroEditado] = useState(null);
  const [comemorar, setComemorar] = useState(false);
  const [estimativaOcupada, setEstimativaOcupada] = useState(false);
  const fecharComemoracao = useCallback(() => setComemorar(false), []);

  const { resumo, meta_ml, semana } = h;

  async function adicionar(ml) {
    setEnviando(ml);
    try {
      const { antes, depois } = await h.adicionar(ml);
      if (cruzouAMeta(antes, depois, meta_ml)) setComemorar(true);
      else avisar(`+${formatarMl(ml)} registrados`);
      return true;
    } catch {
      avisar("Não foi possível registrar. Verifique sua conexão.", "erro");
      return false;
    } finally {
      setEnviando(null);
    }
  }

  async function adicionarPersonalizado(e) {
    e.preventDefault();
    const v = validarQuantidade(personalizado);
    if (!v.ok) return avisar(v.erro, "erro");
    if (await adicionar(v.valor)) setPersonalizado("");
  }

  async function resolverEstimativa(aceitar) {
    setEstimativaOcupada(true);
    try {
      if (aceitar) {
        await h.aceitarEstimativa();
        avisar("Meta atualizada a partir de hoje.");
      } else {
        await h.manterMeta();
        avisar("Meta mantida.", "info");
      }
    } catch {
      avisar("Não foi possível salvar sua escolha.", "erro");
    } finally {
      setEstimativaOcupada(false);
    }
  }

  const salvarRegistro = async (id, campos) => {
    await h.editar(id, campos);
    avisar("Registro corrigido.");
  };
  const excluirRegistro = async (id) => {
    await h.excluir(id);
    avisar("Registro excluído.", "info");
  };

  const ritmo = ritmoDoDia({ meta_ml, consumido: resumo.consumido, agora });
  const lembrete = precisaLembrete({ registrosHoje: h.registrosHoje, atingida: resumo.atingida, agora });
  const registrosRecentes = [...h.registrosHoje].reverse();

  if (h.carregando) {
    return (
      <section className="cartao mt-4 p-5" aria-busy="true">
        <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold uppercase tracking-wide">
          <Droplet className="size-5 text-azul-400" /> Hidratação
        </h2>
        <div className="mt-4 h-48 animate-pulse rounded-2xl bg-white/5" />
      </section>
    );
  }

  if (h.erro) {
    return (
      <section className="cartao mt-4 p-5">
        <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold uppercase tracking-wide">
          <Droplet className="size-5 text-azul-400" /> Hidratação
        </h2>
        <p className="mt-3 text-zinc-400">{h.erro}</p>
        <button onClick={h.recarregar} className="btn-ghost btn-sm mt-3"><RefreshCw className="size-4" /> Tentar de novo</button>
      </section>
    );
  }

  return (
    <section className="cartao relative mt-4 overflow-hidden p-5" aria-labelledby="titulo-hidratacao">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-azul-500/10 blur-3xl" />

      <header className="relative flex items-center justify-between gap-3">
        <h2 id="titulo-hidratacao" className="flex items-center gap-2 font-display text-2xl font-extrabold uppercase tracking-wide">
          <Droplet className="size-5 text-azul-400" fill="currentColor" /> Hidratação
        </h2>
        <button onClick={() => setEditarMeta(true)} className="btn-ghost btn-sm !px-3" aria-label="Ajustar meta diária">
          <Pencil className="size-4" /> <span className="hidden sm:inline">Ajustar meta</span>
        </button>
      </header>

      <AnimatePresence initial={false}>
        {h.primeiraVez && (
          <Aviso key="boas-vindas" icone={Sparkles} cor="border-azul-400/30 bg-azul-500/10 text-azul-300" onFechar={h.dispensarBoasVindas}>
            <p className="font-semibold text-white">Sua meta personalizada: {formatarLitros(meta_ml)} por dia</p>
            <p className="mt-0.5 text-zinc-300">
              {h.sugestao.provisoria
                ? "É um valor provisório. Informe seu peso na aba Dados da ficha para personalizar."
                : `Calculada com seu peso e ${h.sugestao.sessoes} treino${h.sugestao.sessoes === 1 ? "" : "s"} por semana. Você pode ajustar quando quiser.`}
            </p>
          </Aviso>
        )}

        {h.novaEstimativa != null && (
          <Aviso key="estimativa" icone={RefreshCw} cor="border-brand-500/30 bg-brand-500/10 text-brand-400">
            <p className="font-semibold text-white">Nova estimativa: {formatarLitros(h.novaEstimativa)} por dia</p>
            <p className="mt-0.5 text-zinc-300">
              Seu peso ou sua frequência de treino mudou. Sua meta atual é {formatarLitros(meta_ml)}
              {h.metaAtual?.origem === "manual" ? ", definida por você" : ""}.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button disabled={estimativaOcupada} onClick={() => resolverEstimativa(true)} className="btn-primary btn-sm">
                {estimativaOcupada && <Loader2 className="size-4 animate-spin" />} Usar nova meta
              </button>
              <button disabled={estimativaOcupada} onClick={() => resolverEstimativa(false)} className="btn-ghost btn-sm">Manter a atual</button>
            </div>
          </Aviso>
        )}

        {lembrete && (
          <Aviso key="lembrete" icone={BellRing} cor="border-azul-400/20 bg-white/5 text-azul-300">
            {lembrete.tipo === "sem_registro"
              ? "Você ainda não registrou água hoje. Que tal começar com um copo?"
              : `Faz ${lembrete.horas} h desde o seu último registro. Hora de um copo d'água.`}
          </Aviso>
        )}
      </AnimatePresence>

      {/* Progresso */}
      <div className="relative mt-5 flex flex-col items-center gap-5 sm:flex-row sm:items-center">
        <CopoOndas pct={resumo.pct} atingida={resumo.atingida}>
          <div>
            <motion.p
              key={resumo.pctReal} initial={{ scale: 0.85, opacity: 0.6 }} animate={{ scale: 1, opacity: 1 }}
              className="font-display text-5xl font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            >
              {resumo.pctReal}%
            </motion.p>
            <p className="text-xs font-semibold text-white/80 drop-shadow">{formatarLitros(resumo.consumido)} de {formatarLitros(meta_ml)}</p>
          </div>
        </CopoOndas>

        <div className="w-full min-w-0 flex-1">
          <AnimatePresence mode="wait" initial={false}>
            {resumo.atingida ? (
              <motion.p
                key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="mb-3 inline-flex items-center gap-2 rounded-full bg-ok-500/15 px-3 py-1 text-sm font-bold uppercase tracking-wide text-ok-400 ring-1 ring-ok-500/40"
              >
                <Check className="size-4" strokeWidth={3} /> Meta alcançada
              </motion.p>
            ) : (
              <motion.p key="falta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mb-3 text-sm text-zinc-400">
                Faltam <strong className="text-azul-300">{formatarMl(resumo.restante)}</strong> para a meta de hoje
              </motion.p>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-2 gap-2">
            <Dado rotulo="Meta diária" valor={formatarMl(meta_ml)} />
            <Dado rotulo="Consumido" valor={formatarMl(resumo.consumido)} cor="text-azul-300" />
            <Dado rotulo="Restante" valor={formatarMl(resumo.restante)} cor={resumo.atingida ? "text-ok-400" : "text-brand-400"} />
            <Dado rotulo="Progresso" valor={`${resumo.pctReal}%`} cor={resumo.atingida ? "text-ok-400" : "text-white"} />
          </div>

          {resumo.acimaDoRecomendavel ? (
            <p className="mt-3 flex items-start gap-2 text-xs text-zinc-400">
              <Info className="mt-0.5 size-4 shrink-0 text-azul-300" />
              Você já registrou bem mais que a sua meta hoje. Não é preciso beber além da sua sede.
            </p>
          ) : (
            textoRitmo(ritmo, resumo) && (
              <p className="mt-3 flex items-start gap-2 text-xs text-zinc-400">
                <Clock className="mt-0.5 size-4 shrink-0 text-azul-300" /> {textoRitmo(ritmo, resumo)}
              </p>
            )
          )}
        </div>
      </div>

      {/* Registro rápido */}
      <div className="relative mt-6">
        <h3 className="text-sm font-semibold text-zinc-300">Registrar água</h3>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {QUANTIDADES_RAPIDAS.map((ml) => (
            <motion.button
              key={ml} whileTap={{ scale: 0.95 }} disabled={enviando != null} onClick={() => adicionar(ml)}
              className="group flex min-h-16 items-center justify-center gap-2 rounded-2xl border border-azul-400/25 bg-azul-500/10 px-3 text-lg font-bold text-white transition hover:border-azul-400/50 hover:bg-azul-500/20 disabled:opacity-60"
            >
              {enviando === ml ? (
                <Loader2 className="size-5 animate-spin text-azul-300" />
              ) : ml >= 500 ? (
                <Droplets className="size-5 text-azul-300" />
              ) : (
                <GlassWater className="size-5 text-azul-300" />
              )}
              +{ml} ml
            </motion.button>
          ))}
        </div>

        <form onSubmit={adicionarPersonalizado} className="mt-2 flex gap-2">
          <label htmlFor="agua-personalizada" className="sr-only">Quantidade personalizada em ml</label>
          <div className="relative min-w-0 flex-1">
            <input
              id="agua-personalizada" inputMode="numeric" placeholder="Outra quantidade" value={personalizado}
              onChange={(e) => setPersonalizado(e.target.value.replace(/[^\d]/g, "").slice(0, 4))}
              className="min-h-12 w-full rounded-xl border border-white/10 bg-ink-900 px-4 pr-12 font-semibold text-white outline-none placeholder:text-zinc-600 focus:border-azul-400"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-zinc-500">ml</span>
          </div>
          <button type="submit" disabled={enviando != null || !personalizado} className="btn-primary !px-4">
            <Plus className="size-5" /> <span className="hidden sm:inline">Adicionar</span>
          </button>
        </form>
      </div>

      {/* Histórico de hoje */}
      <div className="relative mt-6">
        <h3 className="text-sm font-semibold text-zinc-300">Hoje</h3>
        {registrosRecentes.length === 0 ? (
          <p className="mt-2 text-sm text-zinc-500">Nenhum registro ainda. Use os botões acima a cada copo.</p>
        ) : (
          <ul className="mt-2 divide-y divide-white/5 rounded-xl bg-white/[0.03]">
            <AnimatePresence initial={false}>
              {registrosRecentes.map((r) => (
                <motion.li
                  key={r.id} layout
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, height: 0 }}
                  className="flex items-center justify-between gap-3 px-3 py-2"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-azul-500/15 text-azul-300">
                      <Droplet className="size-4" fill="currentColor" />
                    </span>
                    <span>
                      <span className="block font-semibold">{formatarMl(r.quantidade_ml)}</span>
                      <span className="text-xs text-zinc-500">{formatarHora(r.registrado_em)}</span>
                    </span>
                  </span>
                  <button
                    onClick={() => setRegistroEditado(r)} aria-label={`Editar registro de ${formatarMl(r.quantidade_ml)} às ${formatarHora(r.registrado_em)}`}
                    className="grid size-10 place-items-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <Pencil className="size-4" />
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>

      {/* Últimos 7 dias */}
      <div className="relative mt-6 border-t border-white/10 pt-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
          <TrendingUp className="size-4 text-azul-300" /> Últimos 7 dias
        </h3>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <Dado pequeno rotulo="Média/dia" valor={semana.diasConsiderados ? formatarLitros(semana.media) : "—"} cor="text-azul-300" />
          <Dado pequeno rotulo="Dias na meta" valor={`${semana.diasMeta}/${semana.diasConsiderados || 7}`} cor="text-ok-400" />
          <div className="rounded-xl bg-white/5 px-3 py-2.5">
            <p className="text-xs text-zinc-400">Consistência</p>
            <p className={`mt-1 flex items-center gap-1 text-sm font-bold leading-tight ${COR_NIVEL[semana.consistencia.cor]}`}>
              <CalendarCheck className="size-4 shrink-0" /> {semana.consistencia.rotulo}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <GraficoSemanal dias={semana.dias} hoje={h.hoje} />
          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-sm bg-azul-500" /> Consumo</span>
            <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-sm bg-ok-400" /> Meta atingida</span>
            <span className="flex items-center gap-1.5"><span className="h-0.5 w-4 border-t-2 border-dashed border-brand-400" /> Meta</span>
          </p>
        </div>
      </div>

      <p className="relative mt-5 text-[11px] leading-relaxed text-zinc-500">
        Meta estimada a partir do peso e da frequência de treino, apenas como referência. Não é uma prescrição médica e não
        substitui a orientação individual de um profissional de saúde.
      </p>

      {editarMeta && (
        <FolhaMeta
          aberta onFechar={() => setEditarMeta(false)} meta_ml={meta_ml} sugestao={h.sugestao}
          onSalvar={async (valor, origem) => {
            await h.definirMeta(valor, origem);
            avisar(`Meta de ${formatarLitros(valor)} salva a partir de hoje.`);
          }}
        />
      )}
      <FolhaRegistro
        key={registroEditado?.id ?? "nenhum"} registro={registroEditado} onFechar={() => setRegistroEditado(null)}
        onSalvar={salvarRegistro} onExcluir={excluirRegistro}
      />
      <MetaAlcancada aberta={comemorar} meta_ml={meta_ml} onFechar={fecharComemoracao} />
    </section>
  );
}