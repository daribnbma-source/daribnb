import React from "react";
import { FlagFR, FlagMA } from "../brand/Flags";

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
        style={{ fontFamily: "Plus Jakarta Sans", fontWeight: 800 }}
      >
        Daribnb
      </span>
      <span className="ml-0.5 flex items-center gap-1" aria-label="France et Maroc">
        <FlagFR className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" />
        <FlagMA className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" />
      </span>
    </div>
  );
}
