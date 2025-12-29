import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube, Check, Clock, Globe } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { motion } from 'framer-motion';

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

        // Simulating API call for now
        setTimeout(() => {
            setFormStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
            e.target.reset();
        }, 1500);
    };

    return (
        <div className="bg-gray-50 pb-8">
            {/* Header */}
            <div className="bg-[#0f2f1c] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-5848c4286ae7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f1c] to-transparent"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        We are here to help you grow. Reach out to us for any queries, partnerships, or support.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Cards */}
                    <motion.a
                        href={`tel:${companyInfo.phone}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-100 transition-all group"
                    >
                        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                        <p className="text-gray-500 mb-4 text-sm">Mon-Sat from 9am to 6pm</p>
                        <p className="text-lg font-bold text-[var(--color-primary)]">{companyInfo.phone}</p>
                    </motion.a>

                    <motion.a
                        href={`mailto:${companyInfo.email}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-100 transition-all group"
                    >
                        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                        <p className="text-gray-500 mb-4 text-sm">We'll respond within 24 hours</p>
                        <p className="text-lg font-bold text-blue-600 truncate">{companyInfo.email}</p>
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-100 transition-all group"
                    >
                        <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
                        <p className="text-gray-500 mb-4 text-sm">Come say hello at our HQ</p>
                        <p className="text-lg font-medium text-gray-700 leading-snug">{companyInfo.address}</p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Message Form */}
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"></div>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a Message</h2>
                            <p className="text-gray-500">We'd love to hear about your specific needs.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {formStatus === 'success' && (
                                <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 flex items-center gap-3">
                                    <Check className="w-5 h-5" />
                                    <span>Message sent successfully! We'll be in touch.</span>
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 text-sm">
                                    {errorMessage}
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                    <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-green-100 outline-none transition-all bg-gray-50 focus:bg-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-green-100 outline-none transition-all bg-gray-50 focus:bg-white" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-green-100 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-green-100 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+91..." />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea name="message" rows="4" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-green-100 outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="How can we assist you?"></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className={`btn btn-primary w-full py-4 text-lg justify-center shadow-lg hover:shadow-green-900/20 transition-all ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                {formStatus !== 'submitting' && <Send className="w-5 h-5 ml-2" />}
                            </button>
                        </form>
                    </div>

                    {/* Map & Additional Info */}
                    <div className="flex flex-col gap-8 h-full">
                        {/* Map Integration */}
                        <div className="bg-white p-2 rounded-3xl shadow-lg border border-gray-100 h-[400px] flex-shrink-0 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14996.685363435427!2d73.7868!3d19.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0137d45e4d%3A0xe549cd97d6435c24!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '1.5rem' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="bg-[var(--color-primary)] text-white p-8 rounded-3xl relative overflow-hidden flex-grow flex flex-col justify-center backdrop-blur-sm">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-white">
                                <Globe className="w-6 h-6 text-[var(--color-accent)]" />
                                Connect With Us
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all group p-4 border border-white/5">
                                    <Facebook className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold tracking-wide opacity-80 group-hover:opacity-100">FACEBOOK</span>
                                </a>
                                <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all group p-4 border border-white/5">
                                    <Instagram className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold tracking-wide opacity-80 group-hover:opacity-100">INSTAGRAM</span>
                                </a>
                                <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all group p-4 border border-white/5">
                                    <Linkedin className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold tracking-wide opacity-80 group-hover:opacity-100">LINKEDIN</span>
                                </a>
                                <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all group p-4 border border-white/5">
                                    <Twitter className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold tracking-wide opacity-80 group-hover:opacity-100">TWITTER</span>
                                </a>
                                <a href={companyInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all group p-4 border border-white/5">
                                    <Youtube className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold tracking-wide opacity-80 group-hover:opacity-100">YOUTUBE</span>
                                </a>
                                <a href="/" className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all group p-4 border border-white/5">
                                    <Globe className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold tracking-wide opacity-80 group-hover:opacity-100">WEBSITE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
