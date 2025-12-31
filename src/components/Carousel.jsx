import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ items, renderItem, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
        }
        return 1;
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setVisibleItems(3);
            else if (window.innerWidth >= 768) setVisibleItems(2);
            else setVisibleItems(1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = items.length - visibleItems;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    if (!items || items.length === 0) return null;

    // gap-6 is 24px
    const gap = 24;

    return (
        <div className={`relative group ${className}`}>
            <div className="overflow-hidden">
                <motion.div
                    className="flex gap-6"
                    initial={false}
                    animate={{ x: `calc(-${currentIndex} * ((100% - ${(visibleItems - 1) * gap}px) / ${visibleItems} + ${gap}px))` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                minWidth: `calc((100% - ${(visibleItems - 1) * gap}px) / ${visibleItems})`,
                                maxWidth: `calc((100% - ${(visibleItems - 1) * gap}px) / ${visibleItems})`
                            }}
                            className="flex-shrink-0"
                        >
                            {renderItem(item)}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Buttons - Show only if there are more items than visible */}
            {items.length > visibleItems && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:text-[var(--color-primary)] hover:scale-110 transition-all z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:text-[var(--color-primary)] hover:scale-110 transition-all z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}
        </div>
    );
};

export default Carousel;
