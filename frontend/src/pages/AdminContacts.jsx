import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { api } from "../lib/api";
import { Mail, Phone, Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function AdminContacts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () =>
    api.get("/admin/contacts").then(({ data }) => {
      setItems(data);
      setLoading(false);
    }).catch(() => setLoading(false));

  useEffect(() => { load(); }, []);

  const del = async (id) => {
    if (!window.confirm("Supprimer cette demande ?")) return;
    try {
      await api.delete(`/admin/contacts/${id}`);
      toast.success("Demande supprimée");
      load();
    } catch {
      toast.error("Erreur de suppression");
    }
  };

  const fmt = (iso) =>
    new Date(iso).toLocaleString("fr-FR", {
      day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
    });

  const label = (s) => ({
    conciergerie: "Conciergerie", super_daribnb: "Super Daribnb", loyer_fixe: "Loyer fixe", les_deux: "À conseiller",
  }[s] || s || "—");

  return (
    <AdminLayout>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
        Demandes reçues
      </h1>
      <p className="text-[#4B5563] mb-10">
        {items.length} demande{items.length !== 1 && "s"} au total.
      </p>

      {loading ? (
        <p className="text-[#4B5563]">Chargement…</p>
      ) : items.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center border border-[#E5E5E5]">
          <Mail className="w-10 h-10 text-[#4B5563] mx-auto mb-3" />
          <p className="text-[#4B5563]">Pas encore de demande reçue.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((c) => (
            <div
              key={c.id}
              data-testid={`contact-${c.id}`}
              className="bg-white rounded-2xl p-5 border border-[#E5E5E5] hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="font-bold text-[#1A1A1A] text-lg">{c.name}</h3>
                    <span className="text-xs bg-[#C1272D]/10 text-[#C1272D] rounded-full px-2.5 py-0.5 font-semibold">
                      {label(c.service)}
                    </span>
                    <span className="text-xs text-[#4B5563]">{fmt(c.created_at)}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#4B5563] flex-wrap mb-2">
                    <a href={`mailto:${c.email}`} className="inline-flex items-center gap-1 hover:text-[#C1272D]">
                      <Mail size={12} /> {c.email}
                    </a>
                    <a href={`tel:${c.phone}`} className="inline-flex items-center gap-1 hover:text-[#C1272D]">
                      <Phone size={12} /> {c.phone}
                    </a>
                    {c.city && <span>📍 {c.city}</span>}
                  </div>
                  {c.message && (
                    <p className="text-sm text-[#1A1A1A] bg-[#FAF9F6] rounded-lg p-3 mt-2">
                      {c.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${c.phone.replace(/[^\d]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold px-3 py-2 rounded-lg"
                  >
                    WhatsApp <ExternalLink size={10} />
                  </a>
                  <button
                    onClick={() => del(c.id)}
                    className="p-2 text-[#4B5563] hover:text-[#C1272D] hover:bg-[#C1272D]/10 rounded-lg transition-colors"
                    aria-label="Supprimer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
