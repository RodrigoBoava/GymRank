// Datas sempre no horário LOCAL do usuário (evita virar o dia às 21h no Brasil por causa do UTC)
export const DIAS_ID = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

const dois = (n) => String(n).padStart(2, "0");

export const toISO = (d) => `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}`;

export const fromISO = (iso) => {
  const [a, m, d] = iso.split("-").map(Number);
  return new Date(a, m - 1, d);
};

export const hojeISO = () => toISO(new Date());

export const addDias = (iso, n) => {
  const d = fromISO(iso);
  d.setDate(d.getDate() + n);
  return toISO(d);
};

export const diaDaSemanaId = (iso) => DIAS_ID[fromISO(iso).getDay()];

// A semana vai de domingo a sábado, igual ao calendário exibido
export const inicioDaSemana = (iso) => addDias(iso, -fromISO(iso).getDay());

export const mesDe = (iso) => iso.slice(0, 7);

export function diasDoIntervalo(ini, fim) {
  const dias = [];
  for (let d = ini; d <= fim; d = addDias(d, 1)) dias.push(d);
  return dias;
}

export const ultimoDiaDoMes = (ano, mes0) => toISO(new Date(ano, mes0 + 1, 0));

export const nomeDoMes = (ano, mes0) =>
  new Date(ano, mes0, 1).toLocaleDateString("pt-BR", { month: "long", year: "numeric" });

export const formatarData = (iso) =>
  fromISO(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });

export const formatarDataLonga = (iso) =>
  fromISO(iso).toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" });
