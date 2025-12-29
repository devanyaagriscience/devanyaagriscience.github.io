import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, Download, Leaf, Droplets, Sun, Info, X, ShoppingBag, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('cat');
    const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (product) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedProduct && selectedProduct.images.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedProduct && selectedProduct.images.length > 1) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
        }
    };

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
                        className="max-w-xl mx-auto text-gray-300 text-lg font-light"
                    >
                        Browse our range of high-performance, sustainable agricultural inputs verified for quality and scientific excellence.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-12 relative z-20">
                {/* Controls Bar */}
                <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 mb-16">
                    <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
                        {/* Categories */}
                        <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start w-full lg:w-auto">
                            <div className="flex items-center gap-2 text-gray-400 font-bold mr-4 uppercase text-xs tracking-widest">
                                <Filter className="w-4 h-4" /> <span>Filter by</span>
                            </div>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                        ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-green-900/20 scale-105'
                                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full lg:w-96 group">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[var(--color-primary)] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search products, seeds, or benefits..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[var(--color-primary)]/10 focus:bg-white outline-none transition-all font-medium"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group flex flex-col h-full"
                            >
                                <div className="h-72 bg-gray-50 relative overflow-hidden">
                                    <img
                                        src={product.images && product.images.length > 0 ? product.images[0] : product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center hidden">
                                        <ShoppingBag className="w-16 h-16 text-gray-300 opacity-30" />
                                    </div>

                                    <div className="absolute top-6 left-6 z-10">
                                        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-black text-[var(--color-primary)] shadow-sm">
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Quick View Button */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                        <button
                                            onClick={() => openModal(product)}
                                            className="bg-white text-[var(--color-primary-dark)] px-6 py-3 rounded-xl font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[var(--color-primary)] hover:text-white"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">{product.name}</h3>
                                    <p className="text-gray-500 text-base mb-6 line-clamp-2 leading-relaxed">{product.description}</p>

                                    <div className="mt-auto space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {product.features.slice(0, 3).map((feature, i) => (
                                                <span key={i} className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-bold uppercase tracking-wider">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                                            <button
                                                onClick={() => openModal(product)}
                                                className="text-[var(--color-primary)] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                                            >
                                                Learn More <ArrowRight className="w-4 h-4" />
                                            </button>
                                            <a
                                                href={product.brochureUrl}
                                                className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm"
                                                title="Download Brochure"
                                            >
                                                <Download className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-32"
                    >
                        <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-300">
                            <Search className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">No results found</h3>
                        <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">We couldn't find any products matching your criteria. Try different keywords or filters.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                            className="btn btn-primary px-8 py-3 rounded-xl shadow-lg"
                        >
                            Reset All Filters
                        </button>
                    </motion.div>
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
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            className="bg-white rounded-[3rem] shadow-2xl w-full max-w-5xl overflow-hidden relative z-10 grid md:grid-cols-2 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-2xl hover:bg-white transition-all z-20 shadow-xl"
                            >
                                <X className="w-6 h-6 text-gray-800" />
                            </button>

                            <div className="bg-gray-50 min-h-[400px] md:h-full relative flex items-center justify-center p-0 overflow-hidden group/image">
                                <img
                                    src={selectedProduct.images && selectedProduct.images.length > 0 ? selectedProduct.images[currentImageIndex] : selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-contain md:object-cover transition-opacity duration-300"
                                    key={currentImageIndex}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gray-50 flex items-center justify-center hidden">
                                    <ShoppingBag className="w-48 h-48 text-gray-200" />
                                </div>
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center gap-2">
                                    {selectedProduct.images && selectedProduct.images.length > 1 && (
                                        <div className="flex gap-2 bg-black/20 backdrop-blur-sm p-1 rounded-full">
                                            {selectedProduct.images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                                    className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {selectedProduct.images && selectedProduct.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg opacity-0 group-hover/image:opacity-100 transition-opacity"
                                        >
                                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg opacity-0 group-hover/image:opacity-100 transition-opacity"
                                        >
                                            <ChevronRight className="w-6 h-6 text-gray-800" />
                                        </button>
                                    </>
                                )}

                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg text-sm font-black text-[var(--color-primary)] uppercase tracking-widest">
                                        Verified Quality
                                    </span>
                                </div>
                            </div>

                            <div className="p-10 md:p-16 flex flex-col">
                                <div className="mb-auto">
                                    <span className="text-[var(--color-accent-dark, #854d0e)] font-black text-xs tracking-[0.2em] uppercase mb-4 block">{selectedProduct.category}</span>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">{selectedProduct.name}</h2>
                                    <p className="text-gray-600 text-xl leading-relaxed mb-10">{selectedProduct.description}</p>

                                    <div className="mb-12">
                                        <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Technical Specifications</h4>
                                        <ul className="grid grid-cols-1 gap-4">
                                            {selectedProduct.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-4 text-gray-700 group">
                                                    <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                                                        <Star className="w-4 h-4 text-[var(--color-primary)] group-hover:text-white transition-colors fill-current" />
                                                    </div>
                                                    <span className="text-lg font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-10 border-t border-gray-100">
                                    <Link to="/contact" className="btn btn-primary flex-1 shadow-2xl py-5 text-xl rounded-2xl">
                                        Enquire Now
                                    </Link>
                                    <a
                                        href={selectedProduct.brochureUrl}
                                        className="btn bg-gray-50 text-gray-800 hover:bg-gray-100 flex items-center justify-center gap-3 px-8 rounded-2xl border border-gray-100 transition-all font-bold"
                                    >
                                        <Download className="w-5 h-5" /> Brochure
                                    </a>
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
