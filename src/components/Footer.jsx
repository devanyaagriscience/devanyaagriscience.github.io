import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const Footer = () => {
    return (
        <footer className="bg-[#0f2f1c] text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <img src="/assets/images/logo.JPG" alt="Devanya Agri Science Logo" className="h-8 w-8 rounded-full object-cover" />
                            <span className="font-heading font-bold text-2xl tracking-tight">
                                Devanya<span className="text-[var(--color-accent)]"> Agri Science</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Pioneering sustainable agriculture through innovation and agricultural excellence. Helping farmers feed the world, responsibly.
                        </p>
                        <div className="flex gap-4">
                            <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href={companyInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white font-heading">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Home</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Our Products</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">About Us</Link></li>
                            <li><Link to="/faq" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">FAQ</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white font-heading">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>{companyInfo.address}</li>
                            <li className="pt-2"><a href={`tel:${companyInfo.phone}`} className="hover:text-white">{companyInfo.phone}</a></li>
                            <li><a href={`mailto:${companyInfo.email}`} className="hover:text-white">{companyInfo.email}</a></li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white font-heading">Business Hours</h4>
                        <p className="text-gray-400 mb-4">Visit our center for expert consultation.</p>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span className="text-white">9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span className="text-white">9:00 AM - 4:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-[var(--color-accent)]">Closed</span>
                            </li>
                        </ul>
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
