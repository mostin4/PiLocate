export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-purple-50 to-white py-10 px-4 text-center">
      {/* Banner */}
      <div className="mb-6">
        <img
          src="/banner.svg"
          alt="PiLocate Banner"
          className="w-full max-w-4xl mx-auto rounded-lg shadow"
        />
      </div>

      {/* Başlık */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-4">
        DAOVerse — Kararlarını Kodla!
      </h1>

      {/* Açıklama */}
      <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-6">
        Pi Network üzerinde KYC doğrulanmış kullanıcılar için global DAO eğitimi, KYB işletme haritası ve yapay zekâ destekli modüller sunan mobil uyumlu DApp platformu.
      </p>

      {/* İkon Menüsü */}
      <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
        <IconItem label="Pi Network" src="/icons/pi.svg" />
        <IconItem label="Global Erişim" src="/icons/world.svg" />
        <IconItem label="Mobil Uyum" src="/icons/mobile.svg" />
        <IconItem label="DAO Gücü" src="/icons/dao.svg" />
      </div>

      {/* Giriş Butonu */}
      <button className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
        Pi ile Giriş Yap
      </button>
    </section>
  );
}

function IconItem({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex flex-col items-center">
      <img src={src} alt={label} className="w-10 h-10 mb-1" />
      <span className="text-sm text-indigo-700 font-medium">{label}</span>
    </div>
  );
}
