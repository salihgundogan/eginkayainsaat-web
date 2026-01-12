import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Calendar, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { SHOW_PROJECT_IMAGES } from '../config/settings';

const years = ['Tümü', 2025, 2024, 2023];

export default function Projects() {
    const [selectedYear, setSelectedYear] = useState('Tümü');

    const filteredProjects = selectedYear === 'Tümü'
        ? projects
        : projects.filter((p) => p.year === selectedYear);

    return (
        <section id="projects" className="bg-gradient-to-b from-neutral-lightgray to-white section-padding">
            <div className="container-max">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-primary-red font-bold uppercase tracking-widest text-xs bg-red-50 px-4 py-2 rounded-full mb-4">
                        Projelerimiz
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-black leading-tight">
                        Tamamlanan İşler
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-xl leading-relaxed">
                        Kamu ve özel sektörde gerçekleştirdiğimiz projeler.
                    </p>
                </motion.div>

                {/* Modern Year Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-16"
                >
                    <div className="inline-flex bg-white p-2 rounded-2xl shadow-xl shadow-black/5 border border-gray-100">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`relative px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-300 ${selectedYear === year
                                        ? 'text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {selectedYear === year && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-gradient-to-r from-primary-red to-red-600 rounded-xl shadow-lg shadow-red-500/30"
                                        transition={{ type: "spring", duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10">{year}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 border border-gray-100"
                            >
                                {/* Image */}
                                {SHOW_PROJECT_IMAGES && (
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                        {/* Year Badge - Modern Style */}
                                        <div className="absolute top-5 left-5">
                                            <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-primary-black text-sm font-bold px-5 py-2.5 rounded-full shadow-lg">
                                                <Calendar className="w-4 h-4 text-primary-red" />
                                                {project.year}
                                            </span>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-5 right-5">
                                            <span className={`text-xs font-bold px-4 py-2 rounded-full shadow-lg ${project.category === 'Kamu'
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-emerald-500 text-white'
                                                }`}>
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Bottom Info on Image */}
                                        <div className="absolute bottom-5 left-5 right-5">
                                            <div className="flex items-center gap-2 text-white/90 text-sm">
                                                <MapPin className="w-4 h-4" />
                                                <span>{project.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-8">
                                    {/* Year badge - shown when images are hidden */}
                                    {!SHOW_PROJECT_IMAGES && (
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="inline-flex items-center gap-2 bg-gray-100 text-primary-black text-sm font-bold px-5 py-2.5 rounded-full">
                                                <Calendar className="w-4 h-4 text-primary-red" />
                                                {project.year}
                                            </span>
                                            <span className={`text-xs font-bold px-4 py-2 rounded-full ${project.category === 'Kamu'
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-emerald-100 text-emerald-700'
                                                }`}>
                                                {project.category}
                                            </span>
                                        </div>
                                    )}

                                    <h3 className="text-xl font-bold text-primary-black mb-5 line-clamp-2 group-hover:text-primary-red transition-colors duration-300 leading-relaxed">
                                        {project.title}
                                    </h3>

                                    {/* Footer with location (for no-image mode) and arrow */}
                                    <div className="flex items-center justify-between">
                                        {!SHOW_PROJECT_IMAGES && (
                                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                                <MapPin className="w-4 h-4 text-primary-red" />
                                                <span>{project.location}</span>
                                            </div>
                                        )}

                                        <div className={`flex items-center gap-2 text-primary-red font-semibold text-sm group-hover:gap-3 transition-all duration-300 ${SHOW_PROJECT_IMAGES ? 'ml-auto' : ''}`}>
                                            <span>Detaylar</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-red/20 transition-colors duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-lg">
                        Toplam <span className="font-bold text-primary-black">{filteredProjects.length}</span> proje gösteriliyor
                        {selectedYear !== 'Tümü' && <span> ({selectedYear} yılı)</span>}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
