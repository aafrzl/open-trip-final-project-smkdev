'use client';

import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

const urutan = [
  'Terbaru',
  'Terlama',
  'Harga Tertinggi',
  'Harga Terendah',
  'Rating Tertinggi',
  'Rating Terendah',
];

export default function FilterUrutan() {
  return (
    <Autocomplete
      label="Urutkan"
      labelPlacement="outside-left"
      placeholder="Cari Urutan"
      size="md"
      radius="sm"
      variant="bordered"
      className="max-w-sm">
      {urutan.map((item, i) => (
        <AutocompleteItem
          key={i}
          value={item}>
          {item}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
