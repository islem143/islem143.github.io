// /** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        "border-spin": {

          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'border-spin': 'border-spin 5s linear infinite',
      },
      scale: {
        '200': '2.0',
        '250': '2.5',
      }
    },
    screens: {
      xs: "570px",
      xxs: "390px",
      xxxs: "360px",
      xxxxs: "300px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
