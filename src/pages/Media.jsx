import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Play, Calendar, MapPin } from 'lucide-react';
import Carousel from '../components/Carousel';
import { events } from '../data/events';

const Media = () => {
    const [activeTab, setActiveTab] = useState('photos');

    const photos = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1595856947231-1587ee11a686?q=80&w=800&auto=format&fit=crop",
            caption: "Annual Farmer Meet 2024",
            location: "Varanasi, UP",
            date: "Nov 15, 2024"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop",
            caption: "New Research Center Inauguration",
            location: "Lucknow, UP",
            date: "Oct 02, 2024"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1599596426463-afc75a3ab65a?q=80&w=800&auto=format&fit=crop",
            caption: "Field Demonstration Day",
            location: "Gorakhpur, UP",
            date: "Sep 10, 2024"
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
            caption: "Award Ceremony for Best Farmers",
            location: "New Delhi",
            date: "Aug 15, 2024"
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800&auto=format&fit=crop",
            caption: "Sustainable Ag Tech Seminar",
            location: "Virtual Event",
            date: "July 20, 2024"
        },
        {
            id: 6,
            url: "https://images.unsplash.com/photo-1615811361263-68f890bad53c?q=80&w=800&auto=format&fit=crop",
            caption: "Community Seed Distribution",
            location: "Rural Bihar",
            date: "June 05, 2024"
        }
    ];

    const videos = [
        {
            id: 1,
            thumbnail: "https://images.unsplash.com/photo-1492496913980-501348b61384?q=80&w=800&auto=format&fit=crop",
            title: "The Future of Organic Farming",
            duration: "12:30",
            views: "1.2k views"
        },
        {
            id: 2,
            thumbnail: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop",
            title: "Success Stories: Ram Lal's Journey",
            duration: "05:45",
            views: "850 views"
        },
        {
            id: 3,
            thumbnail: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=800&auto=format&fit=crop",
            title: "Devanya Agri Science Corporate Film",
            duration: "03:20",
            views: "5.4k views"
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--color-surface)] pb-20 pt-20">
            {/* Header */}
            <div className="bg-[#0f2f1c] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f1c] to-transparent"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Media Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-xl mx-auto text-gray-300 text-lg font-light"
                    >
                        Explore glimpses of our events, field days, and the impact we create in the agricultural community.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8 relative z-20">
                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1.5 rounded-2xl shadow-lg border border-gray-100 inline-flex">
                        <button
                            onClick={() => setActiveTab('photos')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'photos'
                                ? 'bg-[var(--color-primary)] text-white shadow-md'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                                }`}
                        >
                            <Image className="w-5 h-5" /> Photos
                        </button>
                        <button
                            onClick={() => setActiveTab('videos')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'videos'
                                ? 'bg-[var(--color-primary)] text-white shadow-md'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                                }`}
                        >
                            <Play className="w-5 h-5" /> Videos
                        </button>
                    </div>
                </div>

                <AnimatePresence mode='wait'>
                    {activeTab === 'photos' ? (
                        <motion.div
                            key="photos"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Carousel
                                items={photos}
                                renderItem={(photo) => (
                                    <div className="group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full">
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={photo.url}
                                                alt={photo.caption}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
                                        <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                                            <h3 className="text-xl font-bold mb-2 line-clamp-2">{photo.caption}</h3>
                                            <div className="flex items-center gap-4 text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {photo.location}</span>
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {photo.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="videos"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Carousel
                                items={videos}
                                renderItem={(video) => (
                                    <div className="group cursor-pointer h-full">
                                        <div className="relative rounded-[2rem] overflow-hidden mb-4 shadow-lg">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-56 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                                                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                                                </div>
                                            </div>
                                            <span className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-lg">
                                                {video.duration}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">{video.title}</h3>
                                        <p className="text-sm text-gray-500">{video.views} • Uploaded recently</p>
                                    </div>
                                )}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Events Timeline Section */}
                <div className="mt-32">
                    <div className="text-center mb-20">
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Our Presence</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4">Events & Engagements Timeline</h2>
                        <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">Track our journey through field days, seminars, and community meets across the country.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical line mapping through events */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-100 hidden md:block"></div>

                        <div className="space-y-16 md:space-y-32">
                            {events.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content Card */}
                                    <div className="w-full md:w-5/12">
                                        <div className="bg-gray-50 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                                            <div className="h-48 rounded-2xl overflow-hidden mb-6">
                                                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex items-center gap-2 text-[var(--color-primary)] mb-2 font-bold text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>{event.date}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                                            <div className="flex items-center gap-2 text-gray-500 mb-4 text-xs font-bold uppercase tracking-widest">
                                                <MapPin className="w-4 h-4" />
                                                <span>{event.location}</span>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>

                                    {/* Timeline Node */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--color-primary)] rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                                    {/* Spacer for empty side */}
                                    <div className="hidden md:block md:w-5/12"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Media;
