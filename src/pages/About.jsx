import React from 'react';
import { Target, Heart, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <div>
            <div className="bg-[var(--color-primary)] text-white py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Devanya Agri Science</h1>
                    <p className="max-w-2xl mx-auto text-green-100 text-lg">Pioneering agricultural excellence since 2005.</p>
                </div>
            </div>

            {/* Story Section */}
            <section className="section">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-[var(--color-text)]">Our Story</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Devanya Agri Science was founded with a singular vision: to empower the farming community with high-quality, scientifically backed agricultural inputs.
                            Starting as a small research unit, we have grown into a trusted partner for thousands of farmers, providing everything from seeds to advanced crop protection.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We understand the challenges of modern agriculture. That's why our dedicated team of agronomists and scientists work tirelessly to develop products that not only increase yield but also ensure the long-term health of the soil and environment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Innovation</h3>
                            <p className="text-gray-500">Constantly pushing the boundaries of agricultural science to find better solutions.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Integrity</h3>
                            <p className="text-gray-500">We believe in transparent, honest relationships with our partners and farmers.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quality</h3>
                            <p className="text-gray-500">Never compromising on quality, ensuring every product meets global standards.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
