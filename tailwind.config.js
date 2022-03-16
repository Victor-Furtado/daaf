module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: '#FFDCDC',
        secondary: '#3C3838',
        footer: '#6804bc'
      },
      fontFamily: {
        title: ["Abel", 'sans-serif'],
        paragraph: ["Advent Pro", 'sans-serif']
      }
    },
  },
  plugins: [],
  images: {
    domains: ['placeholder.com'],
  },
}
