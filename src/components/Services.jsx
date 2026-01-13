import { motion } from 'framer-motion';
import {
    Building2,
    Hammer,
    PaintBucket,
    HardHat,
    Home,
    Wrench
} from 'lucide-react';

const services = [
    {
        icon: Building2,
        title: 'Kamu Projeleri',
        description: 'Hastaneler, okullar, kütüphaneler ve devlet binaları yapım işleri.',
    },
    {
        icon: Home,
        title: 'Konut Projeleri',
        description: 'Lüks villalar ve konut projeleri anahtar teslim çözümler.',
    },
    {
        icon: Hammer,
        title: 'Yapım İşleri',
        description: 'Sıfırdan inşaat projeleri, temel atma ve kaba yapı işleri.',
    },
    {
        icon: Wrench,
        title: 'Tadilat & Onarım',
        description: 'Mevcut binaların tadilat, onarım ve güçlendirme işleri.',
    },
    {
        icon: PaintBucket,
        title: 'Yenileme',
        description: 'İç mekan ve dış cephe yenileme, modernizasyon projeleri.',
    },
    {
        icon: HardHat,
        title: 'Proje Yönetimi',
        description: 'Profesyonel proje yönetimi ve danışmanlık hizmetleri.',
    },
];

export default function Services() {
    return (
        // py-24: Bölümün en üstü ve en altı için dikey boşluğu artırdım.
        <section id="services" className="bg-primary-black py-24">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    // mb-32: Başlık ile kartlar arasındaki boşluğu agresif şekilde (128px) açtım.
                    className="text-center mb-32"
                >
                    <span className="inline-block text-primary-red font-bold uppercase tracking-widest text-xs bg-red-500/10 px-3 py-1.5 rounded-full mb-4">
                        Hizmetlerimiz
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Profesyonel Çözümler
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            // p-10: Kartın iç boşluğunu korudum.
                            // gap-8: İkon ile alttaki yazı arasındaki boşluğu artırdım.
                            className="group bg-neutral-900 rounded-2xl p-10 flex flex-col gap-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300 border border-transparent hover:border-red-900/30"
                        >
                            {/* İkon Kapsayıcısı: Flex ile tam ortaya hizalandı */}
                            <div className="w-full flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600/20 transition-all duration-300">
                                    <service.icon className="w-8 h-8 text-primary-red" />
                                </div>
                            </div>
                            
                            {/* Metin Kapsayıcısı: Sola yaslı (text-left) */}
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-red transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}