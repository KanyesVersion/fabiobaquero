/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "header-height": '80px'
      },
      colors: {
        "beige1": 'rgb(225,207,169)',
        "redbrown1": 'rgb(116, 49, 22)'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDownSlow: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-80px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 200ms ease-out',
        slideDownSlow: 'slideDown 600ms ease-out',
        slideRight: 'slideRight 600ms ease-out',
        fadeIn: 'fadeIn 600ms ease-out'
      },
      dev: {
        "red-border": 'border: 1px solid red'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.red-border': {
          border: '1px solid red',
        },
        '.full-section': {
          height: `calc(100vh - ${theme('spacing.header-height')})`,
        },
      });
    },
  ],
}

