/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            dark: '#212934',
            white: '#FFFFFF',
            green: '#59AB6E',
            snow: '#EFEFEF',
            snow2: '#E9EEF5',
            gray: '#3C4043',
         },
      },
   },
   plugins: [],
};
