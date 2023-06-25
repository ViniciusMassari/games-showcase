'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getGamebyName } from '../lib';

const Form = () => {
  const [search, setSearch] = useState<string>('');
  const [placeholder, setPlaceholder] = useState<string>('');
  const router = useRouter();
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPlaceholder('');
    setSearch('');

    const game = await getGamebyName(search);
    if (!game) {
      setSearch('');
      setPlaceholder('Erro ao pesquisar !');
      return;
    }
    if (typeof game === 'object') {
      router.replace(`/game/${game.id}`);
    }
  }
  return (
    <form className='flex gap-2' onSubmit={handleSubmit}>
      <input
        className='rounded-lg p-1 placeholder:text-rose-700'
        type='text'
        value={search}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPlaceholder('');
          setSearch(e.target.value);
        }}
      />
      <button className='text-white bg-btGray p-1 rounded-lg hover:bg-gray-600 transition duration-300'>
        Search
      </button>
    </form>
  );
};

export default Form;
