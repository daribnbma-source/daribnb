// Suivi des conversions GA4 (clics WhatsApp / téléphone) et mémoire « a déjà converti »,
// qui empêche le popup de sortie de réapparaître chez quelqu'un qui a déjà pris contact.

export const CONVERTED_KEY = "daribnb_converted";

export function markConverted() {
  try {
    localStorage.setItem(CONVERTED_KEY, String(Date.now()));
  } catch {}
}

export function hasConverted() {
  try {
    return Boolean(localStorage.getItem(CONVERTED_KEY));
  } catch {
    return false;
  }
}

export function track(event, params = {}) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", event, params);
}

let installed = false;
export function installClickTracking() {
  if (installed || typeof document === "undefined") return;
  installed = true;
  document.addEventListener(
    "click",
    (e) => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.includes("wa.me/")) {
        track("click_whatsapp", { page: window.location.pathname });
        markConverted();
      } else if (href.startsWith("tel:")) {
        track("click_call", { page: window.location.pathname });
        markConverted();
      }
    },
    { capture: true }
  );
}
