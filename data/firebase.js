import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

/* =========================
   FIREBASE CONFIG
   NOTE: These values are public client-side keys. They are
   safe to embed for the frontend, but do not use this pattern
   for server-only secrets.
========================= */
const firebaseConfig = {
  apiKey: "AIzaSyCbJCA3tsmJnNXliJSzLid5Q7VkJCPTJ68",
  authDomain: "megica-group.firebaseapp.com",
  projectId: "megica-group",
  storageBucket: "megica-group.firebasestorage.app",
  messagingSenderId: "930235634682",
  appId: "1:930235634682:web:1a8a1e2922cd0a881b4a43",
  measurementId: "G-T3834EK09D",
};

/* =========================
   INITIALIZE FIREBASE APP
========================= */
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

/* =========================
   FIRESTORE DATABASE
========================= */
const db = getFirestore(app);

/* =========================
   CLOUD STORAGE
========================= */
const storage = getStorage(app);

/* =========================
   ANALYTICS (CLIENT ONLY)
========================= */
let analytics = null;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

/* =========================
   EXPORTS
========================= */
export { app, db, analytics, storage };
