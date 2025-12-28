import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { companyInfo, faqs } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-[var(--color-surface)] pt-20">
            {/* Header */}
            <div className="bg-[#0f2f1c] text-white py-24 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary-light)] rounded-full opacity-10 blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-20 relative z-10 mb-24">
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row shadow-green-900/10">

                    {/* Contact Info Side */}
                    <div className="md:w-5/12 bg-[var(--color-primary)] p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)] opacity-10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 font-heading">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">Phone</p>
                                        <p className="text-xl font-semibold">{companyInfo.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">Email</p>
                                        <p className="text-xl font-semibold">{companyInfo.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">Address</p>
                                        <p className="text-lg font-semibold leading-relaxed">{companyInfo.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16">
                                <p className="text-gray-400 text-sm mb-6">Follow us for updates</p>
                                <div className="flex gap-4">
                                    {['FB', 'IG', 'TW', 'LI'].map((social) => (
                                        <button key={social} className="w-10 h-10 bg-white/10 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 flex items-center justify-center font-bold text-xs ring-1 ring-white/10">
                                            {social}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-7/12 p-12 bg-white relative">
                        <h3 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-2">Send us a Message</h3>
                        <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

                        <form onSubmit={handleSubmit} className="space-y-6 relative">
                            {formStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center rounded-xl"
                                >
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                        <CheckIcon className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                                    <p className="text-gray-600">We'll be in touch shortly.</p>
                                </motion.div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all bg-white">
                                    <option>General Inquiry</option>
                                    <option>Product Support</option>
                                    <option>Sales & Partnerships</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea rows="4" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all resize-none"></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className={`btn btn-primary w-full py-4 text-lg justify-center shadow-lg hover:shadow-xl transition-all ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                {!formStatus === 'submitting' && <Send className="w-5 h-5 ml-2" />}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* FAQ Section */}
            <div className="container mx-auto px-4 mb-24">
                <div className="text-center mb-12">
                    <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm bg-green-50 px-3 py-1 rounded-full">Support</span>
                    <h2 className="text-3xl font-bold mt-4 text-[var(--color-text)]">Frequently Asked Questions</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <MessageCircle className="w-5 h-5 text-[var(--color-primary)]" />
                                    {faq.question}
                                </div>
                                {openFaq === faq.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                            </button>
                            <AnimatePresence>
                                {openFaq === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed pl-14 border-t border-gray-50 bg-gray-50/50">
                                            <div className="pt-4">{faq.answer}</div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Simple check icon component for local use
const CheckIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

export default Contact;
