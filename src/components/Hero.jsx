import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[90vh] flex items-center overflow-hidden bg-[var(--color-primary)]">
            {/* Abstract Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-[var(--color-primary)] to-green-800 opacity-90"></div>
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-10 text-white">
                <div className="max-w-3xl animate-fadeIn">
                    <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-sm tracking-widest mb-6 border border-white/20 uppercase">
                        Sustainable Agriculture
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        Cultivating the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-yellow-200">
                            Future of Farming
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
                        Leading the way in agricultural innovation with premium quality fertilizers, seeds, and sustainable farming solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/products" className="btn btn-primary bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] text-lg px-8 py-4">
                            Explore Products
                        </Link>
                        <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-[var(--color-primary)] text-lg px-8 py-4">
                            Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Wave/Shape at bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-[var(--color-bg)] fill-current">
                    <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
