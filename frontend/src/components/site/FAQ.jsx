import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { HOME_FAQS, FAQS } from "../../data/faqs";

export default function FAQ() {
  // FAQPage JSON-LD pour rich results Google (les Q/A peuvent s'afficher directement dans la SERP)
  // Sur la home on n'expose QUE les FAQs générales — la page /faq a son propre schema complet
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-24 md:py-32 bg-white"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
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
          {HOME_FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`faq-item-${i + 1}`}
              className="bg-[#FAF9F6] border border-[#E5E5E5] rounded-2xl px-6 hover:border-[#C1272D]/40 transition-all"
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

        {/* Lien vers la FAQ complète (35+ questions catégorisées) */}
        <div className="mt-10 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-[#C1272D] hover:text-[#A01D22] font-semibold transition-colors group"
          >
            Voir les {FAQS.length}+ questions sur conciergerie, ménage, gestion, MRE
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
