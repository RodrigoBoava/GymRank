import { Link } from "react-router-dom";
import icone from "../assets/gymrank-icone.png";
import { NOME_APP } from "../lib/marca";
import { LINKS } from "../lib/navegacao";

export default function Rodape() {
  return (
    <footer className="border-t border-white/10 bg-ink-900/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={icone} alt="" className="size-12 object-contain" />
          <div>
            <p className="font-display text-2xl font-extrabold uppercase tracking-wide">{NOME_APP}</p>
            <p className="text-sm text-zinc-400">Treine, compare e suba no ranking.</p>
          </div>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
          {LINKS.map(({ to, nome }) => (
            <Link key={to} to={to} className="transition hover:text-white">
              {nome}
            </Link>
          ))}
        </nav>
      </div>
      <p className="border-t border-white/5 py-4 text-center text-xs text-zinc-500">
        © 2026 {NOME_APP}. Todos os direitos reservados.
      </p>
    </footer>
  );
}