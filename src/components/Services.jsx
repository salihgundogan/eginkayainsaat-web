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
        <section id="services" className="bg-primary-black section-padding">
            <div className="container-max">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-primary-red font-bold uppercase tracking-widest text-xs bg-red-500/10 px-4 py-2 rounded-full mb-4">
                        Hizmetlerimiz
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Profesyonel Çözümler
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-xl leading-relaxed">
                        Kamu ve özel sektör için kapsamlı inşaat hizmetleri sunuyoruz.
                    </p>
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
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-primary-red/50 transition-all duration-500 text-center flex flex-col items-center"
                        >
                            <div className="w-18 h-18 bg-primary-red/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-red transition-colors duration-300" style={{ width: '72px', height: '72px' }}>
                                <service.icon className="w-9 h-9 text-primary-red group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
