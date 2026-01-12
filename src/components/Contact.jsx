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
                    className="text-center mb-16"
                >
                    <span className="text-primary-red font-semibold uppercase tracking-wider text-sm">
                        İletişim
                    </span>
                    <h2 className="heading-primary mt-2">Bizimle İletişime Geçin</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                        Projeleriniz için ücretsiz keşif ve fiyat teklifi almak için bize ulaşın.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-primary-black mb-4">
                                İletişim Bilgileri
                            </h3>
                            <p className="text-gray-600">
                                Projeleriniz hakkında görüşmek veya teklif almak için aşağıdaki
                                iletişim kanallarından bize ulaşabilirsiniz.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info) => (
                                <a
                                    key={info.label}
                                    href={info.href}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center group-hover:bg-primary-red transition-colors shrink-0">
                                        <info.icon className="w-5 h-5 text-primary-red group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 font-medium">{info.label}</div>
                                        <div className="text-primary-black font-semibold group-hover:text-primary-red transition-colors">
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
                            className="bg-white rounded-2xl p-8 space-y-6 shadow-lg border border-gray-100"
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-primary-black mb-2">
                                        Adınız Soyadınız
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-red focus:ring-0 outline-none transition-all bg-neutral-lightgray"
                                        placeholder="Adınız Soyadınız"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-primary-black mb-2">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-red focus:ring-0 outline-none transition-all bg-neutral-lightgray"
                                        placeholder="0(5XX) XXX XX XX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-primary-black mb-2">
                                    E-posta
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-red focus:ring-0 outline-none transition-all bg-neutral-lightgray"
                                    placeholder="ornek@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-primary-black mb-2">
                                    Konu
                                </label>
                                <select
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-red focus:ring-0 outline-none transition-all bg-neutral-lightgray"
                                >
                                    <option value="">Konu Seçin</option>
                                    <option value="teklif">Fiyat Teklifi</option>
                                    <option value="bilgi">Bilgi Almak</option>
                                    <option value="isbirligi">İş Birliği</option>
                                    <option value="diger">Diğer</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-primary-black mb-2">
                                    Mesajınız
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-red focus:ring-0 outline-none transition-all resize-none bg-neutral-lightgray"
                                    placeholder="Projeniz hakkında bilgi verin..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2"
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
