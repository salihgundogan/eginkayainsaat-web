import { motion } from 'framer-motion';
import {
    Building2,
    Hammer,
    PaintBucket,
    HardHat,
    Home,
    Wrench,
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

// Tek bir kart bileşeni
function ServiceCard({ service, index }) {
    const IconComponent = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden"
        >
            {/* Card Container */}
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 flex flex-col items-center text-center">

                {/* Top Border Animation */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-red to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                {/* Icon Container */}
                <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mb-8 group-hover:bg-primary-red transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-primary-red group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-red transition-colors duration-300">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="bg-gray-50 section-padding relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container-max relative z-10">

                {/* Section Header */}
                <div className="w-full flex justify-center">
                    <motion.div
                        className="max-w-3xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-primary-red font-bold tracking-wider uppercase text-sm">
                            Neler Yapıyoruz?
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
                            İnşaat Sektöründe <span className="text-primary-red">Kusursuz Çözümler</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            20 yılı aşkın tecrübemizle, projenizin her aşamasında kalite ve güveni inşa ediyoruz.
                        </p>
                    </motion.div>
                </div>

                {/* ===== SPACER: Başlık ile kartlar arası ===== */}
                <div className="h-32" />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}