"use client";

import { useState } from "react";
import { PASSWORD } from "../constants";

export default function LoginForm({ onSuccess }) {
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("megica-admin-auth", "1");
      }
      onSuccess();
    } else {
      setAuthError("Invalid password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-brand-deep text-inverse flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-brand-primary border border-brand-accent shadow-card p-8 space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-brand-soft">
            Internal Access
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-inverse">
            Megica Admin Panel
          </h1>
          <p className="mt-2 text-sm text-muted">
            This area is restricted. Enter admin password to continue.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
              Password
            </label>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full rounded-lg bg-brand-secondary border border-brand-accent px-4 py-3 text-sm text-inverse placeholder:text-muted/60 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
              placeholder="Enter admin password"
            />
          </div>

          {authError && (
            <p className="text-xs text-red-400">{authError}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-brand-accent text-brand-deep text-sm font-semibold uppercase tracking-wide py-3 shadow-soft hover:brightness-110 active:scale-[0.99] transition"
          >
            Enter Dashboard
          </button>
        </form>

        <p className="text-[11px] text-muted/80">
          For Megica internal use only. Activity may be monitored.
        </p>
      </div>
    </div>
  );
}
