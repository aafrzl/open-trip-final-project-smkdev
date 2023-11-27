import { Divider } from '@nextui-org/react';
import FilterUrutan from '../_components/FilterUrutan';

export default function DestinasiPage() {
  return (
    <div className="my-16 mx-auto container flex flex-col items-start justify-center">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-4xl font-bold">Semua Tur</h2>
        <FilterUrutan />
      </div>
      <Divider className="w-full mt-5" />
      <div className='flex items-center justify-between border p-24 w-full'>
      {/* TODO: Buat besok */}
      {/* Filter Accourdion */}
      {/* Grid Card with Pagination */}
      </div>
    </div>
  );
}
