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
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-widest text-primary-red uppercase">
            Referanslarımız
          </span>

          <h2 className="heading-primary mb-6">
            İmzamızı Attığımız İşler
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed">
            Kamu kurumlarından özel projelere kadar, her aşamasında kaliteyi
            merkeze aldığımız tamamlanmış işlerimiz.
          </p>
        </motion.div>

        {/* ================= FİLTRE ================= */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex gap-1 rounded-xl bg-gray-100 p-1">
            {years.map(year => {
              const active = selectedYear === year;
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`
                    px-5 py-2 rounded-lg text-sm font-medium transition-all
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
        <motion.div
          layout
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white
                           hover:shadow-2xl transition-shadow"
              >
                {/* Görsel */}
                {SHOW_PROJECT_IMAGES && (
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500
                                 group-hover:scale-105"
                    />

                    <span
                      className={`absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow
                        ${project.category === 'Kamu'
                          ? 'text-blue-700'
                          : 'text-emerald-700'}
                      `}
                    >
                      {project.category}
                    </span>
                  </div>
                )}

                {/* İçerik */}
                <div className="flex h-full flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 text-primary-red" />
                    <span>{project.year}</span>
                  </div>

                  <h3 className="mb-6 text-xl font-semibold leading-snug text-gray-900
                                 transition-colors group-hover:text-primary-red">
                    {project.title}
                  </h3>

                  <div className="mt-auto flex items-center gap-2 border-t border-gray-100 pt-4 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================= BOŞ DURUM ================= */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center text-gray-500">
            Bu yıla ait proje bulunmuyor.
          </div>
        )}
      </div>
    </section>
  );
}
