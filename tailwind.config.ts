import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['"Jost"', 'sans-serif'],
        rubikmono: ['"Rubik Mono One"', 'sans-serif'],
      },
    },
  },
};

export default config;