import { Button } from '@nextui-org/react';
import Image from 'next/image';

export default function AllProducts() {
  return (
    <>
      <div className="flex flex-col px-12 pt-12">
        <div className="flex flex-col gap-6">
          <h2 className="inline-block text-7xl font-medium uppercase tracking-wider text-transparent">
            <span className="bg-gradient-to-b from-white to-[#777] bg-clip-text">
              All
            </span>
            <br />
            <span className="bg-gradient-to-b from-white to-[#777] bg-clip-text">
              Products
            </span>
          </h2>
          <div>
            <Button
              color="primary"
              radius="full"
              className="px-12 py-4 text-lg"
            >
              EXPLORE
            </Button>
          </div>
        </div>
        <div className="flex justify-center gap-14">
          {products.slice(0, 2).map((product) => (
            <Card key={product._id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

interface CardProps {
  _id: string;
  title: string;
  price: number;
  image: string;
}

const Card = ({ _id, title, price, image }: CardProps) => {
  return (
    <>
      <div className="relative flex aspect-square h-[400px] w-[400px] flex-col justify-end rounded-[30px] bg-[#171717] p-8 text-white">
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2">
          <Image
            src={image}
            width={400}
            height={400}
            className="aspect-square h-[400px] w-[400px] object-contain"
            alt={'product'}
          />
        </div>
        <div className="flex items-end justify-between gap-12">
          <div>
            <h3 className="text-4xl font-medium">{title}</h3>
            <p className="text-2xl text-[#bec0c2]">${price}</p>
          </div>
          <div>
            <Button className="px-8" radius="full">
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const products = [
  {
    _id: '1',
    title: 'Product 1',
    price: 100,
    image: '/products/product1.png'
  },
  {
    _id: '2',
    title: 'Product 2',
    price: 200,
    image: '/products/product2.png'
  },
  {
    _id: '3',
    title: 'Product 3',
    price: 300,
    image: '/product3.png'
  },
  {
    _id: '4',
    title: 'Product 4',
    price: 400,
    image: '/product4.png'
  },
  {
    _id: '5',
    title: 'Product 5',
    price: 500,
    image: '/product5.png'
  }
];
