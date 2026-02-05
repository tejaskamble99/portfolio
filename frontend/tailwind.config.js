/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-dark': 'rgba(15, 23, 42, 0.6)', // Semi-transparent dark slate
        'glass-border': 'rgba(148, 163, 184, 0.2)', // Subtle border
        'background-dark': '#0f172a', // Deep slate background
      },
      // Optional: Add backdrop blur if not already available
      backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
}