import EventCard from '@/components/event-card';
import { eventsPlaceh } from '@/core/mock';

export default function Home() {
  return (
    <div className='mb-24 flex flex-col gap-3 p-2 mt-16'>
      {eventsPlaceh.map(e => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  );
}
