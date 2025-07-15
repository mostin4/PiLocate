export default function PackageSelector({ businessId }: { businessId: string }) {
  const packages = [
    {
      name: 'Temel',
      level: 'basic',
      price: 'Ücretsiz',
      features: ['Haritada listelenme']
    },
    {
      name: 'Gelişmiş',
      level: 'advanced',
      price: '0.00001 Pi',
      features: ['Öne çıkma', 'Mesajlaşma']
    },
    {
      name: 'Premium',
      level: 'premium',
      price: '0.00010 Pi / 5$',
      features: ['DAO profil sayfası', 'Analitik', 'Kampanya vitrinleri']
    }
  ];

  const upgrade = async (level: string, price: string) => {
    // 🔐 Ödeme işlemi: Pi Wallet üzerinden çağrı
    if (window?.Pi) {
      window.Pi.createPayment(
        {
          amount: level === 'advanced' ? 10 : 30,
          memo: `KYB Paket: ${level}`,
        },
        async (payment) => {
          if (payment?.transaction?.id) {
            // ✅ Backend'e paketi yükselt
            await fetch('/api/businesses/upgrade', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: businessId,
                packageLevel: level,
                paymentTx: payment.transaction.id
              })
            });
            alert(`"${level}" paketi başarıyla uygulandı ✅`);
          } else {
            alert('Ödeme başarısız oldu ❌');
          }
        }
      );
    } else {
      alert('Pi Browser içinde olmalısın!');
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      {packages.map((pkg) => (
        <div key={pkg.level} className="border p-4 rounded shadow">
          <h3 className="font-bold text-indigo-700 mb-2">{pkg.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{pkg.price}</p>
          <ul className="mb-3 text-sm text-gray-700 list-disc list-inside">
            {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <button
            onClick={() => upgrade(pkg.level, pkg.price)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Paketi Yükselt
          </button>
        </div>
      ))}
    </div>
  );
}
