import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
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
            setIsScrolled(window.scrollY > 50);

            // Active section detection
            const sections = navLinks.map(link => link.href.substring(1));
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
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/5'
                : 'bg-gradient-to-b from-white via-white to-white/80'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end h-20 gap-8">

                    {/* Logo - Sağ tarafta */}
                    <motion.a
                        href="#hero"
                        onClick={(e) => handleLinkClick(e, '#hero')}
                        className="flex items-center gap-3 group order-last"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="relative">
                            <img
                                src="/logo.svg"
                                alt="Eğinkaya İnşaat Logo"
                                className="h-14 w-auto transition-all duration-300 group-hover:brightness-110"
                            />
                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-red to-primary-red/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
                        </div>
                    </motion.a>

                    {/* Desktop Menu - Sağ tarafta */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navLinks.slice(0, -1).map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${activeLink === link.href
                                        ? 'text-primary-red'
                                        : 'text-gray-700 hover:text-primary-red'
                                    }`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                                {/* Active indicator */}
                                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-red transition-all duration-300 ${activeLink === link.href ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                                    }`} />
                                {/* Hover background */}
                                <span className="absolute inset-0 bg-primary-red/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </motion.a>
                        ))}

                        {/* Divider */}
                        <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-2" />

                        {/* CTA Button - Teklif Al */}
                        <motion.a
                            href="#contact"
                            onClick={(e) => handleLinkClick(e, '#contact')}
                            className="relative group ml-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-red via-red-500 to-primary-red rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-all duration-300 group-hover:blur-md animate-pulse" />
                            <div className="relative flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-red to-red-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300">
                                <Phone className="w-4 h-4" />
                                <span>Teklif Al</span>
                                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="relative">
                            {isOpen ? (
                                <X className="w-5 h-5 text-primary-red" />
                            ) : (
                                <Menu className="w-5 h-5 text-gray-700 group-hover:text-primary-red transition-colors" />
                            )}
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden overflow-hidden"
                    >
                        <div className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
                            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${activeLink === link.href
                                                ? 'bg-primary-red/10 text-primary-red'
                                                : 'hover:bg-gray-100 text-gray-700'
                                            }`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <span className="font-semibold">{link.name}</span>
                                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeLink === link.href ? 'text-primary-red' : 'text-gray-400'
                                            } group-hover:translate-x-1`} />
                                    </motion.a>
                                ))}

                                {/* Mobile CTA */}
                                <motion.a
                                    href="#contact"
                                    onClick={(e) => handleLinkClick(e, '#contact')}
                                    className="flex items-center justify-center gap-3 p-4 mt-4 bg-gradient-to-r from-primary-red to-red-600 text-white rounded-2xl font-semibold shadow-lg shadow-red-500/25"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Hemen Teklif Alın</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
