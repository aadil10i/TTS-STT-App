/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        pop: ['poppins', 'sans-serif'],
      },
      colors: {
        sidebar: '#0C0A09',
      },
    },
  },
  plugins: [],
};
