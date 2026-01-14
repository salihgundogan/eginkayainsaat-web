import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    Hammer,
    PaintBucket,
    HardHat,
    Home,
    Wrench,
    MoveRight
} from 'lucide-react';

const services = [
    {
        icon: Building2,
        title: 'Kamu Projeleri',
        description: 'Devlet binaları, hastaneler ve okullar için yüksek standartlarda, yönetmeliklere tam uyumlu inşaat çözümleri.',
    },
    {
        icon: Home,
        title: 'Lüks Konut Projeleri',
        description: 'Modern yaşamın tüm gereksinimlerini karşılayan, estetik ve güvenliğin birleştiği nitelikli yaşam alanları.',
    },
    {
        icon: Hammer,
        title: 'Kaba Yapı İşleri',
        description: 'Projenin en önemli aşaması olan temel ve iskelet sisteminin, statik projelere birebir uyumla inşası.',
    },
    {
        icon: Wrench,
        title: 'Tadilat & Güçlendirme',
        description: 'Mevcut yapıların analiz edilmesi ve en güncel deprem yönetmeliklerine göre direncinin artırılması.',
    },
    {
        icon: PaintBucket,
        title: 'Restorasyon & Yenileme',
        description: 'Tarihi dokuyu bozmadan, yapıların ömrünü uzatan ve modern kullanıma hazırlayan hassas yenileme çalışmaları.',
    },
    {
        icon: HardHat,
        title: 'Proje Danışmanlığı',
        description: 'Arsa seçiminden ruhsat aşamasına, maliyet analizinden teslimata kadar profesyonel süreç yönetimi.',
    },
];

export default function Services() {
    // --- DRAG (SÜRÜKLEME) MANTIĞI ---
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };
    const handleMouseLeave = () => {
        setIsDown(false);
    };
    const handleMouseUp = () => {
        setIsDown(false);
    };
    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // *2 hızı arttırır
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };
    // --------------------------------

    return (
        <section 
            id="services" 
            className="relative bg-[#0F0F0F] overflow-hidden text-white"
            // [KURAL]: Boşluklar elle veriliyor
            style={{ paddingTop: '50px', paddingBottom: '70px' }}
        >
            
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                /* Sürükleme sırasında metin seçimini engelle */
                .no-select { user-select: none; }
            `}</style>

            <div className="absolute inset-0 opacity-[0.03]" 
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />
            
            {/* Konteyner Boşlukları */}
            <div className="container-max relative z-10 flex flex-col" style={{ gap: '60px' }}>
                
                {/* BAŞLIK ALANI */}
                <div className="flex flex-col max-w-3xl px-4 md:px-0" style={{ gap: '20px' }}>
                    <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-red-500"></span>
                        Hizmetlerimiz
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:whitespace-nowrap">
    Mükemmeliyet İnşa Ediyoruz
</h2>
                    <p className="text-gray-400 text-lg mt-2 leading-relaxed md:whitespace-nowrap">
    Sadece bina yapmıyoruz; geleceğe güvenli, estetik ve kalıcı eserler bırakıyoruz.
</p>

                    
                    {/* Mobil İpucu */}
                    <div className="flex md:hidden items-center gap-2 text-white/30 text-sm mt-2 animate-pulse">
                        <MoveRight className="w-4 h-4" />
                        <span>Kaydırın</span>
                    </div>
                </div>

                {/* SLIDER ALANI (MOUSE DRAG AKTİF) */}
                <div 
                    ref={sliderRef}
                    className={`flex overflow-x-auto pb-8 px-4 md:px-0 hide-scrollbar no-select ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
                    style={{ gap: '30px' }}
                    // Eventler
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="shrink-0 w-[85vw] md:w-[400px]"
                            // Drag işlemi snap ile çakışmasın diye snap class'larını kaldırdım, akıcı kaysın.
                        >
                            <div className="group h-full bg-[#1A1A1A] border border-white/5 rounded-[2rem] hover:border-red-500/50 transition-all duration-300 flex flex-col relative overflow-hidden"
                                // [KURAL]: Kart içi boşluklar elle
                                style={{ padding: '40px', gap: '30px' }}
                            >
                                
                                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/10 transition-colors duration-500" />

                                {/* 1. İkon ve Numara */}
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="w-14 h-14 bg-[#252525] rounded-xl flex items-center justify-center border border-white/5 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-lg">
                                        <service.icon className="w-7 h-7 text-red-500 group-hover:text-black transition-colors duration-500" />
                                    </div>
                                    <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 font-mono">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* 2. Başlık */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* 3. Açıklama */}
                                <div className="relative z-10 grow">
                                    <p className="text-gray-400 text-base leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>

                                {/* "İncele" butonu BURADAN KALDIRILDI. */}

                            </div>
                        </div>
                    ))}
                    
                    <div className="w-2 shrink-0" />
                </div>
            </div>
        </section>
    );
}