const packages = [
  {
    name: 'Temel',
    level: 'basic',
    price: 'Ücretsiz',
    features: ['Haritada yer alır']
  },
  {
    name: 'Gelişmiş',
    level: 'advanced',
    price: '10 Pi',
    features: ['Öne çıkma', 'Mesajlaşma']
  },
  {
    name: 'Premium',
    level: 'premium',
    price: '30 Pi / 5$',
    features: ['DAO profil sayfası', 'Analitik']
  }
];

export default function PackageSelector({ businessId }: { businessId: string }) {
  const upgrade = async (level: string) => {
    await fetch('/api/businesses/upgrade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: businessId,
        packageLevel: level,
        paymentTx: 'pi_tx_mock_123' // Gerçekte Pi Wallet ile alınır
      })
    });
    alert(`İşletme paketi "${level}" seviyesine yükseltildi`);
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
            onClick={() => upgrade(pkg.level)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Paketi Yükselt
          </button>
        </div>
      ))}
    </div>
  );
}
