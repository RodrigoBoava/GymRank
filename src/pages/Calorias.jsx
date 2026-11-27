import { Camera, Flame, Target } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { calcularIdade, calcularTMB, calcularGastoDiario, calcularMeta } from "../lib/calorias";

function metaDoPerfil(perfil) {
  if (!perfil?.sexo || !perfil.data_nascimento || !perfil.peso_kg || !perfil.altura_cm) return null;
  const idade = calcularIdade(perfil.data_nascimento);
  if (idade === null) return null;
  const tmb = calcularTMB({ sexo: perfil.sexo, peso: Number(perfil.peso_kg), altura: Number(perfil.altura_cm), idade });
  const gasto = calcularGastoDiario(tmb, perfil.nivel_atividade);
  return { tmb, gasto, meta: calcularMeta(gasto, perfil.objetivo, tmb) };
}

export default function Calorias() {
  const { perfil } = useAuth();
  const m = metaDoPerfil(perfil);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <span className="rounded-full bg-azul-500/15 px-2.5 py-0.5 text-xs font-bold text-azul-300">Em breve</span>
      <h1 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-wide sm:text-5xl">
        Calorias por <span className="text-brand-500">foto</span>
      </h1>
      <p className="mt-2 text-zinc-400">
        Em breve você fotografa o prato (ou descreve em texto) e a IA estima calorias e macros, comparando com a sua meta do dia.
      </p>

      {m && (
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="cartao flex items-center gap-4 p-4">
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400"><Target className="size-5" /></span>
            <div>
              <p className="text-sm text-zinc-400">Sua meta diária</p>
              <p className="font-display text-3xl font-extrabold text-brand-500">{m.meta} <span className="text-base font-semibold text-zinc-400">kcal</span></p>
            </div>
          </div>
          <div className="cartao flex items-center gap-4 p-4">
            <span className="flex size-11 items-center justify-center rounded-xl bg-azul-500/10 text-azul-300"><Flame className="size-5" /></span>
            <div>
              <p className="text-sm text-zinc-400">Gasto diário estimado</p>
              <p className="font-display text-3xl font-extrabold text-azul-300">{m.gasto} <span className="text-base font-semibold text-zinc-400">kcal</span></p>
            </div>
          </div>
        </div>
      )}

      <div className="cartao mt-6 flex flex-col items-center gap-3 border-dashed p-10 text-center text-zinc-400">
        <Camera className="size-10 text-zinc-500" />
        <p>O envio de foto será liberado junto com a IA de calorias.</p>
      </div>
    </main>
  );
}
