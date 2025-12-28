import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight, CheckCircle, Microscope, Sprout, Signal, Star, Quote } from 'lucide-react';
import { services, testimonials } from '../data/mockData';
import { motion } from 'framer-motion';

const iconMap = {
    Microscope: Microscope,
    Sprout: Sprout,
    Signal: Signal
};

const Home = () => {
    return (
        <>
            <Hero />

            {/* Introduction Section */}
            <section className="section bg-white relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm bg-green-50 px-3 py-1 rounded-full">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-[var(--color-text)]">Why Choose Devanya?</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">We bring over two decades of expertise in agricultural science, delivering proven results for farmers across the region with sustainable and innovative practices.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.slice(0, 3).map((service, index) => {
                            const Icon = iconMap[service.icon] || Sprout;
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="p-8 rounded-[2rem] bg-white border border-gray-100 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 group"
                                >
                                    <div className="w-16 h-16 bg-[var(--color-primary)]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-[var(--color-primary)] transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                                    <Link to="/services" className="text-[var(--color-primary)] font-bold flex items-center hover:gap-3 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission Strip */}
            <section className="py-24 bg-[#0f2f1c] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-[var(--color-primary-light)] rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full opacity-5 blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">Committed to <br /><span className="text-[var(--color-accent)]">Growing Together</span></h2>
                        <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                            At Devanya Agri Science, we believe in the power of nature and science working in harmony. Our mission is to challenge the status quo and provide farmers with the best tools to sustainably feed the world.
                        </p>
                        <ul className="space-y-6 mb-12">
                            {['Premium Quality Inputs', 'Expert Agronomy Support', 'Sustainable Practices'].map((item) => (
                                <li key={item} className="flex items-center gap-4">
                                    <div className="bg-[var(--color-accent)] rounded-full p-1">
                                        <CheckCircle className="text-[#0f2f1c] w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/about" className="btn btn-accent px-8 py-4 text-lg border-none text-[#0f2f1c] hover:bg-white">Discover Our Story</Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hidden md:block relative"
                    >
                        <div className="aspect-square rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 p-12 flex flex-col items-center justify-center relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="text-center">
                                <h3 className="text-6xl font-bold text-[var(--color-accent)] mb-4">100%</h3>
                                <p className="text-2xl text-white font-light">Sustainable Solutions</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 border-2 border-[var(--color-accent)] rounded-[3rem] transform -rotate-3 z-0 opacity-30"></div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section bg-[var(--color-surface)]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Testimonials</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4">Farmers' Success Stories</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 relative"
                            >
                                <Quote className="w-10 h-10 text-[var(--color-primary-light)]/20 absolute top-6 right-8" />
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-[var(--color-accent)] fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-8 italic">"{t.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[var(--color-primary-dark)]">{t.name}</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-primary)]"></div>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to maximize your yield?</h2>
                        <p className="text-green-100 mb-10 max-w-2xl mx-auto text-lg">Get in touch with our experts today to find the perfect solution for your farm. We offer free initial consultations.</p>
                        <Link to="/contact" className="btn bg-white text-[var(--color-primary)] px-10 py-4 shadow-xl hover:shadow-2xl text-lg hover:scale-105 transition-transform">Contact Us Now</Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};
export default Home;
