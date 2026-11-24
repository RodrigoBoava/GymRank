import SeletorExercicios from "../components/SeletorExercicios";

export default function Exercicios() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl font-extrabold uppercase tracking-wide sm:text-5xl">
        Catálogo de <span className="text-brand-500">exercícios</span>
      </h1>
      <p className="mb-8 mt-2 text-zinc-400">
        Escolha o grupo muscular para ver os exercícios divididos por região, ou use a busca.
      </p>
      <SeletorExercicios />
    </main>
  );
}