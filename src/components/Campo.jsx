export default function Campo({ id, label, icone: Icone, direita, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-zinc-300">
        {label}
      </label>
      <div className="relative">
        {Icone && (
          <Icone className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-zinc-500" />
        )}
        <input
          id={id}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-10 pr-11 text-white placeholder-zinc-600 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30"
          {...props}
        />
        {direita && <div className="absolute right-3 top-1/2 -translate-y-1/2">{direita}</div>}
      </div>
    </div>
  );
}