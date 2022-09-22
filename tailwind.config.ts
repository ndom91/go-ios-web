/** @type {import('tailwindcss').Config} */
export default {
  presets: [],
  content: [
    './components/**/*.{vue,mjs,ts}',
    './layouts/**/*.{vue,mjs,ts}',
    './pages/**/*.{vue,mjs,ts}',
    './composables/**/*.{vue,js,ts}',
    './plugins/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
