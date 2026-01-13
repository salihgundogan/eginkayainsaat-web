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

                {/* --- 1. BAŞLIK BÖLÜMÜ (GARANTİ ORTALANMIŞ) --- */}
                {/* flex-col ve items-center ile her şeyi alt alta ve ortaya diziyoruz */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex flex-col items-center" // İçeriği de ortalar
                    >
                        <span className="text-primary-red font-bold tracking-widest uppercase text-sm mb-3 block">
                            Referanslarımız
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            İmzamızı Attığımız İşler
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Kamu kurumlarından özel konutlara kadar, her detayında kaliteyi hedeflediğimiz tamamlanan projelerimiz.
                        </p>
                    </motion.div>
                </div>

                {/* --- 2. BÜSBÜYÜK YIL MENÜSÜ (TAM ORTADA) --- */}
                {/* w-full ve justify-center ile butonu ekranın tam ortasına alıyoruz */}
                <div className="flex justify-center w-full mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        // Buton grubu kapsayıcısı: Daha ferah layout
                        className="bg-white p-3 rounded-full shadow-2xl shadow-gray-200/50 border border-gray-100 inline-flex overflow-x-auto max-w-full no-scrollbar"
                    >
                        <div className="flex gap-3 sm:gap-6 p-2">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    // Butonlar: Daha geniş ve ferah
                                    className={`relative px-10 py-5 sm:px-14 sm:py-6 text-xl sm:text-2xl font-bold rounded-full transition-all duration-300 z-10 whitespace-nowrap outline-none outline-none focus:outline-none ${selectedYear === year
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-gray-900'
                                        }`}
                                >
                                    {selectedYear === year && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-primary-red rounded-full shadow-lg shadow-red-600/40 -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {year}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* --- 3. PROJELER IZGARASI --- */}
                {/* GAP ARTTIRILDI: gap-8 -> gap-10 lg:gap-16 */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2"
                            >
                                {/* Görsel Alanı */}
                                {SHOW_PROJECT_IMAGES && (
                                    <div className="relative h-80 sm:h-96 overflow-hidden bg-gray-100 border-b border-gray-50">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                                        {/* Kategori Etiketi - Konum Sıkılaştırıldı */}
                                        <div className="absolute top-8 left-8">
                                            <span className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md ${project.category === 'Kamu'
                                                    ? 'bg-blue-600/90 text-white'
                                                    : 'bg-emerald-600/90 text-white'
                                                }`}>
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Hover Butonu */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                                                <span>Projeyi İncele</span>
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* İçerik Alanı - DAHA FAZLA PADDING */}
                                <div className="p-10 lg:p-12 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-6 text-sm font-semibold text-gray-400">
                                        <div className="p-2 bg-red-50 rounded-full text-primary-red">
                                            <Calendar className="w-4 h-4" />
                                        </div>
                                        <span>{project.year}</span>
                                    </div>

                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-primary-red transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="mt-auto pt-8 border-t border-gray-100 flex items-center text-gray-500 font-medium">
                                        <MapPin className="w-5 h-5 mr-3 text-gray-400" />
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