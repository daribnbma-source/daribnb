import React, { useEffect, useRef, useState } from "react";
import { onceInView } from "./inView";
import { isPrerender } from "../../lib/isPrerender";

// Compteur qui monte quand il entre à l'écran. Format français (espace fine, virgule).
// Mouvement réduit : le compteur tourne quand même, plus vite.
const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function CountUp({ to, decimals = 0, duration = 1.6, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const [v, setV] = useState(to);

  useEffect(() => {
    let raf = 0;
    // Pré-rendu : on fige la valeur finale (sinon le HTML capturé en plein comptage casse l'hydratation).
    if (isPrerender()) return;
    const stop = onceInView(
      ref.current,
      () => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const ms = (reduce ? Math.min(duration, 0.8) : duration) * 1000;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / ms);
          setV(to * easeOutExpo(p));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      "0px 0px -10% 0px"
    );
    return () => {
      stop();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  const txt = v.toLocaleString("fr-FR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {txt}
      {suffix}
    </span>
  );
}
