import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#fdfdfc] overflow-hidden pt-20">
            {/* Background blobs */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--color-primary-light)]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-[var(--color-primary)] font-semibold text-sm mb-6 border border-green-100">
                            <Leaf className="w-4 h-4" />
                            <span>Sustainable Agriculture Solutions</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-[var(--color-primary-dark)]">
                            Cultivating the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
                                Future of Farming
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                            Empowering farmers with <strong>research-driven innovation</strong>, advanced sustainable solutions, and expert agronomy to maximize yield while preserving nature.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/products" className="btn btn-primary shadow-lg shadow-green-900/20 group">
                                Explore Products
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/services" className="btn btn-outline hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)]">
                                Our Services
                            </Link>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
                            <div>
                                <h3 className="text-3xl font-bold text-[var(--color-primary)]">20+</h3>
                                <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-[var(--color-primary)]">5k+</h3>
                                <p className="text-sm text-gray-500 font-medium">Farmers Helped</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-[var(--color-primary)]">100%</h3>
                                <p className="text-sm text-gray-500 font-medium">Quality Inputs</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-green-900/10 border-4 border-white">
                            {/* Placeholder for Hero Image - In a real app, use a high quality image */}
                            <div className="bg-gray-200 h-[600px] w-full flex items-center justify-center relative bg-[url('https://images.unsplash.com/photo-1625246333195-58f21a408730?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white p-6 glass-card rounded-2xl border-0 bg-white/10 backdrop-blur-md">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-2 bg-[var(--color-accent)] rounded-full">
                                            <ShieldCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Certified Quality</p>
                                            <p className="text-sm text-gray-200">International Standards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl z-20 max-w-[200px]"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Sun className="w-8 h-8 text-amber-500" />
                                <span className="font-bold text-gray-800">Growth Partner</span>
                            </div>
                            <p className="text-xs text-gray-500">Helping your crops reach their full potential.</p>
                        </motion.div>

                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dots-pattern opacity-20 z-0"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
