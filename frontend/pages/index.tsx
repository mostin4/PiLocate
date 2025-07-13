import Hero from '../components/Hero';
import LanguageSelector from '../components/LanguageSelector';
import ModuleMenu from '../components/ModuleMenu';
import EduCallToAction from '../components/EduCallToAction';

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-4 py-6">
      <Hero />
      <LanguageSelector />
      <ModuleMenu />
      <EduCallToAction />
    </main>
  );
}

     
      
