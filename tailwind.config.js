/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './functions/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary" : "#42489E",
        "secondary" : "#B23CFD",
        "success" : "#00B74A",
        "danger" : "#F93154",
        "warning" : "#FFA900",
        "warning-2":"#FCA61F",
        "info" : "#39C0ED",
        "light" : "#FBFBFB",
        "primary-hov" : "#0c56d0",
        "secondary-hov" : "#a316fd",
        "success-hov" : "#00913b",
        "danger-hov" : "#f80c35",
        "warning-hov" : "#d99000",
        "info-hov" : "#16b5ea",
        "light-hov" : "#e8e8e8",
        "dark":"#262626",
        "dark-theme":"#000A1F",
        "white-dark":"#CDCDCD",
        "dark-background": "#181818",
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
