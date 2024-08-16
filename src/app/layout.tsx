import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import QueryClientC from '@/components/query-client';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { myFileRouter } from '@/app/api/uploadthing/core';
import { Toaster } from 'sonner';
import { inter } from '@/core/fonts';

export const metadata: Metadata = {
  title: 'Que hay pa hacer',
  description: 'Una plataforma para encontrar los eventos de tu gusto',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientC>
      <html lang='en'>
        <body className={inter.className + ' bg-[#FFEDCC]'}>
          <Toaster />
          <NextSSRPlugin routerConfig={extractRouterConfig(myFileRouter)} />
          <header className='bg-[#AF0007] text-white p-3 fixed w-dvw top-0'>
            <h1 className='text-3xl text-center font-bold'>
              ¿Que hay pa&apos; hacer?
            </h1>
          </header>
          <main className='mt-16'>{children}</main>
          <Footer />
        </body>
      </html>
    </QueryClientC>
  );
}
