import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import { BLOG_POSTS, getPostBySlug } from "../data/blogPosts";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,
  Loader2,
  ArrowRight,
} from "lucide-react";

const SITE = "https://daribnb.ma";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const found = getPostBySlug(slug);
    if (!found) {
      navigate("/", { replace: true });
      return;
    }
    setPost(found);
    setRelated(BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3));
    setLoading(false);
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <Loader2 className="w-8 h-8 animate-spin text-[#C1272D]" />
      </div>
    );
  }
  if (!post) return null;

  const url = `${SITE}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description,
    image: post.cover,
    datePublished: post.published_at,
    author: { "@type": "Person", name: "Marwan — Daribnb" },
    publisher: {
      "@type": "Organization",
      name: "Daribnb",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/assets/logo.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords,
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Helmet>
        <title>{`${post.title} | Daribnb`}</title>
        <meta name="description" content={post.meta_description} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:image" content={post.cover} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:section" content={post.city} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <article className="pt-28 md:pt-32 pb-20">
        {/* Cover */}
        <div className="relative">
          <div className="aspect-[21/9] md:aspect-[21/8] overflow-hidden">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-semibold mb-4"
              >
                <ArrowLeft size={14} /> Tous les articles
              </Link>
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-white/90 mb-3">
                <span className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1">
                  <MapPin size={12} /> {post.city}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} /> {fmtDate(post.published_at)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} /> {post.read_time} min de lecture
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <p className="text-lg md:text-xl text-[#1A1A1A] leading-relaxed font-medium mb-10 border-l-4 border-[#C1272D] pl-6 italic">
            {post.excerpt}
          </p>

          <div className="prose prose-lg max-w-none article-content">
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mt-12 mb-4" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mt-8 mb-3" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-[#1A1A1A] leading-relaxed mb-5 text-[17px]" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-[#1A1A1A]" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal pl-6 space-y-2 mb-6 text-[#1A1A1A]" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-bold text-[#1A1A1A]" {...props} />
                ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse border border-[#E5E5E5] rounded-lg" {...props} />
                  </div>
                ),
                th: ({ node, ...props }) => (
                  <th className="border border-[#E5E5E5] bg-[#FAF9F6] px-4 py-3 text-left font-bold text-[#1A1A1A]" {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="border border-[#E5E5E5] px-4 py-3 text-[#1A1A1A]" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* CTA block */}
          <div className="mt-16 bg-gradient-to-br from-[#C1272D] to-[#A01D22] rounded-3xl p-8 md:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Envie d'une estimation gratuite de votre bien ?
            </h3>
            <p className="text-white/90 mb-6">
              Marwan, fondateur de Daribnb, vous rappelle sous 24h.
              Estimation personnalisée et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#C1272D] rounded-full px-6 py-3 font-semibold hover:bg-[#f5f5f5] transition-colors"
              >
                Nous contacter
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/212646218407"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white rounded-full px-6 py-3 font-semibold hover:bg-white/25 transition-colors"
              >
                WhatsApp direct
              </a>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 md:px-12 pt-12 border-t border-[#E5E5E5]">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">
              Continuer la lecture
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] hover:shadow-lg transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={r.cover} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-[#4B5563] mb-2">{r.city}</div>
                    <h4 className="font-bold text-[#1A1A1A] group-hover:text-[#C1272D] transition-colors line-clamp-2">
                      {r.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
