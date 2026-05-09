import React from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Quote, ArrowRight, ExternalLink } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/temoignages`;

// Avis publics Airbnb agrégés (note globale du compte hôte Daribnb).
// Les avis individuels Airbnb ne sont PAS recopiés ici (propriété Airbnb / privacy voyageurs).
// Sources affichables: avis Google Business Profile dès qu'ils seront récoltés (cf. roadmap).
const AGGREGATED_AIRBNB = {
  ratingValue: 4.93,
  reviewCount: 1196,
  source: "Airbnb",
  description:
    "Note moyenne du compte hôte Daribnb sur Airbnb, agrégée sur 1 196 commentaires de voyageurs ayant séjourné dans nos logements gérés à Tanger.",
};

// Avis Google Business Profile (à remplir au fur et à mesure).
// Format : { authorName, rating, date, body, source: 'google' }
// Pour ajouter, copier le widget Google Business "Voir l'avis" et coller authorName/body.
const GOOGLE_REVIEWS = [
  // {
  //   authorName: "Prénom N.",
  //   rating: 5,
  //   date: "2026-05-15",
  //   body: "Texte de l'avis Google",
  // },
];

export default function Temoignages() {
  // AggregateRating schema (basé sur Airbnb agrégé — vérifiable publiquement)
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE}/#business`,
    name: "Daribnb",
    url: SITE,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AGGREGATED_AIRBNB.ratingValue,
      reviewCount: AGGREGATED_AIRBNB.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  // Review schemas pour les Google Reviews (quand ils existeront)
  const reviewSchemas = GOOGLE_REVIEWS.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
    },
    author: { "@type": "Person", name: r.authorName },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.body,
    datePublished: r.date,
  }));

  const schemas = [aggregateRatingSchema, ...reviewSchemas];

  return (
    <ServicePageLayout
      title="Témoignages clients Daribnb | Note 4,93/5 sur 1 196 avis Airbnb"
      description="Avis et témoignages clients Daribnb. Note moyenne 4,93/5 sur 1 196 commentaires Airbnb vérifiés. Conciergerie Airbnb premium à Tanger."
      canonical={URL}
      h1="Ce que disent nos clients."
      kicker="Témoignages"
      intro="Daribnb gère plusieurs dizaines de logements Airbnb à Tanger. Notre note moyenne est de 4,93/5 sur 1 196 commentaires voyageurs vérifiés Airbnb. Voici un aperçu des retours."
      schema={schemas}
    >
      {/* Stats agrégées */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF9F6] rounded-2xl p-8 text-center border border-black/5">
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#C1272D] text-[#C1272D]"
                  />
                ))}
              </div>
              <p className="text-4xl font-bold text-[#1A1A1A]">
                {AGGREGATED_AIRBNB.ratingValue}/5
              </p>
              <p className="mt-2 text-sm text-[#4B5563]">Note moyenne Airbnb</p>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl p-8 text-center border border-black/5">
              <p className="text-4xl font-bold text-[#1A1A1A]">
                {AGGREGATED_AIRBNB.reviewCount.toLocaleString("fr-FR")}
              </p>
              <p className="mt-2 text-sm text-[#4B5563]">
                Commentaires voyageurs vérifiés
              </p>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl p-8 text-center border border-black/5">
              <p className="text-4xl font-bold text-[#1A1A1A]">6+</p>
              <p className="mt-2 text-sm text-[#4B5563]">
                Années d'expérience opérationnelle
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-center text-[#4B5563] max-w-2xl mx-auto">
            Tous les chiffres sont agrégés à partir de notre compte hôte Airbnb officiel et de nos
            opérations terrain à Tanger. Pas d'inflation marketing — vous pouvez vérifier la note
            sur n'importe quelle annonce Airbnb gérée par Daribnb.
          </p>
        </div>
      </section>

      {/* Highlights — ce qu'on entend le plus souvent */}
      <section className="py-16 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <span className="inline-block text-sm font-bold text-[#C1272D] uppercase tracking-wider">
            Ce qui revient
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Les 5 points qui ressortent dans nos avis Airbnb.
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            Synthèse qualitative des 1 196 commentaires reçus sur nos logements Tanger.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Propreté irréprochable",
                desc: "Norme hôtelière sur chaque logement. Linge blanchi pressing, salle de bain niveau hôtel 4*. C'est le commentaire le plus fréquent dans nos avis.",
              },
              {
                title: "Communication ultra-réactive",
                desc: "Réponse en moins de 30 minutes aux messages voyageurs (heures ouvrées). Service multilingue : français, arabe, anglais, espagnol.",
              },
              {
                title: "Check-in fluide à toute heure",
                desc: "Auto check-in disponible 24h/24 (boîte à clés ou serrure connectée). Particulièrement apprécié pour les vols tardifs et la diaspora qui arrive parfois à 2h du matin.",
              },
              {
                title: "Conformité photo / annonce",
                desc: "Les voyageurs trouvent ce qu'ils ont vu sur l'annonce. Pas de mauvaise surprise. Photos professionnelles fidèles à la réalité.",
              },
              {
                title: "Recommandations locales",
                desc: "Welcome guide PDF par bien : restos, plages, balades, transport. Les voyageurs apprécient le côté curaté plutôt qu'un guide générique.",
              },
              {
                title: "Maintenance gérée vite",
                desc: "Petit problème (climatisation, plomberie, wifi) ? Un technicien Daribnb intervient sous 2-4h. Réseau de prestataires locaux fiables.",
              },
            ].map((h, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl p-6 md:p-8 border border-black/5"
              >
                <Quote size={24} className="text-[#C1272D]/30 mb-3" />
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A]">
                  {h.title}
                </h3>
                <p className="mt-3 text-[#4B5563] leading-relaxed">{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews section (s'affiche dès qu'il y aura ≥ 1 review) */}
      {GOOGLE_REVIEWS.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="flex items-baseline justify-between border-b border-black/10 pb-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Avis Google récents
              </h2>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Daribnb+Expert+Conciergerie+360+Tanger"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#C1272D] hover:underline"
              >
                Voir sur Google
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {GOOGLE_REVIEWS.map((r, i) => (
                <article
                  key={i}
                  className="bg-[#FAF9F6] rounded-2xl p-6 md:p-8 border border-black/5"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className="fill-[#C1272D] text-[#C1272D]"
                      />
                    ))}
                  </div>
                  <p className="text-[#1A1A1A] leading-relaxed">{r.body}</p>
                  <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      {r.authorName}
                    </span>
                    <span className="text-xs text-[#4B5563]">
                      {new Date(r.date).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pour les propriétaires : qu'est-ce que ça donne en chiffres */}
      <section className="py-16 md:py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="inline-block text-sm font-bold text-[#FFC857] uppercase tracking-wider">
            Pour les propriétaires
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Une note client haute = des revenus plus stables pour vous.
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Sur Airbnb, le ranking d'une annonce dépend directement de la note moyenne
            de l'hôte. À 4,93/5 sur 1 196 avis, nos logements remontent en haut des
            résultats de recherche locaux Tanger — ce qui veut dire pour un propriétaire
            qui nous confie son bien : <strong>plus de réservations, prix plus élevés,
            taux d'occupation supérieur à la moyenne du marché.</strong>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/conciergerie-airbnb-tanger"
              className="inline-flex items-center justify-center gap-2 bg-[#C1272D] hover:bg-[#A01D22] text-white rounded-full px-8 py-4 font-semibold transition-all"
            >
              Confier mon bien à Daribnb
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/loyer-fixe-airbnb-tanger"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 py-4 font-semibold transition-all"
            >
              Voir le loyer fixe garanti
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60">
            <MapPin size={14} />
            Tanger · Service complet ou loyer fixe
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
