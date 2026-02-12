"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/data/firebase";
import { ENQUIRY_TABS, SUB_TABS } from "../../constants";

const VALID_TABS = ENQUIRY_TABS.map((t) => t.id);

export default function EnquiriesTabPage() {
  const params = useParams();
  const tab = typeof params?.tab === "string" ? params.tab : "";
  const config = useMemo(
    () => ENQUIRY_TABS.find((t) => t.id === tab),
    [tab],
  );

  const [activeSubTab, setActiveSubTab] = useState("all");
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");

  const fetchRows = useCallback(async () => {
    if (!config?.collection) return;
    try {
      setLoading(true);
      setError("");
      const colRef = collection(db, config.collection);
      const q = query(colRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setRows(items);
    } catch (err) {
      console.error("Admin fetch error", err);
      setError("Failed to load enquiries. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  }, [config?.collection]);

  useEffect(() => {
    if (config?.collection) void fetchRows();
  }, [config?.collection, fetchRows]);

  const handleToggleChecked = async (row) => {
    try {
      const newChecked = !row.checked;
      await updateDoc(doc(db, config.collection, row.id), {
        checked: newChecked,
      });
      setRows((prev) =>
        prev.map((r) =>
          r.id === row.id ? { ...r, checked: newChecked } : r,
        ),
      );
    } catch (err) {
      console.error("Toggle checked error", err);
      setError("Unable to update status. Please try again.");
    }
  };

  const handleDelete = async (row) => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this enquiry?",
    );
    if (!confirmed) return;
    try {
      await deleteDoc(doc(db, config.collection, row.id));
      setRows((prev) => prev.filter((r) => r.id !== row.id));
    } catch (err) {
      console.error("Delete enquiry error", err);
      setError("Unable to delete enquiry. Please try again.");
    }
  };

  const filteredRows = useMemo(() => {
    if (activeSubTab === "checked") return rows.filter((r) => r.checked);
    if (activeSubTab === "unchecked")
      return rows.filter((r) => !r.checked || r.checked === false);
    return rows;
  }, [rows, activeSubTab]);

  if (!VALID_TABS.includes(tab) || !config) {
    return (
      <div className="p-8 text-center text-muted">
        Invalid section. Use the sidebar to navigate.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 space-y-6">
      <section className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-lg font-semibold text-inverse">
          {config.label} Enquiries
        </h1>
        <button
          type="button"
          onClick={fetchRows}
          className="inline-flex items-center gap-1 rounded-lg border border-brand-accent px-3 py-1.5 text-[11px] uppercase tracking-wide text-brand-accent hover:bg-brand-accent/10 transition"
        >
          Refresh
        </button>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full bg-brand-primary border border-light p-1">
          {SUB_TABS.map((sub) => {
            const active = sub.id === activeSubTab;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => setActiveSubTab(sub.id)}
                className={`px-4 py-1.5 text-xs rounded-full transition ${
                  active
                    ? "bg-brand-accent text-brand-deep"
                    : "text-inverse hover:opacity-80"
                }`}
              >
                {sub.label}
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-muted">
          Showing{" "}
          <span className="text-brand-soft">
            {filteredRows.length.toString().padStart(2, "0")}
          </span>{" "}
          records
        </p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-500/60 bg-red-500/10 px-4 py-2 text-xs text-red-200">
          {error}
        </div>
      )}

      <section className="space-y-3">
        {loading ? (
          <div className="flex items-center justify-center py-12 text-sm text-muted rounded-2xl bg-brand-primary border border-light shadow-card">
            Loading enquiries…
          </div>
        ) : filteredRows.length === 0 ? (
          <div className="flex items-center justify-center py-12 text-sm text-muted rounded-2xl bg-brand-primary border border-light shadow-card">
            No enquiries found for this filter.
          </div>
        ) : (
          filteredRows.map((row) => {
            const createdAtDate =
              row.createdAt?.toDate?.() ?? null;
            const createdAtLabel = createdAtDate
              ? createdAtDate.toLocaleString()
              : "—";
            const email = row.email || row.mail || "";
            const phone = row.phone || row.contact || "";

            return (
              <article
                key={row.id}
                className={`rounded-2xl border shadow-card px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-4 transition-colors ${
                  row.checked
                    ? "bg-emerald-900/80 border-emerald-400"
                    : "bg-brand-primary border-light"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div className="space-y-1 text-xs">
                    <p className="flex flex-wrap items-center gap-2 text-base font-semibold text-inverse">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-brand-accent text-xs">
                        ☺
                      </span>
                      <span>{row.fullName || row.name || "—"}</span>
                      <span
                        className={`ml-auto inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium ${
                          row.checked
                            ? "bg-emerald-400 text-brand-deep"
                            : "bg-transparent text-brand-accent border border-brand-accent"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            row.checked ? "bg-emerald-700" : "bg-brand-accent"
                          }`}
                        />
                        {row.checked ? "Checked" : "Not checked"}
                      </span>
                    </p>
                    {row.companyName && (
                      <p className="text-[12px] text-white italic">
                        {row.companyName}
                      </p>
                    )}
                    {row.location && (
                      <p className="text-[12px] text-muted">{row.location}</p>
                    )}
                    {email && (
                      <p className="flex items-center gap-2 mt-2 text-xs">
                        <span className="text-brand-accent text-sm">✉</span>
                        <a
                          href={`mailto:${email}`}
                          className="text-brand-accent hover:underline break-all"
                        >
                          {email}
                        </a>
                      </p>
                    )}
                    {phone && (
                      <p className="flex items-center gap-2 text-xs">
                        <span className="text-brand-accent text-sm">☎</span>
                        <a
                          href={`tel:${phone}`}
                          className="text-inverse hover:text-brand-accent"
                        >
                          {row.countryCode ? `${row.countryCode} ` : ""}
                          {phone}
                        </a>
                      </p>
                    )}
                    {row.interest && (
                      <p className="mt-1 text-[11px] text-white/75">
                        Interest: {row.interest}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 self-end md:self-start">
                    <button
                      type="button"
                      onClick={() => handleToggleChecked(row)}
                      className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-[11px] font-semibold shadow-soft transition ${
                        row.checked
                          ? "bg-emerald-100 text-emerald-900 hover:bg-emerald-200"
                          : "bg-emerald-500 text-brand-deep hover:bg-emerald-400"
                      }`}
                    >
                      {row.checked ? "Uncheck" : "Mark checked"}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(row)}
                      className="inline-flex items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold border border-red-500/80 bg-red-500/10 text-red-100 hover:bg-red-500/25 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="border-t border-light text-xs flex flex-col gap-2">
                  <p className="flex items-start gap-2 mt-3 text-inverse/80">
                    <span className="mt-0.5 text-brand-soft text-sm">💬</span>
                    <span className="leading-relaxed whitespace-pre-line">
                      {row.message || row.notes || "—"}
                    </span>
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-inverse/60">
                    <span className="flex items-center gap-1">
                      <span className="text-brand-accent text-sm">⏱</span>
                      {createdAtLabel}
                    </span>
                    <span className="ml-auto" />
                  </div>
                </div>
              </article>
            );
          })
        )}
      </section>
    </div>
  );
}
