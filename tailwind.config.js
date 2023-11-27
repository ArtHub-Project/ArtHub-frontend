/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { 'regal-blue': '#243c5a' },
      fontFamily: {
        LineBold: ['"LINESeedSansBold"'],
        LineRegular: ['"LINESeedSansRegular"'],
        InterSemiBold: ['"Inter"', 'sans-serif'],
        InterExtraLight: ['"Inter"', 'sans-serif'],
      },
      primary: {
        50: '#CF1CB6',

        80: '#A3068D',
      },
    },
  },
  plugins: [require('daisyui')],
}
