import { z } from 'zod';
import { selectEventSchema } from './schemas';

export type CEvent = z.infer<typeof selectEventSchema> & {
  latlng: {
    lat: number;
    lng: number;
  };
};
