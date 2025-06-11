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
  safelist: [
    // Navbar-related classes
    'hidden',
    'md:flex',
    'md:hidden',
    'flex',
    'fixed',
    'sticky',
    'z-50',
    'z-[60]',
    'py-2',
    'py-4',
    'px-4',
    'gap-2',
    'gap-4',
    'gap-6',
    'text-yellow',
    'text-white',
    'bg-darkprimary',
    'hover:text-gray-300',

    // Modal-related classes
    'inset-0',
    'bg-opacity-50',
    'overflow-y-auto',
    'sm:max-w-lg',

    // Dynamic classes
    { pattern: /bg-(red|blue|green|yellow)-(500|600)/ },
    { pattern: /text-(white|black|yellow)/ },
    { pattern: /p(x|y)?-/ },
  ],
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