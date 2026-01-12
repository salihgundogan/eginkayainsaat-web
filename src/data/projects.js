// Eğinkaya İnşaat Proje Listesi
// Her proje için yıl, başlık ve opsiyonel görsel alanı mevcut

export const projects = [
    // 2023 Projeleri
    {
        id: 1,
        year: 2023,
        title: 'Niğde İl Sağlık Müdürlüğü - 1. Basamak Sağlık Ocakları Yapım İşi',
        category: 'Kamu',
        location: 'Niğde',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    },

    // 2024 Projeleri
    {
        id: 2,
        year: 2024,
        title: 'Sivas İl Özel İdaresi - Atatürk Çocuk Kütüphanesi Yapım İşi',
        category: 'Kamu',
        location: 'Sivas',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    },
    {
        id: 3,
        year: 2024,
        title: 'Niğde İl Özel İdaresi - 7 Okul Bakım Onarım İşi',
        category: 'Kamu',
        location: 'Niğde',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    },
    {
        id: 4,
        year: 2024,
        title: 'Kayseri Üniversitesi - Develi Ve Yeşilhisar Yerleşkeleri 2024 Yılı Onarım, Tadilat Ve Yenileme Yapım İşi',
        category: 'Kamu',
        location: 'Kayseri',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    },
    {
        id: 5,
        year: 2024,
        title: 'Kayseri Üniversitesi Rektörlük Katı Onarım Ve Yenileme İşi',
        category: 'Kamu',
        location: 'Kayseri',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    },

    // 2025 Projeleri
    {
        id: 6,
        year: 2025,
        title: 'Kayseri / Becen Mah. Eylül Premium Villa Projesi',
        category: 'Özel',
        location: 'Kayseri',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    },
    {
        id: 7,
        year: 2025,
        title: 'Karayolları 6. Bölge Müdürlüğü Bina Ve Tesis Bakım, Onarım Ve Yapım İşi',
        category: 'Kamu',
        location: 'Türkiye',
        image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80',
    },
    {
        id: 8,
        year: 2025,
        title: 'Kayseri / Becen Mah. Anahtar Teslim Villa Projesi',
        category: 'Özel',
        location: 'Kayseri',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    },
    {
        id: 9,
        year: 2025,
        title: 'Kayseri / Talas Anahtar Teslim Villa Projesi',
        category: 'Özel',
        location: 'Kayseri',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
];

// Yıllara göre proje sayısı
export const projectStats = {
    2023: projects.filter(p => p.year === 2023).length,
    2024: projects.filter(p => p.year === 2024).length,
    2025: projects.filter(p => p.year === 2025).length,
    total: projects.length,
};
