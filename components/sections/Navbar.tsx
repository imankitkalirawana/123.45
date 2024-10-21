'use client';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IconSearch, IconShoppingCart, IconUser } from '@tabler/icons-react';
import { Button, Link as NextLink } from '@nextui-org/react';

const Navbar = () => {
  const pathname = usePathname();
  if (pathname.includes('/auth') || pathname.includes('/dashboard'))
    return null;

  return (
    <>
      <div className="fixed left-1/2 top-0 z-[999] mx-auto flex h-[82px] w-full max-w-7xl -translate-x-1/2 items-center justify-between rounded-b-[50px] bg-[#ffffff] px-12">
        <div className="flex items-center gap-4 lg:gap-12">
          <Link href={'/'}>
            <Image
              width={120}
              height={50}
              src="/logo.png"
              alt="logo"
              className="w-[120px]"
            />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <NextLink as={Link} className="hover:underline" href={'/'}>
            Home
          </NextLink>
          <NextLink as={Link} className="hover:underline" href={'/products'}>
            Products
          </NextLink>
          <NextLink as={Link} className="hover:underline" href={'/about'}>
            About us
          </NextLink>
          <NextLink as={Link} className="hover:underline" href={'/contact'}>
            Contact us
          </NextLink>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="light" isIconOnly as={Link} href={'/profile'}>
            <IconSearch fontSize={20} />
          </Button>
          <Button variant="light" isIconOnly as={Link} href={'/profile'}>
            <IconShoppingCart fontSize={20} />
          </Button>
          <Button variant="light" isIconOnly as={Link} href={'/profile'}>
            <IconUser fontSize={20} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
