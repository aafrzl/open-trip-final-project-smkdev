import CallToAction from '@/components/CTA/CallToAction';
import Hero from '@/components/Hero/Hero';
import HeroSearch from '@/components/Hero/HeroSearch';
import DestinasiAlamSection from '@/components/SectionHomePage/DestinasiAlamSection';
import DestinasiGunungSection from '@/components/SectionHomePage/DestinasiGunungSection';
import DestinasiLautSection from '@/components/SectionHomePage/DestinasiLautSection';
import DestinasiPopularSection from '@/components/SectionHomePage/DestinasiPopularSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <HeroSearch />
      <DestinasiPopularSection />
      <DestinasiLautSection />
      <DestinasiGunungSection />
      <DestinasiAlamSection />
      <CallToAction />
    </main>
  );
}
