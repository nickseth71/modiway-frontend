/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit'],
        inter: ['Inter'],
        roboto:['Roboto']
      },
      boxShadow: {
        'text': '0.5px 0 0 black',
      },
      textShadow: {
        'custom': '0.5px 0 0 black',
      },
      zIndex: {
        '100': '100',
      },
      keyframes: {
        'smooth-in-right': {
          '0%': {
            transform: 'translateX(20%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'smooth-in-top': {
          '0%': {
            transform: 'translateY(-2%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'smooth-in-right': 'smooth-in-right 0.7s ease-in-out forwards',
        'smooth-in-top': 'smooth-in-top 0.7s ease-in-out forwards',
      }
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '0.5px 0 0 black',
        },
      });
    },
    
  ],
}
