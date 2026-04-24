import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../lib/auth";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <Loader2 className="w-8 h-8 animate-spin text-[#C1272D]" />
      </div>
    );
  }

  if (!user || !user.is_admin) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return children;
}
