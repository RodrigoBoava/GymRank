import { Trophy } from "lucide-react";

// Exemplo ilustrativo: o ranking real será liberado numa próxima fase.
const exemplo = [
  { nome: "Atleta A", exercicio: "Supino", resultado: "120 kg", pontos: 1200 },
  { nome: "Atleta B", exercicio: "Esteira 5 km", resultado: "24 min", pontos: 1150 },
  { nome: "Atleta C", exercicio: "Supino", resultado: "100 kg", pontos: 1000 },
];

export default function Ranking() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <span className="rounded-full bg-azul-500/15 px-2.5 py-0.5 text-xs font-bold text-azul-300">Em breve</span>
      <h1 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-wide sm:text-5xl">
        <Trophy className="mr-2 inline size-9 text-brand-500" />
        Ran<span className="text-brand-500">king</span>
      </h1>
      <p className="mt-2 text-zinc-400">
        Seus recordes de carga e tempo vão virar pontos. Registre seus treinos na sua ficha para chegar pronto quando o ranking abrir.
      </p>

      <p className="mt-8 text-xs uppercase tracking-wider text-zinc-500">Exemplo ilustrativo (dados fictícios)</p>
      <ul className="mt-2 space-y-3 opacity-80">
        {exemplo.map((u, i) => (
          <li key={u.nome} className="cartao flex items-center justify-between p-4">
            <span className="font-display text-2xl font-extrabold text-brand-500">#{i + 1}</span>
            <div className="flex-1 px-4">
              <p className="font-semibold">{u.nome}</p>
              <p className="text-sm text-zinc-400">{u.exercicio}: {u.resultado}</p>
            </div>
            <span className="font-mono">{u.pontos} pts</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
