import { Link, NavLink } from "react-router-dom";
import { Dumbbell } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { NOME_APP } from "../lib/marca";

const estiloLink = ({ isActive }) =>
  isActive ? "font-semibold text-lime-400" : "text-zinc-400 transition hover:text-white";

export default function Navbar() {
  const { user, sair } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold">
          <Dumbbell className="text-lime-400" /> {NOME_APP}
        </Link>

        <div className="hidden gap-6 sm:flex">
          <NavLink to="/ranking" className={estiloLink}>Ranking</NavLink>
          <NavLink to="/calorias" className={estiloLink}>Calorias</NavLink>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link to="/painel" className="text-sm text-zinc-300 hover:text-white">Meu painel</Link>
              <button
                onClick={sair}
                className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm hover:bg-zinc-800"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-zinc-300 hover:text-white">Entrar</Link>
              <Link
                to="/cadastro"
                className="rounded-lg bg-lime-400 px-3 py-1.5 text-sm font-bold text-zinc-950 hover:bg-lime-300"
              >
                Criar conta
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}