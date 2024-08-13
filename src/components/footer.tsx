import Link from 'next/link';

function Footer() {
  return (
    <footer className='absolute bottom-0 w-dvw bg-rose-300'>
      <nav className='p-5'>
        <ul className='flex gap-12 text-3xl justify-center'>
          <li>
            <Link href='#'>
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
            <Link href='#'>
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
          <li>
            <Link href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='0.9em'
                height='1em'
                viewBox='0 0 344 384'
              >
                <path
                  fill='currentColor'
                  d='M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25m0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9'
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
