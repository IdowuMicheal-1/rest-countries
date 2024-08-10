/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        dark_blue_dark:'hsl(209, 23%, 22%)',
        very_dark_blue_dark:'hsl(207, 26%, 17%)',
        very_dark_blue_light:'hsl(200, 15%, 8%)',
        dark_gray_light:'hsl(0, 0%, 52%)',
        very_dark_gray_light:'hsl(0, 0%, 98%)',
        white:'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        'sans' : ['Nunito Sans'],
      }
    },
  },
  plugins: [],
}

