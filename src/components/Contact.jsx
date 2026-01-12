import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { SITE_CONFIG } from '../config/settings';

const contactInfo = [
    {
        icon: Phone,
        label: 'Telefon',
        value: SITE_CONFIG.phone,
        href: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`,
    },
    {
        icon: Mail,
        label: 'E-posta',
        value: SITE_CONFIG.email,
        href: `mailto:${SITE_CONFIG.email}`,
    },
    {
        icon: MapPin,
        label: 'Adres',
        value: SITE_CONFIG.address,
        href: '#',
    },
    {
        icon: Clock,
        label: 'Çalışma Saatleri',
        value: 'Pzt - Cmt: 08:00 - 18:00',
        href: '#',
    },
];

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    };

    return (
        <section id="contact" className="bg-white section-padding">
            <div className="container-max">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-primary-red font-bold uppercase tracking-widest text-xs bg-red-50 px-4 py-2 rounded-full mb-4">
                        İletişim
                    </span>
                    <h2 className="heading-primary">Bizimle İletişime Geçin</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-xl leading-relaxed">
                        Projeleriniz için ücretsiz keşif ve fiyat teklifi almak için bize ulaşın.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-primary-black">
                                İletişim Bilgileri
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Projeleriniz hakkında görüşmek veya teklif almak için aşağıdaki
                                iletişim kanallarından bize ulaşabilirsiniz.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {contactInfo.map((info) => (
                                <a
                                    key={info.label}
                                    href={info.href}
                                    className="flex items-start gap-5 group"
                                >
                                    <div className="w-14 h-14 bg-primary-red/10 rounded-2xl flex items-center justify-center group-hover:bg-primary-red transition-colors duration-300 shrink-0">
                                        <info.icon className="w-6 h-6 text-primary-red group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 font-medium mb-1">{info.label}</div>
                                        <div className="text-primary-black font-semibold text-lg group-hover:text-primary-red transition-colors duration-300">
                                            {info.value}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl p-10 space-y-8 shadow-xl shadow-black/5 border border-gray-100"
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-primary-black mb-3">
                                        Adınız Soyadınız
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-red focus:ring-0 outline-none transition-all bg-neutral-lightgray text-lg"
                                        placeholder="Adınız Soyadınız"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-primary-black mb-3">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-red focus:ring-0 outline-none transition-all bg-neutral-lightgray text-lg"
                                        placeholder="0(5XX) XXX XX XX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-primary-black mb-3">
                                    E-posta
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-red focus:ring-0 outline-none transition-all bg-neutral-lightgray text-lg"
                                    placeholder="ornek@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-primary-black mb-3">
                                    Konu
                                </label>
                                <select
                                    required
                                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-red focus:ring-0 outline-none transition-all bg-neutral-lightgray text-lg"
                                >
                                    <option value="">Konu Seçin</option>
                                    <option value="teklif">Fiyat Teklifi</option>
                                    <option value="bilgi">Bilgi Almak</option>
                                    <option value="isbirligi">İş Birliği</option>
                                    <option value="diger">Diğer</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-primary-black mb-3">
                                    Mesajınız
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-red focus:ring-0 outline-none transition-all resize-none bg-neutral-lightgray text-lg"
                                    placeholder="Projeniz hakkında bilgi verin..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-3 text-lg"
                            >
                                <Send className="w-5 h-5" />
                                Mesaj Gönder
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
