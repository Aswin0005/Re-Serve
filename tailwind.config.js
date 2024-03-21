/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-opac': 'rgba(190, 190, 190,0.5)',
      },
      fontFamily: {
        poppins: 'Poppins',
      },
      backgroundImage: {
        'yellow-white-pattern': "url('/src/Images/Background.jpg')",
      },
    },
  },
  plugins: [],
};
