import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../lib/api";
import { Calendar, Clock, ArrowRight, MapPin } from "lucide-react";

export default function BlogTeaser() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/blog").then(({ data }) => setPosts(data.slice(0, 3))).catch(() => {});
  }, []);

  if (!posts.length) return null;

  const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <section id="blog" data-testid="blog-teaser" className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[#006233] uppercase tracking-wider">
              Le blog Daribnb
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              Conseils d'expert Airbnb au Maroc.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Casablanca, Rabat, Tanger, Marrakech… Tout ce qu'il faut savoir pour rentabiliser votre bien.
            </p>
          </div>
          <Link
            to="/blog"
            data-testid="blog-see-all"
            className="inline-flex items-center gap-2 bg-white border border-[#E5E5E5] hover:border-[#C1272D] hover:text-[#C1272D] text-[#1A1A1A] rounded-full px-6 py-3 font-semibold text-sm transition-all whitespace-nowrap"
          >
            Tous les articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              data-testid={`blog-teaser-${p.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-[#4B5563] mb-2">
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> {p.city}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> {fmtDate(p.published_at)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] leading-snug mb-2 group-hover:text-[#C1272D] transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#4B5563] line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-[#C1272D] font-semibold text-sm">
                  Lire
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
