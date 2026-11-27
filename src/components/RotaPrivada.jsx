import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";

// Protege as páginas que exigem login. Quem não está logado vai para /login.
export default function RotaPrivada({ children }) {
  const { user, carregando } = useAuth();

  if (carregando) {
    return (
      <div className="grid min-h-[50vh] place-items-center text-zinc-400" role="status">
        <Loader2 className="size-8 animate-spin text-brand-500" />
        <span className="sr-only">Carregando</span>
      </div>
    );
  }
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
