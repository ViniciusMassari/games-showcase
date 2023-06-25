import Link from 'next/link';
import React from 'react';

const notFound = () => {
  return (
    <section className='min-h-[90vh] bg-blue flex flex-col items-center justify-center text-white'>
      <p className='text-2xl mb-2'>
        {' '}
        Erro ao buscar informações, tente novamente mais tarde !
      </p>
      <Link className='bg-richBlack p-1 rounded shadow-sm' href={'/'}>
        Página inicial
      </Link>
    </section>
  );
};

export default notFound;
