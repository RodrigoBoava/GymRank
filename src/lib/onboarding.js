// "Pular" é lembrado neste aparelho, por usuário, para o questionário não voltar a cada acesso.
// (A resposta de verdade fica no banco: perfis.onboarding_concluido.)
const chavePulou = (userId) => `gymrank:onboarding-pulado:${userId}`;

export function jaPulou(userId) {
  if (!userId) return false;
  try {
    return localStorage.getItem(chavePulou(userId)) === "1";
  } catch {
    return false;
  }
}

export function marcarPulou(userId) {
  if (!userId) return;
  try {
    localStorage.setItem(chavePulou(userId), "1");
  } catch {
    /* navegador sem armazenamento: segue sem salvar */
  }
}

// O questionário conta como feito se foi concluído OU se a ficha básica já está preenchida
// (contas antigas que preencheram os dados pela tela de perfil).
export function onboardingCompleto(perfil) {
  if (!perfil) return false;
  if (perfil.onboarding_concluido) return true;
  return Boolean(perfil.sexo && perfil.data_nascimento && perfil.peso_kg && perfil.altura_cm);
}

// Objetivo usado no cálculo de calorias (perder = -15%, manter = 0, ganhar = +10%)
const META_PARA_OBJETIVO = {
  ganhar_musculos: "ganhar",
  perder_gordura: "perder",
  definir: "perder",
  ganhar_forca: "manter",
  entrar_em_forma: "manter",
};

export function objetivoDaMeta(meta) {
  return META_PARA_OBJETIVO[meta] ?? "manter";
}