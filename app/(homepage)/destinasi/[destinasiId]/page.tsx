'use client';

import { StarIcon } from '@/components/Icons/Icons';
import { dataDestinations } from '@/lib/dataDummy';
import { formatPrice } from '@/lib/utils';
import {
  Avatar,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  CircularProgress,
  Divider,
  Input,
  Progress,
  Tab,
  Tabs,
} from '@nextui-org/react';
import { Calendar, MapPin, Search } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Key, useState } from 'react';

export default function DetailDestinasiPage({
  params,
}: {
  params: { destinasiId: string };
}) {
  const [selected, setSelected] = useState<string>('detail-perjalanan');

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

  const getProvice = dataDetailDestination[0].title.split(',')[1];

  return (
    <div className="w-full min-h-screen flex gap-12 flex-col mb-14">
      <div className="flex flex-col lg:flex-row items-start gap-10">
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
        <div className="flex flex-grow flex-col items-start gap-10 mx-5 mt-10">
          <div className="flex flex-col w-full gap-4">
            <Breadcrumbs
              separator="/"
              itemClasses={{
                separator: 'px-2',
              }}
              color="danger">
              <BreadcrumbItem href="/destinasi">Destinasi</BreadcrumbItem>
              <BreadcrumbItem>{getProvice}</BreadcrumbItem>
            </Breadcrumbs>
            <Divider />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold">
              {dataDetailDestination[0].title}
            </h2>
            <p className="text-base text-[#9F9F9F]">
              {dataDetailDestination[0].description}
            </p>
          </div>

          <div className="flex items-center justify-between bg-[#F1F1F1] p-5 w-full rounded-lg">
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
            <p className="text-sm">Harga berdasarkan jumlah orang</p>
            <div className="flex flex-col items-start gap-2">
              <Progress
                label={`${formatPrice(dataDestinations[0].price)} / orang`}
                value={3}
                minValue={0}
                maxValue={10}
                color="danger"
                classNames={{
                  label: 'text-base font-bold text-main',
                  labelWrapper: 'flex flex-row-reverse item-end w-full',
                }}
              />
              <p className="text-xs lg:text-sm">3 dari 10 kuota sudah terisi</p>
            </div>
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
              maxLength={10}
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

      <div className="flex flex-col lg:mx-auto container mt-10">
        <Tabs
          variant="bordered"
          color="danger"
          aria-label="Options"
          size="lg"
          selectedKey={selected}
          onSelectionChange={(key: Key) => setSelected(String(key))}>
          <Tab
            key="detail-perjalanan"
            title="Detail Perjalanan">
            <div className="flex flex-col items-start w-full mt-10">
              <div className="flex items-start w-1/2 justify-between">
                <div className="flex flex-col items-center bg-main p-4 rounded-md">
                  <p className="text-white text-sm">Hari</p>
                  <p className="text-white text-lg">1</p>
                </div>
                <div className="flex items-start flex-col gap-2">
                  <div className="flex gap-x-14 items-center">
                    <p>20:30</p>
                    <p>Berkumpul di Meeting Point</p>
                  </div>
                  <div className="flex gap-x-14 items-center">
                    <p>21:00</p>
                    <p>Perjalanan menuju destinasi</p>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            key="syarat-ketentuan"
            title="Syarat & Ketentuan">
            <div className="flex flex-col items-start w-full mt-10">
              <p className="text-justify">
                Syarat dan ketentuan berlaku untuk semua peserta yang melakukan
                pemesanan paket wisata di website ini. Dengan melakukan
                pemesanan, maka peserta dianggap telah membaca, mengerti,
                memahami dan menyetujui semua isi dalam syarat dan ketentuan
                berikut ini. Syarat dan ketentuan ini dapat berubah
                sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Syarat dan
                ketentuan ini berlaku untuk semua peserta baik yang melakukan
                pemesanan secara langsung maupun melalui pihak ketiga (agen).
                Syarat dan ketentuan ini berlaku untuk semua peserta baik yang
                melakukan pemesanan secara langsung maupun melalui pihak ketiga
                (agen).
              </p>
            </div>
          </Tab>
          <Tab
            key="galeri"
            title="Galeri">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
              <div className="col-span-1">
                <Image
                  src={dataDetailDestination[0].imageUrl}
                  alt="image"
                  width={1000}
                  height={1000}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={dataDetailDestination[0].imageUrl}
                  alt="image"
                  width={1000}
                  height={1000}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={dataDetailDestination[0].imageUrl}
                  alt="image"
                  width={1000}
                  height={1000}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={dataDetailDestination[0].imageUrl}
                  alt="image"
                  width={1000}
                  height={1000}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={dataDetailDestination[0].imageUrl}
                  alt="image"
                  width={1000}
                  height={1000}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={dataDetailDestination[0].imageUrl}
                  alt="image"
                  width={1000}
                  height={1000}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Tab>
          <Tab
            key="ulasan"
            title="Ulasan">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
              <div className="col-span-1">
                <div className="flex flex-col gap-2 bg-main p-4 rounded-xl text-white">
                  <div className="flex flex-row items-center gap-2">
                    <Avatar name="Lorem Ipsum" />
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Lorem Ipsum</p>
                      <div className="inline-flex items-center gap-x-2">
                        <StarIcon />
                        <p className='text-sm font-semibold'>4.5</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptates.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-2 bg-main p-4 rounded-xl text-white">
                  <div className="flex flex-row items-center gap-2">
                    <Avatar name="Lorem Ipsum" />
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Lorem Ipsum</p>
                      <div className="inline-flex items-center gap-x-2">
                        <StarIcon />
                        <p className='text-sm font-semibold'>4.5</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptates.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-2 bg-main p-4 rounded-xl text-white">
                  <div className="flex flex-row items-center gap-2">
                    <Avatar name="Lorem Ipsum" />
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Lorem Ipsum</p>
                      <div className="inline-flex items-center gap-x-2">
                        <StarIcon />
                        <p className='text-sm font-semibold'>4.5</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptates.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-2 bg-main p-4 rounded-xl text-white">
                  <div className="flex flex-row items-center gap-2">
                    <Avatar name="Lorem Ipsum" />
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Lorem Ipsum</p>
                      <div className="inline-flex items-center gap-x-2">
                        <StarIcon />
                        <p className='text-sm font-semibold'>4.5</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptates.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-2 bg-main p-4 rounded-xl text-white">
                  <div className="flex flex-row items-center gap-2">
                    <Avatar name="Lorem Ipsum" />
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Lorem Ipsum</p>
                      <div className="inline-flex items-center gap-x-2">
                        <StarIcon />
                        <p className='text-sm font-semibold'>4.5</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptates.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-2 bg-main p-4 rounded-xl text-white">
                  <div className="flex flex-row items-center gap-2">
                    <Avatar name="Lorem Ipsum" />
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Lorem Ipsum</p>
                      <div className="inline-flex items-center gap-x-2">
                        <StarIcon />
                        <p className='text-sm font-semibold'>4.5</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptates.
                  </p>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
