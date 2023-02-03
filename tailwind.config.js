/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#177ddc',
            },
            fontFamily: {
                itim: ['Itim'],
            },
            fontSize: {
                heading: `${(16 / 1440) * 100}vw`,
                paragraph: `${(12 / 1440) * 100}vw`,
            },
        },
    },
    plugins: [],
};
