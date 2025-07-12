interface Business {
  name: string;
  description: string;
  isPiAccepted: boolean;
  daoScore: number;
  contactLink: string;
}

export default function BusinessCard({ data }: { data: Business }) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm p-4 border rounded-lg shadow bg-white">
      <h2 className="text-lg font-bold text-indigo-800 mb-1">{data.name}</h2>
      <p className="text-gray-700 mb-2">{data.description}</p>

      <div className="flex justify-between text-sm mb-3">
        <span className="text-green-700">
          {data.isPiAccepted ? '💰 Pi kabul ediyor' : '❌ Pi yok'}
        </span>
        <span className="text-purple-700">
          DAO Puanı: <strong>{data.daoScore}/10</strong>
        </span>
      </div>

      <a
        href={data.contactLink}
        className="block px-4 py-2 bg-indigo-600 text-white rounded-md text-center hover:bg-indigo-700"
      >
        İşletmeye Mesaj Gönder
      </a>
    </div>
  );
}


