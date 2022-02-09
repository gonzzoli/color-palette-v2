const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
    },
    screens: {
      xl: {max: '1100px'},
      lg: {max: '1023px'},
      md: {max: '950px'},
      sm: {max: '550px'},
      xs: {max: '400px'}
    }
  },
  plugins: [require('tailwind-scrollbar')],
}
