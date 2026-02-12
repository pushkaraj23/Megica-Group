import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/data/firebase";

const COLLECTION = "galleryAlbums";

/**
 * Fetch gallery albums for a website. Returns shape compatible with gallery page:
 * { id, label, subtitle, items: [{ type, src, title }] }
 * @param {"main" | "sanitaryware" | "bathroom-fittings"} website
 * @returns {Promise<Array<{ id: string, label: string, subtitle: string | null, items: Array<{ type: "image"|"video", src: string, title: string | null }> }>>}
 */
export async function fetchGalleryAlbumsByWebsite(website) {
  if (!website) return [];
  const colRef = collection(db, COLLECTION);
  const q = query(colRef, where("websites", "array-contains", website));
  const snapshot = await getDocs(q);
  const docs = snapshot.docs.map((d) => ({
    doc: d,
    createdAt: d.data().createdAt?.toDate?.()?.getTime() ?? 0,
  }));
  docs.sort((a, b) => a.createdAt - b.createdAt);
  return docs.map(({ doc: d }) => {
    const data = d.data();
    const items = Array.isArray(data.items) ? data.items : [];
    return {
      id: d.id,
      label: data.label || "Untitled",
      subtitle: data.subtitle || null,
      items: items.map((it) => ({
        type: it.type === "video" ? "video" : "image",
        src: it.url || "",
        title: it.title || null,
      })),
    };
  });
}
