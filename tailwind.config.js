/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '639px'},   // Small screens, up to 639px
        'md': {'max': '767px'},   // Medium screens, up to 767px
        'lg': {'max': '1023px'},  // Large screens, up to 1023px
        'xl': {'max': '1279px'},  // Extra large screens, up to 1279px
        '2xl': {'max': '1535px'}, // 2 Extra large screens, up to 1535px
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
