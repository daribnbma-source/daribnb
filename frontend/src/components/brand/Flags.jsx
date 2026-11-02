import React from "react";

// Drapeaux dessinés en SVG (les émojis drapeaux ne s'affichent pas sous Windows).
export function FlagFR({ className = "h-5 w-auto" }) {
  return (
    <svg viewBox="0 0 3 2" className={className} role="img" aria-label="France">
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  );
}

export function FlagMA({ className = "h-5 w-auto" }) {
  return (
    <svg viewBox="0 0 90 60" className={className} role="img" aria-label="Maroc">
      <rect width="90" height="60" fill="#C1272D" />
      <path d="M45.0 16.0 L53.8 43.1 L30.7 26.4 L59.3 26.4 L36.2 43.1 Z" fill="none" stroke="#006233" strokeWidth="4" strokeLinejoin="miter" />
    </svg>
  );
}
