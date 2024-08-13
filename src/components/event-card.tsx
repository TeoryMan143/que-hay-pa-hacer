import Image from 'next/image';
import React from 'react';

type Props = {
  event: CEvent;
};

function EventCard({ event: { title, image, date } }: Props) {
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div>
      <div>
        <Image src={image} alt='' />
      </div>
      <div>
        <h3>{title}</h3>
        <div>
          <p>Lugar: (TODO)</p>
          <p>Hora: {time}</p>
          <p>Fecha: {date.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
