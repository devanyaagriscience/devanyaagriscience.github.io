import React, { useEffect, useState } from 'react';

const GoogleTranslate = () => {
    const [currentLang, setCurrentLang] = useState('en');

    useEffect(() => {
        // Define the global callback function if it doesn't exist
        if (!window.googleTranslateElementInit) {
            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'en,hi',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,
                    },
                    'google_translate_element'
                );
            };
        }

        // Check if script is already injected
        const existingScript = document.getElementById('google-translate-script');
        if (!existingScript) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        }

        // Initialize state based on cookie
        const match = document.cookie.match(/(^|;\s*)googtrans=([^;]*)/);
        if (match) {
            // Cookie format is usually /en/hi so we want the last part
            const lang = match[2].split('/').pop();
            setCurrentLang(lang === 'hi' ? 'hi' : 'en');
        }
    }, []);

    const handleLanguageChange = (lang) => {
        // Prepare the cookie value. Format is /source/target or /target
        // For our case: /en/hi or /en/en
        const cookieValue = `/en/${lang}`;

        // Set the cookie for the root domain and path to ensure it sticks
        document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
        document.cookie = `googtrans=${cookieValue}; path=/`;

        setCurrentLang(lang);
        window.location.reload();
    };

    return (
        <div className="flex items-center gap-2">
            {/* Hidden container for the original widget */}
            <div id="google_translate_element" className="absolute opacity-0 w-0 h-0 overflow-hidden pointer-events-none" />

            {/* Custom Toggle UI */}
            <div className="flex items-center bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full p-1 shadow-sm">
                <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${currentLang === 'en'
                        ? 'bg-[var(--color-primary)] text-white shadow-md'
                        : 'text-gray-500 hover:text-[var(--color-primary)]'
                        }`}
                >
                    EN
                </button>
                <button
                    onClick={() => handleLanguageChange('hi')}
                    className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${currentLang === 'hi'
                        ? 'bg-[var(--color-primary)] text-white shadow-md'
                        : 'text-gray-500 hover:text-[var(--color-primary)]'
                        }`}
                >
                    HI
                </button>
            </div>
        </div>
    );
};

export default GoogleTranslate;
