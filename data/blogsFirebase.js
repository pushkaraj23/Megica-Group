import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/data/firebase";

/**
 * Fetch active blogs for a website (listing page).
 * Requires Firestore composite index: collection "blogs", fields website (Ascending), active (Ascending), createdAt (Descending).
 * @param {"sanitaryware" | "bathroom-fittings"} website
 * @returns {Promise<Array<{ id: string, slug: string, title: string, excerpt: string, listingImage: string | null, createdAt: any }>>}
 */
export async function fetchBlogsByWebsite(website) {
  const colRef = collection(db, "blogs");
  const q = query(
    colRef,
    where("website", "==", website),
    where("active", "==", true),
    orderBy("createdAt", "desc"),
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => {
    const data = d.data();
    const createdAt = data.createdAt?.toDate?.();
    return {
      id: d.id,
      slug: d.id,
      title: data.title || "Untitled",
      excerpt:
        data.summary ||
        (data.content
          ? String(data.content).replace(/<[^>]+>/g, "").slice(0, 160) + "..."
          : ""),
      listingImage: data.mainImageUrl || null,
      createdAt,
    };
  });
}

/**
 * Fetch a single blog by document id (detail page).
 * @param {string} id - Firestore document id
 * @returns {Promise<{ id: string, title: string, subtitle: string | null, summary: string | null, content: string, author: string | null, mainImageUrl: string | null, galleryImageUrls: string[], createdAt: Date | null, website: string } | null>}
 */
export async function fetchBlogById(id) {
  if (!id) return null;
  const docRef = doc(db, "blogs", id);
  const snap = await getDoc(docRef);
  if (!snap.exists()) return null;
  const data = snap.data();
  const createdAt = data.createdAt?.toDate?.() ?? null;
  return {
    id: snap.id,
    title: data.title || "Untitled",
    subtitle: data.subtitle || null,
    summary: data.summary || null,
    content: data.content || "",
    author: data.author || null,
    mainImageUrl: data.mainImageUrl || null,
    galleryImageUrls: Array.isArray(data.galleryImageUrls)
      ? data.galleryImageUrls
      : [],
    createdAt,
    website: data.website || "",
  };
}

/** Format a Date for display (e.g. "Jan 18, 2026") */
export function formatBlogDate(date) {
  if (!date) return "—";
  if (typeof date.toLocaleDateString === "function") {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  return "—";
}
