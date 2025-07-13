const modules = [
  { label: 'KYB Harita', href: '/map', icon: '/icons/world.svg' },
  { label: 'DAO Oylama', href: '/dao', icon: '/icons/dao.svg' },
  { label: 'AI Eğitim', href: '/edu', icon: '/icons/pi.svg' },
];

export default function ModuleMenu() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
      {modules.map((mod) => (
        <a key={mod.label} href={mod.href} className="flex flex-col items-center p-4 border rounded shadow hover:bg-gray-50">
          <img src={mod.icon} alt={mod.label} className="w-8 h-8 mb-2" />
          <span className="text-sm font-medium text-indigo-700">{mod.label}</span>
        </a>
      ))}
    </div>
  );
}
