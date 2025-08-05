/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ensure these paths are correct
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "autumn"],
  },
};
