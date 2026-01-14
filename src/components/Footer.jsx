import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer 
            className="relative bg-[#0F0F0F] text-white overflow-hidden"
            // [GARANTİ BOŞLUK]: Üstten ve alttan 100px boşluk.
            style={{ paddingTop: '100px', paddingBottom: '100px' }}
        >
            
            {/* Arka Plan Efekti (Hafif Kırmızı Işık) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

            {/* İçerik Konteyneri */}
            <div 
                className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
                // [GARANTİ BOŞLUK]: Elemanlar (Başlık, Yazı, Copyright) arası 30px boşluk
                style={{ gap: '30px' }}
            >
                
                {/* 1. MARKA BAŞLIĞI */}
                <h2 className="text-3xl md:text-4xl font-black tracking-[0.2em] uppercase">
                    EĞİNKAYA <span className="text-red-600">İNŞAAT</span>
                </h2>

                {/* 2. AÇIKLAMA METNİ */}
                {/* max-w-3xl: Metin çok yayılmasın, blok halinde okunsun */}
                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                    Kamu ve özel sektör projelerinde güvenilir, kaliteli ve zamanında teslim anlayışıyla hizmet veriyoruz. 
                    Niğde, Kayseri ve Sivas bölgelerinde projeleriniz için yanınızdayız.
                </p>

                {/* İnce Ayırıcı Çizgi (Estetik Durması İçin) */}
                <div className="w-full max-w-xs h-px bg-white/10" />

                {/* 3. COPYRIGHT */}
                <p className="text-gray-600 text-sm font-medium tracking-wide">
                    © 2026 Eğinkaya İnşaat. Tüm hakları saklıdır.
                </p>

            </div>
        </footer>
    );
}