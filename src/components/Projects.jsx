import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { SHOW_PROJECT_IMAGES } from '../config/settings';

// Yılları projelerden otomatik çekiyoruz
const uniqueYears = [...new Set(projects.map(p => p.year))].sort((a, b) => b - a);
const years = ['Tümü', ...uniqueYears];

export default function Projects() {
    const [selectedYear, setSelectedYear] = useState('Tümü');

    const filteredProjects = selectedYear === 'Tümü'
        ? projects
        : projects.filter((p) => p.year === selectedYear);

    return (
        <section id="projects" className="bg-white section-padding relative">
            <div className="container-max">

                {/* --- BAŞLIK KISMI (GARANTİ ORTALANMIŞ) --- */}
                {/* w-full ve mx-auto ile tam ortaya sabitlendi */}
                <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary-red font-bold tracking-widest uppercase text-sm mb-3 block"
                    >
                        Referanslarımız
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        İmzamızı Attığımız İşler
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Kamu kurumlarından özel konutlara kadar, her detayında kaliteyi hedeflediğimiz tamamlanan projelerimiz.
                    </motion.p>
                </div>

                {/* --- BÜSBÜYÜK YIL FİLTRESİ --- */}
                {/* mb-24 ile kartlarla arasına ciddi bir boşluk eklendi */}
                <div className="flex justify-center mb-24">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-2 rounded-full shadow-xl shadow-gray-200/50 border border-gray-100 inline-flex overflow-x-auto max-w-full no-scrollbar"
                    >
                        <div className="flex gap-2 p-1">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    // Buton boyutları büyük ve dolgun tutuldu
                                    className={`relative px-8 py-4 sm:px-10 sm:py-4 text-base sm:text-xl font-bold rounded-full transition-all duration-300 z-10 whitespace-nowrap min-w-[110px] flex items-center justify-center outline-none ${
                                        selectedYear === year 
                                            ? 'text-white' 
                                            : 'text-gray-400 hover:text-gray-900'
                                    }`}
                                >
                                    {selectedYear === year && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-primary-red rounded-full shadow-md shadow-red-500/30 -z-10"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                        />
                                    )}
                                    {year}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* --- PROJELER GRID (KARTLAR) --- */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/40 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2"
                            >
                                {/* Görsel Alanı */}
                                {SHOW_PROJECT_IMAGES && (
                                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                                        {/* Kategori Etiketi */}
                                        <div className="absolute top-6 left-6">
                                            <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md ${
                                                project.category === 'Kamu' 
                                                ? 'bg-blue-600/90 text-white' 
                                                : 'bg-emerald-600/90 text-white'
                                            }`}>
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Buton (Orta) */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                                                <span>Projeyi İncele</span>
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* İçerik Alanı */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-gray-400">
                                        <Calendar className="w-4 h-4 text-primary-red" />
                                        <span>{project.year}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary-red transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-gray-500 font-medium">
                                        <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                                        {project.location}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Boş Durum Uyarısı */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-24">
                        <div className="bg-gray-50 inline-block p-6 rounded-full mb-4">
                            <Calendar className="w-12 h-12 text-gray-300" />
                        </div>
                        <p className="text-gray-500 text-lg">Bu yılda tamamlanan proje bulunmuyor.</p>
                    </div>
                )}
            </div>
        </section>
    );
}