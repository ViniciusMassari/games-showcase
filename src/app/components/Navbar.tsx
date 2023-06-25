import Link from 'next/link';
import React from 'react';
import Form from './Form';

const Navbar = () => {
  return (
    <nav className='bg-richBlack w-full flex h-24 items-center justify-evenly flex-wrap mobile:p-1'>
      <Link href={'/'} className='text-3xl text-white font-bold'>
        Games Showcase
      </Link>
      <Form />
    </nav>
  );
};

export default Navbar;
