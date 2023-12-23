/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'monserrat': ['"Montserrat Variable"', 'sans-serif']
      },
      colors: {
        'btn-color': '#275A53',
        'cart-color': '#FDFDFD',
        'body-color': '#F1F6F4',
      },
      screens: {
        'xsm': '375px',
      }
    },
    

  },
  plugins: [],
}
