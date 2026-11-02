import React from "react";
import Marquee from "../motion/Marquee";

// Plateformes et outils utilisés au quotidien sur les logements gérés (pas des partenaires :
// on ne dit pas « ils nous font confiance »). Même bandeau que sur Rentimmo Academy.
const LOGOS = [
  { src: "/logos/airbnb.svg", alt: "Airbnb", h: "h-7" },
  { src: "/logos/booking.svg", alt: "Booking.com", h: "h-6" },
  { src: "/logos/pricelabs.svg", alt: "PriceLabs", h: "h-8" },
  { src: "/logos/stripe.svg", alt: "Stripe", h: "h-9" },
  { src: "/logos/airdna.svg", alt: "AirDNA", h: "h-5" },
];

export default function ToolsBand() {
  return (
    <section aria-label="Plateformes et outils" className="relative border-b-4 border-[#C1272D] bg-[#1A1A1A] py-8 text-white">
      <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-white/50">
        Les plateformes et outils qu'on utilise au quotidien
      </p>
      <div className="[mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <Marquee duration={30}>
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <img
              key={i}
              src={l.src}
              alt={i < LOGOS.length ? l.alt : ""}
              aria-hidden={i >= LOGOS.length || undefined}
              loading="lazy"
              className={`${l.h} mx-6 w-auto opacity-70 brightness-0 invert transition-opacity duration-300 hover:opacity-100`}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
