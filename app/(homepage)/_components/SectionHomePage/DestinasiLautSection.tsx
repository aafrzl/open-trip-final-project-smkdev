import { dataDestinations } from '@/lib/dataDummy';
import { Destination } from '@/types/destinations';
import { ArrowRight } from 'lucide-react';
import SliderCard from '../../../../components/SliderCard';

export default function DestinasiLautSection() {
  const dataDestinationsSea = dataDestinations.filter(
    (destination) => destination.category === 'sea'
  );

  return (
    <div className="flex flex-col justify-center items-center mx-auto container mt-24 p-2">
      <div className="flex flex-col md:flex-row gap-y-3 items-center justify-between w-full mb-5">
        <h2 className="font-bold text-xl">Vitamin Sea</h2>
        <div className="inline-flex items-center gap-x-2">
          <p className="text-main uppercase text-md">Lihat Liburan Lainnya</p>
          <ArrowRight className="text-main w-5 h-5" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col w-full">
        <SliderCard data={dataDestinationsSea as Destination[]} />
      </div>
    </div>
  );
}
