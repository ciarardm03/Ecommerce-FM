/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [ 'class' ],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      colors: {
        primaryOrange: 'hsl(var(--primary-orange))',
        primaryPaleOrange: 'hsl(var(--primary-pale-orange))',
        neutralVeryDarkBlue: 'hsl(var(--neutral-very-dark-blue))',
        neutralDarkGrayishBlue: 'hsl(var(--neutral-dark-grayish-blue))',
        neutralGrayishBlue: 'hsl(var(--neutral-grayish-blue))',
        neutralLightGrayishBlue: 'hsl(var(--neutral-light-grayish-blue))',
        neutralWhite: 'hsl(var(--neutral-white))',
        neutralBlack: 'hsl(var(--neutral-black))',
      },
      spacing:{
        xs: '8px',
        sm: '15px',
        md: '30px',
        lg: '60px',
      },
      screens:{
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536',
      }
    },
  },
  plugins: [ require('tailwindcss-animate') ],
}


