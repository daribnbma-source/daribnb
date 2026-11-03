// Réception des leads du site (contact, simulateur, popup).
// 1) sauvegarde systématique dans KV (binding LEADS) : aucun lead perdu ;
// 2) transfert vers le Google Sheet de Marwan (Apps Script, variable LEADS_WEBHOOK) qui envoie aussi l'email d'alerte.

const FIELDS = ["name", "phone", "email", "city", "property_type", "surface", "service", "message", "source", "estimate", "page"];
const MAX = 2000;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8" } });

async function readBody(request) {
  const type = request.headers.get("content-type") || "";
  if (type.includes("application/json")) return request.json();
  const form = await request.formData();
  return Object.fromEntries(form.entries());
}

export async function onRequestPost({ request, env, waitUntil }) {
  let data;
  try {
    data = await readBody(request);
  } catch {
    return json({ ok: false, error: "invalid_body" }, 400);
  }
  // Pot de miel anti-robots : champ caché qui doit rester vide.
  if (data["bot-field"]) return json({ ok: true });

  const lead = { form: String(data["form-name"] || data.form || "contact").slice(0, 40) };
  for (const k of FIELDS) {
    if (data[k] !== undefined && data[k] !== null && String(data[k]).trim() !== "") lead[k] = String(data[k]).slice(0, MAX);
  }
  if (!lead.phone && !lead.email) return json({ ok: false, error: "contact_required" }, 422);

  lead.received_at = new Date().toISOString();
  lead.country = request.cf?.country || "";
  lead.referer = (request.headers.get("referer") || "").slice(0, 300);

  const key = `lead:${lead.received_at}:${crypto.randomUUID().slice(0, 8)}`;
  if (env.LEADS) await env.LEADS.put(key, JSON.stringify(lead));

  if (env.LEADS_WEBHOOK) {
    waitUntil(
      fetch(env.LEADS_WEBHOOK, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
        redirect: "follow",
      }).catch(() => {})
    );
  }
  return json({ ok: true });
}

export const onRequest = () => json({ ok: false, error: "method_not_allowed" }, 405);
