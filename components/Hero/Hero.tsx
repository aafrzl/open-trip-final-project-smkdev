'use client';

import { motion } from 'framer-motion';
import HeroSearch from './HeroSearch';
import HeroText from './HeroText';

export default function Hero() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        type: 'tween',
        stiffness: 50,
      }}
      className="relative w-full items-center justify-center bg-[url('.//../public/images/hero-image.jpg')] bg-cover bg-center h-[70vh]">
      
      <div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-black/30 mix-blend-multiply" />

      <HeroText />

      <HeroSearch />
    </motion.div>
  );
}
