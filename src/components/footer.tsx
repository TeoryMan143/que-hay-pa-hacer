'use client';

import { cn } from '@/core/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Footer() {
  const pathName = usePathname();

  return (
    <footer className='fixed bottom-0 w-dvw bg-[#f2585b]'>
      <nav className='p-5'>
        <ul className='flex gap-12 text-3xl justify-center'>
          <li>
            <Link
              href='/'
              className={cn(
                {
                  'text-amber-400': pathName === '/',
                },
                'transition-colors',
              )}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1.13em'
                height='1em'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0M571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93'
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href='/add'
              className={cn(
                {
                  'text-amber-400': pathName === '/add',
                },
                'transition-colors',
              )}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z'
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
