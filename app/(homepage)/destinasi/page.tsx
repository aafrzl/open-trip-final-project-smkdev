import { Divider } from '@nextui-org/react';
import FilterAccordion from '../_components/FilterAccordion';
import FilterUrutan from '../_components/FilterUrutan';
import GridCard from '../_components/GridCard';
import Pagination from '../_components/Pagination';

export default function DestinasiPage() {
  return (
    <div className="my-16 mx-auto container flex flex-col items-end justify-end">
      <div className="flex flex-col gap-4 lg:flex-row items-center justify-between w-full">
        <h2 className="text-4xl font-bold">Semua Tur</h2>
        <FilterUrutan />
      </div>

      <Divider className="w-full mt-5" />

      <div className="flex flex-col lg:flex-row lg:items-start items-center w-full mt-14 gap-8">
        <FilterAccordion />
        <GridCard />
      </div>
      <Pagination />
    </div>
  );
}
