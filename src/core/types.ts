import { z } from 'zod';
import {
  formEventSchema,
  insertEventSchema,
  selectEventSchema,
} from './schemas';

export type CEvent = z.infer<typeof selectEventSchema> & {
  latlng: {
    lat: number;
    lng: number;
  };
};

export type InsertEvent = z.infer<typeof insertEventSchema> & {
  latlng: {
    lat: number;
    lng: number;
  };
};

export type FormEvent = z.infer<typeof formEventSchema>;
