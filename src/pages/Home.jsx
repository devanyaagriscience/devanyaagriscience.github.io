import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight, CheckCircle, Microscope, Sprout, Signal } from 'lucide-react';
import { services } from '../data/mockData';

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
            <section className="section bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-[var(--color-text)]">Why Choose Devanya?</h2>
                        <p className="text-gray-600 text-lg">We bring over two decades of expertise in agricultural science, delivering proven results for farmers across the region.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.slice(0, 3).map((service) => {
                            const Icon = iconMap[service.icon] || Sprout;
                            return (
                                <div key={service.id} className="p-8 rounded-2xl bg-[var(--color-bg)] hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                                    <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                    <Link to="/services" className="text-[var(--color-primary)] font-bold flex items-center hover:gap-2 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission Strip */}
            <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[var(--color-accent)] rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Committed to <br />Growing Together</h2>
                        <p className="text-green-100 mb-8 text-lg leading-relaxed">
                            At Devanya Agri Science, we believe in the power of nature and science working in harmony. Our mission is to challenge the status quo and provide farmers with the best tools to sustainably feed the world.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {['Premium Quality Inputs', 'Expert Agronomy Support', 'Sustainable Practices'].map((item) => (
                                <li key={item} className="flex items-center gap-4">
                                    <div className="bg-[var(--color-accent)] rounded-full p-1">
                                        <CheckCircle className="text-[var(--color-primary)] w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/about" className="btn bg-white text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] px-8 py-4 text-lg border-none">Discover Our Story</Link>
                    </div>
                    <div className="hidden md:block relative">
                        <div className="aspect-square rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 flex items-center justify-center relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-[var(--color-accent)] mb-2">100%</h3>
                                <p className="text-xl text-white">Organic Solutions</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 border-2 border-[var(--color-accent)] rounded-3xl transform -rotate-3 z-0"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[var(--color-bg)]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to maximize your yield?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Get in touch with our experts today to find the perfect solution for your farm.</p>
                    <Link to="/contact" className="btn btn-primary px-8 py-3 shadow-lg hover:shadow-xl">Contact Us Now</Link>
                </div>
            </section>
        </>
    );
};
export default Home;
