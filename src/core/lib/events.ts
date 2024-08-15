'use server';

import { eq } from 'drizzle-orm';
import { db } from '../db/config';
import { eventTable } from '../db/tables';

export async function getAllEvents() {
  try {
    const evts = await db.select().from(eventTable);
    return evts;
  } catch (e) {
    return new Error();
  }
}

export async function getEventById(id: string) {
  try {
    const [evnt] = await db
      .select()
      .from(eventTable)
      .where(eq(eventTable.id, id));
    return evnt;
  } catch (e) {
    return new Error();
  }
}
