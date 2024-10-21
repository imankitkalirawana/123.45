import { cn } from '@/lib/utils';
import Three from '../animata/bento-grid/three';
interface SectionHeaderProps {
  title?: string;
  description?: string;
  className?: string;
  //   define slots to classnames
  classNames?: {
    title?: string;
    description?: string;
  };
}

export default function SectionHeader({
  title = 'Title',
  description = 'Description',
  className,
  classNames
}: SectionHeaderProps) {
  return (
    <>
      <div className={cn('flex flex-col items-center gap-2', className)}>
        <h3
          className={cn(
            'inline-block bg-gradient-to-r from-[#FF9D3C] to-[#7792F8] bg-clip-text pb-4 text-7xl font-bold text-transparent',
            classNames?.title
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'max-w-[558px] text-center text-lg font-light',
            classNames?.description
          )}
        >
          {description}
        </p>
      </div>
    </>
  );
}
