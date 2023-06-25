import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ game }: { game: IGame }) => {
  return (
    <div className='max-w-xs h-80 flex flex-col items-center m-2 self-center justify-self-center shadow bg-[#182854]'>
      <Image
        className='rounded'
        width={320}
        height={320}
        src={game.thumbnail}
        alt={game.short_description}
      />
      <Link
        href={`game/${game.id}`}
        className='m-1 p-1 text-2xl hover:underline hover:underline-offset-1'
      >
        {game.title}
      </Link>
      <Link
        href={`/genre/${game.genre}`}
        className='m-1 text-sm hover:underline hover:underline-offset-1 rounded'
      >
        {game.genre}
      </Link>
    </div>
  );
};

export default Card;
