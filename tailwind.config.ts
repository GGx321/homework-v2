import type { Config } from 'tailwindcss';

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#252525',
        'purple-text': '#d9b0ff',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
} satisfies Config;

