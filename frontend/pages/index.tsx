import { useState } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [kycStatus, setKycStatus] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    // Pi SDK entegrasyonu bu noktaya yerleştirilir
    setIsLoggedIn(true);
    setKycStatus(true); // Mock KYC durumu
    setUserName('Tayfun');
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 flex flex-col items-center">
      {/* Logo */}
      <img src="/logo.svg" alt="PiLocate Logo" className="w-20 h-20 mb-4" />

      {/* Başlık */}
      <h1 className="text-3xl text-indigo-800 font-bold text-center mb-2">
        PiLocate — Güvenli İşletmeleri Keşfet
      </h1>
      <p className="text-gray-600 text-center mb-6">
        KYC doğrulanmış kullanıcılar yakındaki KYB işletmeleri haritada görebilir.
      </p>

      {/* Giriş Butonu */}
      {!isLoggedIn ? (
        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 shadow"
          onClick={handleLogin}
        >
          Pi ile Giriş Yap
        </button>
      ) : (
        <>
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-indigo-700">
              Hoş geldin, {userName}! 👋
            </h2>
            <p className="text-gray-600 mt-1">
              KYC Durumu: <strong>{kycStatus ? 'Doğrulandı ✅' : 'Bilinmiyor ❌'}</strong>
            </p>
          </div>

          {/* Harita Geçiş */}
          <a
            href="/map"
            className="inline-block px-5 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition shadow"
          >
            Haritaya Git → KYB İşletmeleri Gör
          </a>
        </>
      )}
    </div>
  );
}
      
