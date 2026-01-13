import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/settings';

const contactInfo = [
    {
        icon: Phone,
        label: 'Bizi Arayın',
        value: SITE_CONFIG.phone,
        href: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`,
        action: 'Hemen Ara'
    },
    {
        icon: Mail,
        label: 'E-posta Gönderin',
        value: SITE_CONFIG.email,
        href: `mailto:${SITE_CONFIG.email}`,
        action: 'Mail Gönder'
    },
    {
        icon: MapPin,
        label: 'Merkez Ofis',
        value: SITE_CONFIG.address,
        href: 'https://maps.google.com',
        action: 'Yol Tarifi Al'
    },
    {
        icon: Clock,
        label: 'Çalışma Saatleri',
        value: 'Pzt - Cmt: 08:30 - 18:00',
        href: '#',
        action: 'Şu an Açık'
    },
];

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mesajınız başarıyla alındı! Ekibimiz en kısa sürede size dönüş yapacaktır.');
    };

    return (
        <section id="contact" className="bg-gray-50 section-padding relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100/50 skew-x-12 translate-x-20 z-0" />

            <div className="container-max relative z-10">

                {/* ===== HEADER SECTION ===== */}
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary-red font-bold tracking-wider uppercase text-sm">
                        İletişim
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                        Projenizi Birlikte Hayata Geçirelim
                    </h2>
                    <p className="text-gray-600">
                        Aklınızdaki sorular veya proje teklifleri için formu doldurabilir ya da doğrudan bize ulaşabilirsiniz.
                    </p>
                </motion.div>

                {/* ===== SPACER: Header ile Content arası ===== */}
                <div className="h-20" />

                {/* ===== MAIN CONTENT: Sol Kartlar + Sağ Form ===== */}
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">

                    {/* LEFT: Contact Info Cards */}
                    <motion.div
                        className="lg:col-span-2 flex flex-col gap-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.href}
                                target={info.icon === MapPin ? "_blank" : "_self"}
                                rel="noreferrer"
                                className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-red transition-colors duration-300">
                                    <info.icon className="w-6 h-6 text-primary-red group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">{info.label}</h4>
                                    <p className="text-gray-600 text-sm mb-2">{info.value}</p>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-primary-red opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        {info.action} <ArrowRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                    {/* RIGHT: Contact Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-10">
                                Hızlı Teklif Formu
                            </h3>

                            {/* Row 1: Ad + Telefon */}
                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Adınız Soyadınız</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-primary-red focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-300"
                                        placeholder="Adınız Soyadınız"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Telefon Numaranız</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-primary-red focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-300"
                                        placeholder="0(5XX) XXX XX XX"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Email + Konu */}
                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">E-posta Adresiniz</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-primary-red focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-300"
                                        placeholder="ornek@sirket.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Konu</label>
                                    <select
                                        className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-primary-red focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-300 appearance-none"
                                    >
                                        <option>Genel Bilgi</option>
                                        <option>Proje Teklifi</option>
                                        <option>İş Başvurusu</option>
                                        <option>Diğer</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 3: Mesaj */}
                            <div className="space-y-2 mb-10">
                                <label className="text-sm font-semibold text-gray-700">Mesajınız</label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-primary-red focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-300 resize-none"
                                    placeholder="Projenizden kısaca bahsedin..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-10 py-4 bg-primary-red text-white font-bold rounded-xl hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 transform active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <Send className="w-5 h-5" />
                                Teklifi Gönder
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}