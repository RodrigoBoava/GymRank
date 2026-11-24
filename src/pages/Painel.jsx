import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Painel() {
  const { user, carregando } = useAuth();

  if (carregando) return <p className="p-10 text-center text-zinc-400">Carregando...</p>;
  if (!user) return <Navigate to="/login" replace />;

  const nome = user.user_metadata?.nome ?? "atleta";

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">
        Olá, <span className="text-lime-400">{nome}</span> 👋
      </h1>
      <p className="mt-2 text-zinc-400">{user.email}</p>

      <div className="mt-8 rounded-2xl border border-dashed border-zinc-700 p-8 text-center text-zinc-400">
        Aqui vão aparecer os seus treinos e a sua posição no ranking.
      </div>
    </main>
  );
}