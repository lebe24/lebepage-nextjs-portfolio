module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens:{
        xs: {max : "640px"},

        sm: {min:"640px", max: "767px"},
  
        // md: {min:"768px" , max:"1024px"},
  
        // lg: {min:"1024px",max : "1279px"},
  
        // xl: {min:"1280px"},
      },

      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        input: '#2A2A35'
      },

      fontFamily: {
        poppins: ["'Poppins'", 'sans-serif']
      }
    },
    
  },
  plugins: [],
}
