'use client';

import { StarIcon } from '@/components/Icons/Icons';
import {
  Accordion,
  AccordionItem,
  Checkbox,
  Input,
  Slider,
  SliderValue,
} from '@nextui-org/react';
import { Calendar, ListFilterIcon, Search } from 'lucide-react';
import { useState } from 'react';

export default function FilterAccordion() {
  const [value, setValue] = useState<SliderValue[]>([1, 10]);

  return (
    <div className="w-[90%] lg:w-[30%] flex flex-col gap-8">
      <div className="inline-flex items-center gap-x-2 text-main">
        <ListFilterIcon className="w-6 h-6" />
        <h3 className="text-lg font-semibold">Filter</h3>
      </div>
      <Accordion
        variant="shadow"
        className="py-3">
        <AccordionItem
          key="1"
          aria-label="Tipe Perjalanan"
          title="Tipe Perjalanan"
          classNames={{
            title: 'text-[.875rem] font-bold',
          }}>
          <div className="flex flex-col items-start justify-center gap-2">
            <Checkbox radius="sm">Open Trip</Checkbox>
            <Checkbox radius="sm">Private Trip</Checkbox>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Tema Perjalanan"
          title="Tema Perjalanan"
          classNames={{
            title: 'text-[.875rem] font-bold',
          }}>
          <div className="flex flex-col items-start justify-center gap-2">
            <Checkbox radius="sm">Destinasi Populer</Checkbox>
            <Checkbox radius="sm">Vitamin Sea</Checkbox>
            <Checkbox radius="sm">Naik Naik ke Puncak Gunung</Checkbox>
            <Checkbox radius="sm">Menyatu Dengan Alam</Checkbox>
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Budget"
          title="Budget"
          classNames={{
            title: 'text-[.875rem] font-bold',
          }}>
          <div className="flex flex-col items-start justify-center gap-3">
            <Input
              size="sm"
              type="number"
              placeholder="Budget Minimum"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">RP</span>
                </div>
              }
            />
            <Input
              size="sm"
              type="number"
              placeholder="Budget Maximum"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">RP</span>
                </div>
              }
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Lokasi Keberangkatan"
          title="Lokasi Keberangkatan"
          classNames={{
            title: 'text-[.875rem] font-bold',
          }}>
          <div className="flex flex-col items-start justify-center gap-2">
            <Input
              size="sm"
              type="text"
              placeholder="Cari lokasi keberangkatan"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <Search />
                </div>
              }
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Destinasi"
          title="Destinasi"
          classNames={{
            title: 'text-[.875rem] font-bold',
          }}>
          <div className="flex flex-col items-start justify-center gap-2">
            <Input
              size="sm"
              type="text"
              placeholder="Cari Destinasi"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <Search />
                </div>
              }
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="Rating"
          title="Rating"
          classNames={{
            title: 'text-[.875rem] font-bold',
          }}>
          <div className="flex flex-col items-start justify-center gap-2">
            <Checkbox radius="sm">
              <span className="inline-flex items-center gap-x-2">
                <StarIcon className="ml-1" />5 Bintang
              </span>
            </Checkbox>
            <Checkbox radius="sm">
              <span className="inline-flex items-center gap-x-2">
                <StarIcon className="ml-1" />
                3-4 Bintang
              </span>
            </Checkbox>
          </div>
        </AccordionItem>
        <AccordionItem
          key="7"
          aria-label="Periode Keberangkatan"
          title="Periode Keberangkatan"
          classNames={{
            title: 'text-[.875rem] font-bold',
          }}>
          <div className="flex flex-col items-start justify-center gap-2">
            <Input
              size="sm"
              type="date"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <Calendar />
                </div>
              }
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="8"
          aria-label="Durasi"
          title="Durasi"
          classNames={{
            title: 'text-[.875rem] font-bold',
          }}>
          <div className="flex flex-col items-start justify-center gap-2 overflow-hidden">
            <div className="flex items-center gap-x-2">
              <Input
                size="sm"
                type="number"
                defaultValue="1"
                value={String(value[0])}
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <p>Hari</p>
                  </div>
                }
              />
              <Input
                size="sm"
                type="number"
                defaultValue="10"
                value={String(value[1])}
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <p>Hari</p>
                  </div>
                }
              />
            </div>
            <Slider
              size="md"
              step={1}
              minValue={0}
              maxValue={10}
              onChange={setValue as any}
              defaultValue={value as [number, number]}
              className="w-full"
              color="danger"
            />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
