/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primary-color)',
        bgColor: 'var(--bg-color)',
        textColor: 'var(--text-color)',
      },
    },
  },
  plugins: [],
};
