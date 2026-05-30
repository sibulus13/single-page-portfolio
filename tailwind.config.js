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
        plum: {
          50:  '#FBF0FB',
          100: '#F4D8F4',
          200: '#E5AFDF',
          300: '#D180CA',
          400: '#C084C8',
          500: '#A865A0',
          600: '#8E4585',
          700: '#7A3573',
          800: '#641F5E',
          900: '#4E1A4A',
          950: '#371433',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['Satoshi', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  safelist: [
    'py-1', 'pt-2', 'pt-4', 'py-2', 'py-4',
    'underline', 'px-40',
    'aspect-square', 'rounded-3xl', 'object-cover',
  ],
  plugins: [],
};
