import React from "react";

// Bandeau qui défile de droite à gauche en boucle (CSS pur, pause au survol, arrêt si mouvement réduit).
export default function Marquee({ children, duration = 32, className = "" }) {
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      {[0, 1].map((k) => (
        <div
          key={k}
          aria-hidden={k === 1}
          className="marquee-track flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${duration}s` }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
