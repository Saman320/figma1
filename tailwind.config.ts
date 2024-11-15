import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customText: '#21243D',
        myPink: '#F98585',

      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        "customShadow": "0 4px 4px 0 #4141418a",
      },
    },
  },
  plugins: [],
};
export default config;
