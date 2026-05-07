import React from "react";
import { Link } from "react-router-dom";
import { Camera, Calendar, Sparkles, Headphones, ShieldCheck, BadgeDollarSign, ArrowRight, Check } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/conciergerie-airbnb-tanger`;

const SERVICES = [
  {
    icon: Camera,
    title: "Annonce optimisée",
    desc: "Photos pro shoot sur place, copy SEO Airbnb, tarification dynamique calée sur la demande à Tanger.",
  },
  {
    icon: Calendar,
    title: "Multi-plateformes",
    desc: "Airbnb, Booking, Vrbo. Calendrier synchronisé, zéro doublon, communication voyageurs 7j/7 en français, anglais et arabe.",
  },
  {
    icon: Sparkles,
    title: "Ménage hôtelier",
    desc: "Équipe dédiée Tanger, draps et serviettes hôteliers fournis, contrôle qualité après chaque rotation.",
  },
  {
    icon: Headphones,
    title: "Check-in 24h/24",
    desc: "Accueil sur site ou remise de clés sécurisée, assistance voyageur permanente depuis l'aéroport jusqu'au check-out.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité Tanger",
    desc: "Déclarations préfecture, taxe de séjour, conformité Loi Airbnb 2025. On gère le cadre légal pour vous.",
  },
  {
    icon: BadgeDollarSign,
    title: "Reporting transparent",
    desc: "Dashboard mensuel : revenus, taux d'occupation, charges. Vous voyez tout, on ne cache rien.",
  },
];

const RESULTS = [
  { metric: "+40%", label: "de revenus moyens vs gestion en direct" },
  { metric: "85%", label: "taux d'occupation médian sur nos biens Tanger" },
  { metric: "4,93/5", label: "moyenne reviews voyageurs Airbnb" },
  { metric: "<2h", label: "temps de réponse moyen aux voyageurs" },
];

export default function ConciergerieAirbnbTanger() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Conciergerie Airbnb Tanger",
    serviceType: "Conciergerie locative courte durée",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
      telephone: "+212646218407",
      email: "daribnb.ma@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tanger",
        addressRegion: "Tanger-Tétouan-Al Hoceïma",
        addressCountry: "MA",
      },
    },
    areaServed: { "@type": "City", name: "Tanger" },
    description:
      "Service de conciergerie Airbnb clé en main à Tanger : annonces optimisées, gestion voyageurs, ménage hôtelier, check-in 24h/24.",
    url: URL,
    // Note : aggregateRating volontairement retiré du Service schema.
    // Google n'autorise les Review snippets que sur LocalBusiness/Product/etc, pas sur Service.
    // L'aggregateRating reste exposé sur le LocalBusiness root (index.html) qui s'applique à toutes les pages.
  };

  return (
    <ServicePageLayout
      title="Conciergerie Airbnb Tanger | Daribnb — Gestion locative complète"
      description="Daribnb prend en charge votre location Airbnb à Tanger : annonces, voyageurs, ménage, pricing dynamique. Résultats garantis. Estimation gratuite."
      canonical={URL}
      h1="Conciergerie Airbnb à Tanger"
      kicker="Service local · Tanger"
      intro="Vous possédez un appartement, riad ou maison à Tanger ? Daribnb gère votre bien Airbnb de A à Z : annonce, voyageurs, ménage, maintenance. Vous récoltez les revenus, sans la charge mentale."
      schema={schema}
    >
      {/* Pourquoi Daribnb */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Pourquoi confier votre bien à Daribnb ?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Local, expert, transparent.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              On ne fait pas de la conciergerie générique. Daribnb est implanté à Tanger depuis plus de 6 ans, on connaît chaque quartier, chaque saison, chaque type de voyageur. Notre note 4,93/5 sur Airbnb (sur près de 1 200 commentaires) en témoigne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Équipe locale à Tanger — pas de sous-traitance lointaine",
              "Connaissance fine des quartiers : Malabata, centre-ville, Le Hassani, Le Alia, Boubana",
              "Optimisation pricing selon la saisonnalité (été, ramadan, ponts)",
              "Communication voyageurs en FR / EN / AR / ES",
              "Reporting mensuel détaillé, transparence totale",
              "Disponibilité 7j/7 pour vos voyageurs et pour vous",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#006233] flex items-center justify-center">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-[#1A1A1A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Ce qui est inclus
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Nos services à Tanger.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Tout est compris dans la commission. Pas de frais cachés, pas de devis surprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C1272D]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#C1272D]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{s.title}</h3>
                  <p className="mt-2 text-[#4B5563] leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Résultats Tanger */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Résultats sur le terrain
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Ce qu'on obtient pour les biens qu'on gère à Tanger.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Chiffres médians constatés sur notre portefeuille tangérois (appartements F2 à F4 majoritairement, résidences Le Hassani, Le Alia, Malabata).
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RESULTS.map((r) => (
              <div
                key={r.label}
                className="bg-[#FAF9F6] rounded-2xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-[#C1272D]">
                  {r.metric}
                </div>
                <p className="mt-2 text-sm text-[#4B5563] leading-tight">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
            Vous cherchez autre chose ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                to: "/gestion-locative-tanger",
                title: "Gestion locative à Tanger",
                desc: "Vue complète de notre service de gestion locative courte durée à Tanger.",
              },
              {
                to: "/gestion-locative-mre-tanger",
                title: "Pour les MRE à Tanger",
                desc: "Vous vivez en France, votre bien est à Tanger ? On gère tout à distance.",
              },
              {
                to: "/optimiser-revenus-airbnb",
                title: "Optimiser un Airbnb existant",
                desc: "Audit, pricing dynamique, optimisation. Service 100% dématérialisé partout au Maroc.",
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="block bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md hover:border-[#C1272D]/30 transition-all group"
              >
                <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#C1272D] transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-[#4B5563]">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#C1272D]">
                  En savoir plus <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
