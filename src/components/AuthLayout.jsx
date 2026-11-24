import { Trophy, Flame, TrendingUp } from "lucide-react";
import { NOME_APP } from "../lib/marca";

const beneficios = [
  { icone: Trophy, texto: "Dispute o ranking com outros atletas" },
  { icone: Flame, texto: "Calorias do prato estimadas por IA" },
  { icone: TrendingUp, texto: "Acompanhe sua evolução de carga e tempo" },
];

export default function AuthLayout({ titulo, subtitulo, children, rodape }) {
  return (
    <main className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 lg:min-h-[80vh] lg:grid-cols-2">
      <section className="relative hidden lg:block">
        <div className="absolute -left-10 -top-10 -z-10 size-72 rounded-full bg-lime-400/10 blur-3xl" />
        <h2 className="text-4xl font-extrabold leading-tight">
          Entre para o <span className="text-lime-400">{NOME_APP}</span> e transforme treino em jogo.
        </h2>
        <ul className="mt-8 space-y-4">
          {beneficios.map(({ icone: Icone, texto }) => (
            <li key={texto} className="flex items-center gap-3 text-zinc-300">
              <span className="flex size-10 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                <Icone className="size-5" />
              </span>
              {texto}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 shadow-xl">
        <h1 className="text-2xl font-bold">{titulo}</h1>
        <p className="mt-1 text-sm text-zinc-400">{subtitulo}</p>
        <div className="mt-6">{children}</div>
        <p className="mt-6 text-center text-sm text-zinc-400">{rodape}</p>
      </section>
    </main>
  );
}