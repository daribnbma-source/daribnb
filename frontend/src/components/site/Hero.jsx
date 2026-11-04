import React, { useEffect, useRef, useState } from "react";
import { Star, ArrowRight, Check } from "lucide-react";
import Simulator from "./Simulator";
import Reveal from "../motion/Reveal";
import { isPrerender } from "../../lib/isPrerender";
import { FlagFR, FlagMA } from "../brand/Flags";

const IMG_BACK = "/assets/logements/logement-1-sejour.webp";
const IMG_MID = "/assets/logements/logement-2-chambre.webp";
const CITIES = ["Marrakech", "Tanger", "Rabat", "Casablanca"];
// Vrais versements reçus par des propriétaires Daribnb (mêmes données que le simulateur).
// Booking : ajouter ici les montants réels (captures) ; ils s'intercalent avec Airbnb.
const PLATFORMS = {
  airbnb: { logo: "/logos/airbnb-belo.svg", label: "Airbnb · versement envoyé", bg: "bg-white" },
  booking: { logo: "/logos/booking-icon.svg", label: "Booking.com · paiement reçu", bg: "bg-transparent" },
};
const AIRBNB_PAYOUTS = [1029.18, 785.4, 1052.81, 660.79, 801.64];
const BOOKING_PAYOUTS = [];
const PAYOUTS = AIRBNB_PAYOUTS.flatMap((amount, k) =>
  k < BOOKING_PAYOUTS.length
    ? [{ p: "airbnb", amount }, { p: "booking", amount: BOOKING_PAYOUTS[k] }]
    : [{ p: "airbnb", amount }]
);

// Rotation d'un texte : sortie (swap-out) puis entrée (swap-in) de la valeur suivante, en CSS.
// Premier rendu sans classe d'animation : identique au HTML pré-rendu (pas d'écart d'hydratation).
function useSwap(count, every, outMs) {
  const [state, setState] = useState({ i: 0, phase: "" });
  useEffect(() => {
    if (isPrerender() || count < 2) return;
    let swapT;
    const t = setInterval(() => {
      setState((s) => ({ ...s, phase: "swap-out" }));
      swapT = setTimeout(() => setState((s) => ({ i: (s.i + 1) % count, phase: "swap-in" })), outMs);
    }, every);
    return () => {
      clearInterval(t);
      clearTimeout(swapT);
    };
  }, [count, every, outMs]);
  return state;
}

function RotatingCity() {
  // Les villes changent même en mouvement réduit (simple fondu, sans glissement ni flou).
  const { i, phase } = useSwap(CITIES.length, 2400, 550);
  return (
    <span className="relative inline-grid align-bottom">
      {/* largeur réservée par le mot le plus long, pour que la ligne ne saute pas */}
      <span
        aria-hidden="true"
        data-w="Casablanca"
        className="invisible col-start-1 row-start-1 before:content-[attr(data-w)]"
      />
      <span className={`col-start-1 row-start-1 text-[#C1272D] ${phase}`}>{CITIES[i]}</span>
    </span>
  );
}

function PayoutToast() {
  // Mouvement réduit : les versements défilent aussi, en fondu seul.
  const { i, phase } = useSwap(PAYOUTS.length, 3200, 350);
  const { p, amount: value } = PAYOUTS[i];
  const amount = value.toLocaleString("fr-FR", { minimumFractionDigits: 2 });
  const pf = PLATFORMS[p];
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/95 p-3 pr-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] backdrop-blur">
      <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl ${pf.bg} ring-1 ring-black/5`}>
        <img src={pf.logo} alt={p === "airbnb" ? "Airbnb" : "Booking.com"} width="40" height="40" className={p === "airbnb" ? "h-7 w-7" : "h-10 w-10"} />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">{pf.label}</p>
        <p
          className={`font-heading text-lg font-bold tabular-nums text-[#1A1A1A] ${phase}`}
          style={{ "--sy": "8px", "--sb": "0px", "--sd": "0.35s" }}
        >
          + {amount} €
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const visualRef = useRef(null);

  // Parallaxe au scroll (plans à vitesses différentes) + légère profondeur au pointeur (desktop).
  // Tout passe par des variables CSS posées sur le conteneur du visuel : aucun rendu React.
  useEffect(() => {
    const section = ref.current;
    const visual = visualRef.current;
    if (!section || !visual || isPrerender()) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const st = visual.style;
    let raf = 0;
    let scrollQueued = false;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };

    const applyScroll = () => {
      scrollQueued = false;
      const r = section.getBoundingClientRect();
      if (r.bottom < 0) return;
      const p = Math.min(1, Math.max(0, -r.top / r.height));
      st.setProperty("--p-back", `${p * 60}px`);
      st.setProperty("--p-scale", String(1 + p * 0.08));
      st.setProperty("--p-mid", `${p * -90}px`);
      st.setProperty("--p-front", `${p * -170}px`);
    };
    const onScroll = () => {
      if (scrollQueued) return;
      scrollQueued = true;
      requestAnimationFrame(applyScroll);
    };
    // Ressort amorti simplifié : on rapproche la valeur courante de la cible à chaque image.
    const stepPointer = () => {
      cur.x += (target.x - cur.x) * 0.08;
      cur.y += (target.y - cur.y) * 0.08;
      st.setProperty("--ptr-mx", `${cur.x * -14}px`);
      st.setProperty("--ptr-my", `${cur.y * -10}px`);
      st.setProperty("--ptr-fx", `${cur.x * -26}px`);
      st.setProperty("--ptr-fy", `${cur.y * -18}px`);
      raf = Math.abs(target.x - cur.x) + Math.abs(target.y - cur.y) > 0.001 ? requestAnimationFrame(stepPointer) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(stepPointer);
    };
    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      const r = visual.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width - 0.5;
      target.y = (e.clientY - r.top) / r.height - 0.5;
      kick();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    visual.addEventListener("pointermove", onMove);
    visual.addEventListener("pointerleave", onLeave);
    applyScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      visual.removeEventListener("pointermove", onMove);
      visual.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      data-testid="hero-section"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Fond : crème + motif étoile zellige + halo rouge/vert */}
      <div aria-hidden="true" className="absolute inset-0 grid-light" />
      <div aria-hidden="true" className="absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-[#C1272D]/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-52 -left-40 h-[34rem] w-[34rem] rounded-full bg-[#006233]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Texte */}
          <div className="lg:col-span-6">
            <div
              style={{ animationDuration: "0.6s" }}
              className="h-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#006233]/15 bg-white/80 px-4 py-2 text-sm font-semibold text-[#006233] backdrop-blur"
            >
              <span className="flex items-center gap-1">
                <FlagFR className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" />
                <FlagMA className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" />
              </span>
              Savoir-faire français, conciergerie au Maroc<span className="hidden sm:inline"> · 7 ans de terrain</span>
            </div>

            <h1
              data-testid="hero-title"
              // Visible dès le premier rendu (élément LCP) : seule la position est animée.
              style={{ animationDelay: "0.1s" }}
              className="h-slide font-heading text-[2.1rem] font-bold leading-[1.06] tracking-tight text-[#1A1A1A] sm:text-[3.4rem] lg:text-[2.75rem] xl:text-[3.4rem] 2xl:text-[3.9rem]"
            >
              Votre Airbnb à <RotatingCity />{" "}
              <br />
              <span className="whitespace-nowrap">géré comme un pro.</span>
              <span className="sr-only"> Conciergerie Airbnb à Marrakech, Tanger, Rabat et Casablanca.</span>
            </h1>

            <p
              style={{ "--hy": "20px", animationDelay: "0.25s" }}
              className="h-slide mt-6 max-w-xl text-lg leading-relaxed text-[#4B5563] md:text-xl"
            >
              Conciergerie clé en main ou loyer fixe garanti. On gère votre bien comme si c'était le
              nôtre : annonce, prix, ménage, voyageurs. <strong className="text-[#1A1A1A]">Vous encaissez.</strong>
            </p>

            <ul
              className="mt-7 grid gap-2.5 sm:grid-cols-2"
            >
              {[
                "Annonce et photos pro",
                "Prix ajustés chaque jour",
                "Ménage et linge hôtelier",
                "Voyageurs accueillis 24/7",
              ].map((item, k) => (
                <li
                  key={item}
                  style={{ animationDelay: `${0.4 + k * 0.08}s` }}
                  className="h-left flex items-center gap-2.5 text-[15px] text-[#1A1A1A]"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#006233]">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div
              style={{ animationDelay: "0.6s" }}
              className="h-up mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#simulator"
                data-testid="hero-cta-primary"
                className="cta-pulse group inline-flex items-center justify-center gap-2 rounded-full bg-[#C1272D] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#A01D22]"
              >
                Estimer mes revenus
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/212726156448?text=Bonjour%20Daribnb%2C%20je%20souhaite%20en%20savoir%20plus"
                target="_blank"
                rel="noreferrer"
                data-testid="hero-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-8 py-4 font-semibold text-[#1A1A1A] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div
              style={{ animationDelay: "0.8s" }}
              className="h-fade mt-8 flex items-center gap-3"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C1272D] text-[#C1272D]" />
                ))}
              </div>
              <p className="text-sm text-[#4B5563]">
                <span className="font-semibold text-[#1A1A1A]">4,93/5</span> sur 1 196 avis voyageurs Airbnb
              </p>
            </div>
          </div>

          {/* Visuel en couches */}
          <div ref={visualRef} className="relative lg:col-span-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px]">
              {/* Plan arrière : grande photo */}
              <div className="par-back absolute inset-0">
                <div className="h-clip absolute inset-0 overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(26,26,26,0.55)]">
                  <img
                    src={IMG_BACK}
                    alt="Séjour lumineux d'un appartement à Tanger géré par Daribnb"
                    width="1536"
                    height="1024"
                    loading="eager"
                    fetchpriority="high"
                    className="par-back-img h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#1A1A1A] backdrop-blur">
                    Logement géré à Tanger
                  </div>
                </div>
              </div>

              {/* Plan du milieu : seconde photo */}
              <div className="par-mid absolute -left-6 bottom-16 hidden w-[44%] sm:block md:-left-12">
                <div className="h-mid" style={{ animationDelay: "0.45s" }}>
                  <div className="ptr-mid overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                    <img src={IMG_MID} alt="Chambre d'un logement Daribnb" width="1200" height="900" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Premier plan : cartes de preuve réelles */}
              <div className="par-front pointer-events-none absolute inset-0">
                <div className="ptr-front absolute -right-3 top-8 md:-right-10">
                  <div className="h-up" style={{ "--hy": "-20px", animationDelay: "0.8s" }}>
                    <PayoutToast />
                  </div>
                </div>
                <div className="ptr-front absolute -bottom-5 right-4 md:-right-6">
                  <div style={{ animationDelay: "1.05s" }} className="h-pop rounded-2xl bg-[#006233] px-5 py-4 text-white shadow-[0_20px_50px_-12px_rgba(0,98,51,0.6)]">
                    <p className="font-heading text-3xl font-bold leading-none">
                      4,93<span className="ml-1 text-lg text-white/80">★</span>
                    </p>
                    <p className="mt-1 text-xs text-white/80">1 196 avis Airbnb</p>
                  </div>
                </div>
                <div className="ptr-mid absolute right-8 top-[42%] hidden md:block">
                  <div style={{ "--hy": "10px", animationDelay: "1.25s", animationDuration: "0.6s" }} className="h-up flex items-center gap-2 rounded-full bg-[#1A1A1A] px-4 py-2 text-xs font-semibold text-white shadow-xl">
                    <span className="h-2 w-2 rounded-full bg-[#4ADE80]" />
                    Airbnb · Booking.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simulateur */}
        <Reveal y={40} margin="0px 0px -10% 0px" style={{ "--rdur": "0.8s" }} className="mt-20 lg:mt-28">
          <Simulator />
        </Reveal>
      </div>
    </section>
  );
}
