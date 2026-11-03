// Envoi des formulaires vers la Pages Function /api/lead (functions/api/lead.js).
// Nom conservé pour ne pas toucher aux appels existants.
import { markConverted, track } from "./tracking";

export async function submitNetlifyForm(formName, fields) {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "form-name": formName, page: window.location.pathname, ...fields }),
  });
  if (!res.ok) {
    throw new Error(`Lead submit failed (${res.status})`);
  }
  markConverted();
  track("generate_lead", { form_name: formName });
  return true;
}
