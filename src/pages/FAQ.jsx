import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { faqs } from '../data/faqs';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const categories = ['All', 'Farmers', 'Wholesalers', 'General'];

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-[var(--color-primary)] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Frequently Asked <span className="text-[var(--color-accent)]">Questions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-green-100 text-xl font-light mb-12"
                    >
                        Find answers to common questions about our seeds, farming practices, and corporate policies.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-xl mx-auto relative"
                    >
                        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            className="w-full pl-16 pr-6 py-5 rounded-full bg-white text-gray-800 shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-400/20 text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </motion.div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-4 justify-center mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                    ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-500 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {filteredFaqs.length > 0 ? (
                        <div className="space-y-4">
                            {filteredFaqs.map((faq, index) => (
                                <motion.div
                                    key={faq.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFAQ(faq.id)} // Use ID instead of Index to avoid bugs when filtering
                                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-[var(--color-primary)]">
                                                <HelpCircle className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold text-[var(--color-primary)] tracking-wider uppercase mb-1 block">{faq.category}</span>
                                                <span className="text-xl font-bold text-gray-800">{faq.question}</span>
                                            </div>
                                        </div>
                                        {activeIndex === faq.id ? <Minus className="text-[var(--color-primary)]" /> : <Plus className="text-gray-400" />}
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === faq.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-8 pb-8 pt-2 text-gray-600 leading-relaxed text-lg border-t border-gray-50 flex gap-4">
                                                    <div className="w-10 flex-shrink-0"></div>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                                <Search className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">No results found</h3>
                            <p className="text-gray-500">We couldn't find any answers matching your search term.</p>
                            <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="mt-6 text-[var(--color-primary)] font-bold">Clear filters</button>
                        </div>
                    )}
                </div>
            </section>

            {/* Need More Help? */}
            <section className="py-20 bg-[#0f2f1c] text-white overflow-hidden relative">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[var(--color-primary)] rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[var(--color-accent)] rounded-full opacity-10 blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest mb-6">
                            <MessageCircle className="w-4 h-4" />
                            Still Have Questions?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Can't find the answer you're looking for?</h2>
                        <p className="text-gray-300 text-lg mb-12">Our support team is always ready to assist you with technical guidance, product selection, or any other agricultural queries.</p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/contact" className="btn btn-accent px-10 py-4 text-lg border-none text-[#0f2f1c] hover:bg-white shadow-xl">Contact Support</Link>
                            <a href="tel:1800-571-2333" className="btn btn-outline border-white !text-white px-10 py-4 text-lg hover:bg-white hover:text-[#0f2f1c]">Call Us: 1800-571-2333</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
