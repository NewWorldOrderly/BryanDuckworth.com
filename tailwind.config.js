module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface': '#eaeaea',
        'onSurface': '#461851',
        'onSurface-alt': '#70A026'
      },
      backgroundImage: {
        'animal-collective': 'url("../public/animal-collective.jpeg")',
      }
    },
  },
  plugins: [],
}