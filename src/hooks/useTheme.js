import { useState, useEffect } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    );

    useEffect(() => {
        const element = document.documentElement;
        const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

        function onWindowMatch() {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
                element.classList.add('dark');
            } else {
                element.classList.remove('dark');
            }
        }

        onWindowMatch();

        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else if (theme === 'light') {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.removeItem('theme');
            onWindowMatch();
        }

        const listener = (e) => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    element.classList.add('dark');
                } else {
                    element.classList.remove('dark');
                }
            }
        }

        darkQuery.addEventListener('change', listener);
        return () => darkQuery.removeEventListener('change', listener);
    }, [theme]);

    return [theme, setTheme];
};

export default useTheme;
