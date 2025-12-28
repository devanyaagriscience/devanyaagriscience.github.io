import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/mockData';
import { Filter, Star, Search, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('cat');
    const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        if (categoryParam) setActiveCategory(categoryParam);
    }, [categoryParam]);

    return (
        <div className="min-h-screen bg-[var(--color-surface)] pb-20 pt-20">
            {/* Header */}
            <div className="bg-[#0f2f1c] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-58f21a408730?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f1c] to-transparent"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Our Products
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-xl mx-auto text-gray-300 text-lg"
                    >
                        Browse our range of high-performance, organic agricultural inputs verified for quality and sustainability.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8 relative z-20">
                {/* Controls Bar */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mb-12">
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                        {/* Categories */}
                        <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start w-full md:w-auto">
                            <div className="flex items-center gap-2 text-gray-400 font-medium mr-2">
                                <Filter className="w-4 h-4" /> <span className="text-sm">Filter:</span>
                            </div>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                                        ? 'bg-[var(--color-primary)] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col h-full"
                            >
                                <div className="h-64 bg-gray-100 relative overflow-hidden">
                                    {/* Image Placeholder */}
                                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                                        <ShoppingBag className="w-12 h-12 opacity-20" />
                                    </div>

                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)] shadow-sm">
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 backdrop-blur-[2px]">
                                        <button
                                            onClick={() => setSelectedProduct(product)}
                                            className="btn bg-white text-[var(--color-primary)] hover:bg-[var(--color-accent)] w-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                        >
                                            Quick View
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-[var(--color-primary-dark)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">{product.name}</h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

                                    <div className="mt-auto pt-4 border-t border-gray-50">
                                        <div className="flex flex-wrap gap-2 text-xs">
                                            {product.features.slice(0, 2).map((feature, i) => (
                                                <span key={i} className="px-2 py-1 bg-green-50 text-green-700 rounded-md font-medium">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                            className="mt-6 text-[var(--color-primary)] font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>

            {/* Quick View Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden relative z-10 grid md:grid-cols-2 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-colors z-20"
                            >
                                <X className="w-6 h-6 text-gray-800" />
                            </button>

                            <div className="bg-gray-100 min-h-[300px] md:h-full relative flex items-center justify-center p-10">
                                <ShoppingBag className="w-32 h-32 text-gray-300" />
                            </div>

                            <div className="p-8 md:p-10">
                                <span className="text-[var(--color-accent)] font-bold text-sm tracking-widest uppercase mb-2 block">{selectedProduct.category}</span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary-dark)]">{selectedProduct.name}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">{selectedProduct.description}</p>

                                <div className="mb-8">
                                    <h4 className="font-bold text-gray-900 mb-4">Key Features</h4>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {selectedProduct.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700">
                                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                    <Star className="w-3.5 h-3.5 text-[var(--color-primary)] fill-current" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4">
                                    <button className="btn btn-primary flex-1 shadow-lg py-4 text-lg">
                                        Enquire Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Products;
