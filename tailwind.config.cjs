/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#457b9d',
        'secondary': '#1d3557',
        'sky':'#f1faee',
        'details': '#E2F4FF',
        'error': '#e63946',
        'success': '#19D076',
        'text1': '#292D32',
        'text2': '#ffffff',
        'text3': '#ff77e9',
        'dark1': '#201E34',
        'dark2': '#282541',
        'dark_bg': '#1C1A2E',
        'dark_shade': '#1E1C30',
        'key_black': '#363A3F',
        'gray1': '#595959',
        'gray2': '#F8F8F8',
        'gray3': '#F5F5F5',
        'border':'#A5A5A5',
      },
      fontFamily: {
        'title':['Oxygen', 'sans-serif'],
        
  
      },
    },
    cursor:{
      "loading":"url(hand.cur),pointer"
    }
  },
  plugins: [],
}
