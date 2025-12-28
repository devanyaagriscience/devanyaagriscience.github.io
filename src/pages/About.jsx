import { Target, Heart, ShieldCheck, Award, Users, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { milestones, events } from '../data/mockData';
import { motion } from 'framer-motion';

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
                                    <h4 className="text-2xl font-bold text-[var(--color-accent-dark, #854d0e)]">50k+</h4>
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
                                <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2060&auto=format&fit=crop" alt="Agriculture Science" className="w-full h-full object-cover" />
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

            {/* Events Section */}
            <section className="section bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Our Presence</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4">Events & Engagements</h2>
                        <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">We actively participate in agricultural fairs, farmer meets, and scientific seminars to stay connected with the farming community.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-64 relative overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-sm">
                                            <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                                            <span className="text-xs font-bold text-gray-800">{event.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-[var(--color-primary)] mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{event.location}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-primary)] transition-colors">{event.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">The Visionaries</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4">Our Leadership Team</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {[
                            { name: "Dr. Vikram Singh", role: "Founder & Chairman", image: "https://randomuser.me/api/portraits/men/85.jpg" },
                            { name: "Mrs. Meera Patel", role: "Managing Director", image: "https://randomuser.me/api/portraits/women/65.jpg" },
                            { name: "Mr. Rajan Deshmukh", role: "Chief Scientist", image: "https://randomuser.me/api/portraits/men/45.jpg" }
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="text-center"
                            >
                                <div className="w-48 h-48 mx-auto mb-6 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
