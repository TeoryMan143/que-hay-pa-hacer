'use client';

import { useQuery } from '@tanstack/react-query';
import TextFormInput from './text-form-input';
import { useEffect, useRef, useState } from 'react';
import { getAddressFromQuery } from '@/core/lib/location';
import { cn } from '@/core/utils';

type Props = {
  onLocationChange: (location: { lat: number; lng: number }) => void;
};

function SearchAddress({ onLocationChange }: Props) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  useEffect(() => {
    if (location) onLocationChange(location);
  }, [location, onLocationChange]);

  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ['search-addrs', query],
    queryFn: async () => {
      if (query === '') return [];

      const res = await getAddressFromQuery(query);

      if (res instanceof Error) {
        throw new Error();
      }

      return res;
    },
  });

  return (
    <div className='flex items-center bg-white text-slate-400 focus-within:text-black rounded-md group relative z-20'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 48 48'
        className='m-1'
      >
        <defs>
          <mask id='IconifyId191587b6dc39c021b1'>
            <g fill='none' strokeLinejoin='round' strokeWidth='4'>
              <path
                fill='#fff'
                stroke='#fff'
                d='M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z'
              />
              <path
                stroke='#000'
                strokeLinecap='round'
                d='M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343'
              />
              <path
                stroke='#fff'
                strokeLinecap='round'
                d='m33.222 33.222l8.485 8.485'
              />
            </g>
          </mask>
        </defs>
        <path
          fill='currentColor'
          d='M0 0h48v48H0z'
          mask='url(#IconifyId191587b6dc39c021b1)'
        />
      </svg>
      <TextFormInput
        className='flex-1 text-center'
        onChange={e => setQuery(e.target.value)}
        ref={inputRef}
      />
      <ul className='bg-white rounded-md hidden group-focus-within:block absolute top-12 w-full'>
        {error && (
          <div className='flex flex-col items-center text-red-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 40 40'
            >
              <path
                fill='currentColor'
                d='M20.001 2.683C10.452 2.683 2.684 10.451 2.684 20s7.769 17.317 17.317 17.317S37.316 29.548 37.316 20S29.549 2.683 20.001 2.683m0 33.134c-8.722 0-15.817-7.096-15.817-15.817S11.279 4.183 20.001 4.183c8.721 0 15.815 7.096 15.815 15.817s-7.094 15.817-15.815 15.817'
              />
              <path
                fill='currentColor'
                d='M20.013 22.697a7.726 7.726 0 0 0-6.604 3.682a.375.375 0 0 0 .122.516l.572.353a.375.375 0 0 0 .515-.122a6.304 6.304 0 0 1 5.394-3.011a6.305 6.305 0 0 1 5.374 2.979a.376.376 0 0 0 .516.118l.568-.356a.372.372 0 0 0 .118-.516a7.72 7.72 0 0 0-6.575-3.643'
              />
              <circle cx='15.431' cy='16.005' r='1.044' fill='currentColor' />
              <circle cx='24.568' cy='16.005' r='1.044' fill='currentColor' />
            </svg>
            Ha ocurrido un error
          </div>
        )}
        {isLoading && (
          <div className='grid place-content-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
            >
              <circle cx='12' cy='2' r='0' fill='currentColor'>
                <animate
                  attributeName='r'
                  begin='0'
                  calcMode='spline'
                  dur='1s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
              <circle
                cx='12'
                cy='2'
                r='0'
                fill='currentColor'
                transform='rotate(45 12 12)'
              >
                <animate
                  attributeName='r'
                  begin='0.125s'
                  calcMode='spline'
                  dur='1s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
              <circle
                cx='12'
                cy='2'
                r='0'
                fill='currentColor'
                transform='rotate(90 12 12)'
              >
                <animate
                  attributeName='r'
                  begin='0.25s'
                  calcMode='spline'
                  dur='1s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
              <circle
                cx='12'
                cy='2'
                r='0'
                fill='currentColor'
                transform='rotate(135 12 12)'
              >
                <animate
                  attributeName='r'
                  begin='0.375s'
                  calcMode='spline'
                  dur='1s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
              <circle
                cx='12'
                cy='2'
                r='0'
                fill='currentColor'
                transform='rotate(180 12 12)'
              >
                <animate
                  attributeName='r'
                  begin='0.5s'
                  calcMode='spline'
                  dur='1s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
              <circle
                cx='12'
                cy='2'
                r='0'
                fill='currentColor'
                transform='rotate(225 12 12)'
              >
                <animate
                  attributeName='r'
                  begin='0.625s'
                  calcMode='spline'
                  dur='1s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
              <circle
                cx='12'
                cy='2'
                r='0'
                fill='currentColor'
                transform='rotate(270 12 12)'
              >
                <animate
                  attributeName='r'
                  begin='0.75s'
                  calcMode='spline'
                  dur='1s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
              <circle
                cx='12'
                cy='2'
                r='0'
                fill='currentColor'
                transform='rotate(315 12 12)'
              >
                <animate
                  attributeName='r'
                  begin='0.875s'
                  calcMode='spline'
                  dur='1s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
            </svg>
          </div>
        )}
        {data?.map((a, i) => (
          <button
            className={cn('p-2 w-full', {
              'border-b-[1.5px] border-slate-300': i !== data.length - 1,
            })}
            key={a.address}
            type='button'
            onClick={e => {
              inputRef.current?.blur();
              setLocation(a.latlng);
              inputRef.current!.value = a.address!;
              e.currentTarget.blur();
            }}
          >
            {a.address}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default SearchAddress;
