'use client';

import HeroText from './HeroText';

export default function Hero() {
  return (
    <div className="relative w-full -z-[10] flex items-center justify-start bg-hero-bg bg-cover bg-center h-[70vh]">
      <HeroText />
    </div>
  );
}
