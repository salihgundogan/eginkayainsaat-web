import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    // Animasyon ayarları
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (customDelay) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: customDelay, ease: [0.25, 0.4, 0.25, 1] }
        })
    };

    return (
        <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Arkaplan Görseli */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover object-center scale-105" // Hafif zoom ile derinlik
                />
                {/* Gradient: Yazıların olduğu SOL taraf daha koyu, sağ taraf aydınlık */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
            </div>

            {/* İçerik Alanı - SOLA YASLI (Orijinal Yapı Korundu) */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                <div className="max-w-3xl">
                    
                    {/* Rozet (Badge) Kaldırıldı */}

                    {/* Ana Başlık */}
                    <motion.h1
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.1}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight"
                    >
                        Zorlu Projelerin <br />
                        <span className="text-primary-red relative inline-block">Çözüm Ortağı</span>
                    </motion.h1>

                    {/* Alt Açıklama Metni */}
                    <motion.p
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.3}
                        className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light"
                    >
                        Kamu yapılarından nitelikli konut projelerine kadar; taahhüt ettiğimiz tarihte,
                        taahhüt ettiğimiz kalitede teslim ediyoruz. Risk yok, tecrübe var.
                    </motion.p>

                    {/* Butonlar - Sola Hizalı */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.5}
                        className="flex flex-col sm:flex-row gap-5 justify-start items-start sm:items-center"
                    >
                        {/* 1. Buton: Kırmızı Dolgulu */}
                        <a
                            href="#projects"
                            className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary-red text-white rounded-md font-bold text-base transition-all duration-300 hover:bg-red-700 shadow-lg shadow-red-900/20 hover:shadow-red-700/40 active:scale-[0.98]"
                        >
                            Referanslarımız
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* 2. Buton: Şeffaf Çerçeveli */}
                        <a
                            href="#contact"
                            className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white/30 hover:border-white rounded-md font-bold text-base transition-all duration-300 hover:bg-white hover:text-primary-black active:scale-[0.98]"
                        >
                            Teklif Alın
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Göstergesi - En altta ortada sabit */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 hover:text-white/80 transition-colors cursor-pointer"
            >
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 opacity-70">Keşfet</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="p-1 rounded-full border border-white/10 backdrop-blur-sm"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}