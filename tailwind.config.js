/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8c3130',
        secondary: '#e8a87c',
        accent: '#d4b08c',
        background: '#faf7f2',
        dark: '#392f2d',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};