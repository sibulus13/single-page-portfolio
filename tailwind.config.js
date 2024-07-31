/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': "#140514",
      },
    },
  },
  safelist: [
    'py-1',
    "pt-2",
    "pt-4",
    "py-2",
    "py-4",
    'underline',
    'px-40'
  ],
  plugins: [],
};