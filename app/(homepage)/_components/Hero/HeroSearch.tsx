'use client';

import { Button, Input } from '@nextui-org/react';

export default function HeroSearch() {
  return (
    <div className="shadow-md flex items-center justify-between lg:-mt-12 -mt-14 z-10 bg-white p-5 gap-x-2 md:gap-x-5 md:w-[80%] xl:w-[50%] rounded-md min-w-fit">
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
    </div>
  );
}
