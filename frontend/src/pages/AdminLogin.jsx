import React from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../components/site/Logo";
import { LogIn, ArrowLeft, ShieldCheck } from "lucide-react";

// REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
export default function AdminLogin() {
  const location = useLocation();
  const error = location.state?.error;

  const handleLogin = () => {
    // REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
    const redirectUrl = window.location.origin + "/admin";
    window.location.href = `https://auth.emergentagent.com/?redirect=${encodeURIComponent(redirectUrl)}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center px-6">
      <Link
        to="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4B5563] hover:text-[#C1272D]"
      >
        <ArrowLeft size={16} /> Retour au site
      </Link>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-[#E5E5E5] p-10">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#006233]/10 text-[#006233] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={13} />
            Espace administrateur
          </div>
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">
            Connexion réservée
          </h1>
          <p className="text-sm text-[#4B5563]">
            Accès restreint à l'administrateur Daribnb.
          </p>
        </div>

        {error && (
          <div data-testid="login-error" className="mb-5 p-3 bg-[#C1272D]/10 text-[#C1272D] text-sm rounded-xl border border-[#C1272D]/20">
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          data-testid="google-login-btn"
          className="w-full h-12 bg-white border-2 border-[#E5E5E5] hover:border-[#C1272D] hover:shadow-md text-[#1A1A1A] rounded-xl font-semibold transition-all flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Se connecter avec Google
        </button>

        <p className="text-xs text-[#4B5563] text-center mt-6">
          🔒 Connexion sécurisée via Google OAuth.
        </p>
      </div>
    </div>
  );
}
