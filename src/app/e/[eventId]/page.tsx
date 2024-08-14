import EventData from '@/components/event-data';
import Image from 'next/image';
import { permanentRedirect } from 'next/navigation';
import { eventsPlaceh } from '@/core/mock';
import Link from 'next/link';

type Props = {
  params: {
    eventId: string;
  };
};

function EventPage({ params: { eventId } }: Props) {
  const sEvent = eventsPlaceh.find(e => e.id === eventId);

  if (!sEvent) permanentRedirect('/');

  const { title, image, description } = sEvent;

  return (
    <div className='flex p-5 bg-white flex-col gap-5 mt-16'>
      <div className='flex items-center'>
        <div className='p-2'>
          <Image
            className='rounded-md'
            src='/evt-placeholder.jpeg'
            alt={title}
            width={150}
            height={150}
          />
        </div>
        <div>
          <EventData event={sEvent} />
        </div>
      </div>
      <p className='text-slate-500'>{description}</p>
      <Link
        href='#'
        className='flex justify-center gap-3 text-slate-600 hover:text-blue-700 active:bg-gray-200 transition-colors p-2 rounded-sm'
      >
        {' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 20 20'
          className='text-3xl'
        >
          <path
            fill='currentColor'
            d='M19.367 18.102L18 14h-1.5l.833 4H2.667l.833-4H2L.632 18.102C.285 19.146.9 20 2 20h16c1.1 0 1.715-.854 1.367-1.898M15 5A5 5 0 1 0 5 5c0 4.775 5 10 5 10s5-5.225 5-10m-7.7.06A2.699 2.699 0 0 1 10 2.361a2.699 2.699 0 1 1 0 5.399a2.7 2.7 0 0 1-2.7-2.7'
          />
        </svg>{' '}
        <span className='text-2xl'>Ver ubicacion</span>
      </Link>
    </div>
  );
}

export default EventPage;
