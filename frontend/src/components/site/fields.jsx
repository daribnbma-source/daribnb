import * as React from "react";

// Champs des formulaires publics, sans `cn`/tailwind-merge (~27 Ko de JS en moins au démarrage).
// Classes identiques au résultat de cn(base shadcn, className) pour les usages du site :
// l'appelant fournit hauteur, arrondi et couleur de bordure (h-*, rounded-*, border-[#…]).
const INPUT_BASE =
  "flex w-full border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
const TEXTAREA_BASE =
  "flex min-h-[60px] w-full border bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

export const Input = React.forwardRef(({ className = "", type, ...props }, ref) => (
  <input
    type={type}
    className={`${INPUT_BASE}${/(^|\s)bg-/.test(className) ? "" : " bg-transparent"} ${className}`}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef(({ className = "", ...props }, ref) => (
  <textarea className={`${TEXTAREA_BASE} ${className}`} ref={ref} {...props} />
));
Textarea.displayName = "Textarea";
