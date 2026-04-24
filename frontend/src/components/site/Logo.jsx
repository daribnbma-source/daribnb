import React from "react";

export default function Logo({ variant = "dark" }) {
  const text =
    variant === "dark" ? "text-[#C1272D]" : "text-white";
  return (
    <div className="flex items-center gap-2">
      <img
        src="/assets/logo.png"
        alt="Daribnb"
        className="h-14 md:h-16 w-auto object-contain"
      />
      <span
        className={`font-black text-2xl md:text-3xl tracking-tight ${text}`}
        style={{ fontFamily: "Outfit" }}
      >
        Daribnb
      </span>
    </div>
  );
}
