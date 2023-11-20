import React from 'react';
import { motion } from 'framer-motion';
import { Button, Input } from '@nextui-org/react';

export default function HeroSearch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 1.8,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 50,
      }}
      className="shadow-md flex items-center justify-between bg-white absolute top-[94%] lg:left-[25%] lg:right-[25%] md:left-[10%] md:right-[10%] p-5 gap-x-2 md:gap-x-5 md:w-[80%] xl:w-[50%] rounded-md min-w-fit">
      <Input
        type="text"
        label="Tujuan"
        placeholder="Semua Tempat"
      />
      <Input
        type="date"
        label="Jadwal"
        placeholder="Kapan Saja"
      />
      <Button
        size="lg"
        variant="solid"
        color="danger"
        radius="lg"
        className="font-semibold">
        Cari
      </Button>
    </motion.div>
  );
}
