import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";
import { Loader2 } from "lucide-react";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const processed = useRef(false);

  useEffect(() => {
    if (processed.current) return;
    processed.current = true;

    const hash = window.location.hash || "";
    const match = hash.match(/session_id=([^&]+)/);
    if (!match) {
      navigate("/admin/login", { replace: true });
      return;
    }
    const sessionId = decodeURIComponent(match[1]);

    (async () => {
      try {
        const { data } = await api.post(
          "/auth/session",
          { session_id: sessionId },
          { withCredentials: true }
        );
        setUser(data);
        // Clean URL
        window.history.replaceState(null, "", "/admin");
        navigate("/admin", { replace: true, state: { user: data } });
      } catch (err) {
        const msg =
          err?.response?.data?.detail || "Authentification échouée.";
        navigate("/admin/login", { replace: true, state: { error: msg } });
      }
    })();
  }, [navigate, setUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
      <div className="text-center">
        <Loader2 className="w-10 h-10 animate-spin text-[#C1272D] mx-auto mb-4" />
        <p className="text-[#4B5563]">Connexion en cours…</p>
      </div>
    </div>
  );
}
