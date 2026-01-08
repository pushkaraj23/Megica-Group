/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0F172A",
          secondary: "#1E293B",
          accent: "#0EA5E9",
        },

        background: {
          light: "#F8FAFC",
          dark: "#020617",
        },

        text: {
          primary: "#0F172A",
          secondary: "#334155",
          muted: "#64748B",
        },

        border: {
          DEFAULT: "#E2E8F0",
        },

        section: {
          alt: "#F1F5F9",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },

  plugins: [],
};
