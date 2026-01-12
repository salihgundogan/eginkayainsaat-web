import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Calendar } from 'lucide-react';
import { projects } from '../data/projects';
import { SHOW_PROJECT_IMAGES } from '../config/settings';

const years = ['Tümü', 2025, 2024, 2023];

export default function Projects() {
    const [selectedYear, setSelectedYear] = useState('Tümü');

    const filteredProjects = selectedYear === 'Tümü'
        ? projects
        : projects.filter((p) => p.year === selectedYear);

    return (
        <section id="projects" className="bg-neutral-lightgray section-padding">
            <div className="container-max">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="text-primary-red font-bold uppercase tracking-wider text-xs">
                        Projelerimiz
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-black mt-3">
                        Tamamlanan İşler
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto mt-4 text-base">
                        Kamu ve özel sektörde gerçekleştirdiğimiz projeler.
                    </p>
                </motion.div>

                {/* Year Filter - Optimized Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${selectedYear === year
                                ? 'bg-primary-red text-white shadow-lg shadow-primary-red/30'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Projects Grid - 2 Column Layout */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Image */}
                                {SHOW_PROJECT_IMAGES && (
                                    <div className="relative h-56 sm:h-64 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-primary-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                {project.year}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-5">
                                    {/* Year badge - shown when images are hidden */}
                                    {!SHOW_PROJECT_IMAGES && (
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar className="w-4 h-4 text-primary-red" />
                                            <span className="text-primary-red font-bold text-sm">{project.year}</span>
                                        </div>
                                    )}

                                    <h3 className="text-base sm:text-lg font-bold text-primary-black mb-3 line-clamp-2 group-hover:text-primary-red transition-colors leading-snug">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-primary-red" />
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Building2 className="w-4 h-4 text-primary-red" />
                                            <span>{project.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
