import React, { useEffect, useRef } from "react";
import { PhoneCall, Home, LineChart, FileSignature, Rocket } from "lucide-react";
import Reveal from "../motion/Reveal";

const STEPS = [
  { n: 1, icon: PhoneCall, t: "Appel découverte", d: "On discute de vos objectifs, de votre bien et de votre ville." },
  { n: 2, icon: Home, t: "Visite du bien", d: "On se déplace pour évaluer le logement et son potentiel." },
  { n: 3, icon: LineChart, t: "Estimation détaillée", d: "Projection de revenus chiffrée et formule adaptée." },
  { n: 4, icon: FileSignature, t: "Signature du contrat", d: "Conciergerie ou loyer fixe garanti, à votre choix." },
  { n: 5, icon: Rocket, t: "Mise en ligne", d: "Photos pro, annonce optimisée, premières réservations." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const lineRef = useRef(null);

  // Progression du rail liée au scroll : 0 quand le haut de la liste passe à 75 % de l'écran,
  // 1 quand son bas passe à 55 %. Actif aussi en mouvement réduit (suit le doigt, pas d'animation autonome).
  useEffect(() => {
    const el = ref.current;
    const line = lineRef.current;
    if (!el || !line) return;
    let queued = false;
    const update = () => {
      queued = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (0.75 * vh - r.top) / (r.height + 0.2 * vh)));
      line.style.transform = `scaleY(${p})`;
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section data-testid="how-it-works-section" className="grid-dark overflow-x-clip bg-[#1A1A1A] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <span className="text-sm font-bold uppercase tracking-wider text-[#4ADE80]">Comment ça marche</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">5 étapes. C'est tout.</h2>
            <p className="mt-4 text-lg text-white/70">
              De la prise de contact à votre première réservation, on vous accompagne à chaque étape.
              Vous validez, on exécute.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C1272D] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#A01D22]"
            >
              Démarrer par un appel
            </a>
          </Reveal>

          <div ref={ref} className="relative lg:col-span-7">
            {/* Rail + progression liée au scroll */}
            <div aria-hidden="true" className="absolute left-[27px] top-2 bottom-2 w-px bg-white/10" />
            <div
              ref={lineRef}
              aria-hidden="true"
              className="absolute left-[27px] top-2 bottom-2 w-px origin-top scale-y-0 bg-gradient-to-b from-[#C1272D] to-[#4ADE80]"
            />
            <ol className="space-y-6">
              {STEPS.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.n}
                  data-testid={`step-${s.n}`}
                  x={40}
                  y={0}
                  delay={0.05 * i}
                  margin="0px 0px -15% 0px"
                  style={{ "--rdur": "0.6s" }}
                  className="relative flex gap-6"
                >
                  <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-[#232323] text-[#C1272D]">
                    <s.icon size={22} />
                  </span>
                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">Étape {s.n}</p>
                    <h3 className="mt-1 text-xl font-bold">{s.t}</h3>
                    <p className="mt-1.5 text-white/65">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
