import Image from 'next/image';
import React from 'react';

type Props = {
  event: CEvent;
};

function EventCard({ event: { title, image, date } }: Props) {
  const minutes = date.getMinutes();
  const time = `${date.getHours()}:${minutes < 10 ? '0' + minutes : minutes}`;

  return (
    <div className='flex gap-3 p-2 items-center'>
      <div>
        <Image
          className='rounded-md'
          src={image}
          alt=''
          width={150}
          height={150}
        />
      </div>
      <div>
        <h3 className='mb-1 font-bold'>{title}</h3>
        <div>
          <p>Lugar: (TODO)</p>
          <p>Hora: {time}</p>
          <p>
            Fecha:{' '}
            {date.toLocaleDateString('es-CO', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
