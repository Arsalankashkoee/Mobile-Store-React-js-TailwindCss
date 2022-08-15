/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(300px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      colors: {
        purp: "#2B0179",
        viol: "#7938F2",
        telegram: "#0088cc",
        whatsapp: "#25D366",
        instagram: "#E4405F",
      },
    },
  },
  plugins: [],
};
