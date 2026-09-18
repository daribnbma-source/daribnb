import React from "react";

export default function Logo({ variant = "dark" }) {
  const text = variant === "dark" ? "text-[#C1272D]" : "text-white";
  return (
    <div className="flex items-center gap-2">
      <img
        src="/assets/logo.webp"
        alt="Daribnb logo"
        width="192"
        height="192"
        className="h-10 md:h-12 w-auto"
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
