import { CarFront, Utensils } from 'lucide-react';

// import ExpenseTracker, {
//   spendingTrackerProps
// } from '@/animata/widget/expense-tracker';
import { cn } from '@/lib/utils';
import Image from 'next/image';

function BentoCard({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden rounded-3xl p-4',
        className
      )}
    >
      {children}
    </div>
  );
}

function FeatureOne() {
  return (
    <BentoCard className="flex max-h-[986px] flex-col items-center gap-16 bg-[#1c1717] px-10 py-0 sm:row-span-2">
      <Image
        src={'/products/grid-1.png'}
        width={400}
        height={400}
        alt="hero-1"
        className="w-[590px] object-contain"
      />
      <div>
        <p className="text-center text-3xl text-white">
          These lightweight headphones are beautifully finished in newly
          developed soft fit leather.{' '}
          <span className="bg-gradient-to-r from-[#ba5463] to-[#8269c5] bg-clip-text text-transparent">
            This material fits snugly around the head with less pressure on the
            ears while keeping out external sounds
          </span>
          . Our noiseless design with step less slider, seamless swivel and
          hanger makes WH-1000XM5 a pleasure to wear.
        </p>
      </div>
    </BentoCard>
  );
}

function FeatureTwo() {
  return (
    <BentoCard className="relative flex aspect-square max-h-[517px] flex-col gap-2 border bg-background dark:border-zinc-700">
      <Image
        alt="banner"
        src={'/products/grid-2.png'}
        className="absolute inset-0 left-0 top-0 h-full w-full object-cover"
        loading="lazy"
        width={500}
        height={300}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1500px"
      />
      <span className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 text-center text-3xl text-white">
        Everything&apos;s at your fingertips. Quick access to your favorite
        music and soundscapes
      </span>
    </BentoCard>
  );
}

function FeatureThree() {
  return (
    <BentoCard className="flex max-h-[449px] flex-col items-center justify-center gap-12 border bg-[#1c1717]">
      <Image
        alt="banner"
        src={'/products/grid-3.png'}
        className="w-[192px] object-cover"
        loading="lazy"
        width={200}
        height={200}
      />
      <div className="flex flex-col items-center text-3xl text-white">
        <h3 className="bg-gradient-to-r from-[#ba5463] to-[#8269c5] bg-clip-text text-transparent">
          Auto Play
        </h3>
        <p className="text-center">
          Hear your sound right when you need it, delivered according to your
          activity.
        </p>
      </div>
    </BentoCard>
  );
}

export default function Three() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-3 sm:grid-cols-2 sm:grid-rows-2">
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </div>
  );
}
