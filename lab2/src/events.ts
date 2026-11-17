import { Attendee } from './attendee';

export type EventCategory = 'lecture' | 'workshop' | 'meetup';

export interface CampusEvent {
  id: string;
  title: string;
  startsAt: Date;
  seatsLeft: number;
  capacity: number;
  category: EventCategory;
  price: number;
}

export const events: CampusEvent[] = [
  {
    id: 'ux-lecture',
    title: 'Відкрита лекція: Мобільний UX',
    startsAt: new Date('2026-10-01T16:00:00'),
    seatsLeft: 20,
    capacity: 100,
    category: 'lecture',
    price: 0,
  },
  {
    id: 'ts-workshop',
    title: 'Воркшоп: TypeScript з нуля',
    startsAt: new Date('2026-10-05T14:00:00'),
    seatsLeft: 12,
    capacity: 30,
    category: 'workshop',
    price: 50,
  },
  {
    id: 'career-meetup',
    title: 'Мітап: Кар’єра в IT',
    startsAt: new Date('2026-10-10T18:00:00'),
    seatsLeft: 0,
    capacity: 40,
    category: 'meetup',
    price: 20,
  },
  {
    id: 'ai-workshop',
    title: 'Воркшоп: Вступ до ШІ',
    startsAt: new Date('2026-10-15T15:00:00'),
    seatsLeft: 8,
    capacity: 25,
    category: 'workshop',
    price: 80,
  },
];

export function getOpenEvents(events: CampusEvent[]): CampusEvent[] {
  return events.filter((event) => event.seatsLeft > 0);
}

export function getEventsByCategory(
  events: CampusEvent[],
  category: EventCategory,
): CampusEvent[] {
  return events.filter((event) => event.category === category);
}

export function findEventById(
  events: CampusEvent[],
  id: string,
): CampusEvent | undefined {
  return events.find((event) => event.id === id);
}

export function getEventTitles(events: CampusEvent[]): string[] {
  return events.map((event) => event.title);
}

// Додаткове завдання. Повертає оновлену подію (а не void), щоб викликач
// одразу бачив нову кількість місць без повторного пошуку.
export function registerForEvent(
  attendee: Attendee,
  event: CampusEvent,
): CampusEvent {
  if (event.seatsLeft === 0) {
    throw new Error(`На подію "${event.title}" немає вільних місць`);
  }
  if (!attendee.register(event.id)) {
    throw new Error(`Учасник ${attendee.name} уже зареєстрований на цю подію`);
  }
  event.seatsLeft -= 1;
  return event;
}
