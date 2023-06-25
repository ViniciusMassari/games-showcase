import Card from './components/Card';
import { errorStatus, getGamesInfo } from './lib';

export default async function Home() {
  const response = await getGamesInfo();

  if (typeof response === 'string') {
    return (
      <main className='min-h-screen bg-blue flex items-center text-white justify-center'>
        {response}
      </main>
    );
  }

  if (response instanceof Response) {
    if (!errorStatus(response.status)) {
      return (
        <main className='min-h-screen bg-blue flex items-center text-white justify-center'>
          <p className=''>
            O servidor falhou em responder, tente recarregar a página
          </p>
        </main>
      );
    }
    if (response.status === 200) {
      const jogos: IGame[] = await response.json();

      return (
        <main className='min-h-screen justify-items-center bg-blue grid grid-cols-3  text-white max-md:grid-cols-2 max-mobile:grid-cols-1 '>
          {jogos &&
            jogos !== undefined &&
            jogos.length > 0 &&
            jogos.map((jogo) => {
              return <Card game={jogo} key={jogo.id} />;
            })}
        </main>
      );
    }
  }
}
