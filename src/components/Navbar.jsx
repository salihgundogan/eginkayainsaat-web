import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('#hero');

    useEffect(() => {
        const handleScroll = () => {
            // Scroll eşiğini 20px yaparak tepki süresini hızlandırdık
            setIsScrolled(window.scrollY > 20);

            // Active section detection (Observer pattern'e daha yakın bir mantık)
            const sections = navLinks.map(link => link.href.substring(1));
            // Tersten kontrol ederek en alttaki görünür bölümü yakalıyoruz
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 200) {
                    setActiveLink(`#${section}`);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        setActiveLink(href);
        const element = document.querySelector(href);
        if (element) {
            // Header yüksekliği kadar offset bırakarak scroll et
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-0'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'
                        }`}
                >
                    {/* Logo Area */}
                    <motion.a
                        href="#hero"
                        onClick={(e) => handleLinkClick(e, '#hero')}
                        className="flex items-center gap-3 group relative z-50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <img
                            // Scroll durumuna göre logo değişimi (Public klasöründe logo-white.svg olduğunu varsayıyorum)
                            src={isScrolled ? "/logo.svg" : "/logo-white.svg"}
                            alt="Eğinkaya İnşaat"
                            className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'
                                }`}
                        />
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 ml-auto">
                        {navLinks.slice(0, -1).map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isScrolled
                                        ? 'text-gray-600 hover:text-primary-red'
                                        : 'text-white/90 hover:text-white'
                                    } ${activeLink === link.href ? (isScrolled ? 'text-primary-red font-semibold' : 'text-white font-semibold') : ''}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        {/* Desktop CTA - Simple Text Link Style */}
                        <motion.a
                            href="#contact"
                            onClick={(e) => handleLinkClick(e, '#contact')}
                            className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${isScrolled
                                    ? 'text-primary-red hover:text-red-700'
                                    : 'text-white hover:text-red-200'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Teklif Al
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden relative p-2 rounded-lg transition-colors z-50 ${isScrolled || isOpen ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-0 left-0 right-0 bg-white shadow-2xl lg:hidden border-b border-gray-100"
                    >
                        {/* Header yüksekliği kadar boşluk bırak ki X ikonu üstte kalsın */}
                        <div className="h-20" />

                        <div className="px-4 pb-8 space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className={`flex items-center justify-between p-4 rounded-xl transition-all ${activeLink === link.href
                                            ? 'bg-red-50 text-primary-red font-semibold'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.a
                                href="#contact"
                                onClick={(e) => handleLinkClick(e, '#contact')}
                                className="flex items-center justify-center gap-2 w-full p-4 mt-4 bg-primary-red text-white rounded-xl font-semibold active:bg-red-700 transition-colors"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Phone className="w-5 h-5" />
                                <span>Bizi Arayın</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}