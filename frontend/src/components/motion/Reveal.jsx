import React, { useEffect, useRef } from "react";
import { onceInView, revealEl } from "./inView";

// Apparition douce au scroll (une seule fois), en CSS (.reveal dans index.css). `delay` en secondes.
// L'état visible est posé directement sur le DOM (classList) : rien ne change dans le rendu React,
// donc aucun écart d'hydratation avec le HTML pré-rendu.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  margin = "0px 0px -12% 0px",
  className = "",
  as: Tag = "div",
  style,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => onceInView(ref.current, revealEl, margin), [margin]);
  const vars = { "--ry": `${y}px` };
  if (x) vars["--rx"] = `${x}px`;
  if (delay) vars["--rd"] = `${delay}s`;
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ ...vars, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
