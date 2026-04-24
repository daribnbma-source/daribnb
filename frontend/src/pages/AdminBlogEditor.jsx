import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { api } from "../lib/api";
import { Save, Loader2, Eye, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

function slugify(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export default function AdminBlogEditor() {
  const { slug: paramSlug } = useParams();
  const isEdit = !!paramSlug;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(false);
  const [form, setForm] = useState({
    slug: "",
    title: "",
    excerpt: "",
    meta_description: "",
    keywords: "",
    city: "",
    cover: "",
    read_time: 5,
    content: "",
  });

  useEffect(() => {
    if (!isEdit) return;
    api.get(`/blog/${paramSlug}`).then(({ data }) => {
      setForm({
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        meta_description: data.meta_description,
        keywords: data.keywords,
        city: data.city,
        cover: data.cover,
        read_time: data.read_time,
        content: data.content,
      });
      setLoading(false);
    }).catch(() => {
      toast.error("Article introuvable");
      navigate("/admin/blog", { replace: true });
    });
  }, [isEdit, paramSlug, navigate]);

  const update = (k) => (e) =>
    setForm((p) => ({ ...p, [k]: e.target ? e.target.value : e }));

  const onTitleBlur = () => {
    if (!isEdit && form.title && !form.slug) {
      setForm((p) => ({ ...p, slug: slugify(p.title) }));
    }
  };

  const save = async (e) => {
    e.preventDefault();
    if (!form.title || !form.slug || !form.content) {
      toast.error("Titre, slug et contenu sont requis.");
      return;
    }
    setSaving(true);
    try {
      const payload = { ...form, read_time: Number(form.read_time) || 5 };
      if (isEdit) {
        await api.put(`/admin/blog/${paramSlug}`, payload);
        toast.success("Article mis à jour");
      } else {
        await api.post(`/admin/blog`, payload);
        toast.success("Article publié");
      }
      navigate("/admin/blog");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Erreur de sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-[#C1272D]" /></div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <button onClick={() => navigate("/admin/blog")} className="inline-flex items-center gap-2 text-sm font-semibold text-[#4B5563] hover:text-[#C1272D] mb-4">
        <ArrowLeft size={14} /> Tous les articles
      </button>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
          {isEdit ? "Modifier l'article" : "Nouvel article"}
        </h1>
        <button
          onClick={() => setPreview(!preview)}
          className="inline-flex items-center gap-2 bg-white border border-[#E5E5E5] text-[#1A1A1A] rounded-full px-4 py-2 font-semibold text-sm hover:border-[#C1272D]"
        >
          <Eye size={14} /> {preview ? "Éditer" : "Aperçu"}
        </button>
      </div>

      {preview ? (
        <div className="bg-white rounded-2xl p-8 border border-[#E5E5E5] prose prose-lg max-w-none">
          {form.cover && (
            <img src={form.cover} alt="" className="rounded-2xl mb-6 w-full h-64 object-cover" />
          )}
          <h1 className="!mb-2">{form.title || "(Titre)"}</h1>
          <p className="text-[#4B5563] italic !mt-0">{form.excerpt}</p>
          <ReactMarkdown>{form.content}</ReactMarkdown>
        </div>
      ) : (
      <form onSubmit={save} className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5E5] space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">Titre *</label>
            <Input data-testid="editor-title" value={form.title} onChange={update("title")} onBlur={onTitleBlur} className="h-11 rounded-xl border-[#E5E5E5]" required />
          </div>
          <div>
            <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">Slug (URL) *</label>
            <Input data-testid="editor-slug" value={form.slug} onChange={update("slug")} disabled={isEdit} placeholder="mon-article" className="h-11 rounded-xl border-[#E5E5E5] font-mono text-sm" required />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">Résumé (excerpt) *</label>
          <Textarea data-testid="editor-excerpt" value={form.excerpt} onChange={update("excerpt")} rows={2} className="rounded-xl border-[#E5E5E5] resize-none" required />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">Ville</label>
            <Input data-testid="editor-city" value={form.city} onChange={update("city")} placeholder="Casablanca" className="h-11 rounded-xl border-[#E5E5E5]" />
          </div>
          <div>
            <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">Temps de lecture (min)</label>
            <Input type="number" min={1} max={60} value={form.read_time} onChange={update("read_time")} className="h-11 rounded-xl border-[#E5E5E5]" />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">Image de couverture (URL)</label>
          <Input data-testid="editor-cover" value={form.cover} onChange={update("cover")} placeholder="https://..." className="h-11 rounded-xl border-[#E5E5E5]" />
          {form.cover && <img src={form.cover} alt="" className="mt-2 w-48 h-28 object-cover rounded-lg border border-[#E5E5E5]" />}
        </div>

        <div className="border-t border-[#E5E5E5] pt-5">
          <div className="text-sm font-bold text-[#006233] uppercase tracking-wider mb-4">SEO</div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">Meta description</label>
              <Textarea data-testid="editor-meta" value={form.meta_description} onChange={update("meta_description")} rows={2} className="rounded-xl border-[#E5E5E5] resize-none" maxLength={170} />
              <div className="text-xs text-[#4B5563] mt-1">{form.meta_description.length}/170 caractères</div>
            </div>
            <div>
              <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">Mots-clés (séparés par virgule)</label>
              <Input data-testid="editor-keywords" value={form.keywords} onChange={update("keywords")} placeholder="conciergerie airbnb casablanca, ..." className="h-11 rounded-xl border-[#E5E5E5]" />
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
            Contenu de l'article (Markdown) *
          </label>
          <Textarea
            data-testid="editor-content"
            value={form.content}
            onChange={update("content")}
            rows={24}
            className="rounded-xl border-[#E5E5E5] font-mono text-sm"
            placeholder="## Titre&#10;&#10;Votre contenu ici. **Gras**, *italique*, [liens](url), listes, etc."
            required
          />
          <div className="text-xs text-[#4B5563] mt-2">
            Markdown supporté : ## titre, **gras**, *italique*, - listes, [liens](url), | tableaux |
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E5E5E5]">
          <button
            type="button"
            onClick={() => navigate("/admin/blog")}
            className="px-5 py-3 rounded-full border border-[#E5E5E5] text-[#1A1A1A] font-semibold text-sm"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={saving}
            data-testid="editor-save-btn"
            className="inline-flex items-center gap-2 bg-[#C1272D] hover:bg-[#A01D22] disabled:opacity-60 text-white rounded-full px-6 py-3 font-semibold text-sm"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save size={14} />}
            {isEdit ? "Enregistrer" : "Publier"}
          </button>
        </div>
      </form>
      )}
    </AdminLayout>
  );
}
