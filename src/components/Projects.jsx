import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { projects } from '../data/projects';
import { SHOW_PROJECT_IMAGES } from '../config/settings';

// Yılları otomatik üret
const years = ['Tümü', ...Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a)];

export default function Projects() {
  const [selectedYear, setSelectedYear] = useState('Tümü');

  const filteredProjects = useMemo(() => {
    if (selectedYear === 'Tümü') return projects;
    return projects.filter(p => p.year === selectedYear);
  }, [selectedYear]);

  return (
    <section id="projects" className="bg-white py-28">
      <div className="container-max px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-primary-red font-semibold tracking-widest uppercase text-sm">
            Referanslarımız
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            İmzamızı Attığımız İşler
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Kamu kurumlarından özel projelere kadar, her aşamasında kaliteyi
            merkeze aldığımız tamamlanmış işlerimiz.
          </p>
        </motion.div>

        {/* ================= FİLTRE ================= */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
            {years.map(year => {
              const active = selectedYear === year;
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`
                    px-5 py-2 rounded-lg text-sm font-medium transition
                    ${active
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'}
                  `}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= GRID ================= */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35 }}
                className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Görsel */}
                {SHOW_PROJECT_IMAGES && (
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-semibold uppercase
                        ${project.category === 'Kamu'
                          ? 'bg-white text-blue-700'
                          : 'bg-white text-emerald-700'}
                      `}
                    >
                      {project.category}
                    </span>
                  </div>
                )}

                {/* İçerik */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 text-primary-red" />
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-6 group-hover:text-primary-red transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================= BOŞ DURUM ================= */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            Bu yıla ait proje bulunmuyor.
          </div>
        )}
      </div>
    </section>
  );
}
