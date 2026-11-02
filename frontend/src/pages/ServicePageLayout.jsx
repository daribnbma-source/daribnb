import React, { useEffect, useRef } from "react";
import { motion, MotionConfig } from "motion/react";
import ProofBand from "../components/site/ProofBand";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Star, Calendar } from "lucide-react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import Contact from "../components/site/Contact";
import ExitIntentPopup from "../components/site/ExitIntentPopup";

const SITE = "https://www.daribnb.com";

/**
 * Wrapper SEO-friendly pour les landing pages services.
 * Le contenu (sections, copy, schema custom) est passé via children.
 *
 * Props:
 *  - title, description, canonical (string, requis)
 *  - h1 (string, requis) — affiché dans le hero
 *  - kicker (string) — small label au dessus du H1
 *  - intro (string|node) — paragraphe sous le H1
 *  - schema (object) — JSON-LD additionnel injecté dans le head
 *  - heroAccent (string) — couleur accent pour le breadcrumb
 *  - image (string) — photo réelle affichée à droite du hero (desktop)
 *  - children — contenu principal (sections H2/contenu)
 */

const ease = [0.22, 1, 0.36, 1];

// Apparition des sections du contenu au scroll, sans état caché dans le HTML pré-rendu :
// seules les sections encore hors écran au montage sont animées quand elles arrivent.
function useSectionReveal(ref) {
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = Array.from(root.querySelectorAll(":scope > section, :scope > div > section"));
    const pending = sections.filter((s) => s.getBoundingClientRect().top > window.innerHeight);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          e.target.animate(
            [
              { opacity: 0, transform: "translateY(32px)" },
              { opacity: 1, transform: "none" },
            ],
            { duration: 750, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
          );
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    pending.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ref]);
}
export default function ServicePageLayout({
  title,
  description,
  canonical,
  h1,
  kicker,
  intro,
  schema,
  children,
  image = "/assets/logements/logement-1-salon.jpg",
  ogImage = `${SITE}/og-image.jpg`,
}) {
  const contentRef = useRef(null);
  useSectionReveal(contentRef);
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_MA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        {/* BreadcrumbList JSON-LD — généré automatiquement à partir du canonical */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: SITE,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: kicker || h1,
                item: canonical,
              },
            ],
          })}
        </script>
        {/* Schema(s) custom — supporte un seul object OU un tableau */}
        {schema &&
          (Array.isArray(schema) ? schema : [schema]).map((s, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(s)}
            </script>
          ))}
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <MotionConfig reducedMotion="user">
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 grid-light" />
          <div aria-hidden="true" className="absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-[#C1272D]/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-52 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#006233]/10 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-[#4B5563]">
                <li>
                  <Link to="/" className="hover:text-[#C1272D]">
                    Accueil
                  </Link>
                </li>
                <li className="text-[#4B5563]/50">/</li>
                <li className="text-[#1A1A1A] font-medium">{kicker || h1}</li>
              </ol>
            </nav>

            {kicker && (
              <span className="inline-block text-sm font-bold text-[#C1272D] uppercase tracking-wider">
                {kicker}
              </span>
            )}
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.1]">
              {h1}
            </h1>
            {intro && (
              <p className="mt-6 text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-3xl">
                {intro}
              </p>
            )}

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="cta-pulse inline-flex items-center justify-center gap-2 bg-[#C1272D] hover:bg-[#A01D22] text-white rounded-full px-8 py-4 font-semibold transition-all shadow-md hover:shadow-xl group"
              >
                Estimation gratuite en 24h
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/212726156448?text=Bonjour%20Daribnb%2C%20je%20souhaite%20en%20savoir%20plus"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5f5f5] text-[#1A1A1A] border border-black/10 rounded-full px-8 py-4 font-semibold transition-all shadow-sm"
              >
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C1272D] text-[#C1272D]" />
                ))}
              </div>
              <p className="text-sm text-[#4B5563]">
                <span className="font-semibold text-[#1A1A1A]">4,93/5</span> sur 1 196 avis Airbnb · 7 ans de terrain
              </p>
            </div>
          </motion.div>

          {/* Photo réelle en couches (desktop) */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, clipPath: "inset(10% 10% 10% 10% round 2rem)" }}
              animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
              transition={{ duration: 1, ease }}
              className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(26,26,26,0.55)]"
            >
              <img src={image} alt="Logement géré par Daribnb" loading="eager" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-[#006233] px-5 py-4 text-white shadow-[0_20px_50px_-12px_rgba(0,98,51,0.6)]"
            >
              <p className="font-heading text-3xl font-bold leading-none">
                4,93<span className="ml-1 text-lg text-white/80">★</span>
              </p>
              <p className="mt-1 text-xs text-white/80">1 196 avis Airbnb</p>
            </motion.div>
          </div>
          </div>
        </section>
        </MotionConfig>

        <ProofBand />

        {/* Contenu spécifique à la page */}
        <div ref={contentRef}>{children}</div>

        {/* Garantie 1ère réservation — rappel condensé avant le contact */}
        <section className="py-16 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="flex flex-col gap-4 rounded-3xl border border-[#006233]/40 bg-gradient-to-br from-[#006233]/15 via-[#006233]/5 to-transparent p-8 md:flex-row md:items-center md:gap-8 md:p-10">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#006233]/20 text-[#006233] ring-1 ring-[#006233]/40">
                <Calendar size={26} strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#006233]">
                  La garantie 1ère réservation
                </p>
                <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                  Pas de 1ère réservation sous 30 jours&nbsp;? On reprend l'annonce à zéro avec vous, sans frais.
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire de contact réel — capture le lead directement sur la page */}
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
      <ExitIntentPopup />
    </div>
  );
}
