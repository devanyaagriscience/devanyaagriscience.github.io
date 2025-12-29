import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
    const [theme, setTheme] = useTheme();

    const cycleTheme = () => {
        if (theme === 'system') setTheme('light');
        else if (theme === 'light') setTheme('dark');
        else setTheme('system');
    };

    return (
        <button
            onClick={cycleTheme}
            className="p-2 rounded-full hover:bg-[var(--color-secondary)]/10 transition-colors text-[var(--color-primary)] relative overflow-hidden group"
            aria-label="Toggle Theme"
            title={`Current theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'light' && <Sun size={20} />}
                    {theme === 'dark' && <Moon size={20} />}
                    {theme === 'system' && <Monitor size={20} />}
                </motion.div>
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
};

export default ThemeToggle;
