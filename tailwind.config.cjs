/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        dark: "#1a1b26",
        light: "#f8f9ff",
        white: "#FFFFFF",
        black: "#000000",
        primary: "#6366f1",
        secondary: "#ec4899",
        accent: "#8b5cf6",
        name: {
          DEFAULT: "#6366f1",
          secondary: "#8b5cf6",
        },
      },
      fontFamily: {
        kizard: ["Kizard", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--primary-color), var(--accent-color))',
      },
    },
  },
  plugins: [],
};
