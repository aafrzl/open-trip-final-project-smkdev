'use client';

import { dataDestinations } from '@/lib/dataDummy';
import { formatPrice } from '@/lib/utils';
import { Button, CircularProgress, Input, Progress } from '@nextui-org/react';
import { Calendar, MapPin, Search } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

export default function DetailDestinasiPage({
  params,
}: {
  params: { destinasiId: string };
}) {
  const dataDetailDestination = dataDestinations.filter(
    (destination) => String(destination.id) === params.destinasiId
  );

  const MapWithNoSSR = dynamic(
    () => import('@/app/(homepage)/_components/Map'),
    {
      ssr: false,
      loading: () => (
        <div className="w-full h-full flex items-center justify-center">
          <CircularProgress
            color="danger"
            aria-label="Loading Map"
          />
        </div>
      ),
    }
  );

  return (
    <div className="w-full min-h-screen flex gap-12 lg:flex-row flex-col mb-14">
      <div className="flex-grow-0">
        <Image
          src={dataDetailDestination[0].imageUrl}
          alt="image"
          width={1000}
          height={1000}
          className="object-contain"
          priority
        />
      </div>

      <div className="flex-grow mt-10 flex flex-col items-start gap-10 mx-5">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold">
            {dataDetailDestination[0].title}
          </h2>
          <p className="text-base text-[#9F9F9F]">
            {dataDetailDestination[0].description}
          </p>
        </div>

        <div className="flex items-center justify-between bg-[#F1F1F1] p-5 w-full lg:w-1/2 rounded-lg">
          <p>Saturday, 29 May 2021</p>
          <div className="inline-flex items-center gap-x-2">
            <Calendar className="text-main" />
            <p className="text-main text-sm">Lihat Tanggal Lain</p>
          </div>
        </div>

        <div className="flex-col flex w-full gap-4">
          <div className="flex lg:flex-row flex-col gap-4 lg:justify-between">
            <div className="inline-flex gap-x-2 items-center">
              <MapPin />
              <p className="text-sm">Titik Pejemputan</p>
            </div>
            <div>
              <Input
                type="text"
                value="Bandung"
                size="sm"
                variant="bordered"
                startContent={<Search />}
              />
            </div>
          </div>
          <MapWithNoSSR />
        </div>
        <div className="flex flex-col w-full gap-2">
          <p>Pejemputan</p>
          <Progress
            label={`${formatPrice(dataDestinations[0].price)} / orang`}
            value={3}
            minValue={0}
            maxValue={10}
            color="danger"
            showValueLabel
          />
        </div>
        <div className="inline-flex gap-x-2 items-center">
          <Input
            type="number"
            size="sm"
            variant="bordered"
            min={1}
            max={10}
            defaultValue="1"
            radius="sm"
          />
          <Button
            color="danger"
            size="lg"
            radius="sm">
            Pesan
          </Button>
        </div>
      </div>
    </div>
  );
}
