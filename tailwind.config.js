/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      padding: {
        '5p': '15%',
      },
      boxShadow: {
        'custom': '0 6px 10px -3px rgba(0, 0, 0, .2)',
      }
    },
  },
  plugins: [],
}

