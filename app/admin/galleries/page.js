"use client";

import { useCallback, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from "@/data/firebase";
import { GALLERY_WEBSITES } from "../constants";

const SUBTABS = [
  { id: "main", label: "Megica Group (Main)" },
  { id: "sanitaryware", label: "Sanitaryware" },
  { id: "bathroom-fittings", label: "Bathroom Fittings" },
];

const COLLECTION = "galleryAlbums";
const STORAGE_PREFIX = "galleries";

function isImage(file) {
  return file.type.startsWith("image/");
}

function isVideo(file) {
  return file.type.startsWith("video/");
}

export default function AdminGalleriesPage() {
  const [activeSubTab, setActiveSubTab] = useState("main");
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Add-media form
  const [selectedWebsites, setSelectedWebsites] = useState([]);
  const [mode, setMode] = useState("new"); // "new" | "existing"
  const [newAlbumLabel, setNewAlbumLabel] = useState("");
  const [newAlbumSubtitle, setNewAlbumSubtitle] = useState("");
  const [existingAlbumId, setExistingAlbumId] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // Delete media
  const [deletingId, setDeletingId] = useState(null); // "albumId-itemIndex"
  // Delete entire album
  const [deletingAlbumId, setDeletingAlbumId] = useState(null);

  const fetchAlbums = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const colRef = collection(db, COLLECTION);
      const q = query(colRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
        items: Array.isArray(d.data().items) ? d.data().items : [],
      }));
      setAlbums(items);
    } catch (err) {
      console.error("Fetch gallery albums error", err);
      setError("Failed to load albums. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchAlbums();
  }, [fetchAlbums]);

  const albumsForCurrentTab = albums.filter((a) =>
    Array.isArray(a.websites) ? a.websites.includes(activeSubTab) : false
  );

  const albumsForSelectedWebsites = albums.filter((a) =>
    selectedWebsites.some((w) => (a.websites || []).includes(w))
  );

  const toggleWebsite = (id) => {
    setSelectedWebsites((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const handleMediaFilesChange = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const valid = files.filter(
      (f) => isImage(f) || isVideo(f)
    );
    setMediaFiles(valid);
  };

  const resetAddForm = () => {
    setSelectedWebsites([]);
    setMode("new");
    setNewAlbumLabel("");
    setNewAlbumSubtitle("");
    setExistingAlbumId("");
    setMediaFiles([]);
    setFormError("");
    setShowAddForm(false);
  };

  const handleAddMediaSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSuccessMessage("");

    if (selectedWebsites.length === 0) {
      setFormError("Please select at least one website.");
      return;
    }
    if (mode === "new") {
      if (!newAlbumLabel.trim()) {
        setFormError("Please enter an album name.");
        return;
      }
    } else {
      if (!existingAlbumId) {
        setFormError("Please select an existing album.");
        return;
      }
    }
    if (mediaFiles.length === 0) {
      setFormError("Please select at least one image or video.");
      return;
    }

    try {
      setSubmitting(true);
      let albumId = existingAlbumId;
      let albumRef = null;

      if (mode === "new") {
        const docRef = await addDoc(collection(db, COLLECTION), {
          label: newAlbumLabel.trim(),
          subtitle: newAlbumSubtitle.trim() || null,
          websites: selectedWebsites,
          items: [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
        albumId = docRef.id;
        albumRef = doc(db, COLLECTION, albumId);
      } else {
        albumRef = doc(db, COLLECTION, existingAlbumId);
      }

      const album = albums.find((a) => a.id === albumId);
      const existingItems = album?.items ?? [];

      const newItems = [];
      for (let i = 0; i < mediaFiles.length; i++) {
        const file = mediaFiles[i];
        const type = isImage(file) ? "image" : "video";
        const ext = file.name.split(".").pop() || (type === "image" ? "jpg" : "mp4");
        const storagePath = `${STORAGE_PREFIX}/${albumId}/${Date.now()}-${i}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
        const storageRef = ref(storage, storagePath);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        newItems.push({ type, url, storagePath, title: null });
      }

      const updatedItems = [...existingItems, ...newItems];
      await updateDoc(albumRef, {
        items: updatedItems,
        updatedAt: serverTimestamp(),
      });

      if (mode === "new") {
        setAlbums((prev) => [
          {
            id: albumId,
            label: newAlbumLabel.trim(),
            subtitle: newAlbumSubtitle.trim() || null,
            websites: selectedWebsites,
            items: updatedItems,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          ...prev,
        ]);
      } else {
        setAlbums((prev) =>
          prev.map((a) =>
            a.id === albumId
              ? { ...a, items: updatedItems, updatedAt: new Date() }
              : a
          )
        );
      }

      setSuccessMessage(
        mode === "new"
          ? `Album "${newAlbumLabel.trim()}" created with ${newItems.length} item(s).`
          : `${newItems.length} item(s) added to album.`
      );
      resetAddForm();
      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (err) {
      console.error("Add gallery media error", err);
      setFormError("Unable to upload. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteMedia = async (albumId, itemIndex) => {
    const key = `${albumId}-${itemIndex}`;
    const album = albums.find((a) => a.id === albumId);
    if (!album || !album.items?.[itemIndex]) return;
    const item = album.items[itemIndex];
    const confirmed = window.confirm(
      "Remove this item from the gallery? It will be deleted from storage and cannot be undone."
    );
    if (!confirmed) return;

    setDeletingId(key);
    try {
      if (item.storagePath) {
        const storageRef = ref(storage, item.storagePath);
        await deleteObject(storageRef);
      }
      const newItems = album.items.filter((_, i) => i !== itemIndex);
      const albumRef = doc(db, COLLECTION, albumId);
      await updateDoc(albumRef, {
        items: newItems,
        updatedAt: serverTimestamp(),
      });
      setAlbums((prev) =>
        prev.map((a) =>
          a.id === albumId ? { ...a, items: newItems } : a
        )
      );
      setSuccessMessage("Media removed and deleted from storage.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Delete gallery media error", err);
      setError("Failed to delete. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleDeleteAlbum = async (album) => {
    const confirmed = window.confirm(
      `Delete the entire album "${album.label || "Untitled"}"? All ${album.items?.length ?? 0} item(s) will be removed from storage and the album will be deleted. This cannot be undone.`
    );
    if (!confirmed) return;
    setDeletingAlbumId(album.id);
    setError("");
    try {
      const items = album.items || [];
      for (const item of items) {
        if (item.storagePath) {
          const storageRef = ref(storage, item.storagePath);
          await deleteObject(storageRef);
        }
      }
      await deleteDoc(doc(db, COLLECTION, album.id));
      setAlbums((prev) => prev.filter((a) => a.id !== album.id));
      setSuccessMessage("Album and all its media have been deleted.");
      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (err) {
      console.error("Delete album error", err);
      setError("Failed to delete album. Please try again.");
    } finally {
      setDeletingAlbumId(null);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold text-inverse">
            Gallery Management
          </h1>
          <p className="mt-1 text-xs text-muted">
            Add images and videos to galleries for Main, Sanitaryware, and
            Bathroom Fittings. Create albums or add to existing ones.
          </p>
        </div>
        <button
          type="button"
          onClick={() => void fetchAlbums()}
          className="inline-flex items-center gap-1 rounded-full border border-brand-accent px-3 py-1.5 text-[11px] uppercase tracking-wide text-brand-accent hover:bg-brand-accent/10 transition"
        >
          Refresh
        </button>
      </header>

      {error && (
        <div className="rounded-lg border border-red-500/60 bg-red-500/10 px-4 py-2 text-xs text-red-200">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="rounded-lg border border-emerald-400/70 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-200">
          {successMessage}
        </div>
      )}

      {/* Subtabs */}
      <div className="flex gap-1 p-1 rounded-xl bg-brand-primary border border-light shadow-card">
        {SUBTABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveSubTab(tab.id)}
            className={`flex-1 min-w-0 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              activeSubTab === tab.id
                ? "bg-brand-accent text-brand-deep shadow-soft"
                : "text-inverse hover:bg-brand-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Add media section */}
      <section className="rounded-2xl bg-brand-primary border border-light shadow-card p-4 sm:p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-sm font-semibold text-inverse">
            Add images & videos
          </h2>
          <button
            type="button"
            onClick={() => setShowAddForm((v) => !v)}
            className="inline-flex items-center gap-1 rounded-full bg-brand-accent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-deep shadow-soft hover:brightness-110"
          >
            {showAddForm ? "Cancel" : "Add media"}
          </button>
        </div>

        {showAddForm && (
          <form
            onSubmit={handleAddMediaSubmit}
            className="space-y-5 border-t border-light pt-5"
          >
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                Websites (select one or more)
              </label>
              <div className="flex flex-wrap gap-3">
                {GALLERY_WEBSITES.map((w) => (
                  <label
                    key={w.id}
                    className="inline-flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedWebsites.includes(w.id)}
                      onChange={() => toggleWebsite(w.id)}
                      className="rounded border-brand-accent bg-brand-secondary text-brand-accent focus:ring-brand-accent"
                    />
                    <span className="text-sm text-inverse">{w.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  checked={mode === "new"}
                  onChange={() => setMode("new")}
                  className="text-brand-accent focus:ring-brand-accent"
                />
                <span className="text-sm text-inverse">Create new album</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  checked={mode === "existing"}
                  onChange={() => setMode("existing")}
                  className="text-brand-accent focus:ring-brand-accent"
                />
                <span className="text-sm text-inverse">Add to existing album</span>
              </label>
            </div>

            {mode === "new" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
                    Album name *
                  </label>
                  <input
                    type="text"
                    value={newAlbumLabel}
                    onChange={(e) => setNewAlbumLabel(e.target.value)}
                    placeholder="e.g. Factory & Production"
                    className="w-full rounded-lg bg-brand-secondary border border-brand-accent/60 px-4 py-2.5 text-sm text-inverse placeholder:text-muted/60 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
                    Subtitle (optional)
                  </label>
                  <input
                    type="text"
                    value={newAlbumSubtitle}
                    onChange={(e) => setNewAlbumSubtitle(e.target.value)}
                    placeholder="Short description"
                    className="w-full rounded-lg bg-brand-secondary border border-brand-accent/40 px-4 py-2.5 text-sm text-inverse placeholder:text-muted/60 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                  />
                </div>
              </div>
            )}

            {mode === "existing" && albumsForSelectedWebsites.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
                  Existing album *
                </label>
                <select
                  value={existingAlbumId}
                  onChange={(e) => setExistingAlbumId(e.target.value)}
                  className="w-full max-w-md rounded-lg bg-brand-secondary border border-brand-accent/60 px-4 py-2.5 text-sm text-inverse outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                >
                  <option value="">Select album</option>
                  {albumsForSelectedWebsites.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.label || "Untitled"} ({a.items?.length ?? 0} items)
                    </option>
                  ))}
                </select>
              </div>
            )}

            {mode === "existing" &&
              selectedWebsites.length > 0 &&
              albumsForSelectedWebsites.length === 0 && (
                <p className="text-xs text-amber-200">
                  No albums exist for the selected website(s) yet. Create a new
                  album first.
                </p>
              )}

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
                Images & videos *
              </label>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleMediaFilesChange}
                className="block w-full text-xs text-muted file:mr-4 file:rounded-full file:border-0 file:bg-brand-accent file:px-4 file:py-2 file:text-[11px] file:font-semibold file:uppercase file:tracking-wide file:text-brand-deep hover:file:brightness-110"
              />
              {mediaFiles.length > 0 && (
                <p className="text-[11px] text-muted">
                  {mediaFiles.length} file(s) selected
                </p>
              )}
            </div>

            {formError && (
              <p className="text-xs text-red-200">{formError}</p>
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetAddForm}
                disabled={submitting}
                className="rounded-full border border-light px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted hover:bg-brand-secondary disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-brand-accent px-5 py-2 text-[11px] font-semibold uppercase tracking-wide text-brand-deep shadow-soft hover:brightness-110 disabled:opacity-60"
              >
                {submitting ? "Uploading…" : "Upload"}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Albums list for current tab */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold text-inverse">
            Albums on {SUBTABS.find((t) => t.id === activeSubTab)?.label}
          </h2>
          <p className="text-[11px] text-muted">
            {albumsForCurrentTab.length} album(s)
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12 text-sm text-muted rounded-2xl bg-brand-primary border border-light">
            Loading albums…
          </div>
        ) : albumsForCurrentTab.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-sm text-muted rounded-2xl bg-brand-primary border border-light">
            <p>No albums on this website yet.</p>
            <p className="mt-1 text-[11px]">Use “Add media” above to create one.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {albumsForCurrentTab.map((album) => (
              <article
                key={album.id}
                className="rounded-2xl border border-light bg-brand-primary shadow-card overflow-hidden"
              >
                <div className="px-4 sm:px-6 py-4 border-b border-light bg-brand-secondary/30 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-inverse">
                      {album.label || "Untitled album"}
                    </h3>
                    {album.subtitle && (
                      <p className="mt-1 text-xs text-muted">{album.subtitle}</p>
                    )}
                    <p className="mt-1 text-[11px] text-brand-soft uppercase tracking-wide">
                      {(album.websites || []).map(
                        (w) => GALLERY_WEBSITES.find((g) => g.id === w)?.label ?? w
                      ).join(" • ")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteAlbum(album)}
                    disabled={deletingAlbumId === album.id}
                    className="shrink-0 rounded-full px-4 py-2 text-[11px] font-semibold border border-red-500/80 bg-red-500/10 text-red-200 hover:bg-red-500/25 disabled:opacity-60 transition"
                  >
                    {deletingAlbumId === album.id ? "Deleting…" : "Delete album"}
                  </button>
                </div>
                <div className="p-4 sm:p-6">
                  {!album.items?.length ? (
                    <p className="text-xs text-muted py-4">
                      No media in this album yet.
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {album.items.map((item, idx) => {
                        const key = `${album.id}-${idx}`;
                        const isDeleting = deletingId === key;
                        return (
                          <div
                            key={key}
                            className="relative group rounded-lg overflow-hidden bg-brand-secondary border border-light aspect-square"
                          >
                            {item.type === "image" ? (
                              <img
                                src={item.url}
                                alt={item.title || `Item ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <video
                                src={item.url}
                                className="w-full h-full object-cover"
                                muted
                                playsInline
                                preload="metadata"
                              />
                            )}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                              <button
                                type="button"
                                onClick={() => handleDeleteMedia(album.id, idx)}
                                disabled={isDeleting}
                                className="rounded-full px-4 py-2 text-[11px] font-semibold bg-red-500 text-white hover:bg-red-600 disabled:opacity-60"
                              >
                                {isDeleting ? "Removing…" : "Delete"}
                              </button>
                            </div>
                            <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-black/70 text-white">
                              {item.type}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
