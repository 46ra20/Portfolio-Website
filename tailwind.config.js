/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: ["coffee"],
    },
  },
  plugins: [require("daisyui")],
}