import AllProducts from '@/components/sections/homepage/all-products';
import Banner from '@/components/sections/homepage/banner';
import GridHero from '@/components/sections/homepage/grid-hero';
import Hero1 from '@/components/sections/homepage/hero-1';
import Hero2 from '@/components/sections/homepage/hero-2';
import Hero3 from '@/components/sections/homepage/hero-3';
import ProductDesign from '@/components/sections/homepage/product-design';

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-[90rem]">
        <Banner />
        <AllProducts />
        <Hero1 />
        <ProductDesign />
        <Hero2 />
        <GridHero />
        <Hero3 />
      </div>
    </>
  );
}
