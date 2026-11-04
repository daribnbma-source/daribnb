import React, { useEffect, useMemo } from "react";
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
  ArrowRight,
} from "lucide-react";
import { sized } from "../lib/img";

const SITE = "https://www.daribnb.com";

// Nettoie le Markdown inline pour le JSON-LD (liens, gras, italique, code).
const stripMd = (txt) =>
  txt
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]+/g, "")
    .replace(/\s+/g, " ")
    .trim();

// Extrait les questions/réponses de la section « FAQ » (H2 contenant « FAQ »,
// questions en `### `) pour générer un schéma FAQPage.
function extractFaq(md) {
  if (!md) return [];
  const items = [];
  let inFaq = false;
  let cur = null;
  const flush = () => {
    if (cur && cur.a.length) items.push({ q: stripMd(cur.q), a: stripMd(cur.a.join(" ")) });
    cur = null;
  };
  for (const line of md.split("\n")) {
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      flush();
      inFaq = /\bFAQ\b|questions fréquentes/i.test(h2[1]);
      continue;
    }
    if (!inFaq) continue;
    if (/^---\s*$/.test(line) || /^#\s/.test(line)) {
      flush();
      inFaq = false;
      continue;
    }
    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      flush();
      cur = { q: h3[1].trim(), a: [] };
      continue;
    }
    if (cur && line.trim() && !/^>/.test(line.trim())) cur.a.push(line.trim());
  }
  flush();
  return items;
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  // Article lu de façon synchrone : le premier rendu client est identique au HTML pré-rendu
  // (l'ancien état « chargement » au premier rendu provoquait une erreur d'hydratation #418).
  const post = useMemo(() => getPostBySlug(slug), [slug]);
  const related = useMemo(() => BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3), [slug]);

  useEffect(() => {
    if (!post) {
      navigate("/", { replace: true });
      return;
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  if (!post) return null;

  const url = `${SITE}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description,
    image: post.cover && post.cover.startsWith("/") ? `${SITE}${post.cover}` : post.cover,
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: { "@type": "Person", "@id": `${SITE}/marwan-afassi#person`, name: "Marwan Afassi", url: `${SITE}/marwan-afassi` },
    publisher: { "@id": `${SITE}/#business` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords,
  };

  const faq = extractFaq(post.content);
  const faqSchema =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Helmet>
        <title>{`${post.title} | Daribnb`}</title>
        <meta name="description" content={post.meta_description} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:image" content={post.cover && post.cover.startsWith("/") ? `${SITE}${post.cover}` : post.cover} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.published_at} />
        {post.updated_at && <meta property="article:modified_time" content={post.updated_at} />}
        <meta property="article:section" content={post.city} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <Header />

      <article className="pt-28 md:pt-32 pb-20">
        {/* Cover */}
        <div className="relative">
          <div className="aspect-[21/9] md:aspect-[21/8] overflow-hidden">
            <img
              src={sized(post.cover, 1400)}
              srcSet={/^https:/.test(post.cover || "") ? `${sized(post.cover, 640)} 640w, ${sized(post.cover, 1000)} 1000w, ${sized(post.cover, 1400)} 1400w` : undefined}
              sizes="100vw"
              alt={post.title}
              width="1400"
              height="600"
              fetchpriority="high"
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
                {post.updated_at && (
                  <span className="inline-flex items-center gap-1">
                    Mis à jour le {fmtDate(post.updated_at)}
                  </span>
                )}
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
                  <th className="border border-[#E5E5E5] bg-[#F7F6F2] px-4 py-3 text-left font-bold text-[#1A1A1A]" {...props} />
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
                href="https://wa.me/212726156448"
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
                    <img src={sized(r.cover, 600)} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
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
