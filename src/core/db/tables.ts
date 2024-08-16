import { json, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const eventTable = pgTable('event', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  latlng: json('latlng').notNull().$type<{ lat: number; lng: number }>(),
  date: timestamp('date', { withTimezone: true, mode: 'date' }).notNull(),
  image: text('image').notNull(),
});
