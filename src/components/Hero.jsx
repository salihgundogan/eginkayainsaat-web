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
                    className="space-y-10"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3"
                    >
                        <HardHat className="w-5 h-5 text-primary-red" />
                        <span className="text-white text-sm font-medium tracking-wide">Profesyonel İnşaat Çözümleri</span>
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
                        Güvenle İnşa Ediyoruz,
                        <br />
                        <span className="text-primary-red">Geleceğe Yatırım</span> Yapıyoruz
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Kamu ve özel sektör projelerinde 10+ yıllık deneyimimizle,
                        kaliteli, güvenilir ve zamanında teslim anlayışıyla hizmetinizdeyiz.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
                    >
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-primary inline-flex items-center gap-2 text-lg"
                        >
                            Projelerimizi İnceleyin
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-secondary inline-flex items-center gap-2 text-lg"
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
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ChevronDown className="w-10 h-10" />
                    </motion.div>
                </motion.button>
            </div>
        </section>
    );
}
