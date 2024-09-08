/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        neon : "#E0F66F",
        armyGreen : "#243324",
        lightArmyGreen : "#3F413D"
      }
    },
  },
  plugins: [require("rippleui")],
}