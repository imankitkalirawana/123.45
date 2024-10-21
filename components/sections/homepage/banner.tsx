import { Button, Input } from '@nextui-org/react';
import Image from 'next/image';
export default function Banner() {
  return (
    <>
      <div className="relative min-h-[105vh] w-full rounded-b-[40px] bg-[#171717] text-[#e1dcdc]">
        {/* for future background usage */}
        <Image
          alt="banner"
          src={'/products/banner.png'}
          className="absolute left-[80%] top-0 aspect-video h-full -translate-x-1/2 object-contain"
          loading="lazy"
          width={500}
          height={300}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1500px"
        />
        <div className="absolute inset-0 left-0 top-0 min-h-screen object-cover"></div>
        <div className="relative flex h-screen flex-col items-start justify-center gap-4 px-4 text-white md:px-12">
          <h3 className="inline-block bg-gradient-to-b from-white to-[#777] bg-clip-text text-[90px] font-medium uppercase leading-normal tracking-wider text-transparent">
            Clear Sound <br />
            <span className="">Clear Skies</span>
          </h3>
          <Button radius="full" className="px-12 py-4 text-lg">
            EXPLORE
          </Button>
        </div>
      </div>
    </>
  );
}
