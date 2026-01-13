import { motion } from 'framer-motion';
import {
    Building2,
    Hammer,
    PaintBucket,
    HardHat,
    Home,
    Wrench,
    ArrowUpRight
} from 'lucide-react';

const services = [
    {
        icon: Building2,
        title: 'Kamu Projeleri',
        description: 'Hastaneler, okullar, kütüphaneler ve devlet binaları için yüksek standartlarda yapım işleri.',
    },
    {
        icon: Home,
        title: 'Konut Projeleri',
        description: 'Modern yaşamın gereksinimlerine uygun, güvenli ve konforlu lüks konut çözümleri.',
    },
    {
        icon: Hammer,
        title: 'Kaba Yapı İşleri',
        description: 'Projelerin en kritik aşaması olan temel ve karkas sistemlerin kusursuz inşası.',
    },
    {
        icon: Wrench,
        title: 'Tadilat & Güçlendirme',
        description: 'Mevcut yapıların deprem yönetmeliğine uygun hale getirilmesi ve güçlendirilmesi.',
    },
    {
        icon: PaintBucket,
        title: 'Restorasyon & Yenileme',
        description: 'Eskiyen yapıların modern mimari anlayışıyla yeniden hayata kazandırılması.',
    },
    {
        icon: HardHat,
        title: 'Proje Danışmanlığı',
        description: 'Süreç yönetimi, maliyet analizi ve teknik danışmanlık hizmetleri.',
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-gray-50 py-20 lg:py-24 relative overflow-hidden">
            {/* Background Decor - Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-primary-red font-bold tracking-wider uppercase text-sm">
                            Neler Yapıyoruz?
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
                            İnşaat Sektöründe <span className="text-primary-red">Kusursuz Çözümler</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            20 yılı aşkın tecrübemizle, projenizin her aşamasında kalite ve güveni inşa ediyoruz.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Hover Effect Background Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-red to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                            {/* Icon Box */}
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-red transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-primary-red group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-red transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                {service.description}
                            </p>

                            {/* Subtle Link Indicator */}
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-primary-red transition-colors">
                                Detaylı Bilgi
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}