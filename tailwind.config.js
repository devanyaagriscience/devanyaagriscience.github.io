/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Extending the theme to match the CSS variables I defined if needed, 
                // but since I used arbitrary values or standard classes in components, this is just for safety.
                primary: 'var(--color-primary)',
                'primary-light': 'var(--color-primary-light)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                'bg-main': 'var(--color-bg)',
            },
            fontFamily: {
                // Mapping the font variables
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
