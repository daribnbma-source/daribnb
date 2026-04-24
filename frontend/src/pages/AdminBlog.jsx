import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import { api } from "../lib/api";
import { FileText, PlusCircle, Edit3, Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () =>
    api.get("/admin/blog").then(({ data }) => {
      setPosts(data);
      setLoading(false);
    }).catch(() => setLoading(false));

  useEffect(() => { load(); }, []);

  const del = async (slug) => {
    if (!window.confirm("Supprimer cet article ?")) return;
    try {
      await api.delete(`/admin/blog/${slug}`);
      toast.success("Article supprimé");
      load();
    } catch {
      toast.error("Erreur de suppression");
    }
  };

  const fmt = (iso) => new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-1">Articles</h1>
          <p className="text-[#4B5563]">{posts.length} article{posts.length !== 1 && "s"} publié{posts.length !== 1 && "s"}.</p>
        </div>
        <Link
          to="/admin/blog/new"
          data-testid="new-article-btn"
          className="inline-flex items-center gap-2 bg-[#C1272D] hover:bg-[#A01D22] text-white rounded-full px-5 py-3 font-semibold text-sm"
        >
          <PlusCircle size={16} /> Nouvel article
        </Link>
      </div>

      {loading ? (
        <p className="text-[#4B5563]">Chargement…</p>
      ) : posts.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center border border-[#E5E5E5]">
          <FileText className="w-10 h-10 text-[#4B5563] mx-auto mb-3" />
          <p className="text-[#4B5563]">Aucun article pour le moment.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {posts.map((p) => (
            <div
              key={p.slug}
              data-testid={`admin-post-${p.slug}`}
              className="bg-white rounded-2xl p-5 border border-[#E5E5E5] hover:shadow-sm transition-all flex items-center gap-4"
            >
              <img src={p.cover} alt="" className="w-20 h-20 rounded-xl object-cover flex-shrink-0 hidden sm:block" />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#1A1A1A] truncate">{p.title}</h3>
                <div className="text-xs text-[#4B5563] mt-1">
                  {p.city} · {fmt(p.published_at)} · {p.read_time} min · <span className="font-mono">{p.slug}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <Link
                  to={`/blog/${p.slug}`}
                  target="_blank"
                  className="p-2 text-[#4B5563] hover:text-[#C1272D] rounded-lg"
                  aria-label="Voir"
                >
                  <ExternalLink size={16} />
                </Link>
                <Link
                  to={`/admin/blog/${p.slug}/edit`}
                  className="p-2 text-[#4B5563] hover:text-[#006233] rounded-lg"
                  aria-label="Modifier"
                >
                  <Edit3 size={16} />
                </Link>
                <button
                  onClick={() => del(p.slug)}
                  className="p-2 text-[#4B5563] hover:text-[#C1272D] rounded-lg"
                  aria-label="Supprimer"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
