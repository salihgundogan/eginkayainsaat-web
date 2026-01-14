import { ArrowRight, ChevronDown, Send, CheckCircle2 } from 'lucide-react';
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
        <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Arkaplan Görseli */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover object-center scale-105"
                />
                {/* Gradient: Okunabilirlik için koyu katman */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>

            {/* İçerik Alanı */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col items-center text-center">
                <div className="max-w-5xl">

                    {/* Ana Başlık */}
                    <motion.h1
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.1}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl"
                    >
                        Zorlu Projelerin <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 relative inline-block">
                            Çözüm Ortağı
                        </span>
                    </motion.h1>

                    {/* Alt Açıklama */}
                    <motion.p
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.3}
                        className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md"
                    >
                        Kamu yapılarından nitelikli konut projelerine kadar; taahhüt ettiğimiz tarihte,
                        taahhüt ettiğimiz kalitede.
                    </motion.p>

                    {/* DEVASA BUTONLAR ALANI */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.5}
                        className="flex flex-col md:flex-row gap-6 justify-center items-center w-full"
                    >
                        {/* 1. Buton: TEKLİF ALIN (Ana Odak) */}
                        <a
                            href="#contact"
                            // [GARANTİ ÇÖZÜM]: Buton iç boşluğu (Padding) manuel verildi.
                            style={{ padding: '15px 30px' }}
                            className="group relative w-full md:w-auto min-w-[280px] flex items-center justify-center gap-4 bg-gradient-to-br from-red-600 via-red-600 to-red-700 text-white rounded-2xl shadow-[0_20px_50px_rgba(220,38,38,0.5)] hover:shadow-[0_20px_50px_rgba(220,38,38,0.7)] hover:-translate-y-2 transition-all duration-300 ring-4 ring-red-500/30"
                        >
                            <div className="flex flex-col items-start">
                                <span className="text-2xl font-black uppercase tracking-wide">Teklif Alın</span>
                                <span className="text-xs text-red-100 font-medium opacity-90">Hızlı & Ücretsiz</span>
                            </div>
                            <div className="bg-white/20 p-2 rounded-full group-hover:bg-white group-hover:text-red-600 transition-colors duration-300">
                                <Send className="w-8 h-8" />
                            </div>
                        </a>

                        {/* 2. Buton: REFERANSLARIMIZ (Beyaz Dolgulu) */}
                        <a
                            href="#projects"
                            // [GARANTİ ÇÖZÜM]: Buton iç boşluğu (Padding) manuel verildi.
                            style={{ padding: '15px 30px' }}
                            className="group w-full md:w-auto min-w-[280px] flex items-center justify-center gap-4 bg-white text-gray-900 rounded-2xl shadow-2xl hover:bg-gray-100 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="bg-gray-100 p-2 rounded-full group-hover:bg-gray-200 transition-colors">
                                <CheckCircle2 className="w-8 h-8 text-gray-900" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-2xl font-black uppercase tracking-wide">Referanslar</span>
                                <span className="text-xs text-gray-500 font-bold opacity-90">Başarı Hikayelerimiz</span>
                            </div>
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Göstergesi */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 hover:text-white transition-colors cursor-pointer"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </motion.div>
        </section>
    );
}