import { CEvent } from '@/core/types';

function EventData({ event: { date, title } }: { event: CEvent }) {
  const minutes = date.getMinutes();
  const time = `${date.getHours()}:${minutes < 10 ? '0' + minutes : minutes}`;
  const formatedDate = date.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <h3 className='mb-1 font-bold text-center text-lg'>{title}</h3>
      <div>
        <p>
          <span className='font-semibold'>Lugar:</span> (TODO)
        </p>
        <p>
          <span className='font-semibold'>Hora:</span> {time}
        </p>
        <p>
          <span className='font-semibold'>Fecha:</span> {formatedDate}
        </p>
      </div>
    </>
  );
}

export default EventData;
