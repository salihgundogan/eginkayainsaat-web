import { motion } from 'framer-motion';
import { Building, Users, Award, Calendar } from 'lucide-react';

const stats = [
    { icon: Calendar, value: '10+', label: 'Yıllık Deneyim' },
    { icon: Building, value: '50+', label: 'Tamamlanan Proje' },
    { icon: Users, value: '100+', label: 'Mutlu Müşteri' },
    { icon: Award, value: '3', label: 'Aktif Bölge' },
];

export default function About() {
    return (
        <section id="about" className="bg-neutral-lightgray section-padding">
            <div className="container-max">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <div className="space-y-3">
                            <span className="inline-block text-primary-red font-bold uppercase tracking-widest text-xs bg-red-50 px-3 py-1.5 rounded-full">
                                Hakkımızda
                            </span>
                            <h2 className="heading-primary">
                                Güvenilir İnşaat Partneri
                            </h2>
                        </div>

                        <p className="text-gray-600 text-base leading-relaxed">
                            <strong className="text-primary-black">Eğinkaya İnşaat</strong> olarak,
                            kamu ve özel sektör projelerinde uzun yıllardır hizmet veriyoruz.
                            Niğde, Kayseri ve Sivas bölgelerinde gerçekleştirdiğimiz projelerle
                            sektörde güvenilir bir isim olduk.
                        </p>

                        <p className="text-gray-600 text-base leading-relaxed">
                            Sağlık tesisleri, eğitim kurumları, kamu binaları ve lüks villa projelerinde
                            kalite standartlarından ödün vermeden, zamanında teslim anlayışıyla çalışıyoruz.
                            Deneyimli mühendis kadromuz ve güçlü iş ortaklarımızla projelerinizi hayata geçiriyoruz.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            {['Kaliteli İşçilik', 'Zamanında Teslim', 'Güvenilir Hizmet'].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary-red rounded-full" />
                                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-center text-center border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary-red transition-colors duration-300">
                                    <stat.icon className="w-6 h-6 text-primary-red group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="text-3xl font-bold text-primary-black">{stat.value}</div>
                                <div className="text-gray-500 font-medium text-sm mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
