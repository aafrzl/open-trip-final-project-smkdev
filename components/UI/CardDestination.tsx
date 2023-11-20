import { Badge, Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { StarIcon } from '../Icons/Icons';

export default function CardDestination() {
  return (
    <Card
      className="p-4"
      radius="sm"
      isHoverable={true}
      disableRipple={true}
      classNames={{
        base: 'cursor-pointer',
      }}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start relative">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full h-full"
          src="/images/tanjung-benoa.jpeg"
          width={1080}
          height={1080}
          priority
        />
        <div className="absolute bottom-0 right-0 bg-black py-1 px-2 rounded-full">
          <p className="text-white">3D1N</p>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-bold text-xl mb-4">Tanjung Benoa, Bali</h2>
          <p className="text-sm">
            Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku
          </p>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-md">
              <span className="text-xl font-semibold text-main">
                Rp. 2.000.000
              </span>{' '}
              / Orang
            </h3>
            <div className="inline-flex gap-x-2 items-center">
              <StarIcon />
              <p className="font-semibold">4.8</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
