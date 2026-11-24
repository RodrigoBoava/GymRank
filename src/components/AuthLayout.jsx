import { Link } from "react-router-dom";
import { CalendarDays, Calculator, Dumbbell } from "lucide-react";
import icone from "../assets/gymrank-icone.png";
import { NOME_APP } from "../lib/marca";

const beneficios = [
  { icone: CalendarDays, texto: "Monte o treino de segunda a domingo", cor: "bg-brand-500/10 text-brand-400" },
  { icone: Calculator, texto: "Descubra quanto o seu corpo gasta por dia", cor: "bg-azul-500/10 text-azul-300" },
  { icone: Dumbbell, texto: "Catálogo completo de exercícios por região do músculo", cor: "bg-ok-500/10 text-ok-400" },
];

export default function AuthLayout({ titulo, subtitulo, children, rodape }) {
  return (
    <main className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-10 lg:min-h-[80vh] lg:grid-cols-2">
      <section className="relative hidden lg:block">
        <div className="absolute -left-16 -top-16 -z-10 size-80 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute -bottom-10 left-40 -z-10 size-64 rounded-full bg-azul-500/15 blur-3xl" />
        <img src={icone} alt="" className="size-24 object-contain" />
        <h2 className="mt-6 font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-wide">
          Entre no jogo. <span className="text-brand-500">Evolua</span> de verdade.
        </h2>
        <ul className="mt-8 space-y-4">
          {beneficios.map(({ icone: Icone, texto, cor }) => (
            <li key={texto} className="flex items-center gap-3 text-zinc-300">
              <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${cor}`}>
                <Icone className="size-5" />
              </span>
              {texto}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-md">
        <Link to="/" className="mb-6 flex items-center justify-center gap-2 lg:hidden" aria-label={NOME_APP}>
          <img src={icone} alt="" className="size-12 object-contain" />
          <span className="font-display text-3xl font-extrabold uppercase tracking-wide">{NOME_APP}</span>
        </Link>

        <div className="cartao p-6 sm:p-8">
          <h1 className="font-display text-3xl font-extrabold uppercase tracking-wide">{titulo}</h1>
          <p className="mt-1 text-sm text-zinc-400">{subtitulo}</p>
          <div className="mt-6">{children}</div>
          <p className="mt-6 text-center text-sm text-zinc-400">{rodape}</p>
        </div>
      </section>
    </main>
  );
}