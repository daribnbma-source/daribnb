import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQS = [
  {
    q: "Quelle est la différence entre la conciergerie et le loyer fixe ?",
    a: "La conciergerie : on gère votre bien en location courte durée, vous touchez les revenus nets après commission. Le loyer fixe : on vous verse un loyer garanti chaque mois, quel que soit le taux de remplissage. Vous choisissez selon votre profil : maximiser vos revenus ou sécuriser un revenu fixe.",
  },
  {
    q: "Y a-t-il une durée minimale d'engagement ?",
    a: "Pour la conciergerie, nous proposons un contrat flexible avec un préavis raisonnable. Pour le loyer fixe, les contrats sont généralement de 12 à 36 mois pour garantir la stabilité du revenu.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "Partout au Maroc : Marrakech, Casablanca, Rabat, Tanger, Agadir, Fès, Essaouira, Chefchaouen et toutes les autres villes. On se déplace chez vous pour l'estimation.",
  },
  {
    q: "Quels sont les frais cachés ?",
    a: "Aucun. Notre commission est transparente (20% minimum pour la conciergerie), sans frais d'entrée, sans frais d'arrêt. Pour le loyer fixe, le montant est fixé au contrat — c'est tout.",
  },
  {
    q: "Qui gère les problèmes avec les voyageurs ?",
    a: "Notre équipe, 24h/24 et 7j/7. Vous ne recevez aucun appel, aucune plainte. On gère les check-in, les litiges, les incidents et la maintenance.",
  },
  {
    q: "Comment êtes-vous payé ?",
    a: "Pour la conciergerie : vous recevez vos revenus mensuels avec un rapport détaillé, commission déduite. Pour le loyer fixe : virement bancaire ponctuel chaque mois, au jour convenu.",
  },
  {
    q: "Puis-je utiliser mon bien pendant le contrat ?",
    a: "Oui, vous pouvez bloquer des dates pour un usage personnel. On vous demande juste de nous prévenir à l'avance pour ne pas pénaliser les réservations.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-14 text-center">
          <span className="text-sm font-bold text-[#006233] uppercase tracking-wider">
            Questions fréquentes
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            On répond à vos questions.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`faq-item-${i + 1}`}
              className="bg-[#FAF9F6] border border-[#E5E5E5] rounded-2xl px-6 hover:border-[#FF5A5F]/40 transition-all"
            >
              <AccordionTrigger className="text-left font-bold text-[#1A1A1A] hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] pb-6 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
