import { CEvent } from './types';

export const eventsPlaceh: CEvent[] = [
  {
    id: 'a',
    title: 'Feria del Libro',
    latlng: { lat: 40.416775, lng: -3.70379 },
    date: new Date('2024-09-15'),
    image: 'feria_libro.jpg',
    description:
      'Una feria anual donde se presentan las últimas novedades literarias.',
  },
  {
    id: 'b',
    title: 'Concierto de Rock',
    latlng: { lat: 41.385064, lng: 2.173404 },
    date: new Date('2024-10-01'),
    image: 'concierto_rock.jpg',
    description: 'Un concierto de rock con bandas locales e internacionales.',
  },
  {
    id: 'c',
    title: 'Exposición de Arte Moderno',
    latlng: { lat: 39.469907, lng: -0.376288 },
    date: new Date('2024-08-20'),
    image: 'expo_arte_moderno.jpg',
    description:
      'Una exposición que muestra las obras más innovadoras de arte moderno.',
  },
  {
    id: 'd',
    title: 'Festival de Cine Independiente',
    latlng: { lat: 40.712776, lng: -74.005974 },
    date: new Date('2024-11-05'),
    image: 'festival_cine.jpg',
    description: 'Un festival dedicado al cine independiente de todo el mundo.',
  },
  {
    id: 'e',
    title: 'Conferencia de Tecnología',
    latlng: { lat: 37.774929, lng: -122.419418 },
    date: new Date('2024-09-30'),
    image: 'conferencia_tecnologia.jpg',
    description: 'Una conferencia sobre las últimas tendencias en tecnología.',
  },
  {
    id: 'f',
    title: 'Maratón Solidario',
    latlng: { lat: 48.856614, lng: 2.352222 },
    date: new Date('2024-10-10'),
    image: 'maraton_solidario.jpg',
    description: 'Una maratón para recaudar fondos para obras de caridad.',
  },
  {
    id: 'g',
    title: 'Feria de la Ciencia',
    latlng: { lat: 51.507351, lng: -0.127758 },
    date: new Date('2024-09-25'),
    image: 'feria_ciencia.jpg',
    description:
      'Una feria para que los jóvenes presenten sus proyectos científicos.',
  },
];
