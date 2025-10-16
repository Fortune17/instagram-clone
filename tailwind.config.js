import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        background: '#fafafa',
        surface: '#ffffff',
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(0, 0, 0, 0.06)',
        card: '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [forms],
}