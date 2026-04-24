import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./site/Logo";
import { useAuth } from "../lib/auth";
import { LogOut, Home, FileText, Mail, PlusCircle } from "lucide-react";

export default function AdminLayout({ children }) {
  const { user, logout } = useAuth();
  const location = useLocation();

  const NAV = [
    { to: "/admin", icon: Home, label: "Dashboard" },
    { to: "/admin/blog", icon: FileText, label: "Articles" },
    { to: "/admin/contacts", icon: Mail, label: "Demandes" },
  ];

  const isActive = (to) =>
    to === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(to);

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-white border-r border-[#E5E5E5] flex-col">
        <div className="p-6 border-b border-[#E5E5E5]">
          <Link to="/"><Logo /></Link>
          <div className="mt-2 text-[10px] font-bold text-[#006233] uppercase tracking-wider">
            Espace admin
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              data-testid={`admin-nav-${n.label.toLowerCase()}`}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                isActive(n.to)
                  ? "bg-[#C1272D] text-white"
                  : "text-[#1A1A1A] hover:bg-[#FAF9F6]"
              }`}
            >
              <n.icon size={16} />
              {n.label}
            </Link>
          ))}
          <Link
            to="/admin/blog/new"
            data-testid="admin-nav-new-post"
            className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold bg-[#006233] text-white hover:bg-[#004B27] transition-colors"
          >
            <PlusCircle size={16} />
            Nouvel article
          </Link>
        </nav>

        <div className="p-4 border-t border-[#E5E5E5]">
          <div className="flex items-center gap-3 mb-3">
            {user?.picture ? (
              <img src={user.picture} alt="" className="w-10 h-10 rounded-full" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#C1272D] text-white flex items-center justify-center font-bold">
                {user?.name?.charAt(0) || "A"}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-[#1A1A1A] truncate">{user?.name}</div>
              <div className="text-xs text-[#4B5563] truncate">{user?.email}</div>
            </div>
          </div>
          <button
            onClick={logout}
            data-testid="admin-logout-btn"
            className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-[#4B5563] hover:text-[#C1272D] py-2 rounded-lg border border-[#E5E5E5] hover:border-[#C1272D] transition-colors"
          >
            <LogOut size={14} /> Déconnexion
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden w-full">
        <header className="bg-white border-b border-[#E5E5E5] px-6 py-4 flex items-center justify-between">
          <Logo />
          <button
            onClick={logout}
            className="text-sm font-semibold text-[#C1272D] flex items-center gap-2"
          >
            <LogOut size={14} /> Quitter
          </button>
        </header>
        <nav className="flex bg-white border-b border-[#E5E5E5] overflow-x-auto">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`flex-1 text-center py-3 text-xs font-semibold border-b-2 ${
                isActive(n.to) ? "border-[#C1272D] text-[#C1272D]" : "border-transparent text-[#4B5563]"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main */}
      <main className="flex-1 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
