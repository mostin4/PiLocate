import { useState, useEffect } from 'react';

export default function EduPage() {
  const [kycStatus, setKycStatus] = useState(false);
  const [userLang, setUserLang] = useState('tr');
  const [topics, setTopics] = useState<string[]>([]);

  useEffect(() => {
    // Simülasyon: KYC ve dil tercihleri (gerçekte backend'den alınır)
    setKycStatus(true);
    setUserLang('tr');

    // AI öneri sistemi (mock)
    setTopics([
      'DAO nedir?',
      'Tokenlar nasıl çalışır?',
      'Pi Network’te oylama süreci',
      'KYC/KYB nedir?',
    ]);
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 bg-white">
      <h1 className="text-2xl font-bold text-indigo-700 text-center mb-4">
        Yapay Zekâ ile DAO Eğitimi
      </h1>

      <p className="text-center text-gray-700 mb-6">
        KYC durumun: <strong>{kycStatus ? 'Doğrulandı ✅' : 'Bilinmiyor ❌'}</strong> &nbsp; | &nbsp;
        Dil: <strong>{userLang.toUpperCase()}</strong>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {topics.map((topic, idx) => (
          <div key={idx} className="border p-4 rounded-lg shadow hover:bg-indigo-50">
            <h3 className="font-semibold text-indigo-800 mb-2">{topic}</h3>
            <p className="text-sm text-gray-600">
              Bu konu hakkında daha fazla bilgi almak için tıklayın.
            </p>
            <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Öğren →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
