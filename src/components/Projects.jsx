import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';
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
                    className="text-center mb-12"
                >
                    <span className="text-primary-red font-semibold uppercase tracking-wider text-sm">
                        Projelerimiz
                    </span>
                    <h2 className="heading-primary mt-2">Tamamlanan İşler</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                        Kamu ve özel sektörde gerçekleştirdiğimiz projelerden bazıları.
                    </p>
                </motion.div>

                {/* Year Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedYear === year
                                ? 'bg-primary-red text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                {/* Image - Only shown if SHOW_PROJECT_IMAGES is true */}
                                {SHOW_PROJECT_IMAGES && (
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary-red text-white text-sm font-semibold px-3 py-1 rounded-full">
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-6">
                                    {/* Year badge - shown when images are hidden */}
                                    {!SHOW_PROJECT_IMAGES && (
                                        <div className="flex items-center gap-2 mb-3">
                                            <Calendar className="w-4 h-4 text-primary-red" />
                                            <span className="text-primary-red font-semibold">{project.year}</span>
                                        </div>
                                    )}

                                    <h3 className="text-lg font-bold text-primary-black mb-3 line-clamp-2 group-hover:text-primary-red transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Building2 className="w-4 h-4" />
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
