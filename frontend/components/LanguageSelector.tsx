export default function LanguageSelector() {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {['tr', 'en', 'fr', 'zh'].map((lang) => (
        <button key={lang} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-sm rounded">
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
