import { motion } from 'framer-motion';
import { Building, Users, Award, Calendar, CheckCircle2 } from 'lucide-react';

const stats = [
    { icon: Calendar, value: '20+', label: 'Yıllık Deneyim' },
    { icon: Building, value: '50+', label: 'Tamamlanan Proje' },
    { icon: Users, value: '100+', label: 'Mutlu Müşteri' },
    { icon: Award, value: '3', label: 'Aktif Bölge' },
];

const features = [
    { title: 'Tam Zamanında Teslim', desc: 'Belirlenen tarihte, eksiksiz anahtar teslim güvencesi.' },
    { title: 'Deprem Yönetmeliğine Uygun', desc: 'Yüksek mühendislik standartlarında, güvenli yapılar.' },
    { title: 'Şeffaf Süreç Yönetimi', desc: 'Projenin her aşamasında tam bilgilendirme ve takip.' },
];

export default function About() {
    return (
        <section 
            id="about" 
            className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50/30"
            // MANUEL ZORUNLU BOŞLUK (Padding) - CSS Class sorunu varsa bunu kesin uygular
            style={{ paddingTop: '50px', paddingBottom: '140px' }}
        >
            
            {/* Arka Plan Süslemeleri */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-red-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-gray-200/40 rounded-full blur-3xl" />

            <div className="container-max relative z-10">
                {/* ITEMS-CENTER: Kartları ve yazıyı dikeyde tam ortalar */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* SOL TARAFI: Metin ve Özellikler */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-10"
                        // Yazı bloğunu biraz daha aşağı itmek için manuel margin
                        style={{ marginTop: '20px' }}
                    >
                        {/* BAŞLIK GRUBU */}
                        <div className="flex flex-col gap-5">
                            <span className="block text-primary-red font-bold tracking-widest uppercase text-base">
                                Hakkımızda
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.2]">
                                Söz Verdiğimiz Gibi, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                                    Tam Zamanında.
                                </span>
                            </h2>
                        </div>

                        {/* PARAGRAF */}
                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                            İnşaat sektörü hata kabul etmez. Biz, statik hesaplardan malzeme kalitesine kadar
                            her aşamada <strong className="text-gray-900">'sıfır hata'</strong> prensibiyle çalışıyoruz.
                        </p>

                        {/* ÖZELLİK LİSTESİ */}
                        <div className="flex flex-col gap-6 mt-4">
                            {features.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    className="flex items-start gap-5 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
                                >
                                    {/* İkon Kutusu: Kırmızı -> Hover: Siyah */}
                                    <div className="shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-primary-red group-hover:bg-gray-100 group-hover:text-gray-900 transition-colors duration-300">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    {/* Yazılar */}
                                    <div className="pt-1">
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* SAĞ TARAFI: İstatistik Kartları */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center h-full min-h-[180px] group"
                            >
                                {/* İstatistik İkonları: Kırmızı -> Hover: Siyah */}
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                                    <stat.icon className="w-8 h-8 text-primary-red group-hover:text-gray-900 transition-colors duration-300" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-500 font-bold text-sm lg:text-base">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}