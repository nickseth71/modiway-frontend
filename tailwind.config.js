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
        'text': '0.5px 0 0 currentColor',
      },
      textShadow: {
        'custom': '0.5px 0 0 currentColor',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '0.5px 0 0 currentColor',
        },
      });
    },
  ],
}
