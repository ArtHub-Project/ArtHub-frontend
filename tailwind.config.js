/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#CF1CB6',

          80: '#A3068D',
        },
      },
    },
  },
  plugins: [require('daisyui')],
}
