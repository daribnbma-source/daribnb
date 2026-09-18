import React from "react";
import { Link } from "react-router-dom";
import { Camera, Calendar, Sparkles, Headphones, ShieldCheck, BadgeDollarSign, ArrowRight, Check } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";
import RelatedArticles from "../components/site/RelatedArticles";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/conciergerie-airbnb-casablanca`;

const SERVICES = [
  {
    icon: Camera,
    title: "Annonce optimisée",
    desc: "Photos pro, copy SEO Airbnb adapté à la clientèle business casablancaise, tarification dynamique calée sur les pics corporate et les événements Casablanca.",
  },
  {
    icon: Calendar,
    title: "Multi-plateformes",
    desc: "Airbnb, Booking, Vrbo. Calendrier synchronisé, zéro doublon, communication voyageurs 7j/7 en français, anglais et arabe.",
  },
  {
    icon: Sparkles,
    title: "Ménage hôtelier",
    desc: "Équipe dédiée Casablanca, draps et serviettes hôteliers fournis, contrôle qualité après chaque rotation.",
  },
  {
    icon: Headphones,
    title: "Check-in 24h/24",
    desc: "Accueil sur site ou remise de clés sécurisée, assistance voyageur permanente depuis l'aéroport Mohammed V jusqu'au check-out.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité Casablanca",
    desc: "Déclarations préfecture, taxe de séjour, conformité Loi Airbnb Maroc 2025. On gère les obligations légales à votre place.",
  },
  {
    icon: BadgeDollarSign,
    title: "Reporting transparent",
    desc: "Dashboard mensuel : revenus, taux d'occupation, charges. Accessible depuis n'importe où, en temps réel.",
  },
];

const RESULTS = [
  { metric: "+38%", label: "de revenus moyens vs gestion en direct" },
  { metric: "70%", label: "taux d'occupation médian toute l'année" },
  { metric: "4,93/5", label: "moyenne reviews voyageurs Airbnb" },
  { metric: "<2h", label: "temps de réponse moyen aux voyageurs" },
];

const FAQ = [
  {
    q: "Daribnb gère-t-il les appartements Airbnb à Casablanca ?",
    a: "Oui. Daribnb propose une gestion locative complète à Casablanca : annonce Airbnb/Booking, accueil voyageurs, ménage hôtelier, tarification dynamique et reporting mensuel. Contactez-nous pour un devis.",
  },
  {
    q: "Quel est le potentiel de revenus Airbnb à Casablanca ?",
    a: "Casablanca est le premier marché d'affaires du Maroc. Un T2 bien situé (Maarif, Gauthier, Racine) peut générer entre 5 000 et 14 000 MAD par mois selon la saison. La demande est stable toute l'année grâce à la clientèle corporate.",
  },
  {
    q: "Quels quartiers de Casablanca sont les plus rentables sur Airbnb ?",
    a: "Maarif, Gauthier et Racine affichent les meilleurs taux d'occupation (tourisme d'affaires). Anfa et Ain Diab sont plus portés loisirs avec des prix à la nuit plus élevés en été. Le centre-ville (Habous, Corniche) attire une clientèle touristique internationale.",
  },
  {
    q: "Casablanca est-elle adaptée à la location courte durée ?",
    a: "Oui. Casablanca concentre plus de 35 % du tourisme d'affaires au Maroc. Les séjours courts (3-5 nuits) sont fréquents, avec une demande stable en semaine même hors saison touristique.",
  },
  {
    q: "Daribnb peut-il gérer mon bien à Casablanca depuis l'étranger ?",
    a: "Oui, c'est une de nos spécialités. Nous gérons votre bien intégralement : annonce, voyageurs, ménage, maintenance et reversements. Vous recevez un reporting mensuel sans vous déplacer.",
  },
  {
    q: "Quelle est la commission de Daribnb à Casablanca ?",
    a: "Notre commission couvre l'ensemble de la gestion. Contactez-nous pour obtenir un devis personnalisé selon le type de bien et le quartier.",
  },
];

export default function ConciergerieAirbnbCasablanca() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Conciergerie Airbnb Casablanca",
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
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        addressCountry: "MA",
      },
    },
    areaServed: { "@type": "City", name: "Casablanca" },
    description:
      "Service de conciergerie Airbnb clé en main à Casablanca : annonces optimisées, gestion voyageurs, ménage hôtelier, check-in 24h/24.",
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
      title="Conciergerie Airbnb Casablanca | Daribnb — Gestion locative"
      description="Daribnb gère votre Airbnb à Casablanca clé en main : annonce, voyageurs, ménage, pricing dynamique. Maarif, Gauthier, Anfa. Estimation gratuite."
      canonical={URL}
      h1="Conciergerie Airbnb à Casablanca"
      kicker="Service local · Casablanca"
      intro="Vous possédez un appartement à Casablanca ? Daribnb gère votre bien Airbnb de A à Z : annonce optimisée, accueil voyageurs business, ménage hôtelier et tarification dynamique. Vous encaissez les revenus, on s'occupe du reste."
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
              Le marché business de Casablanca demande une gestion professionnelle.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Casablanca est la capitale économique du Maroc. La majorité des voyageurs sont des professionnels en déplacement, des expatriés en mission ou des familles de la diaspora. Ce profil exige réactivité, qualité constante et communication sans faille. C'est exactement ce que Daribnb propose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Équipe locale à Casablanca — disponible 7j/7",
              "Connaissance fine des quartiers : Maarif, Gauthier, Racine, Anfa, Ain Diab",
              "Pricing adapté à la saisonnalité business (foires, salons, événements)",
              "Communication voyageurs en FR / EN / AR",
              "Reporting mensuel détaillé, transparence totale",
              "Gestion déléguée à 100 %, idéale pour les propriétaires vivant à l'étranger",
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
              Nos services à Casablanca.
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
              Ce qu'on obtient pour les biens qu'on gère à Casablanca.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Chiffres constatés sur notre portefeuille casablancais (appartements T2 à T4, quartiers Maarif et Gauthier majoritairement).
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
            Questions fréquentes — Conciergerie Airbnb Casablanca
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
                to: "/conciergerie-airbnb-rabat",
                title: "Conciergerie Airbnb Rabat",
                desc: "La capitale administrative. Clientèle institutionnelle, diplomates, fonctionnaires.",
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
        { slug: "conciergerie-airbnb-casablanca-guide-2026", title: "Conciergerie Airbnb Casablanca : le guide complet 2026 pour propriétaires" },
        { slug: "rentabilite-airbnb-maroc-2026", title: "Rentabilité Airbnb au Maroc : combien pouvez-vous vraiment gagner en 2026 ?" },
        { slug: "loi-airbnb-maroc-2025-proprietaires", title: "Loi Airbnb Maroc 2025 : ce que les propriétaires doivent savoir" },
      ]} />
    </ServicePageLayout>
  );
}
