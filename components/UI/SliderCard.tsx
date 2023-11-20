'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import CardDestination from './CardDestination';

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';
import { Destination } from '@/types/destinations';

interface SliderCardProps {
  data: Destination[];
}

export default function SliderCard({ data }: SliderCardProps) {
  return (
    <Swiper
      breakpoints={{
        452: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      freeMode={true}
      modules={[FreeMode]}
      className="w-full max-h-[800px]">
      {data.map((destination) => (
        <SwiperSlide key={destination.id}>
          <CardDestination
            title={destination.title}
            price={destination.price}
            rating={destination.rating}
            image={destination.imageUrl}
            day={destination.day}
            night={destination.night}
            description={destination.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
