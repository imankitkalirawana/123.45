import { Button, Image } from '@nextui-org/react';
export default function Hero2() {
  return (
    <>
      <div className="bg-[#1d191a] py-12 text-[#f2edee]">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl">Immerse yourself with</h3>
              <Image radius="none" width={164} src="/logo-light.png" />
            </div>
            <p className="text-2xl text-[#BDC0C2]">Buy Now, up to 40% off.</p>
            <div>
              <Button className="bg-white px-12" radius="full">
                BUY NOW
              </Button>
            </div>
          </div>
          <div>
            <Image
              width={800}
              height={400}
              alt="NextUI hero Image with delay"
              src="/products/product3.png"
              className="aspect-[7/5] w-[540px] object-contain"
              radius="none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
