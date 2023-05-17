/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light':'#f1d6d9',
        'blue':'#394867',
        'dark-blue':'#212a3e',
        'gray':'#9ba485'
      }
    },

    fontFamily: {
      'permanent':['Permanent','Marker']
    },

    container: {
      center:true
    }
  },
  plugins: [],
}