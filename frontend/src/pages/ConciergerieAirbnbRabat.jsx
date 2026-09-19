import React from "react";
import { Link } from "react-router-dom";
import { Camera, Calendar, Sparkles, Headphones, ShieldCheck, BadgeDollarSign, ArrowRight, Check } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";
import RelatedArticles from "../components/site/RelatedArticles";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/conciergerie-airbnb-rabat`;

const SERVICES = [
  {
    icon: Camera,
    title: "Annonce optimisée",
    desc: "Photos pro, copy SEO Airbnb adapté à la clientèle institutionnelle et diplomatique de Rabat, tarification dynamique calée sur les sessions parlementaires et événements.",
  },
  {
    icon: Calendar,
    title: "Multi-plateformes",
    desc: "Airbnb, Booking, Vrbo. Calendrier synchronisé, zéro doublon, communication voyageurs 7j/7 en français, anglais et arabe.",
  },
  {
    icon: Sparkles,
    title: "Ménage hôtelier",
    desc: "Équipe dédiée Rabat, draps et serviettes hôteliers fournis, contrôle qualité après chaque rotation.",
  },
  {
    icon: Headphones,
    title: "Check-in 24h/24",
    desc: "Accueil sur site ou remise de clés sécurisée, assistance voyageur permanente depuis l'aéroport Rabat-Salé jusqu'au check-out.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité Rabat",
    desc: "Déclarations préfecture, taxe de séjour, conformité Loi Airbnb Maroc 2025. On gère les obligations légales pour vous.",
  },
  {
    icon: BadgeDollarSign,
    title: "Reporting transparent",
    desc: "Dashboard mensuel : revenus, taux d'occupation, charges. Accessible depuis n'importe où, en toute transparence.",
  },
];

const RESULTS = [
  { metric: "+35%", label: "de revenus moyens vs gestion en direct" },
  { metric: "65%", label: "taux d'occupation médian toute l'année" },
  { metric: "4,93/5", label: "moyenne reviews voyageurs Airbnb" },
  { metric: "<2h", label: "temps de réponse moyen aux voyageurs" },
];

const FAQ = [
  {
    q: "Daribnb propose-t-il la conciergerie Airbnb à Rabat ?",
    a: "Oui. Daribnb propose une gestion locative complète à Rabat : annonce Airbnb/Booking, accueil voyageurs, ménage hôtelier, tarification dynamique et reporting mensuel. Contactez-nous pour un devis personnalisé.",
  },
  {
    q: "Quelle est la rentabilité Airbnb à Rabat ?",
    a: "Rabat est la capitale administrative du Maroc. La demande est stable grâce aux diplomates, fonctionnaires et missionnaires. Un T2 bien situé (Agdal, Hay Riad) peut générer entre 4 500 et 12 000 MAD/mois selon la saison.",
  },
  {
    q: "Quels profils de voyageurs viennent à Rabat ?",
    a: "Essentiellement des professionnels en déplacement (fonctionnaires, diplomates, consultants), des familles de la diaspora et des touristes culturels. La capitale attire aussi des participants aux conférences et événements institutionnels.",
  },
  {
    q: "Quels quartiers de Rabat sont les plus rentables sur Airbnb ?",
    a: "Agdal et Hay Riad sont les quartiers les plus demandés pour la clientèle business (bien desservis, proches des ministères). Hassan et la médina attirent davantage les touristes culturels. Souissi et Riyad sont portés villas et séjours familiaux.",
  },
  {
    q: "Daribnb peut-il gérer mon bien à Rabat si je vis en France ou à l'étranger ?",
    a: "Oui. Nous gérons votre bien de façon complètement autonome : annonce, voyageurs, ménage, maintenance et reversements mensuels. Vous recevez un reporting mensuel sans avoir à vous déplacer.",
  },
  {
    q: "La location courte durée est-elle réglementée à Rabat ?",
    a: "Oui. Comme partout au Maroc, la location courte durée nécessite une déclaration en préfecture et la collecte de la taxe de séjour. Daribnb prend en charge toutes ces démarches pour votre bien.",
  },
];

export default function ConciergerieAirbnbRabat() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Conciergerie Airbnb Rabat",
    serviceType: "Conciergerie locative courte durée",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
      telephone: "+212726156448",
      email: "daribnb.ma@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rabat",
        addressRegion: "Rabat-Salé-Kénitra",
        addressCountry: "MA",
      },
    },
    areaServed: { "@type": "City", name: "Rabat" },
    description:
      "Service de conciergerie Airbnb clé en main à Rabat : annonces optimisées, gestion voyageurs, ménage hôtelier, check-in 24h/24.",
    url: URL,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <ServicePageLayout
      title="Conciergerie Airbnb Rabat | Daribnb — Gestion locative"
      description="Daribnb gère votre Airbnb à Rabat clé en main : annonce, voyageurs, ménage, pricing dynamique. Agdal, Hay Riad, Hassan. Estimation gratuite."
      canonical={URL}
      h1="Conciergerie Airbnb à Rabat"
      kicker="Service local · Rabat"
      intro="Vous possédez un appartement ou une maison à Rabat ? Daribnb gère votre bien Airbnb de A à Z : annonce optimisée, accueil voyageurs institutionnels et touristiques, ménage hôtelier, tarification dynamique. Vous encaissez les revenus, on s'occupe du reste."
      schema={[schema, faqSchema]}
    >
      {/* Pourquoi Daribnb */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Pourquoi confier votre bien à Daribnb ?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Rabat : une demande institutionnelle stable, des hôtels chers — une opportunité Airbnb réelle.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              En tant que capitale, Rabat génère un flux continu de voyageurs institutionnels : diplomates, consultants, fonctionnaires en déplacement. Les hôtels y sont chers et souvent complets. Un appartement bien géré sur Airbnb se positionne comme l'alternative logique — à condition d'avoir la bonne gestion derrière.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Équipe locale à Rabat — disponible 7j/7",
              "Connaissance fine des quartiers : Agdal, Hay Riad, Hassan, médina, Souissi",
              "Pricing adapté aux flux institutionnels (sessions, conférences, événements)",
              "Communication voyageurs en FR / EN / AR",
              "Reporting mensuel détaillé, transparence totale",
              "Gestion 100% déléguée, idéale pour les propriétaires vivant à l'étranger",
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
              Nos services à Rabat.
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

      {/* Résultats */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Résultats sur le terrain
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Ce qu'on obtient pour les biens qu'on gère à Rabat.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Chiffres constatés sur notre portefeuille rabati (appartements T2 à T4, quartiers Agdal et Hay Riad majoritairement).
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RESULTS.map((r) => (
              <div key={r.label} className="bg-[#FAF9F6] rounded-2xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-black text-[#C1272D]">{r.metric}</div>
                <p className="mt-2 text-sm text-[#4B5563] leading-tight">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-10">
            Questions fréquentes — Conciergerie Airbnb Rabat
          </h2>
          <div className="space-y-6">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
                <h3 className="font-bold text-[#1A1A1A] text-lg">{q}</h3>
                <p className="mt-3 text-[#4B5563] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
            Nos services dans d'autres villes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                to: "/conciergerie-airbnb-tanger",
                title: "Conciergerie Airbnb Tanger",
                desc: "Notre marché historique. Plus de 6 ans d'expérience, 4,93/5 sur près de 1 200 avis.",
              },
              {
                to: "/conciergerie-airbnb-marrakech",
                title: "Conciergerie Airbnb Marrakech",
                desc: "Le premier marché touristique du Maroc. Riads, appartements et villas. Coupe du Monde 2030.",
              },
              {
                to: "/conciergerie-airbnb-casablanca",
                title: "Conciergerie Airbnb Casablanca",
                desc: "La capitale économique. Clientèle business, taux d'occupation stable toute l'année.",
              },
              {
                to: "/gestion-locative-rabat",
                title: "Gestion locative Rabat",
                desc: "Le détail de notre gestion locative complète à Rabat, quartier par quartier.",
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="block bg-[#FAF9F6] rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md hover:border-[#C1272D]/30 transition-all group"
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

      <RelatedArticles slugs={[
        { slug: "conciergerie-airbnb-rabat-rentabilite-2026", title: "Conciergerie Airbnb Rabat : rentabilité, quartiers et conseils 2026" },
        { slug: "rentabilite-airbnb-maroc-2026", title: "Rentabilité Airbnb au Maroc : combien pouvez-vous vraiment gagner en 2026 ?" },
        { slug: "mre-airbnb-maroc-gestion-distance-2026", title: "MRE et Airbnb au Maroc : gérer son bien à distance en 2026" },
      ]} />
    </ServicePageLayout>
  );
}
