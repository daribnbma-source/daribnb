import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, BarChart3, Camera, FileSearch, Sparkles } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/optimiser-revenus-airbnb`;

const SERVICES = [
  {
    icon: FileSearch,
    title: "Audit complet de votre annonce",
    desc: "On analyse votre annonce existante : titre, description, photos, tarifs, calendrier, reviews. On identifie les freins à la conversion.",
  },
  {
    icon: BarChart3,
    title: "Pricing dynamique",
    desc: "Mise en place d'un pricing intelligent qui s'adapte à la demande, à la saisonnalité, aux événements locaux. Plus de revenus sans effort.",
  },
  {
    icon: Camera,
    title: "Optimisation photos & texte",
    desc: "Coaching pour de meilleures photos (ou shoot pro local), réécriture du titre/description en mode SEO Airbnb. Meilleur ranking, plus de clics.",
  },
  {
    icon: Sparkles,
    title: "Recommandations actionnables",
    desc: "Un plan d'action sur 30 jours, avec priorités et résultats attendus chiffrés. Pas de blabla, du concret applicable lundi matin.",
  },
];

const CITIES = [
  "Casablanca",
  "Rabat",
  "Tanger",
  "Marrakech",
  "Agadir",
  "Fès",
  "Essaouira",
  "Chefchaouen",
  "El Jadida",
  "Tétouan",
  "Ifrane",
  "Ouarzazate",
];

export default function OptimiserRevenusAirbnb() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Optimisation des revenus Airbnb au Maroc",
    serviceType: "Audit et optimisation locative Airbnb",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
      telephone: "+212646218407",
      email: "daribnb.ma@gmail.com",
    },
    areaServed: { "@type": "Country", name: "Maroc" },
    description:
      "Audit, pricing dynamique, optimisation d'annonce : Daribnb booste vos revenus Airbnb partout au Maroc. Service 100% dématérialisé. Toutes villes.",
    url: URL,
  };

  return (
    <ServicePageLayout
      title="Optimiser ses revenus Airbnb au Maroc | Daribnb"
      description="Audit, pricing dynamique, optimisation d'annonce : Daribnb booste vos revenus Airbnb partout au Maroc. Service 100% dématérialisé. Toutes villes."
      canonical={URL}
      h1="Optimiser vos revenus Airbnb au Maroc"
      kicker="Service national · 100% dématérialisé"
      intro="Vous gérez vous-même votre Airbnb au Maroc, mais vous sentez que vous laissez de l'argent sur la table ? Daribnb propose un service d'audit et d'optimisation 100% à distance, partout au Maroc. Concrètement actionnable, sans engagement de gestion."
      schema={schema}
    >
      {/* 4 services dématérialisés */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Ce qu'on fait pour vous
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              4 leviers d'optimisation, à distance.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Vous gardez la gestion en direct, on vous donne les armes pour faire +30 à +50% sur vos revenus mensuels. Sans signer de mandat de gestion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-[#FAF9F6] rounded-2xl p-8 border border-black/5"
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

      {/* Audit en détail */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
            Le détail de l'audit
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Audit de votre annonce — ce qu'on regarde.
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            Audit livré sous 5 jours ouvrés. Format PDF + appel de débrief de 30 min.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              "Titre & description : optimisation SEO Airbnb (mots-clés, structure, hooks)",
              "Photos : analyse des 5 premières (les plus importantes), recommandations cadrage / lumière / ordre",
              "Tarifs : comparaison avec le marché local, identification des plages sous-tarifées",
              "Calendrier : durée minimum, restrictions, saisonnalité",
              "Reviews : analyse des derniers commentaires, identification des points de friction récurrents",
              "Catégories Airbnb : vérification du tagging (Front de mer, Vue spectaculaire, etc.)",
              "Concurrence locale : positionnement vs 5 biens similaires de votre quartier",
              "Plan d'action chiffré : top 5 priorités à mettre en place sur 30 jours",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border border-black/5"
              >
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#006233] flex items-center justify-center">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-[#1A1A1A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pour toutes les villes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Toutes les villes du Maroc
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Service 100% à distance, peu importe où est votre bien.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Audit, optimisation, recommandations — tout se fait à distance. On a déjà accompagné des propriétaires à Casablanca, Rabat, Marrakech, Agadir, Fès, Tanger, Essaouira, Chefchaouen, et bien d'autres. Notre service ne se limite à aucune ville.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CITIES.map((c) => (
              <div
                key={c}
                className="bg-[#FAF9F6] rounded-xl px-4 py-3 border border-black/5 text-[#1A1A1A] font-medium text-sm"
              >
                {c}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#4B5563] italic">
            Votre ville n'est pas listée ? On travaille partout au Maroc. Demandez quand même.
          </p>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
            Pour qui ce service est-il fait ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#006233]/30">
              <h3 className="text-lg font-bold text-[#006233] mb-3">✓ Fait pour vous si…</h3>
              <ul className="space-y-2 text-[#1A1A1A]">
                <li>• Vous gérez vous-même votre Airbnb</li>
                <li>• Vous voulez garder la main mais améliorer les revenus</li>
                <li>• Vous êtes ouvert à des conseils chiffrés et actionnables</li>
                <li>• Vous avez au moins 6 mois d'historique de location</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-black/5">
              <h3 className="text-lg font-bold text-[#4B5563] mb-3">✗ Pas adapté si…</h3>
              <ul className="space-y-2 text-[#4B5563]">
                <li>• Vous cherchez quelqu'un pour gérer à votre place (voir conciergerie)</li>
                <li>• Vous venez de mettre votre bien en ligne (pas assez de data)</li>
                <li>• Vous ne voulez pas appliquer les recommandations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
            Vous préférez nous confier la gestion ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                to: "/conciergerie-airbnb-tanger",
                title: "Conciergerie Airbnb Tanger",
                desc: "Service clé en main si votre bien est à Tanger.",
              },
              {
                to: "/gestion-locative-tanger",
                title: "Gestion locative Tanger",
                desc: "Vue complète de notre offre de gestion à Tanger.",
              },
              {
                to: "/gestion-locative-mre-tanger",
                title: "Spécial MRE",
                desc: "Si vous habitez à l'étranger et possédez un bien à Tanger.",
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="block bg-[#FAF9F6] rounded-2xl p-6 border border-black/5 hover:shadow-md hover:border-[#C1272D]/30 transition-all group"
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
