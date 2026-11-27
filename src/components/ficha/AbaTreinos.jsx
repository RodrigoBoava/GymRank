import { useCallback, useState } from "react";
import { ArrowDown, ArrowUp, Check, ChevronDown, ClipboardList, Loader2, Pencil, Play, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { DIAS } from "../../data/exercicios";
import SeletorExercicios from "../SeletorExercicios";
import BotaoComoFazer from "../BotaoComoFazer";
import Folha from "../Folha";
import { useToast } from "../Toast";
import { TIPOS_CARGA } from "../../lib/cargas.js";
import { infoDoExercicio } from "../../lib/catalogo";

const SUGESTOES = ["Peito e Tríceps", "Costas e Bíceps", "Pernas", "Ombros e Abdômen", "Full body"];
const DESCANSOS = [0, 30, 45, 60, 90, 120, 150, 180, 240, 300];

function proximoNome(fichas) {
  const usados = new Set(fichas.map((f) => f.nome));
  for (const letra of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") if (!usados.has(`Treino ${letra}`)) return `Treino ${letra}`;
  return `Treino ${fichas.length + 1}`;
}

const rotuloDescanso = (s) => (s === 0 ? "Sem descanso" : s < 60 ? `${s} s` : `${s / 60 >= 1 && s % 60 === 0 ? s / 60 : (s / 60).toFixed(1).replace(".", ",")} min`);

function CampoNumero({ rotulo, valor, onChange, onBlur, min = 1, max }) {
  return (
    <label className="flex min-w-0 flex-col gap-1 text-xs font-medium text-zinc-400">
      {rotulo}
      <input
        type="number" inputMode="numeric" min={min} max={max} value={valor ?? ""}
        onChange={(e) => onChange(e.target.value === "" ? null : Number(e.target.value))} onBlur={onBlur}
        className="min-h-11 w-full rounded-xl border border-white/10 bg-ink-900 px-3 text-base text-white outline-none focus:border-brand-500"
      />
    </label>
  );
}

function LinhaExercicio({ item, indice, total, f, avisar }) {
  const cardio = item.tipo_carga === "cardio";
  const info = infoDoExercicio(item.grupo, item.exercicio);

  const tentar = async (acao, mensagem) => {
    try { await acao(); } catch { avisar(mensagem, "erro"); }
  };

  return (
    <li className="cartao p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-semibold leading-tight">{item.exercicio}</p>
          <p className="mt-0.5 text-xs text-zinc-500">{info.grupo}{info.subgrupo ? ` · ${info.subgrupo}` : ""}</p>
        </div>
        <div className="flex shrink-0 items-center">
          <button aria-label="Mover para cima" disabled={indice === 0}
            onClick={() => tentar(() => f.moverExercicio(item.ficha_id, item.id, -1), "Não foi possível reordenar.")}
            className="grid size-9 place-items-center rounded-lg text-zinc-400 hover:bg-white/10 disabled:opacity-30">
            <ArrowUp className="size-4" />
          </button>
          <button aria-label="Mover para baixo" disabled={indice === total - 1}
            onClick={() => tentar(() => f.moverExercicio(item.ficha_id, item.id, 1), "Não foi possível reordenar.")}
            className="grid size-9 place-items-center rounded-lg text-zinc-400 hover:bg-white/10 disabled:opacity-30">
            <ArrowDown className="size-4" />
          </button>
          <button aria-label={`Remover ${item.exercicio}`}
            onClick={() => tentar(() => f.removerExercicio(item.id), "Não foi possível remover.")}
            className="grid size-9 place-items-center rounded-lg text-zinc-500 hover:bg-red-500/10 hover:text-red-400">
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {cardio ? (
          <CampoNumero rotulo="Minutos" max={600} valor={item.duracao_min}
            onChange={(v) => f.editarLocal(item.id, { duracao_min: v })}
            onBlur={() => tentar(() => f.salvarExercicio(item.id), "Confira o tempo digitado.")} />
        ) : (
          <>
            <CampoNumero rotulo="Séries" max={20} valor={item.series}
              onChange={(v) => f.editarLocal(item.id, { series: v })}
              onBlur={() => tentar(() => f.salvarExercicio(item.id), "Confira as séries (1 a 20).")} />
            <CampoNumero rotulo="Repetições" max={200} valor={item.repeticoes}
              onChange={(v) => f.editarLocal(item.id, { repeticoes: v })}
              onBlur={() => tentar(() => f.salvarExercicio(item.id), "Confira as repetições (1 a 200).")} />
            <label className="flex min-w-0 flex-col gap-1 text-xs font-medium text-zinc-400">
              Descanso
              <select value={item.descanso_seg}
                onChange={(e) => tentar(() => f.atualizarExercicio(item.id, { descanso_seg: Number(e.target.value) }), "Não foi possível salvar.")}
                className="min-h-11 w-full rounded-xl border border-white/10 bg-ink-900 px-2 text-base text-white outline-none focus:border-brand-500">
                {(DESCANSOS.includes(item.descanso_seg) ? DESCANSOS : [...DESCANSOS, item.descanso_seg].sort((a, b) => a - b)).map((s) => (
                  <option key={s} value={s}>{rotuloDescanso(s)}</option>
                ))}
              </select>
            </label>
          </>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <BotaoComoFazer grupoId={item.grupo} nome={item.exercicio} />
        <select aria-label="Tipo de carga" value={item.tipo_carga}
          onChange={(e) => tentar(() => f.atualizarExercicio(item.id, { tipo_carga: e.target.value }), "Não foi possível salvar.")}
          className="min-h-9 rounded-lg border border-white/10 bg-ink-900 px-2 text-xs font-semibold text-zinc-300 outline-none focus:border-brand-500">
          {TIPOS_CARGA.map((t) => <option key={t.id} value={t.id}>{t.nome}</option>)}
        </select>
        {!cardio && (
          <label className="flex min-h-9 cursor-pointer items-center gap-2 text-xs font-semibold text-zinc-300">
            <input type="checkbox" checked={item.unilateral} className="size-4 accent-orange-500"
              onChange={(e) => tentar(() => f.atualizarExercicio(item.id, { unilateral: e.target.checked }), "Não foi possível salvar.")} />
            Cargas por lado
          </label>
        )}
      </div>
    </li>
  );
}

function CartaoFicha({ ficha, f, aberta, onAlternar, onEditar, onAdicionar, onRegistrar, avisar }) {
  const itens = f.itensDaFicha(ficha.id);
  const dias = DIAS.filter((d) => ficha.dias_semana.includes(d.id));

  return (
    <li className="cartao overflow-hidden">
      <div className="flex items-start gap-3 p-4">
        <button onClick={onAlternar} aria-expanded={aberta} className="min-w-0 flex-1 text-left">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide">{ficha.nome}</h3>
            <ChevronDown className={`size-5 text-zinc-500 transition ${aberta ? "rotate-180" : ""}`} />
          </div>
          {ficha.descricao && <p className="text-sm text-zinc-400">{ficha.descricao}</p>}
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {dias.length > 0
              ? dias.map((d) => <span key={d.id} className="rounded-full bg-azul-500/15 px-2.5 py-0.5 text-xs font-bold text-azul-300">{d.curto}</span>)
              : <span className="text-xs text-zinc-500">Sem dias definidos</span>}
            <span className="text-xs text-zinc-500">· {itens.length} exercício{itens.length === 1 ? "" : "s"}</span>
          </div>
        </button>
        <button onClick={onEditar} aria-label={`Editar ${ficha.nome}`} className="grid size-10 shrink-0 place-items-center rounded-xl text-zinc-400 hover:bg-white/10">
          <Pencil className="size-5" />
        </button>
      </div>

      {aberta && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="border-t border-white/10 p-4">
          {itens.length === 0 ? (
            <p className="rounded-xl border border-dashed border-white/15 p-5 text-center text-sm text-zinc-400">
              Nenhum exercício ainda. Adicione do catálogo, por grupo muscular.
            </p>
          ) : (
            <ul className="space-y-3">
              {itens.map((item, i) => (
                <LinhaExercicio key={item.id} item={item} indice={i} total={itens.length} f={f} avisar={avisar} />
              ))}
            </ul>
          )}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button onClick={onAdicionar} className="btn-ghost flex-1"><Plus className="size-5" /> Adicionar exercícios</button>
            {itens.length > 0 && (
              <button onClick={onRegistrar} className="btn-primary flex-1"><Play className="size-5" /> Registrar este treino</button>
            )}
          </div>
        </motion.div>
      )}
    </li>
  );
}

export default function AbaTreinos({ f, irParaRegistrar }) {
  const { avisar } = useToast();
  const [abertaId, setAbertaId] = useState(null);
  const [form, setForm] = useState(null); // { id?, nome, descricao, dias }
  const [seletorId, setSeletorId] = useState(null);
  const [salvando, setSalvando] = useState(false);
  const [confirmaExclusao, setConfirmaExclusao] = useState(false);

  const fecharForm = useCallback(() => { setForm(null); setConfirmaExclusao(false); }, []);
  const fecharSeletor = useCallback(() => setSeletorId(null), []);

  const novaFicha = () => setForm({ nome: proximoNome(f.fichas), descricao: "", dias: [] });
  const alternarDia = (id) =>
    setForm((a) => ({ ...a, dias: a.dias.includes(id) ? a.dias.filter((d) => d !== id) : [...a.dias, id] }));

  async function salvarForm(e) {
    e.preventDefault();
    if (!form.nome.trim()) return avisar("Dê um nome para a ficha.", "erro");
    setSalvando(true);
    try {
      if (form.id) {
        await f.atualizarFicha(form.id, { nome: form.nome.trim(), descricao: form.descricao.trim() || null, dias_semana: form.dias });
        avisar("Ficha atualizada.");
      } else {
        const criada = await f.criarFicha({ nome: form.nome, descricao: form.descricao, dias_semana: form.dias });
        setAbertaId(criada.id);
        avisar("Ficha criada! Agora adicione os exercícios.");
      }
      fecharForm();
    } catch {
      avisar("Não foi possível salvar a ficha.", "erro");
    }
    setSalvando(false);
  }

  async function excluir() {
    setSalvando(true);
    try {
      await f.excluirFicha(form.id);
      avisar("Ficha excluída. Seu histórico de cargas foi mantido.", "info");
      fecharForm();
    } catch {
      avisar("Não foi possível excluir.", "erro");
    }
    setSalvando(false);
  }

  const noSeletor = new Set(f.itens.filter((i) => i.ficha_id === seletorId).map((i) => `${i.grupo}|${i.exercicio}`));

  return (
    <div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide">Meus treinos</h2>
          <p className="text-sm text-zinc-400">Monte fichas como Treino A, B e C, com os dias da semana.</p>
        </div>
        <button onClick={novaFicha} className="btn-primary btn-sm shrink-0"><Plus className="size-5" /> Nova ficha</button>
      </div>

      {f.fichas.length === 0 ? (
        <div className="cartao mt-6 p-8 text-center">
          <ClipboardList className="mx-auto size-12 text-brand-400" />
          <p className="mt-3 font-semibold">Você ainda não tem nenhuma ficha</p>
          <p className="mt-1 text-sm text-zinc-400">Exemplo: Treino A (Peito e Tríceps), Treino B (Costas e Bíceps), Treino C (Pernas).</p>
          <button onClick={novaFicha} className="btn-primary mt-5">Criar minha primeira ficha</button>
        </div>
      ) : (
        <ul className="mt-6 space-y-4">
          {f.fichas.map((ficha) => (
            <CartaoFicha
              key={ficha.id} ficha={ficha} f={f} avisar={avisar} aberta={abertaId === ficha.id}
              onAlternar={() => setAbertaId(abertaId === ficha.id ? null : ficha.id)}
              onEditar={() => setForm({ id: ficha.id, nome: ficha.nome, descricao: ficha.descricao ?? "", dias: ficha.dias_semana })}
              onAdicionar={() => setSeletorId(ficha.id)}
              onRegistrar={() => irParaRegistrar(ficha.id)}
            />
          ))}
        </ul>
      )}

      {/* Criar / editar ficha */}
      <Folha aberta={!!form} onFechar={fecharForm} titulo={form?.id ? "Editar ficha" : "Nova ficha"} largura="max-w-lg">
        {form && (
          <form onSubmit={salvarForm} className="space-y-5">
            <div>
              <label htmlFor="nome-ficha" className="mb-1.5 block text-sm font-medium text-zinc-300">Nome</label>
              <input id="nome-ficha" value={form.nome} maxLength={60} onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="min-h-12 w-full rounded-xl border border-white/10 bg-ink-900 px-4 text-base text-white outline-none focus:border-brand-500" />
            </div>
            <div>
              <label htmlFor="desc-ficha" className="mb-1.5 block text-sm font-medium text-zinc-300">Grupos musculares (opcional)</label>
              <input id="desc-ficha" value={form.descricao} maxLength={120} placeholder="Ex.: Peito e Tríceps"
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                className="min-h-12 w-full rounded-xl border border-white/10 bg-ink-900 px-4 text-base text-white outline-none placeholder:text-zinc-600 focus:border-brand-500" />
              <div className="mt-2 flex flex-wrap gap-2">
                {SUGESTOES.map((s) => (
                  <button type="button" key={s} onClick={() => setForm({ ...form, descricao: s })}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-zinc-300 hover:border-white/25">{s}</button>
                ))}
              </div>
            </div>
            <fieldset>
              <legend className="mb-1.5 text-sm font-medium text-zinc-300">Dias da semana</legend>
              <div className="flex flex-wrap gap-2">
                {DIAS.map((d) => {
                  const ativo = form.dias.includes(d.id);
                  return (
                    <button type="button" key={d.id} aria-pressed={ativo} onClick={() => alternarDia(d.id)}
                      className={`min-h-11 min-w-14 rounded-xl border px-3 text-sm font-bold transition ${ativo ? "border-brand-500 bg-brand-500 text-white" : "border-white/10 bg-ink-900 text-zinc-300"}`}>
                      {d.curto}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-zinc-500">Esses dias são usados para calcular sua frequência na academia.</p>
            </fieldset>
            <div className="flex flex-col gap-2 sm:flex-row-reverse">
              <button type="submit" disabled={salvando} className="btn-primary flex-1">
                {salvando && <Loader2 className="size-5 animate-spin" />} Salvar
              </button>
              {form.id && (
                confirmaExclusao ? (
                  <button type="button" onClick={excluir} disabled={salvando}
                    className="min-h-12 flex-1 rounded-xl border border-red-500/50 bg-red-500/15 px-5 text-sm font-bold text-red-300">
                    Confirmar exclusão
                  </button>
                ) : (
                  <button type="button" onClick={() => setConfirmaExclusao(true)} className="btn-ghost flex-1 text-red-300">
                    <Trash2 className="size-5" /> Excluir ficha
                  </button>
                )
              )}
            </div>
          </form>
        )}
      </Folha>

      {/* Escolher exercícios do catálogo */}
      <Folha aberta={!!seletorId} onFechar={fecharSeletor} titulo="Adicionar exercícios">
        <SeletorExercicios
          renderAcao={(grupo, nome) =>
            noSeletor.has(`${grupo.id}|${nome}`) ? (
              <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-ok-400"><Check className="size-4" /> Na ficha</span>
            ) : (
              <button
                onClick={async () => {
                  try { await f.adicionarExercicio(seletorId, grupo.id, nome); }
                  catch { avisar("Não foi possível adicionar o exercício.", "erro"); }
                }}
                className="btn-primary min-h-9 rounded-lg px-2.5 py-1 text-xs"
              >
                <Plus className="size-4" /> Adicionar
              </button>
            )
          }
        />
      </Folha>
    </div>
  );
}
