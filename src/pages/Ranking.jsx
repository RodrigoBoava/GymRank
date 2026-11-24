const dados = [
  { nome: "Carlos", exercicio: "Supino", resultado: "120 kg", pontos: 1200 },
  { nome: "Ana", exercicio: "Esteira 5 km", resultado: "24 min", pontos: 1150 },
  { nome: "João", exercicio: "Supino", resultado: "100 kg", pontos: 1000 },
];

export default function Ranking() {
  const ordenado = [...dados].sort((a, b) => b.pontos - a.pontos);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="mb-6 text-3xl font-bold">🏆 Ranking</h2>
      <ul className="space-y-3">
        {ordenado.map((u, i) => (
          <li
            key={u.nome}
            className="flex items-center justify-between rounded-xl bg-zinc-900 p-4"
          >
            <span className="text-xl font-bold text-lime-400">#{i + 1}</span>
            <div className="flex-1 px-4">
              <p className="font-semibold">{u.nome}</p>
              <p className="text-sm text-zinc-400">
                {u.exercicio}: {u.resultado}
              </p>
            </div>
            <span className="font-mono">{u.pontos} pts</span>
          </li>
        ))}
      </ul>
    </main>
  );
}