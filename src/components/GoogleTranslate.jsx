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

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (lang) => {
        handleLanguageChange(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Hidden container for the original widget */}
            <div id="google_translate_element" className="absolute opacity-0 w-0 h-0 overflow-hidden pointer-events-none" />

            {/* Dropdown Trigger */}
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-sm transition-all text-sm font-medium text-gray-700"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                <span>{currentLang === 'en' ? 'English' : 'हिंदी'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 animate-in fade-in slide-in-from-top-2">
                    <button
                        onClick={() => selectLanguage('en')}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${currentLang === 'en' ? 'text-[var(--color-primary)] font-bold' : 'text-gray-600'}`}
                    >
                        English
                        {currentLang === 'en' && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>}
                    </button>
                    <button
                        onClick={() => selectLanguage('hi')}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${currentLang === 'hi' ? 'text-[var(--color-primary)] font-bold' : 'text-gray-600'}`}
                    >
                        हिंदी
                        {currentLang === 'hi' && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>}
                    </button>
                </div>
            )}
        </div>
    );
};

export default GoogleTranslate;
