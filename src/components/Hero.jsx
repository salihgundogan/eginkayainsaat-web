import { motion } from 'framer-motion';
import { ChevronDown, HardHat } from 'lucide-react';

export default function Hero() {
    const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-black/80 via-primary-black/60 to-primary-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 container-max section-padding text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                    >
                        <HardHat className="w-4 h-4 text-primary-red" />
                        <span className="text-white text-sm font-medium">Profesyonel İnşaat Çözümleri</span>
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Güvenle İnşa Ediyoruz,
                        <br />
                        <span className="text-primary-red">Geleceğe Yatırım</span> Yapıyoruz
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                        Kamu ve özel sektör projelerinde 10+ yıllık deneyimimizle,
                        kaliteli, güvenilir ve zamanında teslim anlayışıyla hizmetinizdeyiz.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                    >
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Projelerimizi İnceleyin
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-secondary inline-flex items-center gap-2"
                        >
                            Bize Ulaşın
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    onClick={scrollToAbout}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ChevronDown className="w-8 h-8" />
                    </motion.div>
                </motion.button>
            </div>
        </section>
    );
}
