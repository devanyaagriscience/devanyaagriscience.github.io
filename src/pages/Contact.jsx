import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { companyInfo } from '../data/mockData';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us. We will get back to you shortly.');
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg)]">
            {/* Header */}
            <div className="bg-[var(--color-primary)] text-white py-20 pb-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-green-100 text-lg max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-20 relative z-10 mb-20">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Contact Info Side */}
                    <div className="md:w-5/12 bg-[var(--color-primary-light)] p-10 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 -m-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                        <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/20 rounded-lg">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-green-100 text-sm font-medium uppercase tracking-wide">Phone</p>
                                    <p className="text-lg font-semibold">{companyInfo.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/20 rounded-lg">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-green-100 text-sm font-medium uppercase tracking-wide">Email</p>
                                    <p className="text-lg font-semibold">{companyInfo.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/20 rounded-lg">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-green-100 text-sm font-medium uppercase tracking-wide">Address</p>
                                    <p className="text-lg font-semibold">{companyInfo.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <p className="text-green-100 text-sm mb-4">Follow us on social media</p>
                            <div className="flex gap-4">
                                {/* Social placeholder */}
                                <div className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/30 transition cursor-pointer flex items-center justify-center">FB</div>
                                <div className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/30 transition cursor-pointer flex items-center justify-center">IG</div>
                                <div className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/30 transition cursor-pointer flex items-center justify-center">TW</div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-7/12 p-10 bg-white">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-green-100 outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-green-100 outline-none transition" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-green-100 outline-none transition" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-green-100 outline-none transition"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full py-4 text-lg justify-center shadow-lg hover:shadow-xl">
                                Send Message <Send className="w-5 h-5 ml-2" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Contact;
