import CardDestination from '@/components/CardDestination';
import { dataDestinations } from '@/lib/dataDummy';
import React from 'react';

export default function GridCard() {
  return (
    <div className="w-full grid lg:grid-flow-row lg:grid-cols-3">
      {dataDestinations.map((item) => (
        <CardDestination
          key={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.imageUrl}
          day={item.day}
          night={item.night}
          description={item.description}
          id={item.id}
        />
      ))}
    </div>
  );
}
