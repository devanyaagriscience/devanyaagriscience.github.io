import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QuickContact from './QuickContact';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen font-body text-gray-800 bg-[var(--color-bg)]">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <QuickContact />
            <Footer />
        </div>
    );
};

export default Layout;
