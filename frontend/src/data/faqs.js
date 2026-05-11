/**
 * Base de questions/réponses Daribnb — utilisée à 2 endroits :
 *   • <FAQ /> sur la home : seulement les questions GENERALES (cat "general")
 *   • Page /faq standalone : TOUTES les catégories avec ancres + FAQPage schema massif
 *
 * Mots-clés ciblés : conciergerie airbnb tanger, ménage airbnb tanger,
 * gestion locative tanger, loyer fixe airbnb maroc, MRE, etc.
 */

export const FAQ_CATEGORIES = [
  { id: "general", label: "Questions générales", icon: "✨" },
  { id: "conciergerie", label: "Conciergerie Airbnb Tanger", icon: "🏠" },
  { id: "menage", label: "Ménage & propreté", icon: "🧹" },
  { id: "gestion", label: "Gestion locative & loyer fixe", icon: "💼" },
  { id: "annonce", label: "Optimisation annonce Airbnb", icon: "📈" },
  { id: "mre", label: "MRE & propriétaires à l'étranger", icon: "✈️" },
];

export const FAQS = [
  // ═══════════════════════════ GÉNÉRAL ═══════════════════════════
  {
    cat: "general",
    q: "Quelle est la différence entre la conciergerie, Super Daribnb et le loyer fixe ?",
    a: "La conciergerie : on gère votre bien au quotidien, vous touchez les revenus nets après commission. Super Daribnb : une prestation unique d'optimisation (photos pro, refonte d'annonce, stratégie tarifaire, coaching) — vous gardez la gestion mais boostez vos revenus. Le loyer fixe : on vous verse un loyer garanti chaque mois, quel que soit le taux de remplissage.",
  },
  {
    cat: "general",
    q: "Où intervenez-vous au Maroc ?",
    a: "Notre cœur d'activité est Tanger, où nous gérons quotidiennement des appartements et des villas. On accompagne également des biens dans le nord du Maroc (Tétouan, Asilah, M'diq) et ponctuellement à Casablanca, Rabat, Marrakech via notre service Super Daribnb (audit, optimisation, photos pro) qui se réalise à distance ou avec déplacement.",
  },
  {
    cat: "general",
    q: "Y a-t-il une durée minimale d'engagement ?",
    a: "Pour la conciergerie, contrat flexible avec préavis raisonnable (généralement 60 jours). Pour le loyer fixe, les contrats sont de 12 à 36 mois pour garantir la stabilité du revenu. Aucun engagement pour une simple estimation.",
  },
  {
    cat: "general",
    q: "Quels sont les frais cachés ?",
    a: "Aucun. Notre commission est transparente (à partir de 20% du CA pour la conciergerie), sans frais d'entrée, sans frais d'arrêt. Pour le loyer fixe, le montant est fixé au contrat — c'est tout. Vous recevez chaque mois un rapport détaillé avec toutes les entrées et sorties.",
  },
  {
    cat: "general",
    q: "Comment êtes-vous payé ?",
    a: "Conciergerie : vous recevez vos revenus mensuels avec rapport détaillé, commission déduite. Loyer fixe : virement bancaire ponctuel chaque mois, au jour convenu dans le contrat — même si votre bien est vide.",
  },
  {
    cat: "general",
    q: "Puis-je utiliser mon bien pendant le contrat ?",
    a: "Oui. Vous pouvez bloquer des dates pour un usage personnel ou familial. On vous demande juste de nous prévenir 7 jours à l'avance pour ne pas pénaliser les réservations en cours.",
  },

  // ═══════════════════════════ CONCIERGERIE ═══════════════════════════
  {
    cat: "conciergerie",
    q: "C'est quoi exactement une conciergerie Airbnb à Tanger ?",
    a: "Une conciergerie Airbnb à Tanger prend en charge la gestion complète de votre bien en location courte durée : création et optimisation de l'annonce Airbnb / Booking / Vrbo, gestion des messages voyageurs 24/7, check-in et check-out, ménage entre chaque séjour, blanchisserie, maintenance, gestion des incidents et reporting mensuel. Vous touchez les revenus sans rien faire d'autre que valider les versements.",
  },
  {
    cat: "conciergerie",
    q: "Qui gère les problèmes avec les voyageurs ?",
    a: "Notre équipe Daribnb, 24h/24 et 7j/7, en français, anglais, espagnol et arabe. Vous ne recevez aucun appel, aucune plainte. On gère les check-in (en personne ou avec boîte à clés sécurisée), les litiges, les incidents (clim en panne, voisinage), et toute la maintenance (plombier, électricien, serrurier).",
  },
  {
    cat: "conciergerie",
    q: "Combien je peux gagner avec une conciergerie Airbnb à Tanger ?",
    a: "Tout dépend du type de bien, de l'emplacement et de la saison. À Tanger, un appartement 2 chambres bien optimisé sur le centre-ville (Marshan, Iberia, California) génère typiquement entre 8 000 et 18 000 DH/mois bruts en moyenne annuelle. En haute saison (juin-septembre) un bien performant peut faire 25 000-35 000 DH/mois. On vous fait une estimation chiffrée gratuite sous 24h.",
  },
  {
    cat: "conciergerie",
    q: "La conciergerie Daribnb couvre tous les quartiers de Tanger ?",
    a: "Oui : centre-ville (Iberia, California, Marshan), front de mer (Malabata, Hassani, Houara), Boubana, Bella Vista, Achakar, Rocade Aouama, Mghogha, Bni Makada, ainsi que les zones touristiques (Cap Spartel, Caves d'Hercule). On connaît la rentabilité réelle par quartier — demandez-nous, c'est gratuit.",
  },
  {
    cat: "conciergerie",
    q: "Quelle est votre commission ?",
    a: "Notre commission de conciergerie démarre à 20% du chiffre d'affaires HT et descend jusqu'à 18% pour les biens premium ou les portefeuilles multi-logements. Le ménage et la blanchisserie sont en supplément (à la charge du voyageur le plus souvent, refacturés sans marge sinon). Aucun frais caché.",
  },
  {
    cat: "conciergerie",
    q: "Vous gérez Airbnb mais aussi Booking et Vrbo ?",
    a: "Oui — on synchronise votre bien sur Airbnb, Booking.com et Vrbo via un channel manager pro. Cela évite les doubles réservations et maximise votre taux d'occupation. Globalement, sur nos biens à Tanger, Airbnb représente 65% des résas, Booking 30%, Vrbo 5%.",
  },
  {
    cat: "conciergerie",
    q: "Faut-il déclarer son activité Airbnb au Maroc ?",
    a: "Oui. Toute location de courte durée au Maroc doit être déclarée. Les revenus locatifs sont soumis à l'impôt sur le revenu marocain. À Tanger, vous devez aussi déclarer l'activité auprès du commissariat de police local (registre des étrangers pour les non-résidents) et reverser la taxe de promotion touristique. Daribnb vous accompagne dans toutes ces démarches.",
  },
  {
    cat: "conciergerie",
    q: "Comment gérez-vous les check-in à Tanger ?",
    a: "Trois modes selon le bien et l'heure : (1) check-in en personne par un membre de l'équipe, (2) boîte à clés sécurisée avec code à durée limitée, (3) serrure connectée pour les biens premium. Tous les voyageurs reçoivent un guide d'arrivée et nos coordonnées 24/7 avant leur séjour.",
  },

  // ═══════════════════════════ MÉNAGE ═══════════════════════════
  {
    cat: "menage",
    q: "Comment fonctionne le ménage Airbnb avec Daribnb à Tanger ?",
    a: "Notre équipe de ménage intervient entre chaque séjour selon un protocole de 47 points : draps et linge de toilette frais, désinfection des points de contact, nettoyage cuisine/salle de bain, balayage et lavage des sols, contrôle des consommables (papier toilette, savon, café, sel...). Photo de contrôle envoyée au propriétaire à chaque rotation.",
  },
  {
    cat: "menage",
    q: "Qui paie le ménage entre les séjours ?",
    a: "Par défaut, le ménage est répercuté au voyageur dans le tarif Airbnb / Booking sous forme de \"frais de ménage\". C'est ce qui se pratique sur 95% des annonces à Tanger. Vous, propriétaire, ne payez rien. Si vous voulez l'absorber dans le tarif total (stratégie de pricing), c'est aussi possible.",
  },
  {
    cat: "menage",
    q: "Combien coûte le ménage d'un appartement Airbnb à Tanger ?",
    a: "Tarif moyen 2026 à Tanger : 150 DH pour un studio, 200-250 DH pour un T2, 300-350 DH pour un T3, 400-500 DH pour une villa. Cela inclut le ménage complet, le change du linge fourni par Daribnb, et le check-out de contrôle. Pas de surprise : tarif convenu à la signature du contrat.",
  },
  {
    cat: "menage",
    q: "Vous fournissez le linge et les produits ménagers ?",
    a: "Oui — Daribnb fournit draps hôteliers (260 fils minimum), serviettes coton 500g, et tous les consommables (savon, papier WC, sachets thé/café, sel/poivre). Le linge est traité dans notre buanderie partenaire à Tanger (pas de lavage chez le voisin ou à la machine du logement, qui dégrade la qualité).",
  },
  {
    cat: "menage",
    q: "Que faire si un voyageur abîme ou salit énormément le logement ?",
    a: "Trois protections : (1) caution Airbnb / Booking encaissée à l'arrivée, (2) assurance hôte Airbnb AirCover (jusqu'à 1M$ de dommages couverts), (3) constat photo systématique de notre équipe à chaque check-out. On gère les réclamations et les remboursements à votre place. Vous n'avez rien à faire.",
  },
  {
    cat: "menage",
    q: "Le ménage Airbnb à Tanger est-il déclaré ?",
    a: "Oui — Daribnb fait travailler une équipe déclarée à la CNSS marocaine, avec contrat et formation. C'est rare dans le secteur (90% des conciergeries Tanger emploient au noir), c'est une garantie pour vous : pas de risque de redressement, qualité de service stable, équipe fidélisée.",
  },
  {
    cat: "menage",
    q: "Cleaning bnb à Tanger : à quelle fréquence intervenez-vous ?",
    a: "Le ménage se fait systématiquement entre chaque check-out et check-in. Pour les séjours de plus de 7 jours, on propose un ménage intermédiaire en option (gratuit pour le voyageur, refacturé au propriétaire à prix coûtant). Cela évite les mauvais avis liés à la propreté sur les longs séjours.",
  },
  {
    cat: "menage",
    q: "Vous gérez aussi la blanchisserie complète ?",
    a: "Oui. Service inclus dans nos prestations : enlèvement du linge sale après chaque check-out, lavage / séchage / repassage en blanchisserie partenaire à Tanger, retour propre pour le ménage suivant. Stock tampon de 3 jeux par lit pour absorber les rotations rapides en haute saison.",
  },

  // ═══════════════════════════ GESTION & LOYER FIXE ═══════════════════════════
  {
    cat: "gestion",
    q: "Gestion locative à Tanger : c'est quoi exactement ?",
    a: "La gestion locative à Tanger, version Daribnb, c'est la prise en charge totale de votre bien en location courte durée : on s'occupe de tout, de la mise en ligne à la facturation, en passant par les voyageurs, l'entretien et les déclarations fiscales. Vous touchez les revenus, on gère les opérations. C'est différent de la gestion en location longue durée (bail meublé classique) qui n'est pas notre métier.",
  },
  {
    cat: "gestion",
    q: "Comment fonctionne le loyer fixe garanti à Tanger ?",
    a: "Le loyer fixe à Tanger fonctionne comme un bail commercial : Daribnb signe avec vous pour 12 à 36 mois, vous verse un loyer mensuel garanti — peu importe que le bien soit loué ou vide — et nous gérons l'exploitation Airbnb à nos risques. Idéal pour les propriétaires qui veulent zéro stress et zéro variation de revenu.",
  },
  {
    cat: "gestion",
    q: "Quel est le montant d'un loyer fixe à Tanger ?",
    a: "Le montant dépend de la rentabilité estimée du bien. Sur un appartement 2 chambres centre Tanger (Marshan, Iberia), on est typiquement entre 4 500 et 8 500 DH/mois en loyer fixe. C'est environ 60-70% du revenu net moyen en conciergerie — la différence couvre notre risque de vacance. Estimation gratuite et chiffrée sur votre bien.",
  },
  {
    cat: "gestion",
    q: "Si Daribnb ne loue pas mon bien, je suis payé quand même ?",
    a: "Oui — c'est tout l'intérêt du loyer fixe. Vous êtes payé chaque mois au jour convenu, que le bien soit loué 30 jours ou 0 jour. Le risque commercial est intégralement supporté par Daribnb. C'est la formule la plus sécurisée pour un propriétaire qui ne veut aucune surprise.",
  },
  {
    cat: "gestion",
    q: "Loyer fixe vs conciergerie : laquelle me rapporte le plus ?",
    a: "En théorie, la conciergerie rapporte plus en haute saison et moins en basse saison. Le loyer fixe rapporte moins en haut de cycle mais beaucoup plus en bas de cycle. Sur 3 ans à Tanger, c'est souvent kif-kif. La conciergerie convient aux propriétaires qui acceptent la variation. Le loyer fixe convient à ceux qui veulent dormir tranquille.",
  },
  {
    cat: "gestion",
    q: "Vous me garantissez l'état du bien à la fin du contrat ?",
    a: "Oui. État des lieux d'entrée et de sortie, entretien continu, maintenance préventive (peinture, électroménager). À la fin du contrat, le bien vous est rendu dans l'état d'origine (usage normal accepté). C'est écrit au contrat. Aucune mauvaise surprise.",
  },
  {
    cat: "gestion",
    q: "Quelle assurance pour un bien en gestion Daribnb à Tanger ?",
    a: "Trois niveaux de couverture : (1) votre assurance propriétaire classique (MRH) couvre la coque et le contenu, (2) Airbnb AirCover couvre dégâts voyageurs jusqu'à 1M$, (3) Daribnb souscrit une assurance professionnelle qui couvre nos opérations. On vous accompagne pour optimiser votre couverture si besoin.",
  },

  // ═══════════════════════════ ANNONCE & OPTIMISATION ═══════════════════════════
  {
    cat: "annonce",
    q: "Mon annonce Airbnb à Tanger ne décolle pas : que faire ?",
    a: "Quatre leviers, dans cet ordre d'impact : (1) photos pro (l'image principale fait 70% de la décision de clic), (2) titre et description optimisés pour le SEO Airbnb interne, (3) stratégie tarifaire dynamique avec saisonnalité Tanger (juin-septembre haute saison, Ramadan creux), (4) premiers avis 5 étoiles à obtenir vite. Notre Super Daribnb couvre ces 4 leviers en une prestation.",
  },
  {
    cat: "annonce",
    q: "Comment optimiser une annonce Airbnb à Tanger pour le SEO Airbnb ?",
    a: "Le SEO interne Airbnb privilégie : taux de réponse rapide (< 1h), taux d'acceptation > 95%, calendrier mis à jour, annulations zéro, photos HD verticales, titre avec keywords locaux (\"Tanger\", \"Marshan\", \"vue mer\"), description structurée par sections, amenities cochées à 100%, et avis 4.8+/5. C'est exactement ce qu'on fait pour chaque bien en gestion Daribnb.",
  },
  {
    cat: "annonce",
    q: "Combien coûte une optimisation Super Daribnb pour un Airbnb à Tanger ?",
    a: "Tarif Super Daribnb sur mesure selon l'ampleur (un bien ou un portefeuille, photos seules ou refonte complète). Pour un appartement standard à Tanger avec photos pro, refonte annonce et stratégie tarifaire, on est typiquement entre 2 500 et 6 000 DH. ROI moyen observé : x2 à x3 sur les 90 jours suivants.",
  },
  {
    cat: "annonce",
    q: "Vous gérez aussi mon annonce Booking.com en parallèle d'Airbnb ?",
    a: "Oui. On synchronise Airbnb, Booking.com et Vrbo via channel manager (PriceLabs ou Hostaway selon le bien). Disponibilités et tarifs alignés en temps réel, pas de double résa, pricing dynamique par plateforme. Booking représente environ 30% de votre CA en plus à Tanger.",
  },
  {
    cat: "annonce",
    q: "Combien de photos pour une annonce Airbnb performante à Tanger ?",
    a: "Minimum 20 photos, idéalement 30-35 pour les biens premium. Format vertical (3:4) en priorité car affichage mobile (où 65% des recherches se font). Pas plus de 8 photos sur la même pièce. Photo de couverture = toujours le salon ou la vue (jamais la chambre). Daribnb inclut le shooting pro 25-35 photos dans toutes ses prestations.",
  },
  {
    cat: "annonce",
    q: "Vaut-il mieux Airbnb ou Booking à Tanger en 2026 ?",
    a: "Les deux. Airbnb pour la clientèle voyage / familles / loisirs et les MRE qui rentrent en été. Booking pour les voyages d'affaires et les courts séjours derniers minute. À Tanger, la répartition optimale est environ 65/35 Airbnb/Booking. Daribnb gère les deux automatiquement sans surcoût.",
  },

  // ═══════════════════════════ MRE ═══════════════════════════
  {
    cat: "mre",
    q: "Je suis MRE en France, comment ça marche concrètement avec Daribnb ?",
    a: "Pour un MRE en France (ou Belgique, Espagne, Allemagne, Pays-Bas, Canada), tout est géré à distance par Daribnb : signature électronique du mandat, communication WhatsApp/email, virements en EUR sur compte français ou en MAD sur compte marocain (au choix), reporting mensuel détaillé. Vous n'avez pas besoin de rentrer au Maroc pour démarrer.",
  },
  {
    cat: "mre",
    q: "Daribnb peut gérer mon bien à Tanger si je n'y vais qu'une fois par an ?",
    a: "C'est même notre cœur de cible. La majorité de nos propriétaires sont des MRE qui rentrent 1 fois/an en été. On gère tout en autonomie complète. Vous bloquez votre période de vacances (juillet ou août typiquement), on gère les voyageurs le reste de l'année. C'est conçu pour vous.",
  },
  {
    cat: "mre",
    q: "Comment vous me payez si je suis en France ou en Belgique ?",
    a: "Deux options : (1) virement en MAD sur votre compte bancaire marocain (le plus simple), (2) virement SEPA en EUR sur votre compte européen, après conversion au taux interbancaire. Frais de conversion : aucun chez nous, mais votre banque peut prélever ~0,5%. Reporting mensuel détaillé envoyé par email.",
  },
  {
    cat: "mre",
    q: "Quels impôts je paie en tant que MRE sur mes revenus Airbnb au Maroc ?",
    a: "Vos revenus Airbnb sont imposables au Maroc (régime fiscal des locations meublées). Le taux dépend de votre statut. Si vous êtes domicilié fiscalement en France, vous déclarez aussi en France (cases 4BE / 4BK selon régime) mais bénéficiez d'un crédit d'impôt grâce à la convention fiscale France-Maroc de 1970 (évite la double imposition). Daribnb vous aide à structurer.",
  },
  {
    cat: "mre",
    q: "Mon bien à Tanger est en indivision familiale, vous pouvez quand même gérer ?",
    a: "Oui. Pour l'indivision, on signe un mandat avec tous les indivisaires (ou un mandataire désigné par tous). Versements répartis automatiquement chaque mois selon les quotes-parts. Beaucoup de nos clients MRE sont en indivision avec frères/sœurs — on est rodés sur ce point.",
  },
  {
    cat: "mre",
    q: "Vous communiquez en français ou en arabe avec moi ?",
    a: "Au choix. Notre équipe communique couramment en français, arabe (darija marocaine et arabe classique), anglais et espagnol. On s'adapte à votre préférence. Reporting et contrats disponibles en français et en arabe.",
  },
];

// Helper : récupère uniquement les FAQs "general" pour la home
export const HOME_FAQS = FAQS.filter((f) => f.cat === "general");

// Helper : group all FAQs by category for /faq standalone page
export const FAQS_BY_CATEGORY = FAQ_CATEGORIES.map((c) => ({
  ...c,
  questions: FAQS.filter((f) => f.cat === c.id),
}));
