import { Apple, PlaySquareIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function CallToAction() {
  return (
    <div className="w-full bg-main">
      <div className="mx-auto container flex items-center justify-around py-10 relative px-4">
        <div className="flex flex-col items-start gap-y-4">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl text-white font-bold uppercase text-center sm:text-start">
              Download App
            </h2>
            <p className="text-sm text-white text-center sm:text-justify">
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </p>
          </div>
          <div className="flex flex-col gap-y-2 self-center sm:self-auto">
            <p className="font-semibold text-white text-center sm:text-start">
              Get the App
            </p>
            <div className="inline-flex gap-x-2 items-center">
              <Image
                src="/google-play.svg"
                alt="Google Play Store"
                width={150}
                height={50}
                priority
              />
              <Image
                src="/store-apple.svg"
                alt="App Store"
                width={150}
                height={50}
                priority
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[500px] justify-between items-center hidden sm:flex">
          <Image
            src="/images/cta-phone-mockup-1.png"
            alt="Phone Mockup"
            width={480}
            height={960}
            priority
            className="absolute top-0 right-[30%] h-full w-fit object-contain"
          />
          <Image
            src="/images/cta-phone-mockup-2.png"
            alt="Phone Mockup"
            width={480}
            height={960}
            priority
            className="absolute bottom-0 right-0 h-full w-fit object-contain"
          />
        </div>
      </div>
    </div>
  );
}
