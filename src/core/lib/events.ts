'use server';

import { eq } from 'drizzle-orm';
import { db } from '../db/config';
import { eventTable } from '../db/tables';
import { InsertEvent } from '../types';
import { utapi } from './utapi';
import { revalidatePath } from 'next/cache';

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

export async function addEvent(data: InsertEvent) {
  try {
    await db.insert(eventTable).values(data);
    revalidatePath('/');
    return true;
  } catch (e) {
    console.log(e);
    return new Error();
  }
}
