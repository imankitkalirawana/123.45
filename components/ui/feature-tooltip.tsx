import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Card } from '@nextui-org/react';

interface FeatureTooltipProps {
  className?: string;
  title?: string;
  description?: string;
  classNames?: {
    container?: string;
    title?: string;
    description?: string;
    pinger?: string;
  };
}

export default function FeatureTooltip({
  className,
  title = 'Title',
  description = 'Description',
  classNames
}: FeatureTooltipProps) {
  return (
    <>
      <div className={cn('absolute w-fit', className)}>
        <Card
          className={cn(
            'rounded-[12px] bg-background p-6 text-lg',
            classNames?.container
          )}
        >
          <h3 className={cn('font-bold', classNames?.title)}>{title}</h3>
          <p className={cn('whitespace-nowrap', classNames?.description)}>
            {description}
          </p>
        </Card>
        <div
          className={cn(
            'absolute right-[-12%] flex aspect-square size-6 items-center justify-center rounded-full bg-white text-black shadow',
            classNames?.pinger
          )}
        >
          <div className="absolute aspect-square size-6 animate-ping rounded-full bg-white"></div>
          <Icon icon="akar-icons:plus" />
        </div>
      </div>
    </>
  );
}
