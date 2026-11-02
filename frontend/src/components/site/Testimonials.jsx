import React from "react";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight } from "lucide-react";
import Reveal from "../motion/Reveal";
import Marquee from "../motion/Marquee";
import CountUp from "../motion/CountUp";
import { CLIENT_REVIEWS } from "../../data/reviews";

// Avis voyageurs réels (Airbnb + Google). Doublons retirés pour le bandeau.
const REVIEWS = CLIENT_REVIEWS.filter((r, i, a) => a.findIndex((x) => x.body === r.body) === i);

function ReviewCard({ r }) {
  return (
    <figure className="w-[22rem] flex-shrink-0 rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {[...Array(r.rating)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#C1272D] text-[#C1272D]" />
          ))}
        </div>
        <span className="rounded-full bg-[#FAF9F6] px-2.5 py-1 text-[11px] font-semibold text-[#6B7280]">
          Avis {r.source}
        </span>
      </div>
      <blockquote className="mt-4 line-clamp-5 text-[15px] leading-relaxed text-[#1A1A1A]">« {r.body} »</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#006233] text-sm font-bold text-white">
          {r.authorName.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-bold text-[#1A1A1A]">{r.authorName}</span>
          <span className="block text-xs text-[#6B7280]">{r.location}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section data-testid="testimonials-section" className="overflow-hidden bg-[#FAF9F6] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <span className="text-sm font-bold uppercase tracking-wider text-[#006233]">Ce que disent les voyageurs</span>
            <h2 className="mt-3 text-4xl font-bold text-[#1A1A1A] md:text-5xl">
              Des voyageurs ravis, c'est un bien qui se remplit.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Chaque avis 5 étoiles fait remonter votre annonce. Voici ce que les voyageurs écrivent après un séjour
              dans un logement géré par Daribnb.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="flex items-center gap-6 rounded-3xl bg-[#1A1A1A] p-7 text-white">
              <div>
                <p className="font-heading text-5xl font-bold">
                  <CountUp to={4.93} decimals={2} />
                </p>
                <div className="mt-2 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#C1272D] text-[#C1272D]" />
                  ))}
                </div>
              </div>
              <div className="h-14 w-px bg-white/15" />
              <div>
                <p className="font-heading text-3xl font-bold">
                  <CountUp to={1196} />
                </p>
                <p className="text-sm text-white/65">avis voyageurs sur Airbnb</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAF9F6] md:w-40" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAF9F6] md:w-40" />
        <Marquee duration={45}>
          {REVIEWS.map((r) => (
            <ReviewCard key={r.authorName + r.date} r={r} />
          ))}
        </Marquee>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 md:px-12">
        <Link
          to="/temoignages"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#C1272D] hover:underline"
        >
          <Quote size={16} /> Voir tous les avis <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
