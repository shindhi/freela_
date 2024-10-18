/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '1fr minmax(18rem, 20rem)',
      },
    },
  },
  plugins: [],
}
