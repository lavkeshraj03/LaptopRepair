/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Premium Gold
        secondary: "#0f172a", // Dark Blue
        dark: "#02040a", // Deep Black
        glass: "rgba(255, 255, 255, 0.05)",
        gold: "#D4AF37",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(to right, #D4AF37, #f59e0b)',
        'hero-gradient': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(2, 4, 10, 0) 70%)',
      },
    },
  },
  plugins: [],
}
