/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: '#app',
  content: [
    './.vitepress/theme/theme-components/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}