import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight, Building2 } from 'lucide-react';
import { projects } from '../data/projects';
import { SHOW_PROJECT_IMAGES } from '../config/settings';

// Yılları dinamik olarak alabilir veya statik tutabiliriz. 
// "Tümü" seçeneğini en başa ekliyoruz.
const uniqueYears = [...new Set(projects.map(p => p.year))].sort((a, b) => b - a);
const years = ['Tümü', ...uniqueYears];

export default function Projects() {
    const [selectedYear, setSelectedYear] = useState('Tümü');

    const filteredProjects = selectedYear === 'Tümü'
        ? projects
        : projects.filter((p) => p.year === selectedYear);

    return (
        <section id="projects" className="bg-white py-24 relative">
            <div className="container mx-auto px-4 md:px-8">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-primary-red font-bold tracking-wider uppercase text-sm mb-2 block">
                            Projelerimiz
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            İmzamızı Attığımız İşler
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Kamu kurumlarından özel konutlara kadar, her detayında kaliteyi hedeflediğimiz tamamlanan projelerimiz.
                        </p>
                    </motion.div>

                    {/* Filter Tabs - Right Aligned on Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-100 p-1 rounded-xl inline-flex self-start md:self-end"
                    >
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 z-10 ${
                                    selectedYear === year ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                {selectedYear === year && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white shadow-sm border border-gray-200/50 rounded-lg -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {year}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Image Area */}
                                {SHOW_PROJECT_IMAGES && (
                                    <div className="relative h-64 overflow-hidden bg-gray-100">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        
                                        {/* Overlay on Hover */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <span>İncele</span>
                                                <ArrowUpRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Tags: Category & Year */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide ${
                                            project.category === 'Kamu' 
                                                ? 'bg-blue-50 text-blue-700 border border-blue-100' 
                                                : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                        }`}>
                                            {project.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                                            <Calendar className="w-3 h-3" />
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary-red transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Location (Pushed to bottom) */}
                                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-gray-500 text-sm">
                                        <MapPin className="w-4 h-4 mr-1.5 text-gray-400" />
                                        {project.location}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {/* Empty State Warning */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        Bu kategoride henüz proje bulunmuyor.
                    </div>
                )}
            </div>
        </section>
    );
}