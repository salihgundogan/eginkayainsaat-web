import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image with Parallax-like feel */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover object-center"
                />
                {/* Modern Gradient Overlay: Yazıların olduğu sol taraf koyu, sağ taraf aydınlık */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                <div className="max-w-3xl">

                    {/* Badge / Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary-red animate-pulse" />
                        Güven ve Kalitenin Adresi
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    >
                        Geleceği <span className="text-primary-red">Sağlam Temeller</span> Üzerine Kuruyoruz
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
                    >
                        Eğinkaya İnşaat olarak, modern mimariyi geleneksel sağlamlık anlayışıyla birleştiriyor,
                        yaşam alanlarınıza değer katıyoruz.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#projects"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary-red text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-lg shadow-red-600/30"
                        >
                            Projelerimiz
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#contact"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-primary-black hover:scale-105"
                        >
                            İletişime Geçin
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
            >
                <span className="text-xs font-medium tracking-widest uppercase mb-2">Aşağı Kaydır</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}