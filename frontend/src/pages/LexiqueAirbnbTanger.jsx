import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, BookOpen, ArrowRight } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/lexique-airbnb-tanger`;

const TERMS = [
  // === CATÉGORIE A — TECHNIQUE AIRBNB / LCD ===
  {
    cat: "Technique Airbnb",
    term: "ADR (Average Daily Rate)",
    def: "Prix moyen par nuit facturé sur une période donnée. ADR = Revenu total / Nombre de nuits réservées. À Tanger, un ADR moyen sur Airbnb 2026 se situe entre 350 et 750 MAD selon le quartier et la saison.",
  },
  {
    cat: "Technique Airbnb",
    term: "RevPAR (Revenue Per Available Room)",
    def: "Indicateur clé de performance hôtelière. RevPAR = ADR × Taux d'occupation. Mesure la rentabilité réelle d'un bien indépendamment du prix affiché.",
  },
  {
    cat: "Technique Airbnb",
    term: "Taux d'occupation",
    def: "Pourcentage de nuits réservées sur une période. Calcul : Nuits vendues / Nuits disponibles × 100. À Tanger, un taux d'occupation Airbnb sain en 2026 est de 65-80% sur l'année (avec pic 90%+ en juin-août).",
  },
  {
    cat: "Technique Airbnb",
    term: "Pricing dynamique",
    def: "Algorithme qui ajuste automatiquement le prix selon la demande, la saisonnalité, les événements, la concurrence. Outils utilisés par Daribnb : PriceLabs, Beyond Pricing, Wheelhouse.",
  },
  {
    cat: "Technique Airbnb",
    term: "Channel manager",
    def: "Logiciel qui synchronise une annonce sur plusieurs plateformes (Airbnb, Booking, Vrbo, Expedia) en temps réel. Évite les doubles réservations. Daribnb utilise Smoobu et Hostaway.",
  },
  {
    cat: "Technique Airbnb",
    term: "Superhost",
    def: "Statut Airbnb attribué automatiquement aux hôtes répondant à 4 critères sur 12 mois : note moyenne ≥ 4,8, taux de réponse ≥ 90%, taux d'annulation < 1%, ≥ 10 séjours. Daribnb gère 100% de ses biens en visant le statut Superhost.",
  },
  {
    cat: "Technique Airbnb",
    term: "Auto-check-in",
    def: "Procédure d'arrivée sans rendez-vous physique. Le voyageur récupère les clés via boîte à clés, serrure connectée ou code d'accès. Particulièrement utile pour les check-ins tardifs ou pendant Ramadan.",
  },
  {
    cat: "Technique Airbnb",
    term: "Linge hôtelier",
    def: "Linge de lit et serviettes de qualité hôtelière, blanchi par un pressing professionnel. Norme à Tanger : draps coton 220g/m² minimum, serviettes 500g/m² éponge. Daribnb fournit l'intégralité.",
  },
  {
    cat: "Technique Airbnb",
    term: "Stay-over service",
    def: "Service de ménage intermédiaire pendant un séjour long (≥ 7 nuits). Inclus chez Daribnb à partir de 7 nuits.",
  },
  {
    cat: "Technique Airbnb",
    term: "Photographie LCD professionnelle",
    def: "Photos d'annonce prises avec matériel pro (objectif grand-angle, éclairage HDR, retouche). Augmente le taux de conversion des annonces de 30-40% en moyenne.",
  },

  // === CATÉGORIE B — RÉGLEMENTATION MAROC ===
  {
    cat: "Réglementation Maroc",
    term: "Autorisation préfecture (Maroc)",
    def: "Document à obtenir auprès de la wilaya / préfecture de la ville pour exercer une activité de location meublée touristique. Obligatoire à Tanger depuis 2024. Délai d'obtention : 2-6 semaines.",
  },
  {
    cat: "Réglementation Maroc",
    term: "Taxe de séjour Maroc",
    def: "Taxe perçue par la commune sur chaque nuitée touristique. À Tanger, elle varie de 5 à 30 MAD/nuit/personne selon le standing du logement. Reversée trimestriellement à la commune.",
  },
  {
    cat: "Réglementation Maroc",
    term: "Statut auto-entrepreneur Maroc",
    def: "Statut fiscal simplifié pour les revenus jusqu'à 500 000 MAD/an. Imposition forfaitaire 1% du CA. Permet d'exercer une activité de location meublée à titre individuel sans créer de société.",
  },
  {
    cat: "Réglementation Maroc",
    term: "IS Maroc (Impôt sur les Sociétés)",
    def: "Impôt applicable aux sociétés (SARL, SA) qui exercent l'activité de location meublée. Taux progressif 17,5% à 31% selon le bénéfice. Plus avantageux à partir d'un certain volume de CA.",
  },
  {
    cat: "Réglementation Maroc",
    term: "TVA Maroc location meublée",
    def: "La location meublée touristique courte durée est soumise à TVA au taux de 10% au Maroc (depuis 2025). Exonération si CA < 500 000 MAD/an et statut auto-entrepreneur.",
  },
  {
    cat: "Réglementation Maroc",
    term: "Office des Changes",
    def: "Organisme marocain qui contrôle les transferts de devises. Pour un MRE qui rapatrie ses revenus locatifs Maroc vers la France, plafond de 100 000 MAD/an sans justificatif (au-delà, dossier Office des Changes nécessaire).",
  },
  {
    cat: "Réglementation Maroc",
    term: "Bordereau de police (Maroc)",
    def: "Document à remplir pour chaque voyageur étranger arrivant dans un logement touristique au Maroc. À transmettre quotidiennement à la police touristique. Daribnb gère cette obligation pour ses propriétaires.",
  },
  {
    cat: "Réglementation Maroc",
    term: "Convention fiscale France-Maroc",
    def: "Accord bilatéral qui évite la double imposition. Pour un MRE résident fiscal France propriétaire à Tanger : revenus locatifs imposés au Maroc, déclarés en France avec crédit d'impôt égal à l'impôt marocain payé.",
  },
  {
    cat: "Réglementation Maroc",
    term: "LCD (Location Courte Durée)",
    def: "Acronyme désignant la location meublée touristique de moins de 30 nuits consécutives. Cadre réglementaire spécifique au Maroc depuis 2024.",
  },
  {
    cat: "Réglementation Maroc",
    term: "Décret n°2-23-844",
    def: "Décret marocain encadrant la location meublée touristique, paru en 2024. Impose l'autorisation préfectorale, la taxe de séjour, la déclaration des voyageurs étrangers, et fixe les sanctions en cas de non-conformité.",
  },

  // === CATÉGORIE C — TANGER & MARCHÉ LOCAL ===
  {
    cat: "Marché Tanger",
    term: "Tanger Med",
    def: "Plus grand port d'Afrique en activité, situé à 40 km de Tanger ville. Génère un trafic d'affaires important (cadres expatriés, business travelers) qui demande des locations courte durée toute l'année.",
  },
  {
    cat: "Marché Tanger",
    term: "Aéroport Mohammed V (Tanger Ibn Battouta)",
    def: "Aéroport international de Tanger. 1,5 million de passagers en 2025. Liaisons directes Paris, Bruxelles, Madrid, Marseille. Hub majeur pour la diaspora MRE européenne.",
  },
  {
    cat: "Marché Tanger",
    term: "Quartier Malabata",
    def: "Quartier balnéaire est de Tanger. Plages, restaurants, immeubles modernes. Très demandé en haute saison (juin-août) par les familles européennes et MRE. ADR moyen 600-900 MAD.",
  },
  {
    cat: "Marché Tanger",
    term: "Quartier Cap Spartel",
    def: "Quartier résidentiel ouest, sur les hauteurs face au détroit de Gibraltar. Villas et grands appartements haut de gamme. ADR moyen 800-1500 MAD. Cible voyageurs CSP+ et tourisme d'affaires.",
  },
  {
    cat: "Marché Tanger",
    term: "Centre-ville Tanger",
    def: "Quartier vivant, proche du port, des souks, du Petit Socco. Très demandé pour des séjours courts (1-3 nuits) tourisme culturel. ADR moyen 350-550 MAD.",
  },
  {
    cat: "Marché Tanger",
    term: "Médina de Tanger",
    def: "Vieille ville historique. Riads et appartements de charme. Cible touristes culturels européens. ADR moyen 500-900 MAD.",
  },
  {
    cat: "Marché Tanger",
    term: "Saisonnalité Tanger",
    def: "Marché Airbnb tangerois bi-modal. Pic 1 : juin-août (tourisme balnéaire + diaspora). Pic 2 : avril-mai et septembre-octobre (tourisme culturel européen). Creux : décembre-février (mais business travel constant).",
  },

  // === CATÉGORIE D — MRE & FISCALITÉ INTERNATIONALE ===
  {
    cat: "MRE & fiscalité",
    term: "MRE (Marocain Résidant à l'Étranger)",
    def: "Citoyen marocain (de naissance ou par filiation) résidant fiscalement à l'étranger. Au Maroc, statut juridique reconnu donnant accès à des avantages bancaires, fiscaux et patrimoniaux.",
  },
  {
    cat: "MRE & fiscalité",
    term: "Compte CCV (Convertible / Convertible)",
    def: "Compte bancaire marocain en devises étrangères ouvert aux MRE. Permet de recevoir et transférer des EUR ou USD librement, sans contrôle de l'Office des Changes.",
  },
  {
    cat: "MRE & fiscalité",
    term: "Compte CCMRE (Compte en Dirhams Convertibles)",
    def: "Compte bancaire en MAD ouvert aux MRE. Les fonds peuvent être convertis en devises et rapatriés sans plafond. Idéal pour gérer ses revenus locatifs Maroc en restant flexible.",
  },
  {
    cat: "MRE & fiscalité",
    term: "Crédit d'impôt étranger (France)",
    def: "Mécanisme fiscal français permettant à un résident France d'imputer l'impôt payé à l'étranger (Maroc) sur l'impôt français dû. Évite la double imposition. Calculé à partir du formulaire 2047.",
  },
  {
    cat: "MRE & fiscalité",
    term: "Formulaire 2047 (France)",
    def: "Annexe à la déclaration de revenus française à remplir pour déclarer des revenus de source étrangère (revenus Airbnb Maroc pour un MRE). Indispensable pour activer la convention fiscale France-Maroc.",
  },
  {
    cat: "MRE & fiscalité",
    term: "Statut LMNP non applicable au Maroc",
    def: "Le statut Loueur en Meublé Non Professionnel français (LMNP) ne s'applique PAS aux biens situés au Maroc. Un MRE résident France ne peut pas amortir son bien tangerois sous LMNP. Régime fiscal applicable : revenus fonciers ou BIC selon convention.",
  },
  {
    cat: "MRE & fiscalité",
    term: "Plafond Office des Changes (rapatriement)",
    def: "100 000 MAD/an de transferts sans justificatif pour un résident fiscal Maroc. Pas de plafond pour un MRE titulaire d'un compte CCMRE ou CCV — ses revenus locatifs Maroc sont rapatriables librement vers son compte européen.",
  },

  // === CATÉGORIE E — OPÉRATIONS DARIBNB ===
  {
    cat: "Opérations Daribnb",
    term: "Loyer fixe garanti",
    def: "Modèle commercial alternatif à la conciergerie classique. Daribnb verse un montant mensuel fixe au propriétaire, peu importe le taux d'occupation. Daribnb prend l'intégralité du risque commercial. Loyer fixe = ~65-75% du revenu net potentiel.",
  },
  {
    cat: "Opérations Daribnb",
    term: "Estimation gratuite 24h",
    def: "Service Daribnb : réception d'une demande propriétaire → audit du bien (photos, emplacement, équipement) → simulation chiffrée loyer fixe ou commission conciergerie → réponse personnalisée sous 24h. Sans engagement.",
  },
  {
    cat: "Opérations Daribnb",
    term: "Reporting mensuel propriétaire",
    def: "Document Excel ou PDF envoyé chaque mois au propriétaire : taux d'occupation, ADR, RevPAR, revenu brut, commission Daribnb, virement net, commentaires clients reçus, anomalies signalées, plan d'action mois suivant.",
  },
  {
    cat: "Opérations Daribnb",
    term: "Convention de gestion Daribnb",
    def: "Contrat encadrant la relation Daribnb-propriétaire. Précise les obligations de chaque partie, la commission ou loyer fixe, la durée d'engagement, les conditions de résiliation, le partage des frais (entretien, maintenance, fournitures).",
  },
  {
    cat: "Opérations Daribnb",
    term: "Service spécial MRE",
    def: "Workflow Daribnb dédié aux propriétaires MRE : communication 100% en français, signature électronique des documents, virements en EUR vers compte européen ou en MAD vers compte Maroc, reporting par email, accompagnement fiscal binational.",
  },

  // === CATÉGORIE F — VOCABULAIRE INDUSTRIE ===
  {
    cat: "Industrie LCD",
    term: "Conciergerie Airbnb",
    def: "Service de gestion 100% déléguée d'un bien Airbnb. Inclut généralement : annonce, communication voyageurs, check-in, ménage, linge, maintenance. Modèle économique : commission 15-25% des revenus.",
  },
  {
    cat: "Industrie LCD",
    term: "Sous-location professionnelle",
    def: "Activité où l'on loue un bien à un propriétaire (bail commercial dérogatoire) puis on le re-loue en courte durée sur Airbnb. Modèle pratiqué massivement en France et Belgique. Différent de la conciergerie : on est le locataire principal, pas le mandataire du propriétaire.",
  },
  {
    cat: "Industrie LCD",
    term: "Bail commercial dérogatoire (France)",
    def: "Bail français d'une durée de 36 mois maximum (hors statut commercial classique). Permet à un opérateur de sous-locataire de louer un appartement à un propriétaire en activité commerciale (sous-location pro). Cadre juridique de référence en France.",
  },
  {
    cat: "Industrie LCD",
    term: "Loi Le Meur 2025 (France)",
    def: "Loi française adoptée fin 2024 qui durcit la réglementation Airbnb : DPE minimum E (2034), obligations déclaratives renforcées, plafond de jours de location en résidence principale 90 jours/an, etc. Ne s'applique PAS aux biens au Maroc, mais peut concerner les MRE qui louent en France.",
  },
  {
    cat: "Industrie LCD",
    term: "PMS (Property Management System)",
    def: "Logiciel de gestion locative tout-en-un. Daribnb utilise Smoobu (Tanger) et Hostaway pour les opérations multi-biens. Inclut : channel manager, calendrier unifié, messagerie unifiée, automatisations check-in.",
  },
  {
    cat: "Industrie LCD",
    term: "Voyageur instantané vs sur demande",
    def: "Sur Airbnb, deux modes de réservation : 'Réservation instantanée' (le voyageur réserve sans attendre l'accord de l'hôte, augmente la conversion mais réduit la sélection) ou 'Demande de réservation' (l'hôte valide). Daribnb privilégie 'Instantanée' avec filtres de pré-qualification.",
  },
  {
    cat: "Industrie LCD",
    term: "Note d'arrivée (welcome guide)",
    def: "Document envoyé au voyageur 48h avant son arrivée : adresse exacte, instructions d'accès, code wifi, consignes maison, recommandations restaurants/visites. Élément clé de la satisfaction voyageur. Daribnb fournit un guide PDF personnalisé par bien.",
  },
  {
    cat: "Industrie LCD",
    term: "Cleaning fee (frais de ménage)",
    def: "Frais facturé au voyageur en supplément du prix par nuit, couvre le ménage de fin de séjour. À Tanger en 2026, tarif standard : 200-400 MAD selon la taille du logement.",
  },
  {
    cat: "Industrie LCD",
    term: "Caution / dépôt de garantie",
    def: "Sur Airbnb : couverture AirCover incluse jusqu'à 1 M USD. Daribnb ne demande pas de caution supplémentaire au voyageur (réduit la friction de réservation), s'appuie sur la couverture Airbnb pour les éventuels dégâts.",
  },
];

const CATEGORIES = [
  { id: "Technique Airbnb", color: "bg-red-50 text-red-900 border-red-200" },
  { id: "Réglementation Maroc", color: "bg-amber-50 text-amber-900 border-amber-200" },
  { id: "Marché Tanger", color: "bg-emerald-50 text-emerald-900 border-emerald-200" },
  { id: "MRE & fiscalité", color: "bg-blue-50 text-blue-900 border-blue-200" },
  { id: "Opérations Daribnb", color: "bg-purple-50 text-purple-900 border-purple-200" },
  { id: "Industrie LCD", color: "bg-stone-50 text-stone-900 border-stone-200" },
];

export default function LexiqueAirbnbTanger() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState(null);

  const filtered = useMemo(() => {
    return TERMS.filter((t) => {
      const matchSearch =
        !search ||
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.def.toLowerCase().includes(search.toLowerCase());
      const matchCat = !activeCat || t.cat === activeCat;
      return matchSearch && matchCat;
    });
  }, [search, activeCat]);

  // Schema.org DefinedTermSet — citation-ready pour les LLMs
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${URL}#lexique`,
    name: "Lexique Airbnb Tanger & Maroc",
    description:
      "Glossaire de référence des termes techniques, réglementaires et fiscaux liés à Airbnb, la location courte durée, la conciergerie et la fiscalité MRE au Maroc.",
    url: URL,
    inLanguage: "fr",
    creator: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
    },
    hasDefinedTerm: TERMS.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.def,
      inDefinedTermSet: `${URL}#lexique`,
      termCode: t.cat,
    })),
  };

  return (
    <ServicePageLayout
      title="Lexique Airbnb Tanger & Maroc | 50 termes — Daribnb"
      description="Glossaire complet : termes techniques Airbnb, réglementation Maroc, fiscalité MRE, marché Tanger. 50+ définitions claires par Daribnb, conciergerie experte de Tanger."
      canonical={URL}
      h1="Lexique Airbnb Tanger & Maroc"
      kicker="Glossaire"
      intro="50 termes essentiels pour comprendre la location courte durée Airbnb à Tanger, la réglementation marocaine 2025-2026, la fiscalité MRE, et les opérations conciergerie. Définitions sourcées par 6 ans d'expérience opérationnelle Daribnb."
      schema={schema}
    >
      {/* Search & filtres */}
      <section className="py-12 bg-white sticky top-0 z-30 border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563]"
            />
            <input
              type="search"
              placeholder="Rechercher un terme (ex: ADR, MRE, autorisation préfecture...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#FAF9F6] border border-black/10 rounded-full text-[#1A1A1A] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#C1272D] focus:border-transparent"
              aria-label="Rechercher un terme"
            />
          </div>

          {/* Filtres catégories */}
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCat(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !activeCat
                  ? "bg-[#1A1A1A] text-white"
                  : "bg-white text-[#1A1A1A] border border-black/10 hover:bg-[#FAF9F6]"
              }`}
            >
              Toutes ({TERMS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = TERMS.filter((t) => t.cat === cat.id).length;
              const active = activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(active ? null : cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? "bg-[#1A1A1A] text-white"
                      : "bg-white text-[#1A1A1A] border border-black/10 hover:bg-[#FAF9F6]"
                  }`}
                >
                  {cat.id} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Liste des termes */}
      <section className="py-16 md:py-20 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {filtered.length === 0 ? (
            <p className="text-center text-[#4B5563] py-12">
              Aucun terme trouvé. Essayez une autre recherche.
            </p>
          ) : (
            <div className="space-y-4">
              {filtered.map((t) => {
                const catColor =
                  CATEGORIES.find((c) => c.id === t.cat)?.color ||
                  "bg-stone-50 text-stone-900 border-stone-200";
                return (
                  <article
                    key={t.term}
                    id={`term-${t.term.replace(/\s+/g, "-").toLowerCase()}`}
                    className="bg-white rounded-2xl p-6 md:p-8 border border-black/5 scroll-mt-24"
                  >
                    <div className="flex items-start gap-3 mb-3 flex-wrap">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${catColor}`}
                      >
                        {t.cat}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
                      {t.term}
                    </h2>
                    <p className="mt-3 text-[#1A1A1A]/85 leading-relaxed">{t.def}</p>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <BookOpen size={32} className="text-[#C1272D] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Un terme manquant ? Une question pratique ?
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            Ce lexique évolue. Si vous avez une question sur un terme manquant, sur la
            réglementation Airbnb au Maroc, ou sur votre situation spécifique de
            propriétaire MRE, contactez-nous : on répond personnellement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/conciergerie-airbnb-tanger"
              className="inline-flex items-center justify-center gap-2 bg-[#C1272D] hover:bg-[#A01D22] text-white rounded-full px-8 py-4 font-semibold transition-all shadow-md hover:shadow-xl"
            >
              Voir notre conciergerie Tanger
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF9F6] text-[#1A1A1A] border border-black/10 rounded-full px-8 py-4 font-semibold transition-all"
            >
              Lire les guides détaillés
            </Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
