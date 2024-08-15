import { getAddressFromCoords } from '@/core/lib/location';
import { CEvent } from '@/core/types';

async function EventData({
  event: { date, title, latlng },
}: {
  event: CEvent;
}) {
  const minutes = date.getMinutes();
  const time = `${date.getHours()}:${minutes < 10 ? '0' + minutes : minutes}`;
  const formatedDate = date.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const address = await getAddressFromCoords(latlng);

  return (
    <>
      <h3 className='mb-1 font-bold text-center text-lg'>{title}</h3>
      <div>
        <p>
          <span className='font-semibold'>Lugar:</span> {address}
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
