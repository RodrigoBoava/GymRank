import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";
import { traduzirErro } from "../lib/erros";
import AuthLayout from "../components/AuthLayout";
import Campo from "../components/Campo";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function enviar(e) {
    e.preventDefault();
    setErro("");
    setEnviando(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password: senha });
    setEnviando(false);

    if (error) return setErro(traduzirErro(error.message));
    navigate("/painel");
  }

  return (
    <AuthLayout
      titulo="Bem-vindo de volta"
      subtitulo="Entre para ver seu progresso."
      rodape={
        <>
          Ainda não tem conta?{" "}
          <Link to="/cadastro" className="font-semibold text-lime-400 hover:underline">Cadastre-se</Link>
        </>
      }
    >
      <form onSubmit={enviar} className="space-y-4">
        <Campo
          id="email" label="E-mail" icone={Mail} type="email" autoComplete="email"
          placeholder="voce@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required
        />
        <Campo
          id="senha" label="Senha" icone={Lock} type={mostrar ? "text" : "password"}
          autoComplete="current-password" placeholder="Sua senha"
          value={senha} onChange={(e) => setSenha(e.target.value)} required
          direita={
            <button
              type="button" onClick={() => setMostrar(!mostrar)}
              aria-label={mostrar ? "Ocultar senha" : "Mostrar senha"}
              className="text-zinc-500 hover:text-white"
            >
              {mostrar ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          }
        />

        {erro && (
          <p role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
            {erro}
          </p>
        )}

        <button
          type="submit" disabled={enviando}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 py-3 font-bold text-zinc-950 transition hover:bg-lime-300 disabled:opacity-60"
        >
          {enviando && <Loader2 className="size-5 animate-spin" />}
          {enviando ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </AuthLayout>
  );
}