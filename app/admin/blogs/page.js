"use client";

import { useEffect, useRef, useState } from "react";
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

/** Extract Firebase Storage path from a download URL so we can delete the file. */
function getStoragePathFromFirebaseUrl(url) {
  if (!url || typeof url !== "string") return null;
  try {
    const match = url.match(/\/o\/(.+?)(\?|$)/);
    if (!match) return null;
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
}

/** Collect all img src URLs from HTML content that point to Firebase Storage. */
function getContentImageUrls(html) {
  if (!html || typeof html !== "string") return [];
  const urls = [];
  const regex = /<img[^>]+src=["']([^"']+)["']/gi;
  let m;
  while ((m = regex.exec(html)) !== null) {
    if (m[1] && m[1].includes("firebasestorage.googleapis.com")) urls.push(m[1]);
  }
  return urls;
}

const INITIAL_FORM = {
  title: "",
  subtitle: "",
  website: "",
  summary: "",
  content: "",
  author: "",
};

export default function AdminBlogsPage() {
  const [blogForm, setBlogForm] = useState(INITIAL_FORM);
  const [blogMainImage, setBlogMainImage] = useState(null);
  const [blogGalleryImages, setBlogGalleryImages] = useState([]);
  const [blogSubmitting, setBlogSubmitting] = useState(false);
  const [blogSuccessMessage, setBlogSuccessMessage] = useState("");
  const [blogErrorMessage, setBlogErrorMessage] = useState("");
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [galleryPreviews, setGalleryPreviews] = useState([]);

  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [blogsError, setBlogsError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const fetchBlogs = async () => {
    try {
      setBlogsLoading(true);
      setBlogsError("");
      const colRef = collection(db, "blogs");
      const q = query(colRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setBlogs(items);
    } catch (err) {
      console.error("Fetch blogs error", err);
      setBlogsError("Failed to load blogs. Please refresh the page.");
    } finally {
      setBlogsLoading(false);
    }
  };

  useEffect(() => {
    void fetchBlogs();
  }, []);

  const handleBlogInputChange = (e) => {
    const { name, value } = e.target;
    setBlogForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlogMainImageChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    setBlogMainImage(file);
    if (mainImagePreview) {
      URL.revokeObjectURL(mainImagePreview);
    }
    setMainImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleBlogGalleryImagesChange = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    galleryPreviews.forEach((url) => URL.revokeObjectURL(url));
    setBlogGalleryImages(files);
    setGalleryPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const resetBlogForm = () => {
    setBlogForm(INITIAL_FORM);
    setBlogMainImage(null);
    setBlogGalleryImages([]);
    if (mainImagePreview) {
      URL.revokeObjectURL(mainImagePreview);
    }
    galleryPreviews.forEach((url) => URL.revokeObjectURL(url));
    setMainImagePreview(null);
    setGalleryPreviews([]);
    if (editorRef.current) {
      editorRef.current.innerHTML = "";
    }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setBlogErrorMessage("");
    setBlogSuccessMessage("");

    if (!blogForm.title.trim()) {
      setBlogErrorMessage("Please enter a blog title.");
      return;
    }
    if (!blogForm.website) {
      setBlogErrorMessage(
        "Please choose which website this blog is for (Sanitaryware or Bathroom Fittings).",
      );
      return;
    }
    const plainText = blogForm.content
      .replace(/<(.|\n)*?>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim();
    if (!plainText) {
      setBlogErrorMessage("Please enter the main blog content.");
      return;
    }

    try {
      setBlogSubmitting(true);

      let mainImageUrl = null;
      if (blogMainImage) {
        const mainRef = ref(
          storage,
          `blogs/${blogForm.website}/main/${Date.now()}-${blogMainImage.name}`,
        );
        await uploadBytes(mainRef, blogMainImage);
        mainImageUrl = await getDownloadURL(mainRef);
      }

      const galleryImageUrls = [];
      if (blogGalleryImages.length > 0) {
        const uploadPromises = blogGalleryImages.map(async (file, index) => {
          const galleryRef = ref(
            storage,
            `blogs/${blogForm.website}/gallery/${Date.now()}-${index}-${file.name}`,
          );
          await uploadBytes(galleryRef, file);
          return getDownloadURL(galleryRef);
        });
        const urls = await Promise.all(uploadPromises);
        galleryImageUrls.push(...urls);
      }

      const docRef = await addDoc(collection(db, "blogs"), {
        title: blogForm.title.trim(),
        subtitle: blogForm.subtitle.trim() || null,
        website: blogForm.website,
        summary: blogForm.summary.trim() || null,
        content: blogForm.content.trim(),
        author: blogForm.author.trim() || null,
        mainImageUrl,
        galleryImageUrls,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        active: true,
      });

      resetBlogForm();
      setBlogSuccessMessage("Blog has been created and saved successfully.");

      // Optimistically add to list (with fallback to refetch if needed)
      setBlogs((prev) => [
        {
          id: docRef.id,
          ...blogForm,
          mainImageUrl,
          galleryImageUrls,
          active: true,
        },
        ...prev,
      ]);
      setShowForm(false);
    } catch (err) {
      console.error("Create blog error", err);
      setBlogErrorMessage(
        "Unable to create blog. Please check your connection and try again.",
      );
    } finally {
      setBlogSubmitting(false);
    }
  };

  const handleToggleActive = async (blog) => {
    try {
      const newActive = !blog.active;
      await updateDoc(doc(db, "blogs", blog.id), {
        active: newActive,
        updatedAt: serverTimestamp(),
      });
      setBlogs((prev) =>
        prev.map((b) =>
          b.id === blog.id ? { ...b, active: newActive } : b,
        ),
      );
    } catch (err) {
      console.error("Toggle blog active error", err);
      setBlogsError("Unable to update blog status. Please try again.");
    }
  };

  const handleDeleteBlog = async (blog) => {
    const confirmed = window.confirm(
      `Delete blog "${blog.title || "Untitled"}"? All associated images and media will be removed from storage. This cannot be undone.`,
    );
    if (!confirmed) return;
    try {
      const urlsToDelete = [
        ...(blog.mainImageUrl ? [blog.mainImageUrl] : []),
        ...(Array.isArray(blog.galleryImageUrls) ? blog.galleryImageUrls : []),
        ...getContentImageUrls(blog.content || ""),
      ];
      for (const url of urlsToDelete) {
        const path = getStoragePathFromFirebaseUrl(url);
        if (path) {
          try {
            await deleteObject(ref(storage, path));
          } catch (storageErr) {
            console.warn("Could not delete storage file:", path, storageErr);
          }
        }
      }
      await deleteDoc(doc(db, "blogs", blog.id));
      setBlogs((prev) => prev.filter((b) => b.id !== blog.id));
    } catch (err) {
      console.error("Delete blog error", err);
      setBlogsError("Unable to delete blog. Please try again.");
    }
  };

  const editorRef = useRef(null);
  const savedSelectionRef = useRef(null);

  // Sync initial content into editor only when form opens (not on every keystroke)
  useEffect(() => {
    if (!showForm) return;
    const el = editorRef.current;
    if (el) el.innerHTML = blogForm.content;
  }, [showForm]);

  const saveSelection = () => {
    const sel = window.getSelection();
    if (!sel.rangeCount || !editorRef.current?.contains(sel.anchorNode)) return;
    savedSelectionRef.current = sel.getRangeAt(0).cloneRange();
  };

  const restoreSelection = () => {
    const range = savedSelectionRef.current;
    if (!range || !editorRef.current) return false;
    try {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      return true;
    } catch (e) {
      return false;
    }
  };

  const applyFormat = (command, value = null) => {
    const el = editorRef.current;
    if (!el) return;
    el.focus();
    const hadSelection = restoreSelection();
    if (!hadSelection) {
      const sel = window.getSelection();
      sel.selectAllChildren(el);
    }
    try {
      document.execCommand(command, false, value ?? undefined);
      setBlogForm((prev) => ({
        ...prev,
        content: el.innerHTML,
      }));
    } catch (err) {
      console.error("Format command error", err);
    }
  };

  const handleEditorInput = () => {
    if (!editorRef.current) return;
    setBlogForm((prev) => ({
      ...prev,
      content: editorRef.current.innerHTML,
    }));
  };

  const handleInsertInlineImage = async () => {
    if (!blogForm.website) {
      alert(
        "Please select which website this blog is for before inserting images.",
      );
      return;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const contentRef = ref(
          storage,
          `blogs/${blogForm.website}/content/${Date.now()}-${file.name}`,
        );
        await uploadBytes(contentRef, file);
        const url = await getDownloadURL(contentRef);
        if (editorRef.current) {
          editorRef.current.focus();
          document.execCommand("insertImage", false, url);
          handleEditorInput();
        }
      } catch (err) {
        console.error("Inline image upload error", err);
        alert(
          "Unable to upload image. Please check your connection and try again.",
        );
      }
    };
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold text-inverse">
            Blog Management
          </h1>
          <p className="mt-1 text-xs text-muted">
            Manage all blogs and create new articles for the Sanitaryware and
            Bathroom Fittings websites.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => void fetchBlogs()}
            className="inline-flex items-center gap-1 rounded-full border border-brand-accent px-3 py-1.5 text-[11px] uppercase tracking-wide text-brand-accent hover:bg-brand-accent/10 transition"
          >
            Refresh list
          </button>
          <button
            type="button"
            onClick={() => setShowForm((v) => !v)}
            className="inline-flex items-center gap-1 rounded-full bg-brand-accent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-deep shadow-soft hover:brightness-110 active:scale-[0.99]"
          >
            {showForm ? "Close form" : "Add new blog"}
          </button>
        </div>
      </header>

      {blogErrorMessage && (
        <div className="rounded-lg border border-red-500/60 bg-red-500/10 px-4 py-2 text-xs text-red-200">
          {blogErrorMessage}
        </div>
      )}

      {blogSuccessMessage && (
        <div className="rounded-lg border border-emerald-400/70 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-200">
          {blogSuccessMessage}
        </div>
      )}

      {showForm && (
        <form
          onSubmit={handleBlogSubmit}
          className="space-y-6 rounded-2xl bg-brand-primary border border-light shadow-card p-4 sm:p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
                Blog title *
              </label>
              <input
                type="text"
                name="title"
                value={blogForm.title}
                onChange={handleBlogInputChange}
                className="w-full rounded-lg bg-brand-secondary border border-brand-accent/60 px-4 py-2.5 text-sm text-inverse placeholder:text-muted/60 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                placeholder="Enter a clear blog title"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
                Subtitle / Tagline
              </label>
              <input
                type="text"
                name="subtitle"
                value={blogForm.subtitle}
                onChange={handleBlogInputChange}
                className="w-full rounded-lg bg-brand-secondary border border-brand-accent/40 px-4 py-2.5 text-sm text-inverse placeholder:text-muted/60 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                placeholder="Optional short tagline"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
                Website *
              </label>
              <select
                name="website"
                value={blogForm.website}
                onChange={handleBlogInputChange}
                className="w-full rounded-lg bg-brand-secondary border border-brand-accent/60 px-4 py-2.5 text-sm text-inverse outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
              >
                <option value="">Select website</option>
                <option value="sanitaryware">Megica Sanitaryware</option>
                <option value="bathroom-fittings">Megica Bathroom Fittings</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
                Author
              </label>
              <input
                type="text"
                name="author"
                value={blogForm.author}
                onChange={handleBlogInputChange}
                className="w-full rounded-lg bg-brand-secondary border border-brand-accent/40 px-4 py-2.5 text-sm text-inverse placeholder:text-muted/60 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                placeholder="Name of the author (optional)"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
              Short summary
            </label>
            <textarea
              name="summary"
              value={blogForm.summary}
              onChange={handleBlogInputChange}
              rows={3}
              className="w-full rounded-lg bg-brand-secondary border border-brand-accent/40 px-4 py-2.5 text-sm text-inverse placeholder:text-muted/60 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
              placeholder="2–3 lines that summarize the blog (e.g. for listing pages)."
            />
          </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
            Main content *
          </label>
          <div className="rounded-lg border border-brand-accent/60 bg-brand-secondary/40 text-sm text-inverse">
            <div className="border-b border-brand-accent/40 bg-brand-secondary/60 px-2 py-1.5 flex flex-wrap gap-1 text-[11px]">
              <button
                type="button"
                onClick={() => applyFormat("formatBlock", "H2")}
                className="px-2 py-0.5 rounded bg-brand-primary/60 hover:bg-brand-primary"
              >
                H2
              </button>
              <button
                type="button"
                onClick={() => applyFormat("formatBlock", "H3")}
                className="px-2 py-0.5 rounded bg-brand-primary/60 hover:bg-brand-primary"
              >
                H3
              </button>
              <span className="w-px h-4 bg-brand-accent/40 mx-1" />
              <button
                type="button"
                onClick={() => applyFormat("bold")}
                className="px-2 py-0.5 rounded hover:bg-brand-primary"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => applyFormat("italic")}
                className="px-2 py-0.5 rounded hover:bg-brand-primary italic"
              >
                I
              </button>
              <button
                type="button"
                onClick={() => applyFormat("underline")}
                className="px-2 py-0.5 rounded hover:bg-brand-primary underline"
              >
                U
              </button>
              <span className="w-px h-4 bg-brand-accent/40 mx-1" />
              <button
                type="button"
                onClick={() => applyFormat("insertUnorderedList")}
                className="px-2 py-0.5 rounded hover:bg-brand-primary"
              >
                • List
              </button>
              <button
                type="button"
                onClick={() => applyFormat("insertOrderedList")}
                className="px-2 py-0.5 rounded hover:bg-brand-primary"
              >
                1. List
              </button>
              <span className="w-px h-4 bg-brand-accent/40 mx-1" />
              <button
                type="button"
                onClick={() => applyFormat("justifyLeft")}
                className="px-2 py-0.5 rounded hover:bg-brand-primary"
              >
                L
              </button>
              <button
                type="button"
                onClick={() => applyFormat("justifyCenter")}
                className="px-2 py-0.5 rounded hover:bg-brand-primary"
              >
                C
              </button>
              <button
                type="button"
                onClick={() => applyFormat("justifyRight")}
                className="px-2 py-0.5 rounded hover:bg-brand-primary"
              >
                R
              </button>
              <span className="w-px h-4 bg-brand-accent/40 mx-1" />
              <button
                type="button"
                onClick={() => {
                  const url = window.prompt("Enter link URL");
                  if (url) applyFormat("createLink", url);
                }}
                className="px-2 py-0.5 rounded hover:bg-brand-primary"
              >
                Link
              </button>
              <button
                type="button"
                onClick={handleInsertInlineImage}
                className="px-2 py-0.5 rounded hover:bg-brand-primary"
              >
                Img
              </button>
            </div>
            <div
              ref={editorRef}
              className="min-h-[180px] max-h-[420px] overflow-y-auto px-3 py-2 text-sm bg-brand-secondary/20 outline-none text-inverse [&_a]:text-brand-accent [&_a]:underline [&_img]:max-w-full [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:text-base [&_h3]:font-medium"
              contentEditable
              onInput={handleEditorInput}
              onBlur={saveSelection}
              suppressContentEditableWarning
            />
          </div>
          <p className="text-[11px] text-muted">
            Use the toolbar to format text, add headings, bullet points and
            insert images inline. The blog will be shown using the same
            formatting.
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
                Main cover image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleBlogMainImageChange}
                className="block w-full text-xs text-muted file:mr-4 file:rounded-full file:border-0 file:bg-brand-accent file:px-4 file:py-2 file:text-[11px] file:font-semibold file:uppercase file:tracking-wide file:text-brand-deep hover:file:brightness-110"
              />
              {mainImagePreview && (
                <div className="mt-2">
                  <p className="text-[11px] text-muted mb-1">Preview:</p>
                  <img
                    src={mainImagePreview}
                    alt="Main preview"
                    className="h-32 w-full max-w-xs rounded-md object-cover border border-light"
                  />
                </div>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
                Additional gallery images
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleBlogGalleryImagesChange}
                className="block w-full text-xs text-muted file:mr-4 file:rounded-full file:border-0 file:bg-brand-accent file:px-4 file:py-2 file:text-[11px] file:font-semibold file:uppercase file:tracking-wide file:text-brand-deep hover:file:brightness-110"
              />
              {galleryPreviews.length > 0 && (
                <div className="mt-2 space-y-1">
                  <p className="text-[11px] text-muted">Gallery previews:</p>
                  <div className="flex flex-wrap gap-2">
                    {galleryPreviews.map((src, idx) => (
                      <img
                        key={src}
                        src={src}
                        alt={`Gallery preview ${idx + 1}`}
                        className="h-16 w-16 rounded-md object-cover border border-light"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <p className="text-[11px] text-muted">
              Fields marked with <span className="text-brand-accent">*</span> are
              required.
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetBlogForm}
                disabled={blogSubmitting}
                className="inline-flex items-center gap-1 rounded-full border border-light px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted hover:bg-brand-secondary/80 disabled:opacity-60"
              >
                Clear form
              </button>
              <button
                type="submit"
                disabled={blogSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2 text-[11px] font-semibold uppercase tracking-wide text-brand-deep shadow-soft hover:brightness-110 active:scale-[0.99] disabled:opacity-60"
              >
                {blogSubmitting ? "Saving blog…" : "Publish blog"}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Existing blogs list */}
      <section className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold text-inverse">Existing blogs</h2>
          <p className="text-[11px] text-muted">
            Total{" "}
            <span className="text-brand-soft">
              {blogs.length.toString().padStart(2, "0")}
            </span>
          </p>
        </div>

        {blogsError && (
          <div className="rounded-lg border border-red-500/60 bg-red-500/10 px-4 py-2 text-xs text-red-200">
            {blogsError}
          </div>
        )}

        {blogsLoading ? (
          <div className="flex items-center justify-center py-10 text-sm text-muted rounded-2xl bg-brand-primary border border-light shadow-card">
            Loading blogs…
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex items-center justify-center py-10 text-sm text-muted rounded-2xl bg-brand-primary border border-light shadow-card">
            No blogs have been created yet.
          </div>
        ) : (
          <div className="space-y-3">
            {blogs.map((blog) => {
              const createdAtDate =
                blog.createdAt?.toDate?.() ?? null;
              const createdAtLabel = createdAtDate
                ? createdAtDate.toLocaleString()
                : "—";

              return (
                <article
                  key={blog.id}
                  className="rounded-2xl border border-light bg-brand-primary shadow-card px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-3"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1 text-xs">
                      <p className="text-sm font-semibold text-inverse flex items-center gap-2">
                        <span>{blog.title || "Untitled blog"}</span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium ${blog.active
                            ? "bg-emerald-400 text-brand-deep"
                            : "bg-transparent text-brand-accent border border-brand-accent"
                            }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${blog.active
                              ? "bg-emerald-700"
                              : "bg-brand-accent"
                              }`}
                          />
                          {blog.active ? "Active" : "Inactive"}
                        </span>
                      </p>
                      {blog.subtitle && (
                        <p className="text-[12px] text-muted">
                          {blog.subtitle}
                        </p>
                      )}
                      <p className="text-[11px] text-brand-soft uppercase tracking-wide">
                        {blog.website === "sanitaryware"
                          ? "Sanitaryware"
                          : blog.website === "bathroom-fittings"
                            ? "Bathroom Fittings"
                            : "—"}
                      </p>
                      {blog.author && (
                        <p className="text-[11px] text-muted">
                          By {blog.author}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleToggleActive(blog)}
                        className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-[11px] font-semibold shadow-soft transition ${blog.active
                          ? "bg-emerald-100 text-emerald-900 hover:bg-emerald-200"
                          : "bg-emerald-500 text-brand-deep hover:bg-emerald-400"
                          }`}
                      >
                        {blog.active ? "Set inactive" : "Set active"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteBlog(blog)}
                        className="inline-flex items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold border border-red-500/80 bg-red-500/10 text-red-100 hover:bg-red-500/25 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {blog.summary && (
                    <p className="text-xs text-inverse/80 line-clamp-2">
                      {blog.summary}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-[11px] text-inverse/60">
                    <span className="flex items-center gap-1">
                      <span className="text-brand-accent text-sm">⏱</span>
                      {createdAtLabel}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
