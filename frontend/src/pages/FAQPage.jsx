import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { ChevronRight } from "lucide-react";
import { FAQ_CATEGORIES, FAQS, FAQS_BY_CATEGORY } from "../data/faqs";

export default function FAQPage() {
  // FAQPage JSON-LD complet (toutes les Q/R) — gros boost rich results Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.daribnb.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://www.daribnb.com/faq",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Helmet>
        <title>
          FAQ — Conciergerie Airbnb Tanger, ménage, gestion locative | Daribnb
        </title>
        <meta
          name="description"
          content="Toutes les réponses sur la conciergerie Airbnb à Tanger, le ménage, la gestion locative, le loyer fixe garanti, et la fiscalité MRE. 35+ questions répondues par Daribnb."
        />
        <link rel="canonical" href="https://www.daribnb.com/faq" />
        <meta property="og:title" content="FAQ Daribnb — Conciergerie Airbnb Tanger" />
        <meta
          property="og:description"
          content="35+ questions répondues sur conciergerie, ménage, gestion locative et loyer fixe Airbnb à Tanger."
        />
        <meta property="og:url" content="https://www.daribnb.com/faq" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 mb-16">
          <nav className="text-sm text-[#4B5563] mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-[#C1272D]">
              Accueil
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1A1A1A] font-semibold">FAQ</span>
          </nav>

          <span className="text-sm font-bold text-[#006233] uppercase tracking-wider">
            Questions fréquentes
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-[#1A1A1A] leading-tight">
            Tout ce que vous devez savoir
            <br />
            sur Daribnb à Tanger.
          </h1>
          <p className="mt-6 text-xl text-[#4B5563] max-w-3xl leading-relaxed">
            {FAQS.length}+ réponses concrètes sur la conciergerie Airbnb,
            le ménage, la gestion locative, le loyer fixe garanti et la
            fiscalité MRE. Si votre question n'est pas listée,{" "}
            <a
              href="https://wa.me/212646218407?text=Bonjour%20Daribnb%2C%20j'ai%20une%20question%20%3A"
              target="_blank"
              rel="noreferrer"
              className="text-[#C1272D] font-semibold hover:underline"
            >
              écrivez-nous sur WhatsApp
            </a>{" "}
            — on répond sous 1h en journée.
          </p>
        </section>

        {/* Sommaire des catégories (ancres) */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 mb-16">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E5E5E5]">
            <h2 className="text-sm font-bold text-[#006233] uppercase tracking-wider mb-4">
              Sommaire
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {FAQ_CATEGORIES.map((c) => {
                const count = FAQS.filter((f) => f.cat === c.id).length;
                return (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-[#FAF9F6] transition-colors group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xl">{c.icon}</span>
                        <span className="font-semibold text-[#1A1A1A] group-hover:text-[#C1272D] transition-colors">
                          {c.label}
                        </span>
                      </span>
                      <span className="text-xs text-[#4B5563]">{count}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Sections par catégorie */}
        {FAQS_BY_CATEGORY.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="max-w-4xl mx-auto px-6 md:px-12 mb-16 scroll-mt-32"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl">{cat.icon}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                {cat.label}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {cat.questions.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`${cat.id}-${i}`}
                  className="bg-white border border-[#E5E5E5] rounded-2xl px-6 hover:border-[#C1272D]/40 transition-all"
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
          </section>
        ))}

        {/* CTA final */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 mt-24">
          <div className="bg-[#1A1A1A] text-white rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Votre question n'est pas dans la liste&nbsp;?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              On vous répond en 1h sur WhatsApp pendant les heures de bureau.
              Estimation gratuite et sans engagement pour votre bien à Tanger.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/212646218407?text=Bonjour%20Daribnb%2C%20j'ai%20une%20question%20%3A"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 py-4 font-semibold transition-all shadow-md hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Poser ma question sur WhatsApp
              </a>
              <Link
                to="/marwan-afassi"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 py-4 font-semibold transition-all"
              >
                Qui est derrière Daribnb&nbsp;?
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
