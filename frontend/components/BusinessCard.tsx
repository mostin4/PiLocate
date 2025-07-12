interface Business {
  name: string;
  description: string;
  isPiAccepted: boolean;
  daoScore: number;
  contactLink: string;
}

export default function BusinessCard({ data }: { data: Business }) {
  return (
    <div className="w-full max-w-md p-4 border rounded-lg shadow bg-white">
      <h2 className="text-xl font-bold text-indigo-800 mb-1">{data.name}</h2>
      <p className="text-gray-700 mb-2">{data.description}</p>

      <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
        <p className="text-sm text-green-700">
          {data.isPiAccepted ? '💰 Pi kabul ediyor' : '❌ Pi kabul etmiyor'}
        </p>
        <p className="text-sm text-purple-700">
          DAO Puanı: <strong>{data.daoScore}/10</strong>
        </p>
      </div>

      <a
        href={data.contactLink}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-center block"
      >
        İşletmeye Mesaj Gönder
      </a>
    </div>
  );
}
