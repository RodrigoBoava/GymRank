import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export default function Contador({ ate, duracao = 1.4, sufixo = "" }) {
  const ref = useRef(null);
  const visivel = useInView(ref, { once: true, margin: "-40px" });
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!visivel) return;
    const controles = animate(0, ate, {
      duration: duracao,
      ease: "easeOut",
      onUpdate: (v) => setValor(Math.round(v)),
    });
    return () => controles.stop();
  }, [visivel, ate, duracao]);

  return (
    <span ref={ref}>
      {valor}
      {sufixo}
    </span>
  );
}