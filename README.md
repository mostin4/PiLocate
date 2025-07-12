# PiLocate — Güvenli İşletmeleri Keşfet

**PiLocate**, Pi Network üzerinde KYC doğrulanmış kullanıcıların KYB doğrulaması yapılmış işletmeleri **konum tabanlı harita üzerinden** keşfetmelerini sağlayan merkeziyetsiz bir web uygulamasıdır.

Pi Wallet, DAO oylaması ve AI destekli öneri sistemleriyle entegre çalışır.

---

## 🚀 Özellikler

- 🔐 **KYC kontrolü:** Kullanıcılar Pi Wallet ile doğrulanır  
- 🏢 **KYB işletme verisi:** DAO paneliyle doğrulanmış gerçek işyerleri  
- 🗺️ **Harita gösterimi:** Leaflet.js ile mobil uyumlu yerel keşif  
- 📋 **İşletme detayları:** Adres, Pi kabul durumu, oylama puanı, yorumlar  
- 📡 **Konum tabanlı filtreleme**  
- 🧠 **AI öneri modülü** *(isteğe bağlı)*

---

## 🛠️ Teknolojiler

| Katman      | Teknoloji               |
|-------------|--------------------------|
| Frontend    | React + Next.js + Tailwind |
| Backend     | Node.js + MongoDB        |
| Harita      | Leaflet.js or Google Maps |
| DAO Paneli  | Custom Smart Contract (Solidity) |
| Entegrasyon | Pi Wallet + Manifest + KYC/KYB API |

---

## 📦 Kurulum

```bash
git clone https://github.com/yourusername/pilocate.git
cd pilocate
npm install
npm run dev
