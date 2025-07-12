import { useState } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [kycStatus, setKycStatus] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    // Pi Network Login Simulation (Pi SDK entegrasyonu yapılabilir)
    setIsLoggedIn(true);
    setKycStatus(true); // Mock veri
    setUserName('Tayfun');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-purple-50 to-white text-center">
      <img src="/logo.svg" className="w-20 h-20 mb-6" alt="DAOVerse Logo" />

      {!isLoggedIn ? (
        <>
          <h1 className="text-2xl md:text-4xl font-bold text-purple-800 mb-2">
            DAOVerse — Kararlarını Kodla
          </h1>
          <p className="text-gray-600 mb-6">Pi Wallet ile giriş yaparak DAO dünyasına adım at.</p>
          <button
            className="px-6 py-3 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition"
            onClick={handleLogin}
          >
            Pi ile Giriş Yap
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl text-purple-700 font-semibold mb-2">
            Hoş geldin {userName}!
          </h2>
          <p className="text-gray-600 mb-4">
            KYC Durumun: <span className="font-bold">{kycStatus ? 'Doğrulandı ✅' : 'Bilinmiyor ❌'}</span>
          </p>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-md mt-2 hover:bg-indigo-600">
            Eğitim Modülüne Geç →
          </button>
        </>
      )}
    </div>
  );
}
