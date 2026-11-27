import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, CalendarDays, Calculator, Camera, Check, Dumbbell,
  ClipboardList, ShieldCheck, Smartphone, Trophy, UserPlus,
} from "lucide-react";
import DumbbellAnimation from "../components/DumbbellAnimation";
import Contador from "../components/Contador";
import logo from "../assets/gymrank-logo.png";
import icone from "../assets/gymrank-icone.png";
import { GRUPOS, contarExercicios } from "../data/exercicios";
import { NOME_APP } from "../lib/marca";

const totalExercicios = GRUPOS.reduce((t, g) => t + contarExercicios(g), 0);
const totalSubgrupos = GRUPOS.reduce((t, g) => t + g.subgrupos.length, 0);

const aparecer = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const numeros = [
  { valor: totalExercicios, rotulo: "exercícios no catálogo" },
  { valor: GRUPOS.length, rotulo: "grupos musculares" },
  { valor: totalSubgrupos, rotulo: "regiões do músculo" },
];

const recursos = [
  { icone: CalendarDays, titulo: "Treino semanal", texto: "Monte cada dia da semana com os exercícios certos e defina séries, repetições e carga.", status: "Disponível" },
  { icone: Dumbbell, titulo: "Catálogo anatômico", texto: "Exercícios divididos por grupo e por região do músculo, do quadríceps ao core.", status: "Disponível" },
  { icone: ClipboardList, titulo: "Minha ficha", texto: "Fichas A/B/C, carga de cada série, recordes pessoais, evolução e frequência na academia.", status: "Disponível" },
  { icone: Trophy, titulo: "Ranking", texto: "Carga e tempo viram pontos para você comparar seu desempenho com outros atletas.", status: "Em breve" },
];

const passos = [
  { icone: UserPlus, titulo: "Crie sua conta", texto: "Cadastro rápido com e-mail e senha. Seu treino fica salvo só para você." },
  { icone: CalendarDays, titulo: "Monte sua semana", texto: "Escolha o grupo muscular de cada dia e adicione os exercícios com séries e carga." },
  { icone: Trophy, titulo: "Evolua e suba", texto: "Acompanhe suas cargas, recordes e frequência e prepare-se para disputar o ranking." },
];

const diferenciais = [
  { icone: Smartphone, titulo: "Feito para o celular", texto: "Navegação de app, com botões grandes e telas pensadas para usar entre uma série e outra." },
  { icone: ShieldCheck, titulo: "Seus dados, só seus", texto: "Cada atleta enxerga apenas o próprio treino e a própria ficha." },
  { icone: Calculator, titulo: "Conta transparente", texto: "Usamos fórmulas conhecidas (Mifflin-St Jeor e tabela MET), sem caixa-preta." },
];

function Titulo({ children, className = "" }) {
  return (
    <h2 className={`font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide sm:text-6xl ${className}`}>
      {children}
    </h2>
  );
}

function Selo({ status }) {
  const ok = status === "Disponível";
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${ok ? "bg-ok-500/15 text-ok-400" : "bg-azul-500/15 text-azul-300"}`}>
      {status}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="fundo-grade absolute inset-0 -z-10" />
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-linear-to-b from-azul-500/10 to-transparent" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-10 lg:grid-cols-2 lg:pt-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-azul-400/30 bg-azul-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-azul-300">
              Plataforma de treino e performance
            </span>
            <h1 className="mt-5 font-display text-6xl font-extrabold uppercase leading-[0.92] tracking-wide sm:text-8xl">
              Seu treino.
              <br />
              Seu <span className="text-brand-500">ranking.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-zinc-300">
              O {NOME_APP} organiza a sua semana, calcula quanto o seu corpo gasta e transforma cada carga
              levantada em evolução. Menos achismo. Mais resultado.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/cadastro" className="btn-primary">
                Criar minha conta <ArrowRight className="size-5" />
              </Link>
              <Link to="/exercicios" className="btn-ghost">
                Ver o catálogo
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="absolute left-1/2 top-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="absolute -right-4 top-10 -z-10 size-48 rounded-full bg-azul-500/20 blur-3xl" />
            <motion.img
              src={logo}
              alt={`Logo ${NOME_APP}: coroa sobre um halter`}
              className="mx-auto w-64 drop-shadow-[0_20px_60px_rgba(255,106,19,0.35)] sm:w-80 lg:w-[26rem]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-4 pb-14">
          {numeros.map((n) => (
            <div key={n.rotulo} className="cartao p-4 text-center">
              <p className="font-display text-4xl font-extrabold text-brand-500 sm:text-5xl">
                <Contador ate={n.valor} />
              </p>
              <p className="mt-1 text-xs text-zinc-400 sm:text-sm">{n.rotulo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUE O GYMRANK */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div {...aparecer} className="max-w-3xl">
          <Titulo>
            Treinar com dados <span className="text-brand-500">muda o jogo</span>
          </Titulo>
          <p className="mt-5 text-lg text-zinc-300">
            Treinar sem registro é treinar no escuro. No {NOME_APP}, cada exercício, série e quilo ficam
            organizados em um só lugar, para você saber onde está e aonde quer chegar.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recursos.map(({ icone: Icone, titulo, texto, status }, i) => (
            <motion.div
              key={titulo}
              {...aparecer}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="cartao group p-6 transition hover:-translate-y-1 hover:border-brand-500/40"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition group-hover:bg-brand-500 group-hover:text-white">
                  <Icone className="size-6" />
                </span>
                <Selo status={status} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{titulo}</h3>
              <p className="mt-2 text-sm text-zinc-400">{texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CADA REPETIÇÃO CONTA */}
      <section className="border-y border-white/10 bg-ink-900/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <motion.div {...aparecer}>
            <DumbbellAnimation />
          </motion.div>
          <motion.div {...aparecer}>
            <Titulo>
              Cada repetição <span className="text-brand-500">conta</span>
            </Titulo>
            <ul className="mt-6 space-y-3">
              {[
                "Monte o treino de segunda a domingo",
                "Registre a carga de cada série e acompanhe seus recordes",
                "Veja a queima calórica estimada do seu dia",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ok-500/15 text-ok-400">
                    <Check className="size-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/cadastro" className="btn-primary mt-8">
              Começar agora <ArrowRight className="size-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div {...aparecer}>
          <Titulo className="text-center">
            Como <span className="text-brand-500">funciona</span>
          </Titulo>
        </motion.div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {passos.map(({ icone: Icone, titulo, texto }, i) => (
            <motion.div key={titulo} {...aparecer} transition={{ duration: 0.5, delay: i * 0.12 }} className="text-center">
              <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/30">
                <Icone className="size-7" />
                <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-ink-950 text-sm font-bold text-azul-300 ring-2 ring-azul-400">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{titulo}</h3>
              <p className="mx-auto mt-2 max-w-xs text-zinc-400">{texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-y border-white/10 bg-ink-900/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div {...aparecer}>
            <Titulo>
              Nossos <span className="text-azul-400">diferenciais</span>
            </Titulo>
          </motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {diferenciais.map(({ icone: Icone, titulo, texto }, i) => (
              <motion.div key={titulo} {...aparecer} transition={{ duration: 0.5, delay: i * 0.1 }} className="cartao p-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-azul-500/10 text-azul-300">
                  <Icone className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{titulo}</h3>
                <p className="mt-2 text-sm text-zinc-400">{texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IA DE CALORIAS (EM BREVE) */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
        <motion.div {...aparecer}>
          <Selo status="Em breve" />
          <Titulo className="mt-4">
            Foto do prato. <span className="text-brand-500">Calorias na hora.</span>
          </Titulo>
          <p className="mt-5 text-lg text-zinc-300">
            Estamos construindo a leitura de refeições por foto ou texto, ligada à meta de calorias da sua
            ficha, para você alinhar a alimentação ao treino.
          </p>
        </motion.div>

        <motion.div {...aparecer} className="cartao p-6">
          <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500">
            <Camera className="size-4" /> Exemplo ilustrativo
          </p>
          <p className="mt-3 text-zinc-300">Arroz, feijão, frango grelhado e salada</p>
          <p className="mt-4 font-display text-6xl font-extrabold text-brand-500">
            ~620 <span className="text-xl font-semibold text-zinc-400">kcal</span>
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
            {[["Proteína", "42 g"], ["Carbo", "68 g"], ["Gordura", "16 g"]].map(([n, v]) => (
              <div key={n} className="rounded-xl bg-white/5 py-3">
                <p className="font-bold">{v}</p>
                <p className="text-zinc-400">{n}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <motion.div
          {...aparecer}
          className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-linear-to-br from-brand-500/15 via-ink-900 to-azul-500/15 p-8 text-center sm:p-12"
        >
          <img src={icone} alt="" className="mx-auto size-20 object-contain" />
          <Titulo className="mt-4">
            Faça parte da <span className="text-brand-500">evolução</span>
          </Titulo>
          <p className="mx-auto mt-4 max-w-md text-zinc-300">
            Crie sua conta, monte sua semana e comece a registrar o que importa.
          </p>
          <Link to="/cadastro" className="btn-primary mt-8">
            Criar minha conta <ArrowRight className="size-5" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}