const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily:{
         Karla: ['Karla','sans-serif']
      },
      colors:{       
        'coffee':{
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn:{
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
      },
      backgroundImage:{
        'slider-bg':'url("./img/slider-bg.jpeg.jpg")',
        'coffee-card-01':'url("./img/featured-mug-01.jpg")',
        'coffee-card-02':'url("./img/featured-mug-02.jpg")',
        'coffee-card-03':'url("./img/featured-mug-03.jpg")',
        'coffee-card-04':'url("./img/featured-mug-04.jpg")',
        'coffee-card-05':'url("./img/featured-mug-05.jpg")',
        'coffee-card-06':'url("./img/featured-mug-06.jpg")',
        'coffee-card-07':'url("./img/featured-mug-07.jpg")',
        'coffee-card-08':'url("./img/featured-mug-08.jpg")',
        'coffee-card-09':'url("./img/featured-mug-09.jpg")',
        'coffee-card-10':'url("./img/featured-mug-01.jpg")',
        'coffee-card-11':'url("./img/featured-mug-11.jpg")',
        

        
      }
    },
  },
  plugins: [],
}