import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Medal, Camera, TrendingUp, Sparkles, UserPlus, Dumbbell, Flame } from "lucide-react";
import DumbbellAnimation from "../components/DumbbellAnimation";
import { NOME_APP } from "../lib/marca";

const aparecer = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const recursos = [
  { icone: Trophy, titulo: "Ranking competitivo", texto: "Seu tempo de esteira e sua carga no supino viram pontos. Compare-se com outros atletas e suba de posição." },
  { icone: Medal, titulo: "Níveis e conquistas", texto: "Ganhe XP a cada treino, desbloqueie medalhas e mantenha sequências para evoluir de nível." },
  { icone: Camera, titulo: "Calorias por IA", texto: "Tire uma foto do prato ou descreva a refeição em texto e a IA calcula as calorias para você." },
  { icone: TrendingUp, titulo: "Evolução em gráficos", texto: "Veja sua carga e seu tempo melhorando semana após semana, com histórico só seu." },
];

const passos = [
  { icone: UserPlus, titulo: "Crie sua conta", texto: "Cadastre-se com e-mail e senha. Seus dados e seu histórico ficam só com você." },
  { icone: Dumbbell, titulo: "Registre seus treinos", texto: "Anote o tempo na esteira, a carga no supino e outros exercícios." },
  { icone: Flame, titulo: "Suba no ranking", texto: "Acumule pontos, bata recordes pessoais e dispute o topo com a galera." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-sm text-lime-400">
            <Sparkles className="size-4" /> Treino + gamificação + IA
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">
            Treine. Compare. <span className="text-lime-400">Suba no ranking.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            O {NOME_APP} transforma o seu desempenho na academia em uma competição saudável: registre
            seus treinos, ganhe pontos e descubra as calorias do que você come com uma simples foto.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/cadastro" className="rounded-xl bg-lime-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-lime-300">
              Criar conta grátis
            </Link>
            <Link to="/ranking" className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-900">
              Ver ranking
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <DumbbellAnimation />
        </motion.div>
      </section>

      {/* RECURSOS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div {...aparecer} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Tudo o que você precisa para evoluir</h2>
          <p className="mt-3 text-zinc-400">Quatro ideias que fazem o treino ficar mais divertido e mais inteligente.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recursos.map(({ icone: Icone, titulo, texto }, i) => (
            <motion.div
              key={titulo} {...aparecer} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-lime-400/40"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                <Icone className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{titulo}</h3>
              <p className="mt-2 text-sm text-zinc-400">{texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="border-y border-zinc-800 bg-zinc-900/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2 {...aparecer} className="text-center text-3xl font-bold sm:text-4xl">
            Como funciona
          </motion.h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {passos.map(({ icone: Icone, titulo, texto }, i) => (
              <motion.div key={titulo} {...aparecer} transition={{ duration: 0.5, delay: i * 0.15 }} className="text-center">
                <div className="relative mx-auto flex size-16 items-center justify-center rounded-full bg-lime-400 text-zinc-950">
                  <Icone className="size-7" />
                  <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-lime-400 ring-2 ring-lime-400">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{titulo}</h3>
                <p className="mt-2 text-zinc-400">{texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IA DE CALORIAS */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <motion.div {...aparecer}>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Foto do prato? A <span className="text-lime-400">IA faz a conta</span>.
          </h2>
          <p className="mt-4 text-zinc-400">
            Chega de contar caloria na mão. Envie uma foto da refeição ou escreva o que comeu, e a
            inteligência artificial estima as calorias e os macronutrientes automaticamente, para você
            alinhar a alimentação ao seu treino.
          </p>
        </motion.div>

        <motion.div {...aparecer} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-xs uppercase tracking-wider text-zinc-500">Exemplo ilustrativo</p>
          <p className="mt-3 text-zinc-300">🍽️ Arroz, feijão, frango grelhado e salada</p>
          <p className="mt-4 text-5xl font-extrabold text-lime-400">
            ~620 <span className="text-lg font-medium text-zinc-400">kcal</span>
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
            {[["Proteína", "42 g"], ["Carbo", "68 g"], ["Gordura", "16 g"]].map(([n, v]) => (
              <div key={n} className="rounded-xl bg-zinc-800 py-3">
                <p className="font-bold">{v}</p>
                <p className="text-zinc-400">{n}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-4xl px-4 pb-24">
        <motion.div {...aparecer} className="rounded-3xl border border-lime-400/30 bg-lime-400/10 p-10 text-center">
          <h2 className="text-3xl font-extrabold">Pronto para entrar no ranking?</h2>
          <p className="mt-3 text-zinc-300">Crie sua conta em menos de um minuto.</p>
          <Link to="/cadastro" className="mt-6 inline-block rounded-xl bg-lime-400 px-8 py-3 font-bold text-zinc-950 transition hover:bg-lime-300">
            Começar agora
          </Link>
        </motion.div>
      </section>
    </>
  );
}