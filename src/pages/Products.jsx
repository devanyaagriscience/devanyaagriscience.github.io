import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/mockData';
import { Filter, Star } from 'lucide-react';

const Products = () => {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('cat');
    const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-[var(--color-primary)] text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Our Products</h1>
                    <p className="max-w-xl mx-auto text-green-100">Browse our range of premium agricultural products essential for your farming success.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8">
                {/* Filter Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 text-gray-500 font-medium mr-4">
                        <Filter className="w-5 h-5" /> Filter by:
                    </div>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${(activeCategory === cat || (cat === 'All' && !activeCategory))
                                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                {/* Placeholder for real image */}
                                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                                    <span className="sr-only">{product.name} Image</span>
                                    <span className="font-bold text-3xl opacity-20">{product.name.charAt(0)}</span>
                                </div>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                                    <button className="btn btn-primary bg-white text-[var(--color-primary)] w-full text-sm py-2">View Details</button>
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-2">{product.category}</div>
                                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[var(--color-primary)] transition-colors">{product.name}</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{product.description}</p>

                                <div className="mt-auto pt-4 border-t border-gray-50">
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {product.features.slice(0, 2).map((feature, i) => (
                                            <span key={i} className="px-2 py-1 bg-green-50 text-green-700 rounded-md">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
