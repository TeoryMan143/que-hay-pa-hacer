import EventCard from '@/components/event-card';

export default function Home() {
  return (
    <div>
      <EventCard
        event={{
          title: 'Titulo',
          date: new Date(),
          image: '/evt-placeholder.jpeg',
        }}
      />
    </div>
  );
}
