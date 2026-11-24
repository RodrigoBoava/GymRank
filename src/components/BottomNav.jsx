import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { LINKS } from "../lib/navegacao";

export default function BottomNav() {
  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink-950/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {LINKS.map(({ to, nome, icone: Icone }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `relative flex min-h-16 flex-col items-center justify-center gap-1 text-[11px] font-semibold transition ${
                  isActive ? "text-brand-400" : "text-zinc-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="aba-ativa"
                      className="absolute inset-x-5 top-0 h-0.5 rounded-full bg-brand-500"
                    />
                  )}
                  <Icone className="size-6" />
                  {nome}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}