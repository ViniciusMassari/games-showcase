import { ThreeDots } from 'react-loading-icons';

export default function Loading() {
  return (
    <section className='min-h-screen bg-blue flex items-center  justify-center  '>
      {' '}
      <ThreeDots stroke={'#fff'} className='motion-safe:animate-ping' />;
    </section>
  );
}
