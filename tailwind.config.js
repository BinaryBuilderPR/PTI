/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
       
        'red':'#ff000e',
        'blue': {
          100: '#1d1c3e',        
          500: '#2b3493',
          800:'#25245e'
          
        },
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        // You can add more font families if needed
      },
    }
  },
  plugins: [],
}

