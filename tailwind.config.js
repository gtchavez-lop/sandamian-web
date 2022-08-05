/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: '#c084fc',
          secondary: '#f472b6',
          accent: '#67e8f9',
          neutral: '#e5e7eb',
          'base-100': '#F6F4F3',
          info: '#3194F6',
          success: '#a3e635',
          warning: '#fde047',
          error: '#ef4444',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
