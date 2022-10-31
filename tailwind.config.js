/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-fade": "slideScale 0.3 ease-in-out",
      },
      keyframes: {
        slideFade: {
          "0%": {
            transform: "translateX(0%)",
            opacity: "100",
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
