'use client';

import { listBank } from '@/lib/dataDummy';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { Search } from 'lucide-react';
import React from 'react';

export default function SelectorInput() {
  return (
    <Autocomplete
      defaultItems={listBank}
      label="Pembayaran Bank"
      labelPlacement="outside"
      size="lg"
      variant="bordered"
      radius='sm'
      placeholder="Cari Bank Untuk Pembayaran"
      startContent={<Search className='h-6 w-6' />}
      >
      {(item) => (
        <AutocompleteItem
          key={item.code}
          value={item.code}>
          {item.name}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
