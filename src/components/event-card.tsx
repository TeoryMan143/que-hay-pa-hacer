import Image from 'next/image';
import React from 'react';
import EventData from './event-data';
import { CEvent } from '@/core/types';
import Link from 'next/link';
import { UTAPI_URL } from '@/core/lib/utapi';

type Props = {
  event: CEvent;
};

function EventCard({ event }: Props) {
  const { title, id, image } = event;

  return (
    <Link
      className='flex gap-3 p-2 items-center rounded-md bg-white shadow'
      href={`/e/${id}`}
    >
      <div className='w-[180px]'>
        <Image
          className='rounded-md object-cover size-180'
          src={UTAPI_URL + image}
          alt={title}
          width={170}
          height={150}
        />
      </div>
      <div>
        <EventData event={event} />
      </div>
    </Link>
  );
}

export default EventCard;
