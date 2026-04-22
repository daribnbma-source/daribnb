import React from "react";

export default function Logo({ variant = "dark" }) {
  const text = variant === "dark" ? "text-[#1A1A1A]" : "text-white";
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-9 h-9 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 3 C 11 3, 4 10, 4 20 C 4 30, 20 37, 20 37 C 20 37, 36 30, 36 20 C 36 10, 29 3, 20 3 Z"
            fill="#FF5A5F"
          />
          <path
            d="M14 22 L14 29 L18 29 L18 25 L22 25 L22 29 L26 29 L26 22 L20 17 L14 22 Z"
            fill="white"
          />
          <circle cx="20" cy="11" r="2" fill="#006233" />
        </svg>
      </div>
      <span className={`font-black text-xl tracking-tight ${text}`} style={{ fontFamily: "Outfit" }}>
        Daribnb
      </span>
    </div>
  );
}
