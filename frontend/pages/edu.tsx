import { useState, useEffect } from 'react';

const aiResponses: Record<string, string> = {
  'DAO nedir?': 'DAO, merkeziyetsiz otonom organizasyon anlamına gelir. Topluluk tarafından yönetilen bir yapıdır.',
  'Tokenlar nasıl çalışır?': 'Tokenlar, blokzincirde dijital varlıkları temsil eder ve genellikle bir işleve sahiptir.',
  'Pi Network’te oylama süreci': 'Pi’de oylama, Pi Wallet kimliğiyle DAO sözleşmesine etkileşim yoluyla gerçekleşir.',
  'KYC/KYB nedir?': 'KYC, kişiyi; KYB, işletmeyi doğrulayan sistemlerdir. Güvenli etkileşim sağlar.',
};

export default function EduPage() {
  const [kycStatus, setKycStatus] = useState(false);
  const [userLang, setUserLang] = useState('tr');
  const [topics, setTopics] = useState<string[]>([]);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  useEffect(() => {
    setKycStatus(true);
    setUserLang('tr');
    setTopics(Object.keys(aiResponses));
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 bg-white">
      <h1 className="text-2xl font-bold text-indigo-700 text-center mb-4">
        Yapay Zekâ ile DAO Eğitimi
      </h1>

      <p className="text-center text-gray-700 mb-6">
        KYC: <strong>{kycStatus ? 'Doğrulandı ✅' : 'Bilinmiyor ❌'}</strong> &nbsp; | &nbsp;
        Dil: <strong>{userLang.toUpperCase()}</strong>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
        {topics.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTopic(topic)}
            className={`border p-4 rounded-lg shadow hover:bg-indigo-50 text-left transition ${
              activeTopic === topic ? 'border-indigo-600 bg-indigo-50' : ''
            }`}
          >
            <h3 className="font-semibold text-indigo-800 mb-1">{topic}</h3>
            <p className="text-sm text-gray-600">Tıklayarak AI açıklamasını görüntüle.</p>
          </button>
        ))}
      </div>

      {activeTopic && (
        <div className="max-w-2xl mx-auto bg-indigo-100 p-6 rounded-lg shadow text-indigo-900">
          <h2 className="text-xl font-bold mb-3">🧠 AI Açıklaması:</h2>
          <p className="text-base leading-relaxed">{aiResponses[activeTopic]}</p>
        </div>
      )}
    </div>
  );
}

