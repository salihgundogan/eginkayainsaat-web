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
                    className="text-center mb-32"
                >
                    <span className="inline-block text-primary-red font-bold uppercase tracking-widest text-xs bg-red-500/10 px-3 py-1.5 rounded-full mb-3">
                        Hizmetlerimiz
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Profesyonel Çözümler
                    </h2>

                </motion.div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group bg-neutral-900 rounded-2xl p-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300"
                        >
                            <div className="w-full flex justify-center mb-6">
                                <div className="w-14 h-14 rounded-full bg-red-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-7 h-7 text-primary-red" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-red transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
