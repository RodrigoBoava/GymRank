import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, Loader2, MailCheck } from "lucide-react";
import { supabase } from "../lib/supabase";
import { traduzirErro } from "../lib/erros";
import AuthLayout from "../components/AuthLayout";
import Campo from "../components/Campo";

const rotulos = ["Muito fraca", "Fraca", "Razoável", "Boa", "Forte"];
const cores = ["bg-zinc-700", "bg-red-500", "bg-orange-400", "bg-yellow-400", "bg-lime-400"];

function forcaSenha(s) {
  let pontos = 0;
  if (s.length >= 8) pontos++;
  if (/[A-Z]/.test(s) && /[a-z]/.test(s)) pontos++;
  if (/\d/.test(s)) pontos++;
  if (/[^A-Za-z0-9]/.test(s)) pontos++;
  return pontos;
}

export default function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const forca = forcaSenha(senha);

  async function enviar(e) {
    e.preventDefault();
    setErro("");

    if (nome.trim().length < 2) return setErro("Digite seu nome.");
    if (senha.length < 8) return setErro("A senha precisa ter pelo menos 8 caracteres.");
    if (senha !== confirmar) return setErro("As senhas não são iguais.");

    setEnviando(true);
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: senha,
      options: { data: { nome: nome.trim() } },
    });
    setEnviando(false);

    if (error) return setErro(traduzirErro(error.message));

    if (data.session) navigate("/painel"); // confirmação de e-mail desativada
    else setSucesso(true); // precisa confirmar o e-mail
  }

  if (sucesso) {
    return (
      <AuthLayout
        titulo="Confirme seu e-mail"
        subtitulo="Quase lá!"
        rodape={<Link to="/login" className="font-semibold text-lime-400 hover:underline">Ir para o login</Link>}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <MailCheck className="size-14 text-lime-400" />
          <p className="text-zinc-300">
            Enviamos um link de confirmação para <strong>{email}</strong>. Clique nele para ativar sua
            conta e depois faça login.
          </p>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      titulo="Crie sua conta"
      subtitulo="Leva menos de um minuto."
      rodape={
        <>
          Já tem conta?{" "}
          <Link to="/login" className="font-semibold text-lime-400 hover:underline">Entrar</Link>
        </>
      }
    >
      <form onSubmit={enviar} className="space-y-4" noValidate>
        <Campo
          id="nome" label="Nome" icone={User} type="text" autoComplete="name"
          placeholder="Como quer ser chamado" value={nome} onChange={(e) => setNome(e.target.value)} required
        />
        <Campo
          id="email" label="E-mail" icone={Mail} type="email" autoComplete="email"
          placeholder="voce@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required
        />

        <div>
          <Campo
            id="senha" label="Senha" icone={Lock} type={mostrar ? "text" : "password"}
            autoComplete="new-password" placeholder="Mínimo de 8 caracteres"
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
          {senha && (
            <div className="mt-2">
              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full ${i < forca ? cores[forca] : "bg-zinc-800"}`} />
                ))}
              </div>
              <p className="mt-1 text-xs text-zinc-500">Força da senha: {rotulos[forca]}</p>
            </div>
          )}
        </div>

        <Campo
          id="confirmar" label="Confirmar senha" icone={Lock} type={mostrar ? "text" : "password"}
          autoComplete="new-password" placeholder="Repita a senha"
          value={confirmar} onChange={(e) => setConfirmar(e.target.value)} required
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
          {enviando ? "Criando conta..." : "Criar conta"}
        </button>
      </form>
    </AuthLayout>
  );
}