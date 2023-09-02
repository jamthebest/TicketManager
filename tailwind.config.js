/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'class',
    content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(({ addBase, theme }) => {
            addBase({
                html: { color: theme('colors.zinc.50') },
            });
        }),
    ],
};
