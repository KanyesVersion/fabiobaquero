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
      dev: {
        "red-border": 'border: 1px solid red'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.red-border': {
          border: '1px solid red',
        },
      })
    }
  ],
}

