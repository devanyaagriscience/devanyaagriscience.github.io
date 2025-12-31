import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Star, Heart, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jobOpenings, cultureValues } from '../data/careers';

const iconMap = {
    Zap: Zap,
    Heart: Heart,
    Globe: Globe,
    Star: Star
};

const Careers = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-[var(--color-primary)] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-full bg-black/10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="bg-white/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">Join Our Mission</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Grow Your Career <br /><span className="text-[var(--color-accent)]">With Devanya</span></h1>
                        <p className="max-w-2xl mx-auto text-green-100 text-xl font-light">
                            Help us fulfill the promise of purity. We're looking for passionate individuals to join the future of sustainable agriculture.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="section bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Work Culture</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4">Why Devanya Agri Science?</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {cultureValues.map((item, index) => {
                            const Icon = iconMap[item.icon];
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10 }}
                                    className="p-8 rounded-[2.5rem] bg-gray-50 border border-transparent hover:border-gray-100 transition-all text-center"
                                >
                                    <div className={`${item.bg} ${item.color} w-16 h-16 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Opportunities</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-4">Explore Open Roles</h2>
                        </div>
                        <p className="text-gray-500 font-medium">Showing {jobOpenings.length} current openings</p>
                    </div>

                    <div className="space-y-6 max-w-5xl mx-auto">
                        {jobOpenings.map((job) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-8"
                            >
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="bg-green-50 text-[var(--color-primary)] text-xs font-bold uppercase px-3 py-1 rounded-full">{job.department}</span>
                                        <span className="bg-gray-50 text-gray-500 text-xs font-bold uppercase px-3 py-1 rounded-full">{job.type}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-primary)] transition-colors">{job.title}</h3>
                                    <div className="flex items-center gap-6 text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>Just Posted</span>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-500 max-w-xl">{job.description}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Link to="/contact" className="btn btn-primary px-8 py-4 whitespace-nowrap shadow-lg shadow-green-900/10">
                                        Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-500 text-lg">Don't see a role that fits? <Link to="/contact" className="text-[var(--color-primary)] font-bold hover:underline">Send us your CV anyway.</Link></p>
                    </div>
                </div>
            </section>

            {/* Contact Footer */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-[var(--color-surface)] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Passionate about agriculture?</h2>
                            <p className="text-gray-600 text-lg mb-12">We're always looking for field agents and technical advisors. Share your details with our HR team.</p>
                            <a href="mailto:hr@devanyaagriscience.com" className="bg-white text-[var(--color-primary)] px-6 py-3 md:px-12 md:py-5 rounded-full font-bold text-sm sm:text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all inline-block border border-gray-100 break-all">
                                hr@devanyaagriscience.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
