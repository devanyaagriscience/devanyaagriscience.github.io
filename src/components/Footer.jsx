import React from 'react';
import { Link } from 'react-router-dom';
import { Wheat, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { companyInfo } from '../data/mockData';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Wheat className="h-8 w-8 text-[var(--color-accent)]" />
                            <span className="font-heading font-bold text-2xl">
                                Devanya<span className="text-[var(--color-accent)]">Agri</span>
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Empowering farmers with advanced agricultural solutions, high-quality seeds, and sustainable farming practices for a better tomorrow.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Our Products</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Products</h3>
                        <ul className="space-y-3">
                            <li><Link to="/products?cat=fertilizers" className="text-gray-300 hover:text-white transition-colors">Organic Fertilizers</Link></li>
                            <li><Link to="/products?cat=seeds" className="text-gray-300 hover:text-white transition-colors">Hybrid Seeds</Link></li>
                            <li><Link to="/products?cat=pesticides" className="text-gray-300 hover:text-white transition-colors">Bio Pesticides</Link></li>
                            <li><Link to="/products?cat=growth" className="text-gray-300 hover:text-white transition-colors">Growth Promoters</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-[var(--color-accent)] mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{companyInfo.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[var(--color-accent)] flex-shrink-0" />
                                <span className="text-gray-300">{companyInfo.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-[var(--color-accent)] flex-shrink-0" />
                                <span className="text-gray-300">{companyInfo.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Devanya Agri Science. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
