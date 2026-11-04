import React from "react";
import { ChevronDown } from "lucide-react";

// Liste déroulante native, même look que l'ancien Select Radix une fois fermée
// (~60 Ko de JS en moins sur la home : Radix Select + floating-ui + remove-scroll).
// Sur mobile, le sélecteur natif du système s'ouvre, ce qui est plus confortable.
// `className` s'ajoute aux classes de base : il doit fournir hauteur, arrondi, bordure et fond.
export default function NativeSelect({ value, onValueChange, placeholder = "Choisir...", options, className = "", ...props }) {
  return (
    <div className="relative">
      <select
        value={value || ""}
        onChange={(e) => onValueChange(e.target.value)}
        className={`flex w-full cursor-pointer appearance-none items-center truncate border px-3 py-2 pr-9 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-ring md:text-sm ${
          value ? "text-[#1A1A1A]" : "text-muted-foreground"
        } ${className}`}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.v} value={o.v} className="text-[#1A1A1A]">
            {o.l}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
    </div>
  );
}
