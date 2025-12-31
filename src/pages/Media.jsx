import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Play, Calendar, MapPin, Loader2 } from 'lucide-react';
import Carousel from '../components/Carousel';
import { events } from '../data/events';
import { photos, videos } from '../data/mediaData';

const Media = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [activeTab, setActiveTab] = useState('photos');
    const [articleContent, setArticleContent] = useState('');
    const [loadingArticle, setLoadingArticle] = useState(false);

    useEffect(() => {
        if (selectedMedia?.article) {
            setLoadingArticle(true);
            fetch(selectedMedia.article)
                .then(res => res.text())
                .then(text => {
                    setArticleContent(text);
                    setLoadingArticle(false);
                })
                .catch(err => {
                    console.error("Error fetching article", err);
                    setLoadingArticle(false);
                });
        } else {
            setArticleContent('');
        }
    }, [selectedMedia]);

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
                                    <div
                                        onClick={() => setSelectedMedia({ type: 'photo', ...photo })}
                                        className="group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full cursor-pointer"
                                    >
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
                                    <div
                                        onClick={() => setSelectedMedia({ type: 'video', ...video })}
                                        className="group cursor-pointer h-full"
                                    >
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
                                        <p className="text-sm text-gray-500">Uploaded recently</p>
                                    </div>
                                )}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Events Timeline Section */}
                <div className="mt-32">
                    <div className="text-center mb-10">
                        <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Our Presence</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4">Events & Engagements Timeline</h2>
                        <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">Track our journey through field days, seminars, and community meets across the country.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical line mapping through events */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-100 hidden md:block"></div>

                        <div className="space-y-8 md:space-y-6">
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
                                        <div
                                            onClick={() => setSelectedMedia({ type: 'event', ...event })}
                                            className="bg-gray-50 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
                                        >
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

            {/* Media Modal - Moved outside relative z-20 container & increased z-index */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMedia(null)}
                        className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedMedia(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex-1 overflow-auto">
                                {selectedMedia.type === 'video' ? (
                                    <div className="aspect-video bg-black flex items-center justify-center">
                                        <video
                                            controls
                                            autoPlay
                                            className="w-full h-full"
                                            src={selectedMedia.videoUrl}
                                            poster={selectedMedia.thumbnail}
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                ) : (
                                    <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={selectedMedia.url || selectedMedia.image}
                                            alt={selectedMedia.caption || selectedMedia.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                )}

                                <div className="p-8">
                                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-[var(--color-primary)] font-bold uppercase tracking-wider">
                                        {(selectedMedia.type === 'photo' || selectedMedia.type === 'event') && (
                                            <>
                                                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {selectedMedia.location}</span>
                                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedMedia.date}</span>
                                            </>
                                        )}
                                        {selectedMedia.type === 'video' && (
                                            <>
                                                <span>Duration: {selectedMedia.duration}</span>
                                            </>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        {selectedMedia.type === 'photo' ? selectedMedia.caption : selectedMedia.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        {selectedMedia.description || "No description available."}
                                    </p>

                                    {loadingArticle ? (
                                        <div className="flex justify-center py-4"><Loader2 className="animate-spin" /></div>
                                    ) : articleContent && (
                                        <div className="prose prose-green max-w-none mt-8 pt-8 border-t border-gray-100">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{articleContent}</ReactMarkdown>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Media;
