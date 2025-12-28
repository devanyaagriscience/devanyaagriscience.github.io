import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Wheat, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0f2f1c] text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <Wheat className="h-8 w-8 text-[var(--color-accent)]" />
                            <span className="font-heading font-bold text-2xl tracking-tight">
                                Devanya<span className="text-[var(--color-accent)]">Agri</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Pioneering sustainable agriculture through innovation and organic excellence. Helping farmers feed the world, responsibly.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white font-heading">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Home</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Our Products</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Services</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white font-heading">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>123 Green Valley, Agri Park</li>
                            <li>Nashik, Maharashtra, India</li>
                            <li className="pt-2"><a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a></li>
                            <li><a href="mailto:info@devanyaagriscience.com" className="hover:text-white">info@devanyaagriscience.com</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white font-heading">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to receive updates on new products and farming tips.</p>
                        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-[var(--color-accent)] text-white placeholder-gray-500 transition-colors"
                            />
                            <button type="submit" className="btn btn-accent w-full justify-center">
                                Subscribe <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Devanya Agri Science. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
