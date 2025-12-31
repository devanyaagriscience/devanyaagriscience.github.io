import React from 'react';
import { Target, Heart, ShieldCheck, Award, Users, TrendingUp, Calendar, MapPin, Globe, Leaf, CheckCircle, Flag } from 'lucide-react';
import { milestones } from '../data/milestones';
import { events } from '../data/events';
import { testimonials } from '../data/testimonials';
import { teamMembers } from '../data/team';

import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';

const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-[var(--color-primary)] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Pioneering Agricultural <br /><span className="text-[var(--color-accent)]">Excellence Since 2005</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-green-100 text-xl font-light"
                    >
                        Empowering farmers with science-backed solutions for a sustainable future.
                    </motion.p>
                </div>
            </div>

            {/* Story Section */}
            <section className="section bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-text)]">Our Visionary Journey</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Devanya Agri Science was founded with a singular vision: to empower the farming community with high-quality, scientifically backed agricultural inputs.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Starting as a small research unit, we have grown into a trusted partner for thousands of farmers, providing everything from seeds to advanced crop protection. We understand the challenges of modern agriculture.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-green-50 rounded-2xl">
                                    <h4 className="text-2xl font-bold text-[var(--color-primary)]">20+</h4>
                                    <p className="text-sm text-gray-500">Years of Experience</p>
                                </div>
                                <div className="p-4 bg-yellow-50 rounded-2xl">
                                    <h4 className="text-2xl font-bold text-[var(--color-accent-dark, #854d0e)]">5k+</h4>
                                    <p className="text-sm text-gray-500">Farmers Served</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                                <img src="/assets/images/vision-journey.png" alt="Visionary Agricultural Science" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-gray-100">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Growth Index</p>
                                    <p className="text-xl font-bold text-gray-800">+120% YoY</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Our Philosophy</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4">Values That Drive Us</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center border border-gray-100">
                            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-red-600">
                                <Award className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                            <p className="text-gray-500 text-lg">Constantly pushing the boundaries of agricultural science to find better solutions.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center border border-gray-100">
                            <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-green-600">
                                <Heart className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Integrity</h3>
                            <p className="text-gray-500 text-lg">We believe in transparent, honest relationships with our partners and farmers.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center border border-gray-100">
                            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-blue-600">
                                <ShieldCheck className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                            <p className="text-gray-500 text-lg">Never compromising on quality, ensuring every product meets global standards.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Milestones Section */}
            <div className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Our Journey</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2">Milestones & Achievements</h2>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 hidden md:block"></div>

                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center justify-between mb-12 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full md:w-5/12"></div>
                                <div className="z-10 bg-[var(--color-primary)] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg border-4 border-white mb-4 md:mb-0">
                                    <Flag className="w-5 h-5" />
                                </div>
                                <div className={`w-full md:w-5/12 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                                    <span className="text-[var(--color-primary)] font-black text-2xl block mb-2">{item.year}</span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Testimonials Section */}
            <section className="section bg-[var(--color-surface)]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Farmer Voices</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4">The Promise Delivered</h2>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        <Carousel
                            items={testimonials}
                            renderItem={(t) => (
                                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 relative h-full">
                                    <div className="flex text-yellow-500 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-lg italic mb-8 leading-relaxed line-clamp-4">"{t.content}"</p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-100">
                                            <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">{t.name}</h4>
                                            <p className="text-sm text-gray-500">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="section bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">The Visionaries</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4">Our Leadership Team</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="text-center"
                            >
                                <div className="w-48 h-48 mx-auto mb-6 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl flex items-center justify-center bg-gray-100">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                                    ) : (
                                        <Users className="w-20 h-20 text-gray-400" />
                                    )}
                                </div>
                                <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                                <p className="text-[var(--color-primary)] font-medium mb-4">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
