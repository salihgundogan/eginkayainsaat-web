import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
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
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveLink(`#${section}`);
                        break;
                    }
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
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'py-2'
                        : 'py-4'
                }`}
            >
                {/* Glassmorphism Background */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                    isScrolled 
                        ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-b border-white/20' 
                        : 'bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-md'
                }`} />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo with Hover Effect */}
                        <motion.a
                            href="#hero"
                            onClick={(e) => handleLinkClick(e, '#hero')}
                            className="flex items-center gap-3 group relative"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-red/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src="/logo.svg"
                                    alt="Eğinkaya İnşaat Logo"
                                    className={`relative w-auto transition-all duration-300 ${
                                        isScrolled ? 'h-14' : 'h-16 md:h-20'
                                    }`}
                                />
                            </div>
                        </motion.a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center">
                            {/* Navigation Pills Container */}
                            <div className="flex items-center gap-1 bg-gray-50/80 backdrop-blur-sm rounded-full px-2 py-2 border border-gray-100/50">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                            activeLink === link.href
                                                ? 'text-white'
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                        whileHover={{ scale: activeLink === link.href ? 1 : 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Active Background Pill */}
                                        {activeLink === link.href && (
                                            <motion.div
                                                layoutId="activeNavPill"
                                                className="absolute inset-0 bg-gradient-to-r from-primary-red to-primary-darkred rounded-full shadow-lg shadow-primary-red/25"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">{link.name}</span>
                                    </motion.a>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                href="#contact"
                                onClick={(e) => handleLinkClick(e, '#contact')}
                                className="ml-6 group relative overflow-hidden bg-primary-black text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary-black/20"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Teklif Al
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-red to-primary-darkred translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50/80 border border-gray-100/50 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg transition-all duration-300"
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        
                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl z-50 md:hidden shadow-2xl"
                        >
                            {/* Close Button */}
                            <div className="flex justify-end p-4">
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            </div>

                            {/* Menu Items */}
                            <div className="px-6 py-4 space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 + 0.1 }}
                                        className={`flex items-center justify-between py-4 px-4 rounded-2xl transition-all duration-300 ${
                                            activeLink === link.href
                                                ? 'bg-gradient-to-r from-primary-red to-primary-darkred text-white shadow-lg shadow-primary-red/20'
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        <span className="font-semibold text-lg">{link.name}</span>
                                        <ChevronRight className={`w-5 h-5 transition-transform ${
                                            activeLink === link.href ? 'translate-x-1' : ''
                                        }`} />
                                    </motion.a>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.div 
                                className="absolute bottom-8 left-6 right-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <a
                                    href="#contact"
                                    onClick={(e) => handleLinkClick(e, '#contact')}
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-primary-black text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                                >
                                    Ücretsiz Teklif Al
                                    <ChevronRight className="w-5 h-5" />
                                </a>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
