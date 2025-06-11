// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "p-2", "md:p-4", "py-8",
    "gap-2", "gap-4", "md:gap-6",
    "flex", "md:flex", "hidden", "md:hidden",
    "items-center", "justify-center", "ml-auto",
    "text-lg", "text-xl", "text-2xl", "font-semibold",
    "rounded-md", "text-yellow", "text-black", "text-white",
    "bg-yellow", "bg-darkprimary",
    "font-geist", "sticky", "z-50", "shadow-md"
  ],
  theme: {
    extend: {
      colors: {
        darkprimary: "#1b1a1e",
        yellow: "#FACC15",
        fontWhite: "#FAF1E6",
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
