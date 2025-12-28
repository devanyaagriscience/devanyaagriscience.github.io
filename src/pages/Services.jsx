import React from 'react';
import { services } from '../data/mockData';
import { Microscope, Sprout, Signal, CheckCircle } from 'lucide-react';

const iconMap = {
    Microscope: Microscope,
    Sprout: Sprout,
    Signal: Signal
};

const Services = () => {
    return (
        <div className="pb-20">
            <div className="bg-[var(--color-primary)] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="max-w-2xl mx-auto text-green-100 text-lg">Innovative agricultural services designed to optimize farm productivity and sustainability.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 space-y-20">
                {services.map((service, index) => {
                    const Icon = iconMap[service.icon] || Sprout;
                    const isEven = index % 2 === 0;

                    return (
                        <div key={service.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                            <div className="md:w-1/2">
                                <div className="relative">
                                    <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg">
                                        <div className="absolute inset-0 bg-[var(--color-primary-light)]/20 flex items-center justify-center">
                                            <Icon strokeWidth={1} className="w-32 h-32 text-[var(--color-primary)] opacity-20" />
                                        </div>
                                    </div>
                                    {/* Decorative dots */}
                                    <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-24 h-24 bg-[pattern] opacity-10 bg-repeat space-x-1`}></div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-green-100 rounded-lg text-[var(--color-primary)]">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[var(--color-text-light)] font-medium">Service #{index + 1}</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">{service.title}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
                                        <span>Professional Analysis</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
                                        <span>Expert Recommendations</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
                                        <span>Timely Support</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
