// Toasts chargés à la demande : sonner (~33 Ko) n'est téléchargé qu'au premier toast affiché
// (envoi ou erreur de formulaire), et plus au démarrage de chaque page.
let sonner;
let markReady;
const ready = new Promise((r) => {
  markReady = r;
});

// Appelé par <LazyToaster> une fois le Toaster monté (il écoute alors les nouveaux toasts).
export function toasterMounted() {
  markReady();
}

function show(kind, args) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("daribnb:toaster"));
  sonner = sonner || import("sonner");
  Promise.all([sonner, ready]).then(([m]) => m.toast[kind](...args));
}

export const toast = {
  success: (...args) => show("success", args),
  error: (...args) => show("error", args),
  info: (...args) => show("info", args),
  message: (...args) => show("message", args),
};
