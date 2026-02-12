"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_LINKS } from "../constants";

export default function AdminSidebar({ onLogout }) {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r border-light bg-brand-primary flex flex-col">
      <div className="p-4 border-b border-light">
        <p className="text-[11px] uppercase tracking-[0.35em] text-brand-soft">
          Megica Group
        </p>
        <h2 className="mt-1 text-lg font-semibold text-inverse">
          Admin
        </h2>
      </div>
      <nav className="flex-1 p-3 space-y-0.5">
        {SIDEBAR_LINKS.map((item) => {
          const active =
            item.href === pathname ||
            (item.href !== "/admin/blogs" && item.href !== "/admin/galleries" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-brand-accent text-brand-deep shadow-soft"
                  : "text-inverse hover:bg-brand-secondary"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t border-light">
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-2 rounded-lg border border-brand-accent px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-brand-accent hover:bg-brand-accent/10 transition"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Log out
        </button>
      </div>
    </aside>
  );
}
