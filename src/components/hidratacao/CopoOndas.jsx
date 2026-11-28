import { useId } from "react";
import { motion } from "framer-motion";

// Círculo que "enche" de água conforme o progresso, com ondas animadas na superfície.
// pct: 0 a 100. atingida: muda o tom para verde.
export default function CopoOndas({ pct, atingida, children, tamanho = 196 }) {
  const id = useId().replace(/:/g, "");
  const nivel = Math.max(0, Math.min(100, pct));
  // y da superfície: 100% = topo (8), 0% = fundo (192)
  const superficie = 192 - (nivel / 100) * 184;
  const corA = atingida ? "#34d399" : "#4aa3ff";
  const corB = atingida ? "#10b981" : "#1d84f5";

  // Uma onda com o dobro da largura do círculo, deslocada em loop
  const onda = (amp, y) =>
    `M0 ${y} Q 50 ${y - amp} 100 ${y} T 200 ${y} T 300 ${y} T 400 ${y} V 220 H 0 Z`;

  return (
    <div className="relative shrink-0" style={{ width: tamanho, height: tamanho }}>
      <svg viewBox="0 0 200 200" className="size-full" aria-hidden="true">
        <defs>
          <clipPath id={`copo-${id}`}>
            <circle cx="100" cy="100" r="88" />
          </clipPath>
          <linearGradient id={`agua-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={corA} stopOpacity="0.95" />
            <stop offset="100%" stopColor={corB} stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Fundo e aro */}
        <circle cx="100" cy="100" r="88" fill="#0c0f15" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
        <motion.circle
          cx="100" cy="100" r="95" fill="none" stroke={corA} strokeWidth="6" strokeLinecap="round"
          pathLength={100} strokeDasharray="100 100" transform="rotate(-90 100 100)"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 100 - nivel }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
        />

        {/* Água */}
        <g clipPath={`url(#copo-${id})`}>
          <motion.g initial={{ y: 192 }} animate={{ y: superficie }} transition={{ type: "spring", stiffness: 50, damping: 16 }}>
            <motion.path
              d={onda(7, 0)} fill={corB} opacity="0.45"
              animate={{ x: [0, -200] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d={onda(5, 4)} fill={`url(#agua-${id})`}
              animate={{ x: [-200, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </motion.g>
          {/* Bolhas sutis */}
          {nivel > 8 &&
            [40, 82, 128, 160].map((x, i) => (
              <motion.circle
                key={x} cx={x} r={i % 2 ? 2.5 : 3.5} fill="rgba(255,255,255,0.35)"
                initial={{ cy: 196, opacity: 0 }}
                animate={{ cy: [196, superficie + 10], opacity: [0, 0.8, 0] }}
                transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.9, ease: "easeOut" }}
              />
            ))}
        </g>

        {/* Brilho */}
        <path d="M48 62 A 62 62 0 0 1 92 34" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">{children}</div>
    </div>
  );
}