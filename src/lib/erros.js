export function traduzirErro(msg = "") {
  const m = msg.toLowerCase();
  if (m.includes("already registered")) return "Este e-mail já está cadastrado.";
  if (m.includes("invalid login")) return "E-mail ou senha incorretos.";
  if (m.includes("email not confirmed")) return "Confirme seu e-mail antes de entrar (veja sua caixa de entrada).";
  if (m.includes("rate limit")) return "Muitas tentativas. Aguarde um pouco e tente de novo.";
  if (m.includes("password")) return "Senha inválida. Use pelo menos 8 caracteres.";
  if (m.includes("fetch")) return "Sem conexão com o servidor. Verifique sua internet.";
  return "Algo deu errado. Tente novamente.";
}