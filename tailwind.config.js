/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    black: '#0a0a0a',
                    red: '#dc2626',
                    darkred: '#b91c1c',
                },
                neutral: {
                    white: '#ffffff',
                    lightgray: '#f3f4f6',
                    darkgray: '#1f2937',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
