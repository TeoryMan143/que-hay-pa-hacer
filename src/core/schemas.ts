import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { eventTable } from './db/tables';

export const selectEventSchema = createSelectSchema(eventTable);

export const insertEventSchema = createInsertSchema(eventTable);

export const formEventSchema = insertEventSchema.omit({
  latlng: true,
  image: true,
});
