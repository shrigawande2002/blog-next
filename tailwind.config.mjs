/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Add this if you're using src directory
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any other directories where you use Tailwind classes
  ],
  important: true, // Add this to ensure Tailwind utilities override other styles
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkprimary: "#1b1a1e",
        yellow: "#FACC15",
        fontWhite: "#FAF1E6",
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"], // Added fallback font
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Ensure this is true (default)
  },
}