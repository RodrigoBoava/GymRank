export default function Campo({ id, label, icone: Icone, direita, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-zinc-300">
        {label}
      </label>
      <div className="relative">
        {Icone && (
          <Icone className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-zinc-500" />
        )}
        <input
          id={id}
          className={`min-h-12 w-full rounded-xl border border-white/10 bg-ink-900 py-3 text-base text-white placeholder-zinc-500 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 ${
            Icone ? "pl-11" : "pl-4"
          } ${direita ? "pr-12" : "pr-4"}`}
          {...props}
        />
        {direita && <div className="absolute right-3.5 top-1/2 -translate-y-1/2">{direita}</div>}
      </div>
    </div>
  );
}