import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

export default function Hero3() {
  return (
    <>
      <div className="bg-[#140f0f] py-12 text-[#f2edee]">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between">
          <h3 className="bg-gradient-to-b from-[#424245] to-[#252528] bg-clip-text text-7xl text-transparent">
            Case
          </h3>
          <div className="flex items-center gap-8">
            <Image
              src={'/products/product4.png'}
              alt=""
              height={419}
              width={300}
            />
            <div className="flex max-w-60 flex-col gap-8">
              <p>
                With a comfortable and adaptable case so that you can store it
                whenever you want, and keep your durability forever.
              </p>
              <div>
                <Button
                  startContent={
                    <Icon
                      icon={'bx:bx-info-circle'}
                      className="text-white"
                      fontSize={20}
                    />
                  }
                  className="rounded-[8px] bg-[#221d20] px-4 text-white"
                >
                  More info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
