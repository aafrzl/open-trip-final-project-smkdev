import React from 'react';
import { Logo } from '../Icons/Icons';
import Image from 'next/image';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const date = new Date();

  return (
    <footer className="flex flex-col">
      <div className="flex flex-col lg:flex-row items-start justify-center lg:items-start lg:justify-between container p-5 lg:py-24 gap-8 lg:mx-auto">
        <Logo />
        <div className="flex flex-col items-start gap-8">
          <h3 className="text-xl font-normal text-center lg:text-start">
            Company
          </h3>
          <div className="flex flex-col justify-start gap-3">
            <p className="text-sm">About</p>
            <p className="text-sm">Press</p>
            <p className="text-sm">Careers</p>
            <p className="text-sm">Contact</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8">
          <h3 className="text-xl font-normal text-center lg:text-start">
            Support
          </h3>
          <div className="flex flex-col justify-start gap-3">
            <p className="text-sm">Help Center</p>
            <p className="text-sm">Tems of Service</p>
            <p className="text-sm">Legal</p>
            <p className="text-sm">Privacy Policity</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8">
          <h3 className="text-xl font-normal text-center lg:text-start">
            Kerja Sama
          </h3>
          <div className="flex flex-col justify-start gap-3">
            <Link href={'/register/hoster'}>
              <p className="text-sm">Daftar Jadi Hoster</p>
            </Link>
            <p className="text-sm">Hoster Terdaftar</p>
            <p className="text-sm">Careers</p>
            <p className="text-sm">Contact</p>
          </div>
        </div>
        <div className="flex-col items-start">
          <h3 className="text-xl font-normal">Get the App</h3>
          <div className="inline-flex gap-x-2">
            <Image
              src="/google-play.svg"
              alt="Google Play Store"
              width={150}
              height={50}
              priority
              className='object-contain w-full h-full'
            />
            <Image
              src="/store-apple.svg"
              alt="Google Play Store"
              width={150}
              height={50}
              priority
              className='object-contain w-full h-full'
            />
          </div>
        </div>
      </div>
      <div className="bg-[#0B0D17] py-6 w-full">
        <div className="flex items-center justify-between px-4 lg:px-0 lg:mx-auto container">
          <p className="text-white text-center text-sm">
            &copy; {date.getFullYear()} Open Trip. All rights reserved.
          </p>
          <div className="inline-flex gap-x-4">
            <Instagram className="text-white w-5 h-5" />
            <Twitter className="text-white w-5 h-5" />
            <Youtube className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
