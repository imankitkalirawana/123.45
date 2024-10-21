import FeatureTooltip from '@/components/ui/feature-tooltip';
import SectionHeader from '@/components/ui/section-header';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Tooltip } from '@nextui-org/react';

export default function ProductDesign() {
  return (
    <>
      <div className="py-12">
        <SectionHeader
          title="Premium Design"
          description="When you want to take your music anywhere, you need headphones built to keep up. With impact-resistant materials, glass-filled nylon, and corrosion-resistant stainless steel, they're engineered to survive life on the go."
        />
        <div
          className="relative mx-auto mt-16 flex aspect-[3/4] h-screen bg-no-repeat"
          style={{
            backgroundImage: 'url(/products/banner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative h-full w-1/2">
            <FeatureTooltip
              title="Impact resistant"
              description="Designed to handle life on the go."
              className="right-[40%] top-0"
              classNames={{
                pinger: 'right-[-20%]'
              }}
            />
            <FeatureTooltip
              title="Impact resistant"
              description="Designed to handle life on the go."
              className="bottom-0 right-[80%]"
              classNames={{
                pinger: 'right-[-20%] top-1/2 -translate-y-1/2'
              }}
            />
          </div>
          <div className="relative h-full w-1/2">
            <FeatureTooltip
              title="Impact resistant"
              description="Designed to handle life on the go."
              className="left-[90%] top-[25%]"
              classNames={{
                pinger: '-left-[20%] top-[25%]'
              }}
            />
            <FeatureTooltip
              title="Impact resistant"
              description="Designed to handle life on the go."
              className="bottom-[20%] left-[105%]"
              classNames={{
                pinger: '-left-[20%] top-[25%]'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
