import { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, CalendarDays, ChevronLeft, Flame, Loader2, Ruler, Scale, Target } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import Campo from "../components/Campo";
import { PASSOS, CONDICOES } from "../data/questionario";
import { marcarPulou, objetivoDaMeta } from "../lib/onboarding";
import { hojeISO } from "../lib/datas";
import { calcularIdade, calcularTMB, calcularGastoDiario, calcularMeta } from "../lib/calorias";

const tituloClasse =
  "font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide sm:text-5xl";

const variantes = {
  entra: (d) => ({ opacity: 0, x: 40 * d }),
  centro: { opacity: 1, x: 0 },
  sai: (d) => ({ opacity: 0, x: -40 * d }),
};

function Tela({ children }) {
  return <div className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-ink-950">{children}</div>;
}

function Erro({ children }) {
  return (
    <p role="alert" className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
      {children}
    </p>
  );
}

function validarCorpo(r) {
  const idade = calcularIdade(r.nascimento);
  const peso = Number(r.peso);
  const altura = Number(r.altura);
  if (!r.sexo) return "Escolha o sexo biológico (usado no cálculo de calorias).";
  if (idade === null || idade < 14 || idade > 100) return "Informe uma data de nascimento válida (idade entre 14 e 100 anos).";
  if (!(peso >= 20 && peso <= 400)) return "Informe um peso entre 20 e 400 kg.";
  if (!(altura >= 80 && altura <= 250)) return "Informe uma altura entre 80 e 250 cm.";
  return "";
}

function Questionario({ user, perfil, recarregarPerfil }) {
  const navigate = useNavigate();
  const travado = useRef(false);
  const [indice, setIndice] = useState(0);
  const [direcao, setDirecao] = useState(1);
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [r, setR] = useState(() => ({
    meta: null, desafio: null, musculo: null, cardio: null,
    experiencia: null, academia: null, frequencia: null,
    sexo: perfil?.sexo ?? "",
    nascimento: perfil?.data_nascimento ?? "",
    peso: perfil?.peso_kg ?? "",
    altura: perfil?.altura_cm ?? "",
    temCondicao: null, condicoes: [], obs: "", consentimento: false,
  }));

  const total = PASSOS.length + 2;
  const passo = PASSOS[indice];
  const tela = passo ? "escolha" : indice === PASSOS.length ? "corpo" : "saude";
  const hojeIso = hojeISO();

  const definir = (campo, valor) => setR((a) => ({ ...a, [campo]: valor }));

  const ir = (delta) => {
    setErro("");
    setDirecao(delta);
    setIndice((i) => Math.min(Math.max(i + delta, 0), total - 1));
  };

  function escolher(valor) {
    if (travado.current) return;
    travado.current = true;
    definir(passo.id, valor);
    setTimeout(() => {
      ir(1);
      travado.current = false;
    }, 220);
  }

  const alternar = (id) =>
    definir("condicoes", r.condicoes.includes(id) ? r.condicoes.filter((c) => c !== id) : [...r.condicoes, id]);

  function continuarCorpo() {
    const mensagem = validarCorpo(r);
    if (mensagem) return setErro(mensagem);
    ir(1);
  }

  function pular() {
    marcarPulou(user.id);
    navigate("/painel");
  }

  async function concluir() {
    if (r.temCondicao === null) return setErro("Escolha uma das opções.");
    if (r.temCondicao && r.condicoes.length === 0 && !r.obs.trim()) {
      return setErro("Selecione ao menos uma opção ou descreva a condição.");
    }
    if (r.temCondicao && !r.consentimento) {
      return setErro("Para guardar essa informação, marque a autorização.");
    }

    setErro("");
    setSalvando(true);
    const peso = Number(r.peso);
    const altura = Number(r.altura);
    const idade = calcularIdade(r.nascimento);
    const nivel = r.frequencia ?? "moderado";
    const objetivo = objetivoDaMeta(r.meta);

    const { error } = await supabase.from("perfis").upsert({
      user_id: user.id,
      nome: perfil?.nome ?? user.user_metadata?.nome ?? null,
      sexo: r.sexo,
      data_nascimento: r.nascimento,
      peso_kg: peso,
      altura_cm: altura,
      nivel_atividade: nivel,
      objetivo,
      meta_principal: r.meta,
      desafio: r.desafio,
      musculo_prioritario: r.musculo,
      cardio: r.cardio,
      experiencia: r.experiencia,
      tipo_academia: r.academia,
      condicoes: r.temCondicao ? r.condicoes : [],
      condicoes_obs: r.temCondicao && r.obs.trim() ? r.obs.trim() : null,
      consentimento_saude_em: r.temCondicao ? new Date().toISOString() : null,
      onboarding_concluido: true,
      atualizado_em: new Date().toISOString(),
    });
    setSalvando(false);

    if (error) return setErro("Não foi possível salvar suas respostas. Tente novamente.");

    await recarregarPerfil();
    const tmb = calcularTMB({ sexo: r.sexo, peso, altura, idade });
    const gasto = calcularGastoDiario(tmb, nivel);
    setResultado({ tmb, gasto, meta: calcularMeta(gasto, objetivo, tmb) });
  }

  if (resultado) {
    const primeiroNome = (perfil?.nome ?? user.user_metadata?.nome ?? "").split(" ")[0];
    return (
      <Tela>
        <div className="mx-auto w-full max-w-xl px-4 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold uppercase tracking-wider text-ok-400">Ficha criada</p>
            <h1 className={`${tituloClasse} mt-2`}>Tudo pronto{primeiroNome ? `, ${primeiroNome}` : ""}!</h1>
            <p className="mt-3 text-zinc-300">Com base nas suas respostas, estas são as suas estimativas diárias:</p>

            <div className="mt-6 space-y-3">
              {[
                [Flame, "Taxa metabólica basal", resultado.tmb],
                [Activity, "Gasto diário total", resultado.gasto],
                [Target, "Meta diária de calorias", resultado.meta],
              ].map(([Icone, rotulo, valor]) => (
                <div key={rotulo} className="cartao flex items-center gap-4 p-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                    <Icone className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-zinc-400">{rotulo}</p>
                    <p className="font-display text-3xl font-extrabold text-brand-500">
                      {valor} <span className="text-base font-semibold text-zinc-400">kcal/dia</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              São estimativas e não substituem a avaliação de um médico ou nutricionista.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/treino" className="btn-primary">Montar meu treino</Link>
              <Link to="/ficha" className="btn-ghost">Ver minha ficha</Link>
            </div>
          </motion.div>
        </div>
      </Tela>
    );
  }

  return (
    <Tela>
      <div className="mx-auto flex min-h-full w-full max-w-xl flex-col px-4 pb-10 pt-[calc(env(safe-area-inset-top)+1rem)]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => ir(-1)}
            aria-label="Voltar"
            className={`grid size-10 place-items-center rounded-full hover:bg-white/10 ${indice === 0 ? "invisible" : ""}`}
          >
            <ChevronLeft className="size-6" />
          </button>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-brand-500"
              animate={{ width: `${((indice + 1) / total) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <button onClick={pular} className="text-sm font-semibold text-zinc-400 hover:text-white">
            Pular
          </button>
        </div>

        <AnimatePresence mode="wait" custom={direcao}>
          <motion.div
            key={indice}
            custom={direcao}
            variants={variantes}
            initial="entra"
            animate="centro"
            exit="sai"
            transition={{ duration: 0.2 }}
            className="mt-10 flex-1"
          >
            {tela === "escolha" && (
              <>
                <h1 className={tituloClasse}>{passo.titulo}</h1>
                <div className={`mt-6 grid gap-3 ${passo.colunas === 2 ? "grid-cols-2" : ""}`}>
                  {passo.opcoes.map((o) => (
                    <button
                      key={o.valor}
                      onClick={() => escolher(o.valor)}
                      className={`rounded-2xl border p-5 text-left transition active:scale-[0.98] ${
                        r[passo.id] === o.valor
                          ? "border-brand-500 bg-brand-500/10"
                          : "border-white/10 bg-ink-800 hover:border-white/25"
                      }`}
                    >
                      <p className="font-semibold">{o.titulo}</p>
                      {o.desc && <p className="mt-0.5 text-sm text-zinc-400">{o.desc}</p>}
                    </button>
                  ))}
                </div>
              </>
            )}

            {tela === "corpo" && (
              <>
                <h1 className={tituloClasse}>Fale um pouco sobre você</h1>
                <p className="mt-2 text-zinc-400">
                  Usamos esses dados para calcular sua taxa metabólica e sua meta de calorias.
                </p>

                <div className="mt-6 space-y-4">
                  <fieldset>
                    <legend className="mb-1.5 text-sm font-medium text-zinc-300">Sexo biológico (usado na fórmula)</legend>
                    <div className="flex gap-2">
                      {[["masculino", "Masculino"], ["feminino", "Feminino"]].map(([valor, nome]) => (
                        <button
                          key={valor}
                          type="button"
                          aria-pressed={r.sexo === valor}
                          onClick={() => definir("sexo", valor)}
                          className={`min-h-12 flex-1 rounded-xl border px-3 text-sm font-semibold transition ${
                            r.sexo === valor
                              ? "border-brand-500 bg-brand-500 text-white"
                              : "border-white/10 bg-ink-900 text-zinc-300 hover:border-white/25"
                          }`}
                        >
                          {nome}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <Campo
                    id="nascimento" label="Data de nascimento" icone={CalendarDays} type="date"
                    max={hojeIso} value={r.nascimento} onChange={(e) => definir("nascimento", e.target.value)}
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <Campo
                      id="peso" label="Peso" icone={Scale} type="number" inputMode="decimal"
                      step="0.1" min="20" max="400" placeholder="75.5"
                      value={r.peso} onChange={(e) => definir("peso", e.target.value)}
                      direita={<span className="text-sm text-zinc-500">kg</span>}
                    />
                    <Campo
                      id="altura" label="Altura" icone={Ruler} type="number" inputMode="decimal"
                      step="0.5" min="80" max="250" placeholder="175"
                      value={r.altura} onChange={(e) => definir("altura", e.target.value)}
                      direita={<span className="text-sm text-zinc-500">cm</span>}
                    />
                  </div>
                </div>

                {erro && <Erro>{erro}</Erro>}
                <button onClick={continuarCorpo} className="btn-primary mt-6 w-full">Continuar</button>
              </>
            )}

            {tela === "saude" && (
              <>
                <h1 className={tituloClasse}>Você tem alguma condição de saúde ou lesão?</h1>
                <p className="mt-2 text-zinc-400">
                  Conte só o necessário para adaptarmos o seu treino. Esta pergunta é opcional.
                </p>

                <div className="mt-6 grid gap-3">
                  {[[false, "Não tenho nenhuma", "Posso treinar sem restrições conhecidas"], [true, "Sim, tenho", "Quero informar para adaptar o treino"]].map(
                    ([valor, titulo, desc]) => (
                      <button
                        key={titulo}
                        onClick={() => definir("temCondicao", valor)}
                        className={`rounded-2xl border p-5 text-left transition active:scale-[0.98] ${
                          r.temCondicao === valor
                            ? "border-brand-500 bg-brand-500/10"
                            : "border-white/10 bg-ink-800 hover:border-white/25"
                        }`}
                      >
                        <p className="font-semibold">{titulo}</p>
                        <p className="mt-0.5 text-sm text-zinc-400">{desc}</p>
                      </button>
                    )
                  )}
                </div>

                {r.temCondicao && (
                  <div className="mt-5 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {CONDICOES.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          aria-pressed={r.condicoes.includes(c.id)}
                          onClick={() => alternar(c.id)}
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                            r.condicoes.includes(c.id)
                              ? "border-azul-400 bg-azul-500/20 text-azul-300"
                              : "border-white/10 bg-ink-900 text-zinc-300 hover:border-white/25"
                          }`}
                        >
                          {c.nome}
                        </button>
                      ))}
                    </div>

                    <div>
                      <label htmlFor="obs" className="mb-1.5 block text-sm font-medium text-zinc-300">
                        Quer detalhar? (opcional)
                      </label>
                      <textarea
                        id="obs" maxLength={300} value={r.obs} onChange={(e) => definir("obs", e.target.value)}
                        placeholder="Ex.: dor no joelho direito ao agachar"
                        className="min-h-24 w-full rounded-xl border border-white/10 bg-ink-900 p-3 text-base text-white placeholder-zinc-500 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                      />
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 text-sm text-zinc-300">
                      <input
                        type="checkbox" checked={r.consentimento}
                        onChange={(e) => definir("consentimento", e.target.checked)}
                        className="mt-0.5 size-5 shrink-0 accent-orange-500"
                      />
                      Autorizo o GymRank a guardar essas informações de saúde para adaptar meu treino. Posso
                      alterá-las a qualquer momento refazendo o questionário.
                    </label>
                  </div>
                )}

                <p className="mt-5 rounded-xl border border-azul-400/30 bg-azul-500/10 p-3 text-sm text-azul-300">
                  O GymRank não substitui avaliação médica. Se você tem problema cardíaco, pressão alta ou outra
                  condição, converse com um médico antes de começar a treinar.
                </p>

                {erro && <Erro>{erro}</Erro>}
                <button onClick={concluir} disabled={salvando} className="btn-primary mt-6 w-full">
                  {salvando && <Loader2 className="size-5 animate-spin" />}
                  {salvando ? "Salvando..." : "Concluir"}
                </button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Tela>
  );
}

export default function Onboarding() {
  const { user, carregando, perfil, perfilCarregando, recarregarPerfil } = useAuth();

  if (carregando || perfilCarregando) return <p className="p-10 text-center text-zinc-400">Carregando...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return <Questionario user={user} perfil={perfil} recarregarPerfil={recarregarPerfil} />;
}