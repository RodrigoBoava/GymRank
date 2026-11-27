import { Minus, Plus } from "lucide-react";
import { num } from "../lib/cargas.js";

// Campo numérico com botões - e + (grandes, para usar com o celular durante o treino)
export default function Stepper({ valor, onChange, passo = 1, min = 0, max = 2000, rotulo, sufixo, id, placeholder = "0" }) {
  const mudar = (delta) => {
    const atual = num(valor) ?? 0;
    const novo = Math.min(max, Math.max(min, Math.round((atual + delta) * 100) / 100));
    onChange(String(novo).replace(".", ","));
  };
  const botao = "grid min-h-12 w-11 shrink-0 place-items-center text-zinc-300 transition active:bg-white/10";

  return (
    <div className="flex min-w-0 flex-col gap-1">
      {rotulo && <label htmlFor={id} className="text-xs font-medium text-zinc-400">{rotulo}</label>}
      <div className="flex items-stretch overflow-hidden rounded-xl border border-white/10 bg-ink-900 focus-within:border-brand-500">
        <button type="button" aria-label={`Diminuir ${rotulo ?? ""}`.trim()} onClick={() => mudar(-passo)} className={botao}>
          <Minus className="size-5" />
        </button>
        <div className="relative min-w-0 flex-1">
          <input
            id={id} inputMode="decimal" value={valor} placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className="h-full w-full bg-transparent px-1 text-center text-lg font-bold text-white outline-none placeholder:text-zinc-600"
          />
          {sufixo && <span className="pointer-events-none absolute bottom-0.5 right-1.5 text-[10px] text-zinc-500">{sufixo}</span>}
        </div>
        <button type="button" aria-label={`Aumentar ${rotulo ?? ""}`.trim()} onClick={() => mudar(passo)} className={botao}>
          <Plus className="size-5" />
        </button>
      </div>
    </div>
  );
}
