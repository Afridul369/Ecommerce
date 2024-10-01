/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        headerc: '1600px',
      },
      fontFamily: {
        dm: ['DM Sans'],
        
      },
      colors: {
        headeingC: '#767676',
        hoverheadeingC: '#262626',
        categorybg: '#F5F5F3',
      },
    },
  },
  plugins: [],
}

