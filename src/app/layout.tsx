import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className + ' bg-rose-100'}>
        <header className='bg-rose-600 text-white p-3 fixed w-dvw top-0'>
          <h1 className='text-3xl text-center font-bold'>
            ¿Que hay pa&apos; hacer?
          </h1>
        </header>
        <main className='mt-16'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
