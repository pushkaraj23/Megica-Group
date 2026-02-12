"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "./components/AdminSidebar";
import LoginForm from "./components/LoginForm";

export default function AdminLayout({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setMounted(true);
    const stored = sessionStorage.getItem("megica-admin-auth");
    if (stored === "1") setAuthorized(true);
  }, []);

  const handleLoginSuccess = () => setAuthorized(true);

  const handleLogout = () => {
    setAuthorized(false);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("megica-admin-auth");
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-brand-deep text-inverse flex items-center justify-center">
        <span className="text-sm text-muted">Loading…</span>
      </div>
    );
  }

  if (!authorized) {
    return <LoginForm onSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-brand-deep text-inverse flex">
      <AdminSidebar onLogout={handleLogout} />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
