import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { X, Loader2 } from 'lucide-react';

const ArticleModal = ({ isOpen, onClose, articlePath, title }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen && articlePath) {
            setLoading(true);
            setError(null);
            fetch(articlePath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to load article');
                    }
                    return response.text();
                })
                .then(text => {
                    setContent(text);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error loading markdown:", err);
                    setError("Could not load content. Please try again later.");
                    setLoading(false);
                });
        }
    }, [isOpen, articlePath]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-0 z-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 truncate pr-8">
                        {title || 'Article'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto p-6 md:p-8">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                            <Loader2 className="animate-spin mb-3" size={32} />
                            <p>Loading content...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 text-red-500">
                            <p>{error}</p>
                        </div>
                    ) : (
                        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-green-700 dark:prose-headings:text-green-400 prose-a:text-green-600 prose-img:rounded-xl">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {content}
                            </ReactMarkdown>
                        </article>
                    )}
                </div>
            </div>

            {/* Backdrop click to close */}
            <div className="absolute inset-0 -z-10" onClick={onClose}></div>
        </div>
    );
};

export default ArticleModal;
