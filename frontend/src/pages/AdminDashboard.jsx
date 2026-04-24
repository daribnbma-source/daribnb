import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import { api } from "../lib/api";
import { FileText, Mail, TrendingUp, PlusCircle, ArrowRight } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ posts: 0, contacts: 0, recent: [] });

  useEffect(() => {
    Promise.all([
      api.get("/admin/blog"),
      api.get("/admin/contacts"),
    ])
      .then(([posts, contacts]) => {
        setStats({
          posts: posts.data.length,
          contacts: contacts.data.length,
          recent: contacts.data.slice(0, 5),
        });
      })
      .catch(() => {});
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
        Bienvenue 👋
      </h1>
      <p className="text-[#4B5563] mb-10">
        Vue d'ensemble de votre activité Daribnb.
      </p>

      <div className="grid md:grid-cols-3 gap-5 mb-10">
        <div data-testid="stat-posts" className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#C1272D]/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#C1272D]" />
            </div>
            <Link to="/admin/blog" className="text-xs text-[#C1272D] font-semibold hover:underline">Voir →</Link>
          </div>
          <div className="text-3xl font-black text-[#1A1A1A]">{stats.posts}</div>
          <div className="text-sm text-[#4B5563]">Articles publiés</div>
        </div>

        <div data-testid="stat-contacts" className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#006233]/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#006233]" />
            </div>
            <Link to="/admin/contacts" className="text-xs text-[#006233] font-semibold hover:underline">Voir →</Link>
          </div>
          <div className="text-3xl font-black text-[#1A1A1A]">{stats.contacts}</div>
          <div className="text-sm text-[#4B5563]">Demandes reçues</div>
        </div>

        <Link
          to="/admin/blog/new"
          className="bg-gradient-to-br from-[#C1272D] to-[#A01D22] text-white rounded-2xl p-6 hover:shadow-xl transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <PlusCircle className="w-5 h-5" />
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-lg font-bold">Publier un article</div>
          <div className="text-sm text-white/80">Boostez votre SEO</div>
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6">
        <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">Dernières demandes</h2>
        {stats.recent.length === 0 ? (
          <p className="text-sm text-[#4B5563]">Aucune demande pour le moment.</p>
        ) : (
          <div className="divide-y divide-[#E5E5E5]">
            {stats.recent.map((c) => (
              <div key={c.id} className="py-3 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-semibold text-[#1A1A1A]">{c.name}</div>
                  <div className="text-xs text-[#4B5563] truncate">
                    {c.city || "—"} · {c.service || "—"} · {c.phone}
                  </div>
                </div>
                <a
                  href={`mailto:${c.email}`}
                  className="text-xs text-[#C1272D] font-semibold whitespace-nowrap hover:underline"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
