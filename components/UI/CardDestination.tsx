import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { StarIcon } from '../Icons/Icons';
import { formatPrice, getDayNight } from '@/lib/utils';

interface CardDestinationProps {
  title: string;
  price: number;
  rating: number;
  image: string;
  day: number;
  night: number;
  description: string;
}

export default function CardDestination({
  title,
  price,
  rating,
  image,
  day,
  night,
  description,
}: CardDestinationProps) {
  return (
    <Card
      radius="sm"
      classNames={{
        base: 'p-2 my-4 mx-2',
      }}
      shadow="sm">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start relative">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={1000}
          height={1000}
          priority
        />
        <div className="absolute bottom-0 right-4 bg-black py-1 px-2 rounded-br-xl rounded-tl-xl">
          <p className="text-white">{getDayNight(day, night)}</p>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-bold text-xl mb-4">{title}</h2>
          <p className="text-sm">{description}</p>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-md">
              <span className="text-xl font-semibold text-main">
                {formatPrice(price)}
              </span>{' '}
              / Orang
            </h3>
            <div className="inline-flex gap-x-2 items-center">
              <StarIcon />
              <p className="font-semibold">{rating}</p>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <Button
          variant="solid"
          color="danger"
          className="w-full"
          size="lg"
          radius="sm">
          Pesan Sekarang
        </Button>
      </CardFooter>
    </Card>
  );
}
