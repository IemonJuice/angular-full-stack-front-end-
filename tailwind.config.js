/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#525CEB",

          "secondary": "#BFCFE7",

          "accent": "#BFCFE7",

          "neutral": "#3D3B40",

          "base-100": "#BFCFE7",

          "info": "#F8EDFF",

          "success": "#F8EDFF",

          "warning": "#F8EDFF",

          "error": "#F8EDFF",
        },
        dark: {

          "primary": "#525CEB",

          "secondary": "#BFCFE7",

          "accent": "#BFCFE7",

          "neutral": "#F8EDFF",

          "base-100": "#3D3B40",

          "info": "#F8EDFF",

          "success": "#F8EDFF",

          "warning": "#F8EDFF",

          "error": "#F8EDFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

