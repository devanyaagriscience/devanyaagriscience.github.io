import React from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data/companyInfo';

const QuickContact = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const whatsappNumber = companyInfo.phone.replace(/[^0-9]/g, '');

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 mb-2 w-64"
                    >
                        <h4 className="font-bold text-gray-800 mb-4 px-2">How can we help?</h4>
                        <div className="space-y-2">
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 text-green-700 transition-colors group"
                            >
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">WhatsApp Us</p>
                                    <p className="text-xs text-green-600/70">Instant response</p>
                                </div>
                            </a>
                            <a
                                href={`tel:${companyInfo.phone}`}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-blue-700 transition-colors group"
                            >
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Call Expert</p>
                                    <p className="text-xs text-blue-600/70">Mon-Sat, 9am-6pm</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-[var(--color-primary)] hover:scale-110'
                    }`}
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <MessageCircle className="w-6 h-6 text-white" />
                )}
            </button>
        </div>
    );
};

export default QuickContact;
