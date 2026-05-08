import React from "react";

export default function Logo({ variant = "dark" }) {
  const text = variant === "dark" ? "text-[#C1272D]" : "text-white";
  return (
    <div className="flex items-center gap-2">
      <img
        src="/favicon.svg"
        alt="Daribnb logo"
        className="h-12 md:h-14 w-auto"
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
