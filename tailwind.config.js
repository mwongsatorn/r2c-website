module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        encodes: ['Encode Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      },
    },
  },
  plugins: [],
}
