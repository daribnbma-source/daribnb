import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Reveal from "../motion/Reveal";

const SITE = "https://www.daribnb.com";

// Vidéo de présentation : lecture muette quand elle est visible, pause hors écran, son au clic.
export default function VideoSection() {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React ne remet pas l'attribut muted à l'hydratation du HTML pré-rendu : on le force.
    v.muted = true;
    v.defaultMuted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next) {
      if (v.currentTime > 1) v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Daribnb : votre Airbnb au Maroc géré comme un pro",
    description:
      "Présentation de Daribnb, conciergerie Airbnb à Marrakech, Tanger, Rabat et Casablanca : annonce et photos pro, prix dynamiques, ménage hôtelier, accueil 24/7, Airbnb + Booking. Trois formules : conciergerie, Super Daribnb, loyer fixe garanti. 4,93/5 sur 1 196 avis Airbnb.",
    thumbnailUrl: `${SITE}/videos/intro-daribnb.webp`,
    contentUrl: `${SITE}/videos/intro-daribnb.mp4`,
    uploadDate: "2026-11-02",
    inLanguage: "fr",
    publisher: { "@id": `${SITE}/#business` },
  };

  return (
    <section id="video" className="grid-light bg-[#F7F6F2] pb-8 pt-24 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-[#C1272D]">Daribnb en 40 secondes</span>
          <h2 className="mt-3 text-4xl font-bold text-[#1A1A1A] md:text-5xl">Ce qu'on fait pour votre bien.</h2>
        </Reveal>
        <Reveal y={50}>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 bg-[#1A1A1A] shadow-[0_12px_0_-2px_#006233,0_40px_80px_-30px_rgba(0,0,0,0.5)]">
            <video
              ref={ref}
              src="/videos/intro-daribnb.mp4"
              poster="/videos/intro-daribnb.webp"
              muted
              playsInline
              loop
              preload="none"
              aria-label="Présentation vidéo de Daribnb"
              className="block aspect-video w-full"
            />
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? "Activer le son" : "Couper le son"}
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#1A1A1A] shadow-lg backdrop-blur transition-transform hover:scale-105"
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {muted ? "Activer le son" : "Son activé"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
