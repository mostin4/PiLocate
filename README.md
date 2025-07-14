# 🌐 PiLocate — DAO Tabanlı KYB Keşif Platformu
# 🌐 PiLocate DApp

![Deploy: Vercel](...)
![Frontend: Next.js](...)

## 🔐 KYC doğrulama...

Mobil uyumlu, Pi Network destekli, DAO simülasyonlu ve AI entegreli çok dilli DApp altyapısı.  
KYC doğrulanmış kullanıcılar KYB işletmeleri haritada keşfedebilir, DAO panellerine katılabilir ve yapay zekâ destekli modüllerle öğrenebilir.

---

## 🧩 Özellikler

- 🔐 Pi Wallet ile giriş & KYC doğrulama  
- 🗺️ Harita üzerinde KYB doğrulanmış işletme listesi (Leaflet.js)  
- 🧾 İşletme ile mesajlaşma modülü  
- 🗳️ DAO paneli ile canlı oylama ve puan güncelleme  
- 🧠 AI destekli çok dilli eğitim modülü  
- 📱 Mobil ve Pi Browser uyumlu tasarım  
- 💬 SVG tabanlı ikonlar ve Hero banner entegrasyonu  

---

## 🧱 Proje Yapısı
PiLocate/ 
├── frontend/ # Next.js tabanlı kullanıcı arayüzü │ 
├── pages/ # Route tabanlı sayfalar (index.tsx, map.tsx, edu.tsx, dao.tsx) │ 
├── components/ # Hero, Modül menüsü, Eğitim kartları vb. │ 
├── public/ # banner.svg, ikonlar (.svg) 
│ └── styles/ # Tailwind & özelleştirilmiş CSS (isteğe bağlı) 
├── backend/ # Express.js & MongoDB veri yapısı │ 
├── models/ # Business.js & Message.js │ 
├── api/ # KYB, iletişim, DAO endpoint'leri │ 
├── config/ # db.js bağlantısı │ 
└── server.js # API sunucusu

---

## 🖼️ Görsel Tanıtım

![Hero Banner](/frontend/public/banner.svg)

### İkonlar

| 🌐 Pi | 🌍 Global | 📱 Mobil | 🗳️ DAO |
|------|----------|---------|--------|
| ![Pi](/frontend/public/icons/pi.svg) | ![World](/frontend/public/icons/world.svg) | ![Mobile](/frontend/public/icons/mobile.svg) | ![DAO](/frontend/public/icons/dao.svg) |

---

## 🚀 Sayfalar

| Sayfa               | Açıklama                                     |
|---------------------|----------------------------------------------|
| `/`                 | Giriş ekranı, Hero banner, modül menüsü      |
| `/map`              | Harita üzerinde KYB işletmeleri              |
| `/contact/[id]`     | Seçilen işletmeyle mesajlaşma                 |
| `/edu`              | AI destekli etkileşimli DAO eğitim modülü   |
| `/dao`              | DAO oylama simülasyonu ve oy takibi          |

---

## 🔧 Çalıştırma (Local)

### 🧬 Backend:

```bash
cd backend
npm install
npm start     # http://localhost:4000
## 🌍 Diller & Modüller

| Dil       | Bayrak | Eğitim Modülü | DAO Paneli | KYB Haritası |
|-----------|--------|----------------|------------|--------------|
| Türkçe 🇹🇷 | `tr`   | [/edu?lang=tr](/edu?lang=tr) | [/dao?lang=tr](/dao?lang=tr) | [/map?lang=tr](/map?lang=tr) |
| English 🇺🇸 | `en`   | [/edu?lang=en](/edu?lang=en) | [/dao?lang=en](/dao?lang=en) | [/map?lang=en](/map?lang=en) |
| Français 🇫🇷 | `fr` | [/edu?lang=fr](/edu?lang=fr) | [/dao?lang=fr](/dao?lang=fr) | [/map?lang=fr](/map?lang=fr) |
| 中文 🇨🇳    | `zh`   | [/edu?lang=zh](/edu?lang=zh) | [/dao?lang=zh](/dao?lang=zh) | [/map?lang=zh](/map?lang=zh) |


