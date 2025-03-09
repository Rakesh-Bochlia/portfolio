/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        teal: "#54A39C",
        coral: "#E39789",
        offwhite: "#f7f7f7",
        darkbg: "#131313",
        sectionbg: "#191919",
        lightbg: "#ffffff",
        lightsection: "#f5f5f5",
        darktext: "#333333",
        'menu-bg': '#0c0c0c',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "menu-reveal": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-up": "slide-up 0.5s ease-out",
        "menu-reveal": "menu-reveal 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} 