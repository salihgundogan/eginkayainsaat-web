import { Building2, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/settings';

const quickLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-primary-black text-white">
            <div className="container-max section-padding py-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <a
                            href="#hero"
                            onClick={(e) => handleLinkClick(e, '#hero')}
                            className="inline-block mb-8"
                        >
                            <img
                                src="/logo-white.svg"
                                alt="Eğinkaya İnşaat Logo"
                                className="h-28 w-auto"
                            />
                        </a>
                        <p className="text-gray-400 leading-relaxed max-w-md text-lg">
                            Kamu ve özel sektör projelerinde güvenilir, kaliteli ve zamanında
                            teslim anlayışıyla hizmet veriyoruz. Niğde, Kayseri ve Sivas
                            bölgelerinde projeleriniz için yanınızdayız.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8">Hızlı Linkler</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className="text-gray-400 hover:text-primary-red transition-colors text-lg"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-8">İletişim</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-primary-red shrink-0 mt-1" />
                                <span className="text-gray-400 text-lg">{SITE_CONFIG.phone}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-primary-red shrink-0 mt-1" />
                                <span className="text-gray-400 text-lg">{SITE_CONFIG.email}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-primary-red shrink-0 mt-1" />
                                <span className="text-gray-400 text-lg">{SITE_CONFIG.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-max section-padding py-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400">
                        <p className="text-lg">© {currentYear} Eğinkaya İnşaat. Tüm hakları saklıdır.</p>
                        <p className="text-lg">Profesyonel İnşaat Çözümleri</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
