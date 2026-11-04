import React, { Suspense, lazy, useEffect, useState } from "react";
import { toasterMounted } from "../lib/toast";

const Toaster = lazy(() => import("sonner").then((m) => ({ default: m.Toaster })));

function Ready() {
  useEffect(() => {
    toasterMounted();
  }, []);
  return null;
}

// Rien n'est rendu au premier affichage (ni au pré-rendu) : le HTML pré-rendu et l'hydratation
// restent identiques. Le Toaster sonner n'est monté qu'au premier toast demandé.
export default function LazyToaster(props) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const show = () => setOn(true);
    window.addEventListener("daribnb:toaster", show);
    return () => window.removeEventListener("daribnb:toaster", show);
  }, []);
  if (!on) return null;
  return (
    <Suspense fallback={null}>
      <Toaster {...props} />
      <Ready />
    </Suspense>
  );
}
