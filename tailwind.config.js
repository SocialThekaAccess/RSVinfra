/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Base dark — charcoal matching the logo background ──
        // Logo background is a dark warm charcoal, NOT cold navy-blue
        midnight: {
          DEFAULT: "#18130f",   // warm dark charcoal
          50:  "#f2ede8",
          100: "#d9cfc7",
          200: "#b5a898",
          300: "#8c7b6a",
          400: "#5e4d3c",
          500: "#3a2e22",
          600: "#2e231a",
          700: "#241a12",
          800: "#1c140d",
          900: "#18130f",
        },
        // ── Gold — metallic warm gold from logo text ──
        gold: {
          DEFAULT: "#c9a46e",
          light:   "#e2c898",
          dark:    "#a07840",
        },
        // ── Rust — the bold orange-red square in the logo icon ──
        rust: {
          DEFAULT: "#c84b11",
          light:   "#e05a1a",
          dark:    "#9e3a0c",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        "fade-in":   "fadeIn 1s ease-in-out",
        "fade-up":   "fadeUp 0.8s ease-out",
        "slide-in":  "slideIn 0.8s ease-out",
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        "shimmer":   "shimmer 3s linear infinite",
        "float-spin": "floatSpin 8s ease-in-out infinite",
        "float":     "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn:   { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeUp:   { "0%": { opacity: "0", transform: "translateY(30px)" },  "100%": { opacity: "1", transform: "translateY(0)" } },
        slideIn:  { "0%": { opacity: "0", transform: "translateX(-40px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        slowZoom: { "0%": { transform: "scale(1)" },   "100%": { transform: "scale(1.12)" } },
        shimmer:  { "0%": { backgroundPosition: "-200% center" }, "100%": { backgroundPosition: "200% center" } },
        floatSpin: {
          "0%":   { transform: "translateY(0px) rotate(0deg) scale(1)" },
          "25%":  { transform: "translateY(-12px) rotate(4deg) scale(1.03)" },
          "50%":  { transform: "translateY(-6px) rotate(0deg) scale(1.01)" },
          "75%":  { transform: "translateY(-14px) rotate(-4deg) scale(1.03)" },
          "100%": { transform: "translateY(0px) rotate(0deg) scale(1)" },
        },
        float: {
          "0%":   { transform: "translateY(0px)" },
          "50%":  { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      backgroundImage: {
        // Primary accent — gold metallic sweep (used for buttons & headlines)
        "gold-gradient":  "linear-gradient(135deg, #e2c898 0%, #c9a46e 50%, #a07840 100%)",
        // Secondary accent — rust-to-gold diagonal (used for bold highlights)
        "rust-gradient":  "linear-gradient(135deg, #e05a1a 0%, #c84b11 60%, #9e3a0c 100%)",
        // Combined logo-accurate brand gradient (rust → gold)
        "brand-gradient": "linear-gradient(135deg, #c84b11 0%, #c9a46e 100%)",
        // Page section background
        "dark-gradient":  "linear-gradient(180deg, #18130f 0%, #241a12 100%)",
      },
    },
  },
  plugins: [],
}
