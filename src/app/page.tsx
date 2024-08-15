import EventCard from '@/components/event-card';
import { getAllEvents } from '@/core/lib/events';

export default async function Home() {
  const events = await getAllEvents();

  if (events instanceof Error) {
    return <p>Unexpected error</p>;
  }

  return (
    <div className='mb-24 flex flex-col gap-3 p-2'>
      {events.map(e => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  );
}
