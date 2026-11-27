import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import icone from "../assets/gymrank-icone.png";
import { NOME_APP } from "../lib/marca";
import { LINKS } from "../lib/navegacao";

export default function Navbar() {
  const { user, sair } = useAuth();
  const inicio = NOME_APP.slice(0, 3);
  const fim = NOME_APP.slice(3);
  const inicial = (user?.user_metadata?.nome ?? user?.email ?? "A").charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${NOME_APP}: página inicial`}>
          <img src={icone} alt="" className="size-10 object-contain" />
          <span className="font-display text-2xl font-extrabold uppercase tracking-wide">
            {inicio}
            <span className="text-brand-500">{fim}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.slice(0, 4).map(({ to, nome }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative py-2 text-sm font-semibold transition ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {nome}
                  {isActive && (
                    <motion.span
                      layoutId="nav-ativo"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Link to="/ficha" className="btn-ghost btn-sm hidden md:inline-flex">
                Minha ficha
              </Link>
              <Link
                to="/painel"
                aria-label="Meu painel"
                className="grid size-10 place-items-center rounded-full bg-azul-500/20 text-sm font-bold text-azul-300 ring-1 ring-azul-400/40 transition hover:bg-azul-500/30"
              >
                {inicial}
              </Link>
              <button onClick={sair} aria-label="Sair" className="btn-ghost btn-sm !px-3">
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-2 text-sm font-semibold text-zinc-300 transition hover:text-white">
                Entrar
              </Link>
              <Link to="/cadastro" className="btn-primary btn-sm">
                Criar conta
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
