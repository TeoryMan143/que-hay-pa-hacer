import { createSelectSchema } from 'drizzle-zod';
import { eventTable } from './db/tables';

export const selectEventSchema = createSelectSchema(eventTable);
