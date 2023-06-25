import { getGameById, getGamesInfo } from '@/app/lib';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const game = await getGameById(id);

  if (!game) {
    return notFound();
  }

  return (
    <main className='min-h-screen text-white bg-blue flex flex-col items-center'>
      <Link
        href={'/'}
        className='self-start ml-20 mt-10 p-5 max-mobile:self-center max-mobile:ml-0 max-mobile:mt-0'
      >
        Go Back
      </Link>
      <Image
        src={game.thumbnail}
        width={500}
        height={500}
        alt={game.short_description}
        className='rounded mt-2'
      />
      <section className='flex flex-col gap-3 p-5 text-center'>
        <p>{game.short_description}</p>
        <p>Published by: {game.publisher}</p>
        <p>Platform: {game.platform}</p>
        <p>Released at: {game.release_date}</p>
        <p>developed by: {game.developer}</p>
      </section>
    </main>
  );
};

export default page;
