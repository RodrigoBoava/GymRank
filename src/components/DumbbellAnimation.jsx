import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DURACAO = 2.4;
const tempo = { duration: DURACAO, ease: "easeInOut", repeat: Infinity, times: [0, 0.45, 0.6, 1] };

export default function DumbbellAnimation() {
  const [reps, setReps] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setReps((r) => r + 1), DURACAO * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute inset-0 -z-10 rounded-full bg-lime-400/20 blur-3xl" />

      <svg viewBox="0 0 320 260" className="w-full" role="img" aria-label="Halter sendo levantado">
        {/* chão e sombra */}
        <line x1="30" y1="238" x2="290" y2="238" stroke="#3f3f46" strokeWidth="2" strokeLinecap="round" />
        <motion.ellipse
          cx="160" cy="244" rx="90" ry="8" fill="#000"
          style={{ transformOrigin: "160px 244px" }}
          animate={{ scaleX: [1, 0.65, 0.65, 1], opacity: [0.6, 0.2, 0.2, 0.6] }}
          transition={tempo}
        />

        {/* halter */}
        <motion.g animate={{ y: [0, -110, -110, 0] }} transition={tempo}>
          <rect x="90" y="196" width="140" height="12" rx="6" fill="#a1a1aa" />
          <rect x="68" y="170" width="24" height="64" rx="7" fill="#a3e635" />
          <rect x="48" y="182" width="18" height="40" rx="6" fill="#65a30d" />
          <rect x="228" y="170" width="24" height="64" rx="7" fill="#a3e635" />
          <rect x="254" y="182" width="18" height="40" rx="6" fill="#65a30d" />
        </motion.g>
      </svg>

      <div className="mx-auto -mt-2 w-fit rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm">
        Repetições: <span className="font-mono font-bold text-lime-400">{reps}</span>
      </div>
    </div>
  );
}