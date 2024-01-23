import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Add 'Outfit' font
      },
      colors: {
        grey: '#7D889E', // Custom color
      },
      fontSize: {
        custom: '15px', // Custom font size
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      lineHeight: {
        normal: 'normal',
      },
      letterSpacing: {
        custom: '0.188px',
      },
    },
  },
  plugins: [],
};
export default config;
