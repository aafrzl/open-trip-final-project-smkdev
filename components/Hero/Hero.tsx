'use client';

import HeroText from './HeroText';

export default function Hero() {
  return (
    <div className="relative w-full -z-[10] flex items-center justify-start bg-[url('.//../public/images/hero-image.jpg')] bg-cover bg-center h-[70vh]">
      <HeroText />
    </div>
  );
}
