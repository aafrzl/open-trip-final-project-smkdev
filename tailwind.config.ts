import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#FF385C',
      },
      backgroundImage: {
        'hero-bg': "url('.//../public/images/hero-image.jpg')",
        'login-bg': "url('.//../public/images/login-background.png')",
        'register-bg': "url('.//../public/images/register-bg.jpg')"
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
