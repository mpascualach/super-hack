/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "gray-custom": "rgba(57, 57, 57, 0.38)",
      },
      lineHeight: {
        "28px": "28px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        normal: {
          accent: "#699BF7",
          background: "#FFFFFF",
        },
        chat: {
          accent: "#262626",
          background: "#262626",
        },
      },
    ],
  },
};
