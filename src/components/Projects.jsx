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

                {/* --- 1. HEADER BÖLÜMÜ --- */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex flex-col items-center gap-y-4" // Dikey boşluk (gap-y) arttırıldı
                    >
                        <span className="text-primary-red font-bold tracking-widest uppercase text-sm block">
                            Referanslarımız
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            İmzamızı Attığımız İşler
                        </h2>
                        {/* Alt metin: text-gray-500 ve max-w-2xl mx-auto */}
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-center mt-2">
                            Kamu kurumlarından özel konutlara kadar, her detayında kaliteyi hedeflediğimiz tamamlanan projelerimiz.
                        </p>
                    </motion.div>
                </div>

                {/* --- 2. FİLTRELEME ALANI (Flex Container) --- */}
                <div className="flex justify-center w-full mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        // Flex container: hizalama düzeltildi
                        className="flex flex-wrap justify-center items-center gap-4"
                    >
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                // Pill shape, transitions, active/passive states
                                className={`rounded-full px-6 py-2 text-sm sm:text-base font-medium transition-all duration-300 outline-none focus:outline-none ${selectedYear === year
                                        ? 'bg-primary-red text-white shadow-lg shadow-red-500/30' // Aktif State
                                        : 'bg-transparent text-gray-500 hover:bg-gray-100' // Pasif State
                                    }`}
                            >
                                {year}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* --- 3. PROJE KARTLARI (Grid) --- */}
                {/* Mobilde 1, tablette 2 (kullanıcı md:grid-cols-3 istedi, uyguluyoruz) */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                // Kart: rounded-2xl, group
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Görsel Alanı */}
                                {SHOW_PROJECT_IMAGES && (
                                    <div className="relative h-64 overflow-hidden bg-gray-100 border-b border-gray-50">
                                        {/* Hover Zoom Effect: scale-105 */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                                        {/* Kategori Etiketi: top-4 left-4, bg-white/90 */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide backdrop-blur-sm shadow-sm ${project.category === 'Kamu'
                                                    ? 'bg-white/90 text-blue-700'
                                                    : 'bg-white/90 text-emerald-700'
                                                }`}>
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* İçerik Alanı */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-primary-red" />
                                            <span className="font-medium">{project.year}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary-red transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-gray-500 text-sm font-medium">
                                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                        {project.location}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Boş Durum */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-24">
                        <div className="bg-gray-50 inline-block p-4 rounded-full mb-4">
                            <Calendar className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500">Bu kategoride projemiz bulunmuyor.</p>
                    </div>
                )}
            </div>
        </section>
    );
}