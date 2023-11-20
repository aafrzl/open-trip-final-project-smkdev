import React from 'react';
import { motion } from 'framer-motion';

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 1.5,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 50,
      }}
      className="absolute top-[40%] md:left-[20%]">
      <h1 className="uppercase font-bold text-center md:text-start text-5xl text-white">
        Never Stop <br /> Exploring the World
      </h1>
    </motion.div>
  );
}
