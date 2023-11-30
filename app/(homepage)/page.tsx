import CallToAction from './_components/CTA/CallToAction';
import Hero from './_components/Hero/Hero';
import HeroSearch from './_components/Hero/HeroSearch';
import DestinasiAlamSection from './_components/SectionHomePage/DestinasiAlamSection';
import DestinasiGunungSection from './_components/SectionHomePage/DestinasiGunungSection';
import DestinasiLautSection from './_components/SectionHomePage/DestinasiLautSection';
import DestinasiPopularSection from './_components/SectionHomePage/DestinasiPopularSection';

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
