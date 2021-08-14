module.exports = {
    darkMode: false, // or 'media' or 'class'
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    green: '#34846F',
                    dark: '#364B44',
                    gray: '#98B0A8',
                    blue: '#457BA9',
                    lightBlue: '#7DB0E0',
                },
                shades: {
                    1: '#509E88',
                    2: '#6BBAA3',
                    3: '#86D6BE',
                    4: '#A2F2DA',
                },
                dustWhite: '#F3F0FF',
                darker: '#364B44',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['disabled'],
        },
    },
    plugins: [],
};

// https://mycolor.space/?hex=%2334846F&sub=1
