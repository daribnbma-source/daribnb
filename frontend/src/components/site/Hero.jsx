import React, { useEffect, useRef, useState } from "react";
import { Star, ArrowRight, Check } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import Simulator from "./Simulator";
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

const ease = [0.22, 1, 0.36, 1];

function RotatingCity() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    // Les villes changent même en mouvement réduit (simple fondu, sans glissement ni flou).
    if (isPrerender()) return;
    const t = setInterval(() => setI((x) => (x + 1) % CITIES.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-grid align-bottom">
      {/* largeur réservée par le mot le plus long, pour que la ligne ne saute pas */}
      <span
        aria-hidden="true"
        data-w="Casablanca"
        className="invisible col-start-1 row-start-1 before:content-[attr(data-w)]"
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={CITIES[i]}
          className="col-start-1 row-start-1 text-[#C1272D]"
          initial={reduce ? { opacity: 0 } : { y: "60%", opacity: 0, filter: "blur(6px)" }}
          animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={reduce ? { opacity: 0 } : { y: "-60%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease }}
        >
          {CITIES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function PayoutToast() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || isPrerender()) return;
    const t = setInterval(() => setI((x) => (x + 1) % PAYOUTS.length), 3200);
    return () => clearInterval(t);
  }, [reduce]);
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
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={p + amount}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="font-heading text-lg font-bold tabular-nums text-[#1A1A1A]"
          >
            + {amount} €
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Plans à vitesses différentes : fond lent, photo du milieu plus rapide, cartes au premier plan encore plus.
  const backY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const backScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const frontY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -170]);

  // Légère profondeur au pointeur (desktop)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  const midX = useTransform(sx, (v) => v * -14);
  const midYp = useTransform(sy, (v) => v * -10);
  const frontX = useTransform(sx, (v) => v * -26);
  const frontYp = useTransform(sy, (v) => v * -18);
  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#006233]/15 bg-white/80 px-4 py-2 text-sm font-semibold text-[#006233] backdrop-blur"
            >
              <span className="flex items-center gap-1">
                <FlagFR className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" />
                <FlagMA className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" />
              </span>
              Savoir-faire français, conciergerie au Maroc<span className="hidden sm:inline"> · 7 ans de terrain</span>
            </motion.div>

            <motion.h1
              data-testid="hero-title"
              // Visible dès le premier rendu (élément LCP) : seule la position est animée.
              initial={{ y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-heading text-[2.1rem] font-bold leading-[1.06] tracking-tight text-[#1A1A1A] sm:text-[3.4rem] lg:text-[2.75rem] xl:text-[3.4rem] 2xl:text-[3.9rem]"
            >
              Votre Airbnb à <RotatingCity />{" "}
              <br />
              <span className="whitespace-nowrap">géré comme un pro.</span>
              <span className="sr-only"> Conciergerie Airbnb à Marrakech, Tanger, Rabat et Casablanca.</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-[#4B5563] md:text-xl"
            >
              Conciergerie clé en main ou loyer fixe garanti. On gère votre bien comme si c'était le
              nôtre : annonce, prix, ménage, voyageurs. <strong className="text-[#1A1A1A]">Vous encaissez.</strong>
            </motion.p>

            <motion.ul
              initial="h"
              animate="s"
              variants={{ s: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
              className="mt-7 grid gap-2.5 sm:grid-cols-2"
            >
              {[
                "Annonce et photos pro",
                "Prix ajustés chaque jour",
                "Ménage et linge hôtelier",
                "Voyageurs accueillis 24/7",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={{ h: { opacity: 0, x: -10 }, s: { opacity: 1, x: 0 } }}
                  className="flex items-center gap-2.5 text-[15px] text-[#1A1A1A]"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#006233]">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C1272D] text-[#C1272D]" />
                ))}
              </div>
              <p className="text-sm text-[#4B5563]">
                <span className="font-semibold text-[#1A1A1A]">4,93/5</span> sur 1 196 avis voyageurs Airbnb
              </p>
            </motion.div>
          </div>

          {/* Visuel en couches */}
          <div className="relative lg:col-span-6" onPointerMove={onMove} onPointerLeave={() => { px.set(0); py.set(0); }}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px]">
              {/* Plan arrière : grande photo */}
              <motion.div
                initial={{ scale: 0.97, clipPath: "inset(4% 4% 4% 4% round 2rem)" }}
                animate={{ scale: 1, clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
                transition={{ duration: 1.1, ease }}
                style={{ y: backY }}
                className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(26,26,26,0.55)]"
              >
                <motion.img
                  src={IMG_BACK}
                  alt="Séjour lumineux d'un appartement à Tanger géré par Daribnb"
                  width="1536"
                  height="1024"
                  loading="eager"
                  fetchpriority="high"
                  style={{ scale: backScale }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#1A1A1A] backdrop-blur">
                  Logement géré à Tanger
                </div>
              </motion.div>

              {/* Plan du milieu : seconde photo */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -6 }}
                animate={{ opacity: 1, x: 0, rotate: -4 }}
                transition={{ duration: 0.9, delay: 0.45, ease }}
                style={{ y: midY }}
                className="absolute -left-6 bottom-16 hidden w-[44%] sm:block md:-left-12"
              >
                <motion.div style={{ x: midX, y: midYp }} className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                  <img src={IMG_MID} alt="Chambre d'un logement Daribnb" loading="eager" className="aspect-[4/3] w-full object-cover" />
                </motion.div>
              </motion.div>

              {/* Premier plan : cartes de preuve réelles */}
              <motion.div style={{ y: frontY }} className="pointer-events-none absolute inset-0">
                <motion.div
                  style={{ x: frontX, y: frontYp }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8, ease }}
                  className="absolute -right-3 top-8 md:-right-10"
                >
                  <PayoutToast />
                </motion.div>
                <motion.div
                  style={{ x: frontX, y: frontYp }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.05, ease }}
                  className="absolute -bottom-5 right-4 md:-right-6"
                >
                  <div className="rounded-2xl bg-[#006233] px-5 py-4 text-white shadow-[0_20px_50px_-12px_rgba(0,98,51,0.6)]">
                    <p className="font-heading text-3xl font-bold leading-none">
                      4,93<span className="ml-1 text-lg text-white/80">★</span>
                    </p>
                    <p className="mt-1 text-xs text-white/80">1 196 avis Airbnb</p>
                  </div>
                </motion.div>
                <motion.div
                  style={{ x: midX, y: midYp }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.25, ease }}
                  className="absolute right-8 top-[42%] hidden md:block"
                >
                  <div className="flex items-center gap-2 rounded-full bg-[#1A1A1A] px-4 py-2 text-xs font-semibold text-white shadow-xl">
                    <span className="h-2 w-2 rounded-full bg-[#4ADE80]" />
                    Airbnb · Booking.com
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Simulateur */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease }}
          className="mt-20 lg:mt-28"
        >
          <Simulator />
        </motion.div>
      </div>
    </section>
  );
}
