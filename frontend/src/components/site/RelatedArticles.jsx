import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RelatedArticles({ slugs }) {
  return (
    <section className="bg-[#FAF9F6] py-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/40 mb-6">
          Articles liés
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slugs.map((item) => (
            <Link
              key={item.slug}
              to={`/blog/${item.slug}`}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-black/8 bg-white px-5 py-4 transition-all hover:border-[#C1272D]/30 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-[#1A1A1A] leading-snug group-hover:text-[#C1272D] transition-colors line-clamp-2">
                {item.title}
              </p>
              <ArrowRight size={14} className="flex-shrink-0 mt-0.5 text-[#1A1A1A]/30 group-hover:text-[#C1272D] transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
