import Card from '@/app/components/Card';
import { filterbyGenre } from '@/app/lib';

import { notFound } from 'next/navigation';

const page = async ({ params: { name } }: { params: { name: string } }) => {
  const games = await filterbyGenre(name);
  if (!games) {
    notFound();
  }
  return (
    <section
      className='min-h-screen justify-items-center bg-blue grid grid-cols-3  text-white max-md:grid-cols-2 max-mobile:grid-cols-1 
    '
    >
      {games &&
        games !== undefined &&
        games.length > 0 &&
        games.map((game) => {
          return (
            <>
              <Card game={game} key={game.id} />
            </>
          );
        })}
    </section>
  );
};

export default page;
