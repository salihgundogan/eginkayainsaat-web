import { motion } from 'framer-motion';
import { Building, Users, Award, Calendar } from 'lucide-react';

const stats = [
    { icon: Calendar, value: '20+', label: 'Yıllık Deneyim' },
    { icon: Building, value: '50+', label: 'Tamamlanan Proje' },
    { icon: Users, value: '100+', label: 'Mutlu Müşteri' },
    { icon: Award, value: '3', label: 'Aktif Bölge' },
];

export default function About() {
    return (
        <section id="about" className="bg-neutral-lightgray section-padding">
            <div className="container-max">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6 lg:space-y-8"
                    >
                        <div className="space-y-3">
                            <span className="inline-block text-primary-red font-bold uppercase tracking-widest text-xs bg-red-50 px-3 py-1.5 rounded-full">
                                Hakkımızda
                            </span>
                            <h2 className="heading-primary">
                                Söz Verdiğimiz Gibi
                            </h2>
                        </div>

                        <p className="text-gray-600 text-base leading-relaxed">
                            İnşaat sektörü hata kabul etmez. Biz, statik hesaplardan malzeme kalitesine kadar
                            her aşamada <strong className="text-primary-black">'sıfır hata'</strong> prensibiyle çalışıyoruz.
                        </p>

                        <p className="text-gray-600 text-base leading-relaxed">
                            Bölgenin en zorlu şantiyelerinde, en kısıtlı zamanlarda bile kaliteden ödün vermeden
                            iş bitirme başarımız, bizim en büyük referansımızdır.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            {['Tam Zamanında Teslim', 'Deprem Yönetmeliğine Uygunluk', 'Şeffaf Süreç'].map((item) => (
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
                        className="grid grid-cols-2 gap-6 lg:gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 sm:p-8 lg:p-12 rounded-[2rem] shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-center text-center border border-gray-100 h-full"
                            >
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-red transition-colors duration-300">
                                    <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary-red group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-primary-black mb-2">{stat.value}</div>
                                <div className="text-gray-500 font-medium text-base lg:text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
