"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SuccessPopup({
  show,
  message = "Action completed successfully",
  duration = 4000,
  onClose,
}) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!show) return;

    setProgress(100);

    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(percent);
    }, 30);

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              relative
              max-w-md w-full
              rounded-2xl
              bg-white/90
              backdrop-blur-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              border border-white/60
              p-6 text-center
              overflow-hidden
            "
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-1 text-brand-deep/60 hover:text-brand-deep hover:bg-black/5 transition"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Glow */}
            <div className="pointer-events-none absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand-accent/30 blur-3xl" />

            {/* Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-brand-deep text-2xl font-bold">
              ✓
            </div>

            {/* Message */}
            <p className="text-base font-medium text-brand-deep leading-relaxed">
              {message}
            </p>

            {/* Progress bar */}
            <div className="mt-6 h-1 w-full rounded-full bg-black/10 overflow-hidden">
              <motion.div
                className="h-full bg-brand-accent"
                initial={{ width: "100%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.03 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
