import Navbar from './components/Navbar';
import './globals.css';
import { IBM_Plex_Sans } from 'next/font/google';

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['700', '300'],
});

export const metadata = {
  title: 'Games Showcase',
  description: 'Created by Vinícius Massari',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={IBMPlexSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
