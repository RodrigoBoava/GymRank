import { Link } from "react-router-dom";

export default function NaoEncontrada() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="font-display text-8xl font-extrabold text-brand-500">404</p>
      <h1 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-wide">Página não encontrada</h1>
      <p className="mt-3 text-zinc-400">O endereço que você abriu não existe ou foi movido.</p>
      <Link to="/" className="btn-primary mt-8">Voltar ao início</Link>
    </main>
  );
}
