import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section 
            id="contact" 
            className="relative bg-white overflow-hidden"
            // Dikey Boşluklar (160px)
            style={{ paddingTop: '50px', paddingBottom: '160px' }}
        >
            {/* Arka Plan Dekorasyonu */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-red-50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px] pointer-events-none" />

            {/* Yan Boşluklar (%5) */}
            <div className="container-max relative z-10" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                    {/* --- SOL KOLON (Bilgiler) --- */}
                    <div className="lg:col-span-2 flex flex-col" style={{ gap: '40px' }}>
                        <div className="flex flex-col" style={{ gap: '20px' }}>
                            <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-red-600" />
                                İletişim
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1]">
                                Projenizi <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                                    Birlikte Planlayalım.
                                </span>
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Sorularınız, teklif talepleriniz veya danışmanlık için bize ulaşın. Ekibimiz en kısa sürede dönüş yapacaktır.
                            </p>
                        </div>

                        <div className="flex flex-col" style={{ gap: '25px' }}>
                            {/* Adres Kutusu - GÜNCELLENDİ */}
                            <div 
                                // p-6 kaldırıldı, style ile padding eklendi
                                className="flex items-start gap-5 rounded-3xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-colors duration-300 group shadow-sm hover:shadow-md"
                                style={{ padding: '20px' }}
                            >
                                <div className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-bold mb-1 text-lg">Merkez Ofis</h4>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        Germir Mah. 425. Sok. Karayer Apt. No: 40/A, <br /> Melikgazi/KAYSERİ
                                    </p>
                                </div>
                            </div>

                            {/* Telefon & Mail Kutuları - GÜNCELLENDİ */}
                            <div className="flex flex-col gap-4">
                                <a 
                                    href="tel:+90 533 020 94 42" 
                                    // p-5 kaldırıldı, style ile padding eklendi
                                    className="flex items-center gap-5 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:border-red-100 group transition-all duration-300"
                                    style={{ padding: '15px' }}
                                >
                                    <div className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm border border-gray-100 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-lg text-gray-700 group-hover:text-gray-900 transition-colors">+90 (533) 020 94 42</span>
                                </a>

                                <a 
                                    href="mailto:ibrahim@eginkayainsaat.com" 
                                    // p-5 kaldırıldı, style ile padding eklendi
                                    className="flex items-center gap-5 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:border-red-100 group transition-all duration-300"
                                    style={{ padding: '15px' }}
                                >
                                    <div className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm border border-gray-100 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-lg text-gray-700 group-hover:text-gray-900 transition-colors">ibrahim@eginkayainsaat.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* --- SAĞ KOLON (Form) --- */}
                    <div 
                        className="lg:col-span-3 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/70 border border-gray-100"
                        style={{ padding: '45px' }}
                    >
                        <form className="flex flex-col gap-5">
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">Bize Yazın</h3>

                            {/* İsim & Soyisim */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wide">Adınız</label>
                                    <input 
                                        type="text" 
                                        placeholder="Adınız" 
                                        style={{ padding: '18px 24px' }}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-400 placeholder:font-medium" 
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wide">Soyadınız</label>
                                    <input 
                                        type="text" 
                                        placeholder="Soyadınız" 
                                        style={{ padding: '18px 24px' }}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-400 placeholder:font-medium" 
                                    />
                                </div>
                            </div>

                            {/* E-posta & Telefon */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wide">E-posta</label>
                                    <input 
                                        type="email" 
                                        placeholder="ornek@sirket.com" 
                                        style={{ padding: '18px 24px' }}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-400 placeholder:font-medium" 
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wide">Telefon</label>
                                    <input 
                                        type="tel" 
                                        placeholder="05XX XXX XX XX" 
                                        style={{ padding: '18px 24px' }}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-400 placeholder:font-medium" 
                                    />
                                </div>
                            </div>

                            {/* Konu */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wide">Konu</label>
                                    <div className="relative">
                                        <select 
                                            style={{ padding: '18px 24px' }}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all cursor-pointer appearance-none"
                                        >
                                            <option>Genel Bilgi Talebi</option>
                                            <option>Proje Teklifi</option>
                                            <option>Kentsel Dönüşüm</option>
                                            <option>Diğer</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block"></div>
                            </div>

                            {/* Mesaj */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wide">Mesajınız</label>
                                <textarea 
                                    rows="3" 
                                    placeholder="Projenizden kısaca bahsedin..."
                                    style={{ padding: '18px 24px' }}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-400 placeholder:font-medium resize-none"
                                ></textarea>
                            </div>

                            {/* BUTON */}
                            <div className="flex justify-start pt-4">
                                <button 
                                    type="button" 
                                    style={{ padding: '20px 45px' }}
                                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-white font-bold text-lg shadow-2xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 w-auto"
                                >
                                    <span className="relative z-10">Mesajı Gönder</span>
                                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}