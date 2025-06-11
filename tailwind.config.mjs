/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkprimary:"#1b1a1e",
        yellow:"#FACC15",
        fontWhite: "#FAF1E6",
      },
    },
    fontFamily: {
      geist: ["Geist"],
    },
  },
  plugins: [],
};
