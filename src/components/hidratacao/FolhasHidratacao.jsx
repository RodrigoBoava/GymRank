import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, Sparkles, Trash2 } from "lucide-react";
import Folha from "../Folha";
import Stepper from "../Stepper";
import {
  ML_POR_KG, ML_POR_SESSAO, META_MAX, META_MIN, dataHoraLocal, formatarLitros, formatarMl, horaDoIso,
  validarMeta, validarQuantidade,
} from "../../lib/hidratacao.js";

const textoFonte = {
  ficha: "dias marcados nas suas fichas",
  nivel: "seu nível de atividade",
  nenhuma: "sem treinos informados",
};

// ---------- Ajustar a meta diária ----------
export function FolhaMeta({ aberta, onFechar, meta_ml, sugestao, onSalvar }) {
  const [valor, setValor] = useState(String(meta_ml));
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);

  async function salvar(novo, origem) {
    setSalvando(true);
    setErro("");
    try {
      await onSalvar(novo, origem);
      onFechar();
    } catch {
      setErro("Não foi possível salvar a meta. Tente de novo.");
    } finally {
      setSalvando(false);
    }
  }

  function enviar(e) {
    e.preventDefault();
    const v = validarMeta(valor);
    if (!v.ok) return setErro(v.erro);
    salvar(v.valor, v.valor === sugestao.meta_ml ? "sugerida" : "manual");
  }

  return (
    <Folha aberta={aberta} onFechar={onFechar} titulo="Meta diária de água" largura="max-w-md">
      <div className="rounded-2xl border border-azul-400/20 bg-azul-500/10 p-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-azul-300">
          <Sparkles className="size-4" /> Estimativa do GymRank: {formatarLitros(sugestao.meta_ml)}
        </p>
        {sugestao.provisoria ? (
          <p className="mt-2 text-sm text-zinc-300">
            Valor provisório e conservador, porque seu peso ainda não foi informado.{" "}
            <Link to="/ficha?aba=dados" className="font-semibold text-brand-400 hover:underline">Informar peso</Link>
          </p>
        ) : (
          <ul className="mt-2 space-y-1 text-sm text-zinc-300">
            <li>Base: {ML_POR_KG} ml × seu peso = <strong className="text-white">{formatarMl(sugestao.base_ml)}</strong></li>
            <li>
              Treinos: {sugestao.sessoes} por semana ({textoFonte[sugestao.fonteSessoes]}) × {ML_POR_SESSAO} ml ÷ 7 ={" "}
              <strong className="text-white">{formatarMl(sugestao.treino_ml)}</strong>
            </li>
            <li className="text-xs text-zinc-500">Arredondado e limitado entre {formatarLitros(META_MIN)} e {formatarLitros(META_MAX)} por dia.</li>
          </ul>
        )}
      </div>

      <form onSubmit={enviar} className="mt-5 space-y-4">
        <Stepper id="meta-agua" rotulo="Sua meta (ml por dia)" valor={valor} onChange={setValor} passo={100} min={1000} max={6000} sufixo="ml" />
        {erro && <p role="alert" className="text-sm text-red-300">{erro}</p>}
        <div className="grid gap-2 sm:grid-cols-2">
          <button type="button" disabled={salvando} onClick={() => salvar(sugestao.meta_ml, "sugerida")} className="btn-ghost">
            Usar estimativa
          </button>
          <button type="submit" disabled={salvando} className="btn-primary">
            {salvando && <Loader2 className="size-4 animate-spin" />} Salvar meta
          </button>
        </div>
      </form>

      <p className="mt-5 text-xs leading-relaxed text-zinc-500">
        A meta é uma estimativa de referência para adultos saudáveis e inclui água e outras bebidas. Ela não substitui
        a orientação de um médico ou nutricionista. Se você tem alguma condição de saúde que exige controle de líquidos,
        siga a recomendação do seu profissional de saúde. A mudança vale a partir de hoje; os dias anteriores continuam
        avaliados pela meta que estava valendo.
      </p>
    </Folha>
  );
}

// ---------- Corrigir ou excluir um registro ----------
export function FolhaRegistro({ registro, onFechar, onSalvar, onExcluir }) {
  const [qtd, setQtd] = useState(registro ? String(registro.quantidade_ml) : "");
  const [hora, setHora] = useState(registro ? horaDoIso(registro.registrado_em) : "");
  const [erro, setErro] = useState("");
  const [ocupado, setOcupado] = useState(false);

  async function executar(acao) {
    setOcupado(true);
    setErro("");
    try {
      await acao();
      onFechar();
    } catch {
      setErro("Não foi possível salvar. Tente de novo.");
      setOcupado(false);
    }
  }

  function enviar(e) {
    e.preventDefault();
    const v = validarQuantidade(qtd);
    if (!v.ok) return setErro(v.erro);
    if (!/^\d{2}:\d{2}$/.test(hora)) return setErro("Informe um horário válido.");
    executar(() => onSalvar(registro.id, { quantidade_ml: v.valor, registrado_em: dataHoraLocal(registro.data, hora) }));
  }

  return (
    <Folha aberta={Boolean(registro)} onFechar={onFechar} titulo="Editar registro" largura="max-w-md">
      {registro && (
        <form onSubmit={enviar} className="space-y-4">
          <Stepper id="registro-qtd" rotulo="Quantidade (ml)" valor={qtd} onChange={setQtd} passo={50} min={0} max={2000} sufixo="ml" />
          <div className="flex flex-col gap-1">
            <label htmlFor="registro-hora" className="text-xs font-medium text-zinc-400">Horário</label>
            <input
              id="registro-hora" type="time" value={hora} onChange={(e) => setHora(e.target.value)}
              className="min-h-12 rounded-xl border border-white/10 bg-ink-900 px-4 text-lg font-bold text-white outline-none focus:border-brand-500 [color-scheme:dark]"
            />
          </div>
          {erro && <p role="alert" className="text-sm text-red-300">{erro}</p>}
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <button
              type="button" disabled={ocupado} onClick={() => executar(() => onExcluir(registro.id))}
              className="btn-ghost !border-red-500/30 !text-red-300 hover:!bg-red-500/10" aria-label="Excluir registro"
            >
              <Trash2 className="size-5" /> Excluir
            </button>
            <button type="submit" disabled={ocupado} className="btn-primary">
              {ocupado && <Loader2 className="size-4 animate-spin" />} Salvar
            </button>
          </div>
        </form>
      )}
    </Folha>
  );
}