module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'animal-collective': 'url("../public/animal-collective.jpeg")',
      }
    },
  },
  plugins: [],
}