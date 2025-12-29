import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube, Check } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('idle');
        setErrorMessage('');

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const phone = formData.get('phone');

        // Validation: Either Email or Phone
        if (!email && !phone) {
            setFormStatus('error');
            setErrorMessage('Please provide either an email address or a phone number.');
            return;
        }

        // Validation: Phone format if provided
        if (phone) {
            if (!phone.startsWith('+91')) {
                setFormStatus('error');
                setErrorMessage('Mobile number must start with +91');
                return;
            }
            if (phone.length < 13) { // +91 + 10 digits = 13
                setFormStatus('error');
                setErrorMessage('Please enter a valid mobile number starting with +91');
                return;
            }
        }

        setFormStatus('submitting');

        // NOTE: To implement actual mailing facility on a static site:
        // Option 1: Use EmailJS (https://www.emailjs.com/) - Free tier available, works client-side.
        // Option 2: Use Formspree (https://formspree.io/) - Simple form backend, just change <form> action.

        // Simulating API call for now
        setTimeout(() => {
            setFormStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
            e.target.reset();
        }, 1500);
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
                                    <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 flex items-center justify-center ring-1 ring-white/10">
                                        <Facebook size={18} />
                                    </a>
                                    <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 flex items-center justify-center ring-1 ring-white/10">
                                        <Twitter size={18} />
                                    </a>
                                    <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 flex items-center justify-center ring-1 ring-white/10">
                                        <Instagram size={18} />
                                    </a>
                                    <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 flex items-center justify-center ring-1 ring-white/10">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href={companyInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 flex items-center justify-center ring-1 ring-white/10">
                                        <Youtube size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-7/12 p-12 py-16 bg-white relative">
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
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                                    <p className="text-gray-600">We'll be in touch shortly.</p>
                                </motion.div>
                            )}

                            {formStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 text-sm mb-4"
                                >
                                    {errorMessage}
                                </motion.div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                    <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all" placeholder="Optional if phone provided" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all" placeholder="+91..." />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                <select name="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all bg-white">
                                    <option>General Inquiry</option>
                                    <option>Product Support</option>
                                    <option>Sales & Partnerships</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea name="message" rows="4" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-green-50 outline-none transition-all resize-none"></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className={`btn btn-primary w-full py-4 text-lg justify-center shadow-lg hover:shadow-xl transition-all ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                {formStatus !== 'submitting' && <Send className="w-5 h-5 ml-2" />}
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-4">
                                * Either Email or Phone (+91) is required.
                            </p>
                        </form>
                    </div>

                </div>
            </div>


        </div>
    );
};

// Simple check icon component removed as it is imported from lucide-react now.
export default Contact;
