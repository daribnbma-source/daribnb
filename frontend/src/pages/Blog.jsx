import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import { BLOG_POSTS } from "../data/blogPosts";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const SITE = "https://daribnb.ma";

export default function Blog() {
  const posts = BLOG_POSTS;

  const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Helmet>
        <title>Blog Daribnb — Conseils conciergerie Airbnb & loyer fixe au Maroc</title>
        <meta
          name="description"
          content="Guides, conseils et analyses d'expert pour rentabiliser votre bien en Airbnb au Maroc. Casablanca, Marrakech, Tanger, Rabat et plus."
        />
        <link rel="canonical" href={`${SITE}/blog`} />
        <meta property="og:title" content="Blog Daribnb — Expert Airbnb au Maroc" />
        <meta property="og:description" content="Conseils d'expert pour rentabiliser votre Airbnb au Maroc." />
        <meta property="og:url" content={`${SITE}/blog`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <main className="pt-32 md:pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Le blog de Daribnb
            </span>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold text-[#1A1A1A] leading-tight">
              Conseils, guides & analyses d'expert Airbnb au Maroc.
            </h1>
            <p className="mt-4 text-lg text-[#4B5563]">
              6+ années d'expérience, 1 196 évaluations, et des propriétaires
              accompagnés à travers tout le royaume. On partage tout ici.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-[#4B5563] py-20">
              Les premiers articles arrivent bientôt.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  data-testid={`blog-card-${p.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#E5E5E5] hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[#4B5563] mb-3">
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} /> {p.city}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} /> {fmtDate(p.published_at)}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} /> {p.read_time} min
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#C1272D] transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-sm text-[#4B5563] line-clamp-3">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[#C1272D] font-semibold text-sm">
                      Lire l'article
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
