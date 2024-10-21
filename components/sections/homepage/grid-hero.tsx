import Three from '@/components/animata/bento-grid/three';
import { cn } from '@nextui-org/react';

export default function GridHero() {
  return (
    <>
      <div className="relative mx-auto max-w-6xl">
        <div className={cn('mt-[100px] flex flex-col items-center gap-2')}>
          <h3 className="inline-block pb-4 text-center text-6xl font-bold leading-tight">
            All Day Comfort With a <br />
            <span className="bg-gradient-to-r from-[#FF9D3C] to-[#7792F8] bg-clip-text text-transparent">
              Noiseless Design
            </span>
          </h3>
        </div>
        <div>
          <Three />
        </div>
      </div>
    </>
  );
}
