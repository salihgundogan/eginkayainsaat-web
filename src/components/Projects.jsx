import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { projects } from '../data/projects';

// --- GÖRSEL ZEKASI ---
const getCategoryImage = (category) => {
    const images = {
        'Kamu': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        'Konut': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
        'Sağlık': 'https://images.unsplash.com/photo-1587351021759-3e566b9af923?q=80&w=1000&auto=format&fit=crop',
        'Eğitim': 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop',
        'Restorasyon': 'https://images.unsplash.com/photo-1590642916589-592bca10dfbf?q=80&w=1000&auto=format&fit=crop',
        'default': 'https://images.unsplash.com/photo-1460317442991-0ec2aa72af41?q=80&w=2000&auto=format&fit=crop'
    };
    const key = Object.keys(images).find(k => category && category.includes(k));
    return images[key] || images['default'];
};

const allCategories = ['Tümü', ...new Set(projects.map(p => p.category))];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('Tümü');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    // --- DRAG MEKANİZMASI ---
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };
    const handleMouseLeave = () => setIsDown(false);
    const handleMouseUp = () => setIsDown(false);
    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        if (activeCategory === 'Tümü') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.category === activeCategory));
        }
    }, [activeCategory]);

    return (
        <section
            id="projects"
            className="relative bg-gray-50 overflow-hidden" // [DEĞİŞTİ]: Arka plan Light (bg-gray-50)
            style={{ paddingTop: '20px', paddingBottom: '80px' }}
        >

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .no-select { user-select: none; }
            `}</style>

            {/* Arka Plan Dekorasyonu (Hafif Kırmızı/Gri Blob) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 w-[800px] h-[800px] bg-red-100/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/4 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[100px]" />
            </div>

            {/* İçerik Konteyneri */}
            <div className="container-max relative z-10 flex flex-col" style={{ gap: '50px' }}>

                {/* --- BAŞLIK VE FİLTRE ALANI --- */}
                <div className="flex flex-col items-center text-center px-4 md:px-0" style={{ gap: '30px' }}>

                    {/* Başlık */}
                    <div className="max-w-2xl flex flex-col items-center" style={{ gap: '15px' }}>
                        <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-red-600" />
                            Projelerimiz
                            <span className="w-8 h-[2px] bg-red-600" />
                        </span>
                        {/* [DEĞİŞTİ]: Yazı rengi koyu (text-gray-900) */}

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight xl:whitespace-nowrap">
                            İmza Attığımız Prestijli Yapılar
                        </h2>
                    </div>

                    {/* Filtre Butonları */}
                    <div className="w-full overflow-x-auto hide-scrollbar flex justify-center">
                        {/* [DEĞİŞTİ]: Container rengi açık gri (bg-gray-100), border rengi gri (border-gray-200) */}
                        <div className="flex items-center bg-white p-2 rounded-full border border-gray-200 shadow-sm min-w-max" style={{ gap: '10px' }}>
                            {allCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    style={{ padding: '10px 24px' }}
                                    // [DEĞİŞTİ]: Aktif değilse yazı rengi gri (text-gray-500)
                                    className={`relative rounded-full text-sm font-bold transition-colors duration-300 z-10 ${activeCategory === category ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                                        }`}
                                >
                                    {activeCategory === category && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-red-600 rounded-full -z-10 shadow-md shadow-red-200"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- PROJE GALERİSİ --- */}
                <div
                    ref={sliderRef}
                    className={`flex overflow-x-auto pb-12 px-4 md:px-0 hide-scrollbar no-select ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
                    style={{ gap: '30px' }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id || index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="shrink-0 w-[85vw] md:w-[350px] lg:w-[400px] group"
                            >
                                {/* Kart Arkaplanı */}
                                <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 bg-white">

                                    {/* Görsel */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={project.image || getCategoryImage(project.category)}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out filter brightness-[0.8] group-hover:brightness-[0.9]"
                                        />
                                    </div>

                                    {/* Karartma Overlay - Yazının okunması için şart */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                    {/* Kategori Etiketi */}
                                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                                        <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                                            {project.category}
                                        </span>
                                        {project.year && (
                                            <div className="flex items-center gap-2 text-white font-mono text-xs bg-black/40 px-2 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                                                <Calendar className="w-3 h-3 text-red-400" />
                                                {project.year}
                                            </div>
                                        )}
                                    </div>

                                    {/* Alt Bilgiler */}
                                    <div className="absolute bottom-0 left-0 right-0 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                                        style={{ padding: '24px' }}
                                    >
                                        <div className="flex items-center gap-2 text-red-400 font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">
                                            <MapPin className="w-3 h-3" />
                                            <span>{project.location || 'Türkiye'}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight text-shadow-md">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-200 text-sm line-clamp-2 opacity-90 font-medium">
                                            {project.description}
                                        </p>

                                        <div className="h-2"></div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}