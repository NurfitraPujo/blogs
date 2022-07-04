/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,md,liquid,erb,serb}",
    "./frontend/javascript/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        mono: ["Fira Mono", "serif"],
      },
      colors: {
        primary: "#44CFAE",
        white: "#F5F5F5",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(100% 100% at 50% 0%, #0E242C 0%, #090C20 100%);",
      },
    },
  },
  plugins: [],
};
