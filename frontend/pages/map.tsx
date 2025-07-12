import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Map = dynamic(() => import('../components/MapView'), { ssr: false });

export default function MapPage() {
  const [kybList, setKybList] = useState([]);

  useEffect(() => {
    // KYB mock verisi — API'den de çekilebilir
    setKybList([
      {
        name: 'Pi Cafe',
        lat: 41.0082,
        lng: 28.9784,
        description: 'Pi Network ödeme kabul eden kafe. KYB doğrulanmış.',
      },
      {
        name: 'PiSigorta Ofisi',
        lat: 41.0151,
        lng: 28.9795,
        description: 'DAO destekli sigorta hizmeti veren ofis. KYB onaylı.',
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 bg-white">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
        KYB Doğrulanmış İşletmeler
      </h1>
      <Map kybList={kybList} />
    </div>
  );
}
