import React from "react";

export default function Logo({ variant = "dark" }) {
  const text = variant === "dark" ? "text-[#1A1A1A]" : "text-white";
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/assets/logo.png"
        alt="Daribnb"
        className="w-11 h-11 object-contain"
      />
      <span
        className={`font-black text-2xl tracking-tight ${text}`}
        style={{ fontFamily: "Outfit" }}
      >
        Daribnb
      </span>
    </div>
  );
}
