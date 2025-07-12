import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const mockBusinesses = [
  {
    id: '0',
    name: 'Pi Cafe',
    email: 'pi.cafe@example.com',
    description: 'Pi ile ödeme kabul eden kafe. KYB doğrulanmış.',
  },
  {
    id: '1',
    name: 'PiSigorta Ofisi',
    email: 'sigorta@pi.com',
    description: 'DAO destekli sigorta hizmeti veren ofis.',
  },
];

export default function ContactPage() {
  const router = useRouter();
  const { id } = router.query;

  const [business, setBusiness] = useState<any>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (id) {
      const found = mockBusinesses.find((b) => b.id === id);
      setBusiness(found || null);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API çağrısı yapılabilir (POST → /api/contact)
    alert(`Mesaj gönderildi: "${message}" → ${business.email}`);
    setMessage('');
  };

  if (!business) return <p className="text-center py-10">İşletme yükleniyor...</p>;

  return (
    <div className="min-h-screen bg-white px-4 py-6 flex flex-col items-center">
      <div className="w-full max-w-md p-5 border rounded-lg shadow bg-gray-50">
        <h2 className="text-xl font-bold text-indigo-800 mb-2">
          {business.name} ile İletişim Kur
        </h2>
        <p className="text-gray-700 mb-4">{business.description}</p>

        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınızı buraya yazın..."
            className="w-full h-32 p-3 border rounded-md mb-3 resize-none"
            required
          />

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Mesaj Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
