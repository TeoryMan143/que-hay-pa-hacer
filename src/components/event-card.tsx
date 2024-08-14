import Image from 'next/image';
import React from 'react';
import EventData from './event-data';
import { CEvent } from '@/core/types';
import Link from 'next/link';

type Props = {
  event: CEvent;
};

function EventCard({ event }: Props) {
  const { title, image, id } = event;

  return (
    <Link
      className='flex gap-3 p-2 items-center rounded-md bg-white shadow'
      href={`/e/${id}`}
    >
      <div>
        <Image
          className='rounded-md'
          src='/evt-placeholder.jpeg'
          alt={title}
          width={150}
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
