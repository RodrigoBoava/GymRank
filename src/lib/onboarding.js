export const CHAVE_PULOU = "gymrank:onboarding-pulado";

export function jaPulou() {
  try {
    return sessionStorage.getItem(CHAVE_PULOU) === "1";
  } catch {
    return false;
  }
}

export function marcarPulou() {
  try {
    sessionStorage.setItem(CHAVE_PULOU, "1");
  } catch {
    /* navegador sem armazenamento: segue sem salvar */
  }
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