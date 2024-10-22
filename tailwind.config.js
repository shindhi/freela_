/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '1fr minmax(20rem, 22rem)',
      },
      lineHeight: {
        96: '24rem',
      },
    },
  },
  plugins: [],
}
